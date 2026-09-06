type Props = {
  src?: string
  alt?: string
  className?: string
  rounded?: string
}

export function ImagePlaceholder({
  src,
  alt = '',
  className = '',
  rounded = 'rounded-[16px]',
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-fill ${rounded} ${className}`}
      aria-label={alt || 'Image placeholder'}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
      ) : null}
    </div>
  )
}
