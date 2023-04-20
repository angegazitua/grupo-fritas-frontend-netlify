import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/img/logo_howards.png'

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-display">
                <img src={Logo} alt="logo-image" className="logo-image" />
                <span className="name title"> War of Houses </span>
            </NavLink>
            <ul className="navbar-links-container">
                <li className="navbar-element">
                    <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Home
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        About Us
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="main-page" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                         Main Page
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="board" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Board Instructions
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;