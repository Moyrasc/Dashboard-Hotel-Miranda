import React from "react";
import { Navigate, Outlet } from "react-router";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar"
import { Layout, MainContainerOn } from "./LayoutStyled";


interface User {  
        logged: boolean
        name: string
        email: string   
}
const ProtectedRoute = (user: User) => {
    // const user = useUser()
    if (user.logged === false) {
        return <Navigate to='/login' replace />
    }
    return (
        <Layout>
            <Header />
            <Navbar />
            <MainContainerOn>
                <Outlet />
            </MainContainerOn>
        </Layout>
    )
}
export default ProtectedRoute