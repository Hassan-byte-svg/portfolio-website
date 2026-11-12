import { Link, useLocation } from 'react-router-dom'
import type { Project } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'
import { warmupCaseStudy } from './PreloadedCaseStudies'
import { TagList } from './TagList'

const cardSurface = {
  blue: 'bg-[#00A0C2]/[0.03]',
  green: 'bg-[#75B798]/[0.03]',
  orange: 'bg-[#E9A54C]/[0.03]',
} as const

const categoryColor = {
  blue: 'text-[#00A0C2]',
  green: 'text-[#75B798]',
  orange: 'text-[#E9A54C]',
} as const

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  const location = useLocation()
  const prefetch = () => warmupCaseStudy(project.slug)

  return (
    <article
      className={`grid items-center gap-8 rounded-[28px] px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-12 lg:py-12 ${cardSurface[project.tagTone]}`}
      onPointerEnter={prefetch}
    >
      <ImagePlaceholder
        src={project.image}
        alt=""
        priority={priority}
        className="aspect-[630/465] w-full"
        rounded="rounded-[20px]"
      />
      <div>
        <p className={`text-[16px] font-normal ${categoryColor[project.tagTone]}`}>{project.category}</p>
        <h3 className="mt-2 text-[30px] font-normal leading-[1.2] tracking-[-0.02em] text-ink sm:text-[36px] lg:text-[42px]">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[520px] text-[17px] font-light leading-[1.5] text-copy">
          {project.summary}
        </p>
        <div className="mt-4">
          <TagList tags={project.tags} tone={project.tagTone} />
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
