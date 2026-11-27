import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { BackLink } from './BackLink'
import { CaseStudyFloatControls } from './CaseStudyFloatControls'
import { NextProjectCard } from './NextProjectCard'

const accent = '#75B798'
const accentSoft = '#E8F5EF'
const ink = '#0F172B'
const muted = '#555555'
const soft = '#F7F8F7'
const line = 'rgba(15, 23, 43, 0.08)'

function Em({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium" style={{ color: accent }}>
      {children}
    </span>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.14em]" style={{ color: accent }}>
      {children}
    </p>
  )
}

function MacWindow({ children, title = 'ThinkFlow' }: { children: ReactNode; title?: string }) {
  return (
    <div className="overflow-hidden rounded-[18px] border bg-white shadow-sm" style={{ borderColor: line }}>
      <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: line, background: soft }}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        <p className="ml-2 text-[12px] font-medium" style={{ color: muted }}>
          {title}
        </p>
      </div>
      {children}
    </div>
  )
}

const processSteps = ['Discover', 'Define', 'Workspace model', 'Prototype', 'Validate'] as const

const workspaces = [
  { name: 'Product Design', apps: 8, color: '#75B798' },
  { name: 'Frontend', apps: 6, color: '#5A9FCF' },
  { name: 'Research', apps: 5, color: '#C9A227' },
  { name: 'Marketing', apps: 7, color: '#D4846A' },
] as const

/**
 * ThinkFlow case study as real HTML — selectable text, no PNG zoom dump.
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
    <div className="min-h-screen bg-white antialiased" style={{ color: ink }}>
      <div className="sticky top-0 z-30 border-b bg-white/95 px-4 py-3 backdrop-blur sm:px-8" style={{ borderColor: line }}>
        <div className="mx-auto flex max-w-[1000px] items-center gap-3">
          <div className="rounded-full border bg-white px-4 py-2 shadow-sm" style={{ borderColor: line }}>
            <BackLink fallback={backTo} />
          </div>
          <p className="min-w-0 flex-1 truncate text-[14px] font-normal" style={{ color: `${ink}cc` }}>
            {project.caseStudyTitle}
          </p>
          <Link
            to={backTo}
            className="shrink-0 text-[13px] font-normal transition-opacity hover:opacity-100"
            style={{ color: `${ink}73` }}
          >
            Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden" style={{ background: accentSoft }}>
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <SectionLabel>macOS Productivity</SectionLabel>
            <h1 className="mt-4 text-[40px] font-light leading-[1.1] tracking-[-0.03em] sm:text-[52px]">
              Stay in flow, even when your{' '}
              <span className="font-medium" style={{ color: accent }}>
                work changes.
              </span>
            </h1>
            <p className="mt-5 max-w-[480px] text-[17px] font-light leading-[1.7]" style={{ color: muted }}>
              ThinkFlow organizes tools, tasks, and workflows into dedicated workspaces — so context
              switching stops breaking focus.
            </p>
            <dl className="mt-8 grid max-w-[420px] grid-cols-3 gap-4 text-[13px]">
              {[
                ['Role', project.role],
                ['Timeline', project.duration],
                ['Platform', project.platform],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-medium" style={{ color: accent }}>
                    {label}
                  </dt>
                  <dd className="mt-1 font-light" style={{ color: muted }}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={project.image}
            alt=""
            width={1400}
            height={1030}
            decoding="async"
            fetchPriority="high"
            draggable={false}
            className="mx-auto w-full max-w-[520px] rounded-[24px] object-cover shadow-lg"
          />
        </div>
      </header>

      {/* Overview / Problem / Goals */}
      <section className="mx-auto max-w-[920px] space-y-14 px-5 py-16 sm:px-8 sm:py-20">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p className="mt-4 text-[18px] font-light leading-[1.75]" style={{ color: muted }}>
            ThinkFlow was envisioned as a productivity platform that helps users stay focused by
            organizing their tools, tasks, and workflows into <Em>dedicated workspaces</Em>, reducing
            the friction caused by constant context switching.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-[24px] border p-6" style={{ borderColor: line, background: soft }}>
            <h2 className="text-[20px] font-medium" style={{ color: accent }}>
              Problem
            </h2>
            <p className="mt-3 text-[15px] font-light leading-[1.7]" style={{ color: muted }}>
              Constant context switching between tools, tasks, and workflows breaks focus and makes
              it harder to stay in a dedicated workspace.
            </p>
          </article>
          <article className="rounded-[24px] border p-6" style={{ borderColor: line, background: soft }}>
            <h2 className="text-[20px] font-medium" style={{ color: accent }}>
              Goals
            </h2>
            <p className="mt-3 text-[15px] font-light leading-[1.7]" style={{ color: muted }}>
              Give people a clear workspace model so tools and projects stay grouped — and flow
              survives when the work itself changes.
            </p>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="border-y px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: line, background: soft }}>
        <div className="mx-auto max-w-[920px] text-center">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-3 text-[32px] font-light tracking-[-0.02em] sm:text-[40px]">
            From friction to <span style={{ color: accent }}>flow</span>
          </h2>
          <ol className="mx-auto mt-10 flex max-w-[720px] flex-wrap items-center justify-center gap-3">
            {processSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span
                  className="inline-flex rounded-full px-4 py-2 text-[14px] font-medium text-white"
                  style={{ background: accent }}
                >
                  {step}
                </span>
                {index < processSteps.length - 1 ? (
                  <span aria-hidden="true" style={{ color: accent }}>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Dedicated workspaces */}
      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Feature</SectionLabel>
            <h2 className="mt-3 text-[30px] font-light tracking-[-0.02em] sm:text-[36px]">
              Dedicated workspaces
            </h2>
            <p className="mt-4 text-[16px] font-light leading-[1.75]" style={{ color: muted }}>
              Organize tools, tasks, and workflows into workspaces — Product Design, Frontend,
              Research, Marketing — so context stays local and switching projects does not mean
              starting over.
            </p>
          </div>
          <MacWindow title="Workspaces">
            <div className="grid grid-cols-2 gap-3 p-4">
              {workspaces.map((ws) => (
                <div
                  key={ws.name}
                  className="rounded-[14px] border p-4"
                  style={{ borderColor: line, background: soft }}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-[10px] text-[13px] font-semibold text-white"
                    style={{ background: ws.color }}
                  >
                    {ws.name.slice(0, 1)}
                  </div>
                  <p className="mt-3 text-[14px] font-medium">{ws.name}</p>
                  <p className="mt-1 text-[12px] font-light" style={{ color: muted }}>
                    {ws.apps} apps
                  </p>
                </div>
              ))}
            </div>
          </MacWindow>
        </div>
      </section>

      {/* Application grid */}
      <section className="border-y px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: line, background: soft }}>
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
          <MacWindow title="Product Design · Apps">
            <div className="grid grid-cols-3 gap-3 p-4 sm:grid-cols-4">
              {['Figma', 'Notion', 'Slack', 'Linear', 'FigJam', 'Arc', 'Spotify', 'Notes'].map(
                (app) => (
                  <div
                    key={app}
                    className="flex flex-col items-center gap-2 rounded-[14px] bg-white p-3 shadow-sm"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-[12px] text-[12px] font-semibold text-white"
                      style={{ background: accent }}
                    >
                      {app.slice(0, 2)}
                    </div>
                    <span className="text-[11px] font-medium">{app}</span>
                  </div>
                ),
              )}
            </div>
          </MacWindow>
          <div>
            <SectionLabel>Feature</SectionLabel>
            <h2 className="mt-3 text-[30px] font-light tracking-[-0.02em] sm:text-[36px]">
              Application grid
            </h2>
            <p className="mt-4 text-[16px] font-light leading-[1.75]" style={{ color: muted }}>
              Surface apps inside a workspace with status and project tags, so switching tools does
              not mean leaving the workspace mental model.
            </p>
          </div>
        </div>
      </section>

      {/* Single Display Layout */}
      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Layouts</SectionLabel>
            <h2 className="mt-3 text-[30px] font-light tracking-[-0.02em] sm:text-[36px]">
              Single Display Layout
            </h2>
            <p className="mt-4 text-[16px] font-light leading-[1.75]" style={{ color: muted }}>
              Tailored for users working on a single display, this layout ensures a clean and
              organized experience while keeping essential tools and information easily accessible.
            </p>
          </div>
          <article className="rounded-[20px] border bg-white p-5 shadow-sm" style={{ borderColor: line }}>
            <div className="flex items-start gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-[12px]"
                style={{ background: accentSoft, color: accent }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[16px] font-semibold">Work Focus - Single Display</h3>
                <p className="mt-1 text-[13px] font-light" style={{ color: muted }}>
                  Last used 1 day ago
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                className="rounded-[10px] px-4 py-2 text-[13px] font-semibold text-white"
                style={{ background: accent }}
              >
                Apply
              </button>
              <button
                type="button"
                className="rounded-[10px] px-4 py-2 text-[13px] font-medium"
                style={{ background: soft, color: ink }}
              >
                Rename
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Style */}
      <section className="border-t px-5 py-16 sm:px-8 sm:py-20" style={{ borderColor: line, background: soft }}>
        <div className="mx-auto max-w-[920px]">
          <SectionLabel>Visual identity</SectionLabel>
          <h2 className="mt-3 text-[28px] font-light tracking-[-0.02em] sm:text-[34px]">
            Quiet chrome, clear accent
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[20px] border bg-white p-6" style={{ borderColor: line }}>
              <p className="text-[14px] font-medium" style={{ color: accent }}>
                Typography
              </p>
              <p className="mt-3 text-[28px] font-light tracking-[-0.02em]">SF Pro</p>
              <p className="mt-2 text-[14px] font-light" style={{ color: muted }}>
                System-native type for a macOS-native feel.
              </p>
            </div>
            <div className="rounded-[20px] border bg-white p-6" style={{ borderColor: line }}>
              <p className="text-[14px] font-medium" style={{ color: accent }}>
                Palette
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  ['#0F172B', 'Ink'],
                  ['#F7F8F7', 'Soft'],
                  ['#FFFFFF', 'White'],
                  ['#75B798', 'Accent'],
                  ['#555555', 'Muted'],
                ].map(([hex, name]) => (
                  <div key={hex} className="text-center">
                    <div
                      className="h-10 w-10 rounded-full border"
                      style={{ background: hex, borderColor: line }}
                    />
                    <p className="mt-1 text-[10px] font-medium">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing — flush with next project footer */}
      <section className="px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-[28px] font-light tracking-[-0.02em] sm:text-[36px]">
            Stay in flow — even when the work moves.
          </h2>
          <p className="mx-auto mt-5 text-[16px] font-light leading-[1.75]" style={{ color: muted }}>
            ThinkFlow keeps tools and tasks inside the workspace you are in, so changing projects
            feels like changing rooms — not losing your place.
          </p>
        </div>
      </section>
      {nextProject ? <NextProjectCard project={nextProject} from={backTo} /> : null}

      <CaseStudyFloatControls tone="dark" />
    </div>
  )
}
