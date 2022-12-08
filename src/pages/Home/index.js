import React from 'react';
import Container from '../../components/Container';
import CardList from '../../components/CardList';
import Filter from '../../components/Filter';
import Search from '../../components/Search';
import Hero from '../../components/Hero';
import Wrapper from '../../components/Wrapper';

import dataContent from '../../data/content';
import heroImage from './../../assets/images/hero.png';

const Home = () => {
    return (
        <>
        <Hero image={heroImage} />
        <div className="content">
            <Container>
                <Wrapper>
                    <Filter />
                    <Search />
                </Wrapper>
                <Wrapper>
                    <CardList data={dataContent} />
                </Wrapper>
            </Container>
        </div>
        </>
    );
};

export default Home;