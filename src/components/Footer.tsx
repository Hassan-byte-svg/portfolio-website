import { Button } from './Button'
import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="mt-24 bg-night text-white">
      <div className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] mx-auto h-[420px] max-w-[720px] rounded-full bg-[#4f67ff]/25 blur-[90px]" />
        <div className="relative mx-auto max-w-[720px]">
          <h2 className="font-serif text-[40px] leading-[1.12] tracking-[-0.03em] sm:text-[52px]">
            Let’s create something amazing together
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.7] text-white/70">
            Open to new collaborations, research conversations, and product work.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="light">
              Get in touch
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5 text-white/80">
            <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-white">
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
