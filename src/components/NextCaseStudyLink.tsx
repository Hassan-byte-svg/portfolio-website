import { Link } from 'react-router-dom'
import type { Project } from '../data/content'

export function NextCaseStudyLink({
  next,
  from,
  tone = 'dark',
}: {
  next: Project
  from?: string
  tone?: 'dark' | 'orange'
}) {
  const isOrange = tone === 'orange'

  return (
    <Link
      to={`/projects/${next.slug}`}
      state={from ? { from } : undefined}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-normal transition-opacity hover:opacity-90 ${
        isOrange ? 'bg-[#F5A623] text-white' : 'bg-white text-[#0a0a0a]'
      }`}
    >
      Next case study
      <span aria-hidden="true">→</span>
      <span className="hidden max-w-[220px] truncate sm:inline">{next.title}</span>
    </Link>
  )
}
