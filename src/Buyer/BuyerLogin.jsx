import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BuyerLogin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSendOtp = () => {
    if (!name.trim() || !/^[6-9]\d{9}$/.test(phoneNumber)) {
      setError('Please enter a valid name and 10-digit mobile number');
      return;
    }
    console.log('Sending OTP to:', phoneNumber);
    navigate('/otp-verification', { state: { phoneNumber, name } });
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-md"
      >
        <div className="bg-black p-6 text-center rounded-t-xl">
          <h1 className="text-2xl font-bold text-white">Welcome Buyer</h1>
          <p className="text-gray-400 mt-2">Please enter your details</p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setError('');
              }}
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              inputMode="numeric"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSendOtp}
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300"
          >
            Send OTP
          </motion.button>

          <button
            onClick={handleSkip}
            className="w-full mt-2 text-sm text-black font-medium hover:underline"
          >
            Skip & Continue Without OTP
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BuyerLogin;
