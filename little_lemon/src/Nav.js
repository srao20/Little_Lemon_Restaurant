import React, { useEffect, useState } from "react";
import logo from "./images/logo1.jpg"
function Nav() {
    const [openMenu, setOpenMenu] = useState(false);

    const sandwichBar = () => {
        setOpenMenu(!openMenu);
    }
 return(
    <>
        <nav className={`nav-bar ${openMenu ? 'open' : ''}`}>
            <div className = 'site-logo'>
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            {/*Responsive Mobile View*/}
            <div className = "menu-icon" onClick={sandwichBar}>
                <div className ='dash'></div>
                <div className ='dash'></div>
                <div className ='dash'></div>

            </div>
            <ul className={`menu-links ${openMenu ? 'seen' : ''}`}>
                <li ><a href="home.html">Home</a></li>
                <li ><a href="about.html">About</a></li>
                <li ><a href="menu.html">Menu</a></li>
                <li ><a href="reservations.html">Reservations</a></li>
                <li ><a href="orderOnline.html">Order Online</a></li>
                <li ><a href="login.html">Login</a></li>
            </ul>
        </nav>
        
    </>
 )
}

export default Nav;