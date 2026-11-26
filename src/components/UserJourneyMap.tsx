const stages = [
  'Morning Routine',
  'System Log In',
  'Customer Interaction',
  'Product Search and Selection',
  'Transaction Process',
  'Inventory Management',
  'End of the day closing',
] as const

const rows = [
  {
    label: 'Actions',
    cells: [
      'Sara arrives at the auto spare parts store and prepares to start her shift.',
      'Sara logs into the POS system at the beginning of her shift.',
      'Sara assists customers with product inquiries and purchases using the POS system.',
      'Sara uses the POS system to search for products and assist customers in selecting items.',
      'Sara processes customer transactions, including scanning items, applying discounts, and handling payments.',
      'Sara updates inventory records and stock levels in the POS system after each transaction.',
      'Sara completes end-of-day procedures on the POS system, including reconciling cash registers and generating reports.',
    ],
  },
  {
    label: 'Thoughts',
    cells: [
      'Plans her tasks for the day and anticipates using the POS system for transactions.',
      'Ensures proper access to the system and prepares to assist customers with transactions.',
      'Listens attentively to customer needs and navigates the POS system to process transactions.',
      'Efficiently navigates the system to find products and provides recommendations based on customer preferences.',
      'Ensures accuracy in transaction processing and verifies product prices and discounts.',
      'Maintains accurate inventory data to track product availability and ensure restocking when necessary.',
      'Reviews daily sales data and ensures accurate financial records before closing the POS system.',
    ],
  },
  {
    label: 'Emotions',
    cells: [
      'Feeling excited to start her day.',
      'Focus and preparedness to engage with the POS system’s interface.',
      'Empathy towards customer requirements and eagerness to provide efficient service.',
      'Satisfaction in assisting customers in finding the right products and enhancing their shopping experience.',
      'Confidence in handling transactions smoothly and securely through the POS system.',
      'Responsibility in managing inventory effectively to meet customer demand and optimize store operations.',
      'Satisfaction in completing daily tasks efficiently and contributing to the store’s operational success.',
    ],
  },
] as const

const orange = '#F5A623'
const peach = '#FFF3E0'
const headerBg = '#FFA726'

/**
 * Sharp HTML/CSS rebuild of the Figma “User Journey Map” (not a raster image).
 */
export function UserJourneyMap() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8">
      <h2 className="text-center text-[32px] font-normal tracking-[-0.02em] text-[#0F172B] sm:text-[40px]">
        User Journey{' '}
        <span
          className="rounded-full px-4 py-1 font-normal"
          style={{ background: peach, color: orange }}
        >
          Map
        </span>
      </h2>
      <p className="mx-auto mt-3 max-w-[720px] text-center text-[15px] font-medium" style={{ color: orange }}>
        User Journey Mapping
      </p>
      <p className="mx-auto mt-4 max-w-[760px] text-center text-[15px] font-light leading-[1.65] text-[#6B6B6B]">
        Through User Journey Mapping, we follow Sara&apos;s interactions with the POS system,
        unraveling her thoughts, actions, and emotions. This holistic view provides invaluable
        insights into her workflow, enabling us to refine our systems for enhanced efficiency and
        satisfaction.
      </p>

      <div className="relative mt-10">
        <p className="mb-2 text-[13px] font-light text-[#9a9a9a] sm:hidden">
          Swipe horizontally to read all columns →
        </p>
        <div className="overflow-x-auto rounded-[20px] border border-[#f0e0c8] bg-white shadow-sm [-webkit-overflow-scrolling:touch]">
          <div
            className="grid min-w-[1100px]"
            style={{
              gridTemplateColumns: `140px repeat(${stages.length}, minmax(150px, 1fr))`,
            }}
          >
            <div className="sticky left-0 z-[1] bg-white p-3" />
            {stages.map((stage) => (
              <div
                key={stage}
                className="flex items-center justify-center px-3 py-3 text-center text-[13px] font-medium leading-snug text-white sm:text-[14px]"
                style={{ background: headerBg }}
              >
                {stage}
              </div>
            ))}

            {rows.map((row, rowIndex) => (
              <div key={row.label} className="contents">
                <div
                  className="sticky left-0 z-[1] flex items-center justify-center px-3 py-4 text-[14px] font-medium text-white"
                  style={{ background: headerBg }}
                >
                  {row.label}
                </div>
                {row.cells.map((cell, cellIndex) => (
                  <div
                    key={`${row.label}-${cellIndex}`}
                    className="border-t border-[#f5e6d0] px-3 py-3 text-[14px] font-light leading-[1.45] text-[#333]"
                    style={{
                      background: rowIndex % 2 === 0 ? peach : '#ffffff',
                    }}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
