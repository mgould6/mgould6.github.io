import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            My Portfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
