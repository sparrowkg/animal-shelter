import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { Footer } from '../Footer'

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}