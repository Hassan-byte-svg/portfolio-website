import { useLocation } from 'react-router-dom'
import { projects } from '../data/content'
import { figmaProtoSrc } from './FigmaCaseStudyEmbed'

export function PreloadedCaseStudies() {
  const { pathname } = useLocation()

  return (
    <>
      {projects.map((project) => {
        const active = pathname === `/projects/${project.slug}`

        return (
          <iframe
            key={project.slug}
            title={project.caseStudyTitle}
            src={figmaProtoSrc(project.figmaNodeId)}
            allowFullScreen
            className="border-0"
            aria-hidden={!active}
            style={
              active
                ? { display: 'block', width: '100%', height: '24000px' }
                : {
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '24000px',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: -1,
                  }
            }
          />
        )
      })}
    </>
  )
}
