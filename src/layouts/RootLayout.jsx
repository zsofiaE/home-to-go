import Navbar from "../components/Navbar";
import FooterLinks from "../components/FooterLinks";
import { Link, NavLink, Outlet } from  'react-router-dom';
import HeroSection from "../components/HeroSection";
import SectionCTA from "../components/SectionCTA";
//------------------------------------------------------------------------------------------

const RootLayout = () => {
    return(
    <div className="app">
        <Navbar />
        <HeroSection />
        <Outlet />
        <SectionCTA />
        <FooterLinks />
    </div>
    );
};

export default RootLayout;