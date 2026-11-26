import { Link } from 'react-router-dom'
import { BackLink } from './BackLink'

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
 * Full-viewport Figma case study.
 * - proto: interactive prototype (AI Reply / ThinkFlow)
 * - design: full designed frames as drawn in Figma (POS orange case study)
 */
export function FigmaCaseStudyView({
  title,
  nodeId,
  backTo = '/projects',
  mode = 'proto',
  chrome = 'dark',
}: {
  title: string
  nodeId: string
  backTo?: string
  mode?: 'proto' | 'design'
  chrome?: 'dark' | 'orange'
}) {
  const src = mode === 'design' ? figmaDesignSrc(nodeId) : figmaProtoSrc(nodeId)
  const openUrl = figmaOpenUrl(nodeId, mode)
  const isOrange = chrome === 'orange'

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col ${isOrange ? 'bg-[#fffaf4]' : 'bg-[#0a0a0a]'}`}
    >
      <div
        className={`flex h-[65px] shrink-0 items-center gap-3 border-b px-4 ${
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
        <a
          href={openUrl}
          target="_blank"
          rel="noreferrer"
          className={`shrink-0 text-[13px] font-normal transition-opacity hover:opacity-80 ${
            isOrange ? 'text-[#e3941a]' : 'text-white/70 hover:text-white'
          }`}
        >
          Open in Figma ↗
        </a>
        <Link
          to={backTo}
          className={`hidden shrink-0 text-[13px] font-normal transition-opacity sm:inline ${
            isOrange ? 'text-[#0F172B]/45 hover:text-[#0F172B]' : 'text-white/50 hover:text-white'
          }`}
        >
          Work
        </Link>
      </div>

      <iframe
        title={title}
        src={src}
        allowFullScreen
        className={`h-full w-full flex-1 border-0 ${isOrange ? 'bg-[#fffaf4]' : 'bg-[#0a0a0a]'}`}
        style={{ colorScheme: 'only light' }}
      />
    </div>
  )
}
