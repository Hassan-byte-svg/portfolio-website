import { ImagePlaceholder } from './ImagePlaceholder'

export function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string
  name: string
  role: string
  avatar: string
}) {
  return (
    <article className="flex h-full flex-col rounded-[18px] border border-line bg-canvas p-7 sm:p-8">
      <p className="font-serif text-[40px] leading-none text-[#C4C4D4]" aria-hidden="true">
        “
      </p>
      <p className="heading-sub mt-4 flex-1">
        {quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <ImagePlaceholder src={avatar} rounded="rounded-full" className="h-11 w-11 shrink-0 bg-[#D9D9D9]" />
        <div>
          <p className="text-[16px] font-normal leading-tight text-ink">{name}</p>
          <p className="mt-0.5 text-[14px] font-normal leading-tight text-muted">{role}</p>
        </div>
      </div>
    </article>
  )
}
