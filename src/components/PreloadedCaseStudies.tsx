import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/content'
import { figmaProtoSrc } from './FigmaCaseStudyEmbed'

const WARMUP_EVENT = 'warmup-case-study'
const MAX_MOUNTED = 2

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
          <iframe
            key={slug}
            title={project.caseStudyTitle}
            src={figmaProtoSrc(project.figmaNodeId)}
            allowFullScreen
            loading="eager"
            className="border-0"
            ref={(frame) => {
              if (frame) frame.setAttribute('fetchpriority', active ? 'high' : 'low')
            }}
            aria-hidden={!active}
            style={
              active
                ? { display: 'block', width: '100%', height: '24000px' }
                : {
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '24000px',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: -1,
                  }
            }
          />
        )
      })}
    </>
  )
}
