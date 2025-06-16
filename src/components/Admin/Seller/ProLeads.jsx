import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export default function ProLeads() {
  const obj = [
    {
      name: "abc",
      contact: "1112223334",
      email: "abc@gmail.com",
      buy: "3",
      category: "Elite Crest",
      date: "2024-12-15"
    }
  ];

  const obj1 = [
    {
      name: "Sliding Window",
      color: "White",
      location: "Living Room",
      size: "5ft X 4ft",
      quantity: "2",
      totalamount: "₹24,500"
    },
    {
      name: "Sliding Door",
      color: "White",
      location: "Living Room",
      size: "5ft X 7ft",
      quantity: "1",
      totalamount: "₹20,500"
    }
  ];

  const projectDetails = [
    {
      name: "UPVC",
      projectad: "mnbvc",
      pincode: "222222",
      stage: "2",
      area: "100 sq.ft"
    }
  ];

  const customer = [
    { name: "Chandler Bing", phone: "1234567899" },
    { name: "Monica Geller", phone: "1234567899", status: "Done by" },
    { name: "Ross Geller", phone: "1234567899" }
  ];

  const renderTable = (data, fields) => (
    <table className="min-w-full border border-gray-200 text-sm text-gray-700">
      <thead>
        <tr>
          <th className="border-b p-3 bg-gray-100 text-left">Field</th>
          {data.map((_, idx) => (
            <th key={idx} className="border-b p-3 bg-gray-100 text-left">
              Product {idx + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {fields.map((field, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="border-b p-2 font-medium text-gray-800">{field.label}</td>
            {data.map((item, j) => (
              <td key={j} className="border-b p-2">{item[field.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className=" bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="border-b p-4 flex justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Customer Leads</h1>
          <div>
            <button className='text-md mr-2 rounded-sm font-semibold'>Filter:</button>
            <select
              className="text-sm px-3 py-1 border rounded bg-white shadow-sm focus:outline-none"
            >
              <option value="all">All</option>
              <option value="3m">Last 3 Months</option>
              <option value="6m">Last 6 Months</option>
              <option value="1y">Last 1 Year</option>
            </select>
          </div>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-50 text-gray-700 uppercase">
              <tr className='border-b'>
                <th className="p-3 ">Name</th>
                <th className="p-3 ">Contact No.</th>
                <th className="p-3 ">Email ID</th>
                <th className="p-3 ">Category</th>
                <th className="p-3 ">Date</th>
                <th className="p-3 ">Project Details</th>
                <th className="p-3 ">Product Selection</th>
                <th className="p-3 ">Bought</th>
                <th className="p-3 ">Status</th>
              </tr>
            </thead>
            <tbody>
              {obj.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-all ">
                  <td className="p-3 ">{item.name}</td>
                  <td className="p-3 ">{item.contact}</td>
                  <td className="p-3 ">{item.email}</td>
                  <td className="p-3 ">{item.category}</td>
                  <td className="p-3 ">{item.date}</td>
                  {/* Project Details */}
                  <td className="p-3  text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="px-4 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition">View</button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md bg-white rounded-lg shadow-xl p-6">
                        <DialogHeader>
                          <DialogTitle className="text-lg font-semibold">Project Details</DialogTitle>
                          <DialogDescription className="mt-4 grid gap-2 text-sm text-gray-700">
                            {projectDetails.map((detail, idx) => (
                              <div key={idx} className="grid grid-cols-2 gap-2">
                                {Object.entries(detail).map(([key, value]) => (
                                  <React.Fragment key={key}>
                                    <div className="font-medium capitalize text-gray-800">{key.replace(/([a-z])([A-Z])/g, '$1 $2')}:</div>
                                    <div>{value}</div>
                                  </React.Fragment>
                                ))}
                              </div>
                            ))}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </td>

                  {/* Product Selection */}
                  <td className="p-3 text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                          View
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-white rounded-lg shadow-xl p-6">
                        <DialogHeader>
                          <DialogTitle className="text-lg font-semibold">Product Selection</DialogTitle>
                          <DialogDescription className="mt-4 space-y-4 overflow-x-auto">
                            <table className="min-w-full table-auto border border-gray-200 rounded-md shadow-sm text-sm text-gray-700">
                              <thead className="bg-gray-100 text-gray-800">
                                <tr>
                                  <th className="p-3 text-left border-b">Name</th>
                                  <th className="p-3 text-left border-b">Color</th>
                                  <th className="p-3 text-left border-b">Location</th>
                                  <th className="p-3 text-left border-b">Size</th>
                                  <th className="p-3 text-left border-b">Quantity</th>
                                  <th className="p-3 text-left border-b">Total Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                {obj1.map((item, i) => (
                                  <tr key={i} className="even:bg-gray-50 hover:bg-blue-50 transition">
                                    <td className="p-3 border-b">{item.name}</td>
                                    <td className="p-3 border-b">{item.color}</td>
                                    <td className="p-3 border-b">{item.location}</td>
                                    <td className="p-3 border-b">{item.size}</td>
                                    <td className="p-3 border-b">{item.quantity}</td>
                                    <td className="p-3 border-b">{item.totalamount}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </td>


                  {/* Buy Progress */}
                  <td className="p-3 text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-2 px-4 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition">
                          {item.buy}/6 View
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md bg-white rounded-lg shadow-xl p-6">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold">Customer Products</DialogTitle>
                          <DialogDescription className="mt-4">
                            <table className="min-w-full text-sm text-gray-700 border border-gray-200">
                              <thead className="bg-gray-100 text-gray-800">
                                <tr className="border-b">
                                  <th className="p-2 text-left font-semibold text-lg">Customer Name</th>
                                  <th className="p-2 text-left font-semibold text-lg">Phone No.</th>
                                  <th className="p-2 text-left font-semibold text-lg">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {customer.map((cust, i) => (
                                  <tr key={i} className="even:bg-gray-50">
                                    <td className="p-2 font-medium">{cust.name}</td>
                                    <td className="p-2">{cust.phone}</td>
                                    <td className="p-2">
                                      {cust.status ? (
                                        <span className="text-green-600 font-semibold">{cust.status}</span>
                                      ) : (
                                        <span className="text-gray-400"></span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </td>


                  <td className="p-3 text-center font-bold">Pending</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
