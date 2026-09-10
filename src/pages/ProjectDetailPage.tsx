import { Link, Navigate, useParams } from 'react-router-dom'
import { ColorPalette } from '../components/ColorPalette'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { VideoPlaceholder } from '../components/VideoPlaceholder'
import { getNextProject, getProject, projectRedirects } from '../data/content'

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
        <h1 className="font-serif text-[40px] tracking-[-0.03em]">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block text-[15px] hover:opacity-60">
          ← Back to work
        </Link>
      </Section>
    )
  }

  const nextProject = getNextProject(project.slug)

  return (
    <Section className="pb-20 pt-8 sm:pb-28 sm:pt-12">
      <Link to="/projects" className="text-[14px] text-muted hover:text-ink">
        ← Back to work
      </Link>

      <p className="mt-10 text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
        {project.tag}
      </p>
      <h1 className="mt-3 max-w-[900px] font-serif text-[40px] leading-[1.12] tracking-[-0.03em] sm:text-[56px]">
        {project.title}
      </h1>
      <p className="mt-5 max-w-[640px] text-[17px] leading-[1.75] text-muted">
        {project.summary}
      </p>

      <dl className="mt-10 grid max-w-[720px] grid-cols-3 gap-4 border-y border-line py-5 text-[14px]">
        <div>
          <dt className="uppercase tracking-[0.12em] text-muted">Role</dt>
          <dd className="mt-1 font-medium">{project.role}</dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.12em] text-muted">Year</dt>
          <dd className="mt-1 font-medium">{project.year}</dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.12em] text-muted">Platform</dt>
          <dd className="mt-1 font-medium">{project.platform}</dd>
        </div>
      </dl>

      <ImagePlaceholder src={project.image} className="mt-12 aspect-[16/8] w-full" />

      <div className="mx-auto mt-16 grid max-w-[920px] gap-12 md:grid-cols-3">
        {project.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-serif text-[28px] tracking-[-0.02em]">{section.heading}</h2>
            <p className="mt-3 text-[16px] leading-[1.75] text-muted">{section.body}</p>
          </div>
        ))}
      </div>

      <VideoPlaceholder src={project.video} className="mt-16 aspect-[16/9] w-full" />

      <div className="mt-16">
        <h2 className="mb-5 font-serif text-[28px] tracking-[-0.02em]">Color system</h2>
        <ColorPalette colors={project.palette} />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {project.gallery.map((src) => (
          <ImagePlaceholder key={src} src={src} className="aspect-[4/3] w-full" />
        ))}
      </div>

      {nextProject ? (
        <div className="mt-20 border-t border-line pt-10">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted">Next case study</p>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="mt-3 inline-flex items-center gap-2 font-serif text-[32px] tracking-[-0.03em] hover:opacity-70"
          >
            {nextProject.title}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}
    </Section>
  )
}
