"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaCertificate, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './education.css'; 

const allCertifications = [
  { title: "ISO/IEC 27001:2022 Lead Auditor", org: "BSI (CQI & IRCA Certified)", date: "Feb 2026" },
  { title: "Fortinet Certified Associate – Cybersecurity", org: "Fortinet", date: "Jun 2025" },
  { title: "Cisco Introduction to Cybersecurity", org: "CISCO", date: "May 2025" },
];

export const EducationCertifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const certsPerPage = 3;

  const indexOfLastCert = currentPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;
  const currentCerts = allCertifications.slice(indexOfFirstCert, indexOfLastCert);
  const totalPages = Math.ceil(allCertifications.length / certsPerPage);

  return (
    <section id="education-certification" className="bg-black text-white py-5">
      <Container>
        {/* Top Border Divider */}
        <div className="custom-divider mb-5"></div>

        <Row>
          {/* Left Side: Education */}
          <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0">
            <h2 className="section-label mb-4">EDUCATION</h2>
            <div className="edu-list">
              <div className="edu-item">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="inst-name">Stephen F. Austin State University, USA</h5>
                  <span className="edu-date">2024</span>
                </div>
                <p className="degree-name">Master of Science in Cyber Security</p>
              </div>
              <div className="edu-item">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="inst-name">Kurukshetra University, India</h5>
                  <span className="edu-date">2018</span>
                </div>
                <p className="degree-name">B.Tech in Electronics & Communication</p>
              </div>
            </div>
          </Col>

          {/* Right Side: Certifications */}
          <Col lg={7} className="ps-lg-5 border-left-divider">
            <h2 className="section-label mb-4">CERTIFICATIONS</h2>
            <div className="cert-display-area">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentPage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentCerts.map((cert, index) => (
                    <div key={index} className="cert-item-v2">
                      <div className="cert-info">
                        <FaCertificate className="cert-icon-mini" />
                        <div>
                          <h5 className="cert-title-v2">{cert.title}</h5>
                          <p className="cert-org-v2">{cert.org}</p>
                        </div>
                      </div>
                      <span className="cert-date-v2">{cert.date}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="cert-pagination mt-4">
                <button 
                  className="pag-btn" 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                >
                  <FaChevronLeft /> Prev
                </button>
                <span className="page-indicator">Page {currentPage} of {totalPages}</span>
                <button 
                  className="pag-btn" 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  Next <FaChevronRight />
                </button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Border Divider */}
        <div className="custom-divider mt-5 mb-5"></div>

        <div className="text-center mt-2">
          <motion.a 
            href="/pdf/GRC_Specialist_Sidharath_Sharma_Resume.pdf" 
            className="resume-download-btn"
            whileHover={{ backgroundColor: "#fff", color: "#000" }}
          >
            DOWNLOAD FULL RESUME <FaDownload className="ms-2" />
          </motion.a>
        </div>
      </Container>
    </section>
  );
};