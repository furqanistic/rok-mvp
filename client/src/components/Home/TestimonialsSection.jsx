// File: client/src/components/Home/TestimonialsSection.jsx
import { Quote, Star } from 'lucide-react'
import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah A.',
      role: 'Gaming Streamer',
      content:
        'Tips show up instantly on my stream. My viewers are obsessed with the animations!',
      rating: 5,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      name: 'Mike C.',
      role: 'YouTuber',
      content:
        'JazzCash integration is a game changer. Finally works in Pakistan!',
      rating: 5,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      name: 'Fatima A.',
      role: 'Art Streamer',
      content:
        'Tripled my monthly tips. The analytics help me understand my audience.',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <div className='mb-20'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white mb-4'>
          <span className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
            Creator
          </span>{' '}
          Love
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='group relative'>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-10 rounded-xl blur group-hover:opacity-20 transition-opacity duration-300`}
            ></div>

            <div className='relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group-hover:-translate-y-1'>
              <div className='mb-4'>
                <Quote className='w-8 h-8 text-gray-600 mb-4' />
                <div className='flex gap-1 mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 text-yellow-400 fill-current'
                    />
                  ))}
                </div>
              </div>

              <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
                "{testimonial.content}"
              </p>

              <div className='flex items-center gap-3'>
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.gradient} p-px`}
                >
                  <div className='w-full h-full bg-black rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm font-bold'>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <div className='text-white font-bold text-sm'>
                    {testimonial.name}
                  </div>
                  <div className='text-gray-500 text-xs'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
