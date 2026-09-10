import { Button } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { projects, site } from '../data/content'

export function SimplePage() {
  return (
    <>
      <Section className="pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[28px] font-light tracking-[-0.03em]">Simple Page</p>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-[860px] text-center">
          <h1 className="text-[40px] font-light leading-[1.12] tracking-[-0.03em] sm:text-[58px] lg:text-[64px]">
            Design, leadership <em className="font-light italic">and</em> strategy
            for <span className="font-normal">mission-critical</span>{' '}
            environments.
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/projects">View my work</Button>
            <Button to="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>

      <Section className="py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <ImagePlaceholder
            src="/assets/images/about/portrait.jpg"
            className="aspect-[4/5] w-full"
          />
          <div className="space-y-5 text-[16px] leading-[1.8] text-muted">
            <h2 className="text-[36px] font-light leading-[1.15] tracking-[-0.03em] text-ink">
              Designing with empathy, building with purpose
            </h2>
            <p>
              This column matches the Simple Page about block in Figma. Replace
              the copy here when the final text is ready.
            </p>
            <p>{site.email}</p>
          </div>
        </div>
      </Section>

      <Section className="py-16 sm:py-24">
        <SectionHeading title="Featured Case Studies" />
        <div className="mt-14 flex flex-col gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  )
}
