import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
    <Link to={"/"}><h4>Dashboard</h4></Link>
    <Link to={"bookings/list"}><h4>Booking</h4></Link>
    <Link to={"rooms/list"}><h4>Rooms</h4></Link>
    <Link to={"contacts/list"}><h4>Contact</h4></Link>
    <Link to={"users/list"}><h4>Users</h4></Link>
    <Link to={"profile"}><button>Edit profile</button></Link>
    </nav>
    </>
  )
}

export default Navbar