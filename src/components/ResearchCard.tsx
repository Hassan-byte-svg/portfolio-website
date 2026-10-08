import { Link } from 'react-router-dom'
import type { ResearchItem } from '../data/content'
import { ImagePlaceholder } from './ImagePlaceholder'

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="grid items-center gap-8 border-b border-line py-10 last:border-b-0 md:grid-cols-[280px_1fr] md:gap-12">
      <ImagePlaceholder src={item.image} className="aspect-[4/3] w-full" />
      <div>
        <p className="text-[13px] text-muted">{item.year}</p>
        <h3 className="mt-2 text-[26px] font-light tracking-[-0.03em]">{item.title}</h3>
        <p className="mt-3 max-w-[540px] text-[16px] leading-[1.7] text-muted">{item.summary}</p>
        <Link
          to={`/research/${item.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[15px] font-normal hover:opacity-60"
        >
          View research
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
