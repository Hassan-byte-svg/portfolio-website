import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { AiReplyCaseStudy } from '../components/AiReplyCaseStudy'
import { PosCaseStudy } from '../components/PosCaseStudy'
import { ThinkFlowCaseStudy } from '../components/ThinkFlowCaseStudy'
import { Section } from '../components/Section'
import { getNextProject, getProject, projectRedirects } from '../data/content'

/**
 * View Case Study — all three as real HTML (not PNG / zoom pictures):
 * - POS → PosCaseStudy
 * - AI Reply → AiReplyCaseStudy
 * - ThinkFlow → ThinkFlowCaseStudy
 */
export function CaseStudyPage() {
  const { slug } = useParams()
  const location = useLocation()
  const redirectTo = slug ? projectRedirects[slug] : undefined
  const project = !redirectTo && slug ? getProject(slug) : undefined
  const nextProject = project ? getNextProject(project.slug) : undefined
  const backTo = (location.state as { from?: string } | null)?.from || '/projects'

  if (redirectTo) {
    return <Navigate to={`/projects/${redirectTo}`} replace />
  }

  if (!project) {
    return (
      <Section className="py-24 text-center">
        <h1 className="heading-section">Case study not found</h1>
        <Link to="/projects" className="label-nav mt-6 inline-block hover:text-ink">
          ← Back to Work
        </Link>
      </Section>
    )
  }

  if (project.layout === 'pde' || project.slug === 'pde-auto-group') {
    return <PosCaseStudy project={project} backTo={backTo} nextProject={nextProject} />
  }

  if (project.layout === 'ai-reply' || project.slug === 'ai-supply-management') {
    return <AiReplyCaseStudy project={project} backTo={backTo} nextProject={nextProject} />
  }

  if (project.layout === 'desktop' || project.slug === 'track-my-time') {
    return <ThinkFlowCaseStudy project={project} backTo={backTo} nextProject={nextProject} />
  }

  return (
    <Section className="py-24 text-center">
      <h1 className="heading-section">Case study not found</h1>
      <Link to="/projects" className="label-nav mt-6 inline-block hover:text-ink">
        ← Back to Work
      </Link>
    </Section>
  )
}
