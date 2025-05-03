"use client";

import Hero from "@/features/home/components/Hero";
import HowItWorks from "@/features/home/components/HowItWorks";
import WhyTrustUs from "@/features/home/components/WhyTrustUs";
import About from "@/features/home/components/About";
import IntakeForm from "@/features/home/components/IntakeForm";

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="resources">
        <WhyTrustUs />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <WhyTrustUs />
      </div>
      <div id="get-started">
        <IntakeForm />
      </div>
    </main>
  );
}
