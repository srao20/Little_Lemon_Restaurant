import logo from "./images/footer_logo.jpg"

const Footer = () => {
    return (
        <>
            <footer>
                <section>
                    <div className="web-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                
                    <div>
                        <div>
                            <h4>Important Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">menu</a></li>
                                <li><a href="/">Reservations</a></li>
                                <li><a href="/">Order Online</a></li>
                                <li><a href="/">Login</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>Ardsley Palace, Tucker GA 30084</li>
                            <li>+1 6666666666</li>
                            <li>liitlelemon@outlook.com</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h4>Socila Media Link</h4>
                        </div>
                        <div>
                            <ul>
                                <li><a href='/'>Facebook</a></li>
                                <li><a href='/'>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;