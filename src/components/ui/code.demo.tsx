'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-screen bg-black relative overflow-hidden border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={400}
      />
      
      <div className="flex flex-col h-screen items-center justify-start pt-32 text-center relative">
        <div className="relative z-10 mb-4">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-600 animate-text-glow filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] antialiased subpixel-antialiased tracking-normal">
            Hedgehog AI Bot
          </h1>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[85vh]">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 