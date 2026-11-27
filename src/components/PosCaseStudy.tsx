import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { ImageLightbox } from './ImageLightbox'
import { UserJourneyMap } from './UserJourneyMap'

const accent = '#F5A623'
const peach = '#FFF3E0'
const ink = '#0F172B'
const muted = '#555555'

function Em({ children }: { children: ReactNode }) {
  return <span className="font-medium" style={{ color: accent }}>{children}</span>
}

function FlagIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill={peach} />
      <path
        d="M18 34V16h12l-2.2 4.5L30 25H18"
        stroke={accent}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M18 16v18" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ProblemIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill={peach} />
      <circle cx="24" cy="18" r="6" stroke={accent} strokeWidth="2" fill="none" />
      <path
        d="M14 34c2.5-5 6.5-7.5 10-7.5S31.5 29 34 34"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M30 20h6M33 17v6" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ScopeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill={peach} />
      <circle cx="24" cy="24" r="10" stroke={accent} strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="4" fill={accent} />
      <path
        d="M24 10v4M24 34v4M10 24h4M34 24h4"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

const processSteps = [
  {
    label: 'Empathize',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="14" r="7" stroke={accent} strokeWidth="2" />
        <path
          d="M8 34c2-8 7-12 12-12s10 4 12 12"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 14c1 2 2.5 3 3 3s2-1 3-3"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: 'Define',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="10" y="8" width="16" height="22" rx="2" stroke={accent} strokeWidth="2" />
        <circle cx="26" cy="26" r="7" stroke={accent} strokeWidth="2" />
        <path d="M31 31l4 4" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Ideate',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 6c-5.5 0-10 4-10 9 0 3.5 2 6 4.5 7.5V28h11v-5.5C28 21 30 18.5 30 15c0-5-4.5-9-10-9Z"
          stroke={accent}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M16 32h8M17 36h6" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Prototyping',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="12" y="6" width="16" height="28" rx="3" stroke={accent} strokeWidth="2" />
        <rect x="15" y="10" width="10" height="16" rx="1" stroke={accent} strokeWidth="1.5" />
        <circle cx="20" cy="30" r="1.5" fill={accent} />
      </svg>
    ),
  },
  {
    label: 'Testing',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="5" y="8" width="12" height="22" rx="2" stroke={accent} strokeWidth="2" />
        <rect x="23" y="8" width="12" height="22" rx="2" stroke={accent} strokeWidth="2" />
        <path d="M9 18h4M27 16v6M24 19h6" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
] as const

const interviewQs = [
  {
    question:
      'What are the main challenges you face as an auto spare part shop owner when it comes to managing your business operations?',
    quote:
      'Keeping inventory accurate is the hardest part. Stock moves fast, and when we guess wrong we lose both customers and money to competitors who already know what is on the shelf.',
  },
  {
    question:
      'What kinds of changes have you had to deal with in the past, and how did you adapt to them?',
    quote:
      'New vehicle models keep arriving, so the parts list never sits still. We adapt by updating inventory constantly and relying on regular suppliers — but without a clear system it is easy to fall behind.',
  },
] as const

/**
 * Native HTML POS case study — sharp text/icons, Figma-aligned layout.
 * No Full Figma export raster; no Open in Figma CTA.
 */
export function PosCaseStudy({
  project,
  backTo = '/projects',
}: {
  project: Project
  backTo?: string
}) {
  const cover = project.image

  return (
    <div className="min-h-screen bg-white antialiased" style={{ color: ink }}>
      <div className="sticky top-0 z-30 border-b border-black/5 bg-white px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-[1000px] items-center gap-3">
          <div className="rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal text-[#0F172B]/80">
            {project.caseStudyTitle}
          </p>
          <Link
            to={backTo}
            className="hidden shrink-0 text-[13px] font-normal text-[#0F172B]/45 transition-opacity hover:text-[#0F172B] sm:inline"
          >
            Work
          </Link>
        </div>
      </div>

      {/* Title */}
      <header className="mx-auto max-w-[920px] px-5 pb-4 pt-14 text-center sm:px-8">
        <h1 className="text-[42px] font-light tracking-[-0.03em] sm:text-[56px]">
          UX UI{' '}
          <span
            className="rounded-full px-5 py-1 font-normal"
            style={{ background: peach, color: accent }}
          >
            Project
          </span>
        </h1>
      </header>

      {/* Aim / Problem / Scope — alternating alignment */}
      <section className="mx-auto max-w-[920px] space-y-14 px-5 py-10 sm:px-8">
        <div className="flex max-w-[540px] gap-4">
          <FlagIcon />
          <div>
            <h2 className="text-[22px] font-medium" style={{ color: accent }}>
              Aim:
            </h2>
            <p className="mt-2 text-[16px] font-light leading-[1.75]" style={{ color: muted }}>
              Develop a <Em>customer-focused</Em> POS system to improve efficiency and
              competitiveness of offline <Em>auto parts stores</Em>.
            </p>
          </div>
        </div>

        <div className="ml-auto flex max-w-[560px] gap-4 sm:text-left">
          <ProblemIcon />
          <div>
            <h2 className="text-[22px] font-medium" style={{ color: accent }}>
              Problem Statement:
            </h2>
            <p className="mt-2 text-[16px] font-light leading-[1.75]" style={{ color: muted }}>
              The automotive parts industry is <Em>evolving rapidly</Em>, with changing consumer
              demands, technology advancements, and competitive pressures.{' '}
              <Em>Traditional offline stores often struggle to keep up</Em>, lacking tools to manage
              inventory, streamline transactions, and enhance customer experiences. Without a modern
              POS system, they risk falling behind competitors and{' '}
              <Em>failing to meet customer needs</Em>.
            </p>
          </div>
        </div>

        <div className="flex max-w-[560px] gap-4">
          <ScopeIcon />
          <div>
            <h2 className="text-[22px] font-medium" style={{ color: accent }}>
              Scope:
            </h2>
            <p className="mt-2 text-[16px] font-light leading-[1.75]" style={{ color: muted }}>
              This project targets the challenges faced by urban offline{' '}
              <Em>auto parts stores, particularly in Abbottabad, Pakistan</Em>. Through thorough
              research and interviews in the region, we aim to understand the specific needs and
              pain points of local retailers. These insights will guide the creation of a customized
              POS solution, offering a roadmap to enhance operational efficiency,{' '}
              <Em>improve customer satisfaction</Em>, and{' '}
              <Em>foster business growth in this sector</Em>.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mx-auto max-w-[920px] px-5 py-14 text-center sm:px-8">
        <h2 className="text-[32px] font-medium sm:text-[40px]" style={{ color: accent }}>
          Design Process
        </h2>
        <div
          className="mt-8 rounded-[28px] border-2 px-4 py-10 sm:px-10"
          style={{ borderColor: accent, background: '#FFF8F0' }}
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 sm:gap-4">
            {processSteps.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-3">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white"
                  style={{ borderColor: accent }}
                >
                  {step.icon}
                </div>
                <p className="text-[14px] font-medium sm:text-[15px]" style={{ color: accent }}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Research */}
      <section className="mx-auto max-w-[920px] px-5 py-12 sm:px-8">
        <h2 className="text-center text-[36px] font-light tracking-[-0.02em] sm:text-[44px]">
          Primary{' '}
          <span
            className="rounded-full px-5 py-1 font-normal"
            style={{ background: peach, color: accent }}
          >
            Research
          </span>
        </h2>
        <p
          className="mx-auto mt-6 max-w-[720px] text-center text-[16px] font-light leading-[1.75]"
          style={{ color: muted }}
        >
          I conducted interviews with some <Em>20 auto spare part shop owners and employees</Em> for
          primary research, to gain insights into their challenges, obstacles, and strategies. The
          aim was to gather firsthand information directly from stakeholders in the industry to
          inform the development of a more effective point of sale (POS) software tailored to their
          needs.
        </p>

        {/* Q&A */}
        <div className="relative mx-auto mt-14 max-w-[820px]">
          <div className="mb-10 flex justify-center">
            <div
              className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 bg-white"
              style={{ borderColor: accent }}
            >
              <span className="text-[22px] font-medium" style={{ color: accent }}>
                Q&amp;A
              </span>
              <span
                className="absolute -right-2 -top-1 text-[28px] font-light"
                style={{ color: accent }}
                aria-hidden="true"
              >
                ?
              </span>
              <span
                className="absolute -bottom-1 -left-3 text-[20px] font-light opacity-70"
                style={{ color: accent }}
                aria-hidden="true"
              >
                ?
              </span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
            {interviewQs.map((item) => (
              <article key={item.question} className="text-left">
                <p className="text-[15px] font-medium leading-[1.55]" style={{ color: accent }}>
                  {item.question}
                </p>
                <blockquote
                  className="mt-4 border-l-2 pl-4 text-[14px] font-light leading-[1.7]"
                  style={{ borderColor: accent, color: muted }}
                >
                  “{item.quote}”
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <UserJourneyMap />

      {/* Point of Sale product shot — sharp cover, no full Figma raster */}
      <section className="mx-auto max-w-[920px] px-5 py-14 sm:px-8">
        <h2
          className="text-center text-[28px] font-medium sm:text-[34px]"
          style={{ color: accent }}
        >
          Point of Sale
        </h2>
        <p className="mt-2 text-center text-[14px] font-light text-[#6B6B6B]">
          Click the screen to zoom
        </p>
        <div className="mx-auto mt-8 max-w-[min(100%,1400px)]">
          <ImageLightbox src={cover} alt="POS Auto Spare Parts dashboard">
            <img
              src={cover}
              alt=""
              width={1400}
              height={1030}
              decoding="async"
              loading="lazy"
              className="mx-auto block h-auto w-full max-w-[1400px] rounded-[20px] object-contain"
              style={{ imageRendering: 'auto' }}
            />
          </ImageLightbox>
        </div>
      </section>

      <div className="mx-auto flex max-w-[920px] justify-start px-5 py-12 sm:px-8">
        <Link
          to={backTo}
          className="text-[16px] font-normal transition-opacity hover:opacity-60"
          style={{ color: ink }}
        >
          ← Back to Work
        </Link>
      </div>
    </div>
  )
}
