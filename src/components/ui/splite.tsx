'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Bu bileşenin üst div'i için IntersectionObserver kullanarak görünürlüğü kontrol et
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport'u gözlemle
        rootMargin: '0px',
        threshold: 0.1, // %10 görünür olduğunda tetikle
      }
    );
    
    // Bileşen DOM'a eklendiğinde parent div'i gözlemle
    const parent = document.getElementById('robot-section');
    if (parent) {
      observer.observe(parent);
    }
    
    return () => {
      if (parent) {
        observer.unobserve(parent);
      }
    };
  }, []);
  
  if (!isVisible) {
    return null; // Görünür olmadığında hiçbir şey render etme
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          {/* Yükleme işareti kaldırıldı */}
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
} 