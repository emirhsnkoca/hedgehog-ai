"use client"

import { SplineSceneBasic } from "@/components/ui/code.demo";
import { motion, useScroll, useTransform } from "framer-motion";
import { Squares } from "@/components/ui/squares-background";
import Link from "next/link";
import { useRef, useState } from "react";

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

export default function Home() {
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
      color: "purple"
    },
    {
      icon: "💬",
      title: "Real-Time Engagement",
      description: "Our AI bots respond dynamically to community discussions, mentioning users by name, asking follow-up questions, and sparking meaningful conversations.",
      color: "blue"
    },
    {
      icon: "🛡️",
      title: "Automated Moderation & FUD Control",
      description: "Protect your community with AI-driven moderation that detects and addresses misinformation in real-time. Our system identifies potential FUD and responds with accurate information.",
      color: "cyan"
    },
    {
      icon: "🚀",
      title: "Web3 & Crypto-Specific AI",
      description: "Our AI is specifically trained on Web3 and cryptocurrency concepts, capable of discussing tokenomics, project roadmaps, technical implementations, and investment strategies.",
      color: "pink"
    }
  ];

  // Milestone verileri
  const milestones = [
    {
      quarter: "Q2",
      year: "2024",
      title: "AI Army MVP Launch",
      items: [
        "Initial Telegram integration",
        "Core AI bot functionality",
        "Basic user dashboard",
        "Community management tools"
      ],
      color: "blue",
      delay: 0.1
    },
    {
      quarter: "Q3",
      year: "2024",
      title: "Smart Dashboard & Payments",
      items: [
        "Advanced analytics dashboard",
        "AI bot improvements and new features",
        "Crypto payment integration",
        "Enhanced user management"
      ],
      color: "purple",
      delay: 0.2
    },
    {
      quarter: "Q4",
      year: "2024",
      title: "Platform Expansion",
      items: [
        "Advanced NLP-based AI capabilities",
        "Discord bot integration",
        "NFT utilities and integration",
        "Expanded community tools"
      ],
      color: "green",
      delay: 0.3
    },
    {
      quarter: "Q1",
      year: "2025",
      title: "Ecosystem Growth",
      items: [
        "Multi-language support",
        "Strategic ecosystem partnerships",
        "New platform features and improvements",
        "Enhanced security protocols"
      ],
      color: "orange",
      delay: 0.4
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "AI Army'yi diğer topluluk yönetim araçlarından farklı kılan nedir?",
      answer: "Hedgehog AI Army, Web3 ve kripto odaklı özel olarak eğitilmiş yapay zeka ile çalışır. Diğer araçların aksine, botlarımız sadece basit yanıtlar vermekle kalmaz, aynı zamanda topluluk üyeleriyle gerçek zamanlı etkileşime girer, kullanıcıları isimle anar, takip soruları sorar ve anlamlı konuşmalar başlatır. Ayrıca, özelleştirilebilir AI kişilikleri, otomatik moderasyon ve FUD kontrolü gibi özelliklere sahiptir."
    },
    {
      question: "AI botlarını Telegram grubuma nasıl entegre ederim?",
      answer: "Entegrasyon süreci oldukça basittir. Hesabınızı oluşturduktan sonra, kontrol panelinizden 'Bot Ekle' seçeneğini seçin ve Telegram grubunuzun bağlantısını girin. Sistem size bir bot token'ı verecektir. Bu token'ı Telegram'da @BotFather ile paylaşarak botunuzu oluşturun ve ardından botunuzu grubunuza ekleyin. Tüm süreç için detaylı adım adım kılavuzumuz mevcuttur ve teknik destek ekibimiz her zaman yardıma hazırdır."
    },
    {
      question: "Hangi ödeme yöntemleri kullanılabilir?",
      answer: "Hem geleneksel hem de kripto ödeme yöntemlerini destekliyoruz. Kredi kartı, banka havalesi gibi geleneksel yöntemlerin yanı sıra Bitcoin, Ethereum, Solana ve diğer popüler kripto para birimleriyle ödeme yapabilirsiniz. Kripto ödemelerde %10 indirim sunuyoruz ve aboneliklerinizi otomatik yenileme seçeneği de mevcuttur."
    },
    {
      question: "AI botlarımı özelleştirebilir miyim?",
      answer: "Kesinlikle! Hedgehog AI Army'nin en güçlü özelliklerinden biri tam özelleştirme imkanıdır. Botlarınızın kişiliğini, yanıt tarzını ve bilgi tabanını özelleştirebilirsiniz. Heyecanlı Hype Oluşturuculardan analitik Şüphecilere ve dikkatli Moderatörlere kadar çeşitli AI kişilikleri oluşturabilirsiniz. Ayrıca, botlarınızın projenizin belirli yönlerine odaklanmasını sağlayabilir ve belirli anahtar kelimelere veya konulara nasıl yanıt vereceğini belirleyebilirsiniz."
    },
    {
      question: "Aboneliğimi iptal edersem ne olur?",
      answer: "Aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal işlemi, mevcut fatura döneminin sonunda geçerli olur ve bu süre boyunca tüm hizmetlere erişiminiz devam eder. Fatura dönemi sona erdiğinde, botlarınız devre dışı kalır ancak yapılandırma ayarlarınız ve verileriniz 30 gün daha sistemimizde saklanır. Bu süre içinde aboneliğinizi yenilerseniz, kaldığınız yerden devam edebilirsiniz. 30 günün sonunda, verileriniz sistemden tamamen silinir."
    }
  ];

  return (
    <main className="relative bg-[#050510] text-white">
      {/* Navbar - Semi-transparent, becomes darker on scroll */}
      <motion.nav 
        initial={{ backgroundColor: 'rgba(5, 5, 16, 0)' }}
        animate={{ backgroundColor: 'rgba(5, 5, 16, 0.8)' }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-white flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">META AI ARMY</span>
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              About
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => roadmapRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Roadmap
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => teamRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Team
            </motion.button>
            <motion.button
              whileHover={{ y: -2, color: '#fff' }}
              onClick={() => faqRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              SSS
            </motion.button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link href="https://t.me/hedgehogaibot" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)" 
                }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 bg-[#0a0a20] border border-blue-600/30 text-blue-400 rounded-md text-sm font-medium transition-all hover:text-white"
              >
                Join Demo
              </motion.button>
            </Link>
            
            <Link href="/pricing">
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 15px rgba(37, 99, 235, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium transition-all"
              >
                Start Now
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
          
          {/* Data streams effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0.1, 
                  x: `${Math.random() * 100}%`, 
                  y: -20, 
                  height: `${Math.random() * 30 + 10}%` 
                }}
                animate={{ 
                  y: '120%', 
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10, 
                  repeat: Infinity, 
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                className="absolute w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
              />
            ))}
          </div>
          
          {/* Glitch effect overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-[#050510]/0 via-[#050510]/50 to-[#050510]/0 opacity-30"
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
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                animate={{ 
                  x: [0, Math.random() * 40 - 20, 0],
                  y: [0, Math.random() * 40 - 20, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, Math.random() + 0.5, 1]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
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
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
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
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
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
        <div className="container mx-auto px-4 text-center z-10 mt-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-orbitron"
            style={{ 
              textShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
            }}
          >
            REVOLUTIONIZE YOUR WEB3 COMMUNITY
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-8 text-gray-300 flex justify-center items-center"
          >
            <span className="mr-2">META AI ARMY –</span>
            <motion.span
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                times: [0, 0.1, 0.9, 1]
              }}
              className="text-blue-400"
            >
              |
            </motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="overflow-hidden whitespace-nowrap text-blue-400"
            >
              AI-POWERED COMMUNITY MANAGEMENT
            </motion.span>
          </motion.div>
          
          {/* Main CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="https://t.me/hedgehogaibot" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 rounded-md font-bold text-lg transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Join the Live Demo</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 z-0"
                  animate={{ 
                    x: ['-100%', '100%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ opacity: 0.5 }}
                />
              </motion.button>
            </Link>
            
            <Link href="/pricing">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 15px rgba(37, 99, 235, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-blue-600 rounded-md font-bold text-lg transition-all relative overflow-hidden"
              >
                <span className="relative z-10">Start Now</span>
                <motion.span 
                  className="absolute inset-0 bg-blue-600/10 z-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-gray-400 text-sm">Scroll down</span>
          <svg 
            className="w-6 h-6 text-blue-500" 
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

      {/* About Section */}
      <section ref={aboutRef} id="about" className="relative min-h-screen w-full bg-[#060606] overflow-hidden py-20">
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
            About Meta AI Army
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 mb-12"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Meta AI Army is a cutting-edge AI-powered community management platform designed specifically for Web3 projects. Our solution helps blockchain projects, DAOs, and crypto communities build engaged, informed, and active communities.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With advanced natural language processing and machine learning capabilities, our AI bots understand the nuances of blockchain technology, tokenomics, and the unique language of the crypto ecosystem, providing intelligent and context-aware interactions that keep your community engaged and informed.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-400">Our Mission</h3>
                <p className="text-gray-400">
                  To revolutionize community management in the Web3 space by providing AI-powered tools that create vibrant, engaged, and well-informed communities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400">Our Vision</h3>
                <p className="text-gray-400">
                  A future where Web3 communities thrive through intelligent, automated engagement that enhances human connection rather than replacing it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="relative py-24 bg-[#050510] overflow-hidden">
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how Meta AI Army transforms your Web3 community engagement with advanced AI capabilities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>
          
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
