"use client";
import React from 'react';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section id="about" className="bg-black text-white py-5">
            <Container>
                {/* Top Border Divider for Consistency */}
                <div className="custom-divider mb-5"></div>

                <motion.h2 
                    className="section-label mb-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ABOUT ME
                </motion.h2>
                
                <Row className="mt-4">
                    {/* Left: Image & Summary */}
                    <Col lg={7} md={12} className="mb-5 mb-lg-0">
                        <div className="summary-wrapper">
                            <h3 className="sub-title">PROFESSIONAL SUMMARY</h3>
                            <div className="summary-content">
                                <div className="image-box">
                                    <Image
                                        src="/images/author.jpg"
                                        alt="Sidharath Sharma"
                                        width={180}
                                        height={250}
                                        className="author-image"
                                    />
                                </div>
                                <div className="text-box">
                                    <p>
                                        I'm Sidharath Sharma, a CQI & IRCA Certified ISO/IEC 27001:2022 Lead 
                                        Auditor with an MS in Cybersecurity from Stephen F. Austin State 
                                        University, USA.
                                    </p>
                                    <p>
                                        I specialize in Governance, Risk, and Compliance (GRC) — executing 
                                        multi-framework audit programs across ISO 27001, NIST SP 800-53, and 
                                        SOC 2. At Etech Global Services, I reduced critical compliance gaps by 
                                        30% across 500+ enterprise endpoints and cut employee-related risk 
                                        incidents by 35%.
                                    </p>
                                    <p>
                                        I administer the Vanta GRC platform for continuous compliance monitoring 
                                        and automated evidence collection, with deep experience in risk register 
                                        development, Access Control policy authoring, and Active Directory 
                                        hardening.
                                    </p>
                                    <p>
                                        Actively seeking Junior GRC Analyst and Information Security Analyst 
                                        roles across the US. Open to remote and hybrid opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Right: Skills List */}
                    <Col lg={5} md={12}>
                        <div className="skills-wrapper">
                            <h3 className="sub-title">TECHNICAL SKILLS</h3>
                            <ul className="skills-list">
                                <li><strong>Frameworks:</strong> ISO 27001:2022, NIST SP 800-53, SOC 2 </li>
                                <li><strong>Tools:</strong> Vanta, Microsoft Sentinel, Nessus, Nmap, AD DS </li>
                                <li><strong>Fields:</strong> GRC Auditing, Risk Assessment, Policy Development </li>
                                <li><strong>Compliance:</strong> ISO 27001 ISMS, Internal Audit, Evidence Collection </li>
                                <li><strong>Management:</strong> Risk Register, Access Control, GPO Hardening, Phishing Simulation </li>
                                {/* <li><strong>Citations:</strong> Available upon request</li> */}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default AboutPage;