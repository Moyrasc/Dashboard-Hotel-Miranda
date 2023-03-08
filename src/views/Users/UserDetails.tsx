import React from "react";
import { useParams } from "react-router";

const UserDetails = () => {
 const {userId} = useParams()
 console.log(userId)
    return(
        <h1>Desde detalles Usuario</h1>
    )
}

export default UserDetails