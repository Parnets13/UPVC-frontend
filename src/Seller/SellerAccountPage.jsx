import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPlus, FiEdit, FiShoppingBag, FiCheckCircle, FiClock, FiHeadphones, FiMapPin, FiTag, FiDollarSign, FiTruck, FiPieChart, FiUsers } from 'react-icons/fi';

const SellerAccountPage = () => {
  // Sample data for UPVC product seller
  const sellerProfile = {
    name: "UPVC Solutions Inc.",
    email: "contact@upvcsolutions.com",
    joinDate: "Seller since March 2022",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    businessType: "UPVC Windows & Doors Manufacturer"
  };

  const salesStats = {
    totalOrders: 128,
    completed: 112,
    pending: 16,
    revenue: "₹24,75,800"
  };

  const serviceAreas = ["Mumbai", "Pune", "Bangalore", "Hyderabad", "Delhi NCR"];
  const productCategories = ["UPVC Windows", "UPVC Doors", "Sliding Systems", "Casement Windows", "Hardware"];

  const recentLeads = [
    { id: 1001, name: "Rajesh Sharma", product: "Sliding Windows", date: "2 hours ago", status: "New" },
    { id: 1002, name: "Sunita Patel", product: "French Doors", date: "1 day ago", status: "Contacted" },
    { id: 1003, name: "Vikram Joshi", product: "Casement Windows", date: "3 days ago", status: "Quoted" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Seller Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="relative">
            <img 
              src={sellerProfile.avatar} 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-sm hover:bg-blue-700 transition-colors">
              <FiEdit className="text-sm" />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{sellerProfile.name}</h1>
            <p className="text-gray-600 mb-1">{sellerProfile.email}</p>
            <p className="text-gray-500 text-sm mb-1">{sellerProfile.joinDate}</p>
            <p className="text-gray-700 font-medium">{sellerProfile.businessType}</p>
          </div>
        </div>

        {/* Sales Dashboard */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FiPieChart className="text-blue-600" /> Sales Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.totalOrders}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Completed</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.completed}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Pending</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.pending}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Revenue</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.revenue}</p>
            </div>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FiUsers className="text-orange-600" /> Recent Leads
            </h2>
            <Link to="/leads" className="text-blue-600 text-sm font-medium hover:text-blue-700">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{lead.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FiMapPin className="text-green-600" /> Service Areas
            </h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              Edit Areas
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Product Catalog */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FiTag className="text-purple-600" /> Product Catalog
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              <FiPlus className="text-sm" /> Add Product
            </motion.button>
          </div>
          <div className="space-y-3">
            {productCategories.map((category, index) => (
              <div key={index} className="flex justify-between items-center p-3 border-b border-gray-100 last:border-0">
                <span className="text-gray-800 font-medium">{category}</span>
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

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiShoppingBag className="text-lg" />
            </div>
            <span className="text-sm font-medium">Manage Orders</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiTruck className="text-lg" />
            </div>
            <span className="text-sm font-medium">Shipping</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiDollarSign className="text-lg" />
            </div>
            <span className="text-sm font-medium">Payments</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-gray-50"
          >
            <div className="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiHeadphones className="text-lg" />
            </div>
            <span className="text-sm font-medium">Support</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SellerAccountPage;