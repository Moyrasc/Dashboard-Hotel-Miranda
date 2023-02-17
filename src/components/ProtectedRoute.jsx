import React from "react";
import { Navigate, Outlet } from "react-router";
import { useUser } from "../Context/userContext";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar"
import { Layout, MainContainerOn } from "./LayoutStyled";

const ProtectedRoute = () => {
    const [user] = useUser()
    if (!user.email) {
        return <Navigate to='/login' replace />
    }
        return (
            <Layout>  
                <Header  />
                <Navbar />
                <MainContainerOn>
                    <Outlet />
                </MainContainerOn>
            </Layout>
        )
    }
export default ProtectedRoute