import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

function ContactForm({ show, handleClose, course, handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = () => {
    handleSubmit(formData, course);
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", query: "" });
    }, 1500);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us About {course?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <Alert variant="success">
            Thank you! We'll contact you soon.
          </Alert>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Query</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {!submitted && (
          <Button variant="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ContactForm;