import React from 'react';

import Avatar from '../../../assets/images/icons/avatar.png';
import './SedebarUserData.scss'

const SidebarUserData = () => {
    return (
        <div className="user-data">
            <img src={Avatar} alt="avatar" className="user-avatar"/>
            <div className="user-name">
                <span className="user-fullname">Full name</span>
                <span className="user-role">Admin</span>
            </div>
        </div>
    );
};

export default SidebarUserData;