import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom" expand="lg" variant="light" bg="info">
        <Container>
          <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
