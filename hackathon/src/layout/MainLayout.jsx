import { Outlet } from "react-router-dom"
import Nav from "../component/Nav"
import Footer from "../component/Footer"

const MainLayout = () => {
  return (
  
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout