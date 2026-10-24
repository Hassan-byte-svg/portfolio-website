export function TagList({
  tags,
  variant = 'card',
  tone = 'blue',
}: {
  tags: string[]
  variant?: 'card' | 'dark' | 'light'
  tone?: 'blue' | 'green' | 'orange'
}) {
  if (!tags.length) return null

  const cardSurface =
    tone === 'orange'
      ? 'bg-[#E9A54C]/[0.07] text-copy'
      : tone === 'green'
        ? 'bg-[#75B798]/[0.07] text-copy'
        : 'bg-[#00A0C2]/[0.07] text-copy'

  const surface =
    variant === 'dark'
      ? 'border border-white/20 bg-white/[0.06] text-white'
      : variant === 'light'
        ? 'border border-black/10 bg-white text-[#0F172B]'
        : cardSurface

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-medium leading-none ${surface}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
