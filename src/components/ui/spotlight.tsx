'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  children: React.ReactNode;
  size?: number;
  strength?: number;
  color?: string;
  springConfig?: SpringOptions;
};

export function Spotlight({
  children,
  className,
  size = 400,
  strength = 0.3,
  color = "white",
  springConfig = {
    stiffness: 400,
    damping: 50,
  },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    },
    []
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Add window mousemove event to track mouse position even when moving fast
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        handleMouseMove(e);
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [isHovered, handleMouseMove]);

  // Spring animations for smooth spotlight following
  const springX = useSpring(mousePosition.x, springConfig);
  const springY = useSpring(mousePosition.y, springConfig);

  const spotlightOpacity = useTransform(
    springX,
    [0, 1],
    [isHovered ? strength : 0, isHovered ? strength : 0]
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 opacity-0"
        style={{
          opacity: spotlightOpacity,
          background: `radial-gradient(${size}px circle at ${springX}px ${springY}px, ${color}, transparent)`,
        }}
      />
      {children}
    </div>
  );
} 