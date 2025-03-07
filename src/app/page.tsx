"use client"

import { SplineSceneBasic } from "@/components/ui/code.demo";
import { motion } from "framer-motion";
import { Squares } from "@/components/ui/squares-background";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen">
        <SplineSceneBasic />
      </section>

      {/* About Section */}
      <section className="relative min-h-screen w-full bg-[#060606] overflow-hidden">
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
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl text-center"
          >
            <p className="text-white/90 text-lg md:text-xl leading-relaxed"
               style={{
                 textShadow: "0 2px 4px rgba(0,0,0,0.3)",
               }}
            >
              Hedgehog AI is a cutting-edge artificial intelligence assistant designed to revolutionize your digital experience. 
              With advanced natural language processing and machine learning capabilities, we provide intelligent solutions 
              for a wide range of tasks - from coding and data analysis to creative content generation and problem-solving.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
