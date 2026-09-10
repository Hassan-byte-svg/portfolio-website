import { BackLink } from './BackLink'

const FILE_KEY = 'CUlWCD1Ol9KMpnGnjXfHaE'

export function FigmaCaseStudyEmbed({
  nodeId,
  title,
}: {
  nodeId: string
  title: string
}) {
  const src = `https://embed.figma.com/proto/${FILE_KEY}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&footer=false&embed-host=share`

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <div className="sticky top-0 z-20 flex items-center gap-3 border-b border-white/10 bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur">
        <div className="rounded-full bg-white px-4 py-2">
          <BackLink />
        </div>
        <p className="text-[14px] font-normal text-white/80">{title}</p>
      </div>
      <iframe
        title={title}
        src={src}
        className="block w-full border-0"
        style={{ height: '16000px' }}
        allowFullScreen
      />
    </div>
  )
}
