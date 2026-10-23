import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/content'

export function ProjectsPage() {
  return (
    <Section className="pb-16 pt-8 sm:pb-20 sm:pt-12">
      <SectionHeading
        eyebrow="Work"
        title="Featured Case Studies"
        description="I solve complex problems through human centered design combining research, usability principles and design thinking to create experiences that truly matter."
      />
      <div className="mt-8 flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
