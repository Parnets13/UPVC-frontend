import React, { useState } from 'react';
import NavTab from '../components/NavTab';

const historyCards = [
  {
    id: 1,
    date: "2023-06-15",
    address: "123 Premium Towers, Mumbai",
    name: "ELITE CREST",
    people: [
      {
        name: "Rajesh Kumar",
        contact: "+91 9876543210",
        whatsapp: "+91 9876543210",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        details: {
          address: "Veka India HQ, Gurugram",
          businessYears: "12 years",
          capacity: "5000 units/month",
          teamSize: "150 employees",
          plantArea: "50,000 sq ft",
          certifications: "ISO 9001",
          mainProduct: "uPVC Windows",
          deliveryTime: "15 days",
          regionsCovered: "Pan India",
          partners: "45 dealers"
        }
      },
      {
        name: "Amit Verma",
        contact: "+91 9000000001",
        whatsapp: "+91 9000000001",
        videoUrl: "",
        details: {
          address: "Jaipur HQ",
          businessYears: "6 years",
          capacity: "2000 units/month",
          teamSize: "60 employees",
          plantArea: "30,000 sq ft",
          certifications: "ISO 14001",
          mainProduct: "uPVC Doors",
          deliveryTime: "18 days",
          regionsCovered: "West India",
          partners: "25 dealers"
        }
      },
    ]
  },
  {
    id: 2,
    date: "2023-05-20",
    address: "456 Business Park, Delhi",
    name: "PREMIUM SHIELD",
    people: [
      {
        name: "Priya Sharma",
        contact: "+91 8765432109",
        whatsapp: "+91 8765432109",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        details: {
          address: "Green Heights, Noida",
          businessYears: "8 years",
          capacity: "3000 units/month",
          teamSize: "90 employees",
          plantArea: "30,000 sq ft",
          certifications: "ISO 9001",
          mainProduct: "Windows",
          deliveryTime: "12 days",
          regionsCovered: "North India",
          partners: "20 dealers"
        }
      },
      {
        name: "Amit Verma",
        contact: "+91 9000000001",
        whatsapp: "+91 9000000001",
        videoUrl: "",
        details: {
          address: "Jaipur HQ",
          businessYears: "6 years",
          capacity: "2000 units/month",
          teamSize: "60 employees",
          plantArea: "30,000 sq ft",
          certifications: "ISO 14001",
          mainProduct: "uPVC Doors",
          deliveryTime: "18 days",
          regionsCovered: "West India",
          partners: "25 dealers"
        }
      },
    ]
  }
];

const HistoryPage = () => {
  const [currentPersonIndices, setCurrentPersonIndices] = useState(
    historyCards.reduce((acc, card) => {
      acc[card.id] = 0;
      return acc;
    }, {})
  );

  const navigatePerson = (direction, cardId) => {
    setCurrentPersonIndices(prev => {
      const card = historyCards.find(c => c.id === cardId);
      const currentIndex = prev[cardId];
      const newIndex = direction === 'prev' 
        ? (currentIndex > 0 ? currentIndex - 1 : card.people.length - 1)
        : (currentIndex < card.people.length - 1 ? currentIndex + 1 : 0);
      
      return { ...prev, [cardId]: newIndex };
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavTab />
      
      <div className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-center items-center mb-8 p-4 bg-black rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white">History</h1>
          </div>

          {/* History Cards */}
          <div className="space-y-8">
            {historyCards.map((card) => {
              const currentPersonIndex = currentPersonIndices[card.id];
              const person = card.people[currentPersonIndex];
              
              return (
                <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  {/* Card Header */}
                  <div className="p-6 bg-gray-50">
                    <h2 className="text-xl font-bold text-gray-900">{card.name}</h2>
                    <p className="text-gray-600 mt-1">{card.date}</p>
                    <p className="text-gray-600">{card.address}</p>
                  </div>

                  {/* Person Details */}
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h3 className="font-bold text-lg text-gray-900">{person.name}</h3>
                        <p className="text-gray-600">{person.contact}</p>
                      </div>

                      <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200">
                        {person.videoUrl && (
                          <div className="mb-6">
                            <video controls className="w-full rounded-lg shadow">
                              <source src={person.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-3">Contact Information</h4>
                              <p className="text-gray-700"><span className="font-medium">WhatsApp:</span> {person.whatsapp}</p>
                              <p className="text-gray-700"><span className="font-medium">Address:</span> {person.details.address}</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-3">Business Details</h4>
                              <p className="text-gray-700"><span className="font-medium">Years in Business:</span> {person.details.businessYears}</p>
                              <p className="text-gray-700"><span className="font-medium">Capacity:</span> {person.details.capacity}</p>
                              <p className="text-gray-700"><span className="font-medium">Team Size:</span> {person.details.teamSize}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-3">Facility</h4>
                              <p className="text-gray-700"><span className="font-medium">Plant Area:</span> {person.details.plantArea}</p>
                              <p className="text-gray-700"><span className="font-medium">Certifications:</span> {person.details.certifications}</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-bold text-gray-900 mb-3">Operations</h4>
                              <p className="text-gray-700"><span className="font-medium">Main Product:</span> {person.details.mainProduct}</p>
                              <p className="text-gray-700"><span className="font-medium">Delivery Time:</span> {person.details.deliveryTime}</p>
                              <p className="text-gray-700"><span className="font-medium">Regions Covered:</span> {person.details.regionsCovered}</p>
                              <p className="text-gray-700"><span className="font-medium">Partners:</span> {person.details.partners}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Arrows - Bottom */}
                    {card.people.length > 1 && (
                      <div className="flex justify-center space-x-4 mt-6">
                        <button 
                          onClick={() => navigatePerson('prev', card.id)}
                          className="flex items-center justify-center p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
                        >
                          <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <div className="flex items-center text-gray-700">
                          {currentPersonIndex + 1} / {card.people.length}
                        </div>
                        
                        <button 
                          onClick={() => navigatePerson('next', card.id)}
                          className="flex items-center justify-center p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
                        >
                          <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;