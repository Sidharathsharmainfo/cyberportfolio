'use client';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FaShieldAlt, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './contactform.css';

export const ContactForm = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    const ops = ['+', '-', '*'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    
    let ans = 0;
    if (op === '+') ans = num1 + num2;
    if (op === '-') ans = num1 - num2;
    if (op === '*') ans = num1 * num2;

    setCaptchaAnswer(ans);
    setCaptchaQuestion(`${num1} ${op} ${num2} = ?`);
  };

  useEffect(() => {
    if (showModal) generateCaptcha();
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) !== captchaAnswer) {
      setStatus('Verification Failed. Try again.');
      generateCaptcha();
      setUserAnswer('');
      return;
    }

    setStatus('SECURE_SENDING...');

    emailjs.sendForm('service_fay7rfe', 'template_cofkw91', e.target, 's795dRsiW3OnP6irD')
      .then(() => {
        setStatus('SUCCESS: MESSAGE_DELIVERED');
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setUserAnswer('');
          setStatus('');
          handleClose();
        }, 2000);
      })
      .catch(() => {
        setStatus('ERROR: UPLINK_FAILED');
        generateCaptcha();
      });
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered className="cyber-modal">
      <div className="modal-content-wrapper">
        <div className="modal-header-cyber">
          <div className="header-title">
            <FaShieldAlt className="me-2" /> <span>SECURE TERMINAL / CONTACT</span>
          </div>
          <button className="close-x" onClick={handleClose}><FaTimes /></button>
        </div>

        <Modal.Body className="modal-body-cyber">
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3">
              <Form.Label className="cyber-label">IDENTIFIER</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Name"
                required
                className="cyber-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="cyber-label">ENCRYPTION_CHANNEL (EMAIL)</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="email@provider.com"
                required
                className="cyber-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="cyber-label">PAYLOAD (MESSAGE)</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={3}
                placeholder="Message body..."
                required
                className="cyber-input"
              />
            </Form.Group>

            <div className="captcha-section mb-4">
              <div className="cyber-label">HUMAN_VERIFICATION: <span className="q-text">{captchaQuestion}</span></div>
              <Form.Control
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Result"
                required
                className="cyber-input captcha-input"
              />
            </div>

            <AnimatePresence>
              {status && (
                <motion.p initial={{opacity:0}} animate={{opacity:1}} className="status-terminal">
                  {`> ${status}`}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="btn-container">
              <button type="submit" className="cyber-btn-primary">
                <FaPaperPlane className="me-2" /> TRANSMIT_DATA
              </button>
            </div>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
};