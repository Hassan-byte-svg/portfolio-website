import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { figmaOpenUrl } from './FigmaCaseStudyView'

/**
 * Full POS case study from Figma node 40-3055 — the complete designed frame
 * exported and shown end-to-end so nothing from the file is missing on the site.
 */
export function PosCaseStudy({
  project,
  backTo = '/projects',
}: {
  project: Project
  backTo?: string
}) {
  const openUrl = figmaOpenUrl(project.figmaNodeId, 'design')
  const fullSrc = '/assets/images/projects/pde-auto-group/case-study-full.png'

  return (
    <div className="min-h-screen overflow-y-auto bg-[#f7f7f7] text-[#0F172B]">
      <div className="sticky top-0 z-30 border-b border-black/5 bg-white/95 px-4 py-3 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-[960px] items-center gap-3">
          <div className="rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
            <BackLink fallback={backTo} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] font-normal text-[#0F172B]">
              {project.caseStudyTitle}
            </p>
            <p className="truncate text-[12px] font-light text-[#6B6B6B]">
              Full case study from Figma
            </p>
          </div>
          <a
            href={openUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-[13px] font-normal text-[#E08A3C] hover:opacity-70"
          >
            Open in Figma ↗
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-0 pb-6 pt-6 sm:px-6">
        <div className="overflow-hidden bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:rounded-[16px] sm:border sm:border-black/5">
          <img
            src={fullSrc}
            alt="Complete POS Auto Spare Parts Web Application case study designed in Figma"
            width={1200}
            height={24454}
            decoding="async"
            fetchPriority="high"
            loading="eager"
            className="mx-auto block h-auto w-full max-w-[1200px]"
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-[960px] flex-col items-center justify-between gap-4 px-5 pb-14 sm:flex-row sm:px-6">
        <Link
          to="/projects"
          className="text-[16px] font-normal text-[#0F172B] transition-opacity hover:opacity-60"
        >
          ← Back to Work
        </Link>
        <a
          href={openUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#E08A3C] px-7 text-[15px] font-normal text-white transition-opacity hover:opacity-90"
        >
          Open full file in Figma ↗
        </a>
      </div>
    </div>
  )
}
