import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="link"  as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="link" as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="link" as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="link" as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
