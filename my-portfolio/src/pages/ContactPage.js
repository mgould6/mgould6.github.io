import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send an email or save to a database)
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact Me</h1>
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

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col>
          <h2>Contact Information</h2>
          <p>Email: mjgould06@gmail.com</p>
          <p>Phone: (847) 220-3330</p>
          <h3>Social Media Profiles</h3>
          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/michael-j-gould-24-chicago/"
              target="_blank"
              rel="noreferrer"
            >
              www.linkedin.com/in/michael-j-gould-24-chicago
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/mgould6/mgould6"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/mgould6/mgould6
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
