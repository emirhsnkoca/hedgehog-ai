'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Özel font için stil
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap');
`;

// Teknoloji kartları için veri
const technologies = [
  { id: 1, name: 'YAPAY ZEKA', description: 'Gelişmiş doğal dil işleme ve makine öğrenimi algoritmaları' },
  { id: 2, name: 'BLOCKCHAIN', description: 'Güvenli ve şeffaf işlemler için dağıtık defter teknolojisi' },
  { id: 3, name: 'WEB3', description: 'Merkeziyetsiz internet için yeni nesil web teknolojileri' },
  { id: 4, name: 'TOPLULUK', description: 'Aktif ve etkileşimli topluluk yönetim araçları' }
];

// Ekip üyeleri için veri
const teamMembers = [
  { 
    id: 1, 
    name: 'AHMET YILMAZ', 
    role: 'KURUCU & CTO', 
    bio: 'Yapay zeka ve blockchain alanında 10+ yıl deneyim',
    social: { linkedin: '#', github: '#', twitter: '#' }
  },
  { 
    id: 2, 
    name: 'ZEYNEP KAYA', 
    role: 'YAPAY ZEKA MÜHENDİSİ', 
    bio: 'Doğal dil işleme ve makine öğrenimi uzmanı',
    social: { linkedin: '#', github: '#' }
  },
  { 
    id: 3, 
    name: 'MEHMET DEMİR', 
    role: 'BLOCKCHAIN GELİŞTİRİCİ', 
    bio: 'Smart contract ve dApp geliştirme konusunda uzman',
    social: { linkedin: '#', twitter: '#' }
  },
  { 
    id: 4, 
    name: 'AYŞE YILDIZ', 
    role: 'TOPLULUK YÖNETİCİSİ', 
    bio: 'Dijital topluluk yönetimi ve kullanıcı deneyimi tasarımcısı',
    social: { linkedin: '#', twitter: '#' }
  }
];

// Animasyon varyantları
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <style>{fontStyle}</style>
      
      {/* Grid arka plan */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      
      {/* Ana içerik */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Başlık bölümü */}
        <motion.div 
          className="text-center mb-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ 
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '3px',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
            }}
          >
            META AI ARMY - YENİ TASARIM
          </h1>
          <p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Roboto Mono, monospace',
              letterSpacing: '1px'
            }}
          >
            YAPAY ZEKA DESTEKLİ TOPLULUK YÖNETİM PLATFORMU
          </p>
        </motion.div>
        
        {/* Ana açıklama bölümü */}
        <motion.div 
          className="mb-24 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="bg-[#0A0A0A] p-8 border border-gray-800">
            <p 
              className="text-gray-300 leading-relaxed"
              style={{ 
                fontFamily: 'Roboto Mono, monospace',
                letterSpacing: '0.5px'
              }}
            >
              <span className="text-white font-bold">META AI ARMY</span>, Web3 ve kripto topluluklarınız için özel olarak tasarlanmış, 
              <span className="text-white font-bold"> yapay zeka destekli bir topluluk yönetim platformudur</span>. 
              Blockchain projeleri, DAO'lar ve kripto toplulukları için geliştirilmiş olan platformumuz, 
              <span className="text-white font-bold"> ileri düzey doğal dil işleme</span> kullanarak topluluğunuzu daha aktif ve bilgili hale getirir.
            </p>
          </div>
        </motion.div>
        
        {/* Misyon ve Vizyon bölümü */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-24"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-[#0A0A0A] p-8 border border-gray-800"
            variants={itemVariant}
          >
            <h2 
              className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2"
              style={{ 
                fontFamily: 'Space Mono, monospace',
                letterSpacing: '2px'
              }}
            >
              MİSYONUMUZ
            </h2>
            <p 
              className="text-gray-300"
              style={{ 
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '0.95rem'
              }}
            >
              Web3 topluluklarını güçlendirmek ve blockchain projelerinin başarısını artırmak için yapay zeka destekli topluluk yönetim araçları geliştirmek. Toplulukları daha aktif, bilgili ve etkileşimli hale getirerek projelerin büyümesine katkıda bulunmak.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#0A0A0A] p-8 border border-gray-800"
            variants={itemVariant}
          >
            <h2 
              className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2"
              style={{ 
                fontFamily: 'Space Mono, monospace',
                letterSpacing: '2px'
              }}
            >
              VİZYONUMUZ
            </h2>
            <p 
              className="text-gray-300"
              style={{ 
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '0.95rem'
              }}
            >
              Web3 ekosisteminde topluluk yönetimi için tercih edilen platform olmak. Yapay zeka teknolojilerini kullanarak toplulukların insan bağlantısını güçlendirmek, otomatik moderasyon ve içerik üretimi ile topluluk yöneticilerinin işini kolaylaştırmak.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Teknolojiler bölümü */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '2px'
            }}
          >
            TEKNOLOJİLERİMİZ
          </h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {technologies.map((tech) => (
              <motion.div 
                key={tech.id}
                className="bg-[#0A0A0A] p-6 border border-gray-800 hover:border-gray-700 transition-colors"
                variants={itemVariant}
              >
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'Space Mono, monospace',
                    letterSpacing: '1px'
                  }}
                >
                  {tech.name}
                </h3>
                <p 
                  className="text-gray-400"
                  style={{ 
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '0.9rem'
                  }}
                >
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Ekip bölümü */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '2px'
            }}
          >
            EKİBİMİZ
          </h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                className="bg-[#0A0A0A] p-6 border border-gray-800 hover:border-gray-700 transition-colors"
                variants={itemVariant}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                </div>
                
                <h3 
                  className="text-center text-lg font-bold mb-1"
                  style={{ 
                    fontFamily: 'Space Mono, monospace',
                    letterSpacing: '1px'
                  }}
                >
                  {member.name}
                </h3>
                
                <p 
                  className="text-center text-gray-500 mb-3"
                  style={{ 
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '0.8rem'
                  }}
                >
                  {member.role}
                </p>
                
                <p 
                  className="text-center text-gray-400 mb-4"
                  style={{ 
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '0.9rem'
                  }}
                >
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-gray-300 transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-500 hover:text-gray-300 transition-colors">
                      <FaGithub size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-500 hover:text-gray-300 transition-colors">
                      <FaTwitter size={18} />
                    </a>
                  )}
        </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* İletişim bölümü */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 
            className="text-3xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '2px'
            }}
          >
            İLETİŞİM
          </h2>
          
          <div className="bg-[#0A0A0A] p-8 border border-gray-800">
            <form className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-gray-400"
                  style={{ 
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.9rem'
                  }}
                >
                  İSİM
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#121212] border border-gray-800 p-3 text-white focus:outline-none focus:border-gray-700"
                  style={{ 
                    fontFamily: 'Roboto Mono, monospace'
                  }}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-gray-400"
                  style={{ 
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.9rem'
                  }}
                >
                  E-POSTA
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#121212] border border-gray-800 p-3 text-white focus:outline-none focus:border-gray-700"
                  style={{ 
                    fontFamily: 'Roboto Mono, monospace'
                  }}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-gray-400"
                  style={{ 
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.9rem'
                  }}
                >
                  MESAJ
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-[#121212] border border-gray-800 p-3 text-white focus:outline-none focus:border-gray-700"
                  style={{ 
                    fontFamily: 'Roboto Mono, monospace'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gray-800 hover:bg-gray-700 text-white p-3 transition-colors"
                style={{ 
                  fontFamily: 'Space Mono, monospace',
                  letterSpacing: '1px'
                }}
              >
                GÖNDER
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 