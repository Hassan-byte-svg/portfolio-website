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
          <p className="heading-section">Simple Page</p>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-[1100px] text-center">
          <h1 className="heading-main">
            Design, leadership <em className="font-light italic">and</em> strategy
            for mission-critical environments.
          </h1>
          <p className="heading-sub mx-auto mt-8 max-w-[720px]">
            I solve complex problems through human centered design combining
            research, usability principles and design thinking to create
            experiences that truly matter
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/projects">
              View my work <span aria-hidden="true">→</span>
            </Button>
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV <span aria-hidden="true">↓</span>
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
          <div className="heading-sub space-y-5">
            <h2 className="heading-section">
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
        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  )
}
