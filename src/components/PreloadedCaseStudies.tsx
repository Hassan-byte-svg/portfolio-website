import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/content'
import { figmaProtoSrc } from './FigmaCaseStudyEmbed'

const WARMUP_EVENT = 'warmup-case-study'
const STAGE_ID = 'case-study-stage'

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
  const slots = useRef<Record<string, HTMLDivElement | null>>({})
  const [warmedSlugs, setWarmedSlugs] = useState<string[]>([])
  const [pixelRatio, setPixelRatio] = useState(() => Math.min(window.devicePixelRatio || 1, 2))

  useEffect(() => {
    const syncRatio = () => setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
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
    const start = () => {
      setWarmedSlugs(projects.filter((project) => project.figmaNodeId).map((project) => project.slug))
    }

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(start, { timeout: 700 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(start, 350)
    return () => window.clearTimeout(timeoutId)
  }, [])

  const mountedSlugs = useMemo(() => {
    const slugs = [...warmedSlugs]
    if (activeSlug && projectBySlug(activeSlug) && !slugs.includes(activeSlug)) {
      slugs.unshift(activeSlug)
    }
    return slugs
  }, [activeSlug, warmedSlugs])

  useLayoutEffect(() => {
    const place = (slug: string | null) => {
      for (const project of projects) {
        const slot = slots.current[project.slug]
        if (!slot) continue
        const active = project.slug === slug
        if (!active) {
          if (slot.dataset.active !== 'false') {
            slot.dataset.active = 'false'
            slot.style.transform = 'translate3d(-140vw, 0, 0)'
          }
          continue
        }

        const stage = document.getElementById(STAGE_ID)
        if (!stage) {
          slot.dataset.active = 'false'
          slot.style.transform = 'translate3d(-140vw, 0, 0)'
          continue
        }

        const box = stage.getBoundingClientRect()
        const size = `${Math.round(box.width)}x${Math.round(box.height)}`
        if (slot.dataset.size !== size) {
          slot.dataset.size = size
          slot.style.width = `${box.width}px`
          slot.style.height = `${box.height}px`
        }
        if (slot.dataset.active !== 'true') slot.dataset.active = 'true'
        const position = `${Math.round(box.left)}|${Math.round(box.top)}`
        if (slot.dataset.pos !== position) {
          slot.dataset.pos = position
          slot.style.transform = `translate3d(${box.left}px, ${box.top}px, 0)`
        }
      }
    }

    let frame = 0
    const schedule = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => place(activeSlug && projectBySlug(activeSlug) ? activeSlug : null))
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    document.addEventListener('visibilitychange', schedule)
    const stage = document.getElementById(STAGE_ID)
    const observer = stage ? new ResizeObserver(schedule) : null
    observer?.observe(stage as HTMLElement)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('visibilitychange', schedule)
      observer?.disconnect()
    }
  }, [activeSlug, mountedSlugs])

  return (
    <div aria-hidden={activeSlug ? undefined : true}>
      {mountedSlugs.map((slug) => {
        const project = projectBySlug(slug)
        if (!project) return null
        const active = slug === activeSlug

        return (
          <div
            key={slug}
            ref={(node) => {
              slots.current[slug] = node
            }}
            className="case-study-slot"
          >
            <iframe
              title={project.caseStudyTitle}
              src={figmaProtoSrc(project.figmaNodeId)}
              allowFullScreen
              loading="eager"
              ref={(frame) => {
                if (frame) frame.setAttribute('fetchpriority', active ? 'high' : 'low')
              }}
              style={{
                width: `${pixelRatio * 100}%`,
                height: `${pixelRatio * 100}%`,
                transform: `scale(${1 / pixelRatio})`,
                transformOrigin: 'top left',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
