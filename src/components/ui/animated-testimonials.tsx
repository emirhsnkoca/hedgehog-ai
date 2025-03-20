"use client";

import { cn } from "@/lib/utils";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  twitter?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    setIsClient(true);
    
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!isClient) {
    return (
      <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
        <div className="flex justify-center items-center h-80">
          <div className="w-16 h-16 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const isCurrentlyActive = isActive(index);
                
                return (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                      opacity: isCurrentlyActive ? 1 : 0.7,
                      scale: isCurrentlyActive ? 1 : 0.95,
                      z: isCurrentlyActive ? 0 : -100,
                      rotate: isCurrentlyActive ? 0 : randomRotateY(),
                      zIndex: isCurrentlyActive
                      ? 999
                      : testimonials.length + 2 - index,
                      y: isCurrentlyActive ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                    onClick={() => {
                      if (isCurrentlyActive && testimonial.twitter) {
                        window.open(testimonial.twitter, "_blank");
                      }
                    }}
                    style={{
                      cursor: isCurrentlyActive && testimonial.twitter ? "pointer" : "default"
                    }}
                  >
                    <div 
                      className={`h-full w-full rounded-3xl overflow-hidden relative group transition-all duration-300 ${
                        isCurrentlyActive && testimonial.twitter ? 
                        "hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/20" : ""
                      }`}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                        className="w-full h-full object-cover"
                        width={300}
                        height={400}
                        unoptimized
                      />
                      
                      {/* Hover overlay with gradient effect */}
                      {isCurrentlyActive && testimonial.twitter && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-16">
                          <motion.div 
                            className="flex flex-col items-center gap-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                              </svg>
                            </div>
                            <p className="text-white text-sm font-medium">View Profile</p>
                          </motion.div>
                        </div>
                      )}
                      
                      {isCurrentlyActive && testimonial.twitter && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 border border-gray-700 hover:border-white hover:bg-black/80 transition-all transform hover:scale-105 active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                            <span>Visit Twitter Profile</span>
                          </div>
                        </div>
                      )}
                    </div>
                </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <motion.div 
              className="bg-black border border-gray-800 p-6 rounded-xl mb-6 shadow-lg hover:shadow-gray-500/10 transition-all duration-500 group relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-800/10 to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <motion.div 
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-60"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
                  animate={{ 
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
              {testimonials[active].name}
                </motion.h3>
                
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full my-3"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                />
                
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                  <p className="text-sm font-medium text-gray-300 tracking-wider uppercase">{testimonials[active].designation}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p className="text-lg text-gray-400 mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center group/button border border-gray-700 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-300 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center group/button border border-gray-700 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-gray-300 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};