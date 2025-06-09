import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiArrowRight, FiCheckCircle, FiRefreshCw } from "react-icons/fi";
import dummyVideo from "../assets/dummy.mp4"
import WindowPrice from './WindowPrice';
import WindowOptions from './WindowOptions';
import WhiteVsColor from './WhiteVsColor';
import TheProcess from './TheProcess';
const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('windowPrice');
  
  const tabs = [
    { id: 'windowPrice', label: 'WINDOW PRICE' },
    { id: 'windowOptions', label: 'WINDOW OPTIONS' },
    { id: 'whiteVsColor', label: 'WHITE vs COLOR' },
    { id: 'theProcess', label: 'THE PROCESS' }
  ];
 
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