import React from 'react';
import './FooterMenu.scss'

const FooterMenu = () => {
    return (
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
    );
};

export default FooterMenu;