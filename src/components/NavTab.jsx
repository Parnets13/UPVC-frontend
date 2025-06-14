import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiBox, FiList, FiDroplet, FiRepeat } from 'react-icons/fi';

const tabItems = [
  { path: '/window-price', label: 'WINDOW PRICE', icon: <FiBox /> },
  { path: '/window-options', label: 'BUY NOW', icon: <FiList /> },
  { path: '/white/color', label: 'WHITE vs COLOR', icon: <FiDroplet /> },
  { path: '/process', label: 'THE PROCESS', icon: <FiRepeat /> },
];

const NavTab = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileTabOpen, setMobileTabOpen] = useState(false);

  const toggleMobileTab = () => {
    setMobileTabOpen(!mobileTabOpen);
  };

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center items-center space-x-6 py-3">
          {tabItems.map((tab) => (
            <motion.button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              whileHover={{ scale: 1.03 }}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                location.pathname === tab.path
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Tab Button */}
        <div className="md:hidden flex justify-end items-center py-3">
          <button
            onClick={toggleMobileTab}
            className="text-gray-700 hover:text-black"
          >
            {mobileTabOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Tab Dropdown */}
        <AnimatePresence>
          {mobileTabOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border rounded-md shadow p-2"
            >
              {tabItems.map((tab) => (
                <motion.button
                  key={tab.path}
                  onClick={() => {
                    navigate(tab.path);
                    setMobileTabOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center w-full text-left space-x-3 px-4 py-3 rounded-md ${
                    location.pathname === tab.path
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavTab;
