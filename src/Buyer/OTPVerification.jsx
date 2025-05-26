import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  
  const phoneNumber = location.state?.phoneNumber || '';
  const maskedPhone = phoneNumber 
    ? `${phoneNumber.slice(0, -3).replace(/\d/g, '*')}${phoneNumber.slice(-3)}`
    : '';
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');
    if (fullOtp.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }
    console.log('Verifying OTP:', fullOtp);
    navigate('/home', { state: { phoneNumber } });
  };
const handleOtpChange = (index, value) => {
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
    console.log('Resending OTP to:', phoneNumber);
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
          <h1 className="text-2xl font-bold text-white">OTP Verification</h1>
          <p className="text-blue-100 mt-2">
            Enter the verification code we sent to your phone
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <p className="text-gray-700">
              We've sent a 6-digit OTP to 
              <span className="font-semibold"> +91 {maskedPhone}</span>
            </p>
           
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-3 text-center">
                Enter your OTP code:
              </label>
              <div className="flex justify-center space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    maxLength={1}
                    className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                ))}
              </div>
              {error && <p className="mt-2 text-red-500 text-sm text-center">{error}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-[#4682C4] hover:bg-[#4682C4] text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Verify & Submit
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Didn't receive the code?{' '}
              <button 
                onClick={handleResend}
                className="text-blue-400 hover:text-gray-500 font-medium"
              >
                Resend OTP
              </button>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              The OTP will expire in 5 minutes
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OTPVerification;