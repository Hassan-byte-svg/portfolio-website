import { BackLink } from './BackLink'
import { ImagePlaceholder } from './ImagePlaceholder'
import { TagList } from './TagList'
import type { Project } from '../data/content'

export function DesktopCaseStudy({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-[#eef7f1] text-[#0F172B]">
      <div className="sticky top-0 z-20 border-b border-black/5 bg-[#eef7f1] px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-[1120px] items-center gap-3">
          <div className="rounded-full bg-white px-4 py-2">
            <BackLink />
          </div>
          <p className="text-[14px] font-normal text-[#0F172B]/70">{project.caseStudyTitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-20">
        <p className="text-[16px] font-medium text-[#3D9A6A]">{project.category}</p>
        <h1 className="mt-3 max-w-[720px] text-[40px] font-light tracking-[-0.03em] sm:text-[52px]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-[560px] text-[16px] font-light text-[#6B6B6B]">{project.summary}</p>
        <div className="mt-8">
          <TagList tags={project.tags} tone="green" />
        </div>

        <dl className="mt-10 grid max-w-[480px] grid-cols-3 gap-6 text-[15px]">
          <div>
            <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6B6B6B]">Role</dt>
            <dd className="mt-2 font-light">{project.role}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6B6B6B]">Platform</dt>
            <dd className="mt-2 font-light">{project.platform}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6B6B6B]">Duration</dt>
            <dd className="mt-2 font-light">{project.duration}</dd>
          </div>
        </dl>

        <div className="mt-14 overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <p className="ml-3 text-[13px] font-medium text-[#6B6B6B]">ThinkFlow — Product Design</p>
          </div>
          <div className="grid min-h-[320px] md:grid-cols-[220px_1fr]">
            <aside className="border-b border-black/5 bg-[#f7fbf8] px-5 py-6 md:border-b-0 md:border-r">
              {['Product Design', 'Frontend', 'Research', 'Marketing'].map((item) => (
                <p key={item} className="py-2 text-[15px] font-medium text-[#0F172B]/80">
                  {item}
                </p>
              ))}
            </aside>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <ImagePlaceholder src={project.gallery[0]} className="aspect-[16/10] w-full" rounded="rounded-[14px]" />
              <ImagePlaceholder src={project.gallery[1]} className="aspect-[16/10] w-full" rounded="rounded-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
