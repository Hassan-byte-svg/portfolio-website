import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()
  const isCaseStudy = /^\/projects\/[^/]+$/.test(pathname)

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main key={pathname} className={isCaseStudy ? undefined : 'page-enter'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
