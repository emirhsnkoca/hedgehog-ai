'use client'

import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styles from './AboutHeader.module.css';

const AboutHeader: React.FC = () => {
  useEffect(() => {
    // Boş useEffect, gerektiğinde kullanılabilir
  }, []);

  // Robotik animasyon varyantları
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const title = "ABOUT META AI ARMY";
  const subtitle = "ADVANCED AI-POWERED COMMUNITY MANAGEMENT PLATFORM";

  return (
    <div className={styles.container}>
      <div className={styles.roboticBorder}>
        <div className={styles.cornerTL}></div>
        <div className={styles.cornerTR}></div>
        <div className={styles.cornerBL}></div>
        <div className={styles.cornerBR}></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.scanline}
        ></motion.div>
        
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className={styles.roboticLetter}
                style={{ 
                  display: 'inline-block',
                  fontFamily: 'Space Mono, monospace',
                  color: char === ' ' ? 'transparent' : '#ffffff',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.divider}
          ></motion.div>
          
          <div className={styles.subtitleContainer}>
            {subtitle.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                style={{ 
                  display: 'inline-block',
                  fontFamily: 'Roboto Mono, monospace',
                  color: char === ' ' ? 'transparent' : '#a0a0a0',
                  fontSize: '0.9rem',
                  letterSpacing: '1px',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader; 