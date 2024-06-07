import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={6} className="mb-5 mb-md-0">
            <h4>Contact Us</h4>
            <ul className="list-unstyled contact-info">
              <li className="mb-3"><FaPhone className="me-2" /> +1234567890</li>
              <li className="mb-3"><FaEnvelope className="me-2" /> info@example.com</li>
              <li><FaMapMarkerAlt className="me-2" /> 123 Pet Street, City, Country</li>
            </ul>
          </Col>
          <Col md={6}>
            <h4>About Us</h4>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-center m-0">© 2024 Pet Shop. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
