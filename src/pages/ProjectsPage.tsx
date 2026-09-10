import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/content'

export function ProjectsPage() {
  return (
    <Section className="pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading
        eyebrow="Work"
        title="Featured Case Studies"
        description="Three case studies from the Figma file. Open any one for the full page."
      />
      <div className="mt-12 flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
