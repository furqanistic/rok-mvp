// File: client/src/components/Home/HowItWorksSection.jsx
import { DollarSign, Globe, Play, Users } from 'lucide-react'
import React from 'react'

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create profile in 30 seconds',
      icon: <Users className='w-6 h-6' />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '02',
      title: 'Connect OBS',
      description: 'One-click integration',
      icon: <Play className='w-6 h-6' />,
      color: 'from-pink-500 to-red-500',
    },
    {
      number: '03',
      title: 'Share Link',
      description: 'Spread across platforms',
      icon: <Globe className='w-6 h-6' />,
      color: 'from-red-500 to-orange-500',
    },
    {
      number: '04',
      title: 'Earn Live',
      description: 'Watch tips roll in',
      icon: <DollarSign className='w-6 h-6' />,
      color: 'from-orange-500 to-yellow-500',
    },
  ]

  return (
    <div className='mb-20'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white mb-4'>
          <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            4 Steps
          </span>{' '}
          to Success
        </h2>
        <p className='text-gray-400 text-lg'>
          From zero to earning in under 5 minutes
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {steps.map((step, index) => (
          <div key={index} className='relative group'>
            <div className='text-center'>
              <div className='relative mx-auto mb-6'>
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} p-px mx-auto`}
                >
                  <div className='w-full h-full bg-black rounded-full flex items-center justify-center'>
                    <div className='text-white'>{step.icon}</div>
                  </div>
                </div>
                <div
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-black text-xs font-bold`}
                >
                  {step.number}
                </div>
              </div>

              <h3 className='text-white font-bold mb-2 text-xl'>
                {step.title}
              </h3>
              <p className='text-gray-400'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-16'>
        <button className='group relative bg-gradient-to-r from-purple-500 to-purple-700 text-white px-10 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-purple-600 transition-all duration-300  hover:-translate-y-1'>
          <span className='relative z-10'>Start Your Journey</span>
          <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </button>
      </div>
    </div>
  )
}

export default HowItWorksSection
