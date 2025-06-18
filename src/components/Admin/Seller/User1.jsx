import React, { useState } from 'react';
import { 
  MdModeEditOutline, MdDelete, MdPictureAsPdf, MdBusiness, MdPerson, 
  MdDateRange, MdFactory, MdPhone, MdEmail, MdLanguage, MdLocationOn, 
  MdPayment, MdVideoLibrary, MdFilterList, MdChevronLeft, MdChevronRight 
} from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SellerManagement() {
  const [activeTab, setActiveTab] = useState('history');
  const [selectedBuyerIndex, setSelectedBuyerIndex] = useState(0);
  const [blockedStatus, setBlockedStatus] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('All');
  const itemsPerPage = 3;
  
  const [companies] = useState([
    {
      id: 1,
      Company: "UPVC Solutions Inc.",
      Address: "123 Industrial Estate, Mumbai - 400001, Maharashtra, India",
      City: "Mumbai",
      Pin: "400001",
      email: "contact@upvcsolutions.com",
      gst: "22AAAAA0000A1Z5",
      gstCertificate: "gst_certificate.pdf",
      visitingCard: "visiting_card.jpg",
      person: "Ramesh Patel (Managing Director)",
      num: "+91 98765 43210",
      whatsapp: "+91 98765 43210",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      brand: "Fenesta, Koemmerling, LG Hausys",
      yearInBusiness: "2016",
      manufacturing: "Yes, we manufacture all products in-house",
      website: "www.upvcsolutions.com",
      status: "Approved"
    },
    {
      id: 2,
      Company: "Window World Enterprises",
      Address: "456 Trade Center, Bangalore - 560001, Karnataka, India",
      City: "Bangalore",
      Pin: "560001",
      email: "sales@windowworld.com",
      gst: "29BBBBB0000B2Z6",
      gstCertificate: "gst_certificate2.pdf",
      visitingCard: "visiting_card2.jpg",
      person: "Priya Sharma (Sales Director)",
      num: "+91 87654 32109",
      whatsapp: "+91 87654 32109",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      brand: "Aparna, Reynaers, Deceuninck",
      yearInBusiness: "2012",
      manufacturing: "No, we source from trusted manufacturers",
      website: "www.windowworldindia.com",
      status: "Approved"
    },
    {
      id: 3,
      Company: "Eco Fenster Systems",
      Address: "789 Green Park, Delhi - 110001, India",
      City: "Delhi",
      Pin: "110001",
      email: "info@ecofenster.com",
      gst: "07CCCCC0000C3Z7",
      gstCertificate: "gst_certificate3.pdf",
      visitingCard: "visiting_card3.jpg",
      person: "Amit Kumar (CEO)",
      num: "+91 76543 21098",
      whatsapp: "+91 76543 21098",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      brand: "Schüco, Aluplast, LG Hausys",
      yearInBusiness: "2018",
      manufacturing: "Yes, specialized in energy-efficient windows",
      website: "www.ecofenster.in",
      status: "Pending"
    }
  ]);

  const purchaseHistory = [
    {
      id: 1,
      companyId: 1,
      location: "Mumbai",
      area: "10 sq.ft",
      timeline: "within 2 weeks",
      spaces: "Tinted glass, sliding mechanism",
      date: "2023-05-15",
      amount: "₹25,000"
    },
    {
      id: 2,
      companyId: 1,
      location: "Navi Mumbai",
      area: "15 sq.ft",
      timeline: "within 3 weeks",
      spaces: "Clear glass, casement windows",
      date: "2023-06-20",
      amount: "₹37,500"
    },
    {
      id: 3,
      companyId: 2,
      location: "Bangalore",
      area: "25 sq.ft",
      timeline: "within 4 weeks",
      spaces: "Double glazed, tilt & turn",
      date: "2023-07-10",
      amount: "₹62,000"
    },
    {
      id: 4,
      companyId: 3,
      location: "Gurgaon",
      area: "18 sq.ft",
      timeline: "within 3 weeks",
      spaces: "Energy efficient, soundproof",
      date: "2023-08-05",
      amount: "₹45,000"
    }
  ];

  const buyerDetails = [
    {
      fullName: "John Doe",
      contact: "9876543210",
      whatsapp: "9876543210",
      email: "john.doe@example.com",
      projectName: "Residential Tower",
      projectAddress: "123 Main Street, Mumbai",
      pinCode: "400001",
      projectStage: "Planning",
      timeline: "3 months",
      totalSqFeet: "1500",
      selectedCategory: "Windows"
    },
    {
      fullName: "Rajesh Kumar",
      contact: "8765432109",
      whatsapp: "8765432109",
      email: "rajesh.kumar@example.com",
      projectName: "Commercial Complex",
      projectAddress: "456 Business Park, Navi Mumbai",
      pinCode: "400706",
      projectStage: "Construction",
      timeline: "6 months",
      totalSqFeet: "5000",
      selectedCategory: "Doors and Windows"
    },
    {
      fullName: "Priya Sharma",
      contact: "7654321098",
      whatsapp: "7654321098",
      email: "priya.sharma@example.com",
      projectName: "IT Park",
      projectAddress: "789 Tech Zone, Bangalore",
      pinCode: "560001",
      projectStage: "Design",
      timeline: "4 months",
      totalSqFeet: "8000",
      selectedCategory: "Curtain Walls"
    },
    {
      fullName: "Amit Patel",
      contact: "6543210987",
      whatsapp: "6543210987",
      email: "amit.patel@example.com",
      projectName: "Luxury Apartments",
      projectAddress: "101 High Street, Gurgaon",
      pinCode: "122001",
      projectStage: "Execution",
      timeline: "2 months",
      totalSqFeet: "3000",
      selectedCategory: "Sliding Windows"
    }
  ];

  const filteredCompanies = companies.filter(company => 
    statusFilter === 'All' || company.status === statusFilter
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderFilePreview = (file, type = 'pdf') => {
    if (type === 'pdf') {
      return (
        <div className="flex items-center gap-2 text-black">
          <MdPictureAsPdf className="text-xl" />
          <span className="text-sm">View PDF</span>
        </div>
      );
    } else if (type === 'image') {
      return (
        <img 
          src={`/uploads/${file}`} 
          alt="Preview" 
          className="h-16 w-16 object-cover rounded border"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/default-image.jpg';
          }}
        />
      );
    } else if (type === 'video') {
      return (
        <div className="flex items-center gap-2 text-black">
          <MdVideoLibrary className="text-xl" />
          <span className="text-sm">View Video</span>
        </div>
      );
    }
  };

  const toggleBlockStatus = (id) => {
    setBlockedStatus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBuyerDetailsClick = (index) => {
    setSelectedBuyerIndex(index);
    setActiveTab('buyer');
  };

    return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Seller Management</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1); // Reset to first page when filter changes
                }}
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="All">All Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
              <MdFilterList className="absolute right-3 top-2.5 text-gray-400" />
            </div>
            <span className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredCompanies.length)} of {filteredCompanies.length} sellers
            </span>
          </div>
        </div>
        
        <div className='p-4'>
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="overflow-auto" style={{ maxHeight: '70vh' }}>
              <table className="w-full min-w-max">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Company Info</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Contact Details</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Documents</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Purchase Info</th>
                  </tr>
                </thead>
             <tbody className="divide-y divide-gray-200">
                  {currentItems.map((company) => {
                    const companyPurchases = purchaseHistory.filter(p => p.companyId === company.id);
                    return (
                      <tr key={company.id} className="hover:bg-gray-50">
                        {/* Company Info */}
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <div className="flex items-start gap-3">
                            <MdBusiness className="text-gray-400 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium">{company.Company}</div>
                              <div className="text-gray-500 text-xs mt-1 flex items-center">
                                <MdLocationOn className="mr-1" />
                                {company.Address}
                              </div>
                              <div className="text-gray-500 text-xs mt-1">
                                {company.City} - {company.Pin}
                              </div>
                              <div className="mt-2">
                                <div className="text-xs font-medium">Brands:</div>
                                <div className="text-xs text-gray-500">{company.brand}</div>
                              </div>
                              <div className="mt-1">
                                <div className="text-xs font-medium">Since:</div>
                                <div className="text-xs text-gray-500">{company.yearInBusiness}</div>
                              </div>
                              <div className="mt-1">
                                <div className="text-xs font-medium">Manufacturing:</div>
                                <div className="text-xs text-gray-500">{company.manufacturing}</div>
                              </div>
                            </div>
                          </div>
                        </td>
                        
                        {/* Contact Details */}
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <MdPerson className="text-gray-400 flex-shrink-0" />
                              <span>{company.person}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MdPhone className="text-gray-400 flex-shrink-0" />
                              <span>{company.num}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MdPhone className="text-gray-400 flex-shrink-0" />
                              <span>WhatsApp: {company.whatsapp}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MdEmail className="text-gray-400 flex-shrink-0" />
                              <span>{company.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MdLanguage className="text-gray-400 flex-shrink-0" />
                              <span>{company.website}</span>
                            </div>
                            <div>
                              <div className="text-xs font-medium">GST:</div>
                              <div className="text-xs text-gray-500">{company.gst}</div>
                            </div>
                          </div>
                        </td>
                        
                        {/* Documents */}
                        <td className="px-4 py-3 text-sm">
                          <div className="flex flex-col gap-3">
                            {/* GST Certificate */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="text-left">
                                  {renderFilePreview(company.gstCertificate, 'pdf')}
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl bg-white rounded-lg shadow-xl p-6">
                                <DialogHeader>
                                  <DialogTitle className="text-lg font-semibold mb-4">
                                    GST Certificate - {company.Company}
                                  </DialogTitle>
                                  <iframe 
                                    src={`/uploads/${company.gstCertificate}`}
                                    className="w-full h-[70vh] border rounded"
                                    title="GST Certificate"
                                  />
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>
                            
                            {/* Visiting Card */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="text-left">
                                  {renderFilePreview(company.visitingCard, 'image')}
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-md bg-white rounded-lg shadow-xl p-6">
                                <DialogHeader>
                                  <DialogTitle className="text-lg font-semibold mb-4">
                                    Visiting Card - {company.person}
                                  </DialogTitle>
                                  <img 
                                    src={`/uploads/${company.visitingCard}`}
                                    alt="Visiting Card"
                                    className="w-full h-auto rounded-lg border"
                                  />
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>
                            
                            {/* Product Video */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="text-left">
                                  {renderFilePreview(company.video, 'video')}
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl bg-white rounded-lg shadow-xl p-6">
                                <DialogHeader>
                                  <DialogTitle className="text-lg font-semibold mb-4">
                                    Product Video - {company.Company}
                                  </DialogTitle>
                                  <video
                                    src={company.video}
                                    controls
                                    className="w-full h-auto rounded-lg border"
                                  />
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </td>
                        
                        {/* Status */}
                        <td className="px-4 py-3 text-sm">
                          <select 
                            value={company.status}
                            className={`w-full px-2 py-1 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 ${
                              company.status === 'Approved' ? 'border-gray-300 bg-gray-50 text-gray-700 focus:ring-gray-500' :
                              company.status === 'Rejected' ? 'border-red-300 bg-red-50 text-red-700 focus:ring-red-500' :
                              'border-gray-300 bg-gray-50 text-gray-700 focus:ring-gray-500'
                            }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Approved">Approved</option>
                          </select>
                          <button
                            onClick={() => toggleBlockStatus(company.id)}
                            className={`mt-2 w-full px-2 py-1 rounded-md text-xs font-medium transition ${
                              blockedStatus[company.id] ? "bg-black text-white" : "bg-gray-500 text-white"
                            }`}
                          >
                            {blockedStatus[company.id] ? "BLOCKED" : "ACTIVE"}
                          </button>
                        </td>
                        
                        {/* Purchase Info */}
                        <td className="px-4 py-3 text-sm">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button 
                                className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                                onClick={() => setActiveTab('history')}
                              >
                                View ({companyPurchases.length})
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-white rounded-lg shadow-xl p-6" style={{ maxHeight: '80vh' }}>
                              <DialogHeader>
                                <DialogTitle className="text-lg font-semibold mb-4">
                                  Purchase Details - {company.Company}
                                </DialogTitle>
                                <div className="border-b border-gray-200 mb-4">
                                  <nav className="flex space-x-4">
                                    <button
                                      onClick={() => setActiveTab('history')}
                                      className={`py-2 px-3 border-b-2 font-medium text-sm ${activeTab === 'history' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                    >
                                      History
                                    </button>
                                    
                                  </nav>
                                </div>
                                
                                <div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
                                  {activeTab === 'history' ? (
                                    <div className="overflow-x-auto">
                                      <table className="min-w-full text-sm border border-gray-200">
                                        <thead className="bg-gray-100">
                                          <tr>
                                            <th className="px-4 py-2 font-semibold text-gray-700">Date</th>
                                            <th className="px-4 py-2 font-semibold text-gray-700">Location</th>
                                            <th className="px-4 py-2 font-semibold text-gray-700">Area</th>
                                            <th className="px-4 py-2 font-semibold text-gray-700">Amount</th>
                                            <th className="px-4 py-2 font-semibold text-gray-700">Timeline</th>
                                            <th className="px-4 py-2 font-semibold text-gray-700">Spaces</th>
                                            <th className="px-4 py-2 font-semibold text-gray-700">Actions</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {companyPurchases.map((item, i) => (
                                            <tr key={i} className="even:bg-gray-50">
                                              <td className="px-4 py-2">{item.date}</td>
                                              <td className="px-4 py-2">{item.location}</td>
                                              <td className="px-4 py-2">{item.area}</td>
                                              <td className="px-4 py-2">{item.amount}</td>
                                              <td className="px-4 py-2">{item.timeline}</td>
                                              <td className="px-4 py-2">{item.spaces}</td>
                                              <td className="px-4 py-2">
                                                <button 
                                                  onClick={() => handleBuyerDetailsClick(i)}
                                                  className="px-2 py-1 bg-black text-white text-xs rounded hover:bg-gray-800 transition"
                                                >
                                                  Buyer Details
                                                </button>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  ) : (
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">FULL NAME</h3>
                                          <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].fullName}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">CONTACT</h3>
                                          <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].contact}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">WHATSAPP</h3>
                                          <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].whatsapp}</p>
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-medium text-gray-500">EMAIL ADDRESS</h3>
                                          <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].email}</p>
                                        </div>
                                      </div>
                                      
                                      <div className="pt-4 border-t border-gray-200">
                                        <h3 className="text-md font-medium text-gray-700 mb-3">PROJECT DETAILS</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div>
                                            <h3 className="text-sm font-medium text-gray-500">PROJECT NAME</h3>
                                            <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].projectName}</p>
                                          </div>
                                          <div>
                                            <h3 className="text-sm font-medium text-gray-500">PROJECT ADDRESS</h3>
                                            <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].projectAddress}</p>
                                          </div>
                                          <div>
                                            <h3 className="text-sm font-medium text-gray-500">PIN CODE</h3>
                                            <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].pinCode}</p>
                                          </div>
                                          <div>
                                            <h3 className="text-sm font-medium text-gray-500">PROJECT STAGE</h3>
                                            <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].projectStage}</p>
                                          </div>
                                          <div>
                                            <h3 className="text-sm font-medium text-gray-500">TIMELINE</h3>
                                            <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].timeline}</p>
                                          </div>
                                          <div>
                                            <h3 className="text-sm font-medium text-gray-500">TOTAL SQ. FEET</h3>
                                            <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].totalSqFeet}</p>
                                          </div>
                                          <div>
                                            <h3 className="text-sm font-medium text-gray-500">SELECTED CATEGORY</h3>
                                            <p className="mt-1 text-sm text-gray-900">{buyerDetails[selectedBuyerIndex].selectedCategory}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          {/* Pagination controls */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-700">
                  Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <MdChevronLeft className="h-5 w-5" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-md text-sm ${currentPage === number ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <MdChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}