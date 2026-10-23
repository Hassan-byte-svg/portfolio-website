import { Link } from 'react-router-dom'
import type { ResearchItem } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="grid items-center gap-8 border-b border-line py-10 last:border-b-0 md:grid-cols-[280px_1fr] md:gap-12">
      <ImagePlaceholder src={item.image} className="aspect-[4/3] w-full" />
      <div>
        <p className="text-[24px] font-normal text-muted">{item.year}</p>
        <h3 className="heading-section mt-2 text-[32px] sm:text-[40px]">{item.title}</h3>
        <p className="heading-sub mt-3 max-w-[540px]">{item.summary}</p>
        <Link
          to={`/research/${item.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[24px] font-normal text-ink hover:opacity-60"
        >
          View research
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
