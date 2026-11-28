/**
 * AI assistant robot mark — antenna wiggles like the designed case study motion.
 */
export function AiAssistantBot({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#d9d9d9] ${className}`}
      aria-hidden="true"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Antenna — pivots from the head top */}
        <g className="ai-bot-antenna">
          <path
            d="M14 7V3.5M14 3.5h3"
            stroke="#1a2744"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        {/* Head */}
        <rect
          x="7"
          y="8"
          width="14"
          height="12"
          rx="3"
          stroke="#1a2744"
          strokeWidth="2"
        />
        {/* Eyes */}
        <circle cx="11.5" cy="14" r="1.4" fill="#1a2744" />
        <circle cx="16.5" cy="14" r="1.4" fill="#1a2744" />
        {/* Side sensors */}
        <path d="M7 13H4.5M23.5 13H21" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
