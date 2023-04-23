import React, { useState } from 'react';
import projectsData from '../projects.json';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { portfolioStyles } from '../styles';
import emailjs from 'emailjs-com';

const customLinkStyle = {
    color: '#339999',
    textDecoration: 'none',

};const buttonLinkStyle = {
    backgroundColor: '#339999',
    textDecoration: 'none',
    borderColor: '#333366', 
};

const customLinkHoverStyle = {
    textDecoration: 'underline',
};

const ProjectsAndContactPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const filteredProjects = projectsData.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these values with your EmailJS information
        const serviceID = 'service_fkpm8x7';
        const templateID = 'template_tod334l';
        const publicKey = 'Uppc_35q3yagxxHag';

        emailjs
            .sendForm(serviceID, templateID, e.target, publicKey)
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                },
                (error) => {
                    console.log('Email not sent:', error.text);
                }
            );

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
   

    return (

        <div id='projectsandcontact' style={portfolioStyles}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold', }}>Projects</h1>
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    placeholder="Search projects..."*/}
                        {/*    value={searchTerm}*/}
                        {/*    onChange={(e) => setSearchTerm(e.target.value)}*/}
                        {/*/>*/}
                        <ul>
                            {filteredProjects.map((project) => (
                                <li key={project.name}>
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={customLinkStyle}
                                        onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                                        onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                                    >
                                        {project.name}
                                    </a>
                                    <p>Tags: {project.tags.join(', ')}</p>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold', }}>Contact Me</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <br></br>
                            <Button variant="primary" type="submit" style={buttonLinkStyle}>
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
    );
};

export default ProjectsAndContactPage;
