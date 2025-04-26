'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, ShieldCheckIcon, BanknotesIcon } from '@heroicons/react/24/outline'

const benefits = [
  {
    title: 'AI-powered, unbiased referrals',
    description: 'Our technology matches you based on real data, not paid partnerships.',
    icon: SparklesIcon,
  },
  {
    title: 'No call centers or aggressive sales',
    description: 'Your information is never shared without your consent.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Free for families',
    description: 'Facilities pay us — you never pay a penny for our service.',
    icon: BanknotesIcon,
  },
]

export default function WhyTrustUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Families Trust Us</h2>
          <p className="text-xl text-gray-600">We put your needs first, always.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 