import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function LogInButton() {
  return (
    <>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/search">
        Search
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        About The App
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        Log In
      </Nav.Link>
    </>
  );
}
