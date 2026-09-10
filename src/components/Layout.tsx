import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()
  const isCaseStudy = /^\/projects\/.+/.test(pathname)

  if (isCaseStudy) {
    return (
      <div className="min-h-screen bg-canvas">
        <main>
          <Outlet />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
