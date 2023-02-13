import React from "react";
import { Navigate, Outlet} from "react-router";
import { useUser } from "../Context/userContext";

const ProtectedRoute = () => {
const [user] = useUser()

if(!user.email){
    return <Navigate to='/login' replace />
}

return <Outlet/>


}

export default ProtectedRoute