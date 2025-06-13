import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectionPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const category = state?.category || {};
  
  // Window selection data from the image
  const windowSelections = [
    {
      type: "Sliding Window",
      color: "White",
      location: "Living Room",
      size: "5ft x 4ft",
      quantity: 2,
      total: "20",
      remarks: "Frosted glass"
    },
    {
      type: "Casement Window",
      color: "Wooden Finish",
      location: "Bedroom",
      size: "3ft x 5ft",
      quantity: 3,
      total: "45",
      remarks: "Double glazing"
    },
    {
      type: "Bay Window",
      color: "Beige",
      location: "Dining Area",
      size: "6ft x 5ft",
      quantity: 1,
      total: "30",
      remarks: "Triple glazing"
    }
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    whatsapp: "",
    email: "",
    projectName: "",
    projectAddress: "",
    pinCode: "",
    projectStage: "",
    timeline: "",
    totalSqFeet: "",
  });

  const projectStages = ["Planning", "Under Construction", "Renovation", "Completed"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-24 p-6 ">
      <h1 className="text-2xl font-bold mb-6">Customize Your {category.name} Selection</h1>
      
      {/* Window Selection Cards Section */}
      <div className="mb-12 max-w-8xl mx-auto">
        <div className="flex justify-center items-center mb-6 p-4 bg-black rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-white">YOUR SELECTIONS</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {windowSelections.map((window, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-4 uppercase">{window.type}</h3>
              
              {/* Color and Location */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase">Color</h4>
                  <p className="text-gray-900">{window.color}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase">Location</h4>
                  <p className="text-gray-900">{window.location}</p>
                </div>
              </div>
              
              {/* Size and Quantity */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase">Size</h4>
                  <p className="text-gray-900">{window.size}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase">Quantity</h4>
                  <p className="text-gray-900">{window.quantity}</p>
                </div>
              </div>
              
              {/* Total */}
             <div className="mb-4 border-t flex justify-between">

                <h4 className="font-bold text-gray-700 text-sm uppercase ">Total</h4>
                <p className="text-xl font-bold text-gray-900">{window.total}</p>
              </div>
              
              {/* Remarks */}
              <div className="border-t">
                <h4 className="font-bold text-gray-700 text-sm uppercase">Remarks</h4>
                <p className="text-gray-900">{window.remarks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal & Project Details Form */}
      <div className="bg- p-6 rounded-lg shadow-md mb-8 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold  rounded-lg  text-white mb-4 p-4 bg-black">PERSONAL DETAILS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Contact</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="WhatsApp number"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Email address"
            />
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-4">PROJECT DETAILS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Project name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Project Address</label>
            <input
              type="text"
              name="projectAddress"
              value={formData.projectAddress}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Full address"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Pin Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Postal code"
              />
              <button className="whitespace-nowrap px-4 bg-gray-100 rounded hover:bg-gray-200">
                Google Map Link
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Project Stage</label>
              <select
                name="projectStage"
                value={formData.projectStage}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Stage</option>
                {projectStages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Timeline</label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Expected timeline"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Total Sq. Feet</label>
            <input
              type="text"
              name="totalSqFeet"
              value={formData.totalSqFeet}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Total square feet"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Selected Category</label>
            <div className="p-2 border rounded bg-gray-50">
              {category.name || "Not selected"}
            </div>
          </div>
          
        </div>
        
  <div className="mt-8 text-center">
    <button
      onClick={() => console.log('Request submitted:', formData)}
      className="px-6 py-2 bg-black text-white rounded  transition"
    >
      Request
    </button>
  </div>
      </div>
      
    </div>
  );
};

export default SelectionPage;