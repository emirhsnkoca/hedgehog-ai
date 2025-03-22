'use client'

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { lazy, Suspense, useEffect, useState } from 'react';

// Spotlight bileşenini dinamik olarak import ediyoruz
const Spotlight = lazy(() => import('@/components/ui/spotlight').then(mod => ({ default: mod.Spotlight })));

export function SplineSceneBasic() {
  const [mainText, setMainText] = useState("");
  const [subText, setSubText] = useState("");
  const fullMainText = "";
  const fullSubText = "";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    let mainIndex = 0;
    let subIndex = 0;
    
    // Typewriter effect for main title - reduced to 80ms
    const mainInterval = setInterval(() => {
      if (mainIndex <= fullMainText.length) {
        setMainText(fullMainText.slice(0, mainIndex));
        mainIndex++;
      } else {
        clearInterval(mainInterval);
        
        // Typewriter effect for subtitle - reduced to 60ms
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
      {/* 3D Scene container - changing from fixed to absolute positioning */}
      <div className="absolute inset-0 w-full h-full">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full pointer-events-auto"
        />
      </div>

      {/* Content layer - positioned above the 3D scene */}
      <div className="relative z-[1] flex flex-col h-screen items-center justify-start pt-32 text-center pointer-events-none">
        {/* Spotlight sadece istemci tarafında render edilmeli */}
        {isClient && (
          <Suspense fallback={null}>
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              size={400}
            />
          </Suspense>
        )}
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
            {mainText}
          </h1>
        </div>
      </div>

      {/* AI Assistant text behind the robot - changing from fixed to absolute */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div 
          className="text-2xl md:text-3xl font-mono tracking-wide text-[#e02acd]"
          style={{
            lineHeight: '1.4',
            paddingBottom: '0.1em'
          }}
        >
          {subText}
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
        
        .nav-typewriter {
          position: relative;
          display: inline-block;
        }
        
        .nav-typewriter::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #e02acd;
          transition: width 0.3s ease;
        }
        
        .nav-typewriter:hover::before {
          width: 100%;
        }
      `}</style>
    </Card>
  )
} 