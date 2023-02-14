import React from "react";
import {
  HeaderTitle,
  HeaderContainer,
  Icon,
} from "./HeaderStyled";
import { AiOutlineHeart, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1> Dashboard</h1>
      </HeaderTitle>
        <Icon>
          <AiOutlineHeart className="icon" />
          <AiOutlineBell className="icon" />
          <AiOutlineMail className="icon" />
          <MdOutlineMessage className="icon" />
        </Icon>
    </HeaderContainer>
  );
};

export default Header;
