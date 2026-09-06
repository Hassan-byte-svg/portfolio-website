import { Link, useParams } from 'react-router-dom'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { VideoPlaceholder } from '../components/VideoPlaceholder'
import { getProject } from '../data/content'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <Section className="py-24 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block hover:opacity-60">
          ← Back to projects
        </Link>
      </Section>
    )
  }

  return (
    <Section className="pb-20 pt-8 sm:pb-28 sm:pt-12">
      <Link to="/projects" className="text-[14px] text-muted hover:text-ink">
        ← Back to projects
      </Link>
      <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
        {project.tag} · {project.year}
      </p>
      <h1 className="mt-3 max-w-[820px] font-serif text-[40px] leading-[1.15] tracking-[-0.03em] sm:text-[56px]">
        {project.title}
      </h1>
      <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-muted">
        {project.summary}
      </p>
      <ImagePlaceholder src={project.image} className="mt-12 aspect-[16/8] w-full" />
      <VideoPlaceholder src={project.video} className="mt-8 aspect-[16/9] w-full" />
      <div className="mx-auto mt-14 max-w-[720px] space-y-5 text-[16px] leading-[1.8] text-muted">
        <p>{project.description}</p>
        <p>Role: {project.role}</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {project.gallery.map((src) => (
          <ImagePlaceholder key={src} src={src} className="aspect-[4/3] w-full" />
        ))}
      </div>
    </Section>
  )
}
