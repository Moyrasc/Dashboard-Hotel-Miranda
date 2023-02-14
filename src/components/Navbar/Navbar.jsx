import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo2.png'
import { NavbarContainer, NavList, TextContainer } from "./NavbarStyled";
import { TbLayoutDashboard } from "react-icons/tb";
import { GiHouseKeys } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";
import { BiUser,BiCommentDetail } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <div className="logo_container">
          <div className="logo_container_img">
            <img src={logo} alt="logo hotel"/>
          </div>
          <div className="logo_container_title">
            <h2>travl</h2>
            <p>Hotel Admin Dashboard</p>
          </div>
        </div>
        <NavList>
          <Link to={"/"}>
            
            <TbLayoutDashboard />
            Dashboard
            
          </Link>
          <Link to={"rooms/list"}>
            
            <GiHouseKeys />
            Rooms
          </Link>
          <Link to={"bookings/list"}>
            
            <BsCalendarCheck />
            Booking
          </Link>
          <Link to={"contacts/list"}> <BiCommentDetail/>Contact</Link>
          <Link to={"users/list"}>
            <BiUser />
            Users
          </Link>
          <Link to={"profile"}>
            <button>Edit profile</button>
          </Link>
          
        </NavList>
        <TextContainer>
          <p className="footer"><strong>Travl Hotel Admin Dashboard</strong></p>
          <p className="footer-subtitle">&copy;2023 All Rights Reserved</p>
          <p><small>Made with ♥ by Noe Sola</small></p>
        </TextContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
