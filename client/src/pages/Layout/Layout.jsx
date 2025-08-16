// File: client/src/pages/Layout/Layout.jsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Bell,
  Check,
  ChevronRight,
  CreditCard,
  Gift,
  Heart,
  Info,
  Menu,
  MoreHorizontal,
  Search,
  Search as SearchIcon,
  Settings,
  Star,
  Trash2,
  Wallet,
  X,
} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const notificationRef = useRef(null)

  const navigationItems = [
    { label: 'Discover', href: '/discover', icon: SearchIcon },
    { label: 'Top Up', href: '/topup', icon: CreditCard },
    { label: 'About', href: '/about', icon: Info },
  ]

  // Get first letter of name for profile
  const userName = 'Alex'
  const userInitial = userName.charAt(0).toUpperCase()

  // Sample notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'tip',
      icon: Heart,
      iconColor: 'bg-pink-600 text-white',
      title: 'Tip Received',
      message: 'Sarah M. sent you $5.00',
      time: '2 min ago',
      unread: true,
    },
    {
      id: 2,
      type: 'achievement',
      icon: Star,
      iconColor: 'bg-yellow-600 text-white',
      title: 'Milestone Reached',
      message: "You've reached 100 followers",
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      type: 'gift',
      icon: Gift,
      iconColor: 'bg-green-600 text-white',
      title: 'Gift Received',
      message: 'Mike J. sent you a virtual gift',
      time: '3 hours ago',
      unread: false,
    },
    {
      id: 4,
      type: 'system',
      icon: Check,
      iconColor: 'bg-blue-600 text-white',
      title: 'Payout Processed',
      message: 'Your weekly payout of $23.50 has been processed',
      time: '1 day ago',
      unread: false,
    },
  ])

  // Close notification panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false)
      }
    }

    if (notificationOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [notificationOpen])

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    )
  }

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    )
  }

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, unread: false }))
    )
  }

  // Handle mobile search toggle
  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen)
  }

  // Beautiful notification drawer
  const NotificationDrawer = () => {
    if (!notificationOpen) return null

    return (
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${notificationOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setNotificationOpen(false)}
        />

        {/* Drawer */}
        <div
          ref={notificationRef}
          className={`fixed top-0 right-0 z-50 h-full bg-black border-l border-gray-800 shadow-2xl
            transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            md:w-1/4 md:min-w-[400px] max-md:w-full
            ${notificationOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Header */}
          <div className='flex items-center justify-between p-4 border-b border-gray-800'>
            <div className='flex items-center gap-3'>
              <div className='p-2 bg-purple-500/20 rounded-lg'>
                <Bell className='w-5 h-5 text-purple-400' />
              </div>
              <div>
                <h2 className='text-lg font-semibold text-white'>
                  Notifications
                </h2>
                <p className='text-sm text-gray-400'>
                  {notifications.filter((n) => n.unread).length} unread
                </p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              {notifications.some((n) => n.unread) && (
                <button
                  onClick={markAllAsRead}
                  className='px-3 py-1.5 text-sm text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 rounded-md transition-colors'
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setNotificationOpen(false)}
                className='p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors'
              >
                <X className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className='h-full overflow-y-auto pb-20'>
            {notifications.length === 0 ? (
              // Empty State
              <div className='flex flex-col items-center justify-center py-20 px-6'>
                <div className='w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mb-4 border border-gray-700'>
                  <Bell className='w-8 h-8 text-gray-500' />
                </div>
                <h3 className='text-lg font-medium text-white mb-2'>
                  No notifications
                </h3>
                <p className='text-sm text-gray-400 text-center max-w-sm'>
                  When you get notifications, they'll show up here
                </p>
              </div>
            ) : (
              <div className='p-4 space-y-1'>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={`group flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-800/50 ${
                      notification.unread
                        ? 'bg-gray-800/30 border border-gray-700'
                        : 'hover:bg-gray-800/30'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.iconColor}`}
                    >
                      <notification.icon className='w-5 h-5' />
                    </div>

                    {/* Content */}
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-start justify-between gap-2'>
                        <div className='flex-1'>
                          <h4
                            className={`text-sm font-medium ${
                              notification.unread
                                ? 'text-white'
                                : 'text-gray-300'
                            }`}
                          >
                            {notification.title}
                          </h4>
                          <p
                            className={`text-sm mt-1 ${
                              notification.unread
                                ? 'text-gray-300'
                                : 'text-gray-400'
                            }`}
                          >
                            {notification.message}
                          </p>
                          <p className='text-xs text-gray-500 mt-2'>
                            {notification.time}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className='flex items-center gap-2'>
                          {notification.unread && (
                            <div className='w-2.5 h-2.5 bg-purple-500 rounded-full' />
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteNotification(notification.id)
                            }}
                            className='opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded-md transition-all'
                          >
                            <X className='w-4 h-4' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    )
  }

  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <div className='min-h-screen bg-black'>
      {/* Top Bar */}
      <header className='sticky top-0 z-30 bg-black border-b border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo & Brand */}
            <div className='flex items-center gap-8'>
              <div className='flex items-center'>
                <span className='text-xl font-semibold text-white'>Rokkra</span>
              </div>

              {/* Desktop Navigation */}
              <nav className='hidden lg:flex items-center gap-1'>
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className='flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200'
                  >
                    <item.icon className='w-4 h-4' />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Search Bar */}
            <div className='hidden md:flex items-center flex-1 max-w-lg mx-8'>
              <div className='relative w-full'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Search className='w-4 h-4 text-gray-500' />
                </div>
                <input
                  type='text'
                  placeholder='Search creators...'
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-full pl-10 pr-4 py-2 text-sm bg-gray-900 border rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent ${
                    searchFocused ? 'border-purple-500 ' : 'border-gray-700'
                  }`}
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className='flex items-center gap-3'>
              {/* Mobile Search Button */}
              <button
                onClick={toggleMobileSearch}
                className='md:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors'
              >
                <Search className='w-5 h-5' />
              </button>

              {/* Wallet Balance */}
              <div className='hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700'>
                <Wallet className='w-4 h-4 text-purple-400' />
                <span className='text-sm font-medium text-white'>$24.50</span>
              </div>

              {/* Notifications - Beautiful Bell Design */}
              <div className='relative'>
                <button
                  onClick={() => setNotificationOpen(!notificationOpen)}
                  className='relative p-2.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 group'
                >
                  <div className='relative'>
                    <Bell
                      className={`w-5 h-5 transition-transform duration-200 ${
                        notificationOpen ? 'rotate-12' : 'rotate-0'
                      } ${unreadCount > 0 ? 'animate-pulse' : ''}`}
                    />
                    {unreadCount > 0 && (
                      <>
                        {/* Notification badge with beautiful gradient */}
                        <div className='absolute -top-2 -right-2 min-w-[20px] h-[20px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-2 border-black shadow-lg'>
                          <span className='text-xs font-bold text-white leading-none'>
                            {unreadCount > 9 ? '9+' : unreadCount}
                          </span>
                        </div>
                        {/* Subtle glow effect */}
                        <div className='absolute -top-2 -right-2 w-5 h-5 bg-purple-500/30 rounded-full animate-ping' />
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* User Profile - Hidden on mobile */}
              <div className='relative hidden lg:block'>
                <button className='flex items-center gap-2 p-2 text-gray-400 hover:text-white rounded-md transition-colors'>
                  <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center'>
                    <span className='text-sm font-semibold text-white'>
                      {userInitial}
                    </span>
                  </div>
                  <span className='hidden sm:block text-sm font-medium text-white'>
                    {userName}
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button with rotation animation */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-300'
              >
                <Menu
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className='md:hidden border-t border-gray-800 bg-black px-4 py-3'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search className='w-4 h-4 text-gray-500' />
              </div>
              <input
                type='text'
                placeholder='Search creators...'
                autoFocus
                className='w-full pl-10 pr-4 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden border-t border-gray-800 bg-black'>
            <div className='px-4 py-4 space-y-2'>
              {/* Mobile Navigation */}
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className='w-5 h-5' />
                  {item.label}
                </a>
              ))}

              {/* Mobile Profile */}
              <div className='mt-4 pt-4 border-t border-gray-800'>
                <button className='flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors w-full'>
                  <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center'>
                    <span className='text-sm font-semibold text-white'>
                      {userInitial}
                    </span>
                  </div>
                  <span className='text-white'>{userName}</span>
                </button>
              </div>

              {/* Mobile Wallet */}
              <div className='sm:hidden'>
                <div className='flex items-center gap-3 px-3 py-3 bg-gray-900 rounded-lg'>
                  <Wallet className='w-5 h-5 text-purple-400' />
                  <span className='text-sm font-medium text-white'>
                    Wallet Balance: $24.50
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Notification Drawer */}
      <NotificationDrawer />

      {/* Main Content Area */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
