import { showcaseStrip } from '../data/content'

const copies = [0, 1, 2, 3]

export function WorkMarquee() {
  return (
    <div className="logo-marquee work-marquee mt-4 mb-2 sm:mt-6">
      <div className="showcase-track">
        {copies.map((copy) => (
          <img
            key={copy}
            src={showcaseStrip}
            alt={copy === 0 ? 'Selected product screens' : ''}
            decoding="async"
            draggable={false}
            className="work-shot"
          />
        ))}
      </div>
    </div>
  )
}
