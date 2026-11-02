import { Link, Navigate, useParams } from 'react-router-dom'
import { FigmaCaseStudyEmbed } from '../components/FigmaCaseStudyEmbed'
import { Section } from '../components/Section'
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

  return (
    <FigmaCaseStudyEmbed title={project.caseStudyTitle} />
  )
}
