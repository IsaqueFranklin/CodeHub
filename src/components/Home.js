import React from 'react';
import { Container } from 'react-bootstrap'
import CenteredContainer from '../authentication/CenteredContainer';

function Home(){
    return (
        <Container>
            <CenteredContainer>
                <Container className="centralizado">
                    <h2>CodeSpace</h2>
                    <p>Save your most used code snippets and share them.</p>
                    <button style={{ alignSelf: 'center' }}>First steps</button>
                </Container>
            </CenteredContainer>
        </Container>
    )
}

export default Home