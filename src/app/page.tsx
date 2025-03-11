"use client"

import { SplineSceneBasic } from "@/components/ui/code.demo";
import { motion } from "framer-motion";
import { Squares } from "@/components/ui/squares-background";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center">
        {/* 3D Robot */}
        <div className="w-full h-[60vh] relative">
          <SplineSceneBasic />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center z-10 mt-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600"
          >
            REVOLUTIONIZE YOUR WEB3 COMMUNITY
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-3xl font-semibold mb-8 text-gray-300"
          >
            HEDGEHOG AI ARMY – AI-POWERED COMMUNITY MANAGEMENT
          </motion.h2>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="https://t.me/hedgehogaibot" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg transition-all"
              >
                Join the Live Demo
              </motion.button>
            </Link>
            
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-blue-600 rounded-full font-bold text-lg transition-all"
              >
                Start Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-gray-400 text-sm">Scroll down</span>
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-[#060611]">
        <div className="container mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-2xl font-semibold mb-12 text-gray-300"
          >
            TRUSTED BY
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {/* Partner Logos */}
            <div className="h-12 w-32 bg-gray-800 rounded-lg flex items-center justify-center text-blue-400 font-bold">Solana</div>
            <div className="h-12 w-32 bg-gray-800 rounded-lg flex items-center justify-center text-green-400 font-bold">Step Finance</div>
            <div className="h-12 w-32 bg-gray-800 rounded-lg flex items-center justify-center text-purple-400 font-bold">Raydium</div>
            <div className="h-12 w-32 bg-gray-800 rounded-lg flex items-center justify-center text-yellow-400 font-bold">Orca</div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Squares Background */}
      <section className="relative min-h-screen w-full bg-[#060606] overflow-hidden py-20">
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
        <div className="relative z-10 container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
          >
            AI-Powered Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all"
            >
              <div className="text-purple-500 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4 text-white">Intelligent Responses</h3>
              <p className="text-gray-400">
                Our AI understands and responds to community questions with accurate, project-specific information.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="text-blue-500 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-white">Analytics Dashboard</h3>
              <p className="text-gray-400">
                Track engagement, sentiment, and community growth with our comprehensive analytics tools.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-pink-500 transition-all"
            >
              <div className="text-pink-500 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4 text-white">Spam Protection</h3>
              <p className="text-gray-400">
                Automatically detect and filter spam, scams, and harmful content to keep your community safe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
