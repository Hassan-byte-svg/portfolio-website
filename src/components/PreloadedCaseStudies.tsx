import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/content'
import { figmaProtoSrc } from './FigmaCaseStudyEmbed'

const WARMUP_EVENT = 'warmup-case-study'
const HOST_ID = 'case-study-frames'

export function warmupCaseStudy(slug: string) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(WARMUP_EVENT, { detail: slug }))
}

function ensureFrames() {
  const host = document.getElementById(HOST_ID)
  if (!host) return
  for (const project of projects) {
    if (!project.figmaNodeId || host.querySelector(`[data-slug="${project.slug}"]`)) continue
    const slot = document.createElement('div')
    slot.dataset.slug = project.slug
    slot.setAttribute('aria-hidden', 'true')
    slot.style.cssText =
      'position:fixed;left:0;right:0;top:65px;bottom:0;overflow:hidden;pointer-events:none;z-index:1;background:#0a0a0a;color-scheme:light;'
    const frame = document.createElement('iframe')
    frame.title = project.caseStudyTitle
    frame.src = figmaProtoSrc(project.figmaNodeId)
    frame.setAttribute('allowfullscreen', 'true')
    frame.loading = 'eager'
    frame.setAttribute('fetchpriority', 'high')
    slot.appendChild(frame)
    host.appendChild(slot)
  }
}

function fitSlots() {
  for (const slot of slots()) {
    slot.style.left = '0'
    slot.style.right = '0'
    slot.style.top = '65px'
    slot.style.bottom = '0'
    slot.style.width = 'auto'
    slot.style.height = 'auto'
  }
  document.querySelectorAll<HTMLIFrameElement>(`#${HOST_ID} iframe`).forEach((frame) => {
    frame.style.width = '100%'
    frame.style.height = '100%'
    frame.style.transform = 'none'
    frame.style.colorScheme = 'only light'
    frame.style.border = '0'
    frame.style.display = 'block'
    frame.style.background = '#0a0a0a'
  })
}

function slots() {
  return [...document.querySelectorAll<HTMLElement>(`#${HOST_ID} [data-slug]`)]
}

export function PreloadedCaseStudies() {
  const { pathname } = useLocation()
  const activeSlug = pathname.startsWith('/projects/')
    ? pathname.slice('/projects/'.length).split('/')[0]
    : null

  useEffect(() => {
    ensureFrames()
    fitSlots()
    const onResize = () => fitSlots()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const show = (slug: string | null, opened: boolean) => {
      for (const slot of slots()) {
        const on = slot.dataset.slug === slug
        slot.style.zIndex = opened && on ? '15' : on ? '4' : '1'
        slot.style.pointerEvents = opened && on ? 'auto' : 'none'
        slot.setAttribute('aria-hidden', on ? 'false' : 'true')
      }
    }

    if (activeSlug) {
      show(activeSlug, true)
      return
    }

    let index = 0
    let pinned = ''
    const order = projects.filter((project) => project.figmaNodeId).map((project) => project.slug)
    const bringForward = (slug: string) => show(slug, false)
    const cycle = () => {
      if (!order.length || pinned) return
      bringForward(order[index % order.length])
      index += 1
    }
    cycle()
    const timer = window.setInterval(cycle, 1600)
    const onWarmup = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail
      if (!slug) return
      pinned = slug
      bringForward(slug)
    }
    window.addEventListener(WARMUP_EVENT, onWarmup)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener(WARMUP_EVENT, onWarmup)
    }
  }, [activeSlug])

  return null
}
