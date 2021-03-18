import React from 'react';
import {Button, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import BooksPhoto from '../styles/images/books.jpg';
import * as S from '../styles/Styles';

const Welcome = () => {

    return (
        <>
        <Container>
            <S.Grid>
                <S.H2>
                    Welcome To ReadMe BookSwap
                </S.H2>
            </S.Grid>
            <S.RoundImage
                src={BooksPhoto}
                alt="user pic"
                />
            <S.WelcomeGrid className="mt-5 mb-5">
                <Button variant="outline-info" as={Link} to="/register">Register</Button>
                <Button variant="outline-info" as={Link} to="/login">Login</Button>
            </S.WelcomeGrid>
        </Container>
        </>
    )
}

export default Welcome
