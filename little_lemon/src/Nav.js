import logo from "./images/logo1.jpg"
function Nav() {
 return(
    <>
        <nav className='nav-bar'> 
            <div className = 'site-logo'> 
                <img src={logo} alt="logo"></img>
            </div>
            <ul className='menu'> 
                <li className='menu-item'><a href="home.html">Home</a></li>
                <li className='menu-item'><a href="about.html">About</a></li>
                <li className='menu-item'><a href="menu.html">menu</a></li>
                <li className='menu-item'><a href="reservations.html">Reservations</a></li>
                <li className='menu-item'><a href="orderOnline.html">Order Online</a></li>
                <li className='menu-item'><a href="login.html">Login</a></li>
            </ul>
        </nav>
    </>
 )
}

export default Nav;