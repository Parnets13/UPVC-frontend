import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectionPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const category = state?.category || {};
  
  const [selections, setSelections] = useState([]);
  const [currentSelection, setCurrentSelection] = useState({
    type: "",
    color: "",
    location: "",
    size: { width: "", height: "" },
    quantity: 1,
    remarks: "",
  });

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

  const windowTypes = ["Sliding Window", "Casement Window", "Bay Window", "Fixed Window"];
  const colors = ["White", "Wooden Finish", "Black", "Grey", "Brown"];
  const locations = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Dining Room", "Study Room"];
  const projectStages = ["Planning", "Under Construction", "Renovation", "Completed"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "width" || name === "height") {
      setCurrentSelection(prev => ({
        ...prev,
        size: { ...prev.size, [name]: value }
      }));
    } else if (name in currentSelection) {
      setCurrentSelection(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateTotal = (size, quantity) => {
    const { width, height } = size;
    if (!width || !height) return 0;
    const area = parseInt(width) * parseInt(height);
    return area * quantity * 100; // Assuming ¥100 per square foot
  };

  const addSelection = () => {
    if (!currentSelection.type) return;
    
    const total = calculateTotal(currentSelection.size, currentSelection.quantity);
    const newSelection = {
      ...currentSelection,
      total,
      id: Date.now(),
      sizeDisplay: `${currentSelection.size.width}ft x ${currentSelection.size.height}ft`
    };
    
    setSelections([...selections, newSelection]);
    setCurrentSelection({
      type: "",
      color: "",
      location: "",
      size: { width: "", height: "" },
      quantity: 1,
      remarks: "",
    });
  };

  const removeSelection = (id) => {
    setSelections(selections.filter(sel => sel.id !== id));
  };

  const grandTotal = selections.reduce((sum, sel) => sum + sel.total, 0);

  return (
    <div className="mt-24 p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Customize Your {category.name} Selection</h1>
      
      {/* Personal & Project Details Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">PERSONAL DETAILS</h2>
        
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
      </div>
      
      {/* Window Selection Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Add Window Selection</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Window Type</label>
              <select
                name="type"
                value={currentSelection.type}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Type</option>
                {windowTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Color</label>
                <select
                  name="color"
                  value={currentSelection.color}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Color</option>
                  {colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <select
                  name="location"
                  value={currentSelection.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Location</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Width (ft)</label>
                <input
                  type="number"
                  name="width"
                  value={currentSelection.size.width}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Height (ft)</label>
                <input
                  type="number"
                  name="height"
                  value={currentSelection.size.height}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={currentSelection.quantity}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Remarks</label>
              <textarea
                name="remarks"
                value={currentSelection.remarks}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="2"
                placeholder="Special instructions (e.g., frosted glass, double glazing)"
              ></textarea>
            </div>
            
            <button
              onClick={addSelection}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Add to Selections
            </button>
          </div>
        </div>
        
      
        <div className="space-y-6">
          {selections.map(selection => (
            <div key={selection.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{selection.type}</h3>
                <button 
                  onClick={() => removeSelection(selection.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm font-medium">COLOR</p>
                  <p>{selection.color}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">LOCATION</p>
                  <p>{selection.location}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm font-medium">SIZE</p>
                  <p>{selection.sizeDisplay}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">QUANTITY</p>
                  <p>{selection.quantity}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm font-medium">REMARKS</p>
                <p>{selection.remarks || "-"}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-lg font-bold text-right">¥{selection.total.toLocaleString()}</p>
              </div>
            </div>
          ))}
          
          {selections.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">GRAND TOTAL</h3>
                <p className="text-xl font-bold">¥{grandTotal.toLocaleString()}</p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                  REQUEST QUOTE
                </button>
              </div>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default SelectionPage;