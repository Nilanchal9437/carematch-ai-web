'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About CareMatch AI</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe finding the right senior care should be a deeply personal, transparent, and stress-free experience. 
              Unlike traditional referral services that prioritize paid partnerships, we match families with care providers 
              that genuinely fit their needs. Our mission is to ensure every senior finds a home where they can thrive, 
              with clear and honest guidance every step of the way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 