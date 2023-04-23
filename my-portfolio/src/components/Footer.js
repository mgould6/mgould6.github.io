import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons

function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(3,99,99, 0.7)',
        width: '100%',
        zIndex: 1000,
        margin: '0 auto',
        fontSize: '1.5rem',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        margin: '0 10px',
    };

    const handleScroll = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <footer style={footerStyle}>
          

            <span onClick={() => handleScroll('home')} style={{ fontSize: '25px', cursor: 'pointer', margin: '0 10px' }}>
                <span className="arrow">&#8593;</span>

                Back to top
                <span className="arrow">&#8593;</span>

            </span>

              <a href="https://github.com/mgould6/mgould6" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/michael-j-gould-24-chicago/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                <FaLinkedin />
            </a>

        </footer>
    );
}

export default Footer;
