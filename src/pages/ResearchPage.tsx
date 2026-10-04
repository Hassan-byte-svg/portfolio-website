import { Button } from '../components/Button'
import { ResearchCard } from '../components/ResearchCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { research, site } from '../data/content'

export function ResearchPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="pointer-events-none absolute left-1/2 top-6 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#8aa0ff]/25 blur-[100px]" />
        <div className="relative mx-auto max-w-[860px] text-center">
          <p className="mb-3 text-[12px] font-normal uppercase tracking-[0.18em] text-muted">
            Research
          </p>
          <h1 className="text-[40px] font-light leading-[1.12] tracking-[-0.03em] text-ink sm:text-[58px] lg:text-[64px]">
            Research
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.7] text-muted sm:text-[17px]">
            Each item opens its own page. Add PDFs under /public/assets/research/.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/projects#research">See it on Work</Button>
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV
            </Button>
          </div>
        </div>
      </section>

      <Section className="pb-20 sm:pb-28">
        <SectionHeading
          eyebrow="Writing & studies"
          title="Selected research"
          description="The same research items also live on the Work page."
        />
        <div className="mt-8 flex flex-col gap-6">
          {research.map((item) => (
            <ResearchCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>
    </>
  )
}
