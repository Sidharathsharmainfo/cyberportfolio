"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaUniversity, FaGithub } from "react-icons/fa";
import "./home.css";

export const HomePage = () => {
  return (
    <main id="home">
      <motion.div
        className="banner_portfolio"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="contenttitle"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          “SECURING THE FUTURE WITH PASSION AND EXPERTISE”
        </motion.h1>

        <motion.div
          className="innercontent"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="sub_headline">
            Helping organizations build audit-ready compliance programs that earn 
            and keep client trust. CQI & IRCA Certified ISO/IEC 27001:2022 Lead 
            Auditor with hands-on GRC experience across NIST SP 800-53, SOC 2, 
            and Vanta.
          </p>
          
          <div className="contact_strip">
             <a href="tel:4252979880" className="contact_link">
               <FaPhoneAlt className="me-1" /> (425) 297-9880
             </a>
             <span className="divider">|</span>
             <a href="mailto:sidharthsharmainfo@gmail.com" className="contact_link">
               <FaEnvelope className="me-1" /> Email
             </a>
             <span className="divider">|</span>
             <a href="https://linkedin.com/in/sidharathsharmainfo" target="_blank" rel="noopener noreferrer" className="contact_link">
               <FaLinkedin className="me-1" /> LinkedIn
             </a>
             <span className="divider">|</span>
             <a href="https://github.com/Sidharathsharmainfo" target="_blank" rel="noopener noreferrer" className="contact_link">
               <FaGithub className="me-1" /> GitHub
             </a>
          </div>
          
          <div className="status_tag">
             <FaUniversity className="me-2" /> STEM OPT Authorized
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};