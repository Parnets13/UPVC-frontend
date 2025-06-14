import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/imaa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold">
          Welcome to <span className="text-orange-400">UPVC</span> Connect
        </h1>
        <p className="mt-4 italic text-lg md:text-xl text-white">
          Your premium window to better deals.
        </p>
      </div>

      <div className="z-10 mt-12 flex flex-col md:flex-row gap-6 px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/buyer-login')}
          className="bg-gradient-to-r from-[#3FACE2] to-blue-500 text-orange-400 font-bold text-lg px-8 py-4 rounded-xl shadow-lg border border-white"
        >
          <div className="flex flex-col">
            <span>I am Buyer</span>
            <span className="text-sm text-white">Find UPVC windows/doors</span>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/Sellerlogin')}
          className="bg-gradient-to-r from-blue-800 to-blue-500 text-orange-400 font-bold text-lg px-8 py-4 rounded-xl shadow-lg border border-white"
        >
          <div className="flex flex-col">
            <span>I am Seller</span>
            <span className="text-sm text-white">Connect with verified Buyers</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Main;