'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useEffect, useState } from 'react'

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