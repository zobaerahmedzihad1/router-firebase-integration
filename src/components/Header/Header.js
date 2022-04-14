import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
// import useFirebase from "../../Hooks/useFirebase";
const auth = getAuth(app);
const Header = () => {
  // const {user,  handleSignOut } = useFirebase();
  const [user] = useAuthState(auth);

  // const handleSignOut = () => {
  //   signOut(auth).then(() => {});
  // };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="link" as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="link" as={NavLink} to="/services">
              Services
            </Nav.Link>

            {/* <Nav.Link className="link" as={NavLink} to="/about">
              About
            </Nav.Link> */}
            <Nav.Link className="link" as={NavLink} to="/register">
              Register
            </Nav.Link>

            {user?.uid ? (
              <button onClick={()=> signOut(auth)}>sign out </button>
            ) : (
              <Nav.Link className="link" as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className="link" as={NavLink} to="/login">
              <span>{user?.displayName && user.displayName}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
