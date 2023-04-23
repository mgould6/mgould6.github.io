import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons

import '../App.css';


const Header = () => {
    const handleScroll = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const navbarStyle = {
        backgroundColor: 'rgba(3,99,99, 0.7)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        margin: '0 auto',
        fontSize: '1.15rem',
        borderBottom: '3px solid #333366',
    };
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        margin: '0 10px',
    };
    return (
        <Navbar style={navbarStyle} variant="dark" expand="lg">
            <Container>
                <div className="nav-text">Michael Gould
                 <a href="https://github.com/mgould6/mgould6" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    <FaGithub />
                </a>
                    <a href="https://www.linkedin.com/in/michael-j-gould-24-chicago/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        <FaLinkedin />
                    </a>

                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Navbar.Brand
                            className="brand-logo" 
                            onClick={() => handleScroll('home')}
                        >Home
                        </Navbar.Brand>

                        <Nav.Link onClick={() => handleScroll('about')}>About</Nav.Link>
                        <Nav.Link onClick={() => handleScroll('projectsandcontact')}>Portfolio</Nav.Link>
                        <Nav.Link href="https://github.com/mgould6/mgould6" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/michael-j-gould-24-chicago/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </Nav.Link>

                    </Nav>

                    <Navbar.Brand
                        className="brand-logo"
                        onClick={() => handleScroll('home')}
                    >
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
