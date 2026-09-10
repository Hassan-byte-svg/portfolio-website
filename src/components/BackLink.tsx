import { useLocation, useNavigate } from 'react-router-dom'

export function BackLink({ fallback = '/projects' }: { fallback?: string }) {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from

  return (
    <button
      type="button"
      className="text-[14px] font-normal text-muted hover:text-ink"
      onClick={() => {
        if (from) {
          navigate(from)
          return
        }
        if (window.history.length > 1) {
          navigate(-1)
          return
        }
        navigate(fallback)
      }}
    >
      ← Back
    </button>
  )
}
