import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { PosCaseStudy } from '../components/PosCaseStudy'
import { RasterCaseStudyView } from '../components/RasterCaseStudyView'
import { Section } from '../components/Section'
import { getNextProject, getProject, projectRedirects } from '../data/content'

/**
 * View Case Study (matches Vercel deploy):
 * - POS → native HTML
 * - AI Reply / ThinkFlow → Figma PNG export scroll
 * Theme toggle stays on every study and inverts black ↔ white.
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

  if (project.caseStudyFull) {
    const nativeTheme =
      project.layout === 'ai-reply' || project.slug === 'ai-supply-management' ? 'dark' : 'light'

    return (
      <RasterCaseStudyView
        title={project.caseStudyTitle}
        fullSrc={project.caseStudyFull.src}
        naturalWidth={project.caseStudyFull.width}
        naturalHeight={project.caseStudyFull.height}
        backTo={backTo}
        nextProject={nextProject}
        nativeTheme={nativeTheme}
      />
    )
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
