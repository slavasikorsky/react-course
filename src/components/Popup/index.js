import React from 'react';

const Popup = ({children, trigger, setTtiger}) => {
    return (trigger) 
        ? (
            <div className={"popup"}>
                <div className={"popup-inner"}>
                    <button className={"close-btn"} onClick={() => setTtiger(false)}>X</button>
                    {children}
                </div>
            </div>
        )
        : null
};

export default Popup;