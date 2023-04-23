import React from 'react';
import heroImage from '../bikes.gif';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const HomePage = () => {
    const heroStyle = {
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        maxWidth: '80%',
        margin: '0 auto',
        color: 'dimgray',
        paddingTop: '75px',
        className: 'home-page',

    };

    const introStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333366',

    };

    const handleScroll = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div id="home" className="home-page content-page" style={heroStyle}>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col>
                        <section className="intro headerFont" style={introStyle}>
                            <h1><b>Michael Gould</b></h1>
                            <h2><b>Web Developer - Software Engineer</b></h2>
                        </section>
                    </Col>
                </Row>
                
            </Container>
            <Col md={12}>
            <div className="scroll-indicator" onClick={() => handleScroll('about')}>
                <span className="arrow">&#8595;</span>
                <p>Keep on Rollin'</p>
                <span className="arrow">&#8595;</span>
            </div>
            </Col>
        </div>
    );
};

export default HomePage;
