"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedinIn, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { ContactForm } from './contactform'; 
import { motion } from 'framer-motion';
import './footer.css';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-top-line"></div>
        <Row className="py-5 align-items-center">
          {/* Copyright Section */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <p className="copyright">
              © 2026 <strong>SIDHARATH SHARMA</strong>
              <br />
              <small className="text-muted">Cybersecurity & GRC Auditor</small>
            </p>
          </Col>

          {/* Contact Button Section */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <motion.button 
              className="footer-contact-btn"
              onClick={handleShow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH <FaPaperPlane className="ms-2" />
            </motion.button>
          </Col>

          {/* Social Links Section */}
          <Col md={4} className="text-center text-md-end">
            <div className="footer-socials">
              <a href="mailto:sidharathsharmainfo@gmail.com" title="Email Me">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/sidharath-sharma-b945a2156/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
        
        <Row className="pb-3">
          <Col className="text-center">
            <p className="footer-motto">Securing Digital Assets through ISO 27001 Excellence.</p>
          </Col>
        </Row>
      </Container>

      {/* ContactForm Modal */}
      <ContactForm showModal={showModal} handleClose={handleClose} />
    </footer>
  );
};