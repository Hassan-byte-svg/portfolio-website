import { logos } from '../data/content'

export function LogoMarquee() {
  const strip = [...logos, ...logos, ...logos]

  return (
    <div className="relative mx-auto mt-12 max-w-[1120px] text-center sm:mt-16">
      <p className="text-[16px] font-normal text-muted">
        Selected Clients and Collaborations
      </p>
      <div className="logo-marquee mt-6">
        <div className="logo-marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-16 pr-16"
              aria-hidden={copy === 1}
            >
              {strip.map((logo, index) => (
                <span key={`${copy}-${logo.alt}-${index}`} className="logo-chip">
                  <img
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ''}
                    decoding="sync"
                    draggable={false}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
