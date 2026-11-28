import type { CSSProperties, ReactNode } from 'react'
import type { Project } from '../data/content'
import { useTheme } from '../theme/ThemeProvider'
import { AiAssistantBot } from './AiAssistantBot'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { CaseStudyScreen } from './CaseStudyScreen'
import { NextProjectCard } from './NextProjectCard'
import { ThemeToggle } from './ThemeToggle'

/** Figma frame is 1200 wide — backgrounds run full-bleed, content sits in this shell. */
const shell = 'mx-auto w-full max-w-[1200px] px-[clamp(1.25rem,3vw,3rem)]'

const IMG = '/assets/images/projects/ai-supply-management/figma2'

const accent = '#2F80FF'
const amber = '#F5A524'
const bgBlack = '#000000'
const bgGray = '#121212'
const bgNavy = '#0d0d16'
const cardDark = '#141414'
const lineSoft = 'rgba(255, 255, 255, 0.16)'
const textMain = '#FFFFFF'
const textMuted = 'rgba(255, 255, 255, 0.62)'
const textDim = 'rgba(255, 255, 255, 0.45)'

/* ------------------------------------------------------------------ */
/* Content — wording taken from the Figma export                       */
/* ------------------------------------------------------------------ */

const interruptSteps = [
  { title: 'Message arrives', body: 'A new message is received.' },
  { title: 'Notification interrupts you', body: 'The notification interrupts your current activity.' },
  { title: 'Open the conversation', body: 'You open the conversation to view the message.' },
  { title: 'Understand the context', body: 'You read and understand the message context.' },
  { title: 'Think about response', body: 'You consider what your response should be.' },
  { title: 'Type the response', body: 'You type out your reply.' },
  { title: 'Review the response', body: 'You review the message before sending.' },
  { title: 'Send and return', body: 'You send the message and return to your work.' },
] as const

/** Snake layout on md+: row 1 L→R, row 2 R→L, row 3 L→R, row 4 R→L. */
const interruptPlacement = [
  'md:col-start-1 md:row-start-1',
  'md:col-start-2 md:row-start-1',
  'md:col-start-2 md:row-start-2',
  'md:col-start-1 md:row-start-2',
  'md:col-start-1 md:row-start-3',
  'md:col-start-2 md:row-start-3',
  'md:col-start-2 md:row-start-4',
  'md:col-start-1 md:row-start-4',
] as const

const scenarios = [
  { text: 'Deep in a task at work, phone buzzes with a low-stakes question.', tint: false },
  { text: 'Driving. The message will wait — but it still registers as pressure.', tint: true },
  { text: 'In a meeting. Replying means stepping out mentally, if not physically.', tint: true },
  { text: 'Trying to sleep. Answering now, or carrying it into tomorrow.', tint: false },
] as const

const loopSteps = [
  { n: '01', title: 'MESSAGE', body: 'Receive the initial message input.' },
  { n: '02', title: 'AI', body: 'Process the message using AI.' },
  { n: '03', title: 'RESPONSE', body: 'Generate the AI response.' },
  { n: '04', title: 'SEND', body: 'Transmit the final response.' },
] as const

const risks = [
  'Wrong tone',
  'Wrong context',
  'False commitment',
  'Sensitive conversation',
  'Incorrect information',
  'Relationship misread',
  'Unwanted auto-response',
] as const

const principles = [
  {
    title: 'Control before automation',
    body: 'AI is allowed to act — but never without a real window for the user to step in first. Automation is the default only after control has been designed and proven, not the other way around.',
  },
  {
    title: 'Context over generic intelligence',
    body: 'A grammatically correct reply isn’t a good reply. What matters is whether it fits this conversation, this relationship, and this moment — which is a design problem as much as a modeling one.',
  },
  {
    title: 'Make AI behavior visible',
    body: 'The user should always be able to answer “what is it about to do, and when.” Invisible automation is what erodes trust — visible automation is what earns it.',
  },
  {
    title: 'Easy recovery',
    body: 'AI will sometimes be wrong. The product doesn’t try to prevent every mistake — it makes correcting or stopping one effortless, so a wrong guess never becomes a sent message.',
  },
  {
    title: 'Personalization creates trust',
    body: 'Users don’t trust AI in general. They trust AI that sounds like them, to the people they’ve chosen, in the way they’ve asked for. Trust is built contact by contact, not granted all at once.',
  },
] as const

const controls = [
  {
    title: 'Refresh',
    body: 'The response doesn’t feel right, but writing from scratch shouldn’t be the fallback. Refresh asks the model to try again without asking the user to become the writer.',
  },
  {
    title: 'Cancel',
    body: 'Some conversations shouldn’t get an automatic reply at all. Cancel is a full stop — AI steps out, no message is sent, and the user replies on their own terms.',
  },
  {
    title: 'Edit',
    body: 'AI understood most of the situation, just not all of it. Editing lets the user correct one phrase instead of throwing away a mostly-right response.',
  },
  {
    title: 'Send',
    body: 'The reply is correct and waiting adds nothing. Send now collapses the countdown the moment the user has already made their decision.',
  },
] as const

const instructionExamples = [
  '"Keep my replies short and friendly."',
  '"Don’t make plans without asking me."',
  '"Use a professional tone for work contacts."',
  '"Don’t reply automatically to sensitive conversations."',
] as const

const autonomyLevels = [
  {
    level: 'L0',
    title: 'AI Off',
    body: 'User replies manually. No AI involvement. Full human control.',
    active: false,
  },
  {
    level: 'L1',
    title: 'AI Suggests',
    body: 'AI prepares a response but never sends it before the selected time. User reviews and decides.',
    active: false,
  },
  {
    level: 'L3',
    title: 'AI + Approval',
    body: 'AI prepares the reply and waits for explicit confirmation. You approve every send in selected time.',
    active: true,
  },
  {
    level: 'L4',
    title: 'AI + Countdown',
    body: 'AI prepares the reply and automatically sends unless you intervene. The countdown is what you selected.',
    active: true,
  },
] as const

const commitments = [
  {
    title: 'Visibility',
    body: 'I can see what AI intends to do before it does it. Nothing happens in the background without my awareness.',
    active: false,
  },
  {
    title: 'Control',
    body: 'I can stop, modify, or override AI at any point. The countdown isn’t a wait — it’s an invitation to act.',
    active: true,
  },
  {
    title: 'Personalization',
    body: 'AI understands how I prefer to communicate. It sounds like me, not like a generic assistant.',
    active: false,
  },
  {
    title: 'Boundaries',
    body: 'I decide exactly which contacts AI is allowed to reach. My privacy and relationships are mine to protect.',
    active: false,
  },
  {
    title: 'Recovery',
    body: 'When AI gets it wrong, correcting it is effortless. The cost of a mistake is never higher than one tap.',
    active: true,
  },
  {
    title: 'Predictability',
    body: 'I understand when AI will act and when it won’t. No surprises. No silent sends. No mystery behavior.',
    active: false,
  },
] as const

type PillTone = 'handle' | 'ask' | 'confirm' | 'respond' | 'human'

const restraintRows: ReadonlyArray<{
  title: string
  note: string
  status: string
  tone: PillTone
}> = [
  { title: 'Casual acknowledgement', note: 'Low stakes, clear context', status: 'AI may handle it', tone: 'handle' },
  { title: 'Simple status question', note: 'Routine, unambiguous', status: 'AI may handle it', tone: 'handle' },
  { title: 'Meeting confirmation', note: 'Commitment with scheduling implications', status: 'Ask user first', tone: 'ask' },
  { title: 'Financial commitment', note: 'Real-world consequence', status: 'Require confirmation', tone: 'confirm' },
  {
    title: 'Sensitive personal conversation',
    note: 'Emotional weight requires human presence',
    status: 'User must respond',
    tone: 'respond',
  },
  { title: 'Private or high-risk conversation', note: 'No AI involvement permitted', status: 'Human only', tone: 'human' },
]

const pillStyles: Record<PillTone, CSSProperties> = {
  handle: { borderColor: '#1f5fd8', background: '#0a1a3a', color: '#FFFFFF' },
  ask: { borderColor: '#c28a1f', background: '#241a08', color: '#F5B73B' },
  confirm: { borderColor: '#e0792a', background: '#2a1508', color: '#F28A33' },
  respond: { borderColor: '#d03a4b', background: '#2a0c11', color: '#FF6B78' },
  human: { borderColor: '#d03a4b', background: '#1f0a0e', color: '#FF5A66' },
}

const learnings = [
  {
    title: 'Automation isn’t automatically better UX.',
    body: 'Speed and convenience aren’t always the goal. Sometimes a deliberate pause — the countdown — is a better design than instant action. The value isn’t efficiency. It’s confidence.',
  },
  {
    title: 'Designing uncertainty is a skill.',
    body: 'AI systems can’t be right 100% of the time. Designing around that reality — surfacing AI behavior, enabling correction, providing visibility — is as important as designing.',
  },
  {
    title: 'Trust is created through control, not through capability.',
    body: 'Users didn’t trust AI Reply because it generated good responses. They trusted it because they could stop it, override it, and customize it. Competence matters less than predictability.',
  },
  {
    title: 'Human intervention isn’t AI failure.',
    body: 'In early thinking, every edit or cancellation felt like a design failure. It isn’t. Users intervening means the system worked — they saw the draft, made a judgment, and acted.',
  },
  {
    title: 'AI communication is connected to identity.',
    body: 'When AI speaks on your behalf, it carries your name, your relationships, and your reputation. Designing for this isn’t an ethical checkbox — it’s the central design challenge.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Label({ strong, rest }: { strong: string; rest?: string }) {
  return (
    <p className="text-[14px] leading-snug tracking-[0.08em]" style={{ color: accent }}>
      <span className="font-semibold">{strong}</span>
      {rest ? <span className="font-light">{rest}</span> : null}
    </p>
  )
}

function Heading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[30px] font-semibold leading-[1.18] tracking-[-0.01em] sm:text-[38px] ${className}`}
      style={{ color: textMain }}
    >
      {children}
    </h2>
  )
}

function Muted({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-[15px] font-light leading-[1.7] tracking-[0.04em] ${className}`}
      style={{ color: textMuted }}
    >
      {children}
    </p>
  )
}

function ReplyIsParagraph({ className = '' }: { className?: string }) {
  return (
    <Muted className={className}>
      It looks clean until you remember{' '}
      <strong className="text-[17px] font-semibold" style={{ color: textMain }}>
        what a reply actually is
      </strong>
      . A reply isn’t just text — it represents the person sending it. The moment AI can send on
      someone’s behalf, every mistake becomes a mistake made as them, to someone they actually know.
    </Muted>
  )
}

function InterruptStep({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative pt-5">
      <div
        className="absolute left-1/2 top-0 z-10 flex min-h-[34px] w-[56%] -translate-x-1/2 items-center justify-center rounded-[10px] border px-3 py-1.5 text-center text-[12px] font-semibold leading-tight"
        style={{ borderColor: 'rgba(255,255,255,0.85)', background: bgBlack, color: textMain }}
      >
        {title}
      </div>
      <div
        className="flex min-h-[96px] items-center justify-center rounded-[16px] border px-6 pb-4 pt-7 text-center text-[12px] font-normal leading-[1.5]"
        style={{ borderColor: 'rgba(255,255,255,0.85)', color: textMain }}
      >
        {body}
      </div>
    </div>
  )
}

function ArrowDown() {
  return (
    <svg width="10" height="26" viewBox="0 0 10 26" fill="none" aria-hidden="true">
      <path d="M5 0v24M1.5 20.5L5 25l3.5-4.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIconSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** HTML phone mockup for the control window — conversation with the AI countdown bubble. */
function ControlPhone() {
  return (
    <div
      className="case-study-screen relative mx-auto w-[240px] shrink-0 overflow-hidden rounded-[34px] border-[3px] p-[3px]"
      style={{ borderColor: '#3b3d44', background: '#0b0c0e' }}
    >
      <div className="flex h-[480px] flex-col overflow-hidden rounded-[30px]" style={{ background: '#15161a' }}>
        <div className="flex items-center gap-2 px-3 pb-2.5 pt-4" style={{ background: '#222328' }}>
          <span className="text-[13px] text-white" aria-hidden="true">
            ←
          </span>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full"
            style={{ background: '#F59E0B' }}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
              <circle cx="12" cy="9" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7H4Z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1 text-[11px] font-medium leading-[1.15] text-white">
            Waleed
            <br />
            khan
          </span>
          <span className="flex flex-col items-center gap-0.5">
            <span className="relative h-[10px] w-[20px] rounded-full" style={{ background: accent }}>
              <span className="absolute right-[2px] top-[2px] h-[6px] w-[6px] rounded-full bg-white" />
            </span>
            <span className="text-[7px] text-white/80">AI Bot</span>
          </span>
          <span className="text-white" aria-hidden="true">
            <PhoneIconSvg />
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-end gap-3 px-3 pb-3 pt-8">
          <div
            className="max-w-[88%] self-start rounded-[12px] px-3 py-2.5"
            style={{ background: '#3a3d49' }}
          >
            <p className="text-[10.5px] font-semibold leading-[1.45] text-white">
              Hello How are you? i was just trying to reach out to you but i think there was an issue
              regarding the internet and i was saying to join the party tonight as we are all glad you
              to come over here and be with us.
            </p>
            <p className="mt-1.5 text-[7px]" style={{ color: textDim }}>
              Aug 01, 07:25 AM
            </p>
          </div>

          <div
            className="ml-2 self-stretch rounded-[12px] px-2.5 pb-2.5 pt-2"
            style={{ background: '#2c4a86' }}
          >
            <p className="text-[8px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Bot is thinking to reply...
            </p>
            <p className="mt-1 text-[10.5px] font-semibold leading-[1.45] text-white">
              ‘Hey alex yeah definitely i will come. i hope we will enjoy the party as the last one was
              and no need for the car i will be there.’
            </p>
            <p className="mt-1 text-[8px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Sending in 6s
            </p>
            <div className="mt-1.5 flex gap-1.5">
              {['Refresh', 'Cancel', 'Edit', 'Send'].map((b) => (
                <span
                  key={b}
                  className="flex-1 rounded-full py-1 text-center text-[7.5px] font-medium"
                  style={{ background: '#b7c4f7', color: '#14224a' }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-2.5 pb-3 pt-1">
          <div
            className="flex flex-1 items-center justify-between rounded-full px-3 py-2 text-[9px]"
            style={{ background: '#26282e', color: textMuted }}
          >
            <span>Text message</span>
            <span aria-hidden="true">▣ ☺</span>
          </div>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] text-white"
            style={{ background: '#26282e' }}
            aria-hidden="true"
          >
            ➤
          </span>
        </div>
      </div>
    </div>
  )
}

function PersonaCard({
  name,
  tone,
  incoming,
  reply,
  instructions,
}: {
  name: string
  tone: 'amber' | 'blue'
  incoming: string
  reply: string
  instructions: string
}) {
  const isAmber = tone === 'amber'
  const toneColor = isAmber ? amber : accent
  return (
    <article className="rounded-[20px] p-5 sm:p-6" style={{ background: '#15161a' }}>
      <div className="flex items-center gap-4">
        <span className="h-[38px] w-[38px] shrink-0 rounded-full" style={{ background: '#d4d4d4' }} aria-hidden="true" />
        <div>
          <h3 className="text-[19px] font-semibold leading-tight text-white">{name}</h3>
          <span
            className="mt-1 inline-block rounded-md px-2 py-0.5 text-[10px] font-normal"
            style={{
              color: toneColor,
              background: isAmber ? 'rgba(245,165,36,0.12)' : 'rgba(47,128,255,0.14)',
            }}
          >
            Custom AI Behavior
          </span>
        </div>
      </div>
      <div
        className="mt-4 rounded-[12px] px-5 py-3 text-[15px] font-normal text-white"
        style={{ background: '#23252b' }}
      >
        {incoming}
      </div>
      <div
        className="mt-3 ml-[8%] rounded-[12px] border px-4 py-2.5"
        style={{
          borderColor: isAmber ? 'rgba(160,105,30,0.7)' : 'rgba(40,90,190,0.8)',
          background: isAmber ? '#2a1d12' : '#0f1a38',
        }}
      >
        <p className="text-[10px]" style={{ color: toneColor }}>
          AI Reply
        </p>
        <p className="mt-0.5 text-[16px] font-normal leading-snug text-white">{reply}</p>
      </div>
      <p
        className="mt-5 rounded-[10px] px-4 py-3 text-[10px] font-normal"
        style={{ background: '#1d1f24', color: textDim }}
      >
        <span className="mr-6">Instructions:</span>
        {instructions}
      </p>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/* Case study                                                          */
/* ------------------------------------------------------------------ */

/**
 * AI Reply Messaging App case study — rebuilt from the Figma export (file CUlWCD1Ol9KMpnGnjXfHaE,
 * node 40-376). Copy and section order match the design; text is selectable HTML wherever possible.
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
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const pageBg = isLight ? '#ffffff' : bgBlack
  const titleColor = isLight ? 'rgba(15,23,43,0.75)' : 'rgba(255,255,255,0.8)'
  const border = isLight ? 'rgba(15,23,43,0.08)' : lineSoft

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden antialiased transition-colors duration-200"
      style={{ background: pageBg, color: isLight ? '#0f172b' : textMain }}
    >
      {/* 1. Sticky header */}
      <div
        className="sticky top-0 z-30 w-full border-b py-3 transition-colors duration-200"
        style={{ borderColor: border, background: pageBg }}
      >
        <div className={`${shell} flex items-center gap-3`}>
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

      {/* Native dark study → invert for light mode so copy stays real selectable HTML */}
      <div
        className="select-text transition-[filter] duration-200"
        data-case-invert={isLight ? '1' : '0'}
        style={{
          background: bgBlack,
          color: textMain,
          filter: isLight ? 'invert(1) hue-rotate(180deg)' : 'none',
        }}
      >
      {/* 2. Hero */}
      <header className={`${shell} pb-16 pt-14 sm:pb-20 sm:pt-20`}>
        <div className="grid items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <p className="text-[14px] font-normal tracking-[0.08em]" style={{ color: accent }}>
              AI Reply Messaging App
            </p>
            <h1 className="mt-6 max-w-[520px] text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[52px]">
              Can AI reply for you without taking away your voice?
            </h1>
            <ul className="mt-9 flex max-w-[520px] flex-wrap gap-x-3 gap-y-3">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border px-5 py-1.5 text-[12px] font-normal"
                  style={{ borderColor: 'rgba(255,255,255,0.22)', background: '#0e0e0e', color: textMain }}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid max-w-[460px] grid-cols-3 gap-6 text-[14px]">
              {[
                ['Role', project.role],
                ['Platform', project.platform],
                ['Duration', project.duration],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[12px] font-normal tracking-[0.08em]" style={{ color: textDim }}>
                    {label}
                  </dt>
                  <dd className="mt-4 font-normal leading-snug" style={{ color: textMain }}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Your AI Assistant visual */}
          <div className="relative mx-auto h-[400px] w-full max-w-[460px] lg:mx-0 lg:ml-auto">
            <p
              className="absolute left-[16%] top-[2%] z-10 text-[15px] font-bold text-white"
              style={{ transform: 'rotate(-8deg)' }}
            >
              Your AI Assistant
            </p>
            <svg
              className="pointer-events-none absolute left-[28%] top-0 z-10 h-[34%] w-[56%]"
              viewBox="0 0 250 140"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M200 128C245 96 232 36 160 20"
                stroke={accent}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path d="M174 6L150 20l22 16" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div
              className="absolute left-0 top-[14%] w-[72%] rounded-[8px] border px-5 pb-6 pt-4"
              style={{
                transform: 'rotate(-8deg)',
                borderColor: '#2f5fd0',
                background: '#3a3f50',
              }}
            >
              <p className="text-[12px] font-normal" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Incoming Message
              </p>
              <p className="mt-1 text-[17px] font-normal leading-snug text-white">Hello how are you doing?</p>
            </div>
            <div
              className="absolute right-0 top-[44%] w-[74%] rounded-[8px] border-2 px-5 pb-5 pt-7"
              style={{
                transform: 'rotate(-8deg)',
                borderColor: '#3d7bff',
                background: '#3a3f50',
              }}
            >
              <p className="text-[12px] font-normal" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Bot Reply
              </p>
              <p className="mt-1 text-[17px] font-normal leading-snug text-white">
                Hi, thanks i am doing great what about you? do yo have any plans?
              </p>
            </div>
            <div className="absolute left-1/2 top-[36%] z-20 -translate-x-1/2">
              <AiAssistantBot className="h-[68px] w-[68px] shadow-[0_8px_24px_rgba(0,0,0,0.35)]" />
            </div>
          </div>
        </div>
      </header>

      {/* 3. Before AI Reply */}
      <section className={`${shell} pb-14`}>
        <Label strong="Before AI Reply" rest="— the cost of routine messages" />
        <div className="mt-8 grid items-start gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <Heading className="max-w-[460px]">
            Messages don’t arrive when it’s convenient to answer them.
          </Heading>
          <p
            className="pt-2 text-[14px] font-light leading-[1.55] tracking-[0.02em] md:max-w-[300px] md:justify-self-end"
            style={{ color: textMuted }}
          >
            A reply itself might take a minute. But every message forces the same short sequence — and
            that sequence interrupts whatever you were actually doing.
          </p>
        </div>

        {/* 4. Interrupt flow */}
        <ol className="mx-auto mt-20 grid w-full max-w-[640px] gap-5 md:grid-cols-2 md:gap-x-[52px] md:gap-y-[34px]">
          {interruptSteps.map((step, index) => (
            <li key={step.title} className={`relative ${interruptPlacement[index]}`}>
              <InterruptStep title={step.title} body={step.body} />
              {/* connectors (md+) */}
              {index === 0 || index === 4 ? (
                <span
                  className="pointer-events-none absolute -right-[46px] top-[62%] hidden md:block"
                  aria-hidden="true"
                >
                  <svg width="40" height="8" viewBox="0 0 40 8" fill="none">
                    <path d="M0 4h38M34 1l4 3-4 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : null}
              {index === 2 || index === 6 ? (
                <span
                  className="pointer-events-none absolute -left-[46px] top-[62%] hidden md:block"
                  aria-hidden="true"
                >
                  <svg width="40" height="8" viewBox="0 0 40 8" fill="none" style={{ transform: 'scaleX(-1)' }}>
                    <path d="M0 4h38M34 1l4 3-4 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : null}
              {index === 1 || index === 5 ? (
                <span
                  className="pointer-events-none absolute -bottom-[30px] left-1/2 hidden -translate-x-1/2 md:block"
                  aria-hidden="true"
                >
                  <ArrowDown />
                </span>
              ) : null}
              {index === 3 ? (
                <span
                  className="pointer-events-none absolute -bottom-[30px] left-1/2 hidden -translate-x-1/2 md:block"
                  aria-hidden="true"
                >
                  <ArrowDown />
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        {/* 5. Scenario cards */}
        <ul className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((item) => (
            <li
              key={item.text}
              className="flex min-h-[164px] items-center rounded-[8px] border px-[20px] py-6"
              style={
                item.tint
                  ? { borderColor: '#1f56c4', background: '#0c1329' }
                  : { borderColor: '#2a2a2a', background: '#121212' }
              }
            >
              <p className="text-[14px] font-light leading-[1.55] tracking-[0.02em]" style={{ color: textMuted }}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* 6. Quote */}
        <p className="mt-16 max-w-[760px] text-[20px] font-semibold leading-[1.5] tracking-[0.06em] sm:text-[22px]">
          It’s rarely one message that’s the problem. It’s the constant small switching — between what
          you’re doing, and who’s waiting to hear back.
        </p>
      </section>

      {/* 7. Automation paradox */}
      <section className={`${shell} pb-14 pt-10`}>
        <Label strong="The automation paradox" />
        <Heading className="mt-8 max-w-[420px] !text-[30px]">
          If replying is repetitive, why not automate it?
        </Heading>
        <p className="mt-5 text-[13px] font-light" style={{ color: textMuted }}>
          On paper, the fix looks simple.
        </p>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-[400px_minmax(0,1fr)] md:gap-8 lg:ml-[10%] lg:grid-cols-[400px_minmax(0,360px)]">
          <img
            src={`${IMG}/loop.png`}
            alt="Automation loop: message, AI, response, send"
            width={400}
            height={420}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[400px]"
          />
          <ol className="space-y-4">
            {loopSteps.map((s) => (
              <li key={s.n} className="flex items-center gap-4">
                <span
                  className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[1.5px] text-[24px] font-light text-white"
                  style={{ borderColor: '#fff' }}
                >
                  {s.n}
                </span>
                <div>
                  <p className="text-[16px] font-normal leading-tight text-white">{s.title}</p>
                  <p className="mt-1.5 text-[13px] font-light" style={{ color: textMuted }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ReplyIsParagraph className="mt-14 max-w-[600px] !text-[14px] !leading-[1.5]" />

        {/* 8. Risk tags */}
        <ul className="mt-12 flex flex-wrap gap-x-3.5 gap-y-4">
          {risks.map((risk) => (
            <li
              key={risk}
              className="rounded-full border px-4 py-2 text-[12px] font-normal tracking-[0.12em]"
              style={{
                borderColor: 'rgba(210,120,100,0.45)',
                background: 'rgba(110,40,30,0.28)',
                color: '#e7b3a6',
              }}
            >
              {risk}
            </li>
          ))}
        </ul>

        {/* 9. Vs cards */}
        <div className="mt-20 flex flex-col items-stretch gap-5 md:flex-row md:items-center md:gap-8">
          <div
            className="flex min-h-[116px] flex-1 flex-col justify-center rounded-[8px] border px-8 py-6 md:max-w-[345px]"
            style={{ borderColor: '#27407f', background: '#12192e' }}
          >
            <p className="text-[14px] font-normal tracking-[0.08em]" style={{ color: accent }}>
              Pulls Towards
            </p>
            <p className="mt-3 text-[24px] font-semibold tracking-[0.1em] text-white">More Automation</p>
          </div>
          <span className="text-center text-[14px] font-normal text-white/80">Vs</span>
          <div
            className="flex min-h-[116px] flex-1 flex-col justify-center rounded-[8px] border px-8 py-6 md:max-w-[345px]"
            style={{ borderColor: '#6b4a1e', background: '#2c2218' }}
          >
            <p className="text-[14px] font-normal tracking-[0.08em]" style={{ color: amber }}>
              Pulls Towards
            </p>
            <p className="mt-3 text-[24px] font-semibold tracking-[0.1em] text-white">More Human Control</p>
          </div>
        </div>
        <p
          className="mt-12 max-w-[420px] text-[14px] font-light leading-[1.5] tracking-[0.06em]"
          style={{ color: textMuted }}
        >
          Every real decision in this product sits somewhere on that line. Not as a compromise between
          two opposites — but as the actual design problem to solve.
        </p>
      </section>

      {/* 10. Design principles */}
      <section className="w-full" style={{ background: bgBlack }}>
        <div className={`${shell} pb-16 pt-14`}>
          <Label strong="Design principles" rest="— how the tension got resolved" />
          <Heading className="mt-8 max-w-[480px]">
            Five commitments the product had to keep, in every screen.
          </Heading>
        </div>
        <div style={{ background: bgNavy }}>
          <ol className={`${shell} py-8`}>
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-2 border-b py-7 last:border-b-0 md:grid-cols-[90px_minmax(0,1fr)] md:gap-6"
                style={{ borderColor: 'rgba(255,255,255,0.14)' }}
              >
                <span
                  className="text-[46px] font-semibold leading-none md:self-center"
                  style={{ color: '#14233f' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[19px] font-medium leading-tight text-white">{item.title}</h3>
                  <p
                    className="mt-3 max-w-[760px] text-[14px] font-light leading-[1.65] tracking-[0.04em]"
                    style={{ color: textMuted }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 11. How AI Reply works */}
      <section className={`${shell} pb-6 pt-16`}>
        <Label strong="How AI Reply works" />
        <Heading className="mt-8 max-w-[460px]">
          One pipeline, from a message landing to a reply going out.
        </Heading>
        <img
          src={`${IMG}/pipeline-diagram.png`}
          alt="Pipeline: Message Received, Preference Check, Context Analysis, Relationship Analysis, Response Drafted, Preview Shown, Decision Timer, User Chooses, Message Delivered"
          width={870}
          height={530}
          loading="lazy"
          className="mx-auto mt-14 h-auto w-full max-w-[870px]"
        />
      </section>

      {/* 12. The control window */}
      <section className={`${shell} pb-16 pt-14`}>
        <Label strong="The control window" />
        <Heading className="mt-8 max-w-[420px]">The most important time in the experience.</Heading>
        <ReplyIsParagraph className="mt-7 max-w-[640px] !text-[14px] !leading-[1.5]" />

        <div className="mt-20 grid items-start gap-10 md:grid-cols-[260px_minmax(0,1fr)] md:gap-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          <ControlPhone />
          <ul className="border-t" style={{ borderColor: 'rgba(255,255,255,0.22)' }}>
            {controls.map((c) => (
              <li
                key={c.title}
                className="grid gap-3 border-b py-7 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-8"
                style={{ borderColor: 'rgba(255,255,255,0.22)' }}
              >
                <h3 className="text-[20px] font-medium leading-tight text-white">{c.title}</h3>
                <p className="text-[14px] font-light leading-[1.65] tracking-[0.04em]" style={{ color: textMuted }}>
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* 13. Four controls, one idea */}
        <p
          className="mt-8 max-w-[500px] text-[14px] font-light leading-[1.6] tracking-[0.06em]"
          style={{ color: textMuted }}
        >
          Four controls, one underlying idea: nothing leaves this phone as "you" without a moment where
          you could have stopped it.
        </p>
      </section>

      <section className={`${shell} pb-6 pt-8`}>
        <Heading className="max-w-[460px]">
          Same person.
          <br />
          Different relationships.
          <br />
          Different AI.
        </Heading>
        <Muted className="mt-8 max-w-[480px] !text-[14px] !leading-[1.5]">
          Communication style depends entirely on who you’re talking to. AI Reply configures to match
          that reality — not to produce grammatically correct responses, but contextually appropriate
          ones.
        </Muted>

        {/* 14. Persona cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <PersonaCard
            name="Best Friend"
            tone="amber"
            incoming="Are you coming today?"
            reply="Yeah bro, i’ll call you later"
            instructions={'"Keep it casual. Short sentence.'}
          />
          <PersonaCard
            name="Manager"
            tone="blue"
            incoming="Hi, just wanted to check in on the project."
            reply="Thanks for checking. I’ll update you by today."
            instructions={'"Professional tone. No slang. Keep it brief and direct.'}
          />
        </div>

        <div className="mt-24 grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_295px] md:gap-16">
          <div className="mx-auto w-full max-w-[540px] md:mx-0 md:pl-[4%]">
            <h3 className="text-[22px] font-medium leading-snug text-white">
              Users write the instructions, in their own words
            </h3>
            <ul className="mt-8 space-y-5">
              {instructionExamples.map((quote) => (
                <li
                  key={quote}
                  className="rounded-[8px] border px-5 py-[18px] text-[15px] font-light"
                  style={{ borderColor: '#2f2f2f', background: cardDark, color: 'rgba(255,255,255,0.78)' }}
                >
                  {quote}
                </li>
              ))}
            </ul>
          </div>
          <CaseStudyScreen
            plate={bgBlack}
            radius={44}
            className="mx-auto w-[295px] max-w-full md:mx-0"
          >
            <img
              src={`${IMG}/phone-settings.png`}
              alt="AI Reply Settings screen with AI Configuration prompt, Select Contacts and Reply Delay"
              width={295}
              height={580}
              loading="lazy"
              className="block h-auto w-full"
            />
          </CaseStudyScreen>
        </div>
      </section>

      {/* 15. Boundary */}
      <section className={`${shell} pb-16 pt-24`}>
        <Heading className="max-w-[520px]">
          Not a settings toggle. A boundary the user draws themselves.
        </Heading>
        <Muted className="mt-6 max-w-[480px] !text-[14px] !leading-[1.5]">
          AI Reply doesn’t get access to every conversation by default. Per contact, the user decides
          whether AI is allowed in at all — and per contact, that decision can be reversed just as
          easily.
        </Muted>
      </section>

      <section className="w-full py-14" style={{ background: bgGray }}>
        <div className={`${shell} grid items-start gap-14 sm:grid-cols-2`}>
          {[
            { src: 'contacts-on', alt: 'AutoReply Contacts with all contacts switched on', caption: 'Reply delay is set for all the contacts.' },
            { src: 'contacts-off', alt: 'AutoReply Contacts with all contacts switched off', caption: 'Turning a contact off removes AI from that thread entirely' },
          ].map((phone) => (
            <figure key={phone.src} className="flex flex-col items-center">
              <CaseStudyScreen plate={bgGray} radius={44} className="w-[285px] max-w-full">
                <img
                  src={`${IMG}/${phone.src}.png`}
                  alt={phone.alt}
                  width={285}
                  height={570}
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </CaseStudyScreen>
              <figcaption
                className="mt-5 max-w-[270px] text-center text-[13px] font-light leading-[1.45] tracking-[0.05em]"
                style={{ color: textMuted }}
              >
                {phone.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 16. Quote + autonomy levels */}
      <section className={`${shell} pb-6 pt-16`}>
        <p className="max-w-[520px] text-[18px] font-semibold leading-[1.6] tracking-[0.1em]">
          "I decide where AI is allowed to represent me" — not a feature description, the actual
          feeling this screen has to produce.
        </p>

        <Heading className="mt-20 max-w-[460px]">
          Levels of AI autonomy.
          <br />
          Trust develops gradually.
        </Heading>
        <Muted className="mt-6 max-w-[480px] !text-[14px] !leading-[1.5]">
          How much control should AI have? The answer depends on the user, the relationship, and the
          situation. A spectrum is more honest than a toggle.
        </Muted>

        <ul className="mt-10 space-y-4">
          {autonomyLevels.map((lvl) => (
            <li
              key={lvl.level}
              className="flex items-center gap-5 rounded-[8px] border px-6 py-5"
              style={
                lvl.active
                  ? { borderColor: '#1f4fa8', background: '#0b1226' }
                  : { borderColor: '#2c2c2c', background: cardDark }
              }
            >
              <span
                className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] text-[14px] font-normal"
                style={
                  lvl.active
                    ? { background: '#0a84ff', color: '#fff' }
                    : { background: '#232329', color: textDim }
                }
              >
                {lvl.level}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold leading-tight text-white">{lvl.title}</h3>
                <p className="mt-1.5 text-[13px] font-light leading-[1.5]" style={{ color: textMuted }}>
                  {lvl.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 17. Trust */}
      <section className={`${shell} pb-6 pt-20`}>
        <Heading className="max-w-[420px]">
          Trust isn’t a feature.
          <br />
          It’s an outcome.
        </Heading>
        <Muted className="mt-6 !text-[14px]">Six design commitments that make trust possible.</Muted>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {commitments.map((c) => (
            <li
              key={c.title}
              className="flex min-h-[180px] flex-col justify-center rounded-[8px] border px-[24px] py-8"
              style={
                c.active
                  ? { borderColor: '#1f56c4', background: '#0c1329' }
                  : { borderColor: '#2a2a2a', background: '#121212' }
              }
            >
              <h3 className="text-[18px] font-medium leading-tight text-white">{c.title}</h3>
              <p className="mt-3 text-[12px] font-light leading-[1.4]" style={{ color: textMuted }}>
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 18. One complete story */}
      <section className={`${shell} pb-6 pt-16`}>
        <Heading className="max-w-[420px] !text-[30px]">One complete story</Heading>
        <Muted className="mt-6 max-w-[460px] !text-[14px] !leading-[1.5]">
          From setup to a message being sent — while you were fully focused on something else.
        </Muted>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[600px_minmax(0,1fr)] lg:gap-10">
          <CaseStudyScreen
            plate={bgBlack}
            radius={28}
            className="mx-auto w-full max-w-[600px]"
          >
            <img
              src={`${IMG}/story-phones.png`}
              alt="AI Reply settings and a conversation where the bot is counting down to send a reply"
              width={600}
              height={585}
              loading="lazy"
              className="block h-auto w-full"
            />
          </CaseStudyScreen>
          <div className="max-w-[330px]">
            <h3 className="text-[22px] font-medium leading-tight text-white">Activate and Send</h3>
            <p className="mt-5 text-[14px] font-light leading-[1.75] tracking-[0.05em]" style={{ color: textMuted }}>
              Enable the AI Model to communicate with your contacts without interrupting your tasks and
              daily life values.
              <br />
              Set everything according to your tasks and values.
            </p>
            <h3 className="mt-9 text-[22px] font-medium leading-tight text-white">Build Trust</h3>
            <p className="mt-5 text-[14px] font-light leading-[1.75] tracking-[0.05em]" style={{ color: textMuted }}>
              Trust on what you pay for, Keeping everything you need and the instructions from the AI
              Reply that are necessary while giving prompt to the model and keeping it On for the ones
              you want to reply.
            </p>
          </div>
        </div>
      </section>

      {/* 19. Restraint */}
      <section className={`${shell} pb-6 pt-24`}>
        <Heading className="max-w-[420px]">
          Knowing when not to reply is part of intelligence
        </Heading>
        <Muted className="mt-6 max-w-[480px] !text-[14px] !leading-[1.5]">
          The hardest design decisions were about restraint — defining what AI should never do
          unilaterally.
        </Muted>
        <ul className="mt-10 space-y-[14px]">
          {restraintRows.map((row) => (
            <li
              key={row.title}
              className="flex flex-col gap-4 rounded-[8px] border px-6 py-[18px] sm:flex-row sm:items-center sm:justify-between"
              style={{ borderColor: '#2c2c2c', background: cardDark }}
            >
              <div>
                <h3 className="text-[16px] font-semibold leading-tight text-white">{row.title}</h3>
                <p className="mt-1.5 text-[13px] font-light" style={{ color: textMuted }}>
                  {row.note}
                </p>
              </div>
              <span
                className="inline-flex w-fit shrink-0 rounded-full border px-5 py-1.5 text-[13px] font-normal"
                style={pillStyles[row.tone]}
              >
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 20. Learnings */}
      <section className="w-full" style={{ background: bgBlack }}>
        <div className={`${shell} pb-12 pt-20`}>
          <Heading className="max-w-[420px]">What designing AI behavior taught me</Heading>
        </div>
        <div style={{ background: bgNavy }}>
          <ol className={`${shell} py-8`}>
            {learnings.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-2 border-b py-7 last:border-b-0 md:grid-cols-[90px_minmax(0,1fr)] md:gap-6"
                style={{ borderColor: 'rgba(255,255,255,0.14)' }}
              >
                <span
                  className="text-[46px] font-semibold leading-none md:self-center"
                  style={{ color: '#14233f' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium leading-tight text-white">{item.title}</h3>
                  <p
                    className="mt-3 max-w-[780px] text-[14px] font-light leading-[1.65] tracking-[0.04em]"
                    style={{ color: textMuted }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 21. Closing */}
      <section style={{ background: bgBlack }}>
        <div className={`${shell} py-24 text-center sm:py-28`}>
          <h2 className="mx-auto max-w-[540px] text-[30px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[36px]">
            AI Reply wasn’t about removing humans from conversations
          </h2>
          <p
            className="mx-auto mt-6 max-w-[520px] text-[14px] font-light leading-[1.55] tracking-[0.06em]"
            style={{ color: textMuted }}
          >
            It was about deciding when AI could help —
            <br className="hidden sm:block" /> and making sure humans could take control whenever it
            mattered.
          </p>
        </div>
      </section>
      </div>

      {/* 22. Next project + float controls */}
      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}
      <CaseStudyFloatControls tone={isLight ? 'orange' : 'dark'} />
    </div>
  )
}
