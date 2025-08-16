// File: client/src/pages/Topup/TopupPage.jsx
import {
  ArrowRight,
  Bitcoin,
  Check,
  CreditCard,
  DollarSign,
  MousePointer2,
  Plus,
  Shield,
  Smartphone,
  Sparkles,
  Wallet,
  X,
  Zap,
} from 'lucide-react'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'

const TopupPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [showCustomPopup, setShowCustomPopup] = useState(false)
  const [showPaymentMethods, setShowPaymentMethods] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)

  const presetAmounts = [
    {
      value: 500,
      label: '$5',
      gradient: 'from-green-400 to-emerald-500',
      popular: false,
    },
    {
      value: 1000,
      label: '$10',
      gradient: 'from-blue-400 to-cyan-500',
      popular: true,
    },
    {
      value: 2500,
      label: '$25',
      gradient: 'from-purple-400 to-pink-500',
      popular: false,
    },
    {
      value: 5000,
      label: '$50',
      gradient: 'from-orange-400 to-red-500',
      popular: false,
    },
    {
      value: 10000,
      label: '$100',
      gradient: 'from-yellow-400 to-orange-500',
      popular: false,
    },
    {
      value: 25000,
      label: '$250',
      gradient: 'from-indigo-400 to-purple-500',
      popular: false,
    },
  ]

  const paymentCategories = [
    {
      id: 'local',
      title: 'Local Methods',
      subtitle: 'Pakistani mobile wallets',
      icon: <Smartphone className='w-7 h-7' />,
      gradient: 'from-emerald-400 to-teal-500',
      methods: ['JazzCash', 'EasyPaisa', 'Bank Transfer'],
      badge: 'Most Popular',
    },
    {
      id: 'card',
      title: 'Cards & PayPal',
      subtitle: 'International payments',
      icon: <CreditCard className='w-7 h-7' />,
      gradient: 'from-blue-400 to-indigo-500',
      methods: ['Visa', 'Mastercard', 'PayPal'],
      badge: 'Instant',
    },
    {
      id: 'crypto',
      title: 'Cryptocurrency',
      subtitle: 'Digital currencies',
      icon: <Bitcoin className='w-7 h-7' />,
      gradient: 'from-orange-400 to-amber-500',
      methods: ['Bitcoin', 'Ethereum', 'USDT'],
      badge: 'Future',
    },
  ]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
    setShowPaymentMethods(true)
  }

  const handleCustomClick = () => {
    setShowCustomPopup(true)
  }

  const handleCustomSubmit = () => {
    if (customAmount && parseFloat(customAmount) >= 1) {
      setSelectedAmount(parseFloat(customAmount) * 100)
      setShowPaymentMethods(true)
      setShowCustomPopup(false)
    }
  }

  const handleCustomCancel = () => {
    setShowCustomPopup(false)
    setCustomAmount('')
  }

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) * 100 : selectedAmount
  }

  const getDisplayAmount = () => {
    const amount = getCurrentAmount()
    return amount ? `$${(amount / 100).toFixed(2)}` : '$0.00'
  }

  const resetFlow = () => {
    setSelectedAmount(null)
    setCustomAmount('')
    setShowCustomPopup(false)
    setShowPaymentMethods(false)
    setSelectedPayment(null)
  }

  return (
    <Layout>
      <div className='bg-black min-h-screen p-6'>
        {/* Energetic Header */}
        <div className='mb-8 md:mb-12'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 blur-3xl rounded-full'></div>
            <div className='relative flex items-center gap-3 md:gap-4 mb-4'>
              <div>
                <h1 className='text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2'>
                  Power Up Your{' '}
                  <span className='bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent'>
                    Wallet
                  </span>
                </h1>
                <p className='text-gray-400 text-sm md:text-lg'>
                  Add funds and start tipping your favorite creators
                </p>
              </div>
            </div>
          </div>
        </div>

        {!showPaymentMethods ? (
          /* Amount Selection Phase */
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6'>
                <DollarSign className='w-5 h-5 text-purple-400' />
                <span className='text-purple-200 font-medium'>
                  Step 1: Choose Amount
                </span>
              </div>
              <h2 className='text-3xl font-bold text-white mb-4'>
                How much would you like to add?
              </h2>
              <p className='text-gray-400 text-lg mb-6'>
                Click on any amount below to proceed with your top-up
              </p>

              {/* Clear instruction with animation */}
              <div className='flex items-center justify-center gap-2 text-purple-400 text-sm animate-bounce'>
                <MousePointer2 className='w-4 h-4' />
                <span>Click to select your top-up amount</span>
              </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12'>
              {presetAmounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => handleAmountSelect(amount.value)}
                  className='group relative h-44 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer'
                >
                  {/* Popular badge */}
                  {amount.popular && (
                    <div className='absolute top-3 right-3 z-10'>
                      <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold'>
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${amount.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}
                  ></div>

                  <div className='relative h-full flex flex-col items-center justify-center p-6'>
                    {/* Amount */}
                    <div className='text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                      {amount.label}
                    </div>

                    {/* Action text */}
                    <div className='text-gray-400 text-sm mb-3'>
                      Quick boost
                    </div>

                    {/* Click indicator */}
                    <div className='flex items-center gap-2 text-purple-400 text-xs  transition-opacity duration-300'>
                      <span>Click to add</span>
                      <ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/50 transition-colors duration-300'></div>
                </button>
              ))}

              {/* Enhanced Custom Amount Card */}
              <button
                onClick={handleCustomClick}
                className='group relative h-44 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden col-span-2 md:col-span-1 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/25'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                <div className='relative h-full flex flex-col items-center justify-center p-6'>
                  {customAmount && selectedAmount ? (
                    <>
                      <div className='text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                        ${(selectedAmount / 100).toFixed(2)}
                      </div>
                      <div className='text-gray-400 text-sm mb-3'>
                        Custom amount
                      </div>
                      <div className='flex items-center gap-2 text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span>Click to change</span>
                        <ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <Plus className='w-8 h-8 text-white' />
                      </div>
                      <div className='text-white font-bold mb-2'>
                        Custom Amount
                      </div>
                      <div className='text-gray-400 text-sm mb-3'>
                        Enter your own
                      </div>
                      <div className='flex items-center gap-2 text-purple-400 text-xs  transition-opacity duration-300'>
                        <span>Click to enter</span>
                        <ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                      </div>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Enhanced Info Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='group relative h-48 md:h-56'>
                <div className='absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl'></div>
                <div className='relative h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 group-hover:border-green-500/50 transition-all duration-300'>
                  <div className='flex items-center gap-3 md:gap-4 mb-4 md:mb-6'>
                    <div className='w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center'>
                      <Shield className='w-6 h-6 md:w-7 md:h-7 text-white' />
                    </div>
                    <div>
                      <h3 className='text-white font-bold text-lg md:text-xl'>
                        Secure & Instant
                      </h3>
                      <p className='text-gray-400 text-sm'>
                        Bank-grade protection
                      </p>
                    </div>
                  </div>
                  <ul className='space-y-2 md:space-y-3 text-gray-300 text-sm'>
                    <li className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span>Funds available immediately</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span>256-bit SSL encryption</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span>PCI DSS compliant</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='group relative h-48 md:h-56'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl'></div>
                <div className='relative h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 group-hover:border-purple-500/50 transition-all duration-300'>
                  <div className='flex items-center gap-3 md:gap-4 mb-4 md:mb-6'>
                    <div className='w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center'>
                      <Wallet className='w-6 h-6 md:w-7 md:h-7 text-white' />
                    </div>
                    <div>
                      <h3 className='text-white font-bold text-lg md:text-xl'>
                        Current Balance
                      </h3>
                      <p className='text-gray-400 text-sm'>Ready for tipping</p>
                    </div>
                  </div>
                  <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2'>
                    $24.50
                  </div>
                  <p className='text-gray-400 text-sm'>
                    Available to send tips
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Payment Method Selection Phase */
          <div className='max-w-6xl mx-auto'>
            {/* Amount Summary */}
            <div className='relative mb-8 md:mb-12 overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/30 to-purple-700/30 blur-2xl rounded-3xl'></div>
              <div className='relative bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-2xl p-4 md:p-8'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3 md:gap-4'>
                    <div className='w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center'>
                      <Zap className='w-6 h-6 md:w-8 md:h-8 text-white' />
                    </div>
                    <div>
                      <div className='text-xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                        Adding {getDisplayAmount()}
                      </div>
                      <p className='text-purple-200 text-sm md:text-base'>
                        Step 2: Choose payment method
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={resetFlow}
                    className='text-purple-400 hover:text-purple-300 font-medium underline transition-colors text-sm'
                  >
                    Change Amount
                  </button>
                </div>
              </div>
            </div>

            <div className='text-center mb-8 md:mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4'>
                Pick Your{' '}
                <span className='bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent'>
                  Payment Method
                </span>
              </h2>
              <p className='text-gray-400 text-base md:text-lg mb-6'>
                Fast, secure, and reliable
              </p>

              {/* Clear instruction for payment selection */}
              <div className='flex items-center justify-center gap-2 text-purple-400 text-sm'>
                <MousePointer2 className='w-4 h-4' />
                <span>Click on your preferred payment method</span>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12'>
              {paymentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedPayment(category.id)}
                  className={`group relative h-64 md:h-80 text-left transition-all duration-300 cursor-pointer border-2 rounded-2xl ${
                    selectedPayment === category.id
                      ? 'scale-105 border-purple-500'
                      : 'hover:-translate-y-2 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {/* Enhanced glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      category.gradient
                    } opacity-0 rounded-2xl blur-2xl transition-all duration-500 ${
                      selectedPayment === category.id
                        ? 'opacity-40'
                        : 'group-hover:opacity-30'
                    }`}
                  ></div>

                  <div
                    className={`relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-8 transition-all duration-300 overflow-hidden ${
                      selectedPayment === category.id ? 'bg-purple-500/10' : ''
                    }`}
                  >
                    {/* Badge */}
                    <div className='absolute top-3 md:top-4 right-3 md:right-4'>
                      <span
                        className={`text-xs px-2 md:px-3 py-1 rounded-full font-bold bg-gradient-to-r ${category.gradient} text-white`}
                      >
                        {category.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className='mb-4 md:mb-6'>
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${category.gradient} p-px`}
                      >
                        <div className='w-full h-full bg-black rounded-2xl flex items-center justify-center text-white'>
                          {category.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className='text-white font-bold text-lg md:text-2xl mb-2 md:mb-3'>
                      {category.title}
                    </h3>
                    <p className='text-gray-400 mb-4 md:mb-6 text-sm md:text-base'>
                      {category.subtitle}
                    </p>

                    {/* Methods */}
                    <div className='space-y-1 md:space-y-2 mb-6 md:mb-8'>
                      {category.methods.map((method, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-2 text-gray-300'
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                          ></div>
                          <span className='text-xs md:text-sm'>{method}</span>
                        </div>
                      ))}
                    </div>

                    {/* Selection indicator */}
                    <div className='absolute bottom-4 md:bottom-6 right-4 md:right-6'>
                      <div
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedPayment === category.id
                            ? 'border-purple-500 bg-purple-500 scale-110'
                            : 'border-gray-600'
                        }`}
                      >
                        {selectedPayment === category.id && (
                          <Check className='w-3 h-3 md:w-5 md:h-5 text-white' />
                        )}
                      </div>
                    </div>

                    {/* Click hint */}
                    {selectedPayment !== category.id && (
                      <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='flex items-center gap-2 text-purple-400 text-xs'>
                          <span>Click to select</span>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Enhanced Continue Button */}
            <div className='text-center'>
              <button
                disabled={!selectedPayment}
                className='group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 md:px-16 py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 overflow-hidden text-lg shadow-lg shadow-purple-500/25'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <span className='relative z-10 flex items-center gap-2'>
                  Complete Top-up {getDisplayAmount()}
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </span>
              </button>

              {!selectedPayment && (
                <p className='text-gray-500 text-sm mt-3'>
                  Please select a payment method to continue
                </p>
              )}
            </div>
          </div>
        )}

        {/* Custom Amount Popup */}
        {showCustomPopup && (
          <>
            {/* Overlay */}
            <div
              className='fixed inset-0 bg-black/70 backdrop-blur-sm z-40'
              onClick={handleCustomCancel}
            ></div>

            {/* Popup */}
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
              <div className='bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 w-full max-w-md'>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                    <DollarSign className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    Enter Custom Amount
                  </h3>
                  <p className='text-gray-400'>
                    How much would you like to add to your wallet?
                  </p>
                </div>

                <div className='mb-6'>
                  <div className='relative'>
                    <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl font-bold'>
                      $
                    </span>
                    <input
                      type='number'
                      placeholder='Enter amount (e.g., 50.00)'
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className='w-full h-14 pl-12 pr-4 bg-black border-2 border-gray-700 rounded-xl text-white text-xl text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                      min='1'
                      max='10000'
                      step='0.01'
                      autoFocus
                    />
                  </div>
                  <p className='text-gray-500 text-sm mt-3 text-center'>
                    Minimum $1.00 • Maximum $10,000.00
                  </p>
                </div>

                <div className='flex gap-3'>
                  <button
                    onClick={handleCustomCancel}
                    className='flex-1 px-6 py-3 border-2 border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 rounded-xl font-medium transition-all duration-300'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCustomSubmit}
                    disabled={!customAmount || parseFloat(customAmount) < 1}
                    className='flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
                  >
                    Add ${customAmount || '0.00'}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default TopupPage
