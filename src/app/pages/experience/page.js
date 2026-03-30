"use client";
import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./experience.css";

const experiences = [
  { 
    title: "Cybersecurity Auditor", 
    company: "Etech Global Services", 
    duration: "May 2025 - Feb 2026", 
    shortDesc: "Led ISO 27001, SOC 2 & NIST 800-53 audits — 30% gap reduction", 
    fullDetails: [
      "Conducted multi-framework internal audits (ISO 27001, SOC 2, NIST SP 800-53) across 500+ endpoints.",
      "Administered Vanta GRC platform for automated evidence collection.",
      "Enforced Access Control policies via Active Directory (AD DS) and GPO hardening.",
      "Designed phishing simulation campaigns — 35% reduction in risk incidents.",
      "Authored ISO 27001 policy suite: InfoSec, Access Control, and Audit Logging."
    ] 
  },
  { 
    title: "Cyber Security Intern", 
    company: "Etech Global Services", 
    duration: "Feb 2025 - May 2025", 
    shortDesc: "Endpoint audits, vulnerability scanning & risk documentation.", 
    fullDetails: [
      "Completed endpoint and system audits — identified and corrected misconfigured assets.",
      "Investigated vulnerabilities using Nmap, Nessus, and Metasploit; delivered recommendations.",
      "Improved technical documentation for internal risk assessments and policy reviews."
    ] 
  },
  { 
    title: "Graduate Teaching Assistant", 
    company: "Stephen F Austin State University", 
    duration: "Jan 2024 - Dec 2024", 
    shortDesc: "Taught cybersecurity fundamentals & web development.", 
    fullDetails: [
      "Delivered cybersecurity instruction — CIA triad, network security, and secure architecture.",
      "Supervised lab sessions, monitored exams, and graded technical assignments.",
      "Taught front-end web development fundamentals (HTML, CSS)."
    ] 
  },
  { 
    title: "Sr. Frontend Developer", 
    company: "Hypotenuse Corporation Pvt. Ltd", 
    duration: "Aug 2020 - Dec 2023", 
    shortDesc: "Built secure web apps with OWASP Top 10 practices.", 
    fullDetails: [
      "Implemented secure coding practices aligned with OWASP Top 10.",
      "Improved application load times by ~40% through performance optimization.",
      "Collaborated with cross-functional teams to deliver security-focused web solutions."
    ] 
  }
];

const projects = [
  { 
    title: "Novapay FinTech — ISO 27001:2022 Implementation", 
    icon: <FaLock />,
    shortDesc: "End-to-end ISO 27001 ISMS deployed for a simulated FinTech company.", 
    fullDetails: [
      "Configured Windows Server 2025 as Domain Controller with RBAC groups.",
      "Created 6 GPOs: baseline security, password policy, and USB controls.",
      "Deployed auditd on Ubuntu Server to capture failed SSH logins.",
      "Authored full policy suite: Information Security Policy, ISMS Scope, etc.",
      "Tech: ISO 27001 · Windows Server 2025 · AD DS · Ubuntu · auditd"
    ] 
  },
  { 
    title: "Linux Honeypot Server (Cowrie)", 
    icon: <FaLock />,
    shortDesc: "Deployed SSH honeypot to monitor attacker behavior.", 
    fullDetails: [
      "Deployed Cowrie SSH honeypot on Ubuntu for real-time attack analysis.",
      "Logged attacker TTPs, session behavior, and command patterns.",
      "Visualized attack data and geographic origins using Kibana dashboards.",
      "Tech: Cowrie · Ubuntu · Kibana · SSH · Threat Intelligence"
    ] 
  },
  { 
    title: "Firewall Evasion Analysis", 
    icon: <FaLock />,
    shortDesc: "Simulated DNS tunneling to identify firewall bypass vulnerabilities.", 
    fullDetails: [
      "Simulated advanced bypass techniques using CTI methodology.",
      "Tested DNS tunneling and port knocking against Windows 10 Firewall.",
      "Identified vulnerabilities and documented concrete mitigation steps.",
      "Tech: Nmap · Metasploit · Shodan · pfSense · CTI"
    ] 
  },
  { 
    title: "USB Forensics Investigation", 
    icon: <FaLock />,
    shortDesc: "Investigated USB-based data exfiltration using Autopsy.", 
    fullDetails: [
      "Investigated unauthorized USB data transfers and exfiltration scope.",
      "Analyzed file artifacts and metadata using Autopsy forensics tool.",
      "Reconstructed attacker methodology and documented forensic evidence.",
      "Tech: Autopsy · Kali Linux · Digital Forensics"
    ] 
  }
];

export const ExperienceAndProjectsSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef(null);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="experience-projects" className="bg-black text-white py-5">
      <Container>
        <div className="custom-divider mb-4"></div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-label">EXPERIENCE</h2>
          <div className="carousel-arrows">
            <button onClick={() => scroll("left")} className="arrow-btn"><FaChevronLeft /></button>
            <button onClick={() => scroll("right")} className="arrow-btn"><FaChevronRight /></button>
          </div>
        </div>
        
        <div className="experience-carousel" ref={scrollRef}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="exp-card" 
              onClick={() => setSelectedItem(exp)}
              whileHover={{ y: -8, borderColor: "#555" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="exp-date">{exp.duration}</span>
              <h4 className="exp-role">{exp.title}</h4>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.shortDesc}</p>
              <button className="view-more">View Details +</button>
            </motion.div>
          ))}
        </div>

        <div className="custom-divider my-5"></div>

        <h2 className="section-label mb-5">FEATURED PROJECTS</h2>
        <Row>
          {currentProjects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <motion.div 
                className="project-card-v2" 
                whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(255,255,255,0.1)" }} 
                onClick={() => setSelectedItem(project)}
              >
                <div className="p-card-icon">{project.icon}</div>
                <div className="p-card-content">
                  <h4>{project.title}</h4>
                  <p>{project.shortDesc}</p>
                  <span className="view-more-dark">Read Report →</span>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="pagination-container text-center mt-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button 
              key={i} 
              className={`pag-dot ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)}>
              <motion.div className="modal-content-custom" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setSelectedItem(null)}><FaTimes /></button>
                <h3>{selectedItem.title}</h3>
                <h5 className="text-muted mb-4">{selectedItem.company || "Project Detail"}</h5>
                <div className="details-body">
                  {Array.isArray(selectedItem.fullDetails) ? (
                    <ul className="modal-list">
                      {selectedItem.fullDetails.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  ) : (
                    <p>{selectedItem.fullDetails}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};