import { showcaseShots } from '../data/content'

const copies = [0, 1]

export function WorkMarquee() {
  return (
    <div className="work-marquee">
      <div className="showcase-track">
        {copies.map((copy) => (
          <div
            key={copy}
            className="showcase-set"
            aria-hidden={copy === 1}
          >
            {showcaseShots.map((shot, index) => (
              <article key={`${copy}-${shot.src}`} className="work-card">
                <img
                  src={shot.src}
                  alt={copy === 0 ? shot.alt : ''}
                  width={1672}
                  height={941}
                  decoding="async"
                  draggable={false}
                  loading={copy === 0 && index < 2 ? 'eager' : 'lazy'}
                  fetchPriority={copy === 0 && index < 2 ? 'high' : 'auto'}
                  className="work-shot"
                />
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
