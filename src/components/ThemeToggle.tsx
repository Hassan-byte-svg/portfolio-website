import { useTheme } from '../theme/ThemeProvider'

export function ThemeToggle({
  label,
  compact,
}: {
  label?: boolean
  compact?: boolean
}) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={
        compact
          ? 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-soft'
          : 'inline-flex items-center justify-center gap-2 rounded-full border border-ink/80 bg-canvas px-5 py-3 text-[15px] font-normal tracking-[-0.01em] text-ink transition-colors hover:bg-soft'
      }
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      {label ? <span>{isDark ? 'Light mode' : 'Dark mode'}</span> : null}
    </button>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.2 6.2l1.4 1.4M16.4 16.4l1.4 1.4M17.8 6.2l-1.4 1.4M7.6 16.4l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
