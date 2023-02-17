import React from "react";
import {
  HeaderTitle,
  HeaderContainer,
  Icon,
} from "./HeaderStyled";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi'
import { useLocation, useNavigate } from "react-router";
import { useUser } from "../../Context/userContext";
import { RiArrowLeftRightFill } from 'react-icons/ri'


const Header = () => {
  const location = useLocation()
  const [, setUser] = useUser()
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    e.preventDefault()
    setUser({ email: "" })
    navigate('/login')
  }
  const NavigateDashboard = () => {
    const route = location.pathname.split('/')[1]
    return <h1>{route === "" ? 'Dashboard' : route}</h1>
  }
  return (
    <HeaderContainer>
      <HeaderTitle>
        <RiArrowLeftRightFill className="arrow" />
        <NavigateDashboard />
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
