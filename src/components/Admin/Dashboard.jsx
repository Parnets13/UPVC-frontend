import React from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const data = {
    buyers: 50,
    sellers: 20,
    leads: 35,
    Completework: 100,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold text-gray-800"
        >
          Welcome to Your{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Dashboard
          </span>
        </motion.h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-full sm:w-auto"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-64 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-md cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
        {/* Overview */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8"
        >
          Overview
        </motion.h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Buyers" value={data.buyers} icon={<UsersIcon />} color="from-blue-500 to-indigo-500" growth="+5%" />
          <StatCard title="Sellers" value={data.sellers} icon={<StoreIcon />} color="from-green-500 to-teal-500" growth="+2%" />
          <StatCard title="Leads" value={data.leads} icon={<LeadIcon />} color="from-purple-500 to-fuchsia-500" growth="+10%" />
          <StatCard title="Completed" value={data.Completework} icon={<CheckIcon />} color="from-amber-500 to-orange-500" growth="+15%" />
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white shadow-sm rounded-2xl p-6 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Recent Activity</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              View All
            </button>
          </div>
          <ul className="space-y-4">
            <ActivityItem color="blue" text="New Buyer Registered" time="2 hours ago" growth="+1 Buyer" icon={<UserAddIcon />} />
            <ActivityItem color="green" text="New Seller Onboarded" time="4 hours ago" growth="+1 Seller" icon={<StoreAddIcon />} />
            <ActivityItem color="purple" text="New Lead Generated" time="6 hours ago" growth="+1 Lead" icon={<LeadAddIcon />} />
            <ActivityItem color="orange" text="Order Completed" time="8 hours ago" growth="+1 Order" icon={<CheckCircleIcon />} />
          </ul>
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-sm rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Growth</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Top Categories</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Chart Placeholder</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, value, icon, color, growth }) {
  return (
    <motion.div whileHover={{ y: -5 }} className={`bg-gray-100 text-black rounded-2xl p-6 shadow-lg overflow-hidden relative`}>
      <div className="absolute -right-4 -bottom-4 opacity-20">
        {React.cloneElement(icon, { className: 'w-24 h-24' })}
      </div>
      <div className="relative z-10">
        <p className="text-sm font-medium opacity-90 mb-1 text-gray-700">{title}</p>
        <p className="text-3xl font-bold mb-2">{value}</p>
        <p className="text-xs font-medium opacity-90 text-gray-700">{growth} from last month</p>
      </div>
    </motion.div>
  );
}

// Activity Item
function ActivityItem({ color, text, time, growth, icon }) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-amber-100 text-amber-600',
  };

  return (
    <motion.li
      whileHover={{ x: 5 }}
      className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center">
        <div className={`w-10 h-10 ${colorClasses[color]} rounded-full flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-gray-700 font-medium">{text}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
      <span className={`text-sm font-semibold text-${color}-600`}>{growth}</span>
    </motion.li>
  );
}

// Icons
function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  );
}

function LeadIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function UserAddIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  );
}

function StoreAddIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6m11-9a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V9z" />
    </svg>
  );
}

function LeadAddIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
