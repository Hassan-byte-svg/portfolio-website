type Props = {
  src?: string
  alt?: string
  className?: string
  rounded?: string
  priority?: boolean
  fit?: 'cover' | 'contain'
}

export function ImagePlaceholder({
  src,
  alt = '',
  className = '',
  rounded = 'rounded-[16px]',
  priority = false,
  fit = 'cover',
}: Props) {
  const keepsOwnBackground = className.includes('bg-')

  return (
    <div
      className={`media-frame ${rounded} ${className}`}
      style={keepsOwnBackground ? undefined : { backgroundColor: '#ffffff' }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          draggable={false}
          className={fit === 'contain' ? 'is-contain' : undefined}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
      ) : null}
    </div>
  )
}
