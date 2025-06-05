import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BuyerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    windowType: '',
    size: '',
    budget: '',
    pinCode: '',
    preferences: {
      profiles: false,
      hardware: false,
      glass: false,
      sealants: false,
      reinforcements: false
    },
    deliveryTime: '',
    name: '',
    phone: ''
  });

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/otp-verification', { state: { phoneNumber: formData.phone } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#3FACE2] to-[#4682C4] p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">UPVC Window & Door Requirements</h1>
          <p className="text-blue-100 mt-2 font-medium">Get quotes from verified sellers in your area</p>
        </div>

        <div className="p-6 md:p-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
            <p className="text-blue-800 font-medium">
              Complete this form and receive free quotes from up to 6 trusted sellers within 24 hours!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Window/Door Type*</label>
                <select
                  name="windowType"
                  value={formData.windowType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                   
                >
                  <option value="">Select type</option>
                  <option value="casement">Casement Windows</option>
                  <option value="sliding">Sliding Windows</option>
                  <option value="tilt-turn">Tilt & Turn Windows</option>
                  <option value="doors">UPVC Doors</option>
                  <option value="other">Other</option>
                </select>
              </div>
            
              <div>
                <label className="block text-gray-700 font-medium mb-2">Size (in sq.ft)*</label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="e.g. 15"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                   
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Budget Range*</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                   
                >
                  <option value="">Select budget range</option>
                  <option value="10-20k">₹10,000 - ₹20,000</option>
                  <option value="20-50k">₹20,000 - ₹50,000</option>
                  <option value="50-100k">₹50,000 - ₹1,00,000</option>
                  <option value="100k+">Above ₹1,00,000</option>
                </select>
              </div>
              
              {/* Pin Code */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Pin Code*</label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Enter 6-digit pin code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                   
                />
              </div>
            </div>
            
            {/* Preferences */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">Product Specifications (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(formData.preferences).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      id={key}
                      name={key}
                      checked={value}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all"
                    />
                    <label htmlFor={key} className="ml-3 text-gray-700 capitalize font-medium">
                      {key}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Delivery Time */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Expected Delivery Timeframe*</label>
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                 
              >
                <option value="">Select timeframe</option>
                <option value="urgent">Within 1 week</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="1-2 months">1-2 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                   
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                   
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-400 to-[#4682C4] hover:from-[#3FACE2] hover:to-[#4682C4] text-white font-bold rounded-lg shadow-md transition-all duration-300 mt-4"
            >
              Send OTP
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default BuyerForm;