import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import './../assets/css/_app.scss';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;