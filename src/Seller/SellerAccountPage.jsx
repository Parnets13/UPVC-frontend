import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiPlus, FiEdit, FiShoppingBag, FiCheckCircle, FiClock,
  FiHeadphones, FiMapPin, FiTag, FiDollarSign, FiTruck,
  FiPieChart, FiUsers, FiDownload, FiEye, FiChevronRight
} from 'react-icons/fi';

const SellerAccountPage = () => {
  // Sample data for UPVC product seller
  const sellerProfile = {
    name: "UPVC Solutions Inc.",
    email: "contact@upvcsolutions.com",
    joinDate: "Seller since March 2022",
    avatar: "/admin.png",
    businessType: "UPVC Windows & Doors Manufacturer",
    companyName: "UPVC Solutions Inc.",
    address: "123 Industrial Estate, Mumbai - 400001, Maharashtra, India",
    contactPerson: "Ramesh Patel (Managing Director)",
    contactNo: "+91 98765 43210",
    whatsappNo: "+91 98765 43210",
    yearInBusiness: "2016",
    manufacturing: "Yes, we manufacture all products in-house",
    website: "www.upvcsolutions.com",
    brandUsed: "Fenesta, Koemmerling, LG Hausys",
    gstCertificate: "/admin.png",
    visitingCard: "/admin.png"
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
    { 
      id: 1001, 
      name: "pintu singh", 
      product: "Sliding Windows", 
      date: "2 hours ago", 
      status: "New",
      details: {
        phone: "+91 98765 43210",
        email: "rajesh.sharma@example.com",
        address: "12th Main, Bangalore",
        requirements: "White UPVC sliding windows, 2 panels, 5ft x 4ft"
      }
    },
    { 
      id: 1002, 
      name: "Sunita Patel", 
      product: "French Doors", 
      date: "1 day ago", 
      status: "Contacted",
      details: {
        phone: "+91 87654 32109",
        email: "sunita.patel@example.com",
        address: "Prestige Heights, Mumbai",
        requirements: "French doors with frosted glass, 7ft height"
      }
    },
    { 
      id: 1003, 
      name: "Vikram Joshi", 
      product: "Casement Windows", 
      date: "3 days ago", 
      status: "Quoted",
      details: {
        phone: "+91 76543 21098",
        email: "vikram.joshi@example.com",
        address: "Green Valley, Pune",
        requirements: "6 casement windows, black UPVC frames"
      }
    }
  ];

  const [expandedLead, setExpandedLead] = useState(null);

  const toggleLeadDetails = (leadId) => {
    if (expandedLead === leadId) {
      setExpandedLead(null);
    } else {
      setExpandedLead(leadId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Sales Dashboard */}
        <div className="bg-white rounded-lg shadow p-6 mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FiPieChart className="text-gray-700" /> Sales Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.totalOrders}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Completed</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.completed}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Pending</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.pending}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Revenue</h3>
              <p className="text-2xl font-bold text-gray-900">{salesStats.revenue}</p>
            </div>
          </div>
        </div>

        {/* Enhanced Seller Profile Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8 border border-gray-200">
          {/* Profile Header */}
          <div className="bg-gray-800 p-6 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <img
                  src={sellerProfile.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                />
                <button className="absolute bottom-0 right-0 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <FiEdit className="text-sm" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{sellerProfile.name}</h1>
                <p className="text-gray-300">{sellerProfile.businessType}</p>
                <p className="text-gray-300 text-sm mt-1">{sellerProfile.joinDate}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">Company Information</h2>
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Company Name:</span>
                      <span className="text-gray-800">{sellerProfile.companyName}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Address:</span>
                      <span className="text-gray-800">{sellerProfile.address}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Contact Person:</span>
                      <span className="text-gray-800">{sellerProfile.contactPerson}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Year in Business:</span>
                      <span className="text-gray-800">{sellerProfile.yearInBusiness}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Manufacturing:</span>
                      <span className="text-gray-800">{sellerProfile.manufacturing}</span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Details</h2>
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Phone:</span>
                      <span className="text-gray-800">{sellerProfile.contactNo}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">WhatsApp:</span>
                      <span className="text-gray-800">{sellerProfile.whatsappNo}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Email:</span>
                      <span className="text-gray-800">{sellerProfile.email}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Website:</span>
                      <a
                        href={`https://${sellerProfile.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:underline"
                      >
                        {sellerProfile.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">Business Details</h2>
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-36">Brands Used:</span>
                      <span className="text-gray-800">{sellerProfile.brandUsed}</span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">Documents</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">GST Certificate</p>
                      <div className="flex items-center gap-4">
                        <div className="border border-gray-200 rounded-lg p-2">
                          <img
                            src={sellerProfile.gstCertificate}
                            alt="GST Certificate"
                            className="w-32 h-auto object-contain"
                          />
                        </div>
                        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                          <FiDownload className="text-sm" />
                          <span className="text-sm">Download</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium mb-2">Visiting Card</p>
                      <div className="flex items-center gap-4">
                        <div className="border border-gray-200 rounded-lg p-2">
                          <img
                            src={sellerProfile.visitingCard}
                            alt="Visiting Card"
                            className="w-32 h-auto object-contain"
                          />
                        </div>
                        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                          <FiDownload className="text-sm" />
                          <span className="text-sm">Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors">
                    <FiEdit className="text-sm" />
                    <span>Edit Profile Information</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-lg shadow p-6 mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FiUsers className="text-gray-700" /> Recent Leads
            </h2>
            <Link to="/leads" className="text-gray-700 text-sm font-medium hover:text-gray-900">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Lead ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentLeads.map((lead) => (
                  <React.Fragment key={lead.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{lead.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{lead.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{lead.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{lead.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${lead.status === 'New' ? 'bg-gray-100 text-gray-800' :
                            lead.status === 'Contacted' ? 'bg-gray-200 text-gray-800' :
                              'bg-gray-300 text-gray-800'
                          }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => toggleLeadDetails(lead.id)}
                          className="text-gray-700 hover:text-gray-900 flex items-center gap-1"
                        >
                          <FiEye className="text-sm" />
                          <span>View</span>
                        </button>
                      </td>
                    </tr>
                    {expandedLead === lead.id && (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Contact Details</h4>
                              <p className="text-sm text-gray-600"><span className="font-medium">Phone:</span> {lead.details.phone}</p>
                              <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> {lead.details.email}</p>
                              <p className="text-sm text-gray-600"><span className="font-medium">Address:</span> {lead.details.address}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                              <p className="text-sm text-gray-600">{lead.details.requirements}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default SellerAccountPage;