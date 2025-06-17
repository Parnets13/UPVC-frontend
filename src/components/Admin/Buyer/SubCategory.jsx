import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete, MdArrowBack, MdArrowForward, MdAdd } from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SubCategory() {
  const [categoryopt, setCategoryOpt] = useState([
    {
      Sr: "1",
      Option: "Elite Crest",
      media: {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      title: "Veka",
      feature: ["Premium Quality", "Sleek Design", "Durability"],
      Benefits: ["Lifetime Warranty", "High Security", "Custom Designs"]
    },
    {
      Sr: "2",
      Option: "Elite Crest",
      media: {
        type: "image",
        url: "https://via.placeholder.com/150"
      },
      title: "Aluplast",
      feature: ["Premium Quality", "Sleek Design", "Durability"],
      Benefits: ["Lifetime Warranty", "High Security", "Custom Designs"]
    },
  ]);

  const [windowOptions] = useState([
    "Elite Crest", "Luxe Frame", "Core Vantage",
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(categoryopt.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categoryopt.slice(startIndex, startIndex + itemsPerPage);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [newMedia, setNewMedia] = useState(null);

  // Inline edit state
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleAddNew = () => {
    setCurrentItem({
      Sr: (categoryopt.length + 1).toString(),
      Option: "",
      media: { type: "video", url: "" },
      title: "",
      feature: "",
      Benefits: ""
    });
    setIsModalOpen(true);
  };

  const handleEditModal = (item) => {
    setCurrentItem({
      ...item,
      feature: item.feature.join(", "),
      Benefits: item.Benefits.join(", ")
    });
    setIsModalOpen(true);
  };

  const handleInlineEdit = (id) => {
    setEditingId(id);
    const itemToEdit = categoryopt.find(item => item.Sr === id);
    setEditData({
      ...itemToEdit,
      feature: itemToEdit.feature.join(", "),
      Benefits: itemToEdit.Benefits.join(", ")
    });
  };

  const handleSaveModal = () => {
    const updatedItem = {
      ...currentItem,
      feature: currentItem.feature.split(",").map(f => f.trim()),
      Benefits: currentItem.Benefits.split(",").map(b => b.trim()),
      media: newMedia || currentItem.media
    };

    if (categoryopt.some(item => item.Sr === currentItem.Sr)) {
      // Update existing item
      setCategoryOpt(prev => 
        prev.map(item => item.Sr === currentItem.Sr ? updatedItem : item)
      );
    } else {
      // Add new item
      setCategoryOpt(prev => [...prev, updatedItem]);
    }
    setIsModalOpen(false);
    setNewMedia(null);
  };

  const handleSaveInline = (id) => {
    const updatedItems = categoryopt.map(item => {
      if (item.Sr === id) {
        return {
          ...editData,
          feature: editData.feature.split(",").map(f => f.trim()),
          Benefits: editData.Benefits.split(",").map(b => b.trim()),
          media: newMedia || editData.media
        };
      }
      return item;
    });
    setCategoryOpt(updatedItems);
    setEditingId(null);
    setNewMedia(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewMedia(null);
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (editingId) {
      setEditData(prev => ({ ...prev, [field]: value }));
    } else {
      setCurrentItem(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isVideo = file.type.includes("video");
    const reader = new FileReader();
    reader.onload = (event) => {
      const media = {
        type: isVideo ? "video" : "image",
        url: event.target.result
      };
      setNewMedia(media);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = categoryopt.filter(item => item.Sr !== id)
        .map((item, i) => ({ ...item, Sr: (i + 1).toString() }));
      setCategoryOpt(updatedItems);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className='border-b flex justify-between items-center p-4'>
          <h2 className="text-2xl font-semibold">Window & Door Options</h2>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-1 px-4 h-8 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            <MdAdd size={18} />
            Add
          </button>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-200 text-gray-800">
              <tr className='border-b text-lg'>
                <th className="px-4 py-2">Sr.No</th>
                <th className="px-4 py-2">Option</th>
                <th className="px-4 py-2">Media</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Features</th>
                <th className="px-4 py-2">Benefits</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.Sr} className="hover:bg-gray-50 border-b border-gray-100">
                  <td className="px-4 py-2 text-center">{item.Sr}</td>
                  
                  {/* Option Field */}
                  <td className="px-4 py-2">
                    {editingId === item.Sr ? (
                      <select
                        value={editData.Option}
                        onChange={(e) => handleInputChange(e, 'Option')}
                        className="w-full px-2 py-1 border rounded"
                      >
                        <option value="">Select Option</option>
                        {windowOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      item.Option
                    )}
                  </td>
                  
                  {/* Media Field */}
                  <td className="px-4 py-2">
                    {editingId === item.Sr ? (
                      <div>
                        <input
                          type="file"
                          accept="image/*,video/*"
                          onChange={handleMediaChange}
                          className="mb-2"
                        />
                        {newMedia ? (
                          newMedia.type === "video" ? (
                            <video src={newMedia.url} controls className="h-28" />
                          ) : (
                            <img src={newMedia.url} alt="Preview" className="h-28 object-cover" />
                          )
                        ) : (
                          item.media.type === "video" ? (
                            <video src={item.media.url} controls className="h-28" />
                          ) : (
                            <img src={item.media.url} alt="Preview" className="h-28 object-cover" />
                          )
                        )}
                      </div>
                    ) : (
                      item.media.type === "video" ? (
                        <video src={item.media.url} controls className="h-28" />
                      ) : (
                        <img src={item.media.url} alt="Preview" className="h-28 object-cover" />
                      )
                    )}
                  </td>
                  
                  {/* Title Field */}
                  <td className="px-4 py-2">
                    {editingId === item.Sr ? (
                      <input
                        type="text"
                        value={editData.title}
                        onChange={(e) => handleInputChange(e, 'title')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      item.title
                    )}
                  </td>
                  
                  {/* Features Field */}
                  <td className="px-4 py-2">
                    {editingId === item.Sr ? (
                      <input
                        type="text"
                        value={editData.feature}
                        onChange={(e) => handleInputChange(e, 'feature')}
                        className="w-full px-2 py-1 border rounded"
                        placeholder="Comma separated features"
                      />
                    ) : (
                      <ul className="list-disc pl-5 text-gray-700">
                        {item.feature.map((f, idx) => (
                          <li key={idx}>{f}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                  
                  {/* Benefits Field */}
                  <td className="px-4 py-2">
                    {editingId === item.Sr ? (
                      <input
                        type="text"
                        value={editData.Benefits}
                        onChange={(e) => handleInputChange(e, 'Benefits')}
                        className="w-full px-2 py-1 border rounded"
                        placeholder="Comma separated benefits"
                      />
                    ) : (
                      <ul className="list-disc pl-5 text-gray-700">
                        {item.Benefits.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                  
                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex gap-3 text-lg text-gray-700">
                      {editingId === item.Sr ? (
                        <>
                          <button
                            onClick={() => handleSaveInline(item.Sr)}
                            className="text-green-600 hover:text-green-800"
                            title="Save"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancel}
                            className="text-red-600 hover:text-red-800"
                            title="Cancel"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditModal(item)}
                            className="hover:text-black-600"
                            title="Edit"
                          >
                            <MdModeEditOutline size={20} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.Sr)}
                            className="text-gray-600 hover:text-red-600"
                            title="Delete"
                          >
                            <MdDelete size={20} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination with arrows */}
       <div className="flex justify-center items-center mt-6 gap-1">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                : 'text-white bg-black hover:bg-gray-700'
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? 'bg-black text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                : 'text-white bg-black hover:bg-gray-700'
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* Edit/Add Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-lg bg-white max-h-[90vh] rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold mb-4 sticky top-0 bg-white py-2">
                {currentItem?.Sr && categoryopt.some(item => item.Sr === currentItem.Sr) 
                  ? "Edit Option" 
                  : "Add New Option"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Window Type
                </label>
                <select
                  value={currentItem?.Option || ""}
                  onChange={(e) => handleInputChange(e, 'Option')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select an option</option>
                  {windowOptions.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Media (Image/Video)
                </label>
                <div className="border border-dashed border-gray-300 p-4 rounded-md flex flex-col items-center justify-center">
                  <input 
                    type="file" 
                    accept="image/*,video/*" 
                    onChange={handleMediaChange}
                    className="w-full mb-2"
                  />
                  {newMedia ? (
                    newMedia.type === "video" ? (
                      <video src={newMedia.url} controls className="h-40" />
                    ) : (
                      <img src={newMedia.url} alt="Preview" className="h-40" />
                    )
                  ) : (
                    currentItem?.media?.url && (
                      currentItem.media.type === "video" ? (
                        <video src={currentItem.media.url} controls className="h-40" />
                      ) : (
                        <img src={currentItem.media.url} alt="Preview" className="h-40" />
                      )
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={currentItem?.title || ""}
                  onChange={(e) => handleInputChange(e, 'title')}
                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Features (comma separated)
                </label>
                <input
                  type="text"
                  value={currentItem?.feature || ""}
                  onChange={(e) => handleInputChange(e, 'feature')}
                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Feature 1, Feature 2, Feature 3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Benefits (comma separated)
                </label>
                <input
                  type="text"
                  value={currentItem?.Benefits || ""}
                  onChange={(e) => handleInputChange(e, 'Benefits')}
                  className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Benefit 1, Benefit 2, Benefit 3"
                  required
                />
              </div>

              <div className="pt-4 flex gap-2">
                <button
                  type="button"
                  onClick={handleSaveModal}
                  className="flex-1 bg-black hover:bg-black-900 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  {currentItem?.Sr && categoryopt.some(item => item.Sr === currentItem.Sr) 
                    ? "Update" 
                    : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}