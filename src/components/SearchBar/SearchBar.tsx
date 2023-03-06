import React from "react";
import { Input } from "../../views/Login/LoginStyled";

interface Props {
    onChange: (value: string) => void
}
const SearchBar = ({onChange}: Props) => {

    return (
        
            <Input type="search" placeholder="Search..." onChange={(e)=> onChange(e.target.value)}/>
    )
}

export default SearchBar