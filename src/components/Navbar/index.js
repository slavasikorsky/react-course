import React from 'react';
import './Navbar.scss';

const index = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item navbar__item--active">
                <a href="/#" className="navbar__item-link">Item</a>
            </li>
            <li className="navbar__item">
                <a href="/#" className="navbar__item-link">Item</a>
            </li>
            <li className="navbar__item">
                <a href="/#" className="navbar__item-link">Item</a>
            </li>
            <li className="navbar__item">
                <a href="/#" className="navbar__item-link">Item</a>
            </li>
        </ul>
    );
};

export default index;