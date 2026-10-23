import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-[920px] text-center' : 'max-w-[920px]'}>
      {eyebrow ? <p className="heading-eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="heading-section">{title}</h2>
      {description ? <p className="heading-sub mt-4">{description}</p> : null}
    </div>
  )
}
