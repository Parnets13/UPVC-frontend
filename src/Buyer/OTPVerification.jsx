import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const phoneNumber = location.state?.phoneNumber || '';
  const token = location.state?.token || '';

  const maskedPhone = phoneNumber
    ? `${phoneNumber.slice(0, -3).replace(/\d/g, '*')}${phoneNumber.slice(-3)}`
    : '';
const handleSubmit = async (e) => {
  e.preventDefault();
  const fullOtp = otp.join('');

  if (fullOtp.length !== 4) {
    setError('Please enter a 4-digit OTP');
    return;
  }

  setLoading(true);

  try {
    const response = await fetch('http://localhost:9000/api/auth/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileNumber: phoneNumber,
        otp: fullOtp,
      }),
    });

    const data = await response.json();

    if (response.ok && data.user && data.token) {
      // Store user and token
      localStorage.setItem("buyerUser", JSON.stringify(data.user));
      localStorage.setItem("buyerToken", data.token);

      // Add user to buyers array if not already present
      const existingBuyers = JSON.parse(localStorage.getItem("buyers")) || [];
      const isDuplicate = existingBuyers.some(
        (b) => b.mobileNumber === data.user.mobileNumber
      );

      if (!isDuplicate) {
        existingBuyers.push({
          id: data.user._id,
          name: data.user.name,
          mobileNumber: data.user.mobileNumber,
          token: data.token,
        });

        localStorage.setItem("buyers", JSON.stringify(existingBuyers));
      }

      // Store newly logged in buyer
      localStorage.setItem("newBuyer", JSON.stringify(data.user));

      navigate("/home");
    } else {
      setError(data.message || "Invalid or expired OTP");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};



  const handleOtpChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResend = () => {
    console.log('Resending OTP to:', phoneNumber);
    // You can implement actual resend OTP logic here.
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
            Enter the 4-digit code we sent to your phone
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <p className="text-gray-800">
              Sent to <span className="font-semibold">+91 {maskedPhone}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-800 mb-3 text-center">
                Enter OTP:
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
                    className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-black focus:border-black"
                    inputMode="numeric"
                    pattern="[0-9]*"
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
              disabled={loading}
              className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify & Submit'}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700 text-sm">
              Didn't receive the code?{' '}
              <button
                onClick={handleResend}
                className="text-black font-medium hover:underline"
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
