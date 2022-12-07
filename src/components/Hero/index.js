import React from 'react';

import './Hero.scss';
import placeholder from '../../assets/images/placeholder.png'

const Hero = (props) => {
    const image = props.image || placeholder;
    return (
        <div className="hero">
            <img src={image} alt="Hero banner" className="hero__image" />
        </div>
    );
};

export default Hero;