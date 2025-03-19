"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useState } from "react";

export function TeamTestimonials() {
  // Client-side rendering için kontrol
  const [mounted, setMounted] = useState(false);

  // Mount olduğunda client tarafında olduğumuzu belirt
  useEffect(() => {
    setMounted(true);
  }, []);

  // Team member information with real photo paths and updated Twitter links
  const teamMembers = [
    {
      quote: "I&apos;m shaping the future with AI and creating solutions that make people&apos;s lives easier.",
      name: "Caner Yakupoğlu",
      designation: "Founder",
      src: "/caner pp.jpg",
      twitter: "https://x.com/CanerYakupoglu",
    },
    {
      quote: "I prioritize user experience while solving complex backend challenges.",
      name: "Ege Hidayet Koca",
      designation: "CEO & Backend Developer",
      src: "/ege pp.jpg",
      twitter: "https://x.com/EgeCrypto",
    },
    {
      quote: "I transform digital experiences by developing modern and user-friendly interfaces.",
      name: "Emir Hasan Koca",
      designation: "CEO & Frontend Developer",
      src: "/emir pp.jpg",
      twitter: "https://x.com/EmirSolanaTR",
    },
  ];

  // Client-side render öncesi yükleme göstergesi
  if (!mounted) {
    return (
      <div className="w-full flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <AnimatedTestimonials testimonials={teamMembers} />
    </div>
  );
} 