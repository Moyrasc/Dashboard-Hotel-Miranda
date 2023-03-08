import React from "react";
import { Navigate, Outlet } from "react-router";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar"
import { Layout, MainContainerOn } from "./LayoutStyled";
import { User } from "../Interfaces/UserAuth";

const ProtectedRoute = (user: User) => {
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