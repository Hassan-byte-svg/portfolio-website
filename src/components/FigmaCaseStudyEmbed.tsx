import { useEffect, useState } from 'react'
import { projects } from '../data/content'
import { BackLink } from './BackLink'
import {
  getCaseStudyStatus,
  subscribeCaseStudyStatus,
  type CaseStudyStatus,
} from './PreloadedCaseStudies'

const FILE_KEY = 'CUlWCD1Ol9KMpnGnjXfHaE'

export function figmaProtoSrc(nodeId: string) {
  return `https://embed.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&footer=false&embed-host=share`
}

export function figmaOpenUrl(nodeId: string) {
  return `https://www.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1`
}

export function FigmaCaseStudyEmbed({
  title,
  slug,
}: {
  title: string
  slug: string
}) {
  const [status, setStatus] = useState<CaseStudyStatus>(() => getCaseStudyStatus(slug))
  const nodeId = projects.find((project) => project.slug === slug)?.figmaNodeId
  const openUrl = nodeId ? figmaOpenUrl(nodeId) : null

  useEffect(() => subscribeCaseStudyStatus(slug, setStatus), [slug])

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <div className="sticky top-0 z-40 flex h-[65px] items-center gap-3 border-b border-white/10 bg-[#0a0a0a] px-4">
        <div className="rounded-full bg-white px-4 py-2">
          <BackLink />
        </div>
        <p className="min-w-0 flex-1 truncate text-[14px] font-normal text-white/80">{title}</p>
        {openUrl ? (
          <a
            href={openUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-[13px] font-normal text-white/70 transition-opacity hover:text-white hover:opacity-100"
          >
            Open in Figma ↗
          </a>
        ) : null}
      </div>

      {/* Non-blocking progress only — never covers the preloaded iframe */}
      {status === 'loading' ? (
        <div
          className="pointer-events-none fixed inset-x-0 top-[65px] z-[16] h-[2px] overflow-hidden bg-white/10"
          aria-hidden="true"
        >
          <div className="case-study-progress h-full w-1/3 bg-white/70" />
        </div>
      ) : null}

      {status === 'error' && openUrl ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[16] flex justify-center px-4">
          <div className="pointer-events-auto max-w-[420px] rounded-2xl border border-white/10 bg-[#121212]/95 px-5 py-4 text-center shadow-lg backdrop-blur-sm">
            <p className="text-[14px] font-normal text-white/75">
              Still loading in the background. You can keep waiting or open it in Figma.
            </p>
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-[14px] font-normal text-white hover:opacity-70"
            >
              Open in Figma ↗
            </a>
          </div>
        </div>
      ) : null}
    </div>
  )
}
