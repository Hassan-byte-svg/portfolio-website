import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/content'
import { figmaProtoSrc } from './FigmaCaseStudyEmbed'

const WARMUP_EVENT = 'warmup-case-study'
const STATUS_EVENT = 'case-study-status'
const HOST_ID = 'case-study-frames'
const READY_TIMEOUT_MS = 20000

export type CaseStudyStatus = 'loading' | 'ready' | 'error'

export function warmupCaseStudy(slug: string) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(WARMUP_EVENT, { detail: slug }))
}

export function getCaseStudyStatus(slug: string): CaseStudyStatus {
  const slot = document.querySelector<HTMLElement>(`#${HOST_ID} [data-slug="${slug}"]`)
  if (!slot) return 'loading'
  if (slot.dataset.ready === 'true') return 'ready'
  if (slot.dataset.error === 'true') return 'error'
  return 'loading'
}

export function subscribeCaseStudyStatus(
  slug: string,
  onStatus: (status: CaseStudyStatus) => void,
) {
  const emit = () => onStatus(getCaseStudyStatus(slug))
  emit()
  const onEvent = (event: Event) => {
    const detail = (event as CustomEvent<{ slug: string; status: CaseStudyStatus }>).detail
    if (!detail || detail.slug !== slug) return
    onStatus(detail.status)
  }
  window.addEventListener(STATUS_EVENT, onEvent)
  return () => window.removeEventListener(STATUS_EVENT, onEvent)
}

function publishStatus(slug: string, status: CaseStudyStatus) {
  window.dispatchEvent(new CustomEvent(STATUS_EVENT, { detail: { slug, status } }))
}

function slots() {
  return [...document.querySelectorAll<HTMLElement>(`#${HOST_ID} [data-slug]`)]
}

function getFrame(slot: HTMLElement) {
  return slot.querySelector('iframe')
}

function wireFrame(slot: HTMLElement, frame: HTMLIFrameElement, slug: string) {
  if (slot.dataset.wired === 'true') {
    if (slot.dataset.ready === 'true') publishStatus(slug, 'ready')
    return
  }
  slot.dataset.wired = 'true'

  const markReady = () => {
    slot.dataset.ready = 'true'
    slot.dataset.error = 'false'
    publishStatus(slug, 'ready')
  }

  if (slot.dataset.ready === 'true') {
    markReady()
  } else {
    frame.addEventListener('load', markReady)
  }

  window.setTimeout(() => {
    if (slot.dataset.ready === 'true') return
    // Soft timeout — do not hide the iframe; only surface a fallback hint
    slot.dataset.error = 'true'
    publishStatus(slug, 'error')
  }, READY_TIMEOUT_MS)
}

function assignSrc(frame: HTMLIFrameElement, nodeId: string) {
  const src = figmaProtoSrc(nodeId)
  const current = frame.getAttribute('src')
  if (current === src) return
  // Avoid blank→src flicker if early HTML already set the same URL
  if (!current || current === 'about:blank') {
    frame.src = src
  }
}

function ensureFrames() {
  const host = document.getElementById(HOST_ID)
  if (!host) return

  for (const project of projects) {
    if (!project.figmaNodeId) continue
    let slot = host.querySelector<HTMLElement>(`[data-slug="${project.slug}"]`)
    if (!slot) {
      slot = document.createElement('div')
      slot.dataset.slug = project.slug
      slot.dataset.nodeId = project.figmaNodeId
      slot.setAttribute('aria-hidden', 'true')
      slot.style.cssText =
        'position:fixed;left:0;right:0;top:65px;bottom:0;overflow:hidden;pointer-events:none;z-index:1;opacity:0;background:#0a0a0a;color-scheme:light;'
      const backdrop = document.createElement('div')
      backdrop.style.cssText = 'position:absolute;inset:0;background:#0a0a0a;'
      slot.appendChild(backdrop)
      const frame = document.createElement('iframe')
      frame.title = project.caseStudyTitle
      frame.setAttribute('allowfullscreen', 'true')
      frame.loading = 'eager'
      frame.setAttribute('fetchpriority', 'low')
      frame.style.cssText =
        'width:100%;height:100%;border:0;display:block;background:#0a0a0a;color-scheme:light;'
      // Defer src until prioritize/warmup so one study gets bandwidth first
      frame.dataset.src = figmaProtoSrc(project.figmaNodeId)
      slot.appendChild(frame)
      host.appendChild(slot)
    } else {
      slot.dataset.nodeId = project.figmaNodeId
      const frame = getFrame(slot)
      if (frame && !frame.dataset.src) {
        frame.dataset.src = figmaProtoSrc(project.figmaNodeId)
      }
    }
    const frame = getFrame(slot)
    if (frame) wireFrame(slot, frame, project.slug)
  }
}

function loadFrame(slug: string, priority: 'high' | 'low' = 'high') {
  const slot = document.querySelector<HTMLElement>(`#${HOST_ID} [data-slug="${slug}"]`)
  if (!slot) return
  const frame = getFrame(slot)
  const nodeId = slot.dataset.nodeId || projects.find((p) => p.slug === slug)?.figmaNodeId
  if (!frame || !nodeId) return

  const pending = frame.dataset.src
  const hasSrc = Boolean(frame.getAttribute('src'))
  if (!hasSrc && pending) {
    frame.src = pending
  } else if (!hasSrc) {
    assignSrc(frame, nodeId)
  }

  frame.setAttribute('fetchpriority', priority)
  frame.loading = 'eager'
  wireFrame(slot, frame, slug)
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

function showSlot(slug: string | null, opened: boolean) {
  for (const slot of slots()) {
    const on = slot.dataset.slug === slug
    slot.style.transition = 'opacity 0.25s ease'
    slot.style.zIndex = opened && on ? '15' : on ? '4' : '1'
    slot.style.pointerEvents = opened && on ? 'auto' : 'none'
    // Keep the warm frame opacity 1 so it can paint before click; hide the rest
    slot.style.opacity = on ? '1' : '0'
    slot.setAttribute('aria-hidden', on ? 'false' : 'true')
    if (on) {
      loadFrame(slot.dataset.slug!, opened ? 'high' : 'low')
    } else {
      const frame = getFrame(slot)
      frame?.setAttribute('fetchpriority', 'low')
    }
  }
}

function scheduleBackgroundLoads(prefer: string | null) {
  const order = projects
    .filter((project) => project.figmaNodeId)
    .map((project) => project.slug)
    .filter((slug) => slug !== prefer)

  const loadNext = (index: number) => {
    if (index >= order.length) return
    loadFrame(order[index], 'low')
    window.setTimeout(() => loadNext(index + 1), 900)
  }

  const start = () => loadNext(0)
  const idle = window.requestIdleCallback?.bind(window)
  if (idle) idle(start, { timeout: 2500 })
  else window.setTimeout(start, 1200)
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
    ensureFrames()

    if (activeSlug) {
      // Raise immediately — never wait for iframe load to show content
      showSlot(activeSlug, true)
      publishStatus(activeSlug, getCaseStudyStatus(activeSlug))
      scheduleBackgroundLoads(activeSlug)
      return
    }

    // Off case-study routes: keep one study warm, load others in the background
    const primary = projects.find((project) => project.figmaNodeId)?.slug ?? null
    if (primary) showSlot(primary, false)
    scheduleBackgroundLoads(primary)

    const onWarmup = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail
      if (!slug) return
      showSlot(slug, false)
      loadFrame(slug, 'high')
    }
    window.addEventListener(WARMUP_EVENT, onWarmup)
    return () => window.removeEventListener(WARMUP_EVENT, onWarmup)
  }, [activeSlug])

  return null
}
