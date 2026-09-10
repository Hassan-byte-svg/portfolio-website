import { BackLink } from './BackLink'
import { ImagePlaceholder } from './ImagePlaceholder'
import { TagList } from './TagList'
import type { Project } from '../data/content'

function Em({ children }: { children: string }) {
  return <span className="font-normal text-[#e3941a]">{children}</span>
}

export function PdeCaseStudy({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#0F172B]">
      <div className="sticky top-0 z-20 border-b border-black/5 bg-[#fffaf4] px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-[1120px] items-center gap-3">
          <div className="rounded-full bg-white px-4 py-2">
            <BackLink />
          </div>
          <p className="text-[14px] font-normal text-[#0F172B]/70">{project.caseStudyTitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-20">
        <p className="text-center text-[16px] font-medium text-[#E08A3C]">{project.category}</p>
        <h1 className="mt-3 text-center text-[40px] font-light tracking-[-0.03em] sm:text-[56px]">
          UX UI <span className="rounded-full bg-[#fde6c8] px-5 py-1 font-light text-[#e3941a]">Project</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-[16px] font-light text-[#6B6B6B]">
          {project.summary}
        </p>
        <div className="mx-auto mt-8 flex justify-center">
          <TagList tags={project.tags} tone="orange" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="flex gap-4">
            <span className="mt-1 text-2xl" aria-hidden="true">
              ⚑
            </span>
            <div>
              <h2 className="text-[22px] font-normal text-[#e3941a]">Aim:</h2>
              <p className="mt-2 max-w-[420px] text-[16px] font-light leading-[1.75] text-[#6B6B6B]">
                Develop a <Em>customer-focused</Em> POS system to improve efficiency and
                competitiveness of offline <Em>auto parts stores</Em>.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="mt-1 text-2xl" aria-hidden="true">
              ☹
            </span>
            <div>
              <h2 className="text-[22px] font-normal text-[#e3941a]">Problem Statement:</h2>
              <p className="mt-2 text-[16px] font-light leading-[1.75] text-[#6B6B6B]">
                The automotive parts industry is <Em>evolving rapidly</Em>, with changing
                consumer demands, technology advancements, and competitive pressures.{' '}
                <Em>Traditional offline stores often struggle to keep up</Em>, lacking tools
                to manage inventory, streamline transactions, and enhance customer
                experiences. Without a modern POS system, they risk falling behind
                competitors and <Em>failing to meet customer needs</Em>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <span className="mt-1 text-2xl" aria-hidden="true">
            ⌖
          </span>
          <div>
            <h2 className="text-[22px] font-normal text-[#e3941a]">Scope:</h2>
            <p className="mt-2 max-w-[720px] text-[16px] font-light leading-[1.75] text-[#6B6B6B]">
              This project targets the challenges faced by urban offline <Em>auto parts stores</Em>,
              particularly in <Em>Abbottabad, Pakistan</Em>. Through thorough research and
              interviews in the region, we aim to understand the specific needs and pain
              points of these businesses.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-[36px] font-light text-[#e3941a] sm:text-[44px]">Point of Sale</h2>
          <p className="mt-2 text-[14px] font-normal text-[#6B6B6B]">Thumbnail</p>
          <ImagePlaceholder
            src={project.gallery[0]}
            className="mx-auto mt-8 aspect-[16/10] w-full max-w-[920px]"
          />
        </div>

        <ImagePlaceholder src={project.gallery[1]} className="mt-10 aspect-[16/9] w-full" />
      </div>
    </div>
  )
}
