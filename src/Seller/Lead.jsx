import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeadCard = ({ lead, navigate }) => {
  return (
    <div className="w-full sm:w-96 bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-300 transition-shadow duration-300">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-1">Buyer Request</h2>
          <p className="text-gray-800 font-medium">{lead.request}</p>
        </div>

        {/* Slots */}
        <div className="mb-6">
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Slots Left</h3>
            <p className="text-lg font-bold text-black">{lead.slots}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
          <p className="text-sm text-gray-600 mb-1">Price to unlock contact</p>
          <p className="text-2xl font-bold text-black">{lead.price}</p>
        </div>

        {/* Action */}
        <div className="flex">
          <button
            onClick={() => navigate('/SellerContactBuyer')}
            className="bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center w-full"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l3.5-7M21 10l-3.5-7M10 10h4" />
            </svg>
            Buy This Lead
          </button>
        </div>
      </div>
    </div>
  );
};

const LeadDetails = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const leads = [
    {
      request: "10 sq ft, ₹15,000, tinted glass",
      slots: "4/6",
      price: "₹200"
    },
    {
      request: "12 sq ft, ₹13,000, UPVC doors",
      slots: "4/6",
      price: "₹200"
    },
    {
      request: "8 sq ft, ₹18,000, frosted glass",
      slots: "2/6",
      price: "₹200"
    },
    {
      request: "6 sq ft, ₹12,000, clear glass",
      slots: "1/6",
      price: "₹200"
    }
  ];

  const visibleLeads = showAll ? leads : leads.slice(0, 3);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-2 text-center">Your Next Customer Awaits!</h1>
        <p className="text-gray-700 text-center mb-8">High quality leads matched to your business profile</p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleLeads.map((lead, index) => (
            <LeadCard key={index} lead={lead} navigate={navigate} />
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-black hover:underline font-medium flex items-center justify-center mx-auto"
          >
            {showAll ? 'View Less' : 'View More Leads'}
            <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
