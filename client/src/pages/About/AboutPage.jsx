// File: client/src/pages/About/AboutPage.jsx
import {
  ArrowRight,
  Bitcoin,
  CreditCard,
  Globe,
  Heart,
  Play,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import React from 'react'
import Layout from '../Layout/Layout'

const AboutPage = () => {
  const stats = [
    { number: '50K+', label: 'Tips Sent', icon: <Heart className='w-5 h-5' /> },
    {
      number: '2K+',
      label: 'Active Creators',
      icon: <Users className='w-5 h-5' />,
    },
    { number: '25+', label: 'Countries', icon: <Globe className='w-5 h-5' /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className='w-5 h-5' /> },
  ]

  const features = [
    {
      icon: <Zap className='w-6 h-6' />,
      title: 'Instant OBS Integration',
      description:
        'Tips appear as beautiful animations on your stream in real-time',
    },
    {
      icon: <Smartphone className='w-6 h-6' />,
      title: 'Local Payment Support',
      description: 'JazzCash, EasyPaisa, and other regional payment methods',
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: 'Global Reach',
      description:
        'Accept tips from supporters worldwide with multiple currencies',
    },
    {
      icon: <TrendingUp className='w-6 h-6' />,
      title: 'Smart Analytics',
      description:
        'Track your growth with detailed insights and engagement metrics',
    },
  ]

  const values = [
    {
      icon: <Heart className='w-8 h-8' />,
      title: 'Creator First',
      description:
        'Everything we build puts creators at the center. Your success is our mission.',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: 'Trust & Security',
      description:
        'Bank-grade security ensures your money and data are always protected.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Globe className='w-8 h-8' />,
      title: 'Global Impact',
      description:
        'Breaking barriers between creators and supporters across the world.',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <Layout>
      <div className='bg-black min-h-screen'>
        {/* Hero Section */}
        <div className='relative overflow-hidden mb-20'>
          <div className='absolute inset'></div>
          <div className='relative text-center py-20'>
            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8'>
              <Sparkles className='w-5 h-5 text-purple-400' />
              <span className='text-purple-200 font-medium'>Our Story</span>
            </div>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight'>
              Bridging{' '}
              <span className='bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent'>
                Creators
              </span>
              <br />
              and{' '}
              <span className='bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent'>
                Supporters
              </span>
            </h1>

            <p className='text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed px-4'>
              Rokkra transforms how audiences support their favorite creators
              through seamless tipping, real-time stream integration, and global
              payment accessibility.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4'>
              <button className='group bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 md:px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-sm md:text-base'>
                Start Your Journey
                <ArrowRight className='w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform' />
              </button>
              <button className='group border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 px-6 md:px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base'>
                <Play className='w-4 h-4 md:w-5 md:h-5' />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mb-20'>
          <div className='bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-2xl p-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-purple-400 mb-3 flex justify-center'>
                    {stat.icon}
                  </div>
                  <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-purple-200 text-sm'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Problem */}
            <div className='group relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl'></div>
              <div className='relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 group-hover:border-red-500/50 transition-all duration-300'>
                <div className='w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6'>
                  <Target className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  The Challenge
                </h3>
                <p className='text-gray-400 leading-relaxed mb-6'>
                  Creators struggled with complex donation systems, limited
                  local payment options, and no way to show appreciation
                  directly on their streams. Supporters wanted to tip but faced
                  barriers with international payments and poor user
                  experiences.
                </p>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                    <span>Complex setup processes</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                    <span>Limited regional payment methods</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                    <span>No real-time stream integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className='group relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl'></div>
              <div className='relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 group-hover:border-green-500/50 transition-all duration-300'>
                <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6'>
                  <Zap className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Our Solution
                </h3>
                <p className='text-gray-400 leading-relaxed mb-6'>
                  Rokkra simplifies everything. One-click OBS integration,
                  support for local mobile wallets, global payment options, and
                  beautiful real-time tip animations that create magical moments
                  during live streams.
                </p>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    <span>30-second setup</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    <span>Local wallets, cards, crypto</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    <span>Instant OBS animations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className='mb-20'>
          <div className='text-center mb-16 px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              What Makes Us{' '}
              <span className='bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent'>
                Special
              </span>
            </h2>
            <p className='text-gray-400 text-base md:text-lg max-w-3xl mx-auto'>
              We've built every feature with creators in mind, solving real
              problems with elegant solutions.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 auto-rows-fr'>
            {features.map((feature, index) => (
              <div key={index} className='group relative h-full'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl'></div>
                <div className='relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col'>
                  <div className='text-purple-400 mb-4 flex-shrink-0'>
                    {feature.icon}
                  </div>
                  <h3 className='text-white font-bold text-xl mb-3 flex-shrink-0'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 text-sm md:text-base flex-grow'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className='mb-20'>
          <div className='text-center mb-16 px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Our{' '}
              <span className='bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent'>
                Core Values
              </span>
            </h2>
            <p className='text-gray-400 text-base md:text-lg max-w-3xl mx-auto'>
              These principles guide every decision we make and every feature we
              build.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='group relative'>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl`}
                ></div>
                <div className='relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 group-hover:border-gray-700 transition-all duration-300 text-center'>
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <div className='text-white'>{value.icon}</div>
                  </div>
                  <h3 className='text-white font-bold text-xl mb-4'>
                    {value.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className='mb-20'>
          <div className='relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-12'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl'></div>

            <div className='relative text-center max-w-4xl mx-auto px-4'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight'>
                Building the Future of{' '}
                <span className='bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
                  Creator Economy
                </span>
              </h2>
              <p className='text-lg md:text-xl text-purple-100 leading-relaxed mb-8'>
                We envision a world where every creator can build sustainable
                income through genuine fan support, where geographical barriers
                don't limit opportunities, and where the bond between creators
                and their communities grows stronger every day.
              </p>
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-3'>
                <Sparkles className='w-4 h-4 md:w-5 md:h-5 text-yellow-400' />
                <span className='text-white font-medium text-sm md:text-base'>
                  Built for Creators, By Creators
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center mb-20 px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 leading-tight'>
            Ready to Join the{' '}
            <span className='bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent'>
              Revolution?
            </span>
          </h2>
          <p className='text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto'>
            Start your journey with Rokkra today and transform how your audience
            supports your creativity.
          </p>
          <button className='group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 text-base md:text-lg'>
            <span className='flex items-center gap-2 md:gap-3'>
              Get Started
              <ArrowRight className='w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform' />
            </span>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
