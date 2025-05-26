import React from 'react';
import { useNavigate } from 'react-router-dom';

const SellerPendingApproval = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Approval Pending
        </h1>
        <p className="text-gray-600 mb-6">
          Your seller account is under review. We'll notify you once approved.
        </p>
        <button
          onClick={() => navigate('/Sellerhome')}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
        >
          Check Status
        </button>
      </div>
    </div>
  );
};

export default SellerPendingApproval;