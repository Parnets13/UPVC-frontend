import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPlus, FiEdit, FiShoppingBag, FiCheckCircle, FiClock, FiHeadphones, FiMapPin, FiTag, FiHeart, FiStar, FiCreditCard } from 'react-icons/fi';

const BuyerAccountPage = () => {
  // Sample data for buyer
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "Member since January 2023",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  };

  const orderStats = {
    totalOrders: 15,
    completed: 12,
    inProgress: 3
  };

  const savedAddresses = [
    "Home: 123 Main St, Mumbai",
    "Office: 456 Business Park, Bangalore"
  ];

  const wishlistItems = 8;
  const reviewsGiven = 5;

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="relative">
            <img 
              src={userProfile.avatar} 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-sm hover:bg-blue-700 transition-colors">
              <FiEdit className="text-sm" />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
            <p className="text-gray-600 mb-1">{userProfile.email}</p>
            <p className="text-gray-500 text-sm">{userProfile.joinDate}</p>
          </div>
        </div>

        {/* Order Statistics */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FiShoppingBag className="text-blue-600" /> Your Orders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-900">{orderStats.totalOrders}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Completed</h3>
              <p className="text-2xl font-bold text-gray-900">{orderStats.completed}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">In Progress</h3>
              <p className="text-2xl font-bold text-gray-900">{orderStats.inProgress}</p>
            </div>
          </div>
        </div>

        {/* Saved Addresses */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FiMapPin className="text-green-600" /> Saved Addresses
            </h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              Add New
            </button>
          </div>
          <div className="space-y-3">
            {savedAddresses.map((address, index) => (
              <div key={index} className="flex justify-between items-start p-3 border-b border-gray-100 last:border-0">
                <span className="text-gray-800">{address}</span>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 p-1">
                    <FiEdit className="text-sm" />
                  </button>
                  <button className="text-red-600 hover:text-red-800 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist and Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FiHeart className="text-red-600" /> Wishlist
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{wishlistItems} items saved</p>
              <Link to="/wishlist" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                View All
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FiStar className="text-yellow-600" /> Your Reviews
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{reviewsGiven} reviews given</p>
              <Link to="/reviews" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                View All
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FiCreditCard className="text-purple-600" /> Payment Methods
            </h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              Add New
            </button>
          </div>
          <div className="text-gray-500 text-sm">
            You haven't saved any payment methods yet.
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiCheckCircle className="text-lg" />
            </div>
            <span className="text-sm font-medium">Order History</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiClock className="text-lg" />
            </div>
            <span className="text-sm font-medium">Track Order</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiHeadphones className="text-lg" />
            </div>
            <span className="text-sm font-medium">Support</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiEdit className="text-lg" />
            </div>
            <span className="text-sm font-medium">Edit Profile</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BuyerAccountPage;