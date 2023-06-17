import { Outlet } from "react-router-dom"
import Footer from "../Footer/Foote"
import Navbar from "../Navbar/navbar"


function Layout(){
    return(
        <div className="content-wrapper">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout