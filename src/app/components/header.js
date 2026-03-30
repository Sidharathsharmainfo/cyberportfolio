"use client";
import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ContactForm } from './contactform'; 
import { FaBars } from "react-icons/fa"; 
import "./header.css"; 

export const Headernavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <Navbar
        expand="lg"
        fixed="top"
        className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="brand-name">
            Sidharath Sharma
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarScroll">
            <FaBars className="text-white" size={20} />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
              <Nav.Link href="#experience-projects">Experience & Projects</Nav.Link>
              <Nav.Link href="#education-certification">Education & Certification</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link onClick={handleShow} className="contact-btn">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ContactForm showModal={showModal} handleClose={handleClose} />
    </header>
  );
};