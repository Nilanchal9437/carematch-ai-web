"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Tell Us About Your Loved One",
    description:
      "Answer a few simple questions about care needs, preferences, and budget.",
    icon: ClipboardDocumentListIcon,
  },
  {
    title: "Get Personalized Matches",
    description:
      "Our system pairs you with verified senior care providers that fit your exact criteria.",
    icon: DocumentCheckIcon,
  },
  {
    title: "Make an Informed Decision",
    description:
      "Review unbiased information and connect directly with facilities—no pressure.",
    icon: HomeIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to find the perfect care match
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
