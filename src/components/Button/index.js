import React from 'react';
import './Button.scss';

const Button = ({children, className, ...rest}) => {
    return (
        <a className={`button ${className}`} {...rest}>
            {children}
        </a>
    );
};

export default Button;