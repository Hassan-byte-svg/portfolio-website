import { showcaseStrip } from '../data/content'

export function WorkMarquee() {
  return (
    <div className="logo-marquee mt-12">
      <div className="showcase-track">
        {[0, 1].map((copy) => (
          <img
            key={copy}
            src={showcaseStrip}
            alt={copy === 0 ? 'Selected product screens' : ''}
            className="h-[108px] w-auto shrink-0 sm:h-[128px]"
          />
        ))}
      </div>
    </div>
  )
}
