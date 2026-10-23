import { Link, useLocation } from 'react-router-dom'
import type { Project } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'
import { warmupCaseStudy } from './PreloadedCaseStudies'
import { TagList } from './TagList'

export function ProjectCard({ project }: { project: Project }) {
  const location = useLocation()
  const prefetch = () => warmupCaseStudy(project.slug)

  return (
    <article
      className="grid items-center gap-6 rounded-[20px] bg-[#00A0C2]/[0.03] px-4 py-4 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8"
      onPointerEnter={prefetch}
    >
      <ImagePlaceholder
        src={project.image}
        alt=""
        className="aspect-[630/465] w-full"
        rounded="rounded-[16px]"
      />
      <div>
        <p className="text-[16px] font-normal text-[#00A0C2]">{project.category}</p>
        <h3 className="mt-1.5 text-[26px] font-normal leading-[1.25] tracking-[-0.02em] text-ink lg:text-[32px]">
          {project.title}
        </h3>
        <p className="mt-2 max-w-[460px] text-[16px] font-light leading-[1.5] text-copy">
          {project.summary}
        </p>
        <div className="mt-4">
          <TagList tags={project.tags} />
        </div>
        <Link
          to={`/projects/${project.slug}`}
          state={{ from: `${location.pathname}${location.search}` }}
          onPointerDown={prefetch}
          onFocus={prefetch}
          className="mt-5 inline-flex items-center gap-2 text-[16px] font-normal text-ink transition-opacity hover:opacity-60"
        >
          View Case Study
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
