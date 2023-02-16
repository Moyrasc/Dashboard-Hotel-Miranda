import React from "react";
import { Outlet } from "react-router";

import Header from "../../components/Header/Header";
import {MainContainerOn } from "../../components/LayoutStyled";
import Navbar from "../../components/Navbar/Navbar";



const DashBoard = () => {

    return(
        <>
        <Header/>
        <Navbar/>
        <MainContainerOn>
            <Outlet/>
        </MainContainerOn>

        </>
    )
}

export default DashBoard