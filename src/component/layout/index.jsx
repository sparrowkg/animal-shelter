import { Outlet } from 'react-router-dom'
import { Nav } from '../nav'
import { Footer } from '../Footer'

export const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}