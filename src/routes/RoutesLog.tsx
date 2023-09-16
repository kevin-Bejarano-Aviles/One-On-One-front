import { Outlet } from "react-router-dom"
import {Header} from "../components/Header"
import { Navbar } from "../components/Navbar"


export const RoutesLog = () => {
    return (
        <>
            <div className=" is-flex is-flex-direction-column">
                <Header/>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    )
}

