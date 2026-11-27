import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { ImageLightbox } from './ImageLightbox'

/**
 * Sharp scrollable case study from a Figma PNG export.
 * Used so page scroll (and back-to-top) works — Figma iframes cannot report scroll.
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
        <div
          className="mx-auto flex items-center gap-3"
          style={{ maxWidth: naturalWidth }}
        >
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

      <div className="mx-auto px-4 py-6 sm:px-8">
        <div className="mx-auto" style={{ maxWidth: naturalWidth }}>
          <ImageLightbox src={fullSrc} alt={title}>
            <img
              src={fullSrc}
              alt=""
              width={naturalWidth}
              height={naturalHeight}
              decoding="async"
              fetchPriority="high"
              draggable={false}
              className="block h-auto w-full bg-white"
              style={{
                maxWidth: naturalWidth,
                imageRendering: 'auto',
              }}
            />
          </ImageLightbox>
        </div>
      </div>

      <CaseStudyFloatControls next={nextProject} from={backTo} tone="dark" />
    </div>
  )
}
