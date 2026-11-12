import { showcaseStrip } from '../data/content'

const copies = [0, 1, 2, 3]

export function WorkMarquee() {
  return (
    <div className="logo-marquee work-marquee my-10 sm:my-14">
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
