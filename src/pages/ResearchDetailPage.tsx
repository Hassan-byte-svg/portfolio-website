import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { getResearch } from '../data/content'

export function ResearchDetailPage() {
  const { slug } = useParams()
  const item = slug ? getResearch(slug) : undefined

  if (!item) {
    return (
      <Section className="py-24 text-center">
        <h1 className="text-[40px] font-light tracking-[-0.03em]">Research not found</h1>
        <Link to="/research" className="mt-6 inline-block text-[15px] font-normal hover:opacity-60">
          ← Back
        </Link>
      </Section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="pointer-events-none absolute left-1/2 top-6 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#8aa0ff]/25 blur-[100px]" />
        <div className="relative mx-auto max-w-[860px]">
          <Link to="/projects#research" className="text-[14px] font-normal text-muted hover:text-ink">
            ← Back
          </Link>
          <p className="mt-8 text-[12px] font-normal uppercase tracking-[0.18em] text-muted">
            Research · {item.year}
          </p>
          <h1 className="mt-3 text-[40px] font-light leading-[1.12] tracking-[-0.03em] text-ink sm:text-[56px]">
            {item.title}
          </h1>
          <p className="mt-5 max-w-[640px] text-[16px] font-light leading-[1.7] text-muted sm:text-[17px]">
            {item.summary}
          </p>
          <div className="mt-8">
            <Button href={item.file} download>
              Download research
            </Button>
          </div>
        </div>
      </section>
      <Section className="pb-20 sm:pb-28">
        <ImagePlaceholder src={item.image} className="aspect-[16/8] w-full" rounded="rounded-[28px]" />
      </Section>
    </>
  )
}
