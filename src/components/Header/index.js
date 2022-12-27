import React from 'react';
import Container from '../Container';
import Wrapper from '../Wrapper';
import NavList from '../NavList';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const navLinks = [
        {
            link: '/',
            title: 'Home',
        },
        {
            link: '/about',
            title: 'About',
        },
        {
            link: '/contact',
            title: 'Contact',
        },
        {
            link: '/dashboard',
            title: 'Dashboard',
        }
    ];

    return (
        <header className="header">
            <Container>
                <Wrapper>
                    <NavLink to="/" className="logo">My app</NavLink>
                    {navLinks && (<NavList data={navLinks} direction="horizontal"/>)}
                </Wrapper>
            </Container>
        </header>
    );
};

export default Header;