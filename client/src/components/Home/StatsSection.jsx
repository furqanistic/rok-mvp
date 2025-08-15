// File: client/src/components/Home/StatsSection.jsx
import { DollarSign, Shield, Users, Zap } from 'lucide-react'
import React from 'react'

const StatsSection = () => {
  const stats = [
    {
      number: '50K+',
      label: 'Tips Sent',
      icon: <DollarSign className='w-5 h-5' />,
    },
    {
      number: '2K+',
      label: 'Active Creators',
      icon: <Users className='w-5 h-5' />,
    },
    { number: '99.9%', label: 'Uptime', icon: <Shield className='w-5 h-5' /> },
    {
      number: '< 1s',
      label: 'Tip Display Time',
      icon: <Zap className='w-5 h-5' />,
    },
  ]

  return (
    <div className='mb-20'>
      <div className='bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-xl p-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-white mb-3'>
            Trusted by Creators Worldwide
          </h2>
          <p className='text-purple-200'>
            Join thousands of creators already earning with Rokkra
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-purple-400 mb-2 flex justify-center'>
                {stat.icon}
              </div>
              <div className='text-3xl font-bold text-white mb-1'>
                {stat.number}
              </div>
              <div className='text-purple-200 text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsSection
