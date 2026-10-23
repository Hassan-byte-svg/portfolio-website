type Props = {
  eyebrow?: string
  title: string
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
    <div className={align === 'center' ? 'mx-auto max-w-[820px] text-center' : 'max-w-[820px]'}>
      {eyebrow ? (
        <p className="mb-3 text-[24px] font-normal text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="heading-section">{title}</h2>
      {description ? <p className="heading-sub mt-4">{description}</p> : null}
    </div>
  )
}
