import { useEffect, useRef } from 'react'
import { Button } from '../components/Button'
import { LogoMarquee } from '../components/LogoMarquee'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { WorkMarquee } from '../components/WorkMarquee'
import {
  aboutCopy,
  fieldExposure,
  projects,
  site,
  testimonials,
} from '../data/content'

export function HomePage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    const heading = headingRef.current
    if (!glow || !heading) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const restGlow = () => {
      const box = heading.getBoundingClientRect()
      glow.style.transition =
        'left 0.7s cubic-bezier(0.22, 1, 0.36, 1), top 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
      glow.style.left = `${box.left + box.width / 2}px`
      glow.style.top = `${box.top + box.height / 2}px`
    }

    const followGlow = (event: PointerEvent) => {
      if (reduced) return
      glow.style.transition = 'left 0.12s linear, top 0.12s linear'
      glow.style.left = `${event.clientX}px`
      glow.style.top = `${event.clientY}px`
    }

    const leaveWindow = (event: MouseEvent) => {
      if (event.relatedTarget) return
      restGlow()
    }

    const frame = window.requestAnimationFrame(restGlow)
    window.addEventListener('pointermove', followGlow)
    document.documentElement.addEventListener('mouseleave', restGlow)
    document.addEventListener('mouseout', leaveWindow)
    window.addEventListener('resize', restGlow)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', followGlow)
      document.documentElement.removeEventListener('mouseleave', restGlow)
      document.removeEventListener('mouseout', leaveWindow)
      window.removeEventListener('resize', restGlow)
    }
  }, [])

  return (
    <>
      <div
        id="home-cursor-glow"
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-[240px] z-0 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9bb4ff]/35 blur-[110px]"
      />
      <section className="relative z-[1] -mt-[72px] overflow-hidden px-5 pb-16 pt-[92px] sm:px-8 sm:pb-[72px] sm:pt-[100px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,43,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,43,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="relative mx-auto max-w-[1100px] text-center">
          <Reveal>
            <p className="heading-eyebrow">Hi! I am Waleed Khan</p>
            <h1 ref={headingRef} className="heading-main heading-hero mx-auto mt-5 max-w-[920px]">
              Designing <span className="heading-strong">Digital Experiences</span> That Make{" "}
              <span className="heading-strong">an Impact.</span>
            </h1>
            <p className="heading-sub mx-auto mt-8 max-w-[720px]">{site.intro}</p>
          </Reveal>
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

      <Section className="relative z-[1] py-14 sm:py-20">
        <SectionHeading
          eyebrow="Works & case studies"
          title="Featured Case Studies"
          description="Selected product and research work. Open a case study for the full layout."
        />
        <div className="mt-8 flex flex-col gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <WorkMarquee />
      </Section>

      <Section className="relative z-[1] py-14 sm:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Exposure in the Field"
          description="A quick 2-minute glimpse into how I turn complex problems into elegant, human-centered solutions."
        />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] table-fixed text-left">
            <thead>
              <tr className="border-b border-line text-[16px] font-normal text-muted">
                <th className="w-[46%] py-4 pr-8 font-normal">Role</th>
                <th className="w-[34%] py-4 pr-8 font-normal">Company</th>
                <th className="w-[20%] py-4 text-right font-normal">Year</th>
              </tr>
            </thead>
            <tbody>
              {fieldExposure.map((row, index) => (
                <tr key={`${row.company}-${row.year}`} className="border-b border-line">
                  <td className="py-4 pr-8 text-[16px] font-normal">
                    <Reveal className="w-full" delay={index * 70}>{row.role}</Reveal>
                  </td>
                  <td className="py-4 pr-8 text-[16px] font-normal text-muted">
                    <Reveal className="w-full" delay={index * 70 + 40}>{row.company}</Reveal>
                  </td>
                  <td className="py-4 text-right text-[16px] font-normal text-muted">
                    <Reveal className="w-full text-right" delay={index * 70 + 80}>{row.year}</Reveal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="relative z-[1] py-14 sm:py-20">
        <SectionHeading
          title="Feedback"
          description="Your feedback matters! Share your thoughts about my portfolio, design work, and overall experience."
        />
        <div className="mt-8 rounded-[28px] bg-soft p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.avatar || index} {...item} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative z-[1] py-14 sm:py-20">
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
