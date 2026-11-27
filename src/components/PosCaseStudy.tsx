import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { ImageLightbox } from './ImageLightbox'
import { UserJourneyMap } from './UserJourneyMap'
import { figmaOpenUrl } from './FigmaCaseStudyView'

function Em({ children }: { children: string }) {
  return <span className="font-normal text-[#F5A623]">{children}</span>
}

const processSteps = [
  { label: 'Empathize', n: '01' },
  { label: 'Define', n: '02' },
  { label: 'Ideate', n: '03' },
  { label: 'Prototyping', n: '04' },
  { label: 'Testing', n: '05' },
] as const

/**
 * Sharp POS case study: HTML text + HTML journey map + zoomable screenshots.
 * The full Figma raster is kept as a capped reference (never upscaled past natural width).
 */
export function PosCaseStudy({
  project,
  backTo = '/projects',
}: {
  project: Project
  backTo?: string
}) {
  const openUrl = figmaOpenUrl(project.figmaNodeId, 'design')
  const cover = project.image
  const fullSrc =
    project.caseStudyFull?.src ??
    '/assets/images/projects/pde-auto-group/case-study-full.png'
  const fullW = project.caseStudyFull?.width ?? 1200
  const fullH = project.caseStudyFull?.height ?? 24454

  return (
    <div className="min-h-screen bg-white text-[#0F172B] antialiased">
      <div className="sticky top-0 z-30 border-b border-black/5 bg-white px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-[1120px] items-center gap-3">
          <div className="rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal text-[#0F172B]/80">
            {project.caseStudyTitle}
          </p>
          <a
            href={openUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-[13px] font-normal text-[#F5A623] hover:opacity-70"
          >
            Open in Figma ↗
          </a>
        </div>
      </div>

      <header className="mx-auto max-w-[900px] px-5 pb-6 pt-12 text-center sm:px-8">
        <h1 className="text-[40px] font-light tracking-[-0.03em] sm:text-[52px]">
          UX UI{' '}
          <span className="rounded-full bg-[#FFF3E0] px-4 py-1 font-normal text-[#F5A623]">
            Project
          </span>
        </h1>
      </header>

      <section className="mx-auto max-w-[900px] space-y-10 px-5 pb-10 sm:px-8">
        <div className="flex gap-4">
          <span className="mt-1 text-[22px] text-[#F5A623]" aria-hidden="true">
            ⚑
          </span>
          <div>
            <h2 className="text-[20px] font-normal text-[#F5A623]">Aim:</h2>
            <p className="mt-2 text-[16px] font-light leading-[1.7] text-[#555]">
              Develop a <Em>customer-focused</Em> POS system to improve efficiency and
              competitiveness of offline <Em>auto parts stores</Em>.
            </p>
          </div>
        </div>
        <div className="flex gap-4 sm:ml-8">
          <span className="mt-1 text-[22px] text-[#F5A623]" aria-hidden="true">
            ●
          </span>
          <div>
            <h2 className="text-[20px] font-normal text-[#F5A623]">Problem Statement:</h2>
            <p className="mt-2 text-[16px] font-light leading-[1.7] text-[#555]">
              The automotive parts industry is <Em>evolving rapidly</Em>, with changing consumer
              demands, technology advancements, and competitive pressures.{' '}
              <Em>Traditional offline stores often struggle to keep up</Em>, lacking tools to manage
              inventory, streamline transactions, and enhance customer experiences. Without a modern
              POS system, they risk falling behind competitors and{' '}
              <Em>failing to meet customer needs</Em>.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="mt-1 text-[22px] text-[#F5A623]" aria-hidden="true">
            ⌖
          </span>
          <div>
            <h2 className="text-[20px] font-normal text-[#F5A623]">Scope:</h2>
            <p className="mt-2 text-[16px] font-light leading-[1.7] text-[#555]">
              This project targets the challenges faced by urban offline{' '}
              <Em>auto parts stores, particularly in Abbottabad, Pakistan</Em>. Through thorough
              research and interviews in the region, we aim to understand the specific needs and
              pain points of local retailers. These insights will guide the creation of a customized
              POS solution, offering a roadmap to enhance operational efficiency,{' '}
              <Em>improve customer satisfaction</Em>, and <Em>foster business growth in this sector</Em>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-12 text-center sm:px-8">
        <h2 className="text-[28px] font-normal text-[#F5A623] sm:text-[34px]">Design Process</h2>
        <div className="mt-8 overflow-hidden rounded-[24px] border-2 border-[#F5A623] bg-[#FFF8F0] px-4 py-8 sm:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#F5A623] text-[15px] font-medium text-[#F5A623]">
                  {step.n}
                </span>
                <p className="text-[14px] font-medium text-[#F5A623]">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-10 sm:px-8">
        <h2 className="text-center text-[32px] font-light tracking-[-0.02em] sm:text-[40px]">
          Primary{' '}
          <span className="rounded-full bg-[#FFF3E0] px-4 py-1 font-normal text-[#F5A623]">
            Research
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-[16px] font-light leading-[1.7] text-[#555]">
          I conducted interviews with some <Em>20 auto spare part shop owners and employees</Em> for
          primary research, to gain insights into their challenges, obstacles, and strategies. The
          aim was to gather firsthand information directly from stakeholders in the industry to
          inform the development of a more effective point of sale (POS) software tailored to their
          needs.
        </p>
      </section>

      <UserJourneyMap />

      <section className="mx-auto max-w-[900px] px-5 py-12 sm:px-8">
        <h2 className="text-center text-[28px] font-normal text-[#F5A623] sm:text-[34px]">
          Point of Sale
        </h2>
        <p className="mt-2 text-center text-[14px] font-light text-[#6B6B6B]">
          Click the screen to zoom — full resolution
        </p>
        <div className="mx-auto mt-8 max-w-[min(100%,1400px)]">
          <ImageLightbox src={cover} alt="POS Auto Spare Parts dashboard">
            <img
              src={cover}
              alt=""
              width={1400}
              height={1030}
              decoding="async"
              loading="lazy"
              className="mx-auto block h-auto w-full max-w-[1400px] rounded-[20px] object-contain"
              style={{ imageRendering: 'auto' }}
            />
          </ImageLightbox>
        </div>
      </section>

      {/* Full Figma raster — capped at natural width, never upscaled */}
      <section className="border-t border-[#eee] bg-[#f7f7f7] px-5 py-12 sm:px-8">
        <h2 className="text-center text-[22px] font-normal text-[#0F172B]">
          Full Figma export
        </h2>
        <p className="mx-auto mt-2 max-w-[640px] text-center text-[14px] font-light text-[#6B6B6B]">
          Complete frame from Figma ({fullW}px wide). Shown at or below natural size — click to
          zoom.
        </p>
        <div className="mx-auto mt-8 flex justify-center" style={{ maxWidth: fullW }}>
          <ImageLightbox src={fullSrc} alt="Full POS case study from Figma">
            <img
              src={fullSrc}
              alt=""
              width={fullW}
              height={fullH}
              decoding="async"
              loading="lazy"
              className="block h-auto w-full bg-white"
              style={{ maxWidth: fullW, imageRendering: 'auto' }}
            />
          </ImageLightbox>
        </div>
      </section>

      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-between gap-4 px-5 py-12 sm:flex-row sm:px-8">
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
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#F5A623] px-7 text-[15px] font-normal text-white transition-opacity hover:opacity-90"
        >
          Open full file in Figma ↗
        </a>
      </div>
    </div>
  )
}
