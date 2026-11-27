import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()
  const isCaseStudy =
    /^\/projects\/.+/.test(pathname) || /^\/case-study\/.+/.test(pathname)

  if (isCaseStudy) {
    // No overflow-x-clip / nested overflow-y — those promote compositing layers
    // that make text, logos, and signs look soft while scrolling.
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <main>
          <Outlet />
        </main>
      </div>
    )
  }

  return (
    <div className="relative z-20 min-h-screen overflow-x-clip bg-canvas">
      <Navbar />
      <main key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
