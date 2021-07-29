import React from 'react';
import { Container } from 'react-bootstrap'
import CenteredContainer from '../authentication/CenteredContainer';

function Home(){
    return (
        <Container>
            <CenteredContainer>
                <Container className="centralizado">
                    <img src="img/final.png" alt="logo icon" className="pageImage" />
                    <h2>CodeSpace</h2>
                    <p>Save your most used code snippets and share them.</p>
                    <a href="/login"><button>First steps</button></a>
                </Container>
            </CenteredContainer>
        </Container>
    )
}

export default Home