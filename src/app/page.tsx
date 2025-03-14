"use client"

import { SplineSceneBasic } from "@/components/ui/code.demo";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Squares } from "@/components/ui/squares-background";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import AboutHeader from "@/components/about/AboutHeader";

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
        scale: 1.02,
        boxShadow: `0 0 20px rgba(255, 255, 255, 0.1)`
      }}
      className="bg-[#0a0a0a] p-6 relative group overflow-hidden flex flex-col h-full border border-gray-800"
    >
      {/* Tech frame */}
      <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t border-l border-gray-600 opacity-70 group-hover:border-white group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t border-r border-gray-600 opacity-70 group-hover:border-white group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b border-l border-gray-600 opacity-70 group-hover:border-white group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b border-r border-gray-600 opacity-70 group-hover:border-white group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Horizontal scan line */}
      <motion.div 
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ top: '50%', opacity: 0.2 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          width: ["0%", "100%", "0%"],
          left: ["0%", "0%", "100%"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Icon */}
      <div className="relative mb-5 self-start">
        <div className="w-10 h-10 flex items-center justify-center bg-[#111111] border border-gray-700 relative z-10 group-hover:border-white transition-colors duration-300">
          <div className="text-white text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>
            {icon}
          </div>
        </div>
      </div>
      
      {/* Title */}
      <div className="relative mb-3">
        <h3 className="text-lg font-bold text-white mb-1 tracking-wider group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300" style={{ fontFamily: 'Space Mono, monospace' }}>
          {title}
        </h3>
        <div className="w-10 h-[1px] bg-white opacity-30 group-hover:w-full group-hover:opacity-60 transition-all duration-500"></div>
      </div>
      
      {/* Description */}
      <p className="text-gray-400 leading-relaxed text-sm flex-grow group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: 'Roboto Mono, monospace' }}>
        {description}
      </p>
      
      {/* Status indicator */}
      <div className="mt-4 pt-4 border-t border-gray-800 flex justify-end items-center">
        <div className="text-xs text-gray-500 tracking-widest group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Space Mono, monospace' }}>
          <span className="inline-block w-2 h-2 rounded-full bg-white opacity-50 mr-2 animate-pulse"></span>
          ACTIVE
        </div>
      </div>
    </motion.div>
  );
};

// Milestone kartı bileşeni
const MilestoneCard = ({ 
  quarter, 
  year, 
  title, 
  items, 
  color, 
  delay = 0 
}: { 
  quarter: string; 
  year: string; 
  title: string; 
  items: string[]; 
  color: string; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative p-6 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
      style={{
        background: 'rgba(13, 14, 18, 0.8)',
        boxShadow: `0 0 20px 0 rgba(${color === 'blue' ? '56, 189, 248' : color === 'purple' ? '168, 85, 247' : color === 'green' ? '52, 211, 153' : '249, 115, 22'}, 0.15)`,
      }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${color === 'blue' ? '56, 189, 248' : color === 'purple' ? '168, 85, 247' : color === 'green' ? '52, 211, 153' : '249, 115, 22'}, 0.15) 0%, transparent 70%)`,
        }}
      />
      
      {/* Quarter badge */}
      <div 
        className="absolute -top-3 -left-3 px-3 py-1 rounded-full text-xs font-semibold"
        style={{
          background: color === 'blue' ? 'linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)' :
                    color === 'purple' ? 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)' :
                    color === 'green' ? 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' :
                    'linear-gradient(90deg, #f59e0b 0%, #f97316 100%)',
          boxShadow: `0 0 15px 0 rgba(${color === 'blue' ? '56, 189, 248' : color === 'purple' ? '168, 85, 247' : color === 'green' ? '52, 211, 153' : '249, 115, 22'}, 0.5)`,
        }}
      >
        {quarter} {year}
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-2 text-white">{title}</h3>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 * index }}
            viewport={{ once: true }}
            className="flex items-start"
          >
            <span 
              className="mr-2 mt-1 text-lg"
              style={{
                color: color === 'blue' ? '#38bdf8' :
                      color === 'purple' ? '#a855f7' :
                      color === 'green' ? '#34d399' :
                      '#f97316'
              }}
            >
              ▸
            </span>
            <span className="text-gray-300">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// Team member card component
const TeamMemberCard = ({ 
  name, 
  title, 
  twitter, 
  isHighlighted = false,
  delay = 0 
}: { 
  name: string; 
  title: string; 
  twitter: string;
  isHighlighted?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: isHighlighted 
          ? '0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.2)' 
          : '0 0 25px rgba(59, 130, 246, 0.3)'
      }}
      className={`relative p-8 rounded-2xl backdrop-blur-sm border border-gray-800 transition-all duration-500 group overflow-hidden ${
        isHighlighted ? 'bg-gradient-to-br from-[#0D0E12]/80 to-purple-900/10' : 'bg-[#0D0E12]/80'
      }`}
    >
      {/* Background glow effect */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl ${
          isHighlighted ? 'bg-purple-900/10' : 'bg-blue-900/10'
        }`}
      ></div>
      
      {/* Animated border effect for highlighted member */}
      {isHighlighted && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-2xl z-0 overflow-hidden">
            <div className="absolute -inset-[2px] z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 animate-spin-slow rounded-2xl blur-[2px]"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Avatar placeholder - could be replaced with actual images */}
      <div className={`w-24 h-24 rounded-full mb-6 mx-auto flex items-center justify-center text-3xl font-bold ${
        isHighlighted 
          ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white' 
          : 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white'
      }`}>
        {name.charAt(0)}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-center text-white">{name}</h3>
      
      <p className="text-gray-400 mb-5 text-center">{title}</p>
      
      <a 
        href={`https://twitter.com/${twitter.replace('@', '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 py-2 px-4 rounded-full w-full transition-all duration-300 ${
          isHighlighted 
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/20' 
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/20'
        }`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
        <span>{twitter}</span>
      </a>
      
      {/* Animated glow effect for highlighted member */}
      {isHighlighted && (
        <motion.div 
          className="absolute -inset-1 bg-purple-500/20 rounded-2xl blur-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      )}
    </motion.div>
  );
};

// FAQ Item component
const FAQItem = ({ 
  question, 
  answer,
  delay = 0 
}: { 
  question: string; 
  answer: string;
  delay?: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="border-b border-gray-800 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 px-4 text-left hover:bg-gray-900/30 transition-colors duration-300 rounded-lg"
      >
        <h3 className="text-lg md:text-xl font-medium text-white">{question}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-500"
          >
            <path 
              d="M19 9L12 16L5 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 16 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-4"
      >
        <div className="pb-5 text-gray-400">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Features section
const Features = () => {
  // Feature tipi tanımı
  type FeatureSize = "large" | "medium" | "small";
  
  interface Feature {
    icon: string;
    title: string;
    description: string;
    color: string;
    size: FeatureSize;
  }
  
  // Features data
  const features: Feature[] = [
    {
      icon: "01",
      title: "AI MODERATION",
      description: "Automated content moderation with advanced AI algorithms to maintain community standards and filter inappropriate content.",
      color: "gray",
      size: "large"
    },
    {
      icon: "02",
      title: "ANALYTICS DASHBOARD",
      description: "Comprehensive analytics to track community growth, engagement metrics, and user behavior patterns.",
      color: "gray",
      size: "medium"
    },
    {
      icon: "03",
      title: "SMART NOTIFICATIONS",
      description: "Intelligent notification system that prioritizes important updates and personalizes alerts based on user preferences.",
      color: "gray",
      size: "medium"
    },
    {
      icon: "04",
      title: "MULTI-PLATFORM INTEGRATION",
      description: "Seamless integration with popular Web3 platforms, wallets, and social media channels for unified community management.",
      color: "gray",
      size: "large"
    },
    {
      icon: "05",
      title: "SECURE AUTHENTICATION",
      description: "Enhanced security protocols with wallet-based authentication and encryption for data protection.",
      color: "gray",
      size: "medium"
    },
    {
      icon: "06",
      title: "TARGETED CAMPAIGNS",
      description: "Create and manage targeted marketing campaigns with AI-powered audience segmentation and performance tracking.",
      color: "gray",
      size: "medium"
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-[#050505]">
      {/* Simple subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0a0a0a] opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              SYSTEM CAPABILITIES
            </h2>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                width: ["0%", "100%", "0%"],
                left: ["0%", "0%", "100%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto mt-6"
            style={{ fontFamily: 'Roboto Mono, monospace' }}
          >
            Advanced AI-powered tools designed to optimize and enhance your Web3 community management experience.
          </motion.p>
        </div>
        
        {/* Features grid - improved layout with offset and different sizes */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {features.map((feature, index) => {
              // Farklı boyutlar ve konumlar için sınıflar
              const sizeClasses = {
                large: "md:col-span-8 md:row-span-2",
                medium: "md:col-span-4",
                small: "md:col-span-4"
              };
              
              // Offset pozisyonları için özel sınıflar
              const offsetClasses = [
                "", // İlk kart için offset yok
                "md:col-start-5", // İkinci kart için offset
                "md:col-start-9", // Üçüncü kart için offset
                "md:col-start-1", // Dördüncü kart için offset
                "md:col-start-9", // Beşinci kart için offset
                "md:col-start-5", // Altıncı kart için offset
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${sizeClasses[feature.size]} ${offsetClasses[index]}`}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    color={feature.color}
                    delay={index * 0.1}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Simple status indicator */}
        <div className="mt-16 flex justify-center">
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-800 bg-[#0a0a0a]"
            animate={{
              boxShadow: [
                '0 0 0px rgba(255, 255, 255, 0)',
                '0 0 5px rgba(255, 255, 255, 0.1)',
                '0 0 0px rgba(255, 255, 255, 0)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="w-2 h-2 rounded-full bg-white opacity-70"></span>
            <span className="text-xs text-gray-400 font-mono tracking-widest">SYSTEM OPERATIONAL</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  
  // Client tarafında olduğumuzu kontrol et
  useEffect(() => {
    setIsClient(true);
  }, []);

  // For smooth scrolling
  const aboutRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const roadmapRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  
  // Features data
  const features = [
    {
      icon: "🎭",
      title: "Custom AI Personas",
      description: "Create unique AI personalities for your community - from enthusiastic Hype Generators to analytical Skeptics and vigilant Moderators. Each persona is designed to engage your community in different ways.",
      color: "gray"
    },
    {
      icon: "💬",
      title: "Real-Time Engagement",
      description: "Our AI bots respond dynamically to community discussions, mentioning users by name, asking follow-up questions, and sparking meaningful conversations.",
      color: "gray"
    },
    {
      icon: "🛡️",
      title: "Automated Moderation & FUD Control",
      description: "Protect your community with AI-driven moderation that detects and addresses misinformation in real-time. Our system identifies potential FUD and responds with accurate information.",
      color: "gray"
    },
    {
      icon: "🚀",
      title: "Web3 & Crypto-Specific AI",
      description: "Our AI is specifically trained on Web3 and cryptocurrency concepts, capable of discussing tokenomics, project roadmaps, technical implementations, and investment strategies.",
      color: "gray"
    }
  ];
  
  // Milestones data
  const milestones = [
    {
      quarter: "Q1",
      year: "2023",
      title: "Platform Foundation",
      items: [
        "Initial AI model training on Web3 and crypto concepts",
        "Development of core AI persona framework",
        "Alpha testing with select communities",
        "Infrastructure setup for scalability"
      ],
      color: "blue",
      delay: 0.1
    },
    {
      quarter: "Q2",
      year: "2023",
      title: "Beta Launch",
      items: [
        "Public beta release with basic persona templates",
        "Integration with Telegram and Discord",
        "Implementation of basic analytics dashboard",
        "Community feedback collection and iteration"
      ],
      color: "purple",
      delay: 0.2
    },
    {
      quarter: "Q3",
      year: "2023",
      title: "Advanced Features",
      items: [
        "Enhanced AI training with community-specific data",
        "Launch of custom persona creation tools",
        "Advanced moderation and FUD detection capabilities",
        "Multi-language support expansion"
      ],
      color: "green",
      delay: 0.3
    },
    {
      quarter: "Q4",
      year: "2023",
      title: "Ecosystem Expansion",
      items: [
        "Integration with additional platforms (Twitter, Slack)",
        "Launch of API for developer ecosystem",
        "Advanced analytics and reporting features",
        "Enterprise-grade security enhancements"
      ],
      color: "orange",
      delay: 0.4
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "Meta AI Army nedir?",
      answer: "Meta AI Army, Web3 ve kripto topluluklarınız için özel olarak tasarlanmış, yapay zeka destekli bir topluluk yönetim platformudur. Platformumuz, topluluğunuzu canlandırmak, moderasyon sağlamak ve üyelerinizle anlamlı etkileşimler oluşturmak için özelleştirilebilir AI personaları kullanır."
    },
    {
      question: "AI personaları nasıl çalışır?",
      answer: "AI personalarımız, doğal dil işleme ve makine öğrenimi teknolojilerini kullanarak topluluk sohbetlerine katılır. Her persona, belirli bir rol için tasarlanmıştır - örneğin, yeni üyeleri karşılayan bir Hoş Geldin Elçisi, teknik sorulara yanıt veren bir Bilgi Uzmanı veya tartışmaları canlandıran bir Topluluk Katalizörü. Bu personalar, kullanıcıları isimleriyle anabilir, sorular sorabilir ve gerçek zamanlı olarak yanıt verebilir."
    },
    {
      question: "Hangi platformları destekliyorsunuz?",
      answer: "Şu anda Telegram ve Discord platformlarını tam entegrasyonla destekliyoruz. Twitter, Slack ve diğer popüler topluluk platformları için entegrasyonlar geliştirme aşamasındadır ve yakında kullanıma sunulacaktır."
    },
    {
      question: "Meta AI Army'yi kendi topluluğuma nasıl entegre edebilirim?",
      answer: "Entegrasyon süreci basittir. Platformumuza kaydolduktan sonra, size bir API anahtarı ve kolay kurulum talimatları sağlayacağız. Telegram veya Discord topluluğunuza bir bot eklemek kadar kolaydır. Daha sonra, yönetim panelimizi kullanarak personalarınızı özelleştirebilir ve davranışlarını yapılandırabilirsiniz."
    },
    {
      question: "Fiyatlandırma nasıl çalışır?",
      answer: "Farklı topluluk boyutları ve ihtiyaçları için tasarlanmış çeşitli fiyatlandırma planları sunuyoruz. Ücretsiz bir deneme sürümü, küçük topluluklar için uygun fiyatlı bir başlangıç planı ve daha büyük, daha aktif topluluklar için ölçeklenebilir premium planlar mevcuttur. Tam fiyatlandırma ayrıntıları için lütfen Fiyatlandırma sayfamızı ziyaret edin."
    }
  ];

  // About section expanded states
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [missionExpanded, setMissionExpanded] = useState(false);
  const [visionExpanded, setVisionExpanded] = useState(false);
  
  // About section active section tracking
  const [activeAboutSection, setActiveAboutSection] = useState(0);
  const aboutSectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  
  // Function to scroll to a specific about section
  const scrollToAboutSection = (index: number) => {
    aboutSectionRefs[index]?.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  
  // Check which about section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      aboutSectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveAboutSection(index);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-[#000000] text-white">
      {/* Orbitron font için stil */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
      `}</style>
      
      {/* Navbar - Semi-transparent, becomes darker on scroll */}
      <motion.nav 
        initial={{ backgroundColor: 'rgba(5, 5, 16, 0)' }}
        animate={{ backgroundColor: 'rgba(10, 10, 15, 0.9)' }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      >
        <div className="w-full px-4 py-5 flex justify-between items-center">
          {/* Logo - Left aligned */}
          <div className="text-2xl font-bold text-white flex items-center pl-4">
            <span className="text-white font-orbitron tracking-widest uppercase">META AI ARMY</span>
          </div>
          
          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors font-orbitron uppercase"
            >
              About
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors font-orbitron uppercase"
            >
              Features
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => roadmapRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors font-orbitron uppercase"
            >
              Roadmap
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => teamRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors font-orbitron uppercase"
            >
              Team
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => faqRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors font-orbitron uppercase"
            >
              SSS
            </motion.button>
          </div>
          
          {/* CTA Buttons - Right aligned */}
          <div className="flex items-center gap-3 pr-4">
            <Link href="https://t.me/hedgehogaibot" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 15px rgba(200, 200, 200, 0.3)" 
                }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-md text-base font-medium transition-all hover:text-white font-orbitron uppercase"
              >
                JOIN DEMO
              </motion.button>
            </Link>
            
            <Link href="/pricing">
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 15px rgba(200, 200, 200, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-[#2a2a2a] text-white rounded-md text-base font-medium transition-all font-orbitron uppercase"
              >
                Start Now
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
          
          {/* Data streams effect - Only render on client side */}
          {isClient && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0.1, 
                    x: `${(i * 5) % 100}%`, 
                    y: -20, 
                    height: `${(i % 3) * 10 + 10}%` 
                  }}
                  animate={{ 
                    y: '120%', 
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ 
                    duration: (i % 5) + 10, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "linear"
                  }}
                  className="absolute w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
                />
              ))}
            </div>
          )}
          
          {/* Glitch effect overlay */}
          {isClient && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-[#050510]/0 via-[#050510]/50 to-[#050510]/0"
              style={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 0.4, 0.3],
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
          
          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-900/10 filter blur-[100px]"></div>
        </div>
        
        {/* 3D Robot with effects */}
        <div className="w-full h-[60vh] relative mt-16">
          {/* Shadow robots effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="absolute w-[300px] h-[300px] bg-blue-900/5 rounded-full filter blur-[50px]"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Energy pulse effect */}
            <motion.div 
              className="absolute w-[400px] h-[400px] border-2 border-blue-500/10 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0, 0.1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            {/* Floating data particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${10 + (i * 5)}%`,
                  top: `${15 + (i * 5)}%`,
                }}
                animate={{ 
                  x: [0, (i % 5) * 5, 0],
                  y: [0, (i % 3) * 5, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1 + (i % 5) * 0.1, 1]
                }}
                transition={{ 
                  duration: 2 + (i % 3), 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Main 3D Robot */}
      <SplineSceneBasic />
          
          {/* Holographic shadow robots */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute left-[35%] top-[50%] w-[100px] h-[200px] bg-blue-500/5 blur-md"
              style={{ 
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                left: "35%",
                top: "50%"
              }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                x: [-10, 10, -10]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute right-[35%] top-[50%] w-[100px] h-[200px] bg-indigo-500/5 blur-md"
              style={{ 
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                right: "35%",
                top: "50%"
              }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                x: [10, -10, 10]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-4 text-center z-10 mt-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-orbitron inline-block"
            style={{ 
              background: 'linear-gradient(-45deg, #ffffff, #a0a0a0, #d0d0d0, #ffffff)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(255, 255, 255, 0.3)',
              letterSpacing: '2px',
              animation: 'gradient 8s ease infinite',
              padding: '0',
              margin: '0 auto'
            }}
          >
            REVOLUTIONIZE YOUR WEB3 COMMUNITY
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-8 flex justify-center items-center"
          >
            
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="overflow-hidden whitespace-nowrap inline-block"
              style={{
                background: 'linear-gradient(-45deg, #4f9cf9, #a5c8ff, #6a8eff, #4f9cf9)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 15px rgba(79, 156, 249, 0.5)',
                fontWeight: 'bold',
                letterSpacing: '1px',
                animation: 'gradient 6s ease infinite',
                padding: '0',
                margin: '0'
              }}
            >
              AI-POWERED COMMUNITY MANAGEMENT
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="relative min-h-screen w-full bg-[#050505] overflow-hidden py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          
          {/* Animated circuit lines */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`circuit-h-${i}`}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"
                style={{
                  top: `${15 + i * 20}%`,
                  left: 0,
                  right: 0,
                  opacity: 0.2
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
            
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`circuit-v-${i}`}
                className="absolute w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent"
                style={{
                  left: `${15 + i * 20}%`,
                  top: 0,
                  bottom: 0,
                  opacity: 0.2
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-gray-400"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 5) % 100}%`,
                  opacity: 0.2
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.5, 1],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <AboutHeader />
          
          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative bg-[#0A0A0A] p-8 border border-gray-800 mb-12 overflow-hidden group"
            >
              {/* Robotic border effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent transition-all duration-300 group-hover:via-gray-300 group-hover:opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent transition-all duration-300 group-hover:via-gray-300 group-hover:opacity-80"></div>
              <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent transition-all duration-300 group-hover:via-gray-300 group-hover:opacity-80"></div>
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent transition-all duration-300 group-hover:via-gray-300 group-hover:opacity-80"></div>
              
              {/* Corner dots */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 group-hover:bg-gray-300 group-hover:w-3 group-hover:h-3 group-hover:shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 group-hover:bg-gray-300 group-hover:w-3 group-hover:h-3 group-hover:shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 group-hover:bg-gray-300 group-hover:w-3 group-hover:h-3 group-hover:shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-500 rounded-full transition-all duration-300 group-hover:bg-gray-300 group-hover:w-3 group-hover:h-3 group-hover:shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
              
              {/* Circuit board pattern on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H 90 V 90 H 10 Z' fill='none' stroke='rgba(200, 200, 200, 0.2)' stroke-width='0.5'/%3E%3Cpath d='M30 10 V 90 M 70 10 V 90 M 10 30 H 90 M 10 70 H 90' stroke='rgba(200, 200, 200, 0.2)' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='30' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='70' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='30' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='70' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='30' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='70' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='30' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='70' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3C/svg%3E")`,
                  backgroundSize: '50px 50px'
                }}
              ></div>
              
              {/* Animated scan line */}
              <motion.div
                className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-80 group-hover:via-gray-300 group-hover:h-[3px] group-hover:shadow-[0_0_5px_rgba(255,255,255,0.3)] transition-all duration-300"
                animate={{
                  top: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ opacity: 0.5 }}
              ></motion.div>
              
              {/* Additional scanlines on hover */}
              <motion.div
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                style={{ top: '33%' }}
                animate={{
                  y: [0, 5, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              
              <motion.div
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                style={{ top: '66%' }}
                animate={{
                  y: [0, -5, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5
                }}
              ></motion.div>
              
              {/* Digital noise effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 mix-blend-screen pointer-events-none transition-opacity duration-300">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={`noise-${i}`}
                    className="absolute bg-white"
                    style={{
                      width: '1px',
                      height: '1px',
                      left: `${(i * 3) % 100}%`,
                      top: `${(i * 5) % 100}%`,
                      opacity: 0.3,
                      boxShadow: '0 0 2px rgba(255, 255, 255, 0.7)'
                    }}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10 group-hover:text-gray-100 transition-colors duration-300" style={{ fontFamily: 'Roboto Mono, monospace', letterSpacing: '0.5px' }}>
                <span className="text-white font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">META AI ARMY</span> is a cutting-edge AI-powered community management platform designed specifically for 
                <span className="text-white font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"> Web3 projects</span>. Our solution helps blockchain projects, DAOs, and crypto communities build engaged, informed, and active communities.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10 group-hover:text-gray-100 transition-colors duration-300" style={{ fontFamily: 'Roboto Mono, monospace', letterSpacing: '0.5px' }}>
                With advanced natural language processing and machine learning capabilities, our AI bots understand the 
                <span className="text-white font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"> nuances of blockchain technology</span>, tokenomics, and the unique language of the crypto ecosystem, providing intelligent and context-aware interactions that keep your community engaged and informed.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="relative bg-[#0A0A0A] p-8 border border-gray-800 overflow-hidden group"
              >
                {/* Robotic elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Circuit board pattern on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H 90 V 90 H 10 Z' fill='none' stroke='rgba(200, 200, 200, 0.2)' stroke-width='0.5'/%3E%3Cpath d='M30 10 V 90 M 70 10 V 90 M 10 30 H 90 M 10 70 H 90' stroke='rgba(200, 200, 200, 0.2)' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='30' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='70' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='30' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='70' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='30' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='70' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='30' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='70' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3C/svg%3E")`,
                    backgroundSize: '50px 50px'
                  }}
                ></div>
                
                {/* Scanline effect on hover */}
                <motion.div
                  className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-80 group-hover:via-gray-300 group-hover:h-[3px] group-hover:shadow-[0_0_5px_rgba(255,255,255,0.3)] transition-all duration-300"
                  animate={{
                    top: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ opacity: 0.5 }}
                ></motion.div>
                
                <motion.div
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                  style={{ top: '33%' }}
                  animate={{
                    y: [0, 5, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                
                <motion.div
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                  style={{ top: '66%' }}
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.5
                  }}
                ></motion.div>
                
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-800/10 to-gray-800/0 opacity-0 group-hover:opacity-100"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                ></motion.div>
                
                {/* Digital noise effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 mix-blend-screen pointer-events-none transition-opacity duration-300">
                  {[...Array(30)].map((_, i) => (
                    <div 
                      key={`noise-${i}`}
                      className="absolute bg-white"
                      style={{
                        width: '1px',
                        height: '1px',
                        left: `${(i * 3) % 100}%`,
                        top: `${(i * 5) % 100}%`,
                        opacity: 0.3,
                        boxShadow: '0 0 2px rgba(255, 255, 255, 0.7)'
                      }}
                    />
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2 text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300" style={{ fontFamily: 'Space Mono, monospace', letterSpacing: '2px' }}>
                  OUR MISSION
                </h3>
                <p className="text-gray-300 relative z-10 group-hover:text-gray-100 transition-colors duration-300" style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.95rem' }}>
                  To revolutionize community management in the Web3 space by providing AI-powered tools that create vibrant, engaged, and well-informed communities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative bg-[#0A0A0A] p-8 border border-gray-800 overflow-hidden group"
              >
                {/* Robotic elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Circuit board pattern on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H 90 V 90 H 10 Z' fill='none' stroke='rgba(200, 200, 200, 0.2)' stroke-width='0.5'/%3E%3Cpath d='M30 10 V 90 M 70 10 V 90 M 10 30 H 90 M 10 70 H 90' stroke='rgba(200, 200, 200, 0.2)' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='30' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='10' cy='70' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='30' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='70' cy='10' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='30' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='70' cy='90' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='30' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3Ccircle cx='90' cy='70' r='2' fill='rgba(200, 200, 200, 0.3)'/%3E%3C/svg%3E")`,
                    backgroundSize: '50px 50px'
                  }}
                ></div>
                
                {/* Scanline effect on hover */}
                <motion.div
                  className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-80 group-hover:via-gray-300 group-hover:h-[3px] group-hover:shadow-[0_0_5px_rgba(255,255,255,0.3)] transition-all duration-300"
                  animate={{
                    top: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ opacity: 0.5 }}
                ></motion.div>
                
                <motion.div
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                  style={{ top: '33%' }}
                  animate={{
                    y: [0, 5, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                
                <motion.div
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                  style={{ top: '66%' }}
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.5
                  }}
                ></motion.div>
                
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-800/10 to-gray-800/0 opacity-0 group-hover:opacity-100"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                ></motion.div>
                
                {/* Digital noise effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 mix-blend-screen pointer-events-none transition-opacity duration-300">
                  {[...Array(30)].map((_, i) => (
                    <div 
                      key={`noise-${i}`}
                      className="absolute bg-white"
                      style={{
                        width: '1px',
                        height: '1px',
                        left: `${(i * 3) % 100}%`,
                        top: `${(i * 5) % 100}%`,
                        opacity: 0.3,
                        boxShadow: '0 0 2px rgba(255, 255, 255, 0.7)'
                      }}
                    />
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2 text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300" style={{ fontFamily: 'Space Mono, monospace', letterSpacing: '2px' }}>
                  OUR VISION
                </h3>
                <p className="text-gray-300 relative z-10 group-hover:text-gray-100 transition-colors duration-300" style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.95rem' }}>
                  A future where Web3 communities thrive through intelligent, automated engagement that enhances human connection rather than replacing it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="relative py-24 bg-[#050505]">
        {/* Simple subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0a0a0a] opacity-80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block relative"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                SYSTEM CAPABILITIES
              </h2>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  width: ["0%", "100%", "0%"],
                  left: ["0%", "0%", "100%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto mt-6"
              style={{ fontFamily: 'Roboto Mono, monospace' }}
            >
              Advanced AI-powered tools designed to optimize and enhance your Web3 community management experience.
            </motion.p>
          </div>
          
          {/* Features grid - improved layout with offset and different sizes */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {features.map((feature, index) => {
                // Farklı boyutlar ve konumlar için sınıflar
                const sizeClasses = {
                  large: "md:col-span-8 md:row-span-2",
                  medium: "md:col-span-4",
                  small: "md:col-span-4"
                };
                
                // Offset pozisyonları için özel sınıflar
                const offsetClasses = [
                  "", // İlk kart için offset yok
                  "md:col-start-5", // İkinci kart için offset
                  "md:col-start-9", // Üçüncü kart için offset
                  "md:col-start-1", // Dördüncü kart için offset
                  "md:col-start-9", // Beşinci kart için offset
                  "md:col-start-5", // Altıncı kart için offset
                ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${sizeClasses[feature.size]} ${offsetClasses[index]}`}
                  >
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      color={feature.color}
                      delay={index * 0.1}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Simple status indicator */}
          <div className="mt-16 flex justify-center">
            <motion.div 
              className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-800 bg-[#0a0a0a]"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(255, 255, 255, 0)',
                  '0 0 5px rgba(255, 255, 255, 0.1)',
                  '0 0 0px rgba(255, 255, 255, 0)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="w-2 h-2 rounded-full bg-white opacity-70"></span>
              <span className="text-xs text-gray-400 font-mono tracking-widest">SYSTEM OPERATIONAL</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section ref={roadmapRef} className="py-24 relative">
        {/* Arka plan efektleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Başlık */}
        <div className="relative z-10 w-full max-w-6xl mx-auto mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Roadmap
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Hedgehog AI Army'nin gelecek vizyonu ve kilometre taşları
          </motion.p>
        </div>

        {/* Zaman çizelgesi */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          {/* Zaman çizgisi çizgisi */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full hidden md:block"></div>
          
          {/* Milestone kartları */}
          <div className="space-y-12 md:space-y-0 relative">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}
              >
                {/* Zaman çizgisi noktası */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white"
                  style={{
                    background: milestone.color === 'blue' ? 'linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)' :
                              milestone.color === 'purple' ? 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)' :
                              milestone.color === 'green' ? 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' :
                              'linear-gradient(90deg, #f59e0b 0%, #f97316 100%)',
                    boxShadow: `0 0 15px 0 rgba(${milestone.color === 'blue' ? '56, 189, 248' : milestone.color === 'purple' ? '168, 85, 247' : milestone.color === 'green' ? '52, 211, 153' : '249, 115, 22'}, 0.7)`,
                    top: `calc(${index * 25}% + 1.5rem)`
                  }}
                ></div>
                
                {/* Milestone kartı */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <MilestoneCard {...milestone} />
                </div>
                
                {/* Boş alan */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>

        {/* Section title */}
        <div className="relative z-10 w-full max-w-6xl mx-auto mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Tanışın, Hedgehog AI Army'nin arkasındaki yenilikçi ekip
          </motion.p>
        </div>

        {/* Team members grid */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard 
              name="Emir Solana" 
              title="Founder & CEO" 
              twitter="@EmirSolana" 
              delay={0.1}
            />
            <TeamMemberCard 
              name="Ege Crypto" 
              title="Lead Developer" 
              twitter="@EgeCrypto" 
              delay={0.2}
            />
            <TeamMemberCard 
              name="Caner Yakupoglu" 
              title="Marketing Lead" 
              twitter="@CanerYakupoglu" 
              isHighlighted={true}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
            <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
          </div>
        </div>

        {/* Section title */}
        <div className="relative z-10 w-full max-w-4xl mx-auto mb-16 text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500"
          >
            Sık Sorulan Sorular
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Hedgehog AI Army hakkında merak ettiğiniz her şey
          </motion.p>
        </div>

        {/* FAQ accordion */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <div className="bg-[#0D0E12]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-2 md:p-6">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          {/* Additional help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6">Başka sorularınız mı var? Bizimle iletişime geçin</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium transition-all"
              >
                İletişime Geçin
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-[#060611]">
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
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">transform</span> your Web3 community?
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
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md font-medium transition-all"
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

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
}


