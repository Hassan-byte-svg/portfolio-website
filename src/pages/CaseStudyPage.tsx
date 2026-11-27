import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { FigmaCaseStudyView } from '../components/FigmaCaseStudyView'
import { PosCaseStudy } from '../components/PosCaseStudy'
import { RasterCaseStudyView } from '../components/RasterCaseStudyView'
import { Section } from '../components/Section'
import { getProject, projectRedirects } from '../data/content'

/**
 * View Case Study:
 * - POS → native HTML orange case study (sharp text/icons, no Figma raster)
 * - AI Reply / ThinkFlow → sharp PNG export
 * - Fallback → Figma prototype embed
 */
export function CaseStudyPage() {
  const { slug } = useParams()
  const location = useLocation()
  const redirectTo = slug ? projectRedirects[slug] : undefined
  const project = !redirectTo && slug ? getProject(slug) : undefined
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
    return <PosCaseStudy project={project} backTo={backTo} />
  }

  if (project.caseStudyFull) {
    return (
      <RasterCaseStudyView
        title={project.caseStudyTitle}
        nodeId={project.figmaNodeId}
        fullSrc={project.caseStudyFull.src}
        naturalWidth={project.caseStudyFull.width}
        naturalHeight={project.caseStudyFull.height}
        backTo={backTo}
      />
    )
  }

  if (!project.figmaNodeId) {
    return (
      <Section className="py-24 text-center">
        <h1 className="heading-section">Case study not found</h1>
        <Link to="/projects" className="label-nav mt-6 inline-block hover:text-ink">
          ← Back to Work
        </Link>
      </Section>
    )
  }

  return (
    <FigmaCaseStudyView
      title={project.caseStudyTitle}
      nodeId={project.figmaNodeId}
      backTo={backTo}
    />
  )
}
