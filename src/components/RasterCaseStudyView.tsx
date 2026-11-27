import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { NextProjectCard } from './NextProjectCard'

/**
 * Scrollable designed case study (Figma export) + in-flow Next Project footer.
 * No lightbox / zoom — reads as the study, not a clickable picture.
 */
export function RasterCaseStudyView({
  title,
  fullSrc,
  naturalWidth,
  naturalHeight,
  backTo = '/projects',
  nextProject,
}: {
  title: string
  fullSrc: string
  naturalWidth: number
  naturalHeight: number
  backTo?: string
  nextProject?: Project
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0a0a] px-4 py-3 sm:px-8">
        <div className="mx-auto flex items-center gap-3" style={{ maxWidth: naturalWidth }}>
          <div className="rounded-full bg-white px-4 py-2 shadow-sm">
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal text-white/80">{title}</p>
          <Link
            to={backTo}
            className="shrink-0 text-[13px] font-normal text-white/50 transition-opacity hover:text-white"
          >
            Work
          </Link>
        </div>
      </div>

      {/* Flush to footer — no bottom padding / gap */}
      <div className="mx-auto w-full" style={{ maxWidth: naturalWidth }}>
        <img
          src={fullSrc}
          alt=""
          width={naturalWidth}
          height={naturalHeight}
          decoding="async"
          fetchPriority="high"
          draggable={false}
          className="block h-auto w-full bg-[#0a0a0a]"
          style={{ maxWidth: naturalWidth, imageRendering: 'auto' }}
        />
      </div>

      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}

      <CaseStudyFloatControls tone="dark" />
    </div>
  )
}
