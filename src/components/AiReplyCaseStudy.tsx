import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { NextProjectCard } from './NextProjectCard'

const accent = '#00A0C2'
const accentSoft = 'rgba(0, 160, 194, 0.12)'
const accentLine = 'rgba(0, 160, 194, 0.35)'
const bgDeep = '#050505'
const bgBase = '#0a0a0a'
const panel = '#111214'
const panelAlt = '#16181b'
const line = 'rgba(255, 255, 255, 0.1)'
const textMain = '#FFFFFF'
const textMuted = 'rgba(255, 255, 255, 0.68)'
const textDim = 'rgba(255, 255, 255, 0.45)'

const heroTags = ['Product Design', 'UX Design', 'SaaS', '2023'] as const

const problemSteps = [
  { label: 'Message received', note: 'A notification lands at the wrong time.' },
  { label: 'Read', note: 'Context has to be reloaded every time.' },
  { label: 'Think', note: 'Tone, intent and wording all need a decision.' },
  { label: 'Type', note: 'The slowest step, repeated dozens of times a day.' },
  { label: 'Send', note: 'Finally done — until the next message arrives.' },
] as const

const conceptSteps = [
  {
    label: 'Receive',
    body: 'A new message arrives and the system quietly picks up the thread.',
  },
  {
    label: 'Read & Understand',
    body: 'It reads the conversation history to understand intent, tone and urgency.',
  },
  {
    label: 'Generate',
    body: 'It drafts a reply using what it already knows about how you talk.',
  },
  {
    label: 'Edit',
    body: 'You review, tweak or replace the draft before anything is sent.',
  },
] as const

const principles = [
  {
    title: 'Context-aware automation',
    body: 'Replies are grounded in the full conversation, the relationship and the moment — not just the last message.',
  },
  {
    title: 'Control over speed & intelligence',
    body: 'Fast suggestions are only useful when people can always step in, edit and decide what actually goes out.',
  },
  {
    title: 'Natural-sounding voice',
    body: 'Drafts should read like the person sending them: their phrasing, their warmth, their level of formality.',
  },
] as const

const journey = [
  {
    stage: 'Notice',
    action: 'A message arrives while the user is busy.',
    feeling: 'Pressure to respond quickly',
  },
  {
    stage: 'Understand',
    action: 'AI summarizes context and intent in the background.',
    feeling: 'Relief — no need to scroll back',
  },
  {
    stage: 'Suggest',
    action: 'Reply options appear as quiet chips above the keyboard.',
    feeling: 'Curious, still in charge',
  },
  {
    stage: 'Refine',
    action: 'The user edits tone or wording, or writes their own.',
    feeling: 'Ownership of the final voice',
  },
  {
    stage: 'Send',
    action: 'The reply goes out with a single, deliberate tap.',
    feeling: 'Confident it still sounds like me',
  },
] as const

const personalization = [
  {
    name: 'Quick Responder',
    quote: '“I just want to clear my inbox without thinking about every word.”',
    traits: ['Values speed', 'Replies in bursts', 'Comfortable with shorter drafts'],
    behavior: [
      'Suggestions are surfaced immediately and kept short.',
      'One-tap send is promoted for low-risk, routine messages.',
      'AI may reply on its own for trusted contacts and simple confirmations.',
    ],
  },
  {
    name: 'Careful Editor',
    quote: '“If it is going out under my name, I want to shape it first.”',
    traits: ['Values accuracy', 'Rewrites often', 'Prefers full control'],
    behavior: [
      'Drafts open in an editable field instead of sending directly.',
      'Tone controls and alternative phrasings are one tap away.',
      'AI never sends without an explicit confirmation.',
    ],
  },
] as const

const pillars = [
  {
    title: 'Trustworthy',
    body: 'Clear signals about what AI wrote, what it saw and what it will do next.',
  },
  {
    title: 'Practical',
    body: 'Built around everyday conversations, not demo-friendly edge cases.',
  },
  {
    title: 'Natural Voice',
    body: 'Learns phrasing and rhythm so drafts sound like the sender.',
  },
  {
    title: 'Non-intrusive',
    body: 'Suggestions wait quietly; nothing interrupts the conversation.',
  },
  {
    title: 'Secure',
    body: 'Private by default, with message data handled on clear terms.',
  },
  {
    title: 'Easy to use',
    body: 'Three actions — review, edit, send — and nothing to configure first.',
  },
] as const

const replyStatuses = [
  {
    tag: 'AI replied',
    tone: 'accent' as const,
    example: 'Thanks, see you at 6!',
    body: 'Low-risk, routine messages from trusted contacts where the intent is unambiguous.',
  },
  {
    tag: 'Partially replied',
    tone: 'neutral' as const,
    example: 'Draft ready — needs your confirmation on the date.',
    body: 'AI prepares most of the reply but pauses where a personal decision or detail is missing.',
  },
  {
    tag: 'Did not reply',
    tone: 'muted' as const,
    example: 'Sensitive message — left for you.',
    body: 'Emotional, high-stakes or unclear messages stay entirely human. AI steps back on purpose.',
  },
] as const

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[12px] font-medium uppercase tracking-[0.22em]"
      style={{ color: accent }}
    >
      {children}
    </p>
  )
}

function SectionHeading({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <h2
      className={`mt-4 text-[30px] font-light leading-[1.15] tracking-[-0.02em] sm:text-[42px] ${
        center ? 'text-center' : ''
      }`}
      style={{ color: textMain }}
    >
      {children}
    </h2>
  )
}

function StepNumber({ n }: { n: number }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[13px] font-medium"
      style={{ borderColor: accent, color: accent, background: accentSoft }}
    >
      {String(n).padStart(2, '0')}
    </span>
  )
}

function SparkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z"
        fill="currentColor"
      />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" fill="currentColor" />
    </svg>
  )
}

function Annotation({
  label,
  body,
  side,
}: {
  label: string
  body: string
  side: 'left' | 'right'
}) {
  return (
    <div className={`flex items-center gap-3 ${side === 'left' ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
      <div
        className="hidden h-px w-10 lg:block"
        style={{ background: accentLine }}
        aria-hidden="true"
      />
      <div
        className="rounded-[16px] border px-4 py-3"
        style={{ borderColor: line, background: panel }}
      >
        <p className="text-[13px] font-medium uppercase tracking-[0.16em]" style={{ color: accent }}>
          {label}
        </p>
        <p className="mt-1 text-[14px] font-light leading-[1.6]" style={{ color: textMuted }}>
          {body}
        </p>
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-[300px] rounded-[44px] border p-3 shadow-[0_30px_80px_rgba(0,160,194,0.12)]"
      style={{ borderColor: 'rgba(255,255,255,0.18)', background: '#000' }}
    >
      <div
        className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full"
        style={{ background: '#000' }}
        aria-hidden="true"
      />
      <div
        className="flex h-[580px] flex-col overflow-hidden rounded-[34px]"
        style={{ background: bgBase }}
      >
        {/* Chat header */}
        <div
          className="flex items-center gap-3 border-b px-4 pb-3 pt-8"
          style={{ borderColor: line, background: panel }}
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-medium text-white"
            style={{ background: accent }}
            aria-hidden="true"
          >
            MR
          </div>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-white">Maya Rahman</p>
            <p className="text-[11px] font-light" style={{ color: textDim }}>
              Active now
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4">
          <p className="mx-auto text-[10px] font-light uppercase tracking-[0.18em]" style={{ color: textDim }}>
            Today 4:12 PM
          </p>
          <div
            className="max-w-[78%] self-start rounded-[18px] rounded-bl-[6px] px-3.5 py-2.5 text-[13px] font-light leading-[1.5] text-white"
            style={{ background: panelAlt }}
          >
            Hey! Are we still on for the design review tomorrow morning?
          </div>
          <div
            className="max-w-[78%] self-start rounded-[18px] rounded-bl-[6px] px-3.5 py-2.5 text-[13px] font-light leading-[1.5] text-white"
            style={{ background: panelAlt }}
          >
            I can do 10:30 or after lunch if that is easier.
          </div>

          {/* AI draft */}
          <div
            className="mt-auto max-w-[88%] self-end rounded-[18px] rounded-br-[6px] border border-dashed px-3.5 py-2.5"
            style={{ borderColor: accent, background: accentSoft }}
          >
            <p
              className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.14em]"
              style={{ color: accent }}
            >
              <SparkIcon size={11} />
              AI draft
            </p>
            <p className="mt-1 text-[13px] font-light leading-[1.5] text-white">
              Yes, still on! 10:30 works great for me. See you then.
            </p>
          </div>
        </div>

        {/* Suggestion chips */}
        <div className="border-t px-3 pb-3 pt-3" style={{ borderColor: line, background: panel }}>
          <div className="flex gap-2 overflow-hidden">
            {['10:30 works', 'After lunch', 'Reschedule'].map((chip, i) => (
              <span
                key={chip}
                className="shrink-0 rounded-full border px-3 py-1.5 text-[12px] font-light"
                style={
                  i === 0
                    ? { borderColor: accent, background: accentSoft, color: accent }
                    : { borderColor: line, color: textMuted }
                }
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div
              className="flex-1 truncate rounded-full border px-4 py-2.5 text-[13px] font-light"
              style={{ borderColor: line, background: bgBase, color: textMuted }}
            >
              Yes, still on! 10:30 works great…
            </div>
            <button
              type="button"
              tabIndex={-1}
              aria-label="Send reply"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
              style={{ background: accent }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 12l16-8-6 16-3-7-7-1Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusTag({ tone, children }: { tone: 'accent' | 'neutral' | 'muted'; children: ReactNode }) {
  const style =
    tone === 'accent'
      ? { background: accent, color: '#04141a', borderColor: accent }
      : tone === 'neutral'
        ? { background: accentSoft, color: accent, borderColor: accent }
        : { background: 'transparent', color: textMuted, borderColor: 'rgba(255,255,255,0.3)' }
  return (
    <span
      className="inline-flex rounded-full border px-3.5 py-1 text-[13px] font-medium"
      style={style}
    >
      {children}
    </span>
  )
}

/**
 * AI Reply Messaging App case study — fully in HTML (selectable text, real UI mockups).
 * No lightbox wrapping and no zoom-on-click for the study itself.
 */
export function AiReplyCaseStudy({
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
    <div className="min-h-screen antialiased" style={{ background: bgBase, color: textMain }}>
      {/* Sticky header */}
      <div
        className="sticky top-0 z-30 border-b px-4 py-3 sm:px-8"
        style={{ borderColor: line, background: bgBase }}
      >
        <div className="mx-auto flex max-w-[1100px] items-center gap-3">
          <div className="rounded-full bg-white px-4 py-2 shadow-sm">
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal text-white/80">
            {project.caseStudyTitle}
          </p>
          <Link
            to={backTo}
            className="shrink-0 text-[13px] font-normal text-white/50 transition-opacity hover:text-white"
          >
            Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-[1100px] px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <div className="max-w-[860px]">
          <SectionLabel>Case study</SectionLabel>
          <h1 className="mt-5 text-[40px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[64px]">
            Can AI reply for you without taking away{' '}
            <span style={{ color: accent }}>your voice?</span>
          </h1>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {heroTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border px-4 py-1.5 text-[13px] font-light"
                style={{ borderColor: accentLine, color: accent, background: accentSoft }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {cover ? (
          <div
            className="mt-14 overflow-hidden rounded-[24px] border"
            style={{ borderColor: line, background: bgDeep }}
          >
            <img
              src={cover}
              alt={project.title ? `${project.title} cover` : 'AI Reply cover'}
              decoding="async"
              fetchPriority="high"
              draggable={false}
              className="block h-auto w-full object-cover"
              style={{ cursor: 'default' }}
            />
          </div>
        ) : null}
      </header>

      {/* Problem */}
      <section className="border-y" style={{ borderColor: line, background: bgDeep }}>
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionLabel>The problem</SectionLabel>
          <SectionHeading>
            Messages start piling when it is{' '}
            <span style={{ color: accent }}>impossible to answer them.</span>
          </SectionHeading>
          <p
            className="mt-6 max-w-[640px] text-[16px] font-light leading-[1.75]"
            style={{ color: textMuted }}
          >
            Every reply asks for the same five steps. Individually they are small; together they
            turn a busy day into a backlog of conversations that feel impossible to catch up on.
          </p>

          <ol className="mt-14 grid gap-4 md:grid-cols-5 md:gap-0">
            {problemSteps.map((step, index) => (
              <li key={step.label} className="relative md:px-2">
                <div
                  className="h-full rounded-[20px] border p-5"
                  style={{ borderColor: line, background: panel }}
                >
                  <StepNumber n={index + 1} />
                  <h3 className="mt-4 text-[17px] font-medium" style={{ color: textMain }}>
                    {step.label}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.6]" style={{ color: textMuted }}>
                    {step.note}
                  </p>
                </div>
                {index < problemSteps.length - 1 ? (
                  <span
                    className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[18px] md:block"
                    style={{ color: accent }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Concept */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>The concept</SectionLabel>
        <SectionHeading>
          Automate what the past already{' '}
          <span style={{ color: accent }}>knows about you.</span>
        </SectionHeading>
        <p
          className="mt-6 max-w-[640px] text-[16px] font-light leading-[1.75]"
          style={{ color: textMuted }}
        >
          Years of conversations already describe how someone writes. The idea was to use that past
          knowledge to prepare replies — and leave the final decision with the person.
        </p>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed lg:block"
            style={{ borderColor: accentLine }}
            aria-hidden="true"
          />
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:gap-8">
            {conceptSteps.map((step, index) => (
              <li
                key={step.label}
                className="rounded-[24px] border p-6 sm:p-8"
                style={{ borderColor: line, background: panel }}
              >
                <div className="flex items-center gap-4">
                  <StepNumber n={index + 1} />
                  <h3 className="text-[22px] font-light" style={{ color: accent }}>
                    {step.label}
                  </h3>
                </div>
                <p
                  className="mt-4 text-[15px] font-light leading-[1.7]"
                  style={{ color: textMuted }}
                >
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-y" style={{ borderColor: line, background: bgDeep }}>
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionLabel>Positioning</SectionLabel>
          <SectionHeading>
            Where AI Reply sits between{' '}
            <span style={{ color: accent }}>automation and control.</span>
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article
              className="rounded-[24px] border p-7 sm:p-9"
              style={{ borderColor: line, background: panel }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.2em]" style={{ color: textDim }}>
                Traditional
              </p>
              <h3 className="mt-3 text-[26px] font-light">More automated</h3>
              <ul className="mt-6 space-y-3 text-[15px] font-light leading-[1.6]" style={{ color: textMuted }}>
                <li className="flex gap-3">
                  <span style={{ color: textDim }}>—</span>
                  <span>Generic canned replies that ignore context</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: textDim }}>—</span>
                  <span>Sends on the user’s behalf with little review</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: textDim }}>—</span>
                  <span>Voice drifts toward the average of everyone</span>
                </li>
              </ul>
              <div className="mt-8">
                <div className="flex justify-between text-[12px] font-light" style={{ color: textDim }}>
                  <span>Human control</span>
                  <span>Automation</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full" style={{ background: panelAlt }}>
                  <div className="h-full w-[85%] rounded-full" style={{ background: 'rgba(255,255,255,0.4)' }} />
                </div>
              </div>
            </article>

            <article
              className="rounded-[24px] border p-7 sm:p-9"
              style={{ borderColor: accent, background: accentSoft }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Our Solution
              </p>
              <h3 className="mt-3 text-[26px] font-light">More human control</h3>
              <ul className="mt-6 space-y-3 text-[15px] font-light leading-[1.6]" style={{ color: textMain }}>
                <li className="flex gap-3">
                  <span style={{ color: accent }}>✓</span>
                  <span>Replies shaped by the conversation and the relationship</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: accent }}>✓</span>
                  <span>Drafts are always editable before anything is sent</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: accent }}>✓</span>
                  <span>Learns the user’s own phrasing, not an average voice</span>
                </li>
              </ul>
              <div className="mt-8">
                <div className="flex justify-between text-[12px] font-light" style={{ color: textMuted }}>
                  <span>Human control</span>
                  <span>Automation</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div className="h-full w-[70%] rounded-full" style={{ background: accent }} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>Design principles</SectionLabel>
        <SectionHeading>Three rules that shaped every decision.</SectionHeading>
        <ul className="mt-12 divide-y" style={{ borderColor: line }}>
          {principles.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-4 py-8 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline"
              style={{ borderColor: line }}
            >
              <span className="text-[14px] font-light" style={{ color: accent }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[22px] font-light leading-[1.3] sm:text-[26px]">{item.title}</h3>
              <p className="text-[15px] font-light leading-[1.75]" style={{ color: textMuted }}>
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Journey */}
      <section className="border-y" style={{ borderColor: line, background: bgDeep }}>
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionLabel>User journey</SectionLabel>
          <SectionHeading>
            From notification to{' '}
            <span style={{ color: accent }}>a reply that still feels like you.</span>
          </SectionHeading>

          <ol className="relative mt-14 space-y-6 md:space-y-0">
            <div
              className="absolute bottom-4 left-[17px] top-4 w-px md:left-1/2 md:-translate-x-1/2"
              style={{ background: accentLine }}
              aria-hidden="true"
            />
            {journey.map((step, index) => {
              const right = index % 2 === 0
              return (
                <li
                  key={step.stage}
                  className="relative grid grid-cols-[36px_minmax(0,1fr)] gap-4 md:grid-cols-2 md:gap-14 md:pb-10"
                >
                  <div
                    className="relative z-10 md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2"
                    style={{ background: bgDeep }}
                  >
                    <StepNumber n={index + 1} />
                  </div>
                  <div
                    className={`rounded-[20px] border p-5 md:col-start-1 md:row-start-1 ${
                      right ? 'md:col-start-2' : 'md:text-right'
                    }`}
                    style={{ borderColor: line, background: panel }}
                  >
                    <h3 className="text-[20px] font-light" style={{ color: accent }}>
                      {step.stage}
                    </h3>
                    <p className="mt-2 text-[15px] font-light leading-[1.65]" style={{ color: textMuted }}>
                      {step.action}
                    </p>
                    <p className="mt-3 text-[13px] font-light italic" style={{ color: textDim }}>
                      Feeling: {step.feeling}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Core experience */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>Core experience</SectionLabel>
        <SectionHeading>
          Content, draft, send — <span style={{ color: accent }}>in one calm flow.</span>
        </SectionHeading>
        <p
          className="mt-6 max-w-[640px] text-[16px] font-light leading-[1.75]"
          style={{ color: textMuted }}
        >
          The reply lives right inside the conversation. Suggestions appear as chips, the draft is
          shown clearly as AI-written, and sending remains a deliberate tap.
        </p>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_300px_minmax(0,1fr)] lg:gap-6">
          <div className="order-2 space-y-4 lg:order-1">
            <Annotation
              side="left"
              label="Content"
              body="The latest messages and context stay visible, so the user knows exactly what is being answered."
            />
          </div>
          <div className="order-1 lg:order-2">
            <PhoneMockup />
          </div>
          <div className="order-3 space-y-4 lg:space-y-24">
            <Annotation
              side="right"
              label="Draft"
              body="The AI draft is clearly marked and editable, with quick suggestion chips as alternatives."
            />
            <Annotation
              side="right"
              label="Send"
              body="Nothing leaves the device until the user taps send — control is never implied."
            />
          </div>
        </div>
      </section>

      {/* Personalization */}
      <section className="border-y" style={{ borderColor: line, background: bgDeep }}>
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionLabel>Personalization</SectionLabel>
          <SectionHeading>
            Different people want <span style={{ color: accent }}>different amounts of help.</span>
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {personalization.map((item) => (
              <article
                key={item.name}
                className="rounded-[24px] border p-7 sm:p-9"
                style={{ borderColor: line, background: panel }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: accentSoft, color: accent }}
                  aria-hidden="true"
                >
                  <SparkIcon size={20} />
                </div>
                <h3 className="mt-5 text-[26px] font-light" style={{ color: accent }}>
                  {item.name}
                </h3>
                <p className="mt-3 text-[15px] font-light italic leading-[1.65]" style={{ color: textMuted }}>
                  {item.quote}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full border px-3 py-1 text-[12px] font-light"
                      style={{ borderColor: line, color: textMain }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 text-[14px] font-light leading-[1.65]" style={{ color: textMuted }}>
                  {item.behavior.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span style={{ color: accent }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>Six pillars</SectionLabel>
        <SectionHeading>What the experience had to be.</SectionHeading>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className="rounded-[20px] border p-6"
              style={{ borderColor: line, background: panel }}
            >
              <span className="text-[13px] font-light" style={{ color: accent }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-[20px] font-light">{pillar.title}</h3>
              <p className="mt-2 text-[14px] font-light leading-[1.65]" style={{ color: textMuted }}>
                {pillar.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Choosing when not to reply */}
      <section className="border-y" style={{ borderColor: line, background: bgDeep }}>
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 sm:py-28">
          <SectionLabel>Restraint</SectionLabel>
          <SectionHeading>
            Choosing <span style={{ color: accent }}>when not to reply.</span>
          </SectionHeading>
          <p
            className="mt-6 max-w-[640px] text-[16px] font-light leading-[1.75]"
            style={{ color: textMuted }}
          >
            The most important behavior was knowing when to stay quiet. Each conversation shows a
            clear status so people always know what the AI did.
          </p>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {replyStatuses.map((status) => (
              <li
                key={status.tag}
                className="flex flex-col rounded-[24px] border p-6"
                style={{ borderColor: line, background: panel }}
              >
                <StatusTag tone={status.tone}>{status.tag}</StatusTag>
                <div
                  className="mt-5 rounded-[16px] rounded-bl-[6px] px-4 py-3 text-[14px] font-light leading-[1.55]"
                  style={{ background: panelAlt, color: textMain }}
                >
                  {status.example}
                </div>
                <p className="mt-5 text-[14px] font-light leading-[1.7]" style={{ color: textMuted }}>
                  {status.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing — flush with the next project card */}
      <section style={{ background: bgDeep }}>
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 sm:py-28">
          <SectionLabel>Reflection</SectionLabel>
          <h2 className="mt-4 text-[30px] font-light leading-[1.15] tracking-[-0.02em] sm:text-[44px]">
            What designing <span style={{ color: accent }}>AI behavior</span> taught me
          </h2>
          <p
            className="mx-auto mt-8 max-w-[720px] text-[20px] font-light leading-[1.6] sm:text-[24px]"
            style={{ color: textMain }}
          >
            AI Reply wasn’t about removing humans from conversations. It was about deciding when AI
            could help — and making sure humans could take control whenever it mattered.
          </p>
        </div>
      </section>
      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}

      <CaseStudyFloatControls tone="dark" />
    </div>
  )
}
