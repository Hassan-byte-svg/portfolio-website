import { Link } from 'react-router-dom'
import { BackLink } from './BackLink'
import { ImageLightbox } from './ImageLightbox'
import { figmaOpenUrl } from './FigmaCaseStudyView'

/**
 * Sharp scrollable case study from a Figma PNG export.
 * Never CSS-upscales past the export’s natural width (scaled Figma iframes
 * were softening text, logos, and signs while scrolling).
 */
export function RasterCaseStudyView({
  title,
  nodeId,
  fullSrc,
  naturalWidth,
  naturalHeight,
  backTo = '/projects',
  showFigmaLink = true,
}: {
  title: string
  nodeId: string
  fullSrc: string
  naturalWidth: number
  naturalHeight: number
  backTo?: string
  showFigmaLink?: boolean
}) {
  const openUrl = figmaOpenUrl(nodeId, 'design')

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
          {showFigmaLink ? (
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-[13px] font-normal text-white/70 transition-opacity hover:text-white"
            >
              Open in Figma ↗
            </a>
          ) : null}
          <Link
            to={backTo}
            className="hidden shrink-0 text-[13px] font-normal text-white/50 transition-opacity hover:text-white sm:inline"
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
    </div>
  )
}
