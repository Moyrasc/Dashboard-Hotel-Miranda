import React from "react";
import { Outlet } from "react-router";

const Contacts = () =>{

    return (
        <>
        <h1>Desde Contacts</h1>
        <Outlet/>
        </>
    )
}

export default Contacts