import React, {useState } from "react";
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
                <li ><a href="/">Home</a></li>
                <li ><a href="/">About</a></li>
                <li ><a href="/">Menu</a></li>
                <li ><a href="/">Reservations</a></li>
                <li ><a href="/">Order Online</a></li>
                <li ><a href="/">Login</a></li>
            </ul>
        </nav>
    </>
 )
}

export default Nav;