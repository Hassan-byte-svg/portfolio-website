import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'

const tones: Record<Project['tagTone'], string> = {
  blue: 'bg-[#e8efff] text-[#2f5bdb]',
  green: 'bg-[#e8f6ee] text-[#2c7a4d]',
  lilac: 'bg-[#eee8ff] text-[#5b46c9]',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      <ImagePlaceholder
        src={project.image}
        alt=""
        className="aspect-[16/10] w-full"
      />
      <div>
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${tones[project.tagTone]}`}
        >
          {project.tag}
        </span>
        <h3 className="mt-4 font-sans text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] text-ink sm:text-[32px]">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[460px] text-[16px] leading-[1.7] text-muted">
          {project.summary}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-opacity hover:opacity-60"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
