import React from 'react';
import { FiArrowRight, FiPlay, FiMessageSquare, FiPhone, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const sampleVideos = {
  windowVideo: 'ab.mp4',
  doorVideo: 'r.mp4'
};

const SellerResponses = () => {
  const navigate = useNavigate();
  
  const sellers = [
    {
      id: 1,
      name: "Rajesh UPVC Works",
      specialty: "Tinted glass expert",
      video: sampleVideos.windowVideo,
      responded: true,
      rating: 4.8,
      projects: 124,
      years: 8
    },
    {
      id: 2,
      name: "Modern Windows Co.",
      specialty: "Energy-efficient solutions",
      video: sampleVideos.windowVideo,
      responded: true,
      rating: 4.5,
      projects: 89,
      years: 5
    },
    {
      id: 3,
      name: "Premium Doors India",
      specialty: "Custom door designs",
      video: sampleVideos.doorVideo,
      responded: true,
      rating: 4.9,
      projects: 156,
      years: 10
    },
    {
      id: 4,
      name: "Glass & Glazing Experts",
      specialty: "Soundproof windows",
      video: sampleVideos.windowVideo,
      responded: false,
      rating: 4.3,
      projects: 72,
      years: 6
    },
    {
      id: 5,
      name: "UPVC Solutions",
      specialty: "High-quality UPVC doors",
      video: sampleVideos.doorVideo,
      responded: false,
      rating: 4.6,
      projects: 112,
      years: 7
    },
    {
      id: 6,
      name: "Window World",
      specialty: "French windows",
      video: sampleVideos.windowVideo,
      responded: false,
      rating: 4.7,
      projects: 98,
      years: 9
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto p-4 pt-20 pb-20">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Meet Your Sellers</h1>
              <p className="text-gray-600">Review seller profiles before contacting</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                {sellers.filter(s => s.responded).length}/{sellers.length} responded
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {sellers.map(seller => (
              <div key={seller.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{seller.name}</h3>
                      <p className="text-sm text-gray-600">{seller.specialty}</p>
                    </div>
                    {seller.responded ? (
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Responded
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                        Pending
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 font-medium">{seller.rating}</span>
                      <span className="text-gray-400 ml-1">/5</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {seller.projects}+ projects
                    </div>
                    <div className="text-sm text-gray-600">
                      {seller.years} years exp
                    </div>
                  </div>
                  
                  {seller.video && (
                    <div className="mb-4">
                      <div className="relative rounded-lg overflow-hidden bg-black">
                        <video 
                          controls 
                          className="w-full h-48 object-cover"
                          poster="https://via.placeholder.com/400x200?text=Seller+Video"
                          preload="metadata"
                        >
                          <source src={seller.video} type="video/mp4" />
                          Your browser does not support HTML5 video.
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <FiPlay size={32} className="text-white opacity-80" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center">Seller introduction video</p>
                    </div>
                  )}
                  
                  {/* {seller.responded && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <button className="flex items-center justify-center bg-blue-50 text-blue-600 p-2 rounded hover:bg-blue-100">
                        <FiMessageSquare size={16} />
                      </button>
                      <button className="flex items-center justify-center bg-green-50 text-green-600 p-2 rounded hover:bg-green-100">
                        <FiPhone size={16} />
                      </button>
                      <button className="flex items-center justify-center bg-purple-50 text-purple-600 p-2 rounded hover:bg-purple-100">
                        <FiMail size={16} />
                      </button>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Contacts will unlock after all 6 sellers respond or in 24 hours
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/contact-sellers')}
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            Contact Sellers
            <FiArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerResponses;