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
  primary:
    'bg-ink text-white duration-300 hover:opacity-90 [:is(html[data-theme=dark])_&]:text-[#0a0a0a] [:is(html[data-theme=dark])_&]:hover:bg-black [:is(html[data-theme=dark])_&]:hover:text-white [:is(html[data-theme=dark])_&]:hover:opacity-100',
  secondary:
    'border border-ink bg-canvas text-ink duration-300 hover:bg-soft [:is(html[data-theme=dark])_&]:hover:border-black [:is(html[data-theme=dark])_&]:hover:bg-black [:is(html[data-theme=dark])_&]:hover:text-white',
  ghost: 'bg-transparent text-muted duration-300 hover:text-ink',
  light: 'bg-white text-[#0a0a0a] duration-300 hover:bg-black hover:text-white',
}

export function Button({
  to,
  href,
  download,
  children,
  variant = 'primary',
  className = '',
}: Props) {
  const cls = `inline-flex h-12 min-w-[168px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 text-[16px] font-normal tracking-[-0.01em] transition-colors ${styles[variant]} ${className}`

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
