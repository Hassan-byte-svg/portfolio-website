import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Section } from '../components/Section'
import { TagList } from '../components/TagList'
import {
  getCaseStudy,
  getNextCaseStudy,
  type CaseStudy,
} from '../data/caseStudies'
import { projectRedirects } from '../data/content'

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'goals', label: 'Goals' },
  { id: 'process', label: 'Process' },
  { id: 'features', label: 'Features' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'results', label: 'Results' },
] as const

function TodoNote({ text }: { text: string }) {
  return (
    <p className="rounded-2xl border border-dashed border-line bg-soft/60 px-4 py-3 text-[14px] font-light leading-relaxed text-muted">
      {text}
    </p>
  )
}

function SectionBlock({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-14 sm:pt-16">
      {eyebrow ? <p className="heading-eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-section mt-2">{title}</h2>
      <div className="mt-5 max-w-[720px] space-y-4 text-[17px] font-light leading-[1.65] text-copy">
        {children}
      </div>
    </section>
  )
}

function CaseStudyContent({ study }: { study: CaseStudy }) {
  const location = useLocation()
  const next = getNextCaseStudy(study.slug)
  const [active, setActive] = useState('overview')
  const backTo = (location.state as { from?: string } | null)?.from || '/projects'

  const tone =
    study.tagTone === 'green'
      ? 'text-[#75B798]'
      : study.tagTone === 'orange'
        ? 'text-[#E9A54C]'
        : 'text-[#00A0C2]'

  const info = useMemo(
    () => [
      { label: 'Role', value: study.role },
      { label: 'Timeline', value: study.timeline },
      { label: 'Platform', value: study.platform },
      {
        label: 'Tools',
        value: study.tools.length ? study.tools.join(', ') : null,
        todo: study.tools.length ? undefined : 'TODO: Add tools used (from Figma).',
      },
    ],
    [study],
  )

  useEffect(() => {
    const nodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node))
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [study.slug])

  return (
    <div className="page-enter pb-24">
      <Section className="pt-8 sm:pt-12">
        <Link to={backTo} className="label-nav inline-flex hover:text-ink">
          ← Back to Work
        </Link>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <p className={`text-[16px] font-normal ${tone}`}>{study.category}</p>
            <h1 className="heading-section mt-3 max-w-[720px] !text-[clamp(32px,4.5vw,52px)]">
              {study.headline}
            </h1>
            <p className="mt-4 max-w-[560px] text-[17px] font-light leading-[1.6] text-copy">
              {study.summary}
            </p>
            <div className="mt-6">
              <TagList tags={study.tags} tone={study.tagTone} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={study.figmaUrl} variant="secondary" className="min-w-0">
                View in Figma ↗
              </Button>
            </div>
          </div>
          <ImagePlaceholder
            src={study.coverImage}
            alt=""
            priority
            className="aspect-[1400/1030] w-full"
            rounded="rounded-[24px]"
          />
        </div>
      </Section>

      <Section className="mt-10 sm:mt-12">
        <dl className="grid gap-6 rounded-[24px] bg-soft px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {info.map((item) => (
            <div key={item.label}>
              <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-eyebrow">
                {item.label}
              </dt>
              <dd className="mt-2 text-[15px] font-light text-ink">
                {item.value ? item.value : <TodoNote text={item.todo || 'TODO'} />}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="mt-6">
        <div className="sticky top-0 z-30 -mx-5 mb-4 border-b border-line bg-canvas/95 px-5 backdrop-blur sm:-mx-8 sm:px-8">
          <nav
            aria-label="Case study sections"
            className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-normal transition-colors ${
                  active === item.id
                    ? 'bg-ink text-white [:is(html[data-theme=dark])_&]:text-[#0a0a0a]'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <SectionBlock id="overview" title="Overview">
            <p>{study.overview}</p>
          </SectionBlock>

          <SectionBlock id="problem" title="Problem / Challenge">
            <p>{study.problem}</p>
          </SectionBlock>

          <SectionBlock id="goals" title="Goals">
            <p>{study.goals}</p>
          </SectionBlock>

          <SectionBlock id="process" title="Process">
            <div className="space-y-8 !max-w-none">
              {study.process.map((step, index) => (
                <div key={step.id} className="max-w-[720px]">
                  <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-eyebrow">
                    {String(index + 1).padStart(2, '0')} · {step.title}
                  </p>
                  {step.body ? <p className="mt-3">{step.body}</p> : null}
                  {step.todo ? (
                    <div className="mt-3">
                      <TodoNote text={step.todo} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </SectionBlock>

          <section id="features" className="scroll-mt-28 border-t border-line pt-14 sm:pt-16">
            <h2 className="heading-section">Key features</h2>
            <div className="mt-10 space-y-14">
              {study.features.map((feature) => (
                <article
                  key={feature.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  <div>
                    <h3 className="text-[24px] font-normal tracking-[-0.02em] text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-[480px] text-[16px] font-light leading-[1.65] text-copy">
                      {feature.description}
                    </p>
                    {feature.todo ? (
                      <div className="mt-4">
                        <TodoNote text={feature.todo} />
                      </div>
                    ) : null}
                  </div>
                  {feature.image ? (
                    <ImagePlaceholder
                      src={feature.image}
                      alt=""
                      className="aspect-[16/10] w-full"
                      rounded="rounded-[20px]"
                      fit="contain"
                    />
                  ) : (
                    <div className="aspect-[16/10] w-full rounded-[20px] bg-soft" />
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="gallery" className="scroll-mt-28 border-t border-line pt-14 sm:pt-16">
            <h2 className="heading-section">Final designs</h2>
            <p className="mt-3 max-w-[560px] text-[16px] font-light text-copy">
              Sharp project frames currently available on the site. Additional Figma exports
              are listed in the TODOs below.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {study.gallery.map((item) => (
                <ImagePlaceholder
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[16/10] w-full"
                  rounded="rounded-[20px]"
                  fit="contain"
                />
              ))}
            </div>
          </section>

          <SectionBlock id="results" title="Results / Impact">
            {study.results ? <p>{study.results}</p> : null}
            {study.resultsTodo ? <TodoNote text={study.resultsTodo} /> : null}
          </SectionBlock>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <Button to="/projects" variant="secondary">
              Back to Work
            </Button>
            <Button href={study.figmaUrl} variant="ghost" className="min-w-0 px-5">
              View in Figma ↗
            </Button>
          </div>
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              state={{ from: '/projects' }}
              className="text-[16px] font-normal text-ink transition-opacity hover:opacity-60"
            >
              Next: {next.title} ↗
            </Link>
          ) : null}
        </div>
      </Section>
    </div>
  )
}

export function CaseStudyPage() {
  const { slug } = useParams()
  const redirectTo = slug ? projectRedirects[slug] : undefined
  const study = !redirectTo && slug ? getCaseStudy(slug) : undefined

  if (redirectTo) {
    return <Navigate to={`/projects/${redirectTo}`} replace />
  }

  if (!study) {
    return (
      <Section className="py-24 text-center">
        <h1 className="heading-section">Case study not found</h1>
        <Link to="/projects" className="label-nav mt-6 inline-block hover:text-ink">
          ← Back to Work
        </Link>
      </Section>
    )
  }

  return <CaseStudyContent study={study} />
}
