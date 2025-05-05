'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MotionDiv = motion.div as any;

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About CareMatch AI</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe finding the right senior care should be a deeply personal, transparent, and stress-free experience. 
              Unlike traditional referral services that prioritize paid partnerships, we match families with care providers 
              that genuinely fit their needs. Our mission is to ensure every senior finds a home where they can thrive, 
              with clear and honest guidance every step of the way.
            </p>
          </MotionDiv>

          {/* Image Section - Hidden on mobile, shown on md and up */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block relative"
            style={{ height: 500 }}
          >
            <Image
              src="/IMG-20250505-WA0004.jpg"
              alt="Caring for Seniors"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </MotionDiv>

          {/* Image Section - Shown only on mobile */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden relative mt-8"
            style={{ height: 300 }}
          >
            <Image
              src="/IMG-20250505-WA0004.jpg"
              alt="Caring for Seniors"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
} 