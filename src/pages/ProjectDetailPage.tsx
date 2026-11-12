import { Link, Navigate, useParams } from 'react-router-dom'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { TagList } from '../components/TagList'
import { BackLink } from '../components/BackLink'
import { getProject, projectRedirects } from '../data/content'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const redirectTo = slug ? projectRedirects[slug] : undefined

  if (redirectTo) {
    return <Navigate to={`/projects/${redirectTo}`} replace />
  }

  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <Section className="py-24 text-center">
        <h1 className="heading-section">Project not found</h1>
        <Link to="/projects" className="label-nav mt-6 inline-block hover:text-ink">
          ← Back
        </Link>
      </Section>
    )
  }

  const facts = [
    ['Role', project.role],
    ['Platform', project.platform],
    ['Duration', project.duration],
    ['Year', project.year],
  ]

  return (
    <article>
      <Section className="pb-8 pt-6 sm:pb-10 sm:pt-8">
        <div className="page-enter">
          <BackLink fallback="/projects" />
          <p className="heading-eyebrow mt-8">{project.category}</p>
          <h1 className="heading-section mt-3 max-w-[18ch]">{project.title}</h1>
          <p className="heading-sub mt-5 max-w-[680px]">{project.summary}</p>
          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-line py-6 sm:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[13px] font-normal text-eyebrow">{label}</dt>
                <dd className="mt-1 text-[16px] font-normal text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <TagList tags={project.tags} tone={project.tagTone} />
          </div>
          <ImagePlaceholder
            src={project.image}
            alt=""
            priority
            className="mt-10 aspect-[630/465] w-full"
            rounded="rounded-[20px]"
          />
        </div>
        <div className="mt-14">
          <p className="heading-eyebrow">Case study</p>
          <h2 className="heading-section mt-3">{project.caseStudyTitle}</h2>
          <div
            id="case-study-stage"
            className="relative mt-6 h-[min(78vh,920px)] overflow-hidden rounded-[20px] border border-line bg-[#0a0a0a]"
          >
            <img
              src={project.image}
              alt=""
              decoding="async"
              fetchPriority="high"
              draggable={false}
              className="absolute inset-0 h-full w-full max-w-none object-contain"
            />
          </div>
        </div>
      </Section>
    </article>
  )
}
