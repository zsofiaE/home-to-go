import Navbar from "../components/Navbar";
import Links from "../components/Links";
import { Link, NavLink, Outlet } from  'react-router-dom';
import HomePage from "../pages/HomePage";

const RootLayout = () => {
    return(
    <div className="app">
        <Navbar />
        <Outlet />
        <Links />
    </div>
    );
};

export default RootLayout;