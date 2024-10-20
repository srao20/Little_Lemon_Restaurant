import logo from "./images/logo1.jpg"

function Footer() {
    return (
        <>
            <footer>
                <img src={logo} alt="logo"/>
                <div>
                    <div>
                        <h4>Doormat Navigation</h4>
                    </div>
                    <div>
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="menu.html">menu</a></li>
                            <li><a href="reservations.html">Reservations</a></li>
                            <li><a href="orderOnline.html">Order Online</a></li>
                            <li><a href="login.html">Login</a></li>
                            </ul>
                    </div>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h4>Socila Media Link</h4>
                    </div>
                    <div>
                        <ul>
                            <li><a>Facebook</a></li>
                            <li><a>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;