import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()
  const isCaseStudy = /^\/projects\/.+/.test(pathname)

  if (isCaseStudy) {
    return (
      <div className="h-screen overflow-hidden bg-[#0a0a0a]">
        <main>
          <Outlet />
        </main>
      </div>
    )
  }

  return (
    <div className="relative z-20 min-h-screen bg-canvas">
      <Navbar />
      <main key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
