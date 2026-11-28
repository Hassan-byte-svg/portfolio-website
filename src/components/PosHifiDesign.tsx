/**
 * POS high-fidelity sections as real HTML — selectable text, not raster dumps.
 * Components kit + feature screens that previously lived in PNG exports.
 */

import type { ReactNode } from 'react'

const accent = '#F49A4E'
const accentMid = '#F5B46A'
const accentLight = '#F8C98A'
const accentSoft = '#FFF3E0'
const grayBtn = '#D1D1D1'
const ink = '#0F172B'
const muted = '#555555'
const dash = '#E8D4FF'

function PillLabel({ children }: { children: string }) {
  return (
    <h3 className="text-center">
      <span
        className="inline-block rounded-full px-8 py-2 text-[28px] font-semibold tracking-[-0.02em] sm:text-[34px]"
        style={{ background: accentSoft, color: accent }}
      >
        {children}
      </span>
    </h3>
  )
}

function DashedBox({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-[16px] border border-dashed p-3 sm:p-4 ${className}`}
      style={{ borderColor: dash }}
    >
      {children}
    </div>
  )
}

function SolidBtn({
  bg,
  wide,
  icon,
}: {
  bg: string
  wide?: boolean
  icon?: boolean
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-[12px] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm ${
        wide ? 'min-w-[160px]' : 'min-w-[120px]'
      }`}
      style={{ background: bg }}
    >
      {icon ? (
        <span className="text-[16px] leading-none" aria-hidden="true">
          +
        </span>
      ) : null}
      Button Sample
    </button>
  )
}

function OutlineBtn({ bg, color }: { bg: string; color: string }) {
  return (
    <button
      type="button"
      className="min-w-[120px] rounded-[12px] border px-4 py-2.5 text-[13px] font-semibold shadow-sm"
      style={{ background: bg, borderColor: accent, color }}
    >
      Button Sample
    </button>
  )
}

function Fab({ bg }: { bg: string }) {
  return (
    <button
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded-full text-[20px] font-semibold text-white shadow-sm"
      style={{ background: bg }}
      aria-label="Add"
    >
      +
    </button>
  )
}

function Avatar({
  size,
  label,
  tone = 'warm',
}: {
  size: number
  label: string
  tone?: 'warm' | 'cool'
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full text-white shadow-sm"
      style={{
        width: size,
        height: size,
        fontSize: Math.max(11, size * 0.28),
        fontWeight: 600,
        background:
          tone === 'warm'
            ? 'linear-gradient(145deg, #F5B46A 0%, #E07A2F 100%)'
            : 'linear-gradient(145deg, #7EB8E8 0%, #3B6FA0 100%)',
      }}
      aria-label={label}
      title={label}
    >
      {label}
    </div>
  )
}

function ComponentsKit() {
  const solids = [accent, accentMid, accentLight, grayBtn]
  const outlines = [
    { bg: '#FFF6EB', color: accent },
    { bg: '#FFF9F0', color: accentMid },
    { bg: '#FFFCF7', color: accentLight },
    { bg: '#FFFFFF', color: accent },
  ]

  return (
    <section className="mx-auto max-w-[1100px] px-5 py-12 sm:px-8">
      <PillLabel>Components</PillLabel>

      <div className="case-study-screen mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr_auto_1.15fr]">
        <DashedBox>
          <div className="flex flex-col items-center gap-3">
            {solids.map((bg) => (
              <SolidBtn key={bg} bg={bg} />
            ))}
          </div>
        </DashedBox>

        <DashedBox>
          <div className="flex flex-col items-center gap-3">
            {outlines.map((o) => (
              <OutlineBtn key={o.bg} bg={o.bg} color={o.color} />
            ))}
          </div>
        </DashedBox>

        <DashedBox>
          <div className="flex flex-col items-center gap-3">
            {solids.map((bg) => (
              <SolidBtn key={`icon-${bg}`} bg={bg} icon />
            ))}
          </div>
        </DashedBox>

        <DashedBox>
          <div className="flex flex-col items-center gap-3">
            {solids.map((bg) => (
              <Fab key={`fab-${bg}`} bg={bg} />
            ))}
          </div>
        </DashedBox>

        <DashedBox>
          <div className="flex flex-col items-center gap-3">
            {solids.map((bg) => (
              <SolidBtn key={`wide-${bg}`} bg={bg} wide />
            ))}
          </div>
        </DashedBox>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[auto_1fr_1.2fr_auto]">
        <div className="flex items-center">
          <p className="text-[22px] font-semibold" style={{ color: ink }}>
            Dashboard
          </p>
        </div>

        <DashedBox>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[13px] font-semibold text-white shadow-sm"
              style={{ background: accent }}
            >
              <span aria-hidden="true">+</span> New Bill
            </button>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[16px] shadow-sm"
              aria-label="Notifications"
            >
              🔔
            </span>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[16px] shadow-sm"
              aria-label="Settings"
            >
              ⚙️
            </span>
            <Avatar size={36} label="SA" tone="warm" />
          </div>
        </DashedBox>

        <DashedBox>
          <div className="space-y-2">
            {[
              { active: false, hover: false },
              { active: false, hover: true },
              { active: true, hover: false },
            ].map((state, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-[10px] px-3 py-2 text-[14px] font-medium"
                style={
                  state.active
                    ? { background: accent, color: '#fff' }
                    : state.hover
                      ? { background: '#F0F0F0', color: ink }
                      : { background: 'transparent', color: ink }
                }
              >
                <span aria-hidden="true">▦</span>
                Dashboard
              </div>
            ))}
          </div>
        </DashedBox>

        <DashedBox>
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar size={28} label="SA" tone="warm" />
              <Avatar size={40} label="SA" tone="warm" />
              <Avatar size={56} label="SA" tone="warm" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size={28} label="AH" tone="cool" />
              <Avatar size={40} label="AH" tone="cool" />
              <Avatar size={56} label="AH" tone="cool" />
            </div>
          </div>
        </DashedBox>
      </div>
    </section>
  )
}

function TabletShell({ children }: { children: ReactNode }) {
  return (
    <div className="case-study-screen mx-auto w-full max-w-[520px]">
      <div className="rounded-[28px] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] shadow-xl">
        <div className="overflow-hidden rounded-[18px] bg-[#f7f7f8]">{children}</div>
      </div>
    </div>
  )
}

function AppChrome({
  active,
  children,
  title = 'Dashboard',
}: {
  active: string
  children: ReactNode
  title?: string
}) {
  const nav = ['Dashboard', 'Bills', 'Customers', 'Inventory', 'Sales', 'Messages'] as const

  return (
    <div className="flex min-h-[340px] text-left">
      <aside className="flex w-[72px] shrink-0 flex-col gap-1 border-r border-black/5 bg-white px-1.5 py-3 sm:w-[108px] sm:px-2">
        <p className="mb-2 px-1 text-[11px] font-bold tracking-wide sm:text-[13px]" style={{ color: accent }}>
          BABER
        </p>
        {nav.map((item) => {
          const isActive = item === active
          return (
            <div
              key={item}
              className="rounded-[8px] px-1.5 py-1.5 text-[9px] font-medium sm:text-[11px]"
              style={
                isActive
                  ? { background: accent, color: '#fff' }
                  : { color: '#666', background: 'transparent' }
              }
            >
              {item}
            </div>
          )
        })}
      </aside>
      <div className="min-w-0 flex-1">
        <header className="flex items-center gap-2 border-b border-black/5 bg-white px-3 py-2">
          <p className="min-w-0 flex-1 truncate text-[12px] font-semibold" style={{ color: ink }}>
            {title}
          </p>
          <button
            type="button"
            className="hidden rounded-[8px] px-2 py-1 text-[10px] font-semibold text-white sm:inline"
            style={{ background: accent }}
          >
            + New Bill
          </button>
          <Avatar size={22} label="SA" />
        </header>
        <div className="p-2.5 sm:p-3">{children}</div>
      </div>
    </div>
  )
}

function FeatureBlock({
  title,
  body,
  reverse,
  screen,
}: {
  title: string
  body: string
  reverse?: boolean
  screen: ReactNode
}) {
  return (
    <div
      className={`mx-auto grid max-w-[1100px] items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-12 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className={reverse ? 'lg:text-left' : ''}>
        <h3 className="text-[26px] font-semibold sm:text-[32px]" style={{ color: accent }}>
          {title}
        </h3>
        <p className="mt-3 max-w-[420px] text-[15px] font-light leading-[1.75]" style={{ color: muted }}>
          {body}
        </p>
      </div>
      <TabletShell>{screen}</TabletShell>
    </div>
  )
}

function DashboardScreen() {
  return (
    <AppChrome active="Dashboard" title="Dashboard">
      <div className="grid grid-cols-3 gap-1.5">
        {['View +7', 'Net +10.8k', 'Today +6.6k'].map((label) => (
          <div key={label} className="rounded-[10px] bg-white p-2 shadow-sm">
            <p className="text-[9px] text-[#888]">{label.split(' ')[0]}</p>
            <p className="text-[12px] font-semibold" style={{ color: accent }}>
              {label.split(' ').slice(1).join(' ')}
            </p>
            <div className="mt-1 h-6 rounded-sm" style={{ background: `${accent}33` }} />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Total Sales</p>
          <div className="mt-2 flex h-16 items-end gap-1">
            {[40, 70, 55, 90, 65, 80, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[3px]"
                style={{ height: `${h}%`, background: accent }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Total Income</p>
          <div
            className="mx-auto mt-2 h-14 w-14 rounded-full"
            style={{
              background: `conic-gradient(${accent} 0 50%, ${accentMid} 50% 90%, #e5e5e5 90% 100%)`,
            }}
          />
          <p className="mt-1 text-center text-[9px] text-[#888]">Done 50% · Pending 40%</p>
        </div>
      </div>
      <div className="mt-2 rounded-[10px] bg-white p-2 shadow-sm">
        <p className="text-[10px] font-medium">Products with reduced stock</p>
        <table className="mt-1 w-full text-[9px]">
          <thead>
            <tr className="text-left text-[#888]">
              <th className="py-0.5 font-medium">Product</th>
              <th className="py-0.5 font-medium">Qty</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Spadol', '12'],
              ['Rophan', '4'],
              ['Panadol', '28'],
            ].map(([name, qty]) => (
              <tr key={name} className="border-t border-black/5">
                <td className="py-0.5">{name}</td>
                <td className="py-0.5">{qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppChrome>
  )
}

function BillsScreen() {
  return (
    <AppChrome active="Bills" title="Bills">
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-2">
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">All bills</p>
          <table className="mt-1 w-full text-[9px]">
            <thead>
              <tr className="text-left text-[#888]">
                <th className="py-0.5">Bill no</th>
                <th className="py-0.5">Date</th>
                <th className="py-0.5">Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['#1042', '12 Nov', 'AED 420'],
                ['#1041', '11 Nov', 'AED 185'],
                ['#1040', '10 Nov', 'AED 960'],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-black/5">
                  {row.map((cell) => (
                    <td key={cell} className="py-0.5">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Current Bill</p>
          <ul className="mt-2 space-y-1 text-[9px] text-[#666]">
            <li className="flex justify-between">
              <span>Brake pads</span>
              <span>120</span>
            </li>
            <li className="flex justify-between">
              <span>Oil filter</span>
              <span>45</span>
            </li>
            <li className="flex justify-between border-t border-black/5 pt-1 font-semibold text-[#111]">
              <span>Total</span>
              <span>AED 165</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-3 w-full rounded-[8px] py-1.5 text-[10px] font-semibold text-white"
            style={{ background: accent }}
          >
            Print
          </button>
        </div>
      </div>
    </AppChrome>
  )
}

function CustomersScreen() {
  return (
    <AppChrome active="Customers" title="Customers">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-2">
        <div className="space-y-1.5">
          {['Sara Ahmed', 'Omar Khan', 'Layla Noor'].map((name, i) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-[10px] bg-white px-2 py-1.5 shadow-sm"
              style={i === 0 ? { outline: `2px solid ${accent}` } : undefined}
            >
              <Avatar size={22} label={name.slice(0, 2).toUpperCase()} />
              <span className="text-[10px] font-medium">{name}</span>
            </div>
          ))}
        </div>
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[11px] font-semibold">Sara Ahmed</p>
          <p className="mt-1 text-[9px] text-[#888]">Avg order · AED 310</p>
          <p className="mt-2 text-[10px] font-medium">Previous bills</p>
          <ul className="mt-1 space-y-1 text-[9px] text-[#666]">
            <li>#1042 — AED 420</li>
            <li>#1028 — AED 190</li>
          </ul>
        </div>
      </div>
    </AppChrome>
  )
}

function InventoryScreen() {
  return (
    <AppChrome active="Inventory" title="Inventory">
      <div className="grid grid-cols-[0.7fr_1.3fr] gap-2">
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Categories</p>
          <ul className="mt-1 space-y-1 text-[9px]">
            {['Electronics', 'Safety', 'Smartphones', 'Filters'].map((c, i) => (
              <li
                key={c}
                className="rounded-[6px] px-1.5 py-1"
                style={i === 0 ? { background: accentSoft, color: accent } : { color: '#666' }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Items</p>
          <table className="mt-1 w-full text-[9px]">
            <thead>
              <tr className="text-left text-[#888]">
                <th className="py-0.5">Code</th>
                <th className="py-0.5">Name</th>
                <th className="py-0.5">Qty</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['EL-01', 'LED Kit', '34'],
                ['SF-12', 'Helmet', '18'],
                ['FL-03', 'Oil Filter', '52'],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-black/5">
                  {row.map((cell) => (
                    <td key={cell} className="py-0.5">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppChrome>
  )
}

function SalesScreen() {
  return (
    <AppChrome active="Sales" title="Sales">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Item Sales</p>
          <ul className="mt-2 space-y-1 text-[9px] text-[#666]">
            <li className="flex justify-between">
              <span>Brake pads</span>
              <span>42 sold</span>
            </li>
            <li className="flex justify-between">
              <span>Oil filter</span>
              <span>67 sold</span>
            </li>
            <li className="flex justify-between">
              <span>Spark plugs</span>
              <span>29 sold</span>
            </li>
          </ul>
        </div>
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Total Income</p>
          <div
            className="mx-auto mt-3 h-16 w-16 rounded-full"
            style={{
              background: `conic-gradient(${accent} 0 62%, ${accentSoft} 62% 100%)`,
            }}
          />
          <p className="mt-2 text-center text-[11px] font-semibold" style={{ color: accent }}>
            AED 48,200
          </p>
        </div>
      </div>
    </AppChrome>
  )
}

function MessagesScreen() {
  return (
    <AppChrome active="Messages" title="Messages">
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-2">
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Inbox</p>
          {['Omar Khan', 'Layla Noor', 'Workshop A'].map((name, i) => (
            <p
              key={name}
              className="mt-1 rounded-[6px] px-1.5 py-1 text-[9px]"
              style={i === 0 ? { background: accentSoft, color: accent } : { color: '#666' }}
            >
              {name}
            </p>
          ))}
        </div>
        <div className="rounded-[10px] bg-white p-2 shadow-sm">
          <p className="text-[10px] font-medium">Omar Khan</p>
          <div className="mt-2 space-y-1.5">
            <p className="max-w-[85%] rounded-[10px] bg-[#f0f0f0] px-2 py-1 text-[9px]">
              Do you have brake pads for Civic 2019?
            </p>
            <p
              className="ml-auto max-w-[85%] rounded-[10px] px-2 py-1 text-[9px] text-white"
              style={{ background: accent }}
            >
              Yes — 4 in stock. Shall I reserve them?
            </p>
          </div>
        </div>
      </div>
    </AppChrome>
  )
}

function NewBillScreen({ step }: { step: 1 | 2 | 3 }) {
  const tabs = ['Customers', 'Item Detail', 'Payment'] as const
  return (
    <AppChrome active="Bills" title="New Bill">
      <div className="rounded-[12px] bg-white p-2 shadow-sm">
        <div className="flex gap-1 border-b border-black/5 pb-2">
          {tabs.map((tab, i) => {
            const active = i + 1 === step
            return (
              <span
                key={tab}
                className="rounded-[8px] px-2 py-1 text-[9px] font-medium"
                style={
                  active ? { background: accent, color: '#fff' } : { color: '#888' }
                }
              >
                {tab}
              </span>
            )
          })}
        </div>

        {step === 1 ? (
          <div className="mt-2 space-y-2">
            {['Name', 'Phone', 'Address'].map((field) => (
              <label key={field} className="block text-[9px] text-[#888]">
                {field}
                <input
                  readOnly
                  value={field === 'Name' ? 'Sara Ahmed' : field === 'Phone' ? '+971 50 123 4567' : 'Dubai Marina'}
                  className="mt-0.5 w-full rounded-[8px] border border-black/10 px-2 py-1 text-[10px] text-[#222]"
                />
              </label>
            ))}
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-2">
            <table className="w-full text-[9px]">
              <thead>
                <tr className="text-left text-[#888]">
                  <th className="py-0.5">Item</th>
                  <th className="py-0.5">Qty</th>
                  <th className="py-0.5">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Brake pads', '2', '240'],
                  ['Oil filter', '1', '45'],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-black/5">
                    {row.map((cell) => (
                      <td key={cell} className="py-0.5">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-right text-[11px] font-semibold" style={{ color: accent }}>
              Total · AED 285
            </p>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="rounded-[8px] border border-black/5 p-2 text-[9px]">
              <p className="font-medium">Summary</p>
              <p className="mt-1 text-[#666]">Sara Ahmed</p>
              <p className="mt-1 font-semibold">AED 285</p>
            </div>
            <div className="rounded-[8px] border border-black/5 p-2 text-[9px]">
              <p className="font-medium">Payment Method</p>
              <div className="mt-2 space-y-1">
                <div
                  className="rounded-[6px] px-2 py-1 font-medium text-white"
                  style={{ background: accent }}
                >
                  Cash
                </div>
                <div className="rounded-[6px] bg-[#f3f3f3] px-2 py-1 text-[#666]">Card</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </AppChrome>
  )
}

function ProfileScreen() {
  return (
    <AppChrome active="Dashboard" title="Settings · Profile">
      <div className="mx-auto max-w-[240px] rounded-[12px] bg-white p-3 text-center shadow-sm">
        <Avatar size={56} label="SA" />
        <p className="mt-2 text-[12px] font-semibold">Sara Ahmed</p>
        <p className="text-[9px] text-[#888]">sara@baber.ae</p>
        <label className="mt-3 block text-left text-[9px] text-[#888]">
          Display name
          <input
            readOnly
            value="Sara Ahmed"
            className="mt-0.5 w-full rounded-[8px] border border-black/10 px-2 py-1 text-[10px]"
          />
        </label>
        <button
          type="button"
          className="mt-3 w-full rounded-[8px] py-1.5 text-[10px] font-semibold text-white"
          style={{ background: accent }}
        >
          Update
        </button>
      </div>
    </AppChrome>
  )
}

export function PosHifiDesign() {
  return (
    <div className="border-t border-[#eee] bg-[#fafafa]">
      <div className="mx-auto max-w-[920px] px-5 pt-14 text-center sm:px-8">
        <h2 className="text-[36px] font-light tracking-[-0.02em] sm:text-[44px]">
          High-Fidelity{' '}
          <span
            className="rounded-full px-5 py-1 font-normal"
            style={{ background: accentSoft, color: accent }}
          >
            Design
          </span>
        </h2>
        <p
          className="mx-auto mt-4 max-w-[640px] text-[15px] font-light leading-[1.7]"
          style={{ color: muted }}
        >
          Based on research findings, the product targets computer and tablet. Screens below are
          built as real UI — clear type you can select, not flattened exports.
        </p>
      </div>

      <ComponentsKit />

      <FeatureBlock
        title="Dashboard"
        body="Dashboard consists of Statistics, Total Sales, and Stock Management — plus the sidebar menu for easy navigation."
        reverse
        screen={<DashboardScreen />}
      />

      <FeatureBlock
        title="Track your bills"
        body="Record all your bills for a more effective system — with a digital bill copy that makes things easy for the shopkeeper."
        screen={<BillsScreen />}
      />

      <FeatureBlock
        title="Stay On Top Of Customer Data"
        body="Track each customer's average order value, previous bills, items bought, and previous messages."
        reverse
        screen={<CustomersScreen />}
      />

      <FeatureBlock
        title="Manage Inventory"
        body="Effortlessly categorize and track all your inventory dynamically."
        screen={<InventoryScreen />}
      />

      <FeatureBlock
        title="Sales"
        body="Maintain and categorize your sales to manage your accounts effectively."
        reverse
        screen={<SalesScreen />}
      />

      <FeatureBlock
        title="Messages"
        body="Reach out to customers with messages and new offers and maintain relationships."
        screen={<MessagesScreen />}
      />

      <div className="mx-auto max-w-[720px] px-5 py-10 text-center sm:px-8">
        <span
          className="inline-block rounded-full px-6 py-2 text-[18px] font-semibold text-white"
          style={{ background: accent }}
        >
          New Bill
        </span>
        <p className="mx-auto mt-4 max-w-[560px] text-[15px] font-light leading-[1.7]" style={{ color: muted }}>
          The New Bill button is accessible from the header in any tab. The process is divided into
          three steps as follows.
        </p>
      </div>

      <FeatureBlock
        title="New Bill"
        body="The first tab is dedicated to adding customer details, enabling efficient customer tracking and management."
        screen={<NewBillScreen step={1} />}
      />

      <FeatureBlock
        title="New Bill 2"
        body="In this section, users can seamlessly add item details, ensuring a smooth process for bill calculation."
        reverse
        screen={<NewBillScreen step={2} />}
      />

      <FeatureBlock
        title="New Bill 3"
        body="In the final section, confirmation and payment method options appear — cash or card — before completing the transaction."
        screen={<NewBillScreen step={3} />}
      />

      <FeatureBlock
        title="Profile"
        body="Here, users can edit their personal information, such as their name, contact details, and profile image."
        reverse
        screen={<ProfileScreen />}
      />
    </div>
  )
}
