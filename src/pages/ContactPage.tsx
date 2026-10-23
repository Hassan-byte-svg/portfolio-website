import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/content'

export function ContactPage() {
  return (
    <Section className="pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="I solve complex problems through human centered design combining research, usability principles and design thinking to create experiences that truly matter."
      />
      <div className="mx-auto mt-12 max-w-[640px] text-center">
        <a href={`mailto:${site.email}`} className="heading-section hover:opacity-60">
          {site.email}
        </a>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`mailto:${site.email}`}>Email me</Button>
          <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
            Download CV <span aria-hidden="true">↓</span>
          </Button>
        </div>
      </div>
    </Section>
  )
}
