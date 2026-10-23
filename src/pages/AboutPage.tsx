import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/content'
import { Button } from '../components/Button'

export function AboutPage() {
  return (
    <Section className="pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading eyebrow="About" title="Designing with empathy, building with purpose" />
      <div className="mx-auto mt-12 grid max-w-[980px] items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <ImagePlaceholder
          src="/assets/images/about/portrait.jpg"
          className="aspect-[4/5] w-full"
        />
        <div className="heading-sub space-y-5">
          <p>
            I solve complex problems through human centered design combining
            research, usability principles and design thinking to create
            experiences that truly matter.
          </p>
          <p>
            Contact:{' '}
            <a href={`mailto:${site.email}`} className="font-normal text-ink hover:opacity-60">
              {site.email}
            </a>
          </p>
          <div className="pt-2">
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV <span aria-hidden="true">↓</span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <ImagePlaceholder
              src="/assets/images/about/01.jpg"
              className="aspect-[4/3] w-full"
            />
            <ImagePlaceholder
              src="/assets/images/about/02.jpg"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
