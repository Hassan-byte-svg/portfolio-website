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
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-canvas">
      <div className="flex flex-1 flex-col px-7 pb-6 pt-7">
        <QuoteMark />
        <p className="mt-4 flex-1 text-[16px] font-normal leading-[1.65] text-[#9AA3C0]">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-3 border-t border-line px-7 py-5">
        <ImagePlaceholder
          src={avatar}
          rounded="rounded-full"
          className="h-11 w-11 shrink-0 bg-[#D4D4D4]"
        />
        <div>
          <p className="text-[15px] font-medium leading-tight text-ink">{name}</p>
          <p className="mt-0.5 text-[13px] font-normal leading-tight text-[#8B93A7]">
            {role}
          </p>
        </div>
      </div>
    </article>
  )
}

function QuoteMark() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="#B4B9CF" aria-hidden="true">
      <path d="M11.2 0 4.6 22H0L6.7 0h4.5Zm16.8 0L21.4 22h-4.6L23.5 0H28Z" />
    </svg>
  )
}
