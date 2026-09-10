import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Work' },
  { to: '/simple', label: 'Simple Page' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-6 sm:px-8">
        <Link to="/" className="text-[15px] font-normal tracking-[-0.02em]" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-[14px] font-normal tracking-[-0.01em] text-ink/75 transition-colors hover:text-ink ${isActive ? 'text-ink' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
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
      {open ? (
        <nav className="border-t border-line bg-white px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-[16px] py-1"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
