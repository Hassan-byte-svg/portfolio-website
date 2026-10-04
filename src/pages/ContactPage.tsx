import { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/content'

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'the website'}`)
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}${email ? `\n${email}` : ''}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        title={
          <>
            Let’s create something amazing{' '}
            <span className="font-normal">together</span>
          </>
        }
        description="Open to new collaborations, research conversations, and product work."
        actions={
          <>
            <Button href={`mailto:${site.email}`}>Email me</Button>
            <Button href={site.cvPath} download="Waleed-Khan-Updated-CV.pdf" variant="secondary">
              Download CV
            </Button>
          </>
        }
      />

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Use the email and profiles already on this site."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[540px] text-left">
            <thead>
              <tr className="border-b border-line text-[12px] uppercase tracking-[0.12em] text-muted">
                <th className="py-4 font-normal">Channel</th>
                <th className="py-4 font-normal">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <td className="py-5 text-[16px]">Email</td>
                <td className="py-5 text-[16px] text-muted">
                  <a href={`mailto:${site.email}`} className="hover:text-ink">
                    {site.email}
                  </a>
                </td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-5 text-[16px]">LinkedIn</td>
                <td className="py-5 text-[16px] text-muted">
                  <a href={site.social.linkedin} className="hover:text-ink">
                    LinkedIn
                  </a>
                </td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-5 text-[16px]">X</td>
                <td className="py-5 text-[16px] text-muted">
                  <a href={site.social.x} className="hover:text-ink">
                    X
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
        <SectionHeading
          eyebrow="Message"
          title="Send a note"
          description={`Messages open in your email app and go to ${site.email}.`}
        />
        <form onSubmit={onSubmit} className="mx-auto mt-12 max-w-[640px] space-y-5">
          <label className="block">
            <span className="text-[12px] font-normal uppercase tracking-[0.12em] text-muted">Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-full border border-line bg-canvas px-5 py-3 text-[15px] font-light text-ink outline-none transition-colors focus:border-ink/50"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-normal uppercase tracking-[0.12em] text-muted">Your email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-full border border-line bg-canvas px-5 py-3 text-[15px] font-light text-ink outline-none transition-colors focus:border-ink/50"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-normal uppercase tracking-[0.12em] text-muted">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 w-full resize-none rounded-[22px] border border-line bg-canvas px-5 py-3 text-[15px] font-light text-ink outline-none transition-colors focus:border-ink/50"
            />
          </label>
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[15px] font-normal tracking-[-0.01em] text-canvas transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </div>
        </form>
      </Section>
    </>
  )
}
