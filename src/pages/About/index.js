import React from 'react';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Wrapper from '../../components/Wrapper';

import heroImage from '../../assets/images/about.jpg';

const About = () => {
    return (
        <>
            <Hero image={heroImage} />
            <Container>
                <Wrapper>
                    <div style={{margin:'40px 0', minHeight:'300px'}}>
                        <h1>About page</h1>
                    </div>
                </Wrapper>
            </Container>
        </>
    );
};

export default About;