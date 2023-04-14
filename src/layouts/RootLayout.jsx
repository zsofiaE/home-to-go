import Navbar from "../components/Navbar";
import Links from "../components/Links";
import { Link, NavLink, Outlet } from  'react-router-dom';
import HeroSection from "../components/HeroSection";
import SectionCTA from "../components/SectionCTA";

const RootLayout = () => {
    return(
    <div className="app">
        <Navbar />
        <HeroSection />
        <Outlet />
        <SectionCTA />
        <Links />
    </div>
    );
};

export default RootLayout;