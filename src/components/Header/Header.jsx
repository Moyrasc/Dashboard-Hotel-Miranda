import React from "react";
import {
  HeaderTitle,
  HeaderContainer,
  Icon,
} from "./HeaderStyled";
import {  AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import {FiLogOut} from 'react-icons/fi'


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1> Dashboard</h1>
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
