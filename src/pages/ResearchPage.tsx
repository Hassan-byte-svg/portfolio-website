import { ResearchCard } from '../components/ResearchCard'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { research } from '../data/content'

export function ResearchPage() {
  return (
    <Section className="pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading
        eyebrow="Research"
        title="Research"
        description="Each item opens its own page. Add PDFs under /public/assets/research/."
      />
      <div className="mt-6">
        {research.map((item) => (
          <ResearchCard key={item.slug} item={item} />
        ))}
      </div>
    </Section>
  )
}
