'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function SplineSceneBasic() {
  const [mainText, setMainText] = useState("");
  const [subText, setSubText] = useState("");
  const fullMainText = "Hedgehog AI Bot";
  const fullSubText = "AI Assistant";

  useEffect(() => {
    let mainIndex = 0;
    let subIndex = 0;
    
    // Ana başlık için daktilo efekti - 80ms'ye düşürdüm
    const mainInterval = setInterval(() => {
      if (mainIndex <= fullMainText.length) {
        setMainText(fullMainText.slice(0, mainIndex));
        mainIndex++;
      } else {
        clearInterval(mainInterval);
        
        // Alt yazı için daktilo efekti - 50ms'ye düşürdüm
        const subInterval = setInterval(() => {
          if (subIndex <= fullSubText.length) {
            setSubText(fullSubText.slice(0, subIndex));
            subIndex++;
          } else {
            clearInterval(subInterval);
          }
        }, 60);
      }
    }, 80);

    return () => {
      clearInterval(mainInterval);
    };
  }, []);

  return (
    <Card className="w-full min-h-screen bg-black relative overflow-hidden border-0">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo ve İsim */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-20 w-20">
                <Image
                  src="/hedgehog-logo-glow.png"
                  alt="Hedgehog AI"
                  width={80}
                  height={80}
                  className="object-contain transition-all duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff1b6b] to-[#7928ca] transition-all duration-300 group-hover:opacity-80">
                Hedgehog AI
              </span>
            </Link>

            {/* Menü Butonları */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-lg text-purple-300 hover:text-[#e02acd] transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-lg text-purple-300 hover:text-[#e02acd] transition-colors">
                Features
              </Link>
              <Link href="/roadmap" className="text-lg text-purple-300 hover:text-[#e02acd] transition-colors">
                Roadmap
              </Link>
              <Link href="/team" className="text-lg text-purple-300 hover:text-[#e02acd] transition-colors">
                Team
              </Link>
              <Link href="/docs" className="text-lg text-purple-300 hover:text-[#e02acd] transition-colors">
                Docs
              </Link>
            </div>

            {/* Sosyal Medya İkonları */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://twitter.com/hedgehog_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-[#e02acd] transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/hedgehog_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-[#e02acd] transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.92 1.22-5.41 3.57-.51.35-.97.52-1.39.51-.46-.01-1.33-.26-1.98-.48-.8-.27-1.44-.42-1.38-.89.03-.25.37-.51 1.02-.78 4.01-1.74 6.69-2.89 8.04-3.45 3.82-1.59 4.61-1.87 5.13-1.88.12 0 .37.03.54.18.14.12.18.28.2.45-.02.07-.02.2-.03.31z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Scene container - positioned absolutely to cover entire viewport */}
      <div className="fixed inset-0 w-full h-full">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full pointer-events-auto"
        />
      </div>

      {/* Content layer - positioned above the 3D scene */}
      <div className="relative z-[1] flex flex-col h-screen items-center justify-start pt-32 text-center pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          size={400}
        />
        <div className="relative mb-4 py-8">
          <h1 
            className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#ff1b6b] via-[#e02acd] to-[#7928ca] animate-gradient-x"
            style={{
              lineHeight: '1.4',
              paddingBottom: '0.2em',
              paddingTop: '0.1em',
              textRendering: 'geometricPrecision'
            }}
          >
            {mainText}<span className="animate-blink">|</span>
          </h1>
        </div>
      </div>

      {/* AI Assistant text behind the robot */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div 
          className="text-2xl md:text-3xl font-mono tracking-wide text-[#e02acd]"
          style={{
            lineHeight: '1.4',
            paddingBottom: '0.1em'
          }}
        >
          {subText}<span className="animate-blink">|</span>
        </div>
      </div>

      <style jsx global>{`
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient 4s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-blink {
          animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Card>
  )
} 