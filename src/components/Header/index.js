import './Header.scss';
import React from 'react';
import Container from '../Container';
import Navbar from '../Navbar'
import Wrapper from '../Wrapper';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Wrapper>
                    <a href="/" className="logo">My app</a>
                    <Navbar />
                </Wrapper>
            </Container>
        </header>
    );
};

export default Header;