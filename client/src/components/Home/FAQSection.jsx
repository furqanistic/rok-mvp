// File: client/src/components/Home/FAQSection.jsx
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How fast do tips appear?',
      answer: 'Under 1 second. Instant OBS integration with zero lag.',
    },
    {
      question: 'What payment methods work?',
      answer: 'JazzCash, EasyPaisa, cards, and crypto. Something for everyone.',
    },
    {
      question: 'Any fees?',
      answer: '5% platform fee. No hidden charges, no surprises.',
    },
    {
      question: 'OBS setup difficulty?',
      answer: 'Copy-paste one URL. Takes 30 seconds max.',
    },
    {
      question: 'When do I get paid?',
      answer: 'Daily payouts for $10+. Track everything real-time.',
    },
  ]

  return (
    <div className='mb-20'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white mb-4'>
          Quick{' '}
          <span className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
            Answers
          </span>
        </h2>
      </div>

      <div className='max-w-3xl mx-auto space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='group'>
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className='w-full text-left bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 group-hover:bg-gray-800/50'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-white font-bold text-lg pr-4'>
                  {faq.question}
                </h3>
                <div className='text-purple-400 flex-shrink-0'>
                  {openIndex === index ? (
                    <Minus className='w-5 h-5' />
                  ) : (
                    <Plus className='w-5 h-5' />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-32 opacity-100 mt-4'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className='text-gray-400 leading-relaxed'>{faq.answer}</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className='text-center mt-12'>
        <button className='border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 hover:border-purple-500/50 px-6 py-2 rounded-lg font-medium transition-all duration-200 h-8 text-sm'>
          More Questions?
        </button>
      </div>
    </div>
  )
}

export default FAQSection
