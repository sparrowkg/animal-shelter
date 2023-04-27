import { Outlet } from 'react-router-dom'
import './style.css'

export const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}