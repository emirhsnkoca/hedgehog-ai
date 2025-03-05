'use client'

import React from 'react';
import GravityComponent from '@/components/ui/gravity';
import { FaRobot, FaCode, FaLightbulb, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Hedgehog AI Hakkında
          </h1>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto">
            Geleceğin kod geliştirme asistanı ile tanışın. Yapay zeka destekli, güvenli ve hızlı.
          </p>
        </div>
        
        <GravityComponent items={features} className="bg-black/30" />
      </div>
    </div>
  );
} 