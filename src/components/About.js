import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DevCards from './DevCards'


const Account = () => {
    return (
        <>
        <Container>
            <Row className="mt-5">
            <Col>
                <div><h1>ReadMe Book Swap</h1><h5> is an app for book lovers and new readers alike! RMBS provides a space for connecting with readers who want to trade books with others. Offer up a book you love and share it with friends! RMBS is the tiny library on the corner in your neighborhood if it was an app! Come search and find who has a book that you would like to borrow, barter, or lend.</h5>
                </div>
            </Col>
            </Row>
            <Row className="mt-3">
            </Row>
            <Row className="mt-5">
            <Col>
                <DevCards/>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default Account;