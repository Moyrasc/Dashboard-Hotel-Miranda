import React from "react";
import { Outlet } from "react-router";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";



const DashBoard = () => {

    return(
        <>
        <Header/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>

        </>
    )
}

export default DashBoard