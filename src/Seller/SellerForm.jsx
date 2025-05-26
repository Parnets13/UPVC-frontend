import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiCheck, FiChevronDown } from 'react-icons/fi';

const SellerForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        businessName: '',
        pinCodes: '',
        preferences: {
            profiles: false,
            hardware: false,
            glass: false,
            sealants: false,
            reinforcements: false
        },
        deliveryTime: '',
        phone: '',
        video: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                preferences: {
                    ...prev.preferences,
                    [name]: checked
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (formData.phone.length === 10) {
            setTimeout(() => {
                navigate('/SellerOTPVerification', { state: { phone: formData.phone } });
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#3FACE2] to-[#4682C4] p-6 text-white">
                    <h1 className="text-2xl md:text-3xl font-bold text-center">
                        Join UPVC Connect Marketplace
                    </h1>
                    <p className="text-blue-100 text-center mt-2">
                        Get verified buyer leads - 5 free leads to start your journey!
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                    {/* Business Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Business Name*</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g. Premium UPVC Solutions"
                                required
                            />
                        </div>
                    </div>

                    {/* Pin Codes */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Pin Codes Served*</label>
                        <input
                            type="text"
                            name="pinCodes"
                            value={formData.pinCodes}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="e.g. 560001, 560002, 560003"
                            required
                        />
                        <p className="text-xs text-gray-500">Separate multiple pin codes with commas</p>
                    </div>

                    {/* Product Specifications - Checkbox Grid */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Products</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {Object.entries(formData.preferences).map(([key, value]) => (
                                <div key={key} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={key}
                                        name={key}
                                        checked={value}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all"
                                    />
                                    <label htmlFor={key} className="ml-3 text-gray-700 capitalize font-medium">
                                        {key}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Delivery Time */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Average Delivery Time*</label>
                        <select
                            name="deliveryTime"
                            value={formData.deliveryTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjEwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                            required
                        >
                            <option value="">Select delivery time</option>
                            <option value="1-3 days">1-3 days</option>
                            <option value="3-7 days">3-7 days</option>
                            <option value="1-2 weeks">1-2 weeks</option>
                            <option value="2-4 weeks">2-4 weeks</option>
                            <option value="4+ weeks">4+ weeks</option>
                        </select>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Mobile Number*</label>
                        <div className="flex">
                            <div className="flex items-center justify-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                                +91
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="9876543210"
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Introduction Video (60 seconds)
                            <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                Get 2x more leads!
                            </span>
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                            <div className="space-y-1 text-center">
                                {formData.video ? (
                                    <div className="text-sm text-green-600">
                                        <FiCheck className="mx-auto h-8 w-8" />
                                        <p>Video selected: {formData.video.name}</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex justify-center">
                                            <FiUpload className="h-8 w-8 text-gray-400" />
                                        </div>
                                        <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                                                <span>Upload a video</span>
                                                <input
                                                    type="file"
                                                    accept="video/*"
                                                    onChange={(e) => setFormData({...formData, video: e.target.files[0]})}
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            MP4, MOV up to 50MB
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${isSubmitting ? 'bg-blue-400' : 'bg-[#3FACE2] hover:bg-[#4682C4]shadow-md hover:shadow-lg'}`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                "Verify & Get Started"
                            )}
                        </button>
                    </div>

                    <div className="text-center text-xs text-gray-500">
                        By continuing, you agree to our Terms of Service and Privacy Policy
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellerForm;