import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUsers, FiPieChart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { FaConnectdevelop } from 'react-icons/fa';

const Navbar1 = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/lead', label: 'Leads', icon: <FiUsers className="text-lg" /> },
    { path: '/upload', label: 'Upload Video', icon: <FiHome className="text-lg" /> },
    { path: '/insight', label: 'Insights', icon: <FiPieChart className="text-lg" /> },
    { path: '/SellerAccountPage', label: 'Account', icon: <FiUser className="text-lg" /> }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 items-center">
            <Link to="/Sellerhome" className="flex items-center space-x-2">
              <FaConnectdevelop className="text-black text-2xl" />
              <span className="text-xl font-bold text-black">UPVC Connect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link to={item.path} key={item.path} className="relative group px-2">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar1;
