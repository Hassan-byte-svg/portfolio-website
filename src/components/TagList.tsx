import type { TagTone } from '../data/content'

const cardTones: Record<TagTone, string> = {
  blue: 'bg-[#2F90C2]/[0.10] text-[#2F90C2]',
  green: 'bg-[#3D9A6A]/[0.12] text-[#3D9A6A]',
  orange: 'bg-[#E08A3C]/[0.14] text-[#D37A2C]',
}

export function TagList({
  tags,
  tone = 'blue',
  variant = 'card',
}: {
  tags: string[]
  tone?: TagTone
  variant?: 'card' | 'dark' | 'light'
}) {
  if (!tags.length) return null

  const surface =
    variant === 'dark'
      ? 'border border-white/20 bg-white/[0.06] text-white'
      : variant === 'light'
        ? 'border border-black/10 bg-white text-[#0F172B]'
        : cardTones[tone]

  return (
    <ul className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`inline-flex items-center rounded-full px-5 py-2.5 text-[15px] font-medium leading-none sm:px-6 sm:py-3 sm:text-[16px] ${surface}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
