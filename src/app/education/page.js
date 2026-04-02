"use client";
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaCertificate, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import './education.css'; 

const allCertifications = [
  { 
    title: "CISA - Certified Information Systems Auditor (In Progress)", 
    org: "ISACA", 
    date: "Expected 2026",
    // type: "link",
    // url: "https://www.isaca.org/credentialing/cisa" // CISA ki official info link
  },
  { 
    title: "ISO/IEC 27001:2022 Lead Auditor", 
    org: "BSI (CQI & IRCA Certified)", 
    date: "Feb 2026",
    type: "modal", 
    // Updated Path
    pdfUrl: "/images/certifications/certificate.pdf" 
  },
  { 
    title: "Fortinet Certified Associate – Cybersecurity", 
    org: "Fortinet", 
    date: "Jun 2025",
    type: "link", 
    url: "https://www.credly.com/users/sidharath-sharma.eefe8e30/badges#credly" 
  },
  { 
    title: "Cisco Introduction to Cybersecurity", 
    org: "CISCO", 
    date: "May 2025",
    type: "link", 
    url: "https://www.credly.com/users/sidharath-sharma.eefe8e30/badges#credly" 
  },
];

export default function EducationCertifications() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");
  
  const certsPerPage = 3;
  const indexOfLastCert = currentPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;
  const currentCerts = allCertifications.slice(indexOfFirstCert, indexOfLastCert);
  const totalPages = Math.ceil(allCertifications.length / certsPerPage);

  const handleCertClick = (cert) => {
    if (cert.type === "modal") {
      setSelectedPdf(cert.pdfUrl);
      setShowModal(true);
    } else if (cert.type === "link") {
      window.open(cert.url, "_blank");
    }
  };

  return (
    <section id="education-certification" className="bg-black text-white py-5">
      <Container>
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
                    <div 
                      key={index} 
                      className="cert-item-v2 clickable-cert" 
                      onClick={() => handleCertClick(cert)}
                    >
                      <div className="cert-info">
                        <FaCertificate className="cert-icon-mini" />
                        <div>
                          <h5 className="cert-title-v2">
                            {cert.title} 
                            {cert.type === 'link' && <FaExternalLinkAlt className="ms-2 external-link-icon" />}
                          </h5>
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

        <div className="custom-divider mt-5 mb-5"></div>

        {/* Resume Download Section */}
        <div className="text-center mt-2">
          <motion.a 
            href="/pdf/GRC_Specialist_Sidharath_Sharma_Resume.pdf" 
            target="_blank" // Naye tab mein open karega
            rel="noopener noreferrer" // Security ke liye best practice
            className="resume-download-btn"
            whileHover={{ backgroundColor: "#fff", color: "#000" }}
          >
            VIEW & DOWNLOAD RESUME <FaDownload className="ms-2" />
          </motion.a>
        </div>

        {/* Certificate Modal Popup */}
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          centered 
          size="lg"
          contentClassName="cert-modal-content"
        >
          <Modal.Header closeButton closeVariant="white" className="border-0 pb-0"></Modal.Header>
          <Modal.Body className="p-2 pb-3">
            <div className="pdf-viewer-container" onContextMenu={(e) => e.preventDefault()}>
              <embed 
                src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`} 
                type="application/pdf" 
                width="100%" 
                height="600px" 
                className="embedded-pdf"
              />
            </div>
          </Modal.Body>
        </Modal>

      </Container>
    </section>
  );
}