import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/content'

export function AboutPage() {
  return (
    <Section className="pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading eyebrow="About" title="Designing with empathy, building with purpose" />
      <div className="mx-auto mt-12 grid max-w-[980px] items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <ImagePlaceholder
          src="/assets/images/about/portrait.jpg"
          className="aspect-[4/5] w-full"
        />
        <div className="space-y-5 text-[16px] leading-[1.8] text-muted">
          <p>
            Use this column for the longer about narrative from the Figma
            design. The portrait area on the left stays empty until you add
            `/assets/images/about/portrait.jpg`.
          </p>
          <p>
            Contact: {site.email}
          </p>
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
