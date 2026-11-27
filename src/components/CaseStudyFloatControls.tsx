import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import type { Project } from '../data/content'

/**
 * Bottom-right floating controls for every case study:
 * - Back to top — appears with animation after scroll; smooth scroll only (no reload)
 * - Next case study icon
 */
export function CaseStudyFloatControls({
  next,
  from,
  tone = 'dark',
  /** Scrollable element; defaults to the window. */
  scrollRoot = null,
}: {
  next?: Project
  from?: string
  tone?: 'dark' | 'orange'
  scrollRoot?: HTMLElement | null
}) {
  const [mounted, setMounted] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const isOrange = tone === 'orange'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const readY = () => {
      if (scrollRoot) return scrollRoot.scrollTop
      return (
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      )
    }

    const onScroll = () => setShowTop(readY() > 120)

    onScroll()

    if (scrollRoot) {
      scrollRoot.addEventListener('scroll', onScroll, { passive: true })
      return () => scrollRoot.removeEventListener('scroll', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollRoot])

  const scrollToTop = () => {
    if (scrollRoot) {
      scrollRoot.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const btnBase =
    'flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const btnTone = isOrange
    ? 'bg-[#F5A623] text-white focus-visible:outline-[#F5A623] hover:brightness-105'
    : 'bg-white text-[#0a0a0a] focus-visible:outline-white hover:opacity-95'

  if (!mounted) return null

  return createPortal(
    <div className="pointer-events-none fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      <button
        type="button"
        onClick={scrollToTop}
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
        className={`pointer-events-auto ${btnBase} ${btnTone} ${
          showTop
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-3 scale-90 opacity-0'
        }`}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 19V5M12 5l-6 6M12 5l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {next ? (
        <Link
          to={`/projects/${next.slug}`}
          state={from ? { from } : undefined}
          className={`pointer-events-auto ${btnBase} ${btnTone}`}
          aria-label={`Next case study: ${next.title}`}
          title={`Next: ${next.title}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : null}
    </div>,
    document.body,
  )
}
