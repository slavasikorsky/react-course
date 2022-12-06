import React from 'react';
import HeroImage from '../../images/hero.png';
import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <img src={HeroImage} alt="Hero banner" className="hero__image" />
        </div>
    );
};

export default Hero;