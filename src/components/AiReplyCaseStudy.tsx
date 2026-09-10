import { BackLink } from './BackLink'
import { ImagePlaceholder } from './ImagePlaceholder'
import { TagList } from './TagList'
import type { Project } from '../data/content'

export function AiReplyCaseStudy({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a] px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-[1120px] items-center gap-3">
          <div className="rounded-full bg-white px-4 py-2">
            <BackLink />
          </div>
          <p className="text-[14px] font-normal text-white/80">{project.caseStudyTitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[16px] font-medium text-[#3b82f6]">{project.category}</p>
            <h1 className="mt-4 max-w-[680px] text-[40px] font-light leading-[1.12] tracking-[-0.03em] sm:text-[56px]">
              Can AI reply for you without taking away your voice?
            </h1>
            <div className="mt-8">
              <TagList tags={project.tags} variant="dark" />
            </div>
            <dl className="mt-10 grid max-w-[480px] grid-cols-3 gap-6 text-[15px]">
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/45">Role</dt>
                <dd className="mt-2 font-light leading-snug">{project.role}</dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/45">Platform</dt>
                <dd className="mt-2 font-light leading-snug">{project.platform}</dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/45">Duration</dt>
                <dd className="mt-2 font-light leading-snug">{project.duration}</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <p className="mb-4 text-right text-[14px] font-medium">Your AI Assistant</p>
            <div className="rounded-[22px] border-2 border-[#3b82f6] bg-[#1a2744] px-6 py-5">
              <p className="text-[12px] font-medium text-white/50">Incoming Message</p>
              <p className="mt-2 text-[18px] font-light">Hello how are you doing?</p>
            </div>
            <div className="relative mt-5 rounded-[22px] border-2 border-[#3b82f6] bg-[#1a2744] px-6 py-5">
              <span className="absolute -top-8 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#d9d9d9] text-[13px] font-medium text-[#1a2744]">
                AI
              </span>
              <p className="mt-6 text-[12px] font-medium text-white/50">Bot Reply</p>
              <p className="mt-2 text-[18px] font-light">
                Hi, thanks I am doing great what about you? do yo have any plans?
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[16px] font-medium text-[#3b82f6]">
              Before AI Reply — the cost of routine messages
            </p>
            <h2 className="mt-3 text-[36px] font-light tracking-[-0.03em] sm:text-[44px]">
              Messages don’t arrive as one task.
            </h2>
          </div>
          <p className="text-[16px] font-light leading-[1.75] text-white/60">
            A reply itself might take a minute. But every message forces the same short
            sequence — open, read, decide, type, send.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {project.gallery.map((src) => (
            <ImagePlaceholder key={src} src={src} className="aspect-[4/3] w-full bg-[#1a1a1a]" />
          ))}
        </div>
      </div>
    </div>
  )
}
