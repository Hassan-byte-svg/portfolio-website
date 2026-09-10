import { BackLink } from './BackLink'
import { ImagePlaceholder } from './ImagePlaceholder'
import type { Project } from '../data/content'

export function AiReplyCaseStudy({ project }: { project: Project }) {
  return (
    <div className="-mx-5 bg-[#0a0a0a] text-white sm:-mx-8">
      <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-16">
        <div className="[&_button]:text-white/70 [&_button:hover]:text-white">
          <BackLink />
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[14px] font-normal text-[#3b82f6]">AI Reply Messaging App</p>
            <h1 className="mt-4 max-w-[640px] text-[40px] font-light leading-[1.15] tracking-[-0.03em] sm:text-[56px]">
              Can AI reply for you without taking away your voice?
            </h1>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-3 py-1 text-[12px] font-normal text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <dl className="mt-10 grid max-w-[420px] grid-cols-3 gap-4 text-[14px]">
              <div>
                <dt className="font-normal uppercase tracking-[0.12em] text-white/45">Role</dt>
                <dd className="mt-1 font-light">{project.role}</dd>
              </div>
              <div>
                <dt className="font-normal uppercase tracking-[0.12em] text-white/45">Platform</dt>
                <dd className="mt-1 font-light">{project.platform}</dd>
              </div>
              <div>
                <dt className="font-normal uppercase tracking-[0.12em] text-white/45">Duration</dt>
                <dd className="mt-1 font-light">{project.duration}</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <p className="mb-3 text-right text-[13px] font-normal">Your AI Assistant</p>
            <div className="rounded-[22px] border-2 border-[#3b82f6] bg-[#1a2744] p-5">
              <p className="text-[12px] font-normal text-white/50">Incoming Message</p>
              <p className="mt-1 text-[18px] font-light">Hello how are you doing?</p>
            </div>
            <div className="relative mt-4 rounded-[22px] border-2 border-[#3b82f6] bg-[#1a2744] p-5">
              <span className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#d9d9d9] text-[#1a2744]">
                AI
              </span>
              <p className="mt-6 text-[12px] font-normal text-white/50">Bot Reply</p>
              <p className="mt-1 text-[18px] font-light">
                Hi, thanks I am doing great what about you? do yo have any plans?
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[14px] font-normal text-[#3b82f6]">
              Before AI Reply — the cost of routine messages
            </p>
            <h2 className="mt-3 text-[36px] font-light tracking-[-0.03em] sm:text-[44px]">
              Messages don’t arrive
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
