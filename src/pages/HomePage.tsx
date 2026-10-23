import { Button } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { LogoMarquee } from '../components/LogoMarquee'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import {
  aboutCopy,
  fieldExposure,
  projects,
  site,
  testimonials,
} from '../data/content'

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-6 sm:px-8 sm:pb-[72px] sm:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="pointer-events-none absolute left-1/2 top-6 h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-[#8aa0ff]/25 blur-[100px]" />
        <div className="relative mx-auto max-w-[1100px] text-center">
          <h1 className="heading-main">
            <span className="heading-strong">Design, leadership</span>{' '}
            <em>and</em> strategy for{' '}
            <span className="heading-strong">mission-critical</span> environments.
          </h1>
          <p className="heading-sub mx-auto mt-8 max-w-[720px]">{site.intro}</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/projects">
              View my work <span aria-hidden="true">→</span>
            </Button>
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV <span aria-hidden="true">↓</span>
            </Button>
          </div>
        </div>
      </section>
      <LogoMarquee />

      <Section className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Works & case studies"
          title="Featured Case Studies"
          description="Selected product and research work. Open a case study for the full layout."
        />
        <div className="mt-8 flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Exposure in the Field"
          description="A quick 2-minute glimpse into how I turn complex problems into elegant, human-centered solutions."
        />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[540px] text-left">
            <thead>
              <tr className="border-b border-line text-[16px] font-normal text-muted">
                <th className="py-3 font-normal">Role</th>
                <th className="py-3 font-normal">Company</th>
                <th className="py-3 font-normal">Year</th>
              </tr>
            </thead>
            <tbody>
              {fieldExposure.map((row) => (
                <tr key={`${row.company}-${row.year}`} className="border-b border-line">
                  <td className="py-3.5 text-[16px] font-normal">{row.role}</td>
                  <td className="py-3.5 text-[16px] font-normal text-muted">{row.company}</td>
                  <td className="py-3.5 text-[16px] font-normal text-muted">{row.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ImagePlaceholder
            src="/assets/images/field/01.jpg"
            className="aspect-[16/10] w-full"
          />
          <ImagePlaceholder
            src="/assets/images/field/02.jpg"
            className="aspect-[16/10] w-full"
          />
        </div>
      </Section>

      <Section className="py-14 sm:py-20">
        <SectionHeading title="Feedback" />
        <div className="mt-8 rounded-[28px] bg-soft p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.avatar || index} {...item} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="About me"
          title="Designing with empathy, building with purpose"
        />
        <div className="heading-sub mx-auto mt-6 max-w-[760px] space-y-5 text-center">
          {aboutCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </>
  )
}
