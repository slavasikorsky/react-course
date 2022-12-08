import React from 'react';
import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';

const NoMutch = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <div style={{margin:'40px 0', minHeight:'300px'}}>
                        <h1>Not Found</h1>
                    </div>
                </Wrapper>
            </Container>
        </div>
    );
};

export default NoMutch;