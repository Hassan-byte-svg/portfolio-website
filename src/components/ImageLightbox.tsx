import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export function ImageLightbox({
  src,
  alt,
  children,
  className = '',
}: {
  src: string
  alt: string
  children: ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left ${className}`}
        aria-label={`Zoom ${alt || 'image'}`}
      >
        {children}
      </button>
      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              role="dialog"
              aria-modal="true"
              aria-label="Image zoom"
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-[14px] font-normal text-[#0a0a0a]"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <img
                src={src}
                alt={alt}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[92vh] max-w-[min(100%,1600px)] object-contain"
                style={{ imageRendering: 'auto' }}
              />
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
