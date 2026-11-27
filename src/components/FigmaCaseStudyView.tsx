import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { NextProjectCard } from './NextProjectCard'

const FILE_KEY = 'CUlWCD1Ol9KMpnGnjXfHaE'

export function figmaProtoSrc(nodeId: string) {
  return `https://embed.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&footer=false&embed-host=share`
}

/** Design-file embed — shows the full designed case study frames (not the interactive proto flow). */
export function figmaDesignSrc(nodeId: string) {
  return `https://embed.figma.com/design/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&embed-host=share&footer=false&theme=light`
}

export function figmaOpenUrl(nodeId: string, mode: 'proto' | 'design' = 'proto') {
  if (mode === 'design') {
    return `https://www.figma.com/design/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}`
  }
  return `https://www.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1`
}

/**
 * Figma case study (AI Reply / ThinkFlow).
 * Next Project card is a normal footer after the embed — not docked/fixed to the viewport.
 */
export function FigmaCaseStudyView({
  title,
  nodeId,
  backTo = '/projects',
  mode = 'proto',
  chrome = 'dark',
  nextProject,
}: {
  title: string
  nodeId: string
  backTo?: string
  mode?: 'proto' | 'design'
  chrome?: 'dark' | 'orange'
  nextProject?: Project
}) {
  const src = mode === 'design' ? figmaDesignSrc(nodeId) : figmaProtoSrc(nodeId)
  const isOrange = chrome === 'orange'
  const scrollerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const backToTop = () => {
    scrollerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    const frame = iframeRef.current
    if (frame) frame.src = src
  }

  return (
    <div
      ref={scrollerRef}
      className={`fixed inset-0 z-50 overflow-y-auto ${isOrange ? 'bg-[#fffaf4]' : 'bg-[#0a0a0a]'}`}
    >
      <div
        className={`sticky top-0 z-10 flex h-[65px] items-center gap-3 border-b px-4 ${
          isOrange
            ? 'border-black/5 bg-[#fffaf4] text-[#0F172B]'
            : 'border-white/10 bg-[#0a0a0a]'
        }`}
      >
        <div className="rounded-full bg-white px-4 py-2 shadow-sm">
          <BackLink fallback={backTo} />
        </div>
        <p
          className={`min-w-0 flex-1 truncate text-[14px] font-normal ${
            isOrange ? 'text-[#0F172B]/70' : 'text-white/80'
          }`}
        >
          {title}
        </p>
        <Link
          to={backTo}
          className={`shrink-0 text-[13px] font-normal transition-opacity sm:inline ${
            isOrange ? 'text-[#0F172B]/45 hover:text-[#0F172B]' : 'text-white/50 hover:text-white'
          }`}
        >
          Work
        </Link>
      </div>

      <iframe
        ref={iframeRef}
        title={title}
        src={src}
        allowFullScreen
        className={`block w-full border-0 ${isOrange ? 'bg-[#fffaf4]' : 'bg-[#0a0a0a]'}`}
        style={{ height: 'calc(100dvh - 65px)', colorScheme: 'only light' }}
      />

      {/* In-flow footer — appears after scrolling past the case study */}
      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}

      <CaseStudyFloatControls
        tone={isOrange ? 'orange' : 'dark'}
        alwaysShowTop
        onBackToTop={backToTop}
      />
    </div>
  )
}
