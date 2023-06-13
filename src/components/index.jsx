import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar.component'

const Pages = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default Pages