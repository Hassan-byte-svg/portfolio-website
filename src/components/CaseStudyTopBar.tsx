import { BackLink } from './BackLink'
import { ThemeToggle } from './ThemeToggle'

type CaseStudyTopBarProps = {
  title: string
  backTo?: string
  titleColor: string
  border: string
  background: string
  /** Inner content width / padding classes (defaults to full case-study shell). */
  shellClassName?: string
}

/**
 * Fixed top chrome for case studies — stays visible while the page scrolls.
 */
export function CaseStudyTopBar({
  title,
  backTo,
  titleColor,
  border,
  background,
  shellClassName = 'mx-auto flex w-full max-w-[1680px] items-center gap-3 px-[clamp(1.25rem,3.5vw,4.5rem)]',
}: CaseStudyTopBarProps) {
  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-40 w-full border-b py-3 transition-colors duration-200"
        style={{ borderColor: border, background }}
      >
        <div className={shellClassName}>
          <div className="rounded-full bg-white px-4 py-2 shadow-sm">
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal" style={{ color: titleColor }}>
            {title}
          </p>
          <div className="rounded-full bg-white shadow-sm">
            <ThemeToggle compact />
          </div>
        </div>
      </div>
      {/* Reserve space so content does not sit under the fixed bar */}
      <div className="h-[61px] shrink-0" aria-hidden="true" />
    </>
  )
}
