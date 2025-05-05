"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionDiv = motion.div as any;

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById("intake-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section - Hidden on mobile, shown on md and up */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block relative"
            style={{
              height: 600
            }}
          >
            <Image
              src="/hero.jpg"
              alt="Healthcare Technology"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </MotionDiv>

          {/* Content Section */}
          <div className="text-left md:text-left">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                The Right Care, Without the Runaround.
              </h1>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Personalized senior care recommendations you can trust. No
                pressure. No spam.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={scrollToForm}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Find Your Perfect Match
              </button>
            </MotionDiv>
          </div>

          {/* Image Section - Shown only on mobile */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden relative mt-8"
            style={{
              height: 300
            }}
          >
            <Image
              src="/hero.jpg"
              alt="Healthcare Technology"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
