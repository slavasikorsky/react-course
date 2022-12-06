import React from 'react';
import Container from '../Container';
import Wrapper from '../Wrapper';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Wrapper>
                    <div className="footer-text">
                        <a href="/" className="footer-text__logo">My-app</a>
                        <p className="footer-text__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span className="footer-text__copyright">©My-app 2022. All rights reserved</span>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu__item">
                            <span className="footer-menu__item-title">Top Category</span>
                            <ul className="footer-menu__item-content">
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu__item">
                            <span className="footer-menu__item-title">Top tags</span>
                            <ul className="footer-menu__item-content">
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu__item">
                            <span className="footer-menu__item-title">Menu</span>
                            <ul className="footer-menu__item-content">
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                                <li className="list-item">
                                    <a href="/#" className="list-item__link">Item</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            </Container>
        </footer>
    );
};

export default Footer;