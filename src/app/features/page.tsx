"use client"

import { motion } from "framer-motion";
import { Squares } from "@/components/ui/squares-background";
import Link from "next/link";

// Feature card component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color, 
  delay = 0 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  color: string; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: `0 0 30px rgba(${
          color === "purple" ? "168, 85, 247" : 
          color === "blue" ? "59, 130, 246" :
          color === "cyan" ? "34, 211, 238" :
          "236, 72, 153"
        }, 0.2)`
      }}
      className={`bg-[#0a0a1a]/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 relative group overflow-hidden`}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>
      
      {/* Icon */}
      <div className={`text-5xl mb-6 ${
        color === "purple" ? "text-purple-500" : 
        color === "blue" ? "text-blue-500" :
        color === "cyan" ? "text-cyan-500" :
        "text-pink-500"
      }`}>{icon}</div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-400 leading-relaxed">{description}</p>
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${color}-500 to-transparent`}></div>
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${color}-500 to-transparent`}></div>
        <div className={`absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-${color}-500 to-transparent`}></div>
        <div className={`absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-${color}-500 to-transparent`}></div>
      </div>
    </motion.div>
  );
};

export default function FeaturesPage() {
  // Features data
  const features = [
    {
      icon: "🎭",
      title: "Custom AI Personas",
      description: "Create unique AI personalities for your community - from enthusiastic Hype Generators to analytical Skeptics and vigilant Moderators. Each persona is designed to engage your community in different ways, creating a dynamic and diverse conversation environment.",
      color: "purple"
    },
    {
      icon: "💬",
      title: "Real-Time Engagement",
      description: "Our AI bots respond dynamically to community discussions, mentioning users by name, asking follow-up questions, and sparking meaningful conversations. They maintain context across multiple messages, creating natural dialogue flows that keep your community active and engaged.",
      color: "blue"
    },
    {
      icon: "🛡️",
      title: "Automated Moderation & FUD Control",
      description: "Protect your community with AI-driven moderation that detects and addresses misinformation in real-time. Our system identifies potential FUD (Fear, Uncertainty, Doubt) and responds with accurate information, while filtering spam and inappropriate content without human intervention.",
      color: "cyan"
    },
    {
      icon: "🚀",
      title: "Web3 & Crypto-Specific AI",
      description: "Our AI is specifically trained on Web3 and cryptocurrency concepts, capable of discussing tokenomics, project roadmaps, technical implementations, and investment strategies with accuracy and nuance. Stay at the cutting edge with AI that understands the unique language of blockchain.",
      color: "pink"
    }
  ];

  return (
    <main className="relative bg-[#050510] text-white min-h-screen">
      {/* Header section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how Meta AI Army transforms your Web3 community engagement with advanced AI capabilities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 relative">
        {/* Squares Background with reduced opacity */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Squares
            direction="diagonal"
            speed={0.3}
            squareSize={40}
            borderColor="#334"
            hoverFillColor="#223"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">elevate</span> your community?
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Experience the power of AI-driven community management with Meta AI Army
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://t.me/hedgehogaibot" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md font-medium text-lg transition-all"
                >
                  Try Demo
                </motion.button>
              </Link>
              
              <Link href="/pricing">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border border-purple-500 rounded-md font-medium text-lg transition-all"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 