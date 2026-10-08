import { Link, useParams } from 'react-router-dom'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { getResearch } from '../data/content'

export function ResearchDetailPage() {
  const { slug } = useParams()
  const item = slug ? getResearch(slug) : undefined

  if (!item) {
    return (
      <Section className="py-24 text-center">
        <h1 className="text-3xl font-light">Research not found</h1>
        <Link to="/research" className="mt-6 inline-block hover:opacity-60">
          ← Back to research
        </Link>
      </Section>
    )
  }

  return (
    <Section className="pb-20 pt-8 sm:pb-28 sm:pt-12">
      <Link to="/research" className="text-[14px] text-muted hover:text-ink">
        ← Back to research
      </Link>
      <p className="mt-8 text-[13px] text-muted">{item.year}</p>
      <h1 className="mt-2 max-w-[820px] text-[40px] font-light leading-[1.15] tracking-[-0.03em] sm:text-[56px]">
        {item.title}
      </h1>
      <p className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-muted">
        {item.summary}
      </p>
      <ImagePlaceholder src={item.image} className="mt-12 aspect-[16/8] w-full" />
      <div className="mt-10">
        <a
          href={item.file}
          download
          className="inline-flex rounded-full border border-ink px-6 py-3 text-[15px] font-normal hover:bg-soft"
        >
          Download research
        </a>
      </div>
    </Section>
  )
}
