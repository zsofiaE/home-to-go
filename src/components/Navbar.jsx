import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navigation">
            <Link to="/">
            <div className="navbar-logo">
                <img className="logo-icon" src="/icons-house.png" alt="house" />
                <h3 className="logo"> home to go</h3>
            </div>
            </Link>
            <div className="navbar header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="shortlist"><FontAwesomeIcon icon={faHeart} className="fa-brands" /> Shortlist</NavLink>
                <NavLink to="contact"><FontAwesomeIcon icon={faEnvelope} className="fa-brands" /> Contact us</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;