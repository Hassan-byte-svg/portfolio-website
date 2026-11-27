import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { ImageLightbox } from './ImageLightbox'
import { NextCaseStudyLink } from './NextCaseStudyLink'
import { UserJourneyMap } from './UserJourneyMap'

const accent = '#F5A623'
const peach = '#FFF3E0'
const ink = '#0F172B'
const muted = '#555555'
const soft = '#FFF8F0'

function Em({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium" style={{ color: accent }}>
      {children}
    </span>
  )
}

function PillTitle({ before, highlight }: { before: string; highlight: string }) {
  return (
    <h2 className="text-center text-[36px] font-light tracking-[-0.02em] sm:text-[44px]">
      {before}{' '}
      <span
        className="rounded-full px-5 py-1 font-normal"
        style={{ background: peach, color: accent }}
      >
        {highlight}
      </span>
    </h2>
  )
}

function AccentHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-[32px] font-medium sm:text-[40px]" style={{ color: accent }}>
      {children}
    </h2>
  )
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
  {
    question:
      'Have you considered adopting a point of sale (POS) software for your business? If so, what features would be most important to you?',
    quote:
      'Yes, we have looked at POS tools. The features that matter most are simple inventory tracking, fast billing, and a price we can actually afford — anything too complex will not get used.',
  },
] as const

const findings = [
  {
    title: 'Overall Business Performance',
    body: 'Most shop owners described a challenging performance climate — thin margins, uneven demand, and pressure to stay competitive day to day.',
  },
  {
    title: 'Primary Concerns for Auto Spare Part Shop Owners',
    body: 'Competition from online sellers and larger chains, plus difficulty managing inventory accurately, came up repeatedly as top concerns.',
  },
  {
    title: 'Readiness for Technological Adoption',
    body: 'About 80% of respondents were open to adopting POS software, but many saw complexity as the main barrier to switching.',
  },
  {
    title: 'Device Preferences',
    body: 'Most preferred desktop computers for day-to-day operations, while a smaller group favored tablets or mobile for flexibility on the floor.',
  },
] as const

const personas = [
  {
    name: 'Sara Ahmed',
    quote:
      'I strive for excellence in every repair, but sourcing specific parts promptly is crucial; delays in availability hinder my efficiency.',
    meta: [
      ['Age', '28'],
      ['Education', 'B.E Engineer'],
      ['Status', 'Single'],
      ['Occupation', 'Service Technician'],
      ['Location', 'Dubai'],
    ],
    traits: ['Calm', 'Thinker', 'Creative'],
    background:
      'Sara is a seasoned service technician who balances precision repairs with the daily pressure of finding the right parts quickly for her workshop.',
    panels: [
      {
        title: 'Goals',
        items: ['Professional excellence', 'Efficient workshop workflow', 'Continuous learning'],
      },
      {
        title: 'Frustrations',
        items: [
          'Parts availability delays',
          'Inventory management challenges',
          'Tools that feel too complex',
        ],
      },
      {
        title: 'Needs',
        items: [
          'Reliable parts supply',
          'Clear stock visibility',
          'Fast, dependable POS workflows',
        ],
      },
      {
        title: 'Motivation',
        items: ['Delivering excellent service', 'Growing as a technician'],
      },
    ],
  },
  {
    name: 'Ahmed',
    quote: 'I want performance and convenience — without wasting time chasing unclear quotes.',
    meta: [
      ['Age', '40'],
      ['Education', 'BA Business'],
      ['Status', 'Married'],
      ['Occupation', 'Busy Professional'],
      ['Location', 'Dubai'],
      ['Vehicle', 'High-performance sports car'],
    ],
    traits: ['Passionate', 'Discerning', 'Driven'],
    background:
      'Ahmed is a busy professional and car enthusiast who expects transparent communication and dependable service when maintaining his vehicle.',
    panels: [
      {
        title: 'Goals',
        items: ['Keep the car performing at its best', 'Convenient, trusted service'],
      },
      {
        title: 'Frustrations',
        items: ['Lack of transparency', 'Time wasted on unclear timelines'],
      },
      {
        title: 'Needs',
        items: ['Dependable service', 'Clear communication and pricing'],
      },
      {
        title: 'Motivation',
        items: ['Passion for sports cars', 'Confidence in every service visit'],
      },
    ],
  },
] as const

const iaBranches = [
  {
    title: 'Billing',
    nodes: ['New Bill', 'Bills', 'List', 'Current Bill'],
  },
  {
    title: 'Catalog',
    nodes: ['Items', 'Items Category', 'Add Item', 'Item List', 'Update Stock'],
  },
  {
    title: 'People',
    nodes: ['Customers', 'Sales', 'Messages', 'Live Chat', 'Emails', 'Leads'],
  },
  {
    title: 'Account',
    nodes: ['Settings', 'Profile', 'Appearance', 'Notification'],
  },
] as const

const flowSteps = [
  'Start',
  'Search for auto spare parts',
  'Part available?',
  'Add parts to cart',
  'Cart complete?',
  'Checkout & details',
  'Pay bill',
  'Print receipt',
  'Order complete',
] as const

const colors = [
  { name: 'Black 1', hex: '#030202' },
  { name: 'Black 2', hex: '#1D1D1D' },
  { name: 'Gray 1', hex: '#333333' },
  { name: 'Gray 5', hex: '#E0E0E0' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Accent', hex: '#F5A623' },
  { name: 'Info', hex: '#2F80ED' },
  { name: 'Success', hex: '#27AE60' },
  { name: 'Warning', hex: '#E2B93B' },
  { name: 'Error', hex: '#EB5757' },
] as const

const typeScale = [
  { name: 'Heading 1', size: '56px', lh: '61.6px' },
  { name: 'Heading 2', size: '48px', lh: '52.8px' },
  { name: 'Heading 3', size: '40px', lh: '44px' },
  { name: 'Heading 4', size: '32px', lh: '35.2px' },
  { name: 'Body Large', size: '20px', lh: '28px' },
  { name: 'Body', size: '16px', lh: '22.4px' },
  { name: 'Small', size: '14px', lh: '19.6px' },
] as const

const visualSections = [
  {
    title: 'Components, wireframes & high-fidelity screens',
    caption: 'UI kit, low-fi wireframes, login and dashboard — shown at native 1200px width.',
    src: '/assets/images/projects/pde-auto-group/sections/hifi-overview.png',
    width: 1200,
    height: 3200,
  },
  {
    title: 'Inventory & sales',
    caption: 'Manage inventory categories, item lists, and sales overview.',
    src: '/assets/images/projects/pde-auto-group/sections/hifi-inventory-sales.png',
    width: 1200,
    height: 2800,
  },
  {
    title: 'Billing & settings',
    caption: 'New bill payment flow, profile, and appearance preferences.',
    src: '/assets/images/projects/pde-auto-group/sections/hifi-billing-settings.png',
    width: 1200,
    height: 2800,
  },
] as const

function SectionImage({
  title,
  caption,
  src,
  width,
  height,
}: {
  title: string
  caption: string
  src: string
  width: number
  height: number
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8">
      <h3 className="text-center text-[24px] font-medium sm:text-[28px]" style={{ color: accent }}>
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-[640px] text-center text-[14px] font-light text-[#6B6B6B]">
        {caption}
      </p>
      <div className="mx-auto mt-8" style={{ maxWidth: width }}>
        <ImageLightbox src={src} alt={title}>
          <img
            src={src}
            alt=""
            width={width}
            height={height}
            decoding="async"
            loading="lazy"
            draggable={false}
            className="block h-auto w-full bg-white"
            style={{ maxWidth: width, imageRendering: 'auto' }}
          />
        </ImageLightbox>
      </div>
    </section>
  )
}

/**
 * Full POS case study in HTML (+ native-width screen exports).
 * No Open in Figma CTA. No single “Full Figma export” dump.
 */
export function PosCaseStudy({
  project,
  backTo = '/projects',
  nextProject,
}: {
  project: Project
  backTo?: string
  nextProject?: Project
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
            className="shrink-0 text-[13px] font-normal text-[#0F172B]/45 transition-opacity hover:text-[#0F172B]"
          >
            Work
          </Link>
        </div>
      </div>

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

      {/* Aim / Problem / Scope */}
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

        <div className="ml-auto flex max-w-[560px] gap-4">
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
        <AccentHeading>Design Process</AccentHeading>
        <div
          className="mt-8 rounded-[28px] border-2 px-4 py-10 sm:px-10"
          style={{ borderColor: accent, background: soft }}
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
        <PillTitle before="Primary" highlight="Research" />
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

        <div className="relative mx-auto mt-14 max-w-[900px]">
          <div className="mb-10 flex justify-center">
            <div
              className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 bg-white"
              style={{ borderColor: accent }}
            >
              <span className="text-[22px] font-medium" style={{ color: accent }}>
                Q&amp;A
              </span>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
            {interviewQs.map((item, index) => (
              <article
                key={item.question}
                className={`text-left ${index === 2 ? 'sm:col-span-2 sm:mx-auto sm:max-w-[480px]' : ''}`}
              >
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

      {/* Findings */}
      <section className="mx-auto max-w-[920px] px-5 py-14 sm:px-8">
        <AccentHeading>Findings</AccentHeading>
        <p
          className="mx-auto mt-5 max-w-[720px] text-center text-[16px] font-light leading-[1.75]"
          style={{ color: muted }}
        >
          Based on the interviews conducted with auto spare part shop owners and employees, several
          key findings and outcomes emerged:
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {findings.map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] border border-[#f0e0c8] px-5 py-5"
              style={{ background: soft }}
            >
              <h3 className="text-[17px] font-medium" style={{ color: accent }}>
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] font-light leading-[1.7]" style={{ color: muted }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Personas */}
      <section className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8">
        <PillTitle before="User" highlight="Personas" />
        <p
          className="mx-auto mt-5 max-w-[680px] text-center text-[15px] font-light leading-[1.7]"
          style={{ color: muted }}
        >
          Personas capture the needs, frustrations, and motivations of the people this POS is built
          for — workshop staff and the customers they serve.
        </p>

        <div className="mt-12 space-y-16">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start"
            >
              <article className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm">
                <div
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full text-[28px] font-medium text-white"
                  style={{ background: accent }}
                  aria-hidden="true"
                >
                  {persona.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <h3 className="mt-5 text-center text-[22px] font-medium" style={{ color: accent }}>
                  {persona.name}
                </h3>
                <p
                  className="mt-3 text-center text-[14px] font-light italic leading-[1.6]"
                  style={{ color: accent }}
                >
                  “{persona.quote}”
                </p>
                <dl className="mt-5 space-y-2 text-[14px]">
                  {persona.meta.map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-3 border-b border-black/5 pb-2">
                      <dt className="font-medium text-[#888]">{label}</dt>
                      <dd className="text-right font-light">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {persona.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full border px-3 py-1 text-[13px] font-medium"
                      style={{ borderColor: accent, color: accent }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[14px] font-light leading-[1.65]" style={{ color: muted }}>
                  {persona.background}
                </p>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                {persona.panels.map((panel) => (
                  <div
                    key={panel.title}
                    className="rounded-[20px] px-5 py-4"
                    style={{ background: soft }}
                  >
                    <h4 className="text-[16px] font-medium" style={{ color: accent }}>
                      {panel.title}
                    </h4>
                    <ul className="mt-3 space-y-2 text-[14px] font-light leading-[1.55]" style={{ color: muted }}>
                      {panel.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span style={{ color: accent }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <UserJourneyMap />

      {/* Information Architecture */}
      <section className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8">
        <PillTitle before="Information" highlight="Architecture" />
        <p
          className="mx-auto mt-5 max-w-[640px] text-center text-[15px] font-light leading-[1.7]"
          style={{ color: muted }}
        >
          A clear hierarchy from onboarding and dashboard into billing, catalog, customers, messaging,
          and account settings.
        </p>

        <div className="mx-auto mt-10 max-w-[720px] text-center">
          <div
            className="inline-flex rounded-[14px] px-5 py-3 text-[15px] font-medium text-white"
            style={{ background: accent }}
          >
            Onboarding → Dashboard
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {iaBranches.map((branch) => (
            <div
              key={branch.title}
              className="rounded-[20px] border border-[#f0e0c8] p-4"
              style={{ background: soft }}
            >
              <p className="text-[15px] font-medium" style={{ color: accent }}>
                {branch.title}
              </p>
              <ul className="mt-3 space-y-2">
                {branch.nodes.map((node) => (
                  <li
                    key={node}
                    className="rounded-[10px] border border-[#f0e0c8] bg-white px-3 py-2 text-[13px] font-light"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* User Flow */}
      <section className="mx-auto max-w-[920px] px-5 py-14 sm:px-8">
        <PillTitle before="User" highlight="Flow" />
        <p className="mt-3 text-center text-[15px] font-medium" style={{ color: accent }}>
          Customer&apos;s Flow
        </p>
        <p
          className="mx-auto mt-3 max-w-[560px] text-center text-[15px] font-light leading-[1.7]"
          style={{ color: muted }}
        >
          To find desired parts and complete a purchase on the platform, hassle-free.
        </p>

        <ol className="mx-auto mt-10 flex max-w-[420px] flex-col items-center gap-0">
          {flowSteps.map((step, index) => (
            <li key={step} className="flex w-full flex-col items-center">
              <div
                className={`w-full max-w-[320px] rounded-[14px] border-2 px-4 py-3 text-center text-[14px] font-medium ${
                  index === 0 || index === flowSteps.length - 1 ? 'text-white' : ''
                }`}
                style={
                  index === 0 || index === flowSteps.length - 1
                    ? { background: accent, borderColor: accent }
                    : { borderColor: accent, color: ink, background: 'white' }
                }
              >
                {step}
              </div>
              {index < flowSteps.length - 1 ? (
                <span className="my-1 text-[18px]" style={{ color: accent }} aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      {/* Design system */}
      <section className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8">
        <AccentHeading>Design System</AccentHeading>
        <p
          className="mx-auto mt-4 max-w-[640px] text-center text-[15px] font-light leading-[1.7]"
          style={{ color: muted }}
        >
          Poppins type scale, core palette, and layout rules used across the POS product screens.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm">
            <p className="text-[15px] font-medium" style={{ color: accent }}>
              01. Color
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {colors.map((swatch) => (
                <div key={swatch.hex} className="text-center">
                  <div
                    className="mx-auto h-12 w-12 rounded-[12px] border border-black/10"
                    style={{ background: swatch.hex }}
                  />
                  <p className="mt-2 text-[11px] font-medium">{swatch.name}</p>
                  <p className="text-[10px] font-light text-[#888]">{swatch.hex}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm">
            <p className="text-[15px] font-medium" style={{ color: accent }}>
              02. Typography — Poppins
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[320px] text-left text-[13px]">
                <thead>
                  <tr className="border-b border-black/10 text-[#888]">
                    <th className="py-2 font-medium">Name</th>
                    <th className="py-2 font-medium">Size</th>
                    <th className="py-2 font-medium">Line height</th>
                  </tr>
                </thead>
                <tbody>
                  {typeScale.map((row) => (
                    <tr key={row.name} className="border-b border-black/5">
                      <td className="py-2 font-medium">{row.name}</td>
                      <td className="py-2 font-light">{row.size}</td>
                      <td className="py-2 font-light">{row.lh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[20px] border border-[#f0e0c8] p-5" style={{ background: soft }}>
            <p className="text-[15px] font-medium" style={{ color: accent }}>
              Desktop 1440
            </p>
            <p className="mt-2 text-[14px] font-light" style={{ color: muted }}>
              12 columns · 65px column · 30px gutter
            </p>
          </div>
          <div className="rounded-[20px] border border-[#f0e0c8] p-5" style={{ background: soft }}>
            <p className="text-[15px] font-medium" style={{ color: accent }}>
              Desktop 1024
            </p>
            <p className="mt-2 text-[14px] font-light" style={{ color: muted }}>
              12 columns · 50px column · 30px gutter
            </p>
          </div>
        </div>
      </section>

      {/* High-fidelity screen exports — native width, no upscale */}
      <div className="border-t border-[#eee] bg-[#fafafa]">
        <div className="mx-auto max-w-[920px] px-5 pt-14 text-center sm:px-8">
          <PillTitle before="High-Fidelity" highlight="Design" />
          <p
            className="mx-auto mt-4 max-w-[640px] text-[15px] font-light leading-[1.7]"
            style={{ color: muted }}
          >
            Based on research findings, the product targets computer and tablet. Screens below are
            tablet designs, shown at native export size for clarity.
          </p>
        </div>

        {visualSections.map((section) => (
          <SectionImage key={section.src} {...section} />
        ))}
      </div>

      {/* Point of Sale cover */}
      <section className="mx-auto max-w-[920px] px-5 py-14 sm:px-8">
        <AccentHeading>Point of Sale</AccentHeading>
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

      <div className="mx-auto flex max-w-[920px] flex-col items-stretch justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
        <Link
          to={backTo}
          className="text-[16px] font-normal transition-opacity hover:opacity-60"
          style={{ color: ink }}
        >
          ← Back to Work
        </Link>
        {nextProject ? (
          <NextCaseStudyLink next={nextProject} from={backTo} tone="orange" />
        ) : null}
      </div>
    </div>
  )
}
