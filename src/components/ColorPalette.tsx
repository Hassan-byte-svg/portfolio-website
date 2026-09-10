export function ColorPalette({ colors }: { colors: string[] }) {
  return (
    <div className="flex overflow-hidden rounded-[14px] border border-line">
      {colors.map((color) => (
        <div key={color} className="min-h-[72px] flex-1" style={{ backgroundColor: color }} title={color} />
      ))}
    </div>
  )
}
