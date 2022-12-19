import React from 'react';
import {Outlet} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
 
import Footer from '../components/Footer';
import Header from '../components/Header';

import './../assets/css/_app.scss';

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default PublicLayout;