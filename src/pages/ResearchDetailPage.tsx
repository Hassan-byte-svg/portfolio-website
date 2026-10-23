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
        <h1 className="heading-section">Research not found</h1>
        <Link to="/research" className="label-nav mt-6 inline-block hover:text-ink">
          ← Back to research
        </Link>
      </Section>
    )
  }

  return (
    <Section className="pb-20 pt-8 sm:pb-28 sm:pt-12">
      <Link to="/research" className="label-nav hover:text-ink">
        ← Back to research
      </Link>
      <p className="mt-8 text-[24px] font-normal text-muted">{item.year}</p>
      <h1 className="heading-main mt-2 max-w-[900px]">{item.title}</h1>
      <p className="heading-sub mt-5 max-w-[720px]">{item.summary}</p>
      <ImagePlaceholder src={item.image} className="mt-12 aspect-[16/8] w-full" />
      <div className="mt-10">
        <Button href={item.file} download>
          Download <span aria-hidden="true">↓</span>
        </Button>
      </div>
    </Section>
  )
}
