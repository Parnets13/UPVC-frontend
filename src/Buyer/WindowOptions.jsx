import React, { useState } from "react";
import {
  FiCheckCircle,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";
import dummy2 from "../assets/dummy2.mp4";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
const WindowOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [configurations, setConfigurations] = useState([
    {
      color: "",
      location: "",
      height: "",
      width: "",
      quantity: "1",
      remark: "",
    },
  ]);
  const [currentConfigIndex, setCurrentConfigIndex] = useState(0);

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
    setConfigurations([
      {
        color: "",
        location: "",
        height: "",
        width: "",
        quantity: "1",
        remark: "",
      },
    ]);
    setCurrentConfigIndex(0);
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
    const updatedConfigurations = [...configurations];
    updatedConfigurations[currentConfigIndex] = {
      ...updatedConfigurations[currentConfigIndex],
      [name]: value,
    };
    setConfigurations(updatedConfigurations);
  };

  const addNewConfiguration = () => {
    setConfigurations([
      ...configurations,
      {
        color: "",
        location: "",
        height: "",
        width: "",
        quantity: "1",
        remark: "",
      },
    ]);
    setCurrentConfigIndex(configurations.length);
  };

  const removeConfiguration = (index) => {
    if (configurations.length <= 1) return;
    
    const updatedConfigurations = configurations.filter((_, i) => i !== index);
    setConfigurations(updatedConfigurations);
    
    if (currentConfigIndex >= index) {
      setCurrentConfigIndex(Math.max(0, currentConfigIndex - 1));
    }
  };

  const switchConfiguration = (index) => {
    setCurrentConfigIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("All configurations submitted:", configurations);
  };

  return (
    <div className="min-h-screen bg-white mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            Window <span className="font-medium">Options</span>
          </h3>
          <div className="mt-2 h-0.5 w-20 mb-2 bg-black mx-auto"></div>
          <p className="text-gray-600 text-lg mb-8">
            Choose from our wide range of premium window styles and customization options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {windowOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => openModal(option)}
              className="flex flex-row justify-between items-center group cursor-pointer border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
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

       {selectedOption && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
    <button
      onClick={closeModal}
      className="fixed top-2 right-2 sm:top-4 sm:right-4 text-gray-500 bg-white rounded-full p-2 hover:text-black z-50"
    >
      <FiX size={24} />
    </button>

    {/* Desktop navigation buttons */}
    {currentDesignIndex !== 0 && (
      <button
        onClick={prevDesign}
        className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 text-black shadow-md z-40"
      >
        <FiChevronLeft className="size-5 sm:size-6" />
      </button>
    )}

    {currentDesignIndex !== selectedOption.designs.length - 1 && (
      <button
        onClick={nextDesign}
        className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 text-black shadow-md z-40"
      >
        <FiChevronRight className="size-5 sm:size-6" />
      </button>
    )}

    <div className="bg-white rounded-xl w-full max-w-4xl xl:max-w-6xl h-[90vh] max-h-[700px] flex flex-col lg:flex-row overflow-hidden">
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
        <img src={logo} className="w-20 h-14 sm:w-24 sm:h-16" alt="Logo" />
      </div>
      
      {/* Video Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-black relative">
        <video
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
          muted
        >
          <source src={dummy2} type="video/mp4" />
        </video>

        {/* Mobile navigation buttons */}
        <div className="md:hidden flex justify-between absolute bottom-2 left-0 right-0 px-4">
          <button
            onClick={prevDesign}
            disabled={currentDesignIndex === 0}
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-md ${
              currentDesignIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <FiChevronLeft className="size-5" />
          </button>
          <button
            onClick={nextDesign}
            disabled={currentDesignIndex === selectedOption.designs.length - 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-md ${
              currentDesignIndex === selectedOption.designs.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <FiChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Content Section - Single scrollable area */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col overflow-hidden">
        <div className="p-4 sm:p-6 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-medium text-black">
              {selectedOption.designs[currentDesignIndex].title}
            </h3>
            <h4 className="text-base sm:text-lg font-medium text-black mb-2">
              Key Features
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {selectedOption.designs[currentDesignIndex].features.map(
                (feature, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-0.5 mr-2 flex-shrink-0 size-4 sm:size-5" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-base sm:text-lg font-medium text-black mb-3">
              Request a Quote
            </h4>
            
            <div className="flex flex-wrap gap-2 mb-3 overflow-x-auto pb-2 -mx-1 px-1">
              {configurations.map((_, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => switchConfiguration(index)}
                    className={`px-2 py-1 text-xs sm:text-sm rounded-full flex items-center ${
                      currentConfigIndex === index
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Config {index + 1}
                    {configurations.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeConfiguration(index);
                        }}
                        className="ml-1 text-red-500 hover:text-red-700"
                      >
                        <FiTrash2 className="size-3" />
                      </button>
                    )}
                  </button>
                </div>
              ))}
              <button
                onClick={addNewConfiguration}
                className="flex items-center px-2 py-1 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200"
              >
                <FiPlus className="mr-1 size-3" /> Add
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Color
                  </label>
                  <select
                    name="color"
                    value={configurations[currentConfigIndex].color}
                    onChange={handleInputChange}
                    className="w-full text-xs sm:text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="">Select Color</option>
                    <option value="White">White</option>
                    <option value="Wooden">Wooden</option>
                    <option value="Black">Black</option>
                    <option value="Custom">Custom Color</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={configurations[currentConfigIndex].location}
                    onChange={handleInputChange}
                    placeholder="Installation location"
                    className="w-full text-xs sm:text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Height (ft)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={configurations[currentConfigIndex].height}
                    onChange={handleInputChange}
                    placeholder="Height"
                    className="w-full text-xs sm:text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Width (ft)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={configurations[currentConfigIndex].width}
                    onChange={handleInputChange}
                    placeholder="Width"
                    className="w-full text-xs sm:text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={configurations[currentConfigIndex].quantity}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full text-xs sm:text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Additional Remarks
                </label>
                <textarea
                  name="remark"
                  value={configurations[currentConfigIndex].remark}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full text-xs sm:text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                ></textarea>
              </div>
              <Link to={'/category'}>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit {configurations.length > 1 ? `${configurations.length} Configs` : 'Quote Request'}
                </button>
              </Link>
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