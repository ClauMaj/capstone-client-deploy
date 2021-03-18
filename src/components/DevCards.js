import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3, faBootstrap, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import * as S from "../styles/Styles";
import Claude from '../styles/images/claude.jpeg'
import Ian from '../styles/images/ian.jpeg'
import Joe from '../styles/images/joe.jpeg'
import Jacob from '../styles/images/jacob2.jpeg'

const DevCards = () => {
    return (
        <>
            <S.H3 className="mt-5 mb-5">ReadMe Book Swap Was Created By</S.H3>
            <Container className="align-items-center">
                <S.GridAbout>
                    <Card className="mt-3" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={Joe} />
                        <Card.Body>
                            <Container>
                                <Row>
                                    <S.CardTitle className="mb-2" lines={2} key={1}>
                                        Joseph Stocks
                                        </S.CardTitle>
                                </Row>
                                <Row>
                                    <Col>
                                        <S.CardText
                                            mt="auto"
                                            fontSize="1rem"
                                            fontWeight={500}
                                            key={2}
                                        >
                                            <S.LinkStyle href="https://www.linkedin.com/in/joseph-stocks/" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedin} size="1x" color="black" />
                                                <div>Linkedin</div>
                                            </S.LinkStyle>
                                        </S.CardText>
                                    </Col>
                                    <Col>
                                        <S.LinkStyle href="https://github.com/josephStocks" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} size="1x" color="black" />
                                            <div>GitHub</div>
                                        </S.LinkStyle>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={Claude} />
                        <Card.Body>
                            <Container>
                                <Row>
                                    <S.CardTitle className="mb-2" lines={2} key={1}>
                                        <div>Claude Major</div>
                                    </S.CardTitle>
                                </Row>
                                <Row>
                                    <Col>
                                        <S.CardText
                                            mt="auto"
                                            fontSize="1rem"
                                            fontWeight={500}
                                            key={2}
                                        >
                                            <S.LinkStyle href="https://www.linkedin.com/in/claumaj/" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedin} size="1x" color="black" />
                                                <div>Linkedin</div>
                                            </S.LinkStyle>
                                        </S.CardText>
                                    </Col>
                                    <Col>
                                        <S.LinkStyle href="https://github.com/ClauMaj" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} size="1x" color="black" />
                                            <div>GitHub</div>
                                        </S.LinkStyle>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={Ian} />
                        <Card.Body>
                            <Container>
                                <Row>
                                    <S.CardTitle className="mb-2" lines={2} key={1}>
                                        <div>Ian Haddock</div>
                                    </S.CardTitle>
                                </Row>
                                <Row>
                                    <Col>
                                        <S.CardText
                                            mt="auto"
                                            fontSize="1rem"
                                            fontWeight={500}
                                            key={2}
                                        >
                                            <S.LinkStyle href="https://www.linkedin.com/in/ianhaddock99/" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedin} size="1x" color="black" />
                                                <div>Linkedin</div>
                                            </S.LinkStyle>
                                        </S.CardText>
                                    </Col>
                                    <Col>
                                        <S.LinkStyle href="https://github.com/ianhaddock99" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} size="1x" color="black" />
                                            <div>GitHub</div>
                                        </S.LinkStyle>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={Jacob} />
                        <Card.Body>
                            <Container>
                                <Row>
                                    <S.CardTitle className="mb-2" lines={2} key={1}>
                                        <div>Jacob Deel</div>
                                    </S.CardTitle>
                                </Row>
                                <Row>
                                    <Col>
                                        <S.CardText
                                            mt="auto"
                                            fontSize="1rem"
                                            fontWeight={500}
                                            key={2}
                                        >
                                            <S.LinkStyle href="https://www.linkedin.com/in/jacob-deel-093b401b9/" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedin} size="1x" color="black" />
                                                <div>Linkedin</div>
                                            </S.LinkStyle>
                                        </S.CardText>
                                    </Col>
                                    <Col>
                                        <S.LinkStyle href="https://github.com/jacoblakedeel" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} size="1x" color="black" />
                                            <div>GitHub</div>
                                        </S.LinkStyle>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
            </S.GridAbout>
        </Container>
            
            
            
            
        <S.H3 className="mt-5 mb-5">Using</S.H3>
        <Container className="mb-5">
            <S.GridTechs>
                <FontAwesomeIcon icon={faReact} size="4x"/>
                <FontAwesomeIcon icon={faJsSquare} size="4x"/>
                <FontAwesomeIcon icon={faCss3} size="4x"/>
                <FontAwesomeIcon icon={faBootstrap} size="4x"/>
                <FontAwesomeIcon icon={faGithub} size="4x"/>
            </S.GridTechs>
        </Container>
        </>
    )
}

export default DevCards;
