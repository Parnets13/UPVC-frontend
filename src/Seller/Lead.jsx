import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeadCard = ({ lead, navigate }) => {
  return (
    <div className="w-full sm:w-96 bg-white rounded-xl shadow-lg overflow-hidden mb-6 mx-2 flex-shrink-0 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        {/* Header with request */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Buyer Request</h2>
          <p className="text-gray-700 font-medium">{lead.request}</p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-3 rounded-lg">
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Slots Left</h3>
            <p className="text-lg font-bold text-gray-800">{lead.slots}</p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <h3 className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Match Score</h3>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800 mr-2">{lead.matchScore}</span>
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Price section */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Price to unlock contact</p>
          <p className="text-2xl font-bold text-blue-600">{lead.price}</p>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => navigate('/SellerContactBuyer')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l3.5-7M21 10l-3.5-7M10 10h4" />
            </svg>
            Buy This Lead
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Try Free (2 left)
          </button>
        </div>
      </div>
    </div>
  );
};

const LeadDetails = () => {
  const navigate = useNavigate();
  
  const leads = [
    {
      request: "10 sq ft, ₹15,000, tinted glass",
      slots: "4/6",
      matchScore: "95% Match",
      price: "₹200"
    },
    {
      request: "12 sq ft, ₹13,000, UPVC doors",
      slots: "4/6",
      matchScore: "88% Match",
      price: "₹200"
    },
    {
      request: "8 sq ft, ₹18,000, frosted glass",
      slots: "2/6",
      matchScore: "92% Match",
      price: "₹200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Your Next Customer Awaits!</h1>
        <p className="text-gray-600 text-center mb-8">High quality leads matched to your business profile</p>
        
        <div className="flex overflow-x-auto pb-6 -mx-2 px-2">
          <div className="flex space-x-6">
            {leads.map((lead, index) => (
              <LeadCard 
                key={index} 
                lead={lead} 
                navigate={navigate} 
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-4">
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto">
            View more leads
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;