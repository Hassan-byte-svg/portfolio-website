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
        <h1 className="text-[40px] font-light tracking-[-0.03em]">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block text-[15px] font-normal hover:opacity-60">
          ← Back
        </Link>
      </Section>
    )
  }

  return (
    <FigmaCaseStudyEmbed nodeId={project.figmaNodeId} title={project.caseStudyTitle} />
  )
}
