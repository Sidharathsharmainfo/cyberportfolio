"use client";
import React, { useState } from 'react';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaCheckCircle, FaUserTie, FaArrowRight } from 'react-icons/fa';
import { ContactForm } from '../components/contactform'; 

export default function AboutSection() {
    const [showContactModal, setShowContactModal] = useState(false);

    const skills = [
        "ISO 27001:2022", "NIST SP 800-53", "SOC 2", "Vanta", "MS Sentinel", 
        "Nessus", "Active Directory", "Risk Assessment", "GPO Hardening", "Internal Audit"
    ];

    return (
        <section id="about" className="bg-black text-white py-5">
            <Container>
                <div className="custom-divider mb-5"></div>

                <motion.h2
                    className="section-label mb-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ABOUT ME
                </motion.h2>

                <Row className="align-items-start">
                    {/* Left Column: Image & Skills */}
                    <Col lg={4} md={12} className="mb-5 mb-lg-0">
                        <div className="image-box-wrapper text-center text-lg-start">
                            <div className="image-box mb-4">
                                <Image
                                    src="/images/author.jpg"
                                    alt="Sidharath Sharma"
                                    width={300}
                                    height={450}
                                    className="author-image"
                                    priority
                                />
                            </div>
                            
                            <h3 className="sub-title mt-4">CORE SKILLS</h3>
                            <div className="skills-cloud">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </Col>

                    {/* Right Column: Profile & Values */}
                    <Col lg={8} md={12} className="ps-lg-5">
                        <div className="summary-wrapper">
                            <h3 className="sub-title">PROFESSIONAL PROFILE</h3>
                            <div className="summary-text mb-5">
                                <p className="highlight-para">
                                    I am <strong>Sidharath Sharma</strong>, a Cybersecurity Analyst specializing in GRC and a CQI & IRCA Certified ISO/IEC 27001:2022 Lead Auditor.
                                </p>
                                <p>
                                    I bridge the gap between regulatory mandates and technical security. I have a proven track record of reducing compliance gaps by 30% through risk-driven controls and strategic auditing.
                                </p>
                            </div>

                            <h3 className="sub-title">WHY CHOOSE ME?</h3>
                            <Row className="g-3">
                                <Col md={6}>
                                    <div className="hire-card">
                                        <FaShieldAlt className="hire-icon" />
                                        <div>
                                            <h5>Audit-Ready Expertise</h5>
                                            <p>Certified Lead Auditor with hands-on experience in full ISMS lifecycles.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="hire-card">
                                        <FaChartLine className="hire-icon" />
                                        <div>
                                            <h5>Risk-Driven Strategy</h5>
                                            <p>Reduced incidents by 35% using NIST-based risk assessment models.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="hire-card">
                                        <FaCheckCircle className="hire-icon" />
                                        <div>
                                            <h5>Technical GRC</h5>
                                            <p>Expertise in Vanta, Sentinel, and Nessus for continuous compliance.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="hire-card">
                                        <FaUserTie className="hire-icon" />
                                        <div>
                                            <h5>Business Alignment</h5>
                                            <p>Implementing scalable controls that support growth and regulations.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="status-footer mt-5 pt-4">
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
                                    <div className="status-info">
                                        <p className="mb-1"><strong>Status:</strong> Seeking Jr. GRC Analyst / InfoSec roles (US).</p>
                                        <p className="m-0 connect-text">Let's build secure, compliant systems together.</p>
                                    </div>
                                    <motion.button 
                                        onClick={() => setShowContactModal(true)} 
                                        className="btn-connect-cta"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        GET IN TOUCH <FaArrowRight className="ms-2" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> {/* <--- Yahan sirf ek hi Row close hoga */}
            </Container>

            {/* Modal Component Call */}
            <ContactForm 
                showModal={showContactModal} 
                handleClose={() => setShowContactModal(false)} 
            />
        </section>
    );
};