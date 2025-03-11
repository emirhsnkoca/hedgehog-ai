'use client'

import React, { useEffect } from 'react';
import GravityComponent from '@/components/ui/gravity';
import { FaRobot, FaCode, FaLightbulb, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Özel font için stil ekleyelim
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
`;

const features = [
  {
    id: '1',
    title: 'Yapay Zeka Destekli',
    description: 'En son yapay zeka teknolojileri ile güçlendirilmiş, akıllı ve öğrenen bir asistan.',
    icon: <FaRobot className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'Kod Geliştirme',
    description: 'Hızlı ve etkili kod geliştirme desteği, otomatik tamamlama ve hata düzeltme.',
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    id: '3',
    title: 'Akıllı Öneriler',
    description: 'Projenize özel akıllı öneriler ve en iyi uygulama tavsiyeleri.',
    icon: <FaLightbulb className="w-6 h-6" />,
  },
  {
    id: '4',
    title: 'Hızlı Entegrasyon',
    description: 'Mevcut projelerinize kolay ve hızlı entegrasyon imkanı.',
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    id: '5',
    title: 'Güvenlik Odaklı',
    description: 'En yüksek güvenlik standartları ile korunan verileriniz ve kodlarınız.',
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    id: '6',
    title: 'Topluluk Desteği',
    description: 'Aktif geliştirici topluluğu ve sürekli güncellenen özellikler.',
    icon: <FaUsers className="w-6 h-6" />,
  },
];

// Misyon ve Vizyon içeriği
const missionVision = [
  {
    id: 'mission',
    title: 'Misyonumuz',
    content: 'Yapay zeka teknolojilerini kullanarak yazılım geliştirme süreçlerini daha verimli, daha hızlı ve daha erişilebilir hale getirmek. Hedgehog AI olarak, her seviyedeki geliştiricinin potansiyelini en üst düzeye çıkarmasına yardımcı olmayı hedefliyoruz.'
  },
  {
    id: 'vision',
    title: 'Vizyonumuz',
    content: 'Yapay zeka destekli kod geliştirme asistanları alanında lider olmak ve yazılım geliştirme süreçlerini demokratikleştirerek herkesin fikirlerini hayata geçirebilmesini sağlamak. Teknolojinin gücünü herkes için erişilebilir kılmayı amaçlıyoruz.'
  }
];

// Animasyon varyantları
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const cardHover = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(255, 255, 255, 0.1)" },
  hover: { 
    scale: 1.02, 
    boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.15)",
    transition: { duration: 0.3 }
  }
};

export default function AboutPage() {
  // Sayfa yüklendiğinde animasyon için
  useEffect(() => {
    // Arka plan parçacıkları için gerekirse buraya kod eklenebilir
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden">
      {/* Arka plan grid efekti */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      
      {/* Hareketli parçacıklar */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Başlık Bölümü */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <style>{fontStyle}</style>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 10px rgba(150, 150, 150, 0.5)'
            }}
          >
            Hedgehog AI Hakkında
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Geleceğin kod geliştirme asistanı ile tanışın. Yapay zeka destekli, güvenli ve hızlı.
          </motion.p>
        </motion.div>
        
        {/* Ana Açıklama Bölümü */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover="hover"
        >
          <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <p className="text-gray-200 leading-relaxed">
              <span className="font-bold">Hedgehog AI</span>, yazılım geliştirme süreçlerinizi dönüştürmek için tasarlanmış, 
              <span className="font-bold"> yapay zeka destekli bir kod asistanıdır</span>. 
              Modern yazılım geliştirme ihtiyaçlarını karşılamak üzere geliştirilmiş olan asistanımız, 
              <span className="font-bold"> en son teknolojileri</span> kullanarak size hızlı, güvenilir ve akıllı bir kodlama deneyimi sunar.
              Hedgehog AI ile projelerinizi daha hızlı tamamlayın, kod kalitesini artırın ve yazılım geliştirme süreçlerinizi optimize edin.
            </p>
          </div>
        </motion.div>
        
        {/* Misyon ve Vizyon Bölümü */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missionVision.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.2
                  }
                }
              }}
              whileHover="hover"
            >
              <h2 className="text-2xl font-bold text-white mb-2 relative inline-block">
                {item.title}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-gray-300">{item.content}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Özellikler Bölümü */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <GravityComponent items={features} className="bg-black/30" />
        </motion.div>
      </div>
      
      {/* Animasyon için global stiller */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
} 