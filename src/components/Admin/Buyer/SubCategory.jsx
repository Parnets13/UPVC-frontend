import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MdModeEditOutline, MdDelete } from 'react-icons/md';

export default function SubCategory() {

  const categoryopt = [
    {
      Sr: "1",
      Option: "Elite Crest",
      video: "",
      title: "Veka",
      feature: ["Premium Quality",
        "Sleek Design",
        "Durability"
      ],
      Benefits: ["Lifetime Warranty",
        "High Security",
        "Custom Designs"
      ]
    },
    {
      Sr: "2",
      Option: "Elite Crest",
      video: "",
      title: "Aluplast",
      feature: ["Premium Quality",
        "Sleek Design",
        "Durability"
      ],
      Benefits: ["Lifetime Warranty",
        "High Security",
        "Custom Designs"
      ]
    },
    {
      Sr: "3",
      Option: "Luxe Frame",
      video: "",
      title: "Fenesta",
      feature: ["Premium Quality",
        "Sleek Design",
        "Durability"
      ],
      Benefits: ["Lifetime Warranty",
        "High Security",
        "Custom Designs"
      ]
    },
    {
      Sr: "4",
      Option: "Luxe Frame",
      video: "",
      title: "Aparna Venster",
      feature: ["Premium Quality",
        "Sleek Design",
        "Durability"
      ],
      Benefits: ["Lifetime Warranty",
        "High Security",
        "Custom Designs"
      ]
    },
    {
      Sr: "5",
      Option: "Core Vantage",
      video: "",
      title: "LG Hausys",
      feature: ["Premium Quality",
        "Sleek Design",
        "Durability"
      ],
      Benefits: ["Lifetime Warranty",
        "High Security",
        "Custom Designs"
      ]
    },

  ]
  const [CategoryOpt, setCategoryOpt] = useState(categoryopt);
  const handleAddBanner = () => {
    setAddNew(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(categoryopt.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categoryopt.slice(startIndex, startIndex + itemsPerPage);

  const [windowOptions, setWindowOptions] = useState([
    "Elite Crest", "Luxe Frame", "Core Vantage",
  ]);

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleDelete = (index) => {
    setCategoryOpt(prev => prev.filter((_, i) => i !== index));
  };



  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className='border-b flex justify-between items-center p-4'>
          <h2 className="text-2xl font-semibold">
            Window & Door Options
          </h2>
          <Dialog>
            <DialogTrigger asChild>
              <button

                className="px-4 h-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                aria-label="Add new banner"
              >
                Add
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold mb-4">
                  Add Banner
                </DialogTitle>
                <DialogDescription>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Video
                      </label>
                      <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                        <input type="file" accept="video/*" className="w-full" />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="windowSelect" className="block text-sm font-medium text-gray-700 mb-2">
                        Select Window Type:
                      </label>
                      <select
                        id="windowSelect"
                        value={selectedOption}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="" disabled>Select an option</option>
                        {windowOptions.map((opt, index) => (
                          <option key={index} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Features
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Features"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Benefits
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Features"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="overflow-x-auto p-4">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-200 text-gray-800">
              <tr className='border-b text-lg'>
                <th className=" px-4 py-2">Sr.No</th>
                <th className=" px-4 py-2">Option</th>
                <th className=" px-4 py-2">Video</th>
                <th className=" px-4 py-2">Title</th>
                <th className=" px-4 py-2">Features</th>
                <th className=" px-4 py-2">Benefits</th>
                <th className=" px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, i) => (
                <tr key={item.Sr} className="hover:bg-gray-50 border-b border-gray-100">
                  <td className=" px-4 py-2 text-center">{item.Sr}</td>
                  <td className=" px-4 py-2">{item.Option}</td>
                  <td className=" px-4 py-2 text-blue-500">
                    <video src='https://www.w3schools.com/html/mov_bbb.mp4' className='h-28' />
                  </td>
                  <td className=" px-4 py-2">{item.title}</td>
                  <td className=" px-4 py-2">
                    <ul className="list-disc pl-5 text-gray-700">
                      {item.feature.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </td>
                  <td className=" px-4 py-2">
                    <ul className="list-disc pl-5 text-gray-700">
                      {item.Benefits.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>

                  </td>
                  <td className="p-3">
                    <div className="flex gap-3 text-lg text-gray-700">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="hover:text-blue-600"
                          >
                            <MdModeEditOutline />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                          <DialogHeader>
                            <DialogTitle className="text-lg font-bold mb-4">
                              Edit Option
                            </DialogTitle>
                            <DialogDescription>
                              <form className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Title
                                  </label>
                                  <input
                                    type="text"


                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Window Option"
                                  />
                                </div>
                                <div className="pt-4">
                                  <button
                                    type="submit"
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 rounded-md transition-colors"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                      <button
                        onClick={() => handleDelete(i)}
                        className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                        title="Delete"
                      >
                        <MdDelete size={20} />
                      </button>


                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
