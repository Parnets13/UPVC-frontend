import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ContactBuyer = () => {
    const navigate = useNavigate();
    const { leadId } = useParams();

    const leads = [
      {
        id: 1,
        buyerName: "Rahul Sharma",
        phoneNumber: "+919876543210",
        request: "10 sq ft, ₹15,000, tinted glass"
      },
      {
        id: 2,
        buyerName: "Priya Patel",
        phoneNumber: "+919876543211",
        request: "12 sq ft, ₹13,000, UPVC doors"
      },
      {
        id: 3,
        buyerName: "Amit Singh",
        phoneNumber: "+919876543212",
        request: "8 sq ft, ₹18,000, frosted glass"
      }
    ];
    
    const lead = leads.find(l => l.id === parseInt(leadId)) || leads[0];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">You've Got It!</h1>
                    <p className="text-gray-600 mb-4">Details for: {lead.request}</p>
                    
                    <div className="space-y-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700">Buyer Name</h2>
                            <p className="text-gray-600">{lead.buyerName}</p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h2 className="font-semibold text-gray-700">Phone Number</h2>
                            <p className="text-gray-600">{lead.phoneNumber}</p>
                        </div>
                    </div>
                   
                    <p className="text-gray-600 mb-6 italic">"Call or WhatsApp with your quote!"</p>
                    
                    <div className="flex flex-col space-y-3">
                        <a
                            href={`tel:${lead.phoneNumber.replace(/[^0-9+]/g, '')}`}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition text-center"
                        >
                            Call Buyer
                        </a>
                        <a
                            href={`https://wa.me/${lead.phoneNumber.replace(/[^0-9]/g, '')}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition text-center"
                        >
                            WhatsApp Buyer
                        </a>
                        <button
                            onClick={() => navigate('/SellerDashboard')}
                            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBuyer;