import React from 'react';
import Container from '../Container';
import Filter from './Filter';
import Search from './Search';
import Wrapper from '../Wrapper';
import CardList from '../Content/CardList'
import dataContent from '../../data/content';

const Content = () => {
    return (
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
    );
};

export default Content;