"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Percentage counter logic
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-overlay">
      <div className="terminal-loader">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="cyber-status"
        >
          <span className="blink-dot"></span> SYSTEM_INITIALIZING...
        </motion.div>
        
        <div className="progress-bar-container">
          <motion.div 
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
          />
        </div>

        <div className="loader-footer">
          <span className="percent-text">{percent}%</span>
          <span className="secure-text">SECURE_UPLINK_ESTABLISHED</span>
        </div>
        
        <div className="audit-logs">
          <p> ISO 27001 FRAMEWORK: LOADED</p>
          <p> ANNEX A CONTROLS: VERIFIED</p>
          <p> ENCRYPTION KEYS: ACTIVE</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;