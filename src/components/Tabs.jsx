// Tabs.jsx
import React, { useState } from "react";

const Tabs = ({ tabs, tabComponents, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="border-gray-200 mb-8 flex flex-col items-center justify-center mt-10">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none transition-colors ${
                activeTab === tab.id
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
  );
};

export default Tabs;
