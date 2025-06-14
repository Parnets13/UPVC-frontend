import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const LeadCard = ({ lead }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextItem = () => {
    setCurrentIndex(prev => (prev === lead.nameBrandList.length - 1 ? 0 : prev + 1));
  };

  const prevItem = () => {
    setCurrentIndex(prev => (prev === 0 ? lead.nameBrandList.length - 1 : prev - 1));
  };

  const handleBuyLeadClick = () => {
    setShowModal(true);
  };

  const handleSkip = () => {
    setShowModal(false);
    navigate('/SellerContactBuyer');
  };

  const handleUpload = () => {
    // Optional: Handle file upload logic here
    setShowModal(false);
    navigate('/SellerContactBuyer');
  };

  return (
    <div className="relative w-full sm:w-96 bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-300 transition-shadow duration-300">
      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold text-black mb-1">Buyer Request</h2>
            <span className="text-xs text-gray-500">{lead.date}</span>
          </div>
          <p className="text-gray-800 font-medium">{lead.request}</p>
        </div>

        <div className="mb-6">
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Slots Left</h3>
            <p className="text-lg font-bold text-black">{lead.slots}</p>
          </div>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 relative">
          <p className="text-sm text-gray-600 mb-2">Already connected</p>
          {lead.nameBrandList.length > 0 && (
            <div className="flex items-center justify-between">
              <button
                onClick={prevItem}
                className="text-gray-500 hover:text-gray-700 p-1"
                disabled={lead.nameBrandList.length <= 1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center flex-1">
                <p className="font-medium text-black">{lead.nameBrandList[currentIndex].name}</p>
                <p className="text-sm text-gray-600">{lead.nameBrandList[currentIndex].brand}</p>
              </div>

              <button
                onClick={nextItem}
                className="text-gray-500 hover:text-gray-700 p-1"
                disabled={lead.nameBrandList.length <= 1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
          <p className="text-sm text-gray-600 mb-1">Price to unlock contact</p>
          <p className="text-2xl font-bold text-black">{lead.price}</p>
        </div>

        <div className="flex">
          <button
            onClick={handleBuyLeadClick}
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-black mb-4">Upload a video</h3>
            
            <div className="flex justify-end space-x-4">
              <Link to={'/upload'}>
              <button
                onClick={handleUpload}
                className="bg-black hover:bg-black text-white px-4 py-2 rounded"
              >
                Upload
              </button></Link>
              <button
                onClick={handleSkip}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LeadDetails = () => {
  const [showAll, setShowAll] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const leads = [
    {
      request: '10 sq ft, ₹15,000, tinted glass',
      slots: '4/6',
      price: '₹200',
      date: 'June 14, 2025',
      nameBrandList: [
        { name: 'Ravi Patel', brand: 'Tata UPVC' },
        { name: 'Kiran Joshi', brand: 'Fenesta' },
      ],
      dateObj: new Date(2025, 5, 14),
    },
    {
      request: '12 sq ft, ₹13,000, UPVC doors',
      slots: '4/6',
      price: '₹200',
      date: 'June 13, 2025',
      nameBrandList: [
        { name: 'Anita Mehra', brand: 'Fenesta' },
        { name: 'Sohan Singh', brand: 'AIS Windows' },
      ],
      dateObj: new Date(2025, 5, 13),
    },
    {
      request: '8 sq ft, ₹18,000, frosted glass',
      slots: '2/6',
      price: '₹200',
      date: 'June 12, 2025',
      nameBrandList: [{ name: 'Priya Sharma', brand: 'Gujarat UPVC' }],
      dateObj: new Date(2025, 5, 12),
    },
    {
      request: '6 sq ft, ₹12,000, clear glass',
      slots: '1/6',
      price: '₹200',
      date: 'June 11, 2025',
      nameBrandList: [
        { name: 'Vijay Kumar', brand: 'LG Hausys' },
        { name: 'Neha Gupta', brand: 'Duraflex' },
        { name: 'Arun Mishra', brand: 'Tata UPVC' },
      ],
      dateObj: new Date(2025, 5, 11),
    },
    {
      request: '15 sq ft, ₹20,000, double glazing',
      slots: '5/6',
      price: '₹250',
      date: 'June 10, 2025',
      nameBrandList: [],
      dateObj: new Date(2025, 5, 10),
    },
  ];

  const filteredLeads = leads.filter((lead) => {
    const leadDate = lead.dateObj;
    const start = new Date(dateRange[0].startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(dateRange[0].endDate);
    end.setHours(23, 59, 59, 999);
    return leadDate >= start && leadDate <= end;
  });

  const visibleLeads = showAll ? filteredLeads : filteredLeads.slice(0, 3);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-2 text-center">Your Next Customer Awaits!</h1>
        <p className="text-gray-700 text-center mb-8">High quality leads matched to your business profile</p>

        {/* Calendar Filter */}
        <div className="mb-8 relative flex justify-end">
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center ml-auto"
            >
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {format(dateRange[0].startDate, 'MMM d, yyyy')} - {format(dateRange[0].endDate, 'MMM d, yyyy')}
            </button>

            {showDatePicker && (
              <div className="absolute z-10 mt-2 right-0">
                <DateRangePicker
                  ranges={dateRange}
                  onChange={(item) => {
                    setDateRange([item.selection]);
                    setShowDatePicker(false);
                  }}
                  staticRanges={[]}
                  inputRanges={[]}
                />
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {filteredLeads.length} {filteredLeads.length === 1 ? 'result' : 'results'}
          </p>
        </div>

        {filteredLeads.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleLeads.map((lead, index) => (
                <LeadCard key={index} lead={lead} />
              ))}
            </div>

            {filteredLeads.length > 3 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-black hover:underline font-medium flex items-center justify-center mx-auto"
                >
                  {showAll ? 'View Less' : 'View More Leads'}
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No leads found for the selected date range</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadDetails;
