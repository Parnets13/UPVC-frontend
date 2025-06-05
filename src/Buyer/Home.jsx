import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiArrowRight, FiCheckCircle, FiRefreshCw } from "react-icons/fi";
import dummyVideo from "../assets/dummy.mp4"
import WindowPrice from './WindowPrice';
import WindowOptions from './WindowOptions';
const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('windowPrice');
  
  const tabs = [
    { id: 'windowPrice', label: 'WINDOW PRICE' },
    { id: 'windowOptions', label: 'WINDOW OPTIONS' },
    { id: 'whiteVsColor', label: 'WHITE vs COLOR' },
    { id: 'theProcess', label: 'THE PROCESS' }
  ];

  // Tab content components
  // const WindowPrice = () => (
  //   <div className="p-6">
  //     <h3 className="text-xl font-semibold mb-4 text-black">PRICE - KNOW IT ALL</h3>
  //     <p className="text-gray-700 mb-6">The cost is the entry fee, the value is the experience!</p>
  //   </div>
  // );
  {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[1, 2, 3].map((item) => (
      <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="h-40 bg-gray-100 rounded mb-4"></div>
        <h4 className="font-medium text-black mb-2">Window Type {item}</h4>
        <p className="text-gray-600 text-sm mb-3">Starting from ${(500 + item * 200).toLocaleString()}</p>
        <button className="text-black border border-black px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition-colors">
          Get Quote
        </button>
      </div>
    ))}
  </div> */}



  const WhiteVsColor = () => (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-black">White vs Colored Windows</h3>
      <p className="text-gray-700 mb-6">Compare the benefits of classic white versus custom colored window frames.</p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 border border-gray-200 p-4 rounded-lg">
          <div className="h-48 bg-gray-100 rounded mb-4"></div>
          <h4 className="font-medium text-black mb-2">White Windows</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li className="flex items-start">
              <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
              <span>Classic, timeless look</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
              <span>Lower cost option</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
              <span>Matches most home styles</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 border border-gray-200 p-4 rounded-lg">
          <div className="h-48 bg-gray-100 rounded mb-4"></div>
          <h4 className="font-medium text-black mb-2">Colored Windows</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li className="flex items-start">
              <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
              <span>Customizable to your home</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
              <span>Enhanced curb appeal</span>
            </li>
            <li className="flex items-start">
              <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
              <span>Premium finish options</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const TheProcess = () => (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-6 text-black">Our Window Installation Process</h3>
      <div className="relative">
        <div className="absolute left-4 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-1"></div>
        
        {[
          { title: 'Consultation', description: 'Schedule an in-home or virtual consultation' },
          { title: 'Measurement', description: 'Precise measurements of all window openings' },
          { title: 'Customization', description: 'Select materials, styles, and colors' },
          { title: 'Manufacturing', description: 'Your windows are crafted to exact specifications' },
          { title: 'Installation', description: 'Professional installation by our certified team' },
          { title: 'Final Walkthrough', description: 'Quality check and customer approval' }
        ].map((step, index) => (
          <div key={index} className={`mb-8 flex w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 px-4">
              <div className={`p-6 bg-white border border-gray-200 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-medium -ml-10 md:-ml-12">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-medium text-black ml-2">{step.title}</h4>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabComponents = {
    windowPrice: <WindowPrice />,
    windowOptions: <WindowOptions />,
    whiteVsColor: <WhiteVsColor />,
    theProcess: <TheProcess />
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Tabs Navigation */}
        <div className=" border-gray-200 mb-8 flex flex-col items-center justify-center mt-10">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none transition-colors ${
                  activeTab === tab.id
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Active Tab Content */}
        <div className="bg-white rounded-lg">
          {tabComponents[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default Home;
{/* <div className="max-w-6xl mx-auto p-4 pt-20 pb-20 md:pb-6"> 
  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">Active Requests</h2>
      <Link to="/seller-responses">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Track my requests →
        </button>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-40 bg-gray-100 overflow-hidden">
          <img 
            src={windowImg} 
            alt="Sliding Windows" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-lg">Sliding Windows</h3>
              <p className="text-sm text-gray-600">15 sq.ft | ₹15,000</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Quote Progress</h3>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                3/6 sellers joined
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: '50%' }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 text-center">3 slots left - Sellers responding soon!</p>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Created 2 days ago</span>
            <div className="flex space-x-2">
              <button 
                className="flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded"
                onClick={() => navigate('/seller-responses')}
              >
                <FiRefreshCw className="mr-1" size={12} />
              </button>
              <button 
                className="flex items-center text-xs text-white bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
                onClick={() => navigate('/seller-responses')}
              >
                View <FiArrowRight className="ml-1" size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-40 bg-gray-100 overflow-hidden">
          <img 
            src={windowImg} 
            alt="UPVC Doors" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-lg">UPVC Doors</h3>
              <p className="text-sm text-gray-600">15 sq.ft | ₹15,000</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Quote Progress</h3>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                4/6 sellers joined
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: '66%' }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 text-center">2 slots left - Sellers responding soon!</p>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Created 5 days ago</span>
            <div className="flex space-x-2">
              <button 
                className="flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded"
                onClick={() => navigate('/seller-responses')}
              >
                <FiRefreshCw className="mr-1" size={12} />
              </button>
              <button 
                className="flex items-center text-xs text-white bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
                onClick={() => navigate('/seller-responses')}
              >
                View <FiArrowRight className="ml-1" size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
    <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 text-white">
      <h2 className="text-xl font-semibold">Trends Teaser</h2>
    </div>
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative bg-blue-100 h-32 w-full md:w-40 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6 overflow-hidden">
          <img
            src="/gett.jpg"
            alt="Trending background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <FiTrendingUp size={30} className="text-blue-500 z-10" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">
            Bangalore loves tinted glass – 70%!
          </h3>
          <p className="text-gray-600 mb-4">
            Discover the latest trends in UPVC windows and doors in your area. Make informed decisions for your next purchase.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <FiCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-600">70% of buyers in your area prefer tinted glass</span>
            </li>
            <li className="flex items-center">
              <FiCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-600">60% choose sliding windows for small spaces</span>
            </li>
            <li className="flex items-center">
              <FiCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-600">55% select energy-efficient double glazing</span>
            </li>
          </ul>
          <Link to="/Insights">
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            Explore Trends <FiArrowRight className="ml-1" />
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <button 
      onClick={() => navigate('/seller-responses')}
      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-4 px-6 rounded-lg shadow-md flex items-center justify-center transition-all hover:shadow-lg"
    >
      <span className="mr-2">Track My Request</span>
      <FiArrowRight />
    </button>
    <button 
      onClick={() => navigate('/Insights')}
      className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium py-4 px-6 rounded-lg shadow-md flex items-center justify-center transition-all hover:shadow-lg"
    >
      <span className="mr-2">Explore Trends</span>
      <FiArrowRight />
    </button>
  </div>
</div> */}