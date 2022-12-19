import React from 'react';
import SidebarLink from './SidebarLink';

import './Sidebar.scss';

const Sidebar = () => {
    const sidebarLinks = [
        {
            link: '/dashboard',
            title: 'Dashboard',
        },
        {
            link: '/posts',
            title: 'Posts',
        },
        {
            link: '/tasks',
            title: 'Tasks',
        },
    ];

    return (
        <div className="sidebar">
            <div className="user-data">
                user name
            </div>
            <ul className="sidebar-links">
                {sidebarLinks && sidebarLinks.map((item, index) => (
                    <SidebarLink key={index} link={item.link} active={item.active}>
                        {item.title}
                    </SidebarLink>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;