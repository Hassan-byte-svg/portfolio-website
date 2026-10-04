import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  footer,
}: {
  eyebrow?: string
  title: ReactNode
  description?: string
  actions?: ReactNode
  footer?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute left-1/2 top-6 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#8aa0ff]/25 blur-[100px]" />
      <div className="relative mx-auto max-w-[860px] text-center">
        {eyebrow ? (
          <p className="mb-3 text-[12px] font-normal uppercase tracking-[0.18em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-[40px] font-light leading-[1.12] tracking-[-0.03em] text-ink sm:text-[58px] lg:text-[68px]">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.7] text-muted sm:text-[17px]">
            {description}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {actions}
          </div>
        ) : null}
      </div>
      {footer}
    </section>
  )
}
