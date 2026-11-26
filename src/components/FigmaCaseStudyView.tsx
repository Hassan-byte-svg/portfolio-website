import { Link } from 'react-router-dom'
import { BackLink } from './BackLink'

const FILE_KEY = 'CUlWCD1Ol9KMpnGnjXfHaE'

export function figmaProtoSrc(nodeId: string) {
  return `https://embed.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&footer=false&embed-host=share`
}

export function figmaOpenUrl(nodeId: string) {
  return `https://www.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1`
}

/**
 * Full-viewport Figma prototype — same clear case study the designer built in Figma.
 * No blocking loader: the frame paints as soon as the route opens.
 */
export function FigmaCaseStudyView({
  title,
  nodeId,
  backTo = '/projects',
}: {
  title: string
  nodeId: string
  backTo?: string
}) {
  const src = figmaProtoSrc(nodeId)
  const openUrl = figmaOpenUrl(nodeId)

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a]">
      <div className="flex h-[65px] shrink-0 items-center gap-3 border-b border-white/10 bg-[#0a0a0a] px-4">
        <div className="rounded-full bg-white px-4 py-2">
          <BackLink fallback={backTo} />
        </div>
        <p className="min-w-0 flex-1 truncate text-[14px] font-normal text-white/80">{title}</p>
        <a
          href={openUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-[13px] font-normal text-white/70 transition-opacity hover:text-white"
        >
          Open in Figma ↗
        </a>
        <Link
          to={backTo}
          className="hidden shrink-0 text-[13px] font-normal text-white/50 transition-opacity hover:text-white sm:inline"
        >
          Work
        </Link>
      </div>

      <iframe
        title={title}
        src={src}
        allowFullScreen
        className="h-full w-full flex-1 border-0 bg-[#0a0a0a]"
        style={{ colorScheme: 'only light' }}
      />
    </div>
  )
}
