import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { contentPageStyle } from '../styles';
import profileImage from '../me2.jpg';
import '../App.css';

const AboutPage = () => {
    const handleScroll = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div id="about" style={contentPageStyle}>
            <Container>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', }}>About</h1>
                <Row className="about-section">
                    <Col lg={6} md={12} className="text-center">
                        <img src={profileImage} alt="Michael J. Gould" className="profile-photo" />

                    </Col>
                    <Col lg={6} md={12}>
                        <div className="about-text">
                        <h3>Bio</h3>
                            <p>
                                I am web developer and software engineer. My focuses are on delivering clean, maintainable code. Skilled in troubleshooting and resolving technical issues, I am adept at designing and maintaining software systems and websites along with working with cross-functional teams to create high-quality, scalable software and web solutions. I am Committed to personal and professional growth, my recent experience includes C#(.NET), React, and Python, while also pursuing personal hobbies and fitness goals such as cycling, rock climbing, and experiencing life to it's fullest with my partner and our puppy. I have a talent for being relentless in my pursuit of knowledge, finding excitement in learning new skills and find peace in mastering those that are old to me. Feel free to brows any of my past or present projects and if you would like to get in touch please reach out to me on my LinkedIn or using the contact form below!
                            </p>
                            <p>
                                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/michael-j-gould-24-chicago/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/michael-j-gould-24-chicago/</a>
                            </p>
                            <p>
                                <strong>GitHub:</strong> <a href="https://github.com/mgould6/mgould6" target="_blank" rel="noopener noreferrer">https://github.com/mgould6/mgould6</a>
                            </p>
                            <p>
                                <strong>Location:</strong> Chicago, IL
                            </p>
                        </div>
                        <section className="skills">
                            <h3>Technical Proficiencies/Skills</h3>
                            <ul>
                                <li><b>Languages:</b> C#, React, JavaScript, Python, C++, Vue, jQuery, HTML, CSS, SQL, </li>
                                <li><b>Program:</b> Photoshop, Visual Studio, Microsoft Office, SQL Server</li>
                                <li><b>Software:</b> MySQL, Git, Jenkins, Teamwork, Azure, AWS</li>
                                <li><b>Framework:</b> OpenGL, .NET, Hubspot, Wordpress, Bootstrap, MUI</li>
                            </ul>
                            <p>Interested in learning more about my work and projects?</p>
                            <div className="scroll-indicator2" onClick={() => handleScroll('projectsandcontact')}>
                                <span className="arrow">&#8595;</span>
                                <p>Keep on Rollin'</p>
                                <span className="arrow">&#8595;</span>
                            </div>                            </section>       
                    </Col>
                    
                </Row>
            </Container>
        </div>

    );
};

export default AboutPage;
