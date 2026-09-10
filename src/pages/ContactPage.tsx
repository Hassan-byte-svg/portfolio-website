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
        description="Use the email below, or add a form later if the Figma contact page includes one."
      />
      <div className="mx-auto mt-12 max-w-[520px] text-center">
        <a href={`mailto:${site.email}`} className="text-[22px] font-normal tracking-[-0.02em] hover:opacity-60">
          {site.email}
        </a>
        <div className="mt-8 flex justify-center">
          <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
            Download CV
          </Button>
        </div>
      </div>
    </Section>
  )
}
