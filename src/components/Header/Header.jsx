import React, { useEffect, useState } from "react";
import {
  HeaderTitle,
  HeaderContainer,
  Icon,
} from "./HeaderStyled";
import {  AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import {FiLogOut} from 'react-icons/fi'
import { useLocation } from "react-router";


const Header = () => {

  let location = useLocation()
  const [title, setTitle] = useState("")

  useEffect(()=>{
    switch(location.pathname){
      
      case "/":
        setTitle("Dashboard");
        break
      case "/bookings/list":
        setTitle("Bookings");
                break;
            case "/rooms/list":
                setTitle("Rooms");
                break;
            case "/contacts/list":
                setTitle("Contacts");
                break;
            case "/users/list":
                setTitle("Users");
                break;
            default:
              setTitle("")  

    }
  },[location])
  
  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1> {title}</h1>
      </HeaderTitle>
        <Icon>
          
          <AiOutlineBell className="icon" />
          <AiOutlineMail className="icon" />
          <FiLogOut className="icon"/>
          
        </Icon>
    </HeaderContainer>
  );
};

export default Header;
