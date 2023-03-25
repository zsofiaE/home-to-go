import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/"><h1 className="logo">home to go</h1></Link>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about"> About Us</NavLink>
                <NavLink to="contact"> Contact</NavLink>
                <NavLink to="cities"> All cities</NavLink>
                <NavLink to="cart">Cart<Cart /></NavLink>
            </div>
        </nav>

    )
};

export default Navbar;