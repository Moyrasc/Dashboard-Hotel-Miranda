import React, { useEffect, useState } from "react";
import {
  HeaderTitle,
  HeaderContainer,
  Icon,
} from "./HeaderStyled";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi'
import { useLocation, useNavigate } from "react-router";
import { useUser } from "../../Context/userContext";
import {RiArrowLeftRightFill} from 'react-icons/ri'


const Header = () => {

  let location = useLocation()
  const [title, setTitle] = useState("")
  const [, setUser] = useUser()
  const navigate = useNavigate()
  useEffect(() => {
    switch (location.pathname) {

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
      case "/profile":
        setTitle("Profile");
        break;
      default:
        setTitle("")

    }
  }, [location])

  const handleLogOut = (e) => {
    e.preventDefault()
    setUser({ email: "", password: "" })
    navigate('/login')

  }
  return (
  
    <HeaderContainer>
      <HeaderTitle>
        <RiArrowLeftRightFill className="arrow"/>
        <h1> {title}</h1>
        
      </HeaderTitle>
      <Icon>

        <AiOutlineBell className="icon" />
        <AiOutlineMail className="icon" />
        <FiLogOut className="icon" onClick={handleLogOut} />

      </Icon>
    </HeaderContainer>
  );
};

export default Header;
