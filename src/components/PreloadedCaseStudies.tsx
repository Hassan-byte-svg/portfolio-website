import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/content'
import { figmaProtoSrc } from './FigmaCaseStudyEmbed'

const WARMUP_EVENT = 'warmup-case-study'
const MAX_MOUNTED = 2
const HEADER_HEIGHT = 65

export function warmupCaseStudy(slug: string) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(WARMUP_EVENT, { detail: slug }))
}

function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug && project.figmaNodeId)
}

export function PreloadedCaseStudies() {
  const { pathname } = useLocation()
  const activeSlug = pathname.startsWith('/projects/')
    ? pathname.slice('/projects/'.length).split('/')[0]
    : null
  const [warmedSlugs, setWarmedSlugs] = useState<string[]>([])
  const [pixelRatio, setPixelRatio] = useState(() => window.devicePixelRatio || 1)

  useEffect(() => {
    const syncRatio = () => setPixelRatio(window.devicePixelRatio || 1)
    window.addEventListener('resize', syncRatio)
    return () => window.removeEventListener('resize', syncRatio)
  }, [])

  useEffect(() => {
    const onWarmup = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail
      if (!slug || !projectBySlug(slug)) return
      setWarmedSlugs((current) => (current.includes(slug) ? current : [...current, slug]))
    }

    window.addEventListener(WARMUP_EVENT, onWarmup)
    return () => window.removeEventListener(WARMUP_EVENT, onWarmup)
  }, [])

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/projects') return

    const timeoutId = window.setTimeout(() => {
      warmupCaseStudy(projects[0]?.slug ?? '')
    }, 600)

    return () => window.clearTimeout(timeoutId)
  }, [pathname])

  const mountedSlugs = useMemo(() => {
    const ordered: string[] = []
    const add = (slug: string | null | undefined) => {
      if (!slug || ordered.includes(slug) || !projectBySlug(slug)) return
      ordered.push(slug)
    }

    add(activeSlug)
    for (let i = warmedSlugs.length - 1; i >= 0; i -= 1) {
      add(warmedSlugs[i])
      if (ordered.length >= MAX_MOUNTED) break
    }

    return ordered.slice(0, MAX_MOUNTED)
  }, [activeSlug, warmedSlugs])

  return (
    <>
      {mountedSlugs.map((slug) => {
        const project = projectBySlug(slug)
        if (!project) return null

        const active = slug === activeSlug

        return (
          <div
            key={slug}
            aria-hidden={!active}
            style={{
              position: 'fixed',
              left: 0,
              top: HEADER_HEIGHT,
              width: '100%',
              height: `calc(100vh - ${HEADER_HEIGHT}px)`,
              overflow: 'hidden',
              zIndex: active ? 10 : -1,
              opacity: active ? 1 : 0,
              pointerEvents: active ? 'auto' : 'none',
            }}
          >
            <iframe
              title={project.caseStudyTitle}
              src={figmaProtoSrc(project.figmaNodeId)}
              allowFullScreen
              loading="eager"
              className="border-0"
              ref={(frame) => {
                if (frame) frame.setAttribute('fetchpriority', active ? 'high' : 'low')
              }}
              style={{
                width: `${pixelRatio * 100}%`,
                height: `${pixelRatio * 100}%`,
                transform: `scale(${1 / pixelRatio})`,
                transformOrigin: 'top left',
                display: 'block',
              }}
            />
          </div>
        )
      })}
    </>
  )
}
