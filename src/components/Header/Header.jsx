import React from "react";
import {
  HeaderTitle,
  HeaderContainer,
  Icon,
  IconContainer,

} from "./HeaderStyled";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi'
import { useLocation, useNavigate } from "react-router";
import { useUser } from "../../Context/userContext";
import { RiArrowLeftRightFill } from 'react-icons/ri'


const Header = () => {
  const location = useLocation()
  const {dispatch} = useUser()
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    e.preventDefault()
    dispatch({type:'logout'})
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
      <IconContainer>
        <Icon>
          <AiOutlineBell className="icon" />
          <span>3</span>
        </Icon>
        <Icon>
          <AiOutlineMail className="icon" />
          <span>7</span>
        </Icon>
        <Icon>
          <FiLogOut className="icon logout" onClick={handleLogOut} />
        </Icon>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
