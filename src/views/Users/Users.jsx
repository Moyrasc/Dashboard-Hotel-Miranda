import React from "react";
import { Outlet } from "react-router";

const Users = () => {

    return(
        <>
        <h1>Desde Usuarios</h1>
        <Outlet/>
        </>
    )
}

export default Users