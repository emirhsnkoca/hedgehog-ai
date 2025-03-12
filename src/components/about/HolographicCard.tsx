'use client'

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './HolographicCard.module.css';

interface HolographicCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ 
  children, 
  title,
  className = '' 
}) => {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Holographic Edge Effect */}
      <div className={styles.edgeEffect}>
        <div className={styles.topEdge}></div>
        <div className={styles.bottomEdge}></div>
        <div className={styles.leftEdge}></div>
        <div className={styles.rightEdge}></div>
      </div>
      
      {/* Holographic Corner Dots */}
      <div className={`${styles.cornerDot} ${styles.topLeft}`}></div>
      <div className={`${styles.cornerDot} ${styles.topRight}`}></div>
      <div className={`${styles.cornerDot} ${styles.bottomLeft}`}></div>
      <div className={`${styles.cornerDot} ${styles.bottomRight}`}></div>
      
      {/* Content */}
      <div className={styles.content}>
        {title && (
          <motion.h3 
            className={styles.title}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
            <motion.div 
              className={styles.titleGlow}
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </motion.h3>
        )}
        
        <div className={styles.childrenContainer}>
          {children}
        </div>
      </div>
      
      {/* Holographic Shimmer Effect */}
      <motion.div 
        className={styles.shimmer}
        animate={{ 
          left: ["0%", "100%"],
          top: ["0%", "100%"]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default HolographicCard; 