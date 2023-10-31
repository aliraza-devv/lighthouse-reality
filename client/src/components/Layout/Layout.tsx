import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import Footer from '../UI/Footer/Footer';

const Layout: React.FC = () => {
    const location = useLocation();
    let nav = <Navbar navClass="navbar" />;

    if (location.pathname === '/') {
        nav = <HeaderMain />;
    }

    return (
        <React.Fragment>
            {nav}
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
