import type { Project } from '../data/content'
import { useTheme } from '../theme/ThemeProvider'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { NextProjectCard } from './NextProjectCard'
import { ThemeToggle } from './ThemeToggle'

/**
 * Scrollable Figma PNG export (same as Vercel deploy) + theme invert + Next Project footer.
 * `nativeTheme` is the design’s baked-in look; when the site theme differs, the export is inverted.
 */
export function RasterCaseStudyView({
  title,
  fullSrc,
  naturalWidth,
  naturalHeight,
  backTo = '/projects',
  nextProject,
  nativeTheme = 'dark',
}: {
  title: string
  fullSrc: string
  naturalWidth: number
  naturalHeight: number
  backTo?: string
  nextProject?: Project
  nativeTheme?: 'dark' | 'light'
}) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const invertStudy = theme !== nativeTheme

  const pageBg = isDark ? '#0a0a0a' : '#ffffff'
  const titleColor = isDark ? 'rgba(255,255,255,0.8)' : 'rgba(15,23,43,0.75)'
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,43,0.08)'

  return (
    <div className="min-h-screen w-full transition-colors duration-200" style={{ background: pageBg }}>
      <div
        className="sticky top-0 z-30 w-full border-b px-4 py-3 transition-colors duration-200 sm:px-8"
        style={{ borderColor: border, background: pageBg }}
      >
        <div className="mx-auto flex w-full items-center gap-3" style={{ maxWidth: Math.max(naturalWidth, 1200) }}>
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

      <div className="relative mx-auto w-full" style={{ maxWidth: naturalWidth }}>
        <img
          src={fullSrc}
          alt=""
          width={naturalWidth}
          height={naturalHeight}
          decoding="async"
          fetchPriority="high"
          draggable={false}
          className="block h-auto w-full transition-[filter] duration-200"
          style={{
            maxWidth: naturalWidth,
            background: pageBg,
            filter: invertStudy ? 'invert(1) hue-rotate(180deg)' : 'none',
          }}
        />
      </div>

      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}

      <CaseStudyFloatControls tone={isDark ? 'dark' : 'orange'} />
    </div>
  )
}
