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
  primary: 'bg-ink text-white hover:opacity-90',
  secondary: 'bg-canvas text-ink border border-ink hover:bg-soft',
  ghost: 'bg-transparent text-muted hover:text-ink',
  light: 'bg-white text-ink hover:bg-soft',
}

export function Button({
  to,
  href,
  download,
  children,
  variant = 'primary',
  className = '',
}: Props) {
  const cls = `inline-flex h-[61px] w-[229px] items-center justify-center gap-2 whitespace-nowrap rounded-full text-[24px] font-normal tracking-[-0.01em] transition-colors ${styles[variant]} ${className}`

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
