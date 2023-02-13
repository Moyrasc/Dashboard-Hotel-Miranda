import React from "react";
import { Outlet } from "react-router";


const Bookings = () => {

    return(
        <>
        <h1>Vista Bookings</h1>
        <Outlet/>
        </>
    )
}

export default Bookings