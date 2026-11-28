import type { ReactNode } from 'react'
import type { Project } from '../data/content'
import { useTheme } from '../theme/ThemeProvider'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { ImageLightbox } from './ImageLightbox'
import { NextProjectCard } from './NextProjectCard'
import { PosHifiDesign } from './PosHifiDesign'
import { ThemeToggle } from './ThemeToggle'
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

function IaNode({
  label,
  solid = false,
  className = '',
}: {
  label: string
  solid?: boolean
  className?: string
}) {
  return (
    <div
      className={`inline-flex min-w-[108px] items-center justify-center rounded-[4px] border px-3 py-2 text-center text-[12px] font-medium leading-tight sm:min-w-[120px] sm:text-[13px] ${className}`}
      style={
        solid
          ? { background: accent, borderColor: accent, color: '#fff' }
          : { background: peach, borderColor: accent, color: ink }
      }
    >
      {label}
    </div>
  )
}

function IaArrowDown({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`} aria-hidden="true">
      <span className="h-4 w-px" style={{ background: '#C9C9C9' }} />
      <span className="text-[10px] leading-none" style={{ color: '#C9C9C9' }}>
        ▼
      </span>
    </div>
  )
}

function IaArrowRight() {
  return (
    <span className="px-1 text-[11px]" style={{ color: '#C9C9C9' }} aria-hidden="true">
      ▶
    </span>
  )
}

function FlowCircle({ label }: { label: ReactNode }) {
  return (
    <div
      className="flex h-[72px] w-[72px] items-center justify-center rounded-full text-center text-[12px] font-semibold leading-tight text-white sm:h-[84px] sm:w-[84px] sm:text-[13px]"
      style={{ background: accent }}
    >
      {label}
    </div>
  )
}

function FlowRect({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`inline-flex min-w-[160px] max-w-[220px] items-center justify-center rounded-[6px] border-2 bg-white px-3 py-2.5 text-center text-[12px] font-medium leading-snug sm:min-w-[190px] sm:text-[13px] ${className}`}
      style={{ borderColor: accent, color: ink }}
    >
      {label}
    </div>
  )
}

function FlowDiamond({ label }: { label: string }) {
  return (
    <div className="relative flex h-[108px] w-[108px] items-center justify-center sm:h-[120px] sm:w-[120px]">
      <div
        className="absolute inset-[14px] rotate-45 rounded-[4px] border-2 bg-white"
        style={{ borderColor: accent }}
        aria-hidden="true"
      />
      <p
        className="relative z-[1] max-w-[84px] text-center text-[11px] font-medium leading-tight sm:max-w-[90px] sm:text-[12px]"
        style={{ color: ink }}
      >
        {label}
      </p>
    </div>
  )
}

function FlowDown() {
  return (
    <div className="flex flex-col items-center py-0.5" aria-hidden="true">
      <span className="h-3 w-px" style={{ background: '#C9C9C9' }} />
      <span className="text-[9px] leading-none" style={{ color: '#C9C9C9' }}>
        ▼
      </span>
    </div>
  )
}

function FlowYesDown() {
  return (
    <span
      className="absolute left-1/2 top-full -translate-x-1/2 pt-0.5 text-[11px] font-semibold"
      style={{ color: '#27AE60' }}
    >
      Yes
    </span>
  )
}

function FlowNo({ side = 'right' }: { side?: 'left' | 'right' }) {
  return (
    <span
      className={`absolute top-1/2 -translate-y-1/2 text-[11px] font-semibold ${
        side === 'right' ? 'left-full ml-1.5' : 'right-full mr-1.5'
      }`}
      style={{ color: '#EB5757' }}
    >
      No
    </span>
  )
}

/** Customer purchase flow — Start → search → cart → checkout → pay → End. */
function CustomerFlowMap() {
  return (
    <div className="mx-auto mt-10 w-full max-w-[720px] overflow-x-auto pb-2">
      <div className="mx-auto flex min-w-[560px] flex-col items-center">
        <FlowCircle label="Start" />
        <FlowDown />
        <FlowRect label="Search for Auto Spare Parts" />
        <FlowDown />

        {/* Part available? */}
        <div className="relative mb-4 flex w-full items-center justify-center">
          <div className="relative">
            <FlowDiamond label="Is the desired part available?" />
            <FlowYesDown />
            <FlowNo side="right" />
          </div>
          <div className="absolute left-[calc(50%+78px)] top-1/2 flex -translate-y-1/2 items-center gap-1">
            <span className="h-px w-5" style={{ background: '#C9C9C9' }} aria-hidden="true" />
            <FlowRect label="Search for Alternative part" className="min-w-[140px] max-w-[160px]" />
          </div>
        </div>
        <FlowDown />

        <FlowRect label="Add parts to cart" />
        <FlowDown />

        {/* Cart complete? */}
        <div className="relative mb-4 flex w-full items-center justify-center">
          <div className="absolute right-[calc(50%+78px)] top-1/2 flex -translate-y-1/2 items-center gap-1">
            <FlowRect label="Continue Shopping" className="min-w-[140px] max-w-[160px]" />
            <span className="h-px w-5" style={{ background: '#C9C9C9' }} aria-hidden="true" />
          </div>
          <div className="relative">
            <FlowDiamond label="Is the cart complete?" />
            <FlowNo side="left" />
            <FlowYesDown />
          </div>
        </div>
        <FlowDown />

        <FlowRect label="Proceed to checkout" />
        <FlowDown />
        <FlowRect label="Enter your personal details" />
        <FlowDown />

        {/* Details correct? */}
        <div className="relative mb-4 flex w-full items-center justify-center">
          <div className="absolute right-[calc(50%+78px)] top-1/2 flex -translate-y-1/2 items-center gap-1">
            <FlowRect label="Re-enter your details" className="min-w-[140px] max-w-[160px]" />
            <span className="h-px w-5" style={{ background: '#C9C9C9' }} aria-hidden="true" />
          </div>
          <div className="relative">
            <FlowDiamond label="Are the details correct?" />
            <FlowNo side="left" />
            <FlowYesDown />
          </div>
        </div>
        <FlowDown />

        <FlowRect label="Pay the bill" />
        <FlowDown />

        {/* Payment method */}
        <div className="relative w-full max-w-[520px]">
          <div className="flex justify-center">
            <div className="relative">
              <FlowDiamond label="Payment Method?" />
              <span
                className="absolute right-full top-1/2 mr-1 -translate-y-1/2 text-[11px] font-semibold"
                style={{ color: accent }}
              >
                Cash
              </span>
              <span
                className="absolute left-full top-1/2 ml-1 -translate-y-1/2 text-[11px] font-semibold"
                style={{ color: accent }}
              >
                Online
              </span>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-6 px-2">
            <div className="flex flex-col items-center">
              <span className="h-3 w-px" style={{ background: '#C9C9C9' }} aria-hidden="true" />
              <FlowRect label="Pay the bill" className="min-w-[130px]" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="h-3 w-px" style={{ background: '#C9C9C9' }} aria-hidden="true" />
              <FlowRect label="Fill in Card Details" className="min-w-[130px]" />
              <FlowDown />
              <FlowRect label="Pay the bill" className="min-w-[130px]" />
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center" aria-hidden="true">
            <div className="flex w-[55%] justify-between">
              <span className="h-4 w-px" style={{ background: '#C9C9C9' }} />
              <span className="h-4 w-px" style={{ background: '#C9C9C9' }} />
            </div>
            <span className="h-px w-[55%]" style={{ background: '#C9C9C9' }} />
            <span className="h-3 w-px" style={{ background: '#C9C9C9' }} />
            <span className="text-[9px] leading-none" style={{ color: '#C9C9C9' }}>
              ▼
            </span>
          </div>
        </div>

        <FlowCircle
          label={
            <>
              Order
              <br />
              Complete
            </>
          }
        />
        <FlowDown />
        <FlowCircle label="End" />
      </div>
    </div>
  )
}

/** Figma-style IA tree — On-boarding → Dashboard → three branches. */
function InformationArchitectureMap() {
  return (
    <div className="mx-auto mt-10 w-full max-w-[980px] overflow-x-auto pb-2">
      <div className="mx-auto flex min-w-[720px] flex-col items-center">
        <IaNode label="On-boarding" solid />
        <IaArrowDown />
        <IaNode label="Dashboard" solid />

        {/* Trunk split */}
        <div className="relative mt-1 flex w-full max-w-[860px] flex-col items-center" aria-hidden="true">
          <span className="h-5 w-px" style={{ background: '#C9C9C9' }} />
          <span className="h-px w-[78%]" style={{ background: '#C9C9C9' }} />
          <div className="flex w-[78%] justify-between">
            <span className="h-5 w-px" style={{ background: '#C9C9C9' }} />
            <span className="h-5 w-px" style={{ background: '#C9C9C9' }} />
            <span className="h-5 w-px" style={{ background: '#C9C9C9' }} />
          </div>
        </div>

        <div className="grid w-full max-w-[860px] grid-cols-3 gap-4 sm:gap-6">
          {/* Left — New Bill / Settings */}
          <div className="flex flex-col items-center">
            <IaNode label="New Bill" />
            <IaArrowDown />
            <div className="flex items-start justify-center gap-1">
              <div className="mt-7 flex flex-col items-end gap-2">
                <div className="flex items-center">
                  <IaNode label="Profile" />
                  <span className="px-1 text-[11px]" style={{ color: '#C9C9C9' }} aria-hidden="true">
                    ◀
                  </span>
                </div>
                <div className="flex items-center">
                  <IaNode label="Appearance" />
                  <span className="px-1 text-[11px]" style={{ color: '#C9C9C9' }} aria-hidden="true">
                    ◀
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <IaNode label="Settings" />
                <IaArrowDown />
                <IaNode label="Notification" />
                <IaArrowDown />
                <IaNode label="Profile" />
              </div>
            </div>
          </div>

          {/* Center — Messages / Leads */}
          <div className="flex flex-col items-center">
            <div className="flex items-start gap-1">
              <div className="flex flex-col items-center">
                <IaNode label="Messages" />
                <IaArrowDown />
                <IaNode label="Leads" />
              </div>
              <div className="mt-1 flex flex-col gap-2">
                <div className="flex items-center">
                  <IaArrowRight />
                  <IaNode label="Live Chat" />
                </div>
                <div className="flex items-center">
                  <IaArrowRight />
                  <IaNode label="Emails" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bills / Items / Customers / Sales */}
          <div className="flex flex-col items-start">
            <div className="flex items-start gap-1">
              <div className="flex flex-col items-center">
                <IaNode label="Bills" />
                <IaArrowDown />
                <IaNode label="Items" />
                <IaArrowDown />
                <IaNode label="Customers" />
                <IaArrowDown />
                <IaNode label="Sales" />
              </div>
              <div className="mt-1 flex flex-col gap-2">
                <div className="flex items-center">
                  <IaArrowRight />
                  <IaNode label="List" />
                </div>
                <div className="flex items-center">
                  <IaArrowRight />
                  <IaNode label="Current Bill" />
                </div>
                <div className="mt-5 flex items-center">
                  <IaArrowRight />
                  <IaNode label="Items Category" />
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <IaArrowRight />
                  <IaNode label="Add Item" />
                  <IaArrowRight />
                  <IaNode label="New Category" />
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <IaArrowRight />
                  <IaNode label="Item List" />
                  <IaArrowRight />
                  <IaNode label="Update Stock" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    initials: 'SA',
    quote:
      'I strive for excellence in every repair, but sourcing specific parts promptly is crucial; delays in availability hinder my efficiency.',
    meta: [
      ['Age', '28'],
      ['Education', 'BE Engineer'],
      ['Status', 'Single'],
      ['Occupation', 'Service Technician'],
      ['Location', 'Dubai'],
    ],
    traits: ['Calm', 'Steady', 'Creative'],
    background:
      'Sara Ahmed is a seasoned service technician based in Dubai, with over 8 years of experience in the automotive industry. Her passion for her work drives her to deliver exceptional service to her clients, ensuring their vehicles are meticulously maintained and repaired.',
    panels: [
      {
        title: 'Goals',
        body: 'Sara aims for professional excellence, an efficient workshop workflow, and continuous learning so every repair meets a high standard.',
      },
      {
        title: 'Frustrations',
        body: 'Parts availability delays, inventory management challenges, and technological barriers slow her down when customers need fast turnaround.',
      },
      {
        title: 'Needs',
        body: 'She needs a reliable parts supply, efficient workflow tools, and continuous learning support built into everyday operations.',
      },
      {
        title: 'Motivation',
        body: "Sara's motivation stems from her passion for her work and the pride she takes in her role as a service technician. She finds fulfillment in delivering top-notch service to her clients and ensuring their vehicles are well-maintained.",
      },
    ],
  },
  {
    name: 'Ahmed Car Enthusiast',
    initials: 'AH',
    quote:
      "I'm dedicated to maintaining peak performance for my sports car, but finding a reliable service that fits my busy schedule is a constant challenge.",
    meta: [
      ['Age', '32'],
      ['Education', 'BA Business'],
      ['Status', 'Married'],
      ['Occupation', 'Busy Professional'],
      ['Location', 'Dubai'],
      ['Vehicle', 'High-performance Sports Car'],
    ],
    traits: ['Passionate', 'Discerning', 'Driven'],
    background:
      'Ahmed is a busy professional based in Dubai who recently acquired a high-performance sports car. Balancing his demanding career with his passion for automobiles, he seeks a reliable and efficient service for maintaining his prized possession.',
    panels: [
      {
        title: 'Goals',
        body: 'Ahmed wants optimal performance from his car and convenient service that fits around a packed professional schedule.',
      },
      {
        title: 'Frustrations',
        body: 'Lack of transparency, time constraints, and quality concerns make it hard for him to trust workshops with his sports car.',
      },
      {
        title: 'Needs',
        body: 'He needs dependable service, convenience, and clear transparency on timelines, pricing, and workmanship.',
      },
      {
        title: 'Motivation',
        body: "Ahmed's motivation stems from his passion for his sports car and the need for a trustworthy service that understands the unique requirements of high-performance vehicles. He seeks peace of mind knowing that his car is in capable hands.",
      },
    ],
  },
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
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const pageBg = isDark ? '#0a0a0a' : '#ffffff'
  const titleColor = isDark ? 'rgba(255,255,255,0.75)' : 'rgba(15,23,43,0.8)'
  const border = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.05)'

  return (
    <div
      className="min-h-screen w-full antialiased transition-colors duration-200"
      style={{ background: pageBg, color: isDark ? '#ffffff' : ink }}
    >
      <div
        className="sticky top-0 z-30 w-full border-b py-3 transition-colors duration-200"
        style={{ borderColor: border, background: pageBg }}
      >
        <div className="mx-auto flex w-full max-w-[1680px] items-center gap-3 px-[clamp(1.25rem,3.5vw,4.5rem)]">
          <div className="rounded-full bg-white px-4 py-2 shadow-sm">
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal" style={{ color: titleColor }}>
            {project.caseStudyTitle}
          </p>
          <div className="rounded-full bg-white shadow-sm">
            <ThemeToggle compact />
          </div>
        </div>
      </div>

      {/* Light study inverts cleanly to black bg + white type in dark mode */}
      <div
        className="transition-[filter] duration-200"
        style={{
          background: '#ffffff',
          color: ink,
          filter: isDark ? 'invert(1) hue-rotate(180deg)' : 'none',
        }}
      >

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

      {/* Personas — selectable HTML matching the designed case-study layout */}
      <section className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8">
        <PillTitle before="User" highlight="Personas" />
        <p
          className="mx-auto mt-5 max-w-[720px] text-center text-[15px] font-light leading-[1.7]"
          style={{ color: muted }}
        >
          Crafting user personas was pivotal in understanding the diverse needs and motivations of
          our target audience. By delving into the lives of individuals like Sara Ahmed and Ahmed,
          we gained invaluable insights into their goals, frustrations, and aspirations.
        </p>

        <div className="mt-12 space-y-14">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="grid gap-5 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start lg:gap-6"
            >
              <article className="rounded-[22px] border border-black/5 bg-white p-6 shadow-sm">
                <div
                  className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full text-[32px] font-medium text-white shadow-sm"
                  style={{ background: accent }}
                  aria-hidden="true"
                >
                  {persona.initials}
                </div>
                <h3 className="mt-5 text-center text-[22px] font-semibold" style={{ color: accent }}>
                  {persona.name}
                </h3>
                <p
                  className="mt-3 text-center text-[13px] font-light italic leading-[1.55]"
                  style={{ color: '#E8A05A' }}
                >
                  “{persona.quote}”
                </p>
                <dl className="mt-5 space-y-2.5 text-[14px]">
                  {persona.meta.map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-3">
                      <dt className="font-medium" style={{ color: accent }}>
                        {label}
                      </dt>
                      <dd className="text-right font-light" style={{ color: muted }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {persona.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full px-3.5 py-1.5 text-[12px] font-medium"
                      style={{ background: peach, color: accent }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="mt-5 border-t border-black/5 pt-4">
                  <p className="text-[13px] font-semibold" style={{ color: accent }}>
                    Background
                  </p>
                  <p className="mt-2 text-[13px] font-light leading-[1.65]" style={{ color: muted }}>
                    {persona.background}
                  </p>
                </div>
              </article>

              <div className="flex flex-col gap-4">
                {persona.panels.map((panel) => (
                  <div
                    key={panel.title}
                    className="rounded-[18px] px-5 py-4 sm:px-6 sm:py-5"
                    style={{ background: soft }}
                  >
                    <h4 className="text-[16px] font-semibold" style={{ color: accent }}>
                      {panel.title}
                    </h4>
                    <p className="mt-2 text-[14px] font-light leading-[1.65]" style={{ color: muted }}>
                      {panel.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <UserJourneyMap />

      {/* Information Architecture — flowchart matching the designed study */}
      <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8">
        <PillTitle before="Information" highlight="Architecture" />
        <p className="mt-4 text-center text-[15px] font-medium" style={{ color: accent }}>
          Information Architecture
        </p>
        <InformationArchitectureMap />
      </section>

      {/* User Flow — designed customer purchase flowchart */}
      <section className="mx-auto max-w-[920px] px-5 py-14 sm:px-8">
        <PillTitle before="User" highlight="Flow" />
        <p className="mt-3 text-center text-[15px] font-medium" style={{ color: accent }}>
          Customer&apos;s Flow
        </p>
        <p
          className="mx-auto mt-3 max-w-[560px] text-center text-[15px] font-light leading-[1.7]"
          style={{ color: muted }}
        >
          Its final desired objects and seamlessly make purchases using this platform&apos;s
          marketplace.
        </p>
        <CustomerFlowMap />
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

      {/* High-fidelity — real HTML components & screens (selectable text) */}
      <PosHifiDesign />

      {/* Point of Sale cover — flush into Next Project footer */}
      <section className="mx-auto max-w-[920px] px-5 pb-0 pt-14 sm:px-8">
        <AccentHeading>Point of Sale</AccentHeading>
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
      </div>

      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}

      <CaseStudyFloatControls tone={isDark ? 'dark' : 'orange'} />
    </div>
  )
}
