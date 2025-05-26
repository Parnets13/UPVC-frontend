import React from 'react';
import { FiPhone, FiMessageSquare, FiArrowLeft, FiPlus } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactSellers = () => {
  const navigate = useNavigate();

  const sellers = [
    {
      id: 1,
      name: "Rajesh UPVC Works",
      specialty: "Tinted glass expert",
      phone: "+91 98765 43210",
      video: "ab.mp4",
      rating: 4.8,
      projects: 124,
      years: 8
    },
    {
      id: 2,
      name: "Modern Windows Co.",
      specialty: "Energy-efficient solutions",
      phone: "+91 87654 32109",
      video: "r.mp4",
      rating: 4.5,
      projects: 89,
      years: 5
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500 text-sm" />
        ))}
        {halfStar && <FaStar className="text-yellow-300 text-sm opacity-50" />}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline flex items-center">
            <FiArrowLeft className="mr-1" /> Back
          </button>
          <button onClick={() => navigate('/buyerForm')} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
            <FiPlus className="mr-2" /> Submit New Request
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Your Quotes Are Here!</h2>
        <p className="text-gray-600 mb-6">Contact sellers directly to finalize your deal.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sellers.map((seller) => (
            <div key={seller.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{seller.name}</h3>
                    <p className="text-sm text-gray-500">{seller.specialty}</p>
                  </div>
                  <div className="flex items-center space-x-1">{renderStars(seller.rating)}</div>
                </div>

                <div className="relative rounded-lg overflow-hidden mb-3">
                  <video
                    controls
                    className="w-full h-40 object-cover rounded-lg"
                    preload="metadata"
                    poster="https://via.placeholder.com/400x200?text=Seller+Video"
                  >
                    <source src={seller.video} type="video/mp4" />
                  </video>
                  <p className="text-xs text-gray-400 mt-1">Seller introduction video</p>
                </div>

                <div className="flex text-sm text-gray-600 mb-4 space-x-4">
                  <span>{seller.projects}+ projects</span>
                  <span>{seller.years} yrs experience</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${seller.phone}`}
                    className="bg-green-100 hover:bg-green-200 text-green-800 py-2 rounded-lg flex items-center justify-center font-medium"
                  >
                    <FiPhone className="mr-2" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${seller.phone.replace(/\D/g, '')}`}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 rounded-lg flex items-center justify-center font-medium"
                  >
                    <FiMessageSquare className="mr-2" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-100 mt-8 p-4 rounded-lg border-l-4 border-blue-500 text-blue-800 text-sm">
          💡 <strong>Pro Tip:</strong> Call or WhatsApp sellers directly for the best deals!
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-md flex flex-col sm:flex-row sm:justify-between items-center">
        <button
          onClick={() => navigate('/home')}
          className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
        >
          back to home
        </button>
        <button
          onClick={() => navigate('/buyerForm')}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow"
        >
          Submit New Request
        </button>
      </div>
    </div>
  );
};

export default ContactSellers;
