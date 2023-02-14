import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
    <Link to={"/"}><h4>Dashboard</h4></Link>
    <Link to={"bookings"}><h4>Booking</h4></Link>
    <Link to={"rooms"}><h4>Rooms</h4></Link>
    <Link to={"contacts"}><h4>Contact</h4></Link>
    <Link to={"users"}><h4>Users</h4></Link>
    </nav>
    </>
  )
}

export default Navbar