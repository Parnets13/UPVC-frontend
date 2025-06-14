import React from "react";
import { useLocation } from "react-router-dom";

const ReviewPage = () => {
  const { state } = useLocation();

  // Dummy Data (used if no state is provided)
  const dummyCategory = { name: "UPVC Windows" };
  const dummyWindowSelections = [
    {
      type: "Sliding Window",
      color: "White",
      location: "Living Room",
      size: "5ft x 4ft",
      quantity: 2,
      total: "20",
      remarks: "Frosted glass",
    },
    {
      type: "Casement Window",
      color: "Wooden Finish",
      location: "Bedroom",
      size: "3ft x 5ft",
      quantity: 3,
      total: "45",
      remarks: "Double glazing",
    },
  ];
  const dummyFormData = {
    fullName: "John Doe",
    contact: "+91 9876543210",
    whatsapp: "+91 9876543210",
    email: "john@example.com",
    projectName: "Dream Home",
    projectAddress: "123 Maple Street, Mumbai",
    pinCode: "400001",
    projectStage: "Planning",
    timeline: "6 months",
    totalSqFeet: "2000",
  };

  const windowSelections = state?.windowSelections || dummyWindowSelections;
  const formData = state?.formData || dummyFormData;
  const category = state?.category || dummyCategory;

  return (
    <div className="mt-12 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Your {category.name} Selection Summary
      </h1>

      {/* Table (Read-only) */}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Personal and Project Info */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4">BUYER DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div><strong>Full Name:</strong> {formData.fullName}</div>
          <div><strong>Contact:</strong> {formData.contact}</div>
          <div><strong>WhatsApp:</strong> {formData.whatsapp}</div>
          <div><strong>Email:</strong> {formData.email}</div>
        </div>

        <h2 className="text-xl font-bold mb-4">PROJECT DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div><strong>Project Name:</strong> {formData.projectName}</div>
          <div><strong>Project Address:</strong> {formData.projectAddress}</div>
          <div><strong>Pin Code:</strong> {formData.pinCode}</div>
          <div><strong>Project Stage:</strong> {formData.projectStage}</div>
          <div><strong>Timeline:</strong> {formData.timeline}</div>
          <div><strong>Total Sq. Feet:</strong> {formData.totalSqFeet}</div>
          <div><strong>Selected Category:</strong> {category.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
