import React from 'react'
import { Link } from 'react-router-dom'
import './topnav.scss'

const TopNav = () => (
  <nav id="nav-menu">
    <Link to="/">PROJECTS</Link>
    <Link to="/services">SERVICES</Link>
    <Link to="/logo" id="logo">
      Ceremony
    </Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/contact">CONTACT</Link>
  </nav>
)

export default TopNav;
