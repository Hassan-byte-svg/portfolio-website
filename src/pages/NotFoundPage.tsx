import { Link } from 'react-router-dom'
import { Section } from '../components/Section'

export function NotFoundPage() {
  return (
    <Section className="py-24 text-center">
      <h1 className="heading-section">Page not found</h1>
      <Link to="/" className="label-nav mt-6 inline-block hover:text-ink">
        ← Back home
      </Link>
    </Section>
  )
}
