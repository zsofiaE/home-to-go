import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

const Navbar = () => {
// const [hamburgerOpen, setHamburgerOpen] = useState(false);

// const handleToggle = () => {
//     setHamburgerOpen(!hamburgerOpen)
// }

    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/">
            <div className="navbar-logo">
                <img className="logo-icon" src="/icons-house.png" alt="house" />
                <h3 className="logo"> home to go</h3>
            </div>
            </Link>
            <div className="navigation">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="shortlist"><FontAwesomeIcon icon={faHeart} className="fa-brands" /> Shortlist</NavLink>
                    <NavLink to="contact"><FontAwesomeIcon icon={faEnvelope} className="fa-brands" /> Contact us</NavLink>
                    </div>

                    {/* ---------this button just appers under max-width 600px,
                    as if showLinks is true (after clicking on button), the #id of .links chanages for #hidden; styling in css ----*/ }
                <button class="hamburger-btn" onClick={()=>setShowLinks(!showLinks)}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            {/* <div className="hamburger" onClick={handleToggle}>
                    <Hamburger isOpen={hamburgerOpen} />
            </div> */}

        </nav>
    )
};

export default Navbar;