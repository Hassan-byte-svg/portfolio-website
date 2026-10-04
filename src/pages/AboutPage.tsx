import { Button } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { LogoMarquee } from '../components/LogoMarquee'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { fieldExposure, site, testimonials } from '../data/content'

export function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Designing with empathy, building with{' '}
            <span className="font-normal">purpose</span>
          </>
        }
        description="Product design, research, and strategy for complex systems — with space here for the supporting line from the Figma file."
        actions={
          <>
            <Button to="/projects">View my work</Button>
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV
            </Button>
          </>
        }
        footer={<LogoMarquee />}
      />

      <Section className="py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <ImagePlaceholder
            src="/assets/images/about/portrait.jpg"
            className="aspect-[4/5] w-full"
            rounded="rounded-[28px]"
          />
          <div className="space-y-5 text-[16px] font-light leading-[1.8] text-muted">
            <h2 className="text-[36px] font-light leading-[1.15] tracking-[-0.03em] text-ink sm:text-[44px]">
              Designing with empathy, building with purpose
            </h2>
            <p>
              This section is reserved for the about copy from the Figma file.
              Keep the layout, then replace the text in one place.
            </p>
            <p>
              The same about story continues here from the homepage, with empty
              image areas ready for portraits and process photos.
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="font-normal text-ink hover:opacity-60">
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ImagePlaceholder
            src="/assets/images/about/01.jpg"
            className="aspect-[16/10] w-full"
            rounded="rounded-[28px]"
          />
          <ImagePlaceholder
            src="/assets/images/about/02.jpg"
            className="aspect-[16/10] w-full"
            rounded="rounded-[28px]"
          />
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Conferences & talks"
          title="Exposure in the Field"
          description="Roles, companies, and years from the field."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[540px] text-left">
            <thead>
              <tr className="border-b border-line text-[12px] uppercase tracking-[0.12em] text-muted">
                <th className="py-4 font-normal">Role</th>
                <th className="py-4 font-normal">Company</th>
                <th className="py-4 font-normal">Year</th>
              </tr>
            </thead>
            <tbody>
              {fieldExposure.map((row) => (
                <tr key={`${row.company}-${row.year}`} className="border-b border-line">
                  <td className="py-5 text-[16px]">{row.role}</td>
                  <td className="py-5 text-[16px] text-muted">{row.company}</td>
                  <td className="py-5 text-[16px] text-muted">{row.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.avatar || index} {...item} />
          ))}
        </div>
      </Section>
    </>
  )
}
