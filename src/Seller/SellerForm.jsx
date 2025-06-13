import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiCheck, FiChevronDown } from 'react-icons/fi';

const SellerForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        address: '',
        contactPerson: '',
        contactNumber: '',
        whatsappNumber: '',
        yearInBusiness: '',
        manufacturing: '',
        capacity: '',
        email: '',
        website: '',
        gsgCertificate: null,
        visitingCard: null,
        brandProfiles: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showBrandDropdown, setShowBrandDropdown] = useState(false);

    const popularBrands = [
        "Asian Paints",
        "Berger Paints",
        "Dulux",
        "Nerolac",
        "Indigo Paints",
        "Other"
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleBrandSelect = (brand) => {
        setFormData(prev => ({
            ...prev,
            brandProfiles: brand
        }));
        setShowBrandDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/Sellerhome');
        }, 1500);
    };

    return (
        <div className="h-screen bg-gray-50 p-4 overflow-hidden">
            <div className="h-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col">
                {/* Header */}
                <div className="bg-black p-4 text-white rounded">
                    <h1 className="text-xl font-bold text-center">Company Registration</h1>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-auto p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Row 1 */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Company Name*</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Address*</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Contact Person*</label>
                            <input
                                type="text"
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Contact No*</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-2 text-xs rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    maxLength="10"
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-r focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">WhatsApp No*</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-2 text-xs rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    name="whatsappNumber"
                                    value={formData.whatsappNumber}
                                    onChange={handleChange}
                                    maxLength="10"
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-r focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Year in Business*</label>
                            <input
                                type="text"
                                name="yearInBusiness"
                                value={formData.yearInBusiness}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Row 4 */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Manufacturing*</label>
                            <input
                                type="text"
                                name="manufacturing"
                                value={formData.manufacturing}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Capacity*</label>
                            <input
                                type="text"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Row 5 */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Website</label>
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Row 6 - File Uploads */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">GST Certificate*</label>
                            <label className="flex flex-col items-center justify-center w-full p-3 border border-gray-300 rounded cursor-pointer hover:bg-blue-50">
                                {formData.gsgCertificate ? (
                                    <div className="flex items-center text-green-600 text-sm">
                                        <FiCheck className="mr-1" />
                                        {formData.gsgCertificate.name}
                                    </div>
                                ) : (
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FiUpload className="mr-1" />
                                        <span>Upload File</span>
                                    </div>
                                )}
                                <input 
                                    type="file" 
                                    name="gsgCertificate" 
                                    onChange={handleChange} 
                                    className="hidden" 
                                    required 
                                />
                            </label>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Visiting Card*</label>
                            <label className="flex flex-col items-center justify-center w-full p-3 border border-gray-300 rounded cursor-pointer hover:bg-blue-50">
                                {formData.visitingCard ? (
                                    <div className="flex items-center text-green-600 text-sm">
                                        <FiCheck className="mr-1" />
                                        {formData.visitingCard.name}
                                    </div>
                                ) : (
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FiUpload className="mr-1" />
                                        <span>Upload File</span>
                                    </div>
                                )}
                                <input 
                                    type="file" 
                                    name="visitingCard" 
                                    onChange={handleChange} 
                                    className="hidden" 
                                    required 
                                />
                            </label>
                        </div>
                    </div>

                    {/* Brand Dropdown */}
                    <div className="space-y-1 relative">
                        <label className="block text-xs font-medium text-gray-700">Brand/Profile Used*</label>
                        <div 
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 flex justify-between items-center cursor-pointer"
                            onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                        >
                            <span className={formData.brandProfiles ? "" : "text-gray-400"}>
                                {formData.brandProfiles || "Select brand"}
                            </span>
                            <FiChevronDown className={`text-gray-500 ${showBrandDropdown ? 'rotate-180' : ''}`} />
                        </div>
                        
                        {showBrandDropdown && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg text-sm max-h-40 overflow-auto">
                                {popularBrands.map((brand) => (
                                    <div 
                                        key={brand}
                                        className={`px-3 py-2 hover:bg-blue-50 cursor-pointer ${formData.brandProfiles === brand ? 'bg-blue-100' : ''}`}
                                        onClick={() => handleBrandSelect(brand)}
                                    >
                                        {brand}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
<div className="pt-2 flex justify-center">
    <button
        type="submit"
        disabled={isSubmitting}
        className={`w-40 py-2 px-4 rounded font-medium text-white text-sm ${
            isSubmitting ? 'bg-black' : 'bg-blue-600 hover:bg-blue-700'
        }`}
    >
        {isSubmitting ? (
            <span className="flex items-center justify-center">
                <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                Processing...
            </span>
        ) : (
            "SUBMIT"
        )}
    </button>
</div>

                </form>
            </div>
        </div>
    );
};

export default SellerForm;