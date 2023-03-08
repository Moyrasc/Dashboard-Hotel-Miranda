import React from "react";
import { ErrorMsg } from "./ErrorStyled";

const Error = ({children}) =>{

    return (
        <ErrorMsg>{children}</ErrorMsg>
    )
}

export default Error