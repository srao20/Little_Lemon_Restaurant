import React, { useEffect, useState } from "react";
import logo from "./images/logo1.jpg"
function Nav() {
    const [openMenu, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!openMenu);
    }
 return(
    <>
        <nav className={`nav-bar ${openMenu ? 'open' : ''}`}>
            <div className = 'site-logo'>
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            {/*Mobile Nav Bar */}
            <div className = "menu-icon" onClick={toggleMenu}>
                <div className ='bar'></div>
                <div className ='bar'></div>
                <div className ='bar'></div>

            </div>
            <ul className={`menu-links ${openMenu ? 'visible' : ''}`}>
                <li ><a href="home.html">Home</a></li>
                <li ><a href="about.html">About</a></li>
                <li ><a href="menu.html">Menu</a></li>
                <li ><a href="reservations.html">Reservations</a></li>
                <li ><a href="orderOnline.html">Order Online</a></li>
                <li ><a href="login.html">Login</a></li>
            </ul>
        </nav>
        <span>{10+16}</span>
    </>
 )
}

export default Nav;