import { Button } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { LogoMarquee } from '../components/LogoMarquee'
import { PageHero } from '../components/PageHero'
import { ProjectCard } from '../components/ProjectCard'
import { ResearchCard } from '../components/ResearchCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { VideoPlaceholder } from '../components/VideoPlaceholder'
import {
  fieldExposure,
  projects,
  research,
  site,
  testimonials,
} from '../data/content'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Design, leadership <em className="italic font-light">and</em> strategy
            for <span className="font-normal">mission-critical</span> environments.
          </>
        }
        description="Case studies, research, and roles from the work already on this site."
        actions={
          <>
            <Button to="/contact">Get in touch</Button>
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV
            </Button>
          </>
        }
        footer={<LogoMarquee />}
      />

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Works & case studies"
          title="Featured Case Studies"
          description="Selected product and research work. Open a case study for the full layout."
        />
        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Research"
          title="Research"
          description="Each item opens its own page. Add PDFs under /public/assets/research/."
        />
        <div className="mt-12 flex flex-col gap-6">
          {research.map((item) => (
            <ResearchCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

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
    </>
  )
}
