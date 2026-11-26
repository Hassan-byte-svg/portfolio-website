import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { Project } from '../data/content'
import { getCaseStudy } from '../data/caseStudies'
import { ImagePlaceholder } from './ImagePlaceholder'
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

function prefetchCaseStudyAssets(slug: string) {
  const study = getCaseStudy(slug)
  if (!study || typeof document === 'undefined') return
  const urls = [
    study.coverImage,
    ...study.gallery.map((item) => item.src),
    ...study.features.map((feature) => feature.image).filter(Boolean),
  ] as string[]
  for (const url of [...new Set(urls)]) {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.as = 'image'
    link.href = url
    document.head.appendChild(link)
  }
}

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  const location = useLocation()
  const cardRef = useRef<HTMLElement>(null)
  const href = `/projects/${project.slug}`
  const prefetch = () => prefetchCaseStudyAssets(project.slug)

  useEffect(() => {
    const node = cardRef.current
    if (!node || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        prefetch()
        observer.disconnect()
      },
      { rootMargin: '200px 0px', threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [project.slug])

  return (
    <article
      ref={cardRef}
      className={`grid items-center gap-8 rounded-[28px] px-5 py-5 sm:px-8 sm:py-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-12 lg:py-8 ${cardSurface[project.tagTone]}`}
      onPointerEnter={prefetch}
    >
      <ImagePlaceholder
        src={project.image}
        alt=""
        priority={priority}
        className="aspect-[1400/1030] w-full"
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
          to={href}
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
