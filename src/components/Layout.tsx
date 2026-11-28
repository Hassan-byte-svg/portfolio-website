import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()
  const isCaseStudy =
    /^\/projects\/.+/.test(pathname) || /^\/case-study\/.+/.test(pathname)

  if (isCaseStudy) {
    // Full-bleed shell — case study owns bg; follows site theme via canvas.
    return (
      <div className="min-h-screen w-full bg-canvas">
        <main className="w-full">
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
