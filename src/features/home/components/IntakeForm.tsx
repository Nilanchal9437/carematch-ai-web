"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useCreate from "@/features/home/apis/submit";

export type FormData = {
  careFor: string;
  age: number;
  currentLocation: string;
  preferredLocation: string;
  careType: string[];
  dailyActivities: string[];
  conditions: string[];
  mobilityAids: string[];
  residenceType: string;
  budget: string;
  insurance: string;
  dietaryPreferences: string;
  religiousPreferences: string;
  socialInteraction: string;
  moveInTimeline: string;
  inFacility: string;
  stayDuration: string;
  mainConcern: string;
  fullName: string;
  contactInfo: string;
};

type FormField = {
  name: keyof FormData;
  label: string;
  type: "select" | "multiselect" | "text" | "textarea" | "number";
  options?: string[];
};

type FormStep = {
  title: string;
  fields: FormField[];
};

const formSteps: FormStep[] = [
  {
    title: "Basic Information",
    fields: [
      {
        name: "careFor",
        label: "Who is the care for?",
        type: "select",
        options: ["Me", "Parent", "Spouse", "Grandparent", "Other"],
      },
      {
        name: "age",
        label: "What is their age?",
        type: "number",
      },
      {
        name: "currentLocation",
        label: "Where do they currently live? (City, State)",
        type: "text",
      },
      {
        name: "preferredLocation",
        label: "What's their preferred care location? (Zip Code or City)",
        type: "text",
      },
    ],
  },
  {
    title: "Care Needs",
    fields: [
      {
        name: "careType",
        label: "What type of care do they need?",
        type: "multiselect",
        options: [
          "Memory",
          "Assisted Living",
          "Respite",
          "Nursing",
          "Not sure",
        ],
      },
      {
        name: "dailyActivities",
        label: "What daily activities do they need help with?",
        type: "multiselect",
        options: [
          "Bathing",
          "Dressing",
          "Walking",
          "Toileting",
          "Medication",
          "Eating",
          "None",
        ],
      },
      {
        name: "conditions",
        label: "Do they have any of the following conditions?",
        type: "multiselect",
        options: [
          "Alzheimer's/Dementia",
          "Stroke",
          "Diabetes",
          "Parkinson's",
          "None",
        ],
      },
      {
        name: "mobilityAids",
        label: "Do they use any mobility aids?",
        type: "multiselect",
        options: ["Walker", "Cane", "Wheelchair", "None"],
      },
    ],
  },
  {
    title: "Preferences",
    fields: [
      {
        name: "residenceType",
        label: "What type of residence is preferred?",
        type: "select",
        options: ["Private Room", "Shared Room", "Apartment-style", "Not sure"],
      },
      {
        name: "budget",
        label: "What is their monthly care budget?",
        type: "select",
        options: ["<$3,000", "$3,000–$5,000", "$5,000–$7,000", "$7,000+"],
      },
      {
        name: "insurance",
        label: "Do they have long-term care insurance or VA benefits?",
        type: "select",
        options: ["Yes", "No", "Not sure"],
      },
      {
        name: "dietaryPreferences",
        label: "Do they have any special diet or cultural preferences?",
        type: "text",
      },
    ],
  },
  {
    title: "Additional Information",
    fields: [
      {
        name: "religiousPreferences",
        label: "Do they have a preferred religious or faith-based environment?",
        type: "select",
        options: ["Yes", "No", "Doesn't matter"],
      },
      {
        name: "socialInteraction",
        label: "How important is group activity and social interaction?",
        type: "select",
        options: ["Very", "Somewhat", "Not important"],
      },
      {
        name: "moveInTimeline",
        label: "What's their ideal move-in timeline?",
        type: "select",
        options: ["Immediately", "30 days", "1–3 months", "Just researching"],
      },
      {
        name: "inFacility",
        label: "Are they currently in a hospital or rehab facility?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    title: "Final Details",
    fields: [
      {
        name: "stayDuration",
        label: "How long do you expect them to stay in care?",
        type: "select",
        options: ["<6 months", "6–12 months", "1+ years", "Unsure"],
      },
      {
        name: "mainConcern",
        label: "What is the biggest concern about moving them into care?",
        type: "textarea",
      },
      {
        name: "fullName",
        label: "What's your full name?",
        type: "text",
      },
      {
        name: "contactInfo",
        label: "What's your email and phone number?",
        type: "text",
      },
    ],
  },
];

export default function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { create } = useCreate();

  const onSubmit = async (data: FormData) => {
    await create(data);
  };

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "select":
        return (
          <select
            {...register(field.name)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            {field.options?.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "multiselect":
        return (
          <div className="mt-2 space-y-2">
            {field.options?.map((option: string) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  {...register(field.name)}
                  value={option}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-gray-700">{option}</label>
              </div>
            ))}
          </div>
        );
      case "textarea":
        return (
          <textarea
            {...register(field.name)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        );
      default:
        return (
          <input
            type={field.type}
            {...register(field.name)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        );
    }
  };

  return (
    <section className="py-16 bg-white" id="intake-form">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Find Your Perfect Match
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Answer a few questions to help us understand your needs
          </p>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">
                {formSteps[currentStep].title}
              </h3>
              <div className="space-y-6">
                {formSteps[currentStep].fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    {renderField(field)}
                    {errors[field.name as keyof FormData] && (
                      <p className="mt-1 text-sm text-red-600">
                        This field is required
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Previous
                </button>
              )}
              {currentStep < formSteps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </motion.div>

        <div className="mt-8">
          <div className="flex justify-center">
            {formSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-16 mx-1 rounded-full ${
                  index === currentStep ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
