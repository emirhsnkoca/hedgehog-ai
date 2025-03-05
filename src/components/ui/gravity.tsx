import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface GravityComponentProps {
  items: {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

const GravityComponent = ({ items, className }: GravityComponentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full h-full min-h-[500px] p-8 rounded-xl overflow-hidden",
        className
      )}
    >
      <div 
        className="absolute pointer-events-none transition-opacity duration-700 ease-in-out opacity-40"
        style={{
          background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, rgba(224, 42, 205, 0.15), transparent)`,
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
        }}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "group relative flex flex-col h-full rounded-xl p-6 transition-all duration-300 ease-in-out",
              "bg-black/50 hover:bg-black/70",
              "border border-purple-500/20 hover:border-purple-500/40",
              "transform-gpu hover:-translate-y-1",
              activeItem === item.id ? "ring-2 ring-[#e02acd] ring-offset-2 ring-offset-black" : ""
            )}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
            tabIndex={0}
            onFocus={() => setActiveItem(item.id)}
            onBlur={() => setActiveItem(null)}
          >
            {item.icon && (
              <div className="mb-4 text-[#e02acd] transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
            )}
            
            <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-[#e02acd] transition-colors duration-300">
              {item.title}
            </h3>
            
            <p className="text-purple-200/70 text-sm flex-grow transition-colors duration-300">
              {item.description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-purple-500/20 transition-[opacity,transform] duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
              <button 
                className={cn(
                  "inline-flex items-center justify-center h-9 px-4 py-2 text-sm font-medium",
                  "rounded-md bg-[#e02acd] text-white",
                  "transition-[background-color,box-shadow] duration-300",
                  "hover:bg-[#e02acd]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e02acd] focus-visible:ring-offset-2"
                )}
              >
                Daha fazla
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GravityComponent; 