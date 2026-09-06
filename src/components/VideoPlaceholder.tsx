type Props = {
  src?: string
  className?: string
}

export function VideoPlaceholder({ src, className = '' }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] bg-fill ${className}`}
      aria-label="Video placeholder"
    >
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          controls
          preload="metadata"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-black/15 bg-white/70">
          <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[16px] border-y-transparent border-l-ink" />
        </span>
      </div>
    </div>
  )
}
