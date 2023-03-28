import Navbar from "../components/Navbar";
import Links from "../components/Links";
import { Link, NavLink, Outlet } from  'react-router-dom';
import HeroSection from "../components/HeroSection";
import CTA from "../components/CTA";

const RootLayout = () => {
    return(
    <div className="app">
        <Navbar />
        <HeroSection />
        <Outlet />
        <CTA />
        <Links />
    </div>
    );
};

export default RootLayout;