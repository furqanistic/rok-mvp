// File: client/src/components/Home/CTASection.jsx
import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'

const CTASection = () => {
  return (
    <div className='mb-20'>
      <div className='relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-12'>
        {/* Background decoration */}
        <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl'></div>

        <div className='relative max-w-3xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-yellow-400' />
            <span className='text-white text-sm font-medium'>
              Join 2,000+ creators earning daily
            </span>
          </div>

          <h2 className='text-5xl font-bold text-white mb-6 leading-tight'>
            Start Earning in
            <span className='block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
              5 Minutes
            </span>
          </h2>

          <p className='text-purple-100 text-xl mb-8 max-w-xl mx-auto'>
            Set up your profile, connect OBS, and watch the tips flow in.
          </p>

          <div className='mt-8 text-purple-200 text-sm'>
            No setup fees • No monthly costs • Cancel anytime
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
