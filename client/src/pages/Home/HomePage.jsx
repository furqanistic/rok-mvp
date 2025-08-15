// File: client/src/pages/Home/HomePage.jsx
import CTASection from '@/components/Home/CTASection'
import FAQSection from '@/components/Home/FAQSection'
import FeaturesSection from '@/components/Home/FeaturesSection'
import HomeHeader from '@/components/Home/HomeHeader'
import HowItWorksSection from '@/components/Home/HowItWorksSection'
import PaymentMethodsSection from '@/components/Home/PaymentMethodsSection'
import StatsSection from '@/components/Home/StatsSection'
import TestimonialsSection from '@/components/Home/TestimonialsSection'
import React from 'react'
import Layout from '../Layout/Layout'

const HomePage = () => {
  return (
    <Layout>
      <div className='bg-black min-h-screen'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {/* Existing Hero Section */}
          <HomeHeader />

          {/* New Energetic Sections */}
          <FeaturesSection />
          <HowItWorksSection />
          <PaymentMethodsSection />
          <StatsSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
