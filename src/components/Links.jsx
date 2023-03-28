import { Link, NavLink } from "react-router-dom";

const Links = () => {
    return (
      
        <div className="navigation">
            <div className="links-left">
                <NavLink to="about" >About us</NavLink>
                <NavLink to="terms" >Terms & Conditions</NavLink>
                <NavLink to="privacy" >Privacy & Cookie Policies</NavLink>
            </div>
            <div className="links-right">
                <p>2022</p>
                <Link to="/"><p className=""> 🏘️ home to go</p></Link>
            </div>
        </div>

    )
};

export default Links;