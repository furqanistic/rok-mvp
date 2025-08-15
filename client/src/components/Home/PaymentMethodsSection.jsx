// File: client/src/components/Home/PaymentMethodsSection.jsx
import { Bitcoin, CreditCard, Smartphone } from 'lucide-react'
import React from 'react'

const PaymentMethodsSection = () => {
  const paymentGroups = [
    {
      title: 'Pakistan',
      subtitle: 'Local favorites',
      icon: <Smartphone className='w-6 h-6' />,
      gradient: 'from-green-400 to-green-500',
      glowColor: 'emerald-500/20',
      methods: ['JazzCash', 'EasyPaisa', 'Bank Transfer'],
    },
    {
      title: 'Global',
      subtitle: 'Worldwide reach',
      icon: <CreditCard className='w-6 h-6' />,
      gradient: 'from-purple-400 to-purple-500',
      glowColor: 'blue-500/20',
      methods: ['Visa', 'Mastercard', 'PayPal'],
    },
    {
      title: 'Crypto',
      subtitle: 'Future of money',
      icon: <Bitcoin className='w-6 h-6' />,
      gradient: 'from-orange-400 to-amber-500',
      glowColor: 'orange-500/20',
      methods: ['Bitcoin', 'Ethereum', 'USDT'],
    },
  ]

  return (
    <div className='mb-20'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white mb-4'>
          Universal{' '}
          <span className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
            Payments
          </span>
        </h2>
        <p className='text-gray-400 text-lg'>
          Every supporter, every currency, everywhere
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {paymentGroups.map((group, index) => (
          <div key={index} className='group relative'>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${group.gradient} opacity-0 rounded-xl blur-xl group-hover:opacity-30 transition-all duration-500`}
            ></div>

            <div className='relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 group-hover:-translate-y-2 '>
              <div className='text-center mb-8'>
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${group.gradient} p-px mx-auto mb-4 `}
                >
                  <div className='w-full h-full bg-black rounded-full flex items-center justify-center text-white'>
                    {group.icon}
                  </div>
                </div>
                <h3
                  className={`text-transparent bg-gradient-to-r ${group.gradient} bg-clip-text font-bold text-xl mb-1`}
                >
                  {group.title}
                </h3>
                <p className='text-gray-400 text-sm'>{group.subtitle}</p>
              </div>

              <div className='space-y-3'>
                {group.methods.map((method, methodIndex) => (
                  <div
                    key={methodIndex}
                    className='flex items-center justify-center py-3 bg-black/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group-hover:bg-gray-900/30'
                  >
                    <span className='text-gray-300 font-medium'>{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-12'>
        <div className='inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg px-6 py-3'>
          <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
          <span className='text-gray-300 text-sm font-medium'>
            More payment methods coming soon
          </span>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodsSection
