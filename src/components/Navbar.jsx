import { Link, NavLink } from "react-router-dom";

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
                <NavLink to="shortlist">♡ Shortlist</NavLink>
                <NavLink to="contact">✉️ Contact us</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;