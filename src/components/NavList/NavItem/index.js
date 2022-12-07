import React from 'react';
import './NavItem.scss'

const NavItem = ({children, link, active}) => {
    const clName = active ? 'navbar__item navbar__item--active' : 'navbar__item';
    return (
        <li className={clName}>
            <a href={link} className="navbar__item-link">
                {children}
            </a>
        </li>
    );
};

export default NavItem;