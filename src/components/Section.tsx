import type { ReactNode } from 'react'

type Props = {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: Props) {
  return (
    <section id={id} className={`px-5 sm:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  )
}
