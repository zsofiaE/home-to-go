import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navigation">
            <Link to="/"><p className="logo"> 🛤️ home to go 🏡</p></Link>
            <div className="navbar header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="shortlist">♡ Shortlist</NavLink>
                <NavLink to="contact">✉️ Contact us</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;