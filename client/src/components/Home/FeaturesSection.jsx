// File: client/src/components/Home/FeaturesSection.jsx
import { BarChart3, CreditCard, Globe, Shield, Users, Zap } from 'lucide-react'
import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className='w-6 h-6' />,
      title: 'Instant OBS Integration',
      description: 'Zero setup. Maximum impact.',
    },
    {
      icon: <CreditCard className='w-6 h-6' />,
      title: 'Global Payments',
      description: 'Cards, crypto & local methods.',
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: 'Creator Dashboard',
      description: 'Analytics that actually matter.',
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Bank-Grade Security',
      description: 'Your money, protected.',
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: 'Worldwide Reach',
      description: 'Fans from every corner.',
    },
    {
      icon: <BarChart3 className='w-6 h-6' />,
      title: 'Smart Analytics',
      description: 'Know your audience.',
    },
  ]

  return (
    <div className='mb-20'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white mb-6'>
          Built for{' '}
          <span className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
            Modern Creators
          </span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, index) => (
          <div key={index} className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group-hover:-translate-y-1'>
              <div className='text-purple-400 mb-6 p-3 bg-purple-500/10 rounded-lg w-fit'>
                {feature.icon}
              </div>
              <h3 className='text-white font-bold mb-3 text-xl'>
                {feature.title}
              </h3>
              <p className='text-gray-400'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection
