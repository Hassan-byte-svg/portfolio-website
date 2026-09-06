import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/content'

export function ProjectsPage() {
  return (
    <Section className="pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Every project shown in the design. Open a case study for the detail layout."
      />
      <div className="mt-16 flex flex-col gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
