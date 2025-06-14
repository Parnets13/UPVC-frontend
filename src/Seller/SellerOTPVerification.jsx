import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SellerOTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const phone = location.state?.phone || '';
  const maskedPhone = phone ? `${phone.slice(0, -3).replace(/\d/g, '*')}${phone.slice(-3)}` : '';

  const handleVerify = (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');
    if (fullOtp.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }
    navigate('/lead', { state: { phone } });
  };

  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResend = () => {
    console.log('Resending OTP to:', phone);
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
          <h1 className="text-2xl font-bold text-white">OTP Verification</h1>
          <p className="text-gray-400 mt-2">
            Enter the code sent to your phone
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <p className="text-gray-700">
              Code sent to: <span className="font-medium">+91 {maskedPhone}</span>
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="block text-gray-800 mb-3 text-center font-medium">
                Enter OTP:
              </label>
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    maxLength={1}
                    className="w-12 h-12 text-xl text-center border border-gray-400 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                    inputMode="numeric"
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              {error && (
                <p className="mt-2 text-red-500 text-sm text-center">{error}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300"
            >
              Verify & Submit
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Didn't receive the code?{' '}
              <button
                onClick={handleResend}
                className="text-black underline font-medium hover:text-gray-800"
              >
                Resend OTP
              </button>
            </p>
            <p className="text-xs text-gray-400 mt-2">OTP expires in 5 minutes</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SellerOTPVerification;
