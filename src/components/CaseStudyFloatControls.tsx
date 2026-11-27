import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * Bottom-right floating control: page-up only (next case study uses NextProjectCard).
 */
export function CaseStudyFloatControls({
  tone = 'dark',
  alwaysShowTop = false,
  onBackToTop,
}: {
  tone?: 'dark' | 'orange'
  /** Figma embeds have no page scroll — keep page-up visible. */
  alwaysShowTop?: boolean
  /** Optional override (e.g. reset Figma iframe / scroller to the start). */
  onBackToTop?: () => void
}) {
  const [mounted, setMounted] = useState(false)
  const [showTop, setShowTop] = useState(alwaysShowTop)
  const isOrange = tone === 'orange'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (alwaysShowTop) {
      setShowTop(true)
      return
    }

    const readY = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    const onScroll = () => setShowTop(readY() > 120)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll, true)
    }
  }, [alwaysShowTop])

  const scrollToTop = () => {
    if (onBackToTop) {
      onBackToTop()
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const btnBase =
    'flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const btnTone = isOrange
    ? 'bg-[#F5A623] text-white focus-visible:outline-[#F5A623] hover:brightness-105'
    : 'bg-white text-[#0a0a0a] focus-visible:outline-white hover:opacity-95'

  if (!mounted) return null

  return createPortal(
    <div className="pointer-events-none fixed bottom-5 right-4 z-[80] sm:bottom-8 sm:right-6">
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
    </div>,
    document.body,
  )
}
