import { Button } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { VideoPlaceholder } from '../components/VideoPlaceholder'
import {
  fieldExposure,
  logos,
  projects,
  site,
  testimonials,
} from '../data/content'

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#8aa0ff]/25 blur-[100px]" />
        <div className="relative mx-auto max-w-[860px] text-center">
          <h1 className="font-serif text-[40px] leading-[1.12] tracking-[-0.03em] text-ink sm:text-[58px] lg:text-[68px]">
            Design, leadership <em className="italic font-normal">and</em> strategy
            for <span className="font-sans font-semibold">mission-critical</span>{' '}
            environments.
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.7] text-muted sm:text-[17px]">
            Product design, research, and strategy for complex systems — with
            space here for the supporting line from the Figma file.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/projects">View my work</Button>
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV
            </Button>
            <Button to="/contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-[1120px] text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
            Trusted by teams at companies like
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-4">
            {logos.map((logo) => (
              <ImagePlaceholder
                key={logo}
                src={logo}
                className="mx-auto h-10 w-[140px]"
                rounded="rounded-md"
              />
            ))}
          </div>
        </div>
      </section>

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="What I do"
          title="My Process In Motion"
          description="A look at how the work moves from research and framing into interface and delivery."
        />
        <VideoPlaceholder
          src="/assets/videos/process.mp4"
          className="mt-12 aspect-[16/8] w-full"
        />
      </Section>

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Works & case studies"
          title="Featured Case Studies"
          description="Selected product and research work. Open a case study for the full layout."
        />
        <div className="mt-16 flex flex-col gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Conferences & talks"
          title="Exposure in the Field"
          description="Talks, events, and field work. Replace row copy in the content file."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[540px] text-left">
            <thead>
              <tr className="border-b border-line text-[12px] uppercase tracking-[0.12em] text-muted">
                <th className="py-4 font-medium">Title</th>
                <th className="py-4 font-medium">Organizers</th>
                <th className="py-4 font-medium">Year</th>
              </tr>
            </thead>
            <tbody>
              {fieldExposure.map((row, index) => (
                <tr key={`${row.year}-${index}`} className="border-b border-line">
                  <td className="py-5 text-[16px]">{row.title}</td>
                  <td className="py-5 text-[16px] text-muted">{row.context}</td>
                  <td className="py-5 text-[16px] text-muted">{row.year}</td>
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

      <Section className="py-20 sm:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.avatar || index} {...item} />
          ))}
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="About me"
          title="Designing with empathy, building with purpose"
        />
        <div className="mx-auto mt-8 max-w-[680px] space-y-5 text-center text-[16px] leading-[1.8] text-muted">
          <p>
            This section is reserved for the about copy from the Figma file.
            Keep the layout, then replace the text in one place.
          </p>
          <p>
            The same about story continues on the dedicated About page, with
            additional empty image areas ready for portraits and process photos.
          </p>
        </div>
      </Section>
    </>
  )
}
