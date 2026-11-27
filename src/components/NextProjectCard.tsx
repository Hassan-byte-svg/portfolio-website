import { Link } from 'react-router-dom'
import type { Project, TagTone } from '../data/content'

const themeBg: Record<TagTone, string> = {
  blue: '#00A8C5',
  green: '#75B798',
  orange: '#F39243',
}

/**
 * In-flow “Next Project” footer thumbnail — theme colour + name of the next case study.
 * Not position:fixed; sits at the end of the page after case study content.
 */
export function NextProjectCard({
  project,
  from,
}: {
  project: Project
  from?: string
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      state={from ? { from } : undefined}
      className="group relative z-0 block w-full text-center text-white transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
      style={{ background: themeBg[project.tagTone] }}
      aria-label={`Next project: ${project.nextCard.heading}`}
    >
      <div className="mx-auto flex min-h-[220px] max-w-[920px] flex-col items-center justify-center px-6 py-16 sm:min-h-[280px] sm:py-20">
        <p className="text-[14px] font-semibold tracking-[0.02em] sm:text-[15px]">Next Project</p>
        <h2 className="mt-4 text-[36px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[48px] lg:text-[56px]">
          {project.nextCard.heading}
        </h2>
        <span
          className="mt-5 h-px w-[min(100%,280px)] bg-white/90 sm:w-[320px]"
          aria-hidden="true"
        />
        <p className="mt-5 max-w-[420px] text-[15px] font-normal leading-[1.5] text-white/95 sm:text-[16px]">
          {project.nextCard.subtitle}
        </p>
      </div>
    </Link>
  )
}
