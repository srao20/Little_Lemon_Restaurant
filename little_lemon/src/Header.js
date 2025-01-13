import React from 'react';
import bannerImage from "./images/banner_image1.jpg"
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <header>
                <div className = 'banner'>
                    <section>
                        <div>
                            <h2>Little Lemon</h2>
                            <h3>Chicago</h3>
                            <p>Little Lemon family restaurant for enjoying with friends and family and having fun time.</p>
                            <Link to="/reservations"><button aria-label="On Click">Reserve a table</button></Link>
                        </div>
                    </section>
                    <section>
                        <img src={bannerImage} alt='bannerimage' className="banner-image"></img>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header;