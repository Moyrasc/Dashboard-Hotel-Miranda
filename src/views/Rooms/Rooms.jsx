import React from "react";
import { Outlet } from "react-router";

const Rooms = () =>{

    return(
        <>
        <h1>Desde Rooms</h1>
        <Outlet/>

        </>
    )
}
export default Rooms