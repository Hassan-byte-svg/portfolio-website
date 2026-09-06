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
    <article className="rounded-[16px] border border-line bg-white p-6 sm:p-7">
      <p className="font-serif text-[42px] leading-none text-black/20">“</p>
      <p className="mt-2 min-h-[96px] text-[15px] leading-[1.7] text-muted">
        {quote || '\u00a0'}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <ImagePlaceholder src={avatar} rounded="rounded-full" className="h-10 w-10 shrink-0" />
        <div>
          <p className="text-[14px] font-medium">{name || '\u00a0'}</p>
          <p className="text-[13px] text-muted">{role || '\u00a0'}</p>
        </div>
      </div>
    </article>
  )
}
