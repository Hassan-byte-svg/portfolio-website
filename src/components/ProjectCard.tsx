import { Link, useLocation } from 'react-router-dom'
import type { Project, TagTone } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'
import { TagList } from './TagList'

const cardTones: Record<TagTone, { card: string; category: string }> = {
  blue: {
    card: 'bg-[#EAF4FA]',
    category: 'text-[#2F90C2]',
  },
  green: {
    card: 'bg-[#EEF7F1]',
    category: 'text-[#3D9A6A]',
  },
  orange: {
    card: 'bg-[#FBF4EC]',
    category: 'text-[#E08A3C]',
  },
}

export function ProjectCard({ project }: { project: Project }) {
  const location = useLocation()
  const tone = cardTones[project.tagTone]

  return (
    <article
      className={`grid items-center gap-8 rounded-[28px] px-5 py-5 sm:px-8 sm:py-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 ${tone.card}`}
    >
      <ImagePlaceholder
        src={project.image}
        alt=""
        className="aspect-[16/11] w-full"
        rounded="rounded-[22px]"
      />
      <div>
        <p className={`text-[15px] font-medium ${tone.category}`}>{project.category}</p>
        <h3 className="mt-2 text-[28px] font-normal leading-[1.2] tracking-[-0.03em] text-[#0F172B] sm:text-[34px]">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[460px] text-[16px] font-light leading-[1.7] text-[#6B6B6B]">
          {project.summary}
        </p>
        <div className="mt-5">
          <TagList tags={project.tags} tone={project.tagTone} />
        </div>
        <Link
          to={`/projects/${project.slug}`}
          state={{ from: `${location.pathname}${location.search}` }}
          className="mt-6 inline-flex items-center gap-2 text-[16px] font-medium text-[#0F172B] transition-opacity hover:opacity-60"
        >
          View Case Study
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
