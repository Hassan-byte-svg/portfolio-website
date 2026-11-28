/**
 * POS low-fidelity wireframes — grayscale HTML screens in an overlapping collage.
 * Placed after Design System, before High-Fidelity.
 */

import type { CSSProperties, ReactNode } from 'react'

const peach = '#FFF3E0'
const accent = '#F5A623'
const ink = '#2A2A2A'
const side = '#5E5E5E'
const soft = '#F2F2F2'
const line = '#D0D0D0'
const bar = '#B5B5B5'
const mute = '#8A8A8A'

const navItems = ['Dashboard', 'Bills', 'Items', 'Customers', 'Sales', 'Messages'] as const

function PillTitle() {
  return (
    <h2 className="text-center text-[36px] font-light tracking-[-0.02em] sm:text-[44px]">
      Low-Fidelity{' '}
      <span
        className="rounded-full px-5 py-1 font-normal"
        style={{ background: peach, color: accent }}
      >
        Wireframes
      </span>
    </h2>
  )
}

function Sidebar({ active }: { active?: string }) {
  return (
    <aside
      className="flex w-[52px] shrink-0 flex-col gap-2 px-1.5 py-2 sm:w-[64px]"
      style={{ background: side }}
    >
      <div className="mb-1 h-5 w-5 rounded-[4px] bg-white/25 sm:h-6 sm:w-6" />
      {navItems.map((item) => (
        <div key={item} className="flex flex-col items-center gap-0.5">
          <div
            className="h-4 w-4 rounded-[3px] sm:h-[18px] sm:w-[18px]"
            style={{
              background: active === item ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.22)',
            }}
          />
          <span className="hidden text-[6px] leading-none text-white/80 sm:block">
            {item.slice(0, 4)}
          </span>
        </div>
      ))}
    </aside>
  )
}

function TopBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b px-2 py-1.5" style={{ borderColor: line }}>
      <p className="shrink-0 text-[9px] font-semibold sm:text-[10px]" style={{ color: ink }}>
        {title}
      </p>
      <div
        className="mx-auto h-4 max-w-[120px] flex-1 rounded-full sm:h-[18px]"
        style={{ background: soft, border: `1px solid ${line}` }}
      />
      <div className="flex items-center gap-1">
        <span className="h-3 w-3 rounded-[3px] sm:h-3.5 sm:w-3.5" style={{ background: bar }} />
        <span className="h-3 w-3 rounded-[3px] sm:h-3.5 sm:w-3.5" style={{ background: bar }} />
        <span className="h-3.5 w-3.5 rounded-full sm:h-4 sm:w-4" style={{ background: mute }} />
      </div>
    </div>
  )
}

function Shell({
  title,
  active,
  children,
  className = '',
  style,
}: {
  title: string
  active?: string
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] border bg-white shadow-[0_10px_28px_rgba(0,0,0,0.12)] ${className}`}
      style={{ borderColor: line, ...style }}
    >
      <div className="flex h-full min-h-0">
        <Sidebar active={active ?? title} />
        <div className="flex min-w-0 flex-1 flex-col" style={{ background: '#FAFAFA' }}>
          <TopBar title={title} />
          <div className="min-h-0 flex-1 overflow-hidden p-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

function DashWire() {
  return (
    <Shell title="Dashboard" className="h-full w-full">
      <div className="grid grid-cols-3 gap-1.5">
        {['Sales', 'Earning', 'Visitors'].map((label) => (
          <div
            key={label}
            className="rounded-[6px] border bg-white p-1.5"
            style={{ borderColor: line }}
          >
            <p className="text-[7px] font-medium" style={{ color: mute }}>
              {label}
            </p>
            <div className="mt-1 flex h-6 items-end gap-0.5">
              {[40, 65, 45, 80, 55].map((h, i) => (
                <span
                  key={i}
                  className="w-full rounded-[1px]"
                  style={{ height: `${h}%`, background: bar }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-1.5 rounded-[6px] border bg-white p-2"
        style={{ borderColor: line }}
      >
        <p className="text-[8px] font-semibold" style={{ color: ink }}>
          Total Sales
        </p>
        <svg viewBox="0 0 160 48" className="mt-1 h-10 w-full" aria-hidden="true">
          <polyline
            fill="none"
            stroke={bar}
            strokeWidth="2"
            points="0,36 20,28 40,32 60,18 80,22 100,12 120,16 140,8 160,14"
          />
          <polyline
            fill="none"
            stroke={mute}
            strokeWidth="1.5"
            strokeDasharray="3 2"
            points="0,40 30,34 60,30 90,26 120,24 160,20"
          />
        </svg>
      </div>
    </Shell>
  )
}

function ItemsWire() {
  return (
    <Shell title="Items" className="h-full w-full">
      <div className="flex h-full gap-1.5">
        <div
          className="w-[38%] rounded-[6px] border bg-white p-1.5"
          style={{ borderColor: line }}
        >
          <p className="text-[8px] font-semibold" style={{ color: ink }}>
            Categories
          </p>
          <div className="mt-1 space-y-1">
            {['Electronics', 'Safety', 'Filters', 'Brakes'].map((c) => (
              <div
                key={c}
                className="rounded-[4px] px-1 py-1 text-[7px]"
                style={{ background: soft, color: mute }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
        <div
          className="min-w-0 flex-1 rounded-[6px] border bg-white p-1.5"
          style={{ borderColor: line }}
        >
          <p className="text-[8px] font-semibold" style={{ color: ink }}>
            Products
          </p>
          <div
            className="mt-1 grid grid-cols-4 gap-1 border-b pb-1 text-[6px] font-medium"
            style={{ borderColor: line, color: mute }}
          >
            <span>Item</span>
            <span>ID</span>
            <span>Qty</span>
            <span>Price</span>
          </div>
          {[1, 2, 3, 4].map((row) => (
            <div key={row} className="mt-1 grid grid-cols-4 items-center gap-1">
              <span className="h-2 rounded-full" style={{ background: bar }} />
              <span className="h-1.5 rounded-full" style={{ background: soft }} />
              <span className="h-1.5 rounded-full" style={{ background: soft }} />
              <span className="h-1.5 rounded-full" style={{ background: soft }} />
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

function BillsWire() {
  return (
    <Shell title="Bills" className="h-full w-full">
      <div className="flex h-full gap-1.5">
        <div
          className="w-[42%] rounded-[6px] border bg-white p-1.5"
          style={{ borderColor: line }}
        >
          <p className="text-[8px] font-semibold" style={{ color: ink }}>
            Current Bill
          </p>
          <div className="mt-1 space-y-1">
            {[70, 55, 80].map((w, i) => (
              <div key={i} className="flex items-center gap-1">
                <span
                  className="h-2 rounded-full"
                  style={{ width: `${w}%`, background: soft }}
                />
                <span className="h-2 w-4 rounded-full" style={{ background: bar }} />
              </div>
            ))}
          </div>
          <p className="mt-2 text-[7px] font-medium" style={{ color: mute }}>
            To Pay
          </p>
          <div className="mt-0.5 h-3 w-16 rounded-[3px]" style={{ background: bar }} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div
            className="rounded-[6px] border bg-white p-1.5"
            style={{ borderColor: line }}
          >
            <p className="text-[8px] font-semibold" style={{ color: ink }}>
              Payment Method
            </p>
            <div className="mt-1 grid grid-cols-2 gap-1">
              {['Cash', 'Card', 'App', 'Bank'].map((m) => (
                <div
                  key={m}
                  className="rounded-[4px] border py-1 text-center text-[7px]"
                  style={{ borderColor: line, color: mute }}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-auto rounded-[5px] py-1.5 text-center text-[8px] font-semibold text-white"
            style={{ background: side }}
          >
            Confirm Payment
          </div>
        </div>
      </div>
    </Shell>
  )
}

function MessagesWire() {
  return (
    <Shell title="Messages" className="h-full w-full">
      <div className="flex h-full gap-1.5">
        <div
          className="w-[40%] space-y-1 rounded-[6px] border bg-white p-1.5"
          style={{ borderColor: line }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="h-4 w-4 shrink-0 rounded-full" style={{ background: bar }} />
              <div className="min-w-0 flex-1 space-y-0.5">
                <span className="block h-1.5 w-[80%] rounded-full" style={{ background: soft }} />
                <span className="block h-1 w-[55%] rounded-full" style={{ background: line }} />
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex min-w-0 flex-1 flex-col rounded-[6px] border bg-white p-1.5"
          style={{ borderColor: line }}
        >
          <div className="space-y-1">
            <div className="h-4 w-[70%] rounded-[6px]" style={{ background: soft }} />
            <div className="ml-auto h-4 w-[55%] rounded-[6px]" style={{ background: bar }} />
            <div className="h-4 w-[60%] rounded-[6px]" style={{ background: soft }} />
          </div>
          <div
            className="mt-auto flex items-center gap-1 rounded-full border px-2 py-1"
            style={{ borderColor: line }}
          >
            <span className="text-[6px]" style={{ color: mute }}>
              Type a message
            </span>
          </div>
        </div>
      </div>
    </Shell>
  )
}

function SalesWire() {
  return (
    <Shell title="Sales" className="h-full w-full">
      <div className="flex h-full gap-1.5">
        <div
          className="min-w-0 flex-1 rounded-[6px] border bg-white p-1.5"
          style={{ borderColor: line }}
        >
          <p className="text-[8px] font-semibold" style={{ color: ink }}>
            Item Sales
          </p>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="mt-1 flex items-center gap-1">
              <span className="h-1.5 flex-1 rounded-full" style={{ background: soft }} />
              <span className="h-1.5 w-6 rounded-full" style={{ background: bar }} />
            </div>
          ))}
        </div>
        <div
          className="flex w-[42%] flex-col items-center rounded-[6px] border bg-white p-1.5"
          style={{ borderColor: line }}
        >
          <p className="self-start text-[8px] font-semibold" style={{ color: ink }}>
            Total Income
          </p>
          <div
            className="mt-2 h-14 w-14 rounded-full border-[6px]"
            style={{ borderColor: `${bar} ${soft} ${mute} ${soft}` }}
            aria-hidden="true"
          />
          <span className="mt-1 h-2 w-10 rounded-full" style={{ background: bar }} />
        </div>
      </div>
    </Shell>
  )
}

function DetailsWire() {
  return (
    <Shell title="Item Details" active="Items" className="h-full w-full">
      <div className="rounded-[6px] border bg-white p-2" style={{ borderColor: line }}>
        <p className="text-[8px] font-semibold" style={{ color: ink }}>
          Item Details
        </p>
        <div className="mt-1.5 grid grid-cols-2 gap-1.5">
          {['Item Name', 'Item Code', 'Quantity', 'Variant'].map((field) => (
            <label key={field} className="block">
              <span className="text-[6px]" style={{ color: mute }}>
                {field}
              </span>
              <span
                className="mt-0.5 block h-4 rounded-[4px] border"
                style={{ borderColor: line, background: soft }}
              />
            </label>
          ))}
        </div>
        <div className="mt-2 flex justify-end gap-1">
          <span
            className="rounded-[4px] px-2 py-1 text-[7px]"
            style={{ background: soft, color: mute }}
          >
            Cancel
          </span>
          <span
            className="rounded-[4px] px-2 py-1 text-[7px] text-white"
            style={{ background: side }}
          >
            Save
          </span>
        </div>
      </div>
    </Shell>
  )
}

function CustomersWire() {
  return (
    <Shell title="Customers" className="h-full w-full">
      <div className="rounded-[6px] border bg-white p-1.5" style={{ borderColor: line }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 border-b py-1 last:border-0"
            style={{ borderColor: soft }}
          >
            <span className="h-4 w-4 rounded-full" style={{ background: bar }} />
            <span className="h-1.5 flex-1 rounded-full" style={{ background: soft }} />
            <span className="h-1.5 w-8 rounded-full" style={{ background: line }} />
          </div>
        ))}
      </div>
    </Shell>
  )
}

function ReceiptWire() {
  return (
    <Shell title="Bill" active="Bills" className="h-full w-full">
      <div
        className="mx-auto flex h-full max-w-[140px] flex-col items-center rounded-[6px] border bg-white p-2"
        style={{ borderColor: line }}
      >
        <span className="h-6 w-6 rounded-full" style={{ background: bar }} />
        <p className="mt-1 text-[8px] font-semibold" style={{ color: ink }}>
          Receipt
        </p>
        <div className="mt-2 w-full space-y-1">
          {[85, 70, 90, 55].map((w, i) => (
            <span
              key={i}
              className="block h-1.5 rounded-full"
              style={{ width: `${w}%`, background: soft }}
            />
          ))}
        </div>
        <span className="mt-auto h-4 w-full rounded-[4px]" style={{ background: side }} />
      </div>
    </Shell>
  )
}

/** Overlapping grayscale wireframe collage matching the case-study board. */
export function PosLofiWireframes() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8">
      <PillTitle />

      {/* Mobile / tablet: readable 2-col stack */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
        <div className="aspect-[4/3]">
          <DashWire />
        </div>
        <div className="aspect-[4/3]">
          <ItemsWire />
        </div>
        <div className="aspect-[4/3]">
          <BillsWire />
        </div>
        <div className="aspect-[4/3]">
          <MessagesWire />
        </div>
        <div className="aspect-[4/3]">
          <SalesWire />
        </div>
        <div className="aspect-[4/3]">
          <DetailsWire />
        </div>
      </div>

      {/* Desktop: overlapping collage like the Figma board */}
      <div className="relative mx-auto mt-10 hidden min-h-[720px] w-full max-w-[980px] lg:block">
        <div className="absolute left-[2%] top-[8%] z-[2] h-[210px] w-[300px] -rotate-2">
          <ItemsWire />
        </div>
        <div className="absolute left-[28%] top-[0%] z-[4] h-[230px] w-[340px] rotate-1">
          <DashWire />
        </div>
        <div className="absolute right-[4%] top-[6%] z-[3] h-[220px] w-[310px] rotate-2">
          <MessagesWire />
        </div>
        <div className="absolute left-[0%] top-[38%] z-[5] h-[230px] w-[320px] -rotate-1">
          <BillsWire />
        </div>
        <div className="absolute left-[30%] top-[36%] z-[6] h-[210px] w-[300px] rotate-[1.5deg]">
          <DetailsWire />
        </div>
        <div className="absolute right-[2%] top-[36%] z-[4] h-[230px] w-[320px] -rotate-[1.5deg]">
          <SalesWire />
        </div>
        <div className="absolute bottom-[2%] left-[18%] z-[3] h-[190px] w-[280px] rotate-1">
          <CustomersWire />
        </div>
        <div className="absolute bottom-[4%] right-[16%] z-[5] h-[200px] w-[260px] -rotate-2">
          <ReceiptWire />
        </div>
      </div>
    </section>
  )
}
