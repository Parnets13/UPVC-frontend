import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectionPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const category = state?.category || {};

  const [windowSelections, setWindowSelections] = useState([
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
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    type: "",
    color: "",
    location: "",
    size: "",
    quantity: "",
    total: "",
    remarks: ""
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

  const projectStages = ["Planning", "Under Construction", "Renovation", "Completed"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDelete = (index) => {
    const updatedSelections = windowSelections.filter((_, i) => i !== index);
    setWindowSelections(updatedSelections);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditFormData(windowSelections[index]);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updated = [...windowSelections];
    updated[editingIndex] = editFormData;
    setWindowSelections(updated);
    setIsEditing(false);
  };

  return (
    <div className="mt-24 p-6">
      <h1 className="text-2xl font-bold text-center  mb-6">Customize Your {category.name} Selection</h1>

      {/* Window Selection Table */}
      <div className="mb-12 max-w-6xl mx-auto">
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-sm bg-white">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2 text-left">#</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Color</th>
                <th className="p-2 text-left">Location</th>
                <th className="p-2 text-left">Size</th>
                <th className="p-2 text-left">Qty</th>
                <th className="p-2 text-left">Total</th>
                <th className="p-2 text-left">Remarks</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {windowSelections.map((window, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{window.type}</td>
                  <td className="p-2">{window.color}</td>
                  <td className="p-2">{window.location}</td>
                  <td className="p-2">{window.size}</td>
                  <td className="p-2">{window.quantity}</td>
                  <td className="p-2 font-bold">{window.total}</td>
                  <td className="p-2">{window.remarks}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-3 py-1 bg-black text-white rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Edit Window Selection</h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Window/Door Type*</label>
          <input
            name="type"
            value={editFormData.type}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
            placeholder="Type"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Color</label>
          <input
            name="color"
            value={editFormData.color}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
            placeholder="Color"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Location</label>
          <input
            name="location"
            value={editFormData.location}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
            placeholder="Location"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Size</label>
          <input
            name="size"
            value={editFormData.size}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
            placeholder="Size"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Quantity</label>
          <input
            name="quantity"
            value={editFormData.quantity}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
            placeholder="Quantity"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Total</label>
          <input
            name="total"
            value={editFormData.total}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
            placeholder="Total"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Remark</label>
          <input
            name="remarks"
            value={editFormData.remarks}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
            placeholder="Remarks"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setIsEditing(false)}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Update
        </button>
      </div>
    </div>
  </div>
)}

      {/* Personal & Project Details Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold rounded-lg text-white mb-4 p-4 bg-black">PERSONAL DETAILS</h2>
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
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Postal code"
            />
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
            onClick={() => console.log('Form submitted:', formData)}
            className="px-6 py-2 bg-black text-white rounded"
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
