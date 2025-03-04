'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
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
        <div className="relative mb-4 py-4">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-600 animate-text-glow leading-normal tracking-normal px-4 py-2" style={{ textRendering: 'geometricPrecision' }}>
            Hedgehog AI Bot
          </h1>
        </div>
      </div>
    </Card>
  )
} 