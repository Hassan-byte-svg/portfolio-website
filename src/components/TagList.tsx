import type { TagTone } from '../data/content'

const tones: Record<TagTone, string> = {
  blue: 'bg-[#2F90C2]/[0.08] text-[#2F90C2]',
  green: 'bg-[#3D9A6A]/[0.10] text-[#3D9A6A]',
  orange: 'bg-[#E08A3C]/[0.12] text-[#D37A2C]',
}

export function TagList({ tags, tone = 'blue' }: { tags: string[]; tone?: TagTone }) {
  if (!tags.length) return null

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`inline-flex rounded-full px-3.5 py-1.5 text-[13px] font-medium leading-none sm:text-[14px] ${tones[tone]}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
