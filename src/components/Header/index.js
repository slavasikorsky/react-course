import React from 'react';
import Container from '../Container';
import Wrapper from '../Wrapper';
import NavList from '../NavList';

import './Header.scss';

const Header = () => {
    const navLinks = [
        {
            link: '/',
            active: true,
            title: 'Home',
        },
        {
            link: '/#',
            active: false,
            title: 'Item',
        },
        {
            link: '/#',
            active: false,
            title: 'Item2',
        },
        {
            link: '/#',
            active: false,
            title: 'Item3',
        }
    ];

    return (
        <header className="header">
            <Container>
                <Wrapper>
                    <a href="/" className="logo">My app</a>
                    {navLinks && (<NavList data={navLinks} direction="horizontal"/>)}
                </Wrapper>
            </Container>
        </header>
    );
};

export default Header;