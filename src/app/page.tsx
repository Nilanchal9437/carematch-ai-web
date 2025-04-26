import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyTrustUs from './components/WhyTrustUs'
import About from './components/About'
import IntakeForm from './components/IntakeForm'

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
  )
} 