import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InsightsAdsPage = () => {
  // Sample data for trends
  const trends = [
    { name: 'Sliding Windows', percentage: 62, color: 'blue' },
    { name: 'Tinted Glass', percentage: 45, color: 'green' },
    { name: 'French Doors', percentage: 38, color: 'purple' },
    { name: 'Energy Efficient', percentage: 55, color: 'yellow' },
    { name: 'Soundproof', percentage: 42, color: 'red' },
    { name: 'Custom Designs', percentage: 35, color: 'indigo' }
  ];

  // Sample products data
  const products = [
    {
      title: 'UPVC Profiles',
      description: 'Premium quality profiles for all window solutions',
      color: 'blue',
      features: ['Weather resistant', 'Low maintenance', '10-year warranty']
    },
    {
      title: 'Hardware',
      description: 'Durable hardware components from top brands',
      color: 'green',
      features: ['Corrosion resistant', 'Smooth operation', '5-year warranty']
    },
    {
      title: 'Glass Solutions',
      description: 'Energy efficient glass solutions',
      color: 'purple',
      features: ['UV protection', 'Thermal insulation', 'Soundproofing']
    },
    {
      title: 'Sealants',
      description: 'High performance sealing solutions',
      color: 'red',
      features: ['Waterproof', 'Flexible', 'Long-lasting']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Header with decorative element */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">UPVC Market Insights</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover current trends, popular products, and buyer preferences in the UPVC industry
          </p>
        </div>

        {/* Stats Overview with animated cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Top Profile', value: 'uPVC X', percentage: '65%', color: 'blue' },
            { title: 'Preferred Hardware', value: 'Roto', percentage: '70%', color: 'green' },
            { title: 'Popular Glass', value: 'Tinted', percentage: '70%', color: 'purple' },
            { title: 'Avg. Budget', value: '₹450', unit: '/sq ft', color: 'yellow' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <div className="flex items-baseline mt-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    {stat.unit && <span className="ml-1 text-sm text-gray-500">{stat.unit}</span>}
                  </div>
                  {stat.percentage && (
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      <span>{stat.percentage} preference</span>
                    </div>
                  )}
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100 text-${stat.color}-600`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trends Visualization */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-12 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Current Market Trends</h2>
            <span className="text-sm text-gray-500">Updated daily</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bar chart visualization */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Most Popular UPVC Features</h3>
              <div className="space-y-4">
                {trends.map((trend, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">{trend.name}</span>
                      <span className="text-sm font-medium text-gray-900">{trend.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-${trend.color}-500`}
                        style={{ width: `${trend.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pie chart visualization (simulated) */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Product Type Distribution</h3>
              <div className="relative w-64 h-64 mx-auto">
                {/* Simulated pie chart using CSS */}
                <div className="absolute inset-0 rounded-full border-8 border-blue-500 clip-[0%_50%_50%_0%]"></div>
                <div className="absolute inset-0 rounded-full border-8 border-green-500 clip-[50%_0%_50%_50%] rotate-90"></div>
                <div className="absolute inset-0 rounded-full border-8 border-purple-500 clip-[50%_50%_0%_50%] rotate-180"></div>
                <div className="absolute inset-0 rounded-full border-8 border-yellow-500 clip-[0%_50%_50%_0%] rotate-270"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-inner">
                    <span className="text-lg font-bold text-gray-700">100%</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {['Windows (45%)', 'Doors (30%)', 'Partitions (15%)', 'Others (10%)'].map((label, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 bg-${['blue', 'green', 'purple', 'yellow'][i]}-500`}></div>
                    <span className="text-sm text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Featured Products</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View all products →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br from-${product.color}-500 to-${product.color}-600 rounded-xl shadow-md overflow-hidden text-white`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${product.color}-400 bg-opacity-30 flex items-center justify-center mb-3`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className={`text-${product.color}-100 mb-4`}>{product.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 mr-2 text-${product.color}-200`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full bg-white text-${product.color}-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition`}
                    >
                      View Options
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InsightsAdsPage;