import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function WindowOpt() {
  const [windowOptions, setWindowOptions] = useState([
    "Sliding Window", "Sliding Door", "Casement Windows", "Casement Doors",
    "Fixed Windows", "Bathroom Ventilators", "Combination Windows", "Special Architectural Windows"
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [newOption, setNewOption] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditValue(windowOptions[index]);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedOptions = [...windowOptions];
    updatedOptions[editIndex] = editValue;
    setWindowOptions(updatedOptions);
    setEditIndex(null);
    setEditValue("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedOptions = windowOptions.filter((_, i) => i !== indexToDelete);
    setWindowOptions(updatedOptions);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (newOption.trim()) {
      setWindowOptions([...windowOptions, newOption.trim()]);
      setNewOption("");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Window & Door Option Management</h1>
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                aria-label="Add new window option"
              >
                Add
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold mb-4">
                  Add Option
                </DialogTitle>
                <DialogDescription>
                  <form className="space-y-4" onSubmit={handleAddSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 label" style={{alignItems: "left"}}>
                        Title
                      </label>
                      <input
                        type="text"
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Option"
                      />
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-gray-100 hover:bg-gray-400 text-black font-semibold py-2 rounded-md transition-colors"
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

        {/* Table */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border rounded-sm border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr className='border-b'>
                <th className="text-left p-3">Sr. No</th>
                <th className="text-left p-3">Option</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {windowOptions.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b border-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item}</td>
                  <td className="p-3">
                    <div className="flex gap-3 text-lg text-gray-700">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            onClick={() => handleEditClick(index)}
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
                              <form className="space-y-4" onSubmit={handleEditSubmit}>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Title
                                  </label>
                                  <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
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
                        onClick={() => handleDelete(index)}
                        className="hover:text-red-600"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
