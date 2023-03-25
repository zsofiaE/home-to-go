import Navbar from "../components/Navbar";
import { Link, NavLink, Outlet } from  'react-router-dom';

const RootLayout = () => {
    return(
    <div className="app">
        <Navbar />
        <Outlet />
    </div>
    );
};

export default RootLayout;