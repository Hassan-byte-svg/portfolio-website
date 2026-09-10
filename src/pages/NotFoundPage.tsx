import { Link } from 'react-router-dom'
import { Section } from '../components/Section'

export function NotFoundPage() {
  return (
    <Section className="py-24 text-center">
      <h1 className="text-3xl font-light">Page not found</h1>
      <Link to="/" className="mt-6 inline-block hover:opacity-60">
        ← Back home
      </Link>
    </Section>
  )
}
