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
                        Inicio
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="main-page" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                         Pagina Principal
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="instruction1" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Instrucciones
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="partida" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Partida
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;