import { BackLink } from './BackLink'

const FILE_KEY = 'CUlWCD1Ol9KMpnGnjXfHaE'

export function figmaProtoSrc(nodeId: string) {
  return `https://embed.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&footer=false&embed-host=share`
}

export function FigmaCaseStudyEmbed({ title }: { title: string }) {
  return (
    <div className="relative bg-[#0a0a0a]">
      <div className="sticky top-0 z-20 flex items-center gap-3 border-b border-white/10 bg-[#0a0a0a] px-4 py-3">
        <div className="rounded-full bg-white px-4 py-2">
          <BackLink />
        </div>
        <p className="text-[14px] font-normal text-white/80">{title}</p>
      </div>
    </div>
  )
}
