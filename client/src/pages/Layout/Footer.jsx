// File: client/src/pages/Layout/Footer.jsx
import { Github, Heart, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-gray-800 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Left Side - Brand */}
          <div className='flex items-center gap-3'>
            <span className='text-lg font-bold text-white'>Rokkra</span>
            <span className='text-gray-600'>•</span>
            <span className='text-gray-400 text-sm'>
              Empowering creators worldwide
            </span>
          </div>

          {/* Mobile Only - Stacked Content */}
          <div className='flex flex-col items-center gap-4 md:hidden w-full'>
            {/* Social Links */}
            <div className='flex items-center gap-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-gray-800'
              >
                <Twitter className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-gray-800'
              >
                <Youtube className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-gray-800'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-gray-800'
              >
                <Github className='w-5 h-5' />
              </a>
            </div>

            {/* Links */}
            <div className='flex items-center gap-6 text-sm'>
              <a
                href='/privacy'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Privacy
              </a>
              <a
                href='/terms'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Terms
              </a>
              <a
                href='/support'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Support
              </a>
            </div>

            {/* Made with love */}
            <div className='flex items-center gap-1 text-gray-500 text-sm'>
              <span>Made with</span>
              <Heart className='w-3 h-3 text-purple-500 fill-current' />
              <span>for creators</span>
            </div>
          </div>

          {/* Desktop Only - Horizontal Content */}
          <div className='hidden md:flex items-center gap-6 text-sm'>
            <a
              href='/privacy'
              className='text-gray-400 hover:text-white transition-colors'
            >
              Privacy
            </a>
            <a
              href='/terms'
              className='text-gray-400 hover:text-white transition-colors'
            >
              Terms
            </a>
            <a
              href='/support'
              className='text-gray-400 hover:text-white transition-colors'
            >
              Support
            </a>

            {/* Social Links */}
            <div className='flex items-center gap-3 ml-2'>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Twitter className='w-4 h-4' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Youtube className='w-4 h-4' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Instagram className='w-4 h-4' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-400 transition-colors'
              >
                <Github className='w-4 h-4' />
              </a>
            </div>

            <div className='flex items-center gap-1 text-gray-500'>
              <span>Made with</span>
              <Heart className='w-3 h-3 text-purple-500 fill-current' />
              <span>for creators</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
