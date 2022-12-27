import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Wrapper from '../components/Wrapper';

const PrivateLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Wrapper style={{alignItems: 'stretch'}}>
                    <Sidebar />
                    <Outlet />
                </Wrapper>
            </Container>
            <Footer />
        </>
    );
};

export default PrivateLayout;