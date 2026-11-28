import type { CSSProperties, ReactNode } from 'react'

type CaseStudyScreenProps = {
  children: ReactNode
  className?: string
  /**
   * Original (pre-invert) background behind the device — same as the section plate.
   * After the counter-invert, corners match the themed page instead of turning black.
   */
  plate: string
  /** Outer device radius in px, or any CSS radius string. */
  radius?: number | string
  style?: CSSProperties
}

/**
 * Product UI that must keep designed colors when the case-study body is inverted.
 * Clips to the device curve and fills corner “ears” with `plate`.
 */
export function CaseStudyScreen({
  children,
  className = '',
  plate,
  radius = 40,
  style,
}: CaseStudyScreenProps) {
  return (
    <div
      className={`case-study-screen overflow-hidden ${className}`}
      style={{
        background: plate,
        borderRadius: typeof radius === 'number' ? `${radius}px` : radius,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
