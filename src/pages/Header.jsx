import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"

const Header = () => {
  return (
    <>
        {window.location.pathname === '/overview' ? <Banner /> : null}
        {/* <Banner /> */}
        <Navbar />
        <Outlet />
    </>
  )
}

export default Header