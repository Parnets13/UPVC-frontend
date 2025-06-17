import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiPieChart, FiUser, FiMenu, FiX, FiBell, FiMapPin } from 'react-icons/fi';
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const navItems = [
    { path: '/home', label: 'Home', icon: <FiHome className="text-lg" /> },
    { path: '/category', label: 'Category', icon: <FiPieChart className="text-lg" /> },
    { path: '/history', label: 'History', icon: <FiPieChart className="text-lg" /> },
    { path: '/contact', label: 'Contact Us', icon: <FiPieChart className="text-lg" /> },
    { path: '/account', label: 'Account', icon: <FiUser className="text-lg" /> }
  ];

  const notifications = [
    { id: 1, text: 'Your order has been confirmed', time: '2 min ago' },
    { id: 2, text: 'New window designs available', time: '1 hour ago' },
    { id: 3, text: 'Special discount on uPVC windows', time: '3 days ago' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleNotifications = () => {
    setNotificationOpen(!notificationOpen);
    setLocationOpen(false);
  };

  const toggleLocation = () => {
    setLocationOpen(!locationOpen);
    setNotificationOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 border-gray-200 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center justify-start">
              <img src={logo} className="w-30 h-20 mt-2" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.path}
                  className="relative group px-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'text-black bg-gray-100'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute left-1/2 -translate-x-1/2 w-8 h-0.5 bg-black bottom-0"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2 ml-12">
              {/* Location */}
              <div className="relative">
                <button
                  onClick={toggleLocation}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors"
                >
                  <FiMapPin className="text-xl" />
                </button>
                <AnimatePresence>
                  {locationOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      <div className="px-4 py-2 font-medium text-gray-700">Your Location</div>
                      <div className="px-4 py-2 text-sm text-gray-600">
                        <p>Current: Mumbai, India</p>
                        <button className="mt-2 text-blue-600 text-sm font-medium">
                          Change Location
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={toggleNotifications}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black transition-colors relative"
                >
                  <FiBell className="text-xl" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <AnimatePresence>
                  {notificationOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      <div className="px-4 py-2 font-medium text-gray-700">Notifications</div>
                      <div className="max-h-60 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div key={notification.id} className="px-4 py-3 border-t border-gray-100 hover:bg-gray-50">
                            <p className="text-sm">{notification.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2 border-t border-gray-100">
                        <button className="text-blue-600 text-sm font-medium w-full text-left">
                          View All Notifications
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-2 border border-gray-200"
            >
              {navItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center space-x-3 px-4 py-3 ${
                      location.pathname === item.path
                        ? 'text-black bg-gray-100'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {location.pathname === item.path && (
                      <div className="ml-auto w-1.5 h-6 bg-black rounded-full" />
                    )}
                  </motion.div>
                </Link>
              ))}
              {/* Mobile Location Option */}
              <div
                onClick={toggleLocation}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                <FiMapPin className="text-lg" />
                <span className="font-medium">Location</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
