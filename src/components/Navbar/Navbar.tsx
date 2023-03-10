import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/icons/logo2.png'
import photoProfile from '../../assets/icons/fotoPerfil.jpg'
import { ImgContainer, NavbarContainer, NavList, TextContainer, UserContainer } from "./NavbarStyled";
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
            <p>Hotel Miranda</p>
          </div>
        </div>
        <NavList>
          <NavLink to={"/"}>
            
            <TbLayoutDashboard />
            Dashboard
            
          </NavLink>
          <NavLink to={"Rooms"} data-cy="rooms">
            
            <GiHouseKeys />
            Rooms
          </NavLink>
          <NavLink to={"Bookings"} data-cy="bookings">
            
            <BsCalendarCheck />
            Booking
          </NavLink>
          <NavLink to={"Contacts"} data-cy="contacts"> <BiCommentDetail/>Contact</NavLink>
          <NavLink to={"Users"} data-cy="users">
            <BiUser />
            Users
          </NavLink>
          
        </NavList>
        <UserContainer>
          <ImgContainer>
            <img src={photoProfile} alt="img profile"/>
          </ImgContainer>
          <p><strong>Noe Sola</strong></p>
          <p><small>noemisolac@gmail.com</small></p>
          <NavLink to={"Profile"}>
            <button>Edit profile</button>
          </NavLink>
        </UserContainer>
        <TextContainer>
          <p className="footer"><strong>Travl Hotel Miranda</strong></p>
          <p className="footer-subtitle">&copy;2023 All Rights Reserved</p>
          <p><small>Made with ??? by Noe Sola</small></p>
        </TextContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
