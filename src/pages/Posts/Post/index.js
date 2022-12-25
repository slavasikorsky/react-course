import React, { useEffect, useState } from 'react';

import './Post.scss';

const Post = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const editHandler = (e, id) => {
        e.preventDefault();
        setToggleMenu(false);
        props.onEdit(id);
    }

    const deleteHandler = (e, id) => {
        e.preventDefault();
        setToggleMenu(false);
        props.onDelete(id);
    }

    const toggleHandler = (e) => {
        e.preventDefault();
        setToggleMenu(!toggleMenu);
    }

    return (
        <li className="post">
            {props.id} || 
            {props.title} |
            {props.author} 
            <button 
                className="toggle-menu"
                onClick={(e)=>toggleHandler(e)}
            >
                Toggle menu
            </button>
            {toggleMenu && 
                <div className="menu">
                    <button onClick={(e)=>editHandler(e, props.id)}>Edit</button>
                    <button onClick={(e)=>deleteHandler(e, props.id)}>Delete</button>
                </div>
            }
        </li>
    );
};

export default Post;