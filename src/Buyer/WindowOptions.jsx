import React, { useState } from "react";
import {
  FiCheckCircle,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import dummy2 from "../assets/dummy2.mp4";

const WindowOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [formData, setFormData] = useState({
    color: "",
    location: "",
    height: "",
    width: "",
    quantity: "1",
    remark: "",
  });

  const windowOptions = [
    {
      id: 1,
      name: "SLIDING WINDOWS",
      count: 4,
      designs: [
        {
          id: 1,
          title: "2 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            "Smooth sliding mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
        {
          id: 2,
          title: "3 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            "Smooth mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
        {
          id: 3,
          title: "4 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            " sliding mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
        {
          id: 4,
          title: "5 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            "Smooth sliding mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "TRACKING WINDOWS",
      count: 4,
      designs: [
        {
          id: 1,
          title: "2 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            "Smooth sliding mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
        {
          id: 2,
          title: "2 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            "Smooth sliding mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
        {
          id: 3,
          title: "2 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            "Smooth sliding mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
        {
          id: 4,
          title: "2 Track Sliding Window",
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
          features: [
            "Smooth sliding mechanism",
            "Enhanced weatherproofing",
            "Multi-point locking system",
            "Energy efficient glass options",
          ],
        },
      ],
    },
  ];

  const openModal = (option) => {
    setSelectedOption(option);
    setCurrentDesignIndex(0);
    setFormData({
      color: "",
      location: "",
      height: "",
      width: "",
      quantity: "1",
      remark: "",
    });
  };

  const closeModal = () => {
    setSelectedOption(null);
  };

  const nextDesign = () => {
    if (currentDesignIndex < selectedOption.designs.length - 1) {
      setCurrentDesignIndex(currentDesignIndex + 1);
    }
  };

  const prevDesign = () => {
    if (currentDesignIndex > 0) {
      setCurrentDesignIndex(currentDesignIndex - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white mt-24 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          {/* <h3 className="text-3xl font-medium text-black mb-4">
            
          </h3> */}
          <h3 className="text-3xl font-light  tracking-tight text-black sm:text-4xl">
            Window <span className="font-medium"> Options</span>
          </h3>
          <div className="mt-2 h-0.5 w-20 mb-2 bg-black mx-auto"></div>
          <p className="text-gray-600 text-lg mb-8">
            Choose from our wide range of premium window styles and
            customization options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {windowOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => openModal(option)}
              className="flex flex-row justify-between   items-center group cursor-pointer border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-5">
                <h4 className="text-xl font-medium text-black mb-2">
                  {option.name}
                </h4>
                <p className="text-gray-600">
                  {option.count} design options available
                </p>
                <div className="mt-4 flex items-center text-blue-600">
                  <span className="text-sm font-medium">View Designs</span>
                  <FiChevronRight className="ml-1" />
                </div>
              </div>
              <svg
                className="w-16 h-16 pr-5 text-gray-400 group-hover:text-black transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedOption && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 text-gray-500 bg-white rounded-full p-2 hover:text-black z-50"
            >
              <FiX size={24} />
            </button>

            {currentDesignIndex !== 0 && (
              <button
                onClick={prevDesign}
                className="fixed left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 text-black shadow-md z-40"
              >
                <FiChevronLeft className="size-6" />
              </button>
            )}

            {currentDesignIndex !== selectedOption.designs.length - 1 && (
              <button
                onClick={nextDesign}
                className="fixed right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 text-black shadow-md z-40"
              >
                <FiChevronRight className="size-6" />
              </button>
            )}

            {/* Modal Content */}
            <div className="bg-white rounded-xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col relative">
              <div className="flex flex-col lg:flex-row flex-1 overflow-auto">
                <div className="lg:w-1/2">
                  <div className="aspect-w-16 aspect-h-9 h-full bg-black overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source src={dummy2} type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div className="lg:w-1/2 p-6 max-h-[90vh] overflow-y-auto">
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-black">
                      {selectedOption.name} -{" "}
                      {selectedOption.designs[currentDesignIndex].title}
                    </h3>
                    <h4 className="text-lg font-medium text-black mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedOption.designs[currentDesignIndex].features.map(
                        (feature, index) => (
                          <li key={index} className="flex items-start">
                            <FiCheckCircle className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="p-5 rounded-lg">
                    <h4 className="text-lg font-medium text-black mb-4">
                      Request a Quote
                    </h4>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Color
                          </label>
                          <select
                            name="color"
                            value={formData.color}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          >
                            <option value="">Select Color</option>
                            <option value="White">White</option>
                            <option value="Wooden">Wooden</option>
                            <option value="Black">Black</option>
                            <option value="Custom">Custom Color</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Where will it be installed?"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Height (ft)
                          </label>
                          <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleInputChange}
                            placeholder="Enter height"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Width (ft)
                          </label>
                          <input
                            type="number"
                            name="width"
                            value={formData.width}
                            onChange={handleInputChange}
                            placeholder="Enter width"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Quantity
                          </label>
                          <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            min="1"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Remarks
                        </label>
                        <textarea
                          name="remark"
                          value={formData.remark}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                      >
                        Submit Quote Request
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WindowOptions;
