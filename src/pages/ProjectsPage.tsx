import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { WorkMarquee } from '../components/WorkMarquee'
import { projects } from '../data/content'

export function ProjectsPage() {
  return (
    <>
      <Section className="pb-8 pt-8 sm:pb-12 sm:pt-12">
        <SectionHeading
          eyebrow="Work"
          title="Featured Case Studies"
          description="I solve complex problems through human centered design combining research, usability principles and design thinking to create experiences that truly matter."
        />
        <div className="mt-8 flex flex-col gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </Section>
      <WorkMarquee />
    </>
  )
}
