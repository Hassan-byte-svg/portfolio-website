import type { ReactNode } from 'react'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { NextProjectCard } from './NextProjectCard'
import { ThemeToggle } from './ThemeToggle'

/** Matches the 1200 px Figma frame; section backgrounds stay full-bleed. */
const shell = 'mx-auto w-full max-w-[1200px] px-[clamp(1.25rem,3vw,3rem)]'

const accent = '#75B798'
const ink = '#111111'
const muted = '#767676'
const softGray = '#8C8C96'
const heroMint = '#D8E7E0'
const cardBg = '#F9F9F9'
const line = '#E5E7EB'

const img = '/assets/images/projects/track-my-time/figma'

const sectionGap = 'pt-[clamp(4.5rem,9vw,8rem)]'

/** Small left label + content column (Figma two-column pattern). */
function TwoCol({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="grid gap-5 md:grid-cols-[30%_minmax(0,1fr)] md:gap-0">
      <p className="text-[16px] leading-[1.35] sm:text-[17px]" style={{ color: '#4F4F4F' }}>
        {label}
      </p>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

function SectionHeading({ gray, dark, sub }: { gray: string; dark: string; sub: string }) {
  return (
    <>
      <h2 className="max-w-[600px] text-[clamp(1.75rem,3.2vw,2.35rem)] font-normal leading-[1.2] tracking-[-0.02em]">
        <span style={{ color: softGray }}>{gray}</span> <span style={{ color: ink }}>{dark}</span>
      </h2>
      <p
        className="mt-4 max-w-[560px] text-[16px] leading-[1.5] sm:text-[18px]"
        style={{ color: '#333333' }}
      >
        {sub}
      </p>
    </>
  )
}

function NumberCard({ n, children }: { n: string; children: ReactNode }) {
  return (
    <li
      className="relative flex min-h-[200px] items-center rounded-[14px] px-5 py-10 sm:aspect-square sm:min-h-0 sm:px-6"
      style={{ background: cardBg }}
    >
      <span className="absolute left-4 top-4 rounded-[4px] bg-white px-1.5 py-0.5 text-[12px] leading-none sm:text-[13px]">
        {n}
      </span>
      <p className="max-w-[190px] text-[15px] font-medium leading-[1.4] sm:text-[16px]" style={{ color: ink }}>
        {children}
      </p>
    </li>
  )
}

function CardGroup({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className={sectionGap}>
      <p className="mb-5 text-[16px] sm:text-[17px]" style={{ color: '#4F4F4F' }}>
        {label}
      </p>
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((text, index) => (
          <NumberCard key={text} n={`0${index + 1}`}>
            {text}
          </NumberCard>
        ))}
      </ol>
    </div>
  )
}

function CalloutTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[19px] font-medium leading-[1.3] sm:text-[20px]" style={{ color: ink }}>
      {children}
    </h3>
  )
}

function CalloutText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 max-w-[340px] text-[14px] leading-[1.65] sm:text-[15px]" style={{ color: muted }}>
      {children}
    </p>
  )
}

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SurveyQuestion({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[350px] text-[16px] leading-[1.5] sm:text-[17px]" style={{ color: muted }}>
      {children}
    </p>
  )
}

function StatCard({
  question,
  value,
  caption,
  gradient,
  triangle,
  className = '',
}: {
  question: string
  value: string
  caption: string
  gradient: string
  triangle: string
  className?: string
}) {
  return (
    <article
      className={`flex min-h-[300px] flex-col justify-between rounded-[14px] p-6 sm:min-h-[344px] sm:p-8 ${className}`}
      style={{ background: gradient }}
    >
      <SurveyQuestion>{question}</SurveyQuestion>
      <div className="ml-auto text-right">
        <p className="flex items-start justify-end gap-2 font-light leading-none tracking-[-0.02em]" style={{ color: ink }}>
          <span
            className="mt-[0.9rem] inline-block h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent"
            style={{ borderBottomColor: triangle }}
            aria-hidden="true"
          />
          <span className="text-[clamp(3.5rem,7vw,5.5rem)]">{value}</span>
        </p>
        <p className="mt-3 text-[15px] sm:text-[17px]" style={{ color: muted }}>
          {caption}
        </p>
      </div>
    </article>
  )
}

const goals = [
  'Reduce Context Switching and Improve Work Quality',
  'Enhance Productivity By Organizing Workspaces',
  'Simplify Work Management Across Multiple Projects',
  'Create a Focused and Distraction-Free User Experience',
] as const

const objectives = [
  'Design an Intuitive and Easy-to-Navigate Interface',
  'Create a Consistent and Scalable Design System',
  'Improve Accessibility and User Interaction Efficiency',
  'Deliver a Modern, Minimal, and Visually Engaging Experience',
] as const

const projectDetails = [
  ['Project', 'ThinkFlow'],
  ['Category', 'Future of Work / Digital Workplace'],
  ['Industry', 'SaaS Product (Software as a Service)'],
  ['Designed By', 'Waleed Khan'],
] as const

const problemPoints = [
  'Users frequently switch between multiple applications and projects.',
  'Important information is scattered across different tools.',
  'Constant context switching reduces focus and productivity.',
] as const

const solutionPoints = [
  'Created dedicated workspaces for different projects.',
  'Designed quick switching between workflows and tools.',
  'Centralized access to tasks, resources, and applications.',
] as const

const typeScale = [
  ['Heading', '32 Pixels', 'text-[26px] sm:text-[30px]'],
  ['Sub-Heading', '24 Pixels', 'text-[22px] sm:text-[26px]'],
  ['Body Text', '16 Pixels', 'text-[20px] sm:text-[24px]'],
] as const

const looks = [
  ['Aa', 'Bb', 'Cc', 'Dd', 'Ee'],
  ['1', '2', '3', '4', '5'],
  ['!', '@', '£', '$', '%'],
] as const

const swatches = [
  { hex: '111111', fill: '#111111', text: '#FFFFFF', left: 33.8, top: 22.7 },
  { hex: 'E5E7EB', fill: '#E5E7EB', text: '#111111', left: 68.4, top: 22.7 },
  { hex: '75B798', fill: '#75B798', text: '#FFFFFF', left: 10.6, top: 71.9 },
  { hex: '767676', fill: '#767676', text: '#FFFFFF', left: 91.9, top: 69.6 },
] as const

const donutRadius = 110
const donutLength = 2 * Math.PI * donutRadius

/**
 * ThinkFlow case study — rebuilt from the Figma file as real HTML text,
 * with cropped Figma exports only for the complex Mac mockups.
 */
export function ThinkFlowCaseStudy({
  project,
  backTo = '/projects',
  nextProject,
}: {
  project: Project
  backTo?: string
  nextProject?: Project
}) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white antialiased" style={{ color: ink }}>
      {/* 1. Sticky header */}
      <div
        className="sticky top-0 z-30 w-full border-b bg-white/95 py-3 backdrop-blur"
        style={{ borderColor: 'rgba(17, 17, 17, 0.08)' }}
      >
        <div className={`${shell} flex items-center gap-3`}>
          <div
            className="rounded-full border bg-white px-4 py-2 shadow-sm"
            style={{ borderColor: 'rgba(17, 17, 17, 0.08)' }}
          >
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal" style={{ color: 'rgba(17, 17, 17, 0.8)' }}>
            {project.caseStudyTitle}
          </p>
          <ThemeToggle compact />
        </div>
      </div>

      {/* 2. Hero — the Mac mockup on mint, full-bleed */}
      <header className="w-full" style={{ background: heroMint }}>
        <img
          src={`${img}/hero.png`}
          alt="ThinkFlow workspace dashboard shown on an iMac"
          width={1200}
          height={939}
          decoding="async"
          fetchPriority="high"
          draggable={false}
          className="mx-auto block h-auto w-full max-w-[1200px]"
        />
      </header>

      <main>
        <div className={shell}>
          {/* 3. Client's Vision */}
          <section className="pt-[clamp(3.5rem,8vw,7rem)]">
            <p className="text-[16px] sm:text-[17px]" style={{ color: '#4F4F4F' }}>
              Client&rsquo;s Vision
            </p>
            <p
              className="mt-8 text-[clamp(1.2rem,2.45vw,1.8rem)] font-normal leading-[1.55]"
              style={{ color: softGray }}
            >
              <span style={{ color: ink }}>ThinkFlow</span> was envisioned as a productivity platform that helps
              users stay focused by organizing their{' '}
              <span style={{ color: ink }}>tools, tasks, and workflows into dedicated workspaces,</span> reducing
              the friction caused by constant context <span style={{ color: ink }}>switching.</span>
            </p>
            <hr className="mt-14 border-0 border-t" style={{ borderColor: line }} />
          </section>

          {/* 4. About ThinkFlow */}
          <section className="pt-14">
            <p className="text-[16px] sm:text-[17px]" style={{ color: ink }}>
              About ThinkFlow
            </p>
            <p
              className="mt-8 text-[clamp(1.2rem,2.45vw,1.8rem)] font-normal leading-[1.55]"
              style={{ color: softGray }}
            >
              <span style={{ color: accent }}>ThinkFlow</span> is a workspace management platform designed to
              help professionals organize their tools, tasks, and workflows in one place. By reducing context
              switching and creating focused work environments, it enables users to stay productive, maintain
              momentum, and seamlessly transition between projects.
            </p>
          </section>

          {/* 5. Project Details */}
          <section className={sectionGap}>
            <TwoCol label="Project Details">
              <dl className="border-t" style={{ borderColor: line }}>
                {projectDetails.map(([term, value]) => (
                  <div
                    key={term}
                    className="flex items-center justify-between gap-6 border-b py-5 sm:py-6"
                    style={{ borderColor: line }}
                  >
                    <dt className="text-[15px] sm:text-[17px]" style={{ color: muted }}>
                      {term}
                    </dt>
                    <dd className="text-right text-[15px] sm:text-[17px]" style={{ color: ink }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </TwoCol>
          </section>

          {/* 6. Design Process — Goals + Objectives */}
          <section className={sectionGap}>
            <TwoCol label="Design Process">
              <h2 className="max-w-[640px] text-[clamp(1.75rem,3.2vw,2.35rem)] font-normal leading-[1.2] tracking-[-0.02em]">
                <span style={{ color: softGray }}>Defining the</span> <span style={{ color: ink }}>Goals</span>{' '}
                <span style={{ color: softGray }}>and</span> <span style={{ color: ink }}>Objectives</span>
              </h2>
              <p className="mt-4 max-w-[560px] text-[16px] leading-[1.5] sm:text-[18px]" style={{ color: '#333333' }}>
                To create a seamless workspace experience that improves focus, organization, and workflow
                efficiency.
              </p>
            </TwoCol>
            <CardGroup label="Project’s Goals" items={goals} />
            <CardGroup label="Design Objectives" items={objectives} />
          </section>

          {/* 7. Users Discussions — survey */}
          <section className={sectionGap}>
            <TwoCol label={<>Users Discussions<br className="hidden md:block" /> and Thoughts</>}>
              <SectionHeading
                gray="Improving"
                dark="Through Users Insights"
                sub="Leveraging User Research to Identify Pain Points and Drive Meaningful Improvements"
              />
            </TwoCol>

            <div className="mt-[clamp(2.5rem,6vw,5rem)] grid gap-5 md:grid-cols-2 md:gap-x-[3%]">
              <StatCard
                question="Do you get any difficulty when switching between applications while working?"
                value="80%"
                caption="Yes It is very time taking process"
                gradient="linear-gradient(135deg, #FFFFFF 8%, #FFF4DE 55%, #FFD98F 100%)"
                triangle="#F5A524"
              />
              <StatCard
                className="md:mt-[clamp(4rem,10vw,10.5rem)]"
                question="Have you ever wished all your work tools were accessible from one place?"
                value="87%"
                caption="Yes they want it to be accessible"
                gradient="linear-gradient(135deg, #FFFFFF 8%, #EEF6F1 55%, #CDE4D8 100%)"
                triangle={accent}
              />
            </div>

            {/* Donut */}
            <article
              className="relative mt-[clamp(2.5rem,6vw,5rem)] overflow-hidden rounded-[14px] p-6 sm:p-8"
              style={{
                background:
                  'radial-gradient(ellipse 45% 55% at 64% 48%, rgba(117,183,152,0.16), rgba(255,255,255,0) 70%), #FCFCFC',
              }}
            >
              <SurveyQuestion>What features would help you save time during your workflow?</SurveyQuestion>
              <div className="relative mx-auto mt-6 w-full max-w-[420px] md:-mt-4 md:ml-[34%] md:mr-auto">
                <svg viewBox="0 0 400 400" className="h-auto w-full" role="img" aria-label="WorkFlow Switching 87 percent">
                  <circle cx="200" cy="200" r="96" fill="none" stroke="#EAF2EE" strokeWidth="16" />
                  <circle
                    cx="200"
                    cy="200"
                    r={donutRadius}
                    fill="none"
                    stroke="#DADADA"
                    strokeWidth="22"
                    strokeLinecap="round"
                    strokeDasharray={`${donutLength * 0.1} ${donutLength}`}
                    transform="rotate(61 200 200)"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r={donutRadius}
                    fill="none"
                    stroke={accent}
                    strokeWidth="22"
                    strokeLinecap="round"
                    strokeDasharray={`${donutLength * 0.8} ${donutLength}`}
                    transform="rotate(90 200 200)"
                  />
                  <circle cx="200" cy="200" r="82" fill="#FFFFFF" />
                  <text x="200" y="188" textAnchor="middle" fontSize="15" fill={ink}>
                    WorkFlow Switching
                  </text>
                  <text x="200" y="232" textAnchor="middle" fontSize="42" fill={ink}>
                    87%
                  </text>
                  <text x="200" y="40" textAnchor="middle" fontSize="14" fill={ink}>
                    50%
                  </text>
                  <text x="48" y="206" textAnchor="middle" fontSize="14" fill={ink}>
                    25%
                  </text>
                  <text x="352" y="206" textAnchor="middle" fontSize="14" fill={ink}>
                    75%
                  </text>
                  <text x="200" y="378" textAnchor="middle" fontSize="14" fill={ink}>
                    0%
                  </text>
                </svg>
              </div>
            </article>

            {/* 80% bar */}
            <article
              className="mx-auto mt-[clamp(2.5rem,6vw,5rem)] w-full max-w-[860px] rounded-[14px] px-5 py-8 sm:px-10 sm:py-10"
              style={{ background: '#FBFBFB' }}
            >
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-10">
                <p
                  className="text-[clamp(3.5rem,8vw,6rem)] font-light leading-none tracking-[-0.02em]"
                  style={{ color: accent }}
                >
                  80%
                </p>
                <p className="max-w-[380px] text-[16px] leading-[1.45] sm:text-[18px]" style={{ color: '#333333' }}>
                  About 80% participants from technology-focused professions faced workflow challenges and
                  productivity needs.
                </p>
              </div>
              <div className="mt-8 flex items-end gap-[3px]" aria-hidden="true">
                <div className="flex h-[88px] flex-[68] gap-[3px]">
                  {Array.from({ length: 19 }, (_, i) => (
                    <span key={i} className="h-full flex-1" style={{ background: '#DCDCDC' }} />
                  ))}
                </div>
                <span className="mb-0 h-3 flex-[31]" style={{ background: accent }} />
              </div>
              <div className="mt-4 flex text-[14px] sm:text-[16px]" style={{ color: ink }}>
                <span className="flex-[68]">0%</span>
                <span className="flex-[31]">80%</span>
              </div>
            </article>
            <p className="mx-auto mt-6 flex max-w-[860px] gap-5 text-[12px] leading-[1.6] sm:text-[13px]" style={{ color: muted }}>
              <span className="shrink-0" style={{ color: ink }}>
                Note:
              </span>
              <span>
                Although not all survey data is included, over 80% of the insights revealed common user needs
                and challenges. These findings guided the design process, helping create a solution that better
                aligns with user expectations and workflow requirements.
              </span>
            </p>
          </section>

          {/* 8. Problem and Solution */}
          <section className={sectionGap}>
            <TwoCol label={<>Problem and<br className="hidden md:block" /> Solution</>}>
              <SectionHeading
                gray="Solving Problem By"
                dark="Design"
                sub="ThinkFlow introduces dedicated workspaces and quick context switching to help users stay focused."
              />
            </TwoCol>
            <div className="mt-[clamp(2.5rem,6vw,5rem)] grid gap-5 md:grid-cols-2 md:gap-x-[3%]">
              <article className="rounded-[14px] p-6 sm:p-8" style={{ background: cardBg }}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[24px] font-normal sm:text-[28px]" style={{ color: ink }}>
                    Problem
                  </h3>
                  <span
                    className="flex h-7 w-6 items-center justify-center rounded-[3px] text-[14px] font-semibold text-white"
                    style={{ background: '#F5191C' }}
                    aria-hidden="true"
                  >
                    ?
                  </span>
                </div>
                <ul className="mt-8 space-y-1 text-[15px] leading-[1.9] sm:text-[17px]" style={{ color: muted }}>
                  {problemPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true">&middot;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[14px] p-6 sm:p-8 md:mt-[clamp(3rem,8vw,10.5rem)]" style={{ background: cardBg }}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[24px] font-normal sm:text-[28px]" style={{ color: ink }}>
                    Solution
                  </h3>
                  <span
                    className="flex h-7 w-6 items-center justify-center rounded-[3px] text-white"
                    style={{ background: accent }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0012 3z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <ul className="mt-8 space-y-1 text-[15px] leading-[1.9] sm:text-[17px]" style={{ color: muted }}>
                  {solutionPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true">&middot;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          {/* 9. Empty state mockup */}
          <section className={sectionGap}>
            <img
              src={`${img}/empty.png`}
              alt="ThinkFlow empty state on a MacBook: Welcome to ThinkFlow, create your first workspace"
              width={1068}
              height={801}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />
          </section>

          {/* 10. Angled mint mockup */}
          <section className="pt-[clamp(2.5rem,6vw,5rem)]">
            <img
              src={`${img}/angled.png`}
              alt="Angled close-up of the ThinkFlow workspace sidebar and application cards on a mint panel"
              width={1068}
              height={1574}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />
          </section>

          {/* 11. Visual Identity */}
          <section className={sectionGap}>
            <TwoCol label="Visual Identity">
              <SectionHeading
                gray="Building a Cohesive Experience Through"
                dark="Typography and Color"
                sub="A carefully crafted typography system and purposeful color palette work together to establish visual hierarchy, enhance readability and strengthen brand identity."
              />
            </TwoCol>
          </section>

          {/* 12. Typography */}
          <section className="pt-[clamp(3rem,7vw,6rem)]">
            <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-[8%]">
              <div>
                <p
                  className="text-[clamp(4rem,10vw,7rem)] font-normal leading-[1] tracking-[-0.04em]"
                  style={{ color: ink }}
                >
                  SF Pro
                </p>
                <dl className="mt-10 space-y-8 text-[17px] sm:text-[19px]">
                  <div className="grid grid-cols-[88px_1fr] items-baseline gap-x-4 sm:grid-cols-[132px_1fr]">
                    <dt style={{ color: '#4F4F4F' }}>Styles</dt>
                    <dd className="flex flex-wrap gap-x-6 gap-y-1 sm:gap-x-9">
                      <span className="font-normal" style={{ color: softGray }}>
                        Regular
                      </span>
                      <span className="font-medium" style={{ color: '#4F4F4F' }}>
                        Medium
                      </span>
                      <span className="font-semibold" style={{ color: '#4F4F4F' }}>
                        Semi Bold
                      </span>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[88px_1fr] items-start gap-x-4 sm:grid-cols-[132px_1fr]">
                    <dt style={{ color: '#4F4F4F' }}>Looks</dt>
                    <dd className="space-y-3" style={{ color: softGray }}>
                      {looks.map((row) => (
                        <div key={row.join('')} className="grid max-w-[420px] grid-cols-5">
                          {row.map((glyph) => (
                            <span key={glyph}>{glyph}</span>
                          ))}
                        </div>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
              <ul>
                {typeScale.map(([name, size, cls], index) => (
                  <li
                    key={name}
                    className={`flex items-baseline justify-between gap-4 py-5 ${index > 0 ? 'border-b' : ''}`}
                    style={{ borderColor: line }}
                  >
                    <span className={`font-normal ${cls}`} style={{ color: softGray }}>
                      {name}
                    </span>
                    <span className="text-[16px] sm:text-[20px]" style={{ color: softGray }}>
                      {size}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 13. Color palette */}
          <section className="pt-[clamp(3rem,7vw,6rem)]">
            <div className="relative mx-auto aspect-[728/280] w-full max-w-[1068px]">
              <svg
                viewBox="0 0 728 280"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M 40 251 A 366 366 0 0 1 688 251"
                  fill="none"
                  stroke="#D4D4D4"
                  strokeWidth="3"
                  strokeDasharray="8 10"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              {swatches.map((swatch) => (
                <div
                  key={swatch.hex}
                  className="absolute flex aspect-square w-[16.4%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white"
                  style={{ left: `${swatch.left}%`, top: `${swatch.top}%`, borderColor: '#EDEDED' }}
                >
                  <div
                    className="flex aspect-square w-[91%] items-center justify-center rounded-full text-[clamp(0.7rem,1.8vw,1.15rem)]"
                    style={{ background: swatch.fill, color: swatch.text }}
                    role="img"
                    aria-label={`Color #${swatch.hex}`}
                  >
                    {swatch.hex}
                  </div>
                </div>
              ))}
              <p className="absolute left-1/2 top-[64%] -translate-x-1/2 text-[clamp(1rem,2vw,1.4rem)]" style={{ color: ink }}>
                Color Used
              </p>
            </div>
          </section>

          {/* 14. Dashboard mockup */}
          <section className={sectionGap}>
            <img
              src={`${img}/dashboard.png`}
              alt="ThinkFlow Product Design workspace dashboard on a laptop"
              width={1068}
              height={665}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />
          </section>

          {/* 15. Design Breakdown */}
          <section className={sectionGap}>
            <TwoCol label="Design Breakdown">
              <SectionHeading
                gray="A Closer Look at the"
                dark="Product Experience"
                sub="Breaking down the core screens that power collaboration, organization, and workflow efficiency within ThinkFlow."
              />
            </TwoCol>
          </section>

          {/* 16. App Switcher */}
          <section className="pt-[clamp(3rem,7vw,6rem)]">
            <img
              src={`${img}/app-switcher.png`}
              alt="ThinkFlow App Cycler overlay showing Safari, VS Code, Slack and Figma"
              width={1068}
              height={662}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />
            <div className="mt-[clamp(3rem,7vw,6rem)] grid items-center gap-8 md:grid-cols-[53%_minmax(0,1fr)]">
              <img
                src={`${img}/chip-app-switcher.png`}
                alt="App Cycler for the Product Design workspace"
                width={498}
                height={158}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="block h-auto w-full max-w-[498px]"
              />
              <div>
                <CalloutTitle>App Switcher</CalloutTitle>
                <CalloutText>
                  The App Switcher enables users to quickly navigate between applications without disrupting
                  their workflow. By centralizing access to frequently used tools, it reduces navigation time
                  and helps maintain productivity across different tasks.
                </CalloutText>
              </div>
            </div>
          </section>

          {/* 17. Workspace Switcher */}
          <section className="pt-[clamp(3rem,7vw,6rem)]">
            <img
              src={`${img}/ws-switcher.png`}
              alt="ThinkFlow Workspace Switcher overlay listing Product Design, Frontend, Research and Marketing"
              width={1068}
              height={661}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />
            <div className="mt-[clamp(3rem,7vw,6rem)] grid items-center gap-8 md:grid-cols-[54%_minmax(0,1fr)]">
              <img
                src={`${img}/chip-ws-switcher.png`}
                alt="Workspace Switcher with four workspaces"
                width={502}
                height={175}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="block h-auto w-full max-w-[502px]"
              />
              <div>
                <CalloutTitle>Workspace Switcher</CalloutTitle>
                <CalloutText>
                  The Workspace Switcher allows users to move effortlessly between projects and work
                  environments while preserving context. This helps minimize interruptions, maintain focus, and
                  create a more organized workflow experience.
                </CalloutText>
              </div>
            </div>
          </section>

          {/* 18. Search / App Picker */}
          <section className="pt-[clamp(3rem,7vw,6rem)]">
            <div className="grid items-start gap-10 md:grid-cols-[38%_minmax(0,1fr)] md:gap-6">
              <div className="space-y-6">
                <div className="rounded-[10px] p-4" style={{ background: cardBg }}>
                  <div
                    className="flex items-center gap-3 rounded-[8px] border bg-white px-4 py-3 text-[16px]"
                    style={{ borderColor: line, color: muted }}
                  >
                    <SearchIcon />
                    <span>Search apps</span>
                  </div>
                </div>
                <p className="max-w-[300px] text-[14px] leading-[1.65] sm:text-[15px]" style={{ color: muted }}>
                  The search feature allows users to quickly locate and access applications, reducing
                  navigation time and enabling a faster, more efficient workflow.
                </p>
                <div
                  className="flex flex-col items-center rounded-[10px] px-4 py-8 text-center"
                  style={{ background: cardBg }}
                >
                  <span style={{ color: muted }}>
                    <SearchIcon size={34} />
                  </span>
                  <p className="mt-3 text-[18px] font-medium" style={{ color: '#4F4F4F' }}>
                    No App Found
                  </p>
                  <p className="mt-1 text-[14px]" style={{ color: muted }}>
                    Try adjusting your search or filters
                  </p>
                </div>
                <p className="max-w-[300px] text-[14px] leading-[1.65] sm:text-[15px]" style={{ color: muted }}>
                  No applications match the current search criteria. Try adjusting your search terms or explore
                  available applications from the workspace directory.
                </p>
              </div>
              <img
                src={`${img}/app-picker-search.png`}
                alt="App Picker window showing the No App Found empty state"
                width={665}
                height={633}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="ml-auto block h-auto w-full max-w-[665px]"
              />
            </div>
          </section>

          {/* 19. Create Workspace */}
          <section className="pt-[clamp(3rem,7vw,6rem)]">
            <img
              src={`${img}/create-ws.png`}
              alt="ThinkFlow Create Workspace form with name, color, icon and template options"
              width={1068}
              height={662}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />
            <div className="mt-[clamp(3rem,7vw,6rem)] grid items-center gap-8 md:grid-cols-[62%_minmax(0,1fr)]">
              <img
                src={`${img}/preview-card.png`}
                alt="Workspace preview card: Development"
                width={628}
                height={325}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="-ml-2 block h-auto w-full max-w-[628px]"
              />
              <div>
                <CalloutTitle>All Applications Selected</CalloutTitle>
                <CalloutText>
                  All available applications are displayed, providing users with a complete overview and quick
                  access to the tools they need within their workspace.
                  <br />
                  View all integrated applications in a single location, making it easier to discover, access,
                  and manage tools across workflows.
                </CalloutText>
              </div>
            </div>

            <div className="mt-[clamp(3rem,7vw,6rem)] grid items-start gap-10 md:grid-cols-[38%_minmax(0,1fr)] md:gap-6">
              <div>
                <div
                  className="max-w-[300px] rounded-[6px] border border-dashed p-3"
                  style={{ borderColor: accent }}
                >
                  <div
                    className="flex items-center gap-3 rounded-[8px] px-4 py-3 text-[16px]"
                    style={{ background: '#F3F4F6', color: ink }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: accent }}>
                      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    <span>All Applications</span>
                  </div>
                </div>
                <div className="mt-10">
                  <CalloutTitle>All Applications Selected</CalloutTitle>
                  <CalloutText>
                    All available applications are displayed, providing users with a complete overview and
                    quick access to the tools they need within their workspace.
                    <br />
                    View all integrated applications in a single location, making it easier to discover,
                    access, and manage tools across workflows.
                  </CalloutText>
                </div>
              </div>
              <img
                src={`${img}/app-picker-all.png`}
                alt="App Picker window with all applications listed and VS Code selected"
                width={665}
                height={626}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="ml-auto block h-auto w-full max-w-[665px]"
              />
            </div>
          </section>

          {/* 20. Layouts */}
          <section className="pt-[clamp(3rem,7vw,6rem)]">
            <img
              src={`${img}/layouts.png`}
              alt="ThinkFlow Layout tab with Default-Macbook + 1 External and Work Focus - Single Display profiles"
              width={1068}
              height={669}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />

            <div className="relative mt-[clamp(3rem,7vw,6rem)] space-y-12 pb-[clamp(4rem,9vw,8rem)] md:h-[400px] md:space-y-0 md:pb-0">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
                aria-hidden="true"
              >
                <path
                  d="M 26.4 41 V 49 Q 26.4 53 30 53 H 72.6 Q 76.2 53 76.2 57 V 60"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span
                className="absolute hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
                style={{ left: '26.4%', top: '41%', background: accent }}
                aria-hidden="true"
              />
              <span
                className="absolute hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
                style={{ left: '76.2%', top: '60%', background: accent }}
                aria-hidden="true"
              />

              <div className="grid items-start gap-6 md:absolute md:inset-x-0 md:top-0 md:grid-cols-[62%_minmax(0,1fr)]">
                <img
                  src={`${img}/card-dual.png`}
                  alt="Default-Macbook + 1 External layout profile"
                  width={483}
                  height={185}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="block h-auto w-full max-w-[483px]"
                />
                <div className="md:pt-3">
                  <CalloutTitle>Dual Display Layout</CalloutTitle>
                  <CalloutText>
                    Designed for users working with a MacBook and an external display, this layout provides
                    additional screen space for multitasking, improving organization and workflow efficiency.
                  </CalloutText>
                </div>
              </div>

              <div className="grid items-start gap-6 md:absolute md:inset-x-0 md:bottom-0 md:grid-cols-[53.5%_minmax(0,1fr)]">
                <div className="md:pt-8">
                  <CalloutTitle>Single Display Layout</CalloutTitle>
                  <CalloutText>
                    Tailored for users working on a single display, this layout ensures a clean and organized
                    experience while keeping essential tools and information easily accessible.
                  </CalloutText>
                </div>
                <img
                  src={`${img}/card-single.png`}
                  alt="Work Focus - Single Display layout profile"
                  width={482}
                  height={185}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="block h-auto w-full max-w-[482px]"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 21. Next project + float controls */}
      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}

      <CaseStudyFloatControls tone="dark" />
    </div>
  )
}
