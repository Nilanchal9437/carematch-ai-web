"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  ShieldCheckIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "AI-powered, unbiased referrals",
    description:
      "Our technology matches you based on real data, not paid partnerships.",
    icon: SparklesIcon,
  },
  {
    title: "No call centers or aggressive sales",
    description: "Your information is never shared without your consent.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Free for families",
    description: "Facilities pay us — you never pay a penny for our service.",
    icon: BanknotesIcon,
  },
];

export default function WhyTrustUs() {
  return (
    <section 
      className="py-16 relative min-h-screen flex items-center justify-center"
    >
      {/* Background div with blur effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/IMG-20250505-WA0003.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          filter: 'blur(0.2px)',
          zIndex: -1,
        }}
      />
      {/* Overlay for better contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: -1,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Families Trust Us
          </h2>
          <p className="text-xl text-gray-600">
            We put your needs first, always.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
