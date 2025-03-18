"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function TeamTestimonials() {
  const teamMembers = [
    {
      quote:
        "Hedgehog AI Army ile Web3 ve kripto topluluklarına yapay zeka destekli çözümler sunmaktan gurur duyuyoruz. Vizyonumuz, topluluk etkileşimlerini daha anlamlı ve verimli hale getirmektir.",
      name: "Emir Solana",
      designation: "Founder & CEO",
      src: "/team/member1.jpg",
    },
    {
      quote:
        "Teknoloji altyapımızı her zaman en güncel ve güvenli standartlarda tutarak, kullanıcılarımıza kesintisiz bir deneyim sağlıyoruz. İnovasyon ve güvenlik, ekibimizin temel prensipleridir.",
      name: "Ege Crypto",
      designation: "Lead Developer",
      src: "/team/member2.jpg",
    },
    {
      quote:
        "Pazarlama stratejilerimiz, kullanıcı dostu arayüzler ve etkili iletişim yöntemleriyle topluluklarınıza değer katmayı hedefliyor. Başarınız, bizim başarımızdır.",
      name: "Caner Yakupoglu",
      designation: "Marketing Lead",
      src: "/team/member3.jpg",
    },
  ];
  return (
    <div className="w-full">
      <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />
    </div>
  );
}

export { TeamTestimonials }; 