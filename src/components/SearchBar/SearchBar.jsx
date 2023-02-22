import React from "react";
import { Input } from "../../views/Login/LoginStyled";




const SearchBar = ({onChange}) => {

    return (
        
            <Input type="search" placeholder="Search..." onChange={(e)=> onChange(e.target.value)}/>
       
    )
}

export default SearchBar