import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Main = () => {
  const navigate = useNavigate();
  const [highlightBuyer, setHighlightBuyer] = useState(true);

  // Toggle highlight every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightBuyer(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* Logo */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={logo}
          alt="UPVC Logo"
          className="w-48 md:w-64 object-contain"
        />
      </motion.div>

      {/* Heading */}
      <motion.div
        className="text-black"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold">
          Welcome to <span className="text-black underline">UPVC</span> Connect
        </h1>
        <p className="mt-4 italic text-lg md:text-xl text-gray-700">
          Your premium window to better deals.
        </p>
      </motion.div>

      {/* Animated Alternating Buttons */}
      <motion.div
        className="mt-12 flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Buyer Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/buyer-login')}
          className={`${
            highlightBuyer
              ? 'bg-black text-white'
              : 'bg-white text-black'
          } font-semibold text-lg px-8 py-4 rounded-lg border border-gray-800 shadow-md transition duration-500`}
        >
          <div className="flex flex-col items-center">
            <span>I am Buyer</span>
            <span className={`text-sm ${highlightBuyer ? 'text-gray-300' : 'text-gray-600'}`}>
              Find UPVC windows/doors
            </span>
          </div>
        </motion.button>

        {/* Seller Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/Sellerlogin')}
          className={`${
            highlightBuyer
              ? 'bg-white text-black'
              : 'bg-black text-white'
          } font-semibold text-lg px-8 py-4 rounded-lg border border-gray-800 shadow-md transition duration-500`}
        >
          <div className="flex flex-col items-center">
            <span>I am Seller</span>
            <span className={`text-sm ${highlightBuyer ? 'text-gray-600' : 'text-gray-300'}`}>
              Connect with verified Buyers
            </span>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Main;
