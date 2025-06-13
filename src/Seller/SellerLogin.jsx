import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SellerLogin = () => {
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
    navigate('/SellerOTPVerification', { state: { phoneNumber, name } });
  };

  const handleSkip = () => {
    navigate('/Sellerhome');
  };
   const handleregister = () => {
    navigate('/SellerForm');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-500 to-[#4682C4] p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Welcome Buyer</h1>
          <p className="text-blue-100 mt-2">Please enter your details</p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              inputMode="numeric"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSendOtp}
            className="w-full py-3 bg-[#4682C4] hover:bg-[#3b72af] text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Send OTP
          </motion.button>
           <button
            onClick={handleregister}
            className="w-full mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            New User 
          </button>

          <button
            onClick={handleSkip}
            className="w-full mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Skip & Continue Without OTP
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SellerLogin;
