import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { site } from '../data/content'

const links = [
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="label-nav text-ink" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `label-nav transition-colors hover:text-ink ${isActive ? 'text-ink' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={site.cvPath}
              download="Waleed-Khan-Updated-CV.pdf"
              className="label-nav transition-colors hover:text-ink"
            >
              Resume
            </a>
          </nav>
          <div className="hidden md:block">
            <ThemeToggle compact />
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-line bg-canvas px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="label-nav py-1"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={site.cvPath}
              download="Waleed-Khan-Updated-CV.pdf"
              className="label-nav py-1"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
            <ThemeToggle label />
          </div>
        </nav>
      ) : null}
    </header>
  )
}
