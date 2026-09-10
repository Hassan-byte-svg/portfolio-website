import { Button } from '../components/Button'
import { ColorPalette } from '../components/ColorPalette'
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
          <p className="font-serif text-[28px] tracking-[-0.03em]">Simple Page</p>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-[860px] text-center">
          <h1 className="font-serif text-[40px] leading-[1.12] tracking-[-0.03em] sm:text-[58px] lg:text-[64px]">
            Design, leadership <em className="font-normal italic">and</em> strategy
            for <span className="font-sans font-semibold">mission-critical</span>{' '}
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
            <h2 className="font-serif text-[36px] leading-[1.15] tracking-[-0.03em] text-ink">
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

      <Section className="py-16 sm:py-24">
        <SectionHeading title="Color system" />
        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <div key={project.slug}>
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                {project.title}
              </p>
              <ColorPalette colors={project.palette} />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
