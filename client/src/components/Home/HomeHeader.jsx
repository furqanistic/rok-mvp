// File: client/src/components/Home/HomeHeader.jsx
import React from 'react'

const HomeHeader = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='mb-8'>
        <div className='bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-white'>
          <div className='max-w-3xl'>
            <h1 className='text-3xl font-bold mb-4'>
              Support Your Favorite Creators
            </h1>
            <p className='text-purple-100 text-lg mb-6'>
              Send tips to YouTubers, streamers, and content creators with
              instant OBS integration and multiple payment options.
            </p>
            <div className='flex flex-wrap gap-3'>
              <button className='bg-white text-purple-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors h-10 text-sm'>
                Start Tipping
              </button>
              <button className='border border-purple-300 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors h-10 text-sm'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
