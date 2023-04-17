import './header.css'
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-display">
                <img src="assets/react.svg" alt="logo-image" className="logo-image" />
                <span className="name title"> War of Houses </span>
            </NavLink>
            <ul className="navbar-links-container">
                <li className="navbar-element">
                    <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Inicio
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="paginaprincipal" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Resumen del juego
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;