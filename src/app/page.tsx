"use client"

import { SplineSceneBasic } from "@/components/ui/code.demo";
import { motion, useScroll, useTransform } from "framer-motion";
import { Squares } from "@/components/ui/squares-background";
import { useRef, useEffect } from "react";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Geçiş efekti için transform değerleri
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  // Smooth scroll için
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="relative" ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-screen relative">
        <SplineSceneBasic />
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/70 text-sm">Daha fazlası için kaydır</span>
          <svg 
            className="w-6 h-6 text-white/70" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen w-full bg-[#060606] overflow-hidden"
      >
        {/* Squares Background */}
        <div className="absolute inset-0 z-0">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333"
            hoverFillColor="#222"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8 text-center"
            style={{
              textShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
          >
            About Hedgehog AI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl text-center space-y-8"
          >
            <p className="text-white/90 text-lg md:text-xl leading-relaxed"
               style={{
                 textShadow: "0 2px 4px rgba(0,0,0,0.3)",
               }}
            >
              Hedgehog AI, dijital deneyiminizi dönüştürmek için tasarlanmış çığır açan bir yapay zeka asistanıdır.
            </p>

            {/* İnteraktif Kartlar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 cursor-pointer group"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">
                  Yapay Zeka Gücü
                </h3>
                <p className="text-white/80">
                  Gelişmiş doğal dil işleme ve makine öğrenimi yetenekleriyle donatılmış.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 cursor-pointer group"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300">
                  Çok Yönlü Çözümler
                </h3>
                <p className="text-white/80">
                  Kodlama, veri analizi ve yaratıcı içerik üretiminde uzman.
                </p>
              </motion.div>
            </div>

            {/* İnteraktif Butonlar */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Daha Fazla Bilgi
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:text-purple-300 transition-colors"
              >
                İletişime Geç
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
