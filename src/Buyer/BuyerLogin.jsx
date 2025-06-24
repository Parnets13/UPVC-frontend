import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BuyerLogin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const handleSendOtp = async () => {
  setError('');

  if (!name.trim() || !/^[6-9]\d{9}$/.test(phoneNumber)) {
    setError('Please enter a valid name and 10-digit mobile number');
    return;
  }

  setLoading(true);

  try {
    const response = await fetch('http://localhost:9000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        mobileNumber: phoneNumber,
      }),
    });

    const data = await response.json();

    if (response.ok) {
  console.log('OTP sent:', data.otp); // For dev/debug only

  // ✅ Save user to localStorage if needed
  if (data.user) {
    localStorage.setItem("buyerUser", JSON.stringify(data.user));
  }

      // Navigate to OTP screen
      navigate('/otp-verification', {
        state: {
          phoneNumber,
          name,
          token: data.token,
        },
      });
    } else {
      setError(data.message || 'Failed to send OTP');
    }
  } catch (err) {
    console.error('Login error:', err);
    setError('Server error. Please try again.');
  } finally {
    setLoading(false);
  }
};


//localStorage.setItem("buyerUser", JSON.stringify(response.data.user));

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
            disabled={loading}
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
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
