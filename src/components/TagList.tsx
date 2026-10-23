export function TagList({
  tags,
  variant = 'card',
}: {
  tags: string[]
  variant?: 'card' | 'dark' | 'light'
}) {
  if (!tags.length) return null

  const surface =
    variant === 'dark'
      ? 'border border-white/20 bg-white/[0.06] text-white'
      : variant === 'light'
        ? 'border border-black/10 bg-white text-[#0F172B]'
        : 'bg-[#2F90C3]/[0.07] text-copy'

  return (
    <ul className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`inline-flex items-center rounded-full px-5 py-2.5 text-[16px] font-medium leading-none ${surface}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
