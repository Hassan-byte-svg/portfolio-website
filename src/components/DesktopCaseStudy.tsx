import { BackLink } from './BackLink'
import { ImagePlaceholder } from './ImagePlaceholder'
import type { Project } from '../data/content'

export function DesktopCaseStudy({ project }: { project: Project }) {
  return (
    <div className="-mx-5 bg-[#e8f1ec] sm:-mx-8">
      <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-16">
        <BackLink />
        <p className="mt-10 text-[13px] font-normal uppercase tracking-[0.14em] text-muted">
          {project.tag}
        </p>
        <h1 className="mt-3 text-[40px] font-light tracking-[-0.03em] sm:text-[52px]">
          {project.caseStudyTitle}
        </h1>
        <p className="mt-4 max-w-[560px] text-[16px] font-light text-muted">{project.summary}</p>

        <div className="mt-12 space-y-10">
          <div>
            <p className="mb-4 text-[14px] font-normal">Desktop 01</p>
            <div className="overflow-hidden rounded-[18px] border border-black/10 bg-white p-3 shadow-sm">
              <ImagePlaceholder src={project.gallery[0]} className="aspect-[16/10] w-full" rounded="rounded-[12px]" />
            </div>
          </div>
          <div>
            <p className="mb-4 text-[14px] font-normal">Desktop 02</p>
            <div className="overflow-hidden rounded-[18px] border border-black/10 bg-white p-3 shadow-sm">
              <ImagePlaceholder src={project.gallery[1]} className="aspect-[16/10] w-full" rounded="rounded-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
