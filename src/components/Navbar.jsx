import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { RiHomeSmile2Line } from "react-icons/ri";

import { useState } from "react";
import Modal from "../Modals/Modal";
import ContactModal from "../Modals/FormForModal";

const Navbar = () => {
// const [hamburgerOpen, setHamburgerOpen] = useState(false);

// const handleToggle = () => {
//     setHamburgerOpen(!hamburgerOpen)
// }

    const [showLinks, setShowLinks] = useState(false);

    const [openContactModal, setOpenContactModal] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/">
            <div className="navbar-logo">
                {/* <img className="logo-icon" src="/icons-house.png" alt="house" /> */}
                <h3 className="logo"> <RiHomeSmile2Line size="30px" className="icon"/> home to go</h3>
            </div>
            </Link>
            <div className="navigation">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="shortlist"><FontAwesomeIcon icon={faHeart} className="fa-brands" /> Shortlist</NavLink>
                    <a onClick={() => setOpenContactModal(true)}> <FontAwesomeIcon icon={faEnvelope} className="fa-brands" />Contact us</a>
                    </div>

                    {/* ---------this button just appers under max-width 600px,
                    as if showLinks is true (after clicking on button), the #id of .links chanages for #hidden; styling in css ----*/ }
                <button className="hamburger-btn" onClick={()=>setShowLinks(!showLinks)}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            {/* <div className="hamburger" onClick={handleToggle}>
                    <Hamburger isOpen={hamburgerOpen} />
            </div> */}
            {openContactModal && <Modal closeModal={setOpenContactModal} isContact={true}> <ContactModal /> </Modal>} 

        </nav>
    )
};

export default Navbar;