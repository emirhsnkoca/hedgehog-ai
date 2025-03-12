'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutSections.module.css';

interface AboutSectionProps {
  sections: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

const AboutSections: React.FC<AboutSectionProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to a specific section
  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Check which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const height = ref.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressIndicator}>
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`${styles.progressItem} ${activeSection === index ? styles.active : ''}`}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.progressDot}>
              <motion.div
                className={styles.progressInner}
                initial={false}
                animate={{
                  scale: activeSection === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.span
              className={styles.progressLabel}
              initial={false}
              animate={{
                opacity: activeSection === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            >
              {section.title}
            </motion.span>
          </motion.div>
        ))}
        <motion.div
          className={styles.progressLine}
          initial={{ height: 0 }}
          animate={{
            height: `${(activeSection / (sections.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Content Sections */}
      <div className={styles.sectionsContainer}>
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className={styles.section}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionContent}>{section.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSections; 