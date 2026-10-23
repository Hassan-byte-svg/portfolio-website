import { logos } from '../data/content'

export function LogoMarquee() {
  const strip = [...logos, ...logos, ...logos, ...logos]

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
                <img
                  key={`${copy}-${logo.alt}-${index}`}
                  src={logo.src}
                  alt={copy === 0 ? logo.alt : ''}
                  className="h-10 w-auto shrink-0 object-contain"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
