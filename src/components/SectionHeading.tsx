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
    <div className={align === 'center' ? 'mx-auto max-w-[720px] text-center' : 'max-w-[720px]'}>
      {eyebrow ? (
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-[36px] leading-[1.15] tracking-[-0.02em] text-ink sm:text-[44px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[16px] leading-[1.7] text-muted">{description}</p>
      ) : null}
    </div>
  )
}
