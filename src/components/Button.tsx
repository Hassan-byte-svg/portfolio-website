import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light'

type Props = {
  to?: string
  href?: string
  download?: boolean | string
  children: ReactNode
  variant?: Variant
  className?: string
}

const styles: Record<Variant, string> = {
  primary: 'bg-ink text-canvas hover:opacity-90',
  secondary: 'bg-canvas text-ink border border-ink/80 hover:bg-soft',
  ghost: 'bg-transparent text-ink hover:opacity-70',
  light: 'bg-canvas text-ink hover:bg-soft',
}

export function Button({
  to,
  href,
  download,
  children,
  variant = 'primary',
  className = '',
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-normal tracking-[-0.01em] transition-colors ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} download={download || undefined}>
        {children}
      </a>
    )
  }

  return <span className={cls}>{children}</span>
}
