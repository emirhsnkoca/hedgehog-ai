'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ParallaxBackground.module.css';

const ParallaxBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Generate grid points for the background grid
  const gridPoints = Array.from({ length: 50 }, (_, i) => ({
    id: `grid-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.5 + 0.2
  }));
  
  // Generate particles for the middle layer
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: `particle-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    speed: Math.random() * 1 + 0.5,
    delay: Math.random() * 2
  }));
  
  // Generate light points for the foreground
  const lightPoints = Array.from({ length: 15 }, (_, i) => ({
    id: `light-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 3,
    speed: Math.random() * 1.5 + 1,
    delay: Math.random() * 3
  }));
  
  return (
    <div className={styles.parallaxContainer}>
      {/* Background Grid Layer - Slowest */}
      <div 
        className={styles.layer} 
        style={{ 
          transform: `translate(${-mousePosition.x * 10}px, ${-mousePosition.y * 10}px)` 
        }}
      >
        {gridPoints.map((point) => (
          <motion.div
            key={point.id}
            className={styles.gridPoint}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.size}px`,
              height: `${point.size}px`
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5 / point.speed,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        <div className={styles.gridLines} />
      </div>
      
      {/* Middle Layer - Medium Speed */}
      <div 
        className={styles.layer} 
        style={{ 
          transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)` 
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8 / particle.speed,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Foreground Layer - Fastest */}
      <div 
        className={styles.layer} 
        style={{ 
          transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)` 
        }}
      >
        {lightPoints.map((point) => (
          <motion.div
            key={point.id}
            className={styles.lightPoint}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.size}px`,
              height: `${point.size}px`
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 / point.speed,
              delay: point.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Digital Rain Effect */}
      <div className={styles.digitalRain}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={`rain-${i}`} className={styles.rainColumn} style={{ left: `${i * 7}%` }}>
            {Array.from({ length: Math.floor(Math.random() * 15) + 10 }).map((_, j) => (
              <motion.div
                key={`rain-${i}-${j}`}
                className={styles.rainDrop}
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                  y: windowSize.height,
                  opacity: [0, 0.7, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
                style={{
                  top: `${j * 5}%`
                }}
              />
            ))}
          </div>
        ))}
      </div>
      
      {/* Grid Lines - Daha belirgin */}
      <div className={styles.gridLines} style={{ opacity: 0.15 }} />
    </div>
  );
};

export default ParallaxBackground; 