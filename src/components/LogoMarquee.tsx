import { ImagePlaceholder } from './ImagePlaceholder'
import { logos } from '../data/content'

export function LogoMarquee() {
  const strip = [...logos, ...logos]

  return (
    <div className="relative mx-auto mt-12 max-w-[1120px] text-center">
      <p className="text-[12px] font-normal uppercase tracking-[0.16em] text-muted">
        Trusted by teams at companies like
      </p>
      <div className="logo-marquee mt-6">
        <div className="logo-marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-10" aria-hidden={copy === 1}>
              {strip.map((logo, index) => (
                <ImagePlaceholder
                  key={`${copy}-${logo}-${index}`}
                  src={logo}
                  className="h-10 w-[140px] shrink-0"
                  rounded="rounded-md"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
