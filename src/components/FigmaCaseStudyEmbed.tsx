import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

export function FigmaCaseStudyEmbed({
  title,
  slug,
}: {
  title: string
  slug: string
}) {
  const [status, setStatus] = useState<CaseStudyStatus>(() => getCaseStudyStatus(slug))

  useEffect(() => subscribeCaseStudyStatus(slug, setStatus), [slug])

  return (
    <div className="relative bg-[#0a0a0a]">
      <div className="sticky top-0 z-40 flex h-[65px] items-center gap-3 border-b border-white/10 bg-[#0a0a0a] px-4">
        <div className="rounded-full bg-white px-4 py-2">
          <BackLink />
        </div>
        <p className="text-[14px] font-normal text-white/80">{title}</p>
      </div>
      {status !== 'ready' ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 top-[65px] z-[14] flex items-center justify-center bg-[#0a0a0a]">
          <div className="pointer-events-auto max-w-[420px] px-6 text-center">
            {status === 'loading' ? (
              <p className="text-[15px] font-normal text-white/70">Opening case study…</p>
            ) : (
              <>
                <p className="text-[15px] font-normal text-white/70">
                  This case study is taking longer than expected to load.
                </p>
                <Link
                  to="/projects"
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-normal text-white hover:opacity-70"
                >
                  ← Back to Work
                </Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
