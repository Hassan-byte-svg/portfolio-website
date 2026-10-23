import { Link, useLocation } from 'react-router-dom'
import type { Project } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'
import { TagList } from './TagList'

export function ProjectCard({ project }: { project: Project }) {
  const location = useLocation()

  return (
    <article className="grid items-center gap-8 rounded-[24px] bg-[#00A0C2]/[0.03] px-5 py-5 sm:px-8 sm:py-8 lg:grid-cols-[630px_minmax(0,1fr)] lg:gap-10">
      <ImagePlaceholder
        src={project.image}
        alt=""
        className="aspect-[630/465] w-full max-w-[630px] lg:h-[465px] lg:w-[630px] lg:max-w-none"
        rounded="rounded-[24px]"
      />
      <div>
        <p className="text-[24px] font-normal text-[#00A0C2]">{project.category}</p>
        <h3 className="mt-2 text-[32px] font-normal leading-[1.2] tracking-[-0.02em] text-ink sm:text-[46px]">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[520px] text-[24px] font-light leading-[1.5] text-copy">
          {project.summary}
        </p>
        <div className="mt-5">
          <TagList tags={project.tags} />
        </div>
        <Link
          to={`/projects/${project.slug}`}
          state={{ from: `${location.pathname}${location.search}` }}
          className="mt-6 inline-flex items-center gap-2 text-[24px] font-normal text-ink transition-opacity hover:opacity-60"
        >
          View Case Study
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
