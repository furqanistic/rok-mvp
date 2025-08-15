// File: client/src/pages/Layout/Layout.jsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Bell,
  Check,
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

  // Minimal notification panel
  const NotificationPanel = () => {
    if (!notificationOpen) return null

    return (
      <>
        {/* Mobile Overlay */}
        <div
          className='md:hidden fixed inset-0 z-40 bg-black/50'
          onClick={() => setNotificationOpen(false)}
        />

        {/* Notification Panel */}
        <div
          ref={notificationRef}
          className={`fixed z-50 bg-black border-gray-800 transition-transform duration-300 ease-out
            md:top-16 md:right-4 md:w-80 md:rounded-lg md:border md:shadow-xl md:translate-y-0 md:translate-x-0
            max-md:top-0 max-md:right-0 max-md:w-full max-md:h-full max-md:translate-x-0
            ${
              notificationOpen
                ? 'md:animate-in md:slide-in-from-top-2 max-md:animate-in max-md:slide-in-from-right'
                : ''
            }
          `}
        >
          {/* Header */}
          <div className='flex items-center justify-between p-3 border-b border-gray-800'>
            <span className='text-sm font-medium text-white'>
              Notifications
            </span>
            <div className='flex items-center gap-2'>
              {notifications.some((n) => n.unread) && (
                <button
                  onClick={markAllAsRead}
                  className='text-xs text-purple-400 hover:text-purple-300 transition-colors'
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setNotificationOpen(false)}
                className='p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors'
              >
                <X className='w-4 h-4' />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className='md:max-h-80 max-md:h-full overflow-y-auto'>
            {notifications.length === 0 ? (
              // Empty State
              <div className='flex flex-col items-center justify-center py-16 px-6'>
                <Bell className='w-8 h-8 text-gray-600 mb-3' />
                <p className='text-sm text-gray-400 text-center'>
                  No notifications
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`group flex items-center gap-3 p-3 border-b border-gray-800 last:border-b-0 cursor-pointer transition-colors hover:bg-gray-800/50 ${
                    notification.unread ? 'bg-gray-800/30' : ''
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${notification.iconColor}`}
                  >
                    <notification.icon className='w-4 h-4' />
                  </div>

                  {/* Content */}
                  <div className='flex-1 min-w-0'>
                    <p
                      className={`text-sm ${
                        notification.unread
                          ? 'text-white font-medium'
                          : 'text-gray-300'
                      }`}
                    >
                      {notification.message}
                    </p>
                    <p className='text-xs text-gray-500 mt-1'>
                      {notification.time}
                    </p>
                  </div>

                  {/* Unread indicator & Actions */}
                  <div className='flex items-center gap-2'>
                    {notification.unread && (
                      <div className='w-2 h-2 bg-purple-500 rounded-full' />
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteNotification(notification.id)
                      }}
                      className='opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-400 rounded transition-all'
                    >
                      <X className='w-3 h-3' />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    )
  }

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

              {/* Notifications */}
              <div className='relative'>
                <button
                  onClick={() => setNotificationOpen(!notificationOpen)}
                  className='relative p-2 text-gray-400 hover:text-white rounded-md transition-colors'
                >
                  <Bell className='w-5 h-5' />
                  {notifications.filter((n) => n.unread).length > 0 && (
                    <div className='absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center'>
                      <span className='text-xs font-medium text-white'>
                        {notifications.filter((n) => n.unread).length}
                      </span>
                    </div>
                  )}
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

      {/* Notification Panel */}
      <NotificationPanel />

      {/* Main Content Area */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
