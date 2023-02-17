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
      case "/bookings":
        setTitle("Bookings");
        break;
      case "/rooms":
        setTitle("Rooms");
        break;
      case "/contacts":
        setTitle("Contacts");
        break;
      case "/users":
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
    setUser({ email: ""})
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
        <FiLogOut className="icon logout" onClick={handleLogOut} />

      </Icon>
    </HeaderContainer>
  );
};

export default Header;
