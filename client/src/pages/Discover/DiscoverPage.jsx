import {
  Camera,
  Code,
  Gamepad2,
  Gift,
  Music,
  Palette,
  Play,
  Search,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'

const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data for trending creators
  const trendingCreators = [
    {
      id: 1,
      name: 'Alex Gaming',
      username: '@alexgaming',
      category: 'Gaming',
      followers: '125K',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      isLive: true,
      totalTips: '$2,450',
      recentTips: 47,
      description: 'Professional esports player streaming Valorant and CS2',
      verified: true,
    },
    {
      id: 2,
      name: 'Maya Creates',
      username: '@mayacreates',
      category: 'Art',
      followers: '89K',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      isLive: false,
      totalTips: '$1,890',
      recentTips: 32,
      description:
        'Digital artist creating beautiful illustrations and tutorials',
      verified: true,
    },
    {
      id: 3,
      name: 'Tech with Sam',
      username: '@techwithsam',
      category: 'Tech',
      followers: '156K',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      isLive: true,
      totalTips: '$3,200',
      recentTips: 68,
      description:
        'Software engineer sharing coding tutorials and tech reviews',
      verified: true,
    },
    {
      id: 4,
      name: 'Luna Music',
      username: '@lunamusic',
      category: 'Music',
      followers: '203K',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      isLive: false,
      totalTips: '$4,100',
      recentTips: 95,
      description: 'Singer-songwriter performing original music and covers',
      verified: true,
    },
    {
      id: 5,
      name: 'Fitness Force',
      username: '@fitnessforce',
      category: 'Fitness',
      followers: '78K',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      isLive: true,
      totalTips: '$1,650',
      recentTips: 29,
      description:
        'Personal trainer sharing workout routines and nutrition tips',
      verified: false,
    },
    {
      id: 6,
      name: 'Chef Marina',
      username: '@chefmarina',
      category: 'Cooking',
      followers: '92K',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      isLive: false,
      totalTips: '$2,100',
      recentTips: 54,
      description: 'Professional chef teaching cooking techniques and recipes',
      verified: true,
    },
  ]

  const filteredCreators = trendingCreators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <Layout>
      <div className='min-h-screen bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-white mb-2'>
              Discover Creators
            </h1>
            <p className='text-gray-400 text-lg'>
              Find amazing content creators to support
            </p>
          </div>

          {/* Search Bar */}
          <div className='mb-8'>
            <div className='relative max-w-lg'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500' />
              <input
                type='text'
                placeholder='Search creators, categories, or usernames...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full h-10 pl-10 pr-4 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent flex items-center'
              />
            </div>
          </div>

          {/* Trending Section */}
          <div className='mb-8'>
            <div className='flex items-center gap-2 mb-6'>
              <TrendingUp className='w-5 h-5 text-purple-400' />
              <h2 className='text-xl font-semibold text-white'>
                Trending Creators
              </h2>
            </div>

            {filteredCreators.length > 0 ? (
              <div className='border border-gray-800 rounded-xl overflow-hidden'>
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b border-gray-800 bg-gray-900/50'>
                        <th className='text-left py-3 px-4 text-gray-400 font-medium text-sm'>
                          Creator
                        </th>
                        <th className='text-left py-3 px-4 text-gray-400 font-medium text-sm'>
                          Category
                        </th>
                        <th className='text-left py-3 px-4 text-gray-400 font-medium text-sm'>
                          Followers
                        </th>
                        <th className='text-left py-3 px-4 text-gray-400 font-medium text-sm'>
                          Today
                        </th>
                        <th className='text-left py-3 px-4 text-gray-400 font-medium text-sm'>
                          Status
                        </th>
                        <th className='text-right py-3 px-4 text-gray-400 font-medium text-sm'>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCreators.map((creator, index) => (
                        <tr
                          key={creator.id}
                          className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors duration-200 ${
                            index === filteredCreators.length - 1
                              ? 'border-b-0'
                              : ''
                          }`}
                        >
                          <td className='py-4 px-4'>
                            <div className='flex items-center gap-3'>
                              <div className='relative'>
                                <img
                                  src={creator.avatar}
                                  alt={creator.name}
                                  className='w-10 h-10 rounded-lg object-cover'
                                />
                              </div>
                              <div>
                                <div className='flex items-center gap-2'>
                                  <span className='text-white font-medium text-sm'>
                                    {creator.name}
                                  </span>
                                  {creator.verified && (
                                    <Star className='w-3 h-3 text-purple-400 fill-current' />
                                  )}
                                </div>
                                <span className='text-gray-400 text-xs'>
                                  {creator.username}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='py-4 px-4'>
                            <span className='inline-flex items-center gap-1 bg-purple-600/20 text-purple-400 text-xs font-medium px-2 py-1 rounded-md'>
                              {creator.category}
                            </span>
                          </td>
                          <td className='py-4 px-4'>
                            <div className='flex items-center gap-1 text-gray-300 text-sm'>
                              <Users className='w-3 h-3' />
                              {creator.followers}
                            </div>
                          </td>
                          <td className='py-4 px-4'>
                            <span className='text-gray-400 text-sm'>
                              {creator.recentTips} tips
                            </span>
                          </td>
                          <td className='py-4 px-4'>
                            {creator.isLive ? (
                              <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-1 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full'>
                                  <div className='w-1.5 h-1.5 bg-white rounded-full animate-pulse'></div>
                                  LIVE
                                </div>
                              </div>
                            ) : (
                              <span className='text-gray-500 text-xs'>
                                Offline
                              </span>
                            )}
                          </td>
                          <td className='py-4 px-4'>
                            <div className='flex items-center gap-2 justify-end'>
                              <button className='h-8 px-3 py-2 bg-purple-600 text-white text-xs font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200'>
                                Tip
                              </button>
                              <button className='h-8 px-3 py-2 border border-gray-700 text-gray-400 text-xs font-medium rounded-lg hover:text-white hover:bg-gray-800 transition-colors duration-200'>
                                Follow
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className='text-center py-12'>
                <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Search className='w-6 h-6 text-gray-500' />
                </div>
                <h3 className='text-white font-semibold mb-2'>
                  No creators found
                </h3>
                <p className='text-gray-400 mb-4'>
                  Try adjusting your search terms
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className='flex items-center justify-center h-8 px-4 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200'
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DiscoverPage
