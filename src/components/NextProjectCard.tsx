import { Link } from 'react-router-dom'
import type { Project, TagTone } from '../data/content'

const themeBg: Record<TagTone, string> = {
  blue: '#00A0C2',
  green: '#75B798',
  orange: '#F39243',
}

/**
 * Full-bleed “Next Project” end thumbnail — theme colour + name of the destination case study.
 */
export function NextProjectCard({
  project,
  from,
  compact = false,
}: {
  project: Project
  from?: string
  /** Shorter banner under a fixed Figma viewport. */
  compact?: boolean
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      state={from ? { from } : undefined}
      className="group block w-full shrink-0 text-center text-white transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
      style={{ background: themeBg[project.tagTone] }}
      aria-label={`Next project: ${project.nextCard.heading}`}
    >
      <div
        className={`mx-auto flex max-w-[920px] flex-col items-center justify-center px-6 ${
          compact
            ? 'min-h-[148px] py-8 sm:min-h-[168px] sm:py-10'
            : 'min-h-[220px] py-16 sm:min-h-[280px] sm:py-20'
        }`}
      >
        <p className="text-[13px] font-semibold tracking-[0.02em] sm:text-[15px]">Next Project</p>
        <h2
          className={`mt-3 font-semibold leading-[1.15] tracking-[-0.02em] ${
            compact
              ? 'text-[28px] sm:text-[36px]'
              : 'mt-4 text-[36px] sm:text-[48px] lg:text-[56px]'
          }`}
        >
          {project.nextCard.heading}
        </h2>
        <span
          className={`h-px bg-white/90 ${
            compact ? 'mt-3 w-[min(100%,200px)] sm:w-[240px]' : 'mt-5 w-[min(100%,280px)] sm:w-[320px]'
          }`}
          aria-hidden="true"
        />
        <p
          className={`max-w-[420px] font-normal leading-[1.5] text-white/95 ${
            compact ? 'mt-3 text-[13px] sm:text-[14px]' : 'mt-5 text-[15px] sm:text-[16px]'
          }`}
        >
          {project.nextCard.subtitle}
        </p>
      </div>
    </Link>
  )
}
