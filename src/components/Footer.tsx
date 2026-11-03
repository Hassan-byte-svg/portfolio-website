import { Button } from './Button'
import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="mt-24 bg-night text-white">
      <div className="relative overflow-hidden px-5 py-16 text-center sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] mx-auto h-[420px] max-w-[720px] rounded-full bg-[#4f67ff]/25 blur-[90px]" />
        <div className="relative mx-auto max-w-[720px]">
          <h2 className="heading-section text-white">
            Let’s create something amazing together
          </h2>
          <p className="heading-sub mx-auto mt-5 max-w-[640px] text-white/70">
            Open to new collaborations, research conversations, and product work.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="light">
              Get in touch
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5 text-white/80">
            <a
              href={site.social.behance}
              aria-label="Behance"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <BehanceIcon />
            </a>
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a href={site.social.x} aria-label="X" className="hover:text-white">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[13px] text-white/50 sm:px-8">
        © {site.year} {site.name}
      </div>
    </footer>
  )
}

function BehanceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.99 5.375 5.426.078.659.112 1.287.112 1.828 0 .31-.022.551-.056.771h-8.21c.13 1.86 1.467 2.951 3.385 2.951 1.551 0 2.562-.668 2.962-1.651h2.631zm-7.686-3.82h5.456c-.139-1.503-1.16-2.48-2.72-2.48-1.63 0-2.57 1.01-2.736 2.48zM6.42 16.91c.942 0 1.66-.449 2.15-1.199l2.18 1.32c-.89 1.49-2.47 2.47-4.33 2.47-3.12 0-5.42-2.23-5.42-5.49 0-3.27 2.3-5.51 5.42-5.51 2.98 0 4.89 1.85 4.89 5.01v.5H3.18c.18 1.64 1.46 2.9 3.24 2.9zm-.27-6.84c-1.18 0-2.15.73-2.39 1.96h4.72c-.17-1.2-1.05-1.96-2.33-1.96z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.5h3.3l-7.2 8.2L24 22.5h-7.4l-5.8-7.6-6.6 7.6H.9l7.7-8.8L0 1.5h7.6l5.2 6.9 6.1-6.9zm-1.2 18.9h1.8L6.4 3.4H4.4l13.3 17z" />
    </svg>
  )
}
