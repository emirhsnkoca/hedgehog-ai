"use client";

import { Pricing } from "@/components/ui/pricing";
import { motion } from "framer-motion";

const demoPlans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

function AnimatedTitle() {
  return (
    <motion.h2 
      className="text-4xl sm:text-5xl font-bold mb-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative inline-block">
        <motion.span 
          className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r"
          style={{
            backgroundImage: "linear-gradient(90deg, #FFFFFF, #CCCCCC, #666666, #CCCCCC, #FFFFFF)"
          }}
          animate={{ 
            backgroundPosition: ["0% center", "100% center"]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear"
          }}
        >
          Simple, Transparent Pricing
        </motion.span>
        
        {/* Glow effect */}
        <motion.span 
          className="absolute inset-0 text-transparent"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.1)",
              "0 0 20px rgba(255,255,255,0.6)",
              "0 0 5px rgba(255,255,255,0.1)"
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          Simple, Transparent Pricing
        </motion.span>
        
        {/* Base text for spacing and SEO */}
        <span className="relative text-transparent">
          Simple, Transparent Pricing
        </span>
      </div>
    </motion.h2>
  );
}

function PricingBasic() {
  return (
    <div className="h-auto overflow-y-auto rounded-lg">
      <Pricing 
        plans={demoPlans}
        title={<AnimatedTitle />}
        description="Choose the plan that works for you
All plans include access to our platform, lead generation tools, and dedicated support."
      />
    </div>
  );
}

export { PricingBasic }; 