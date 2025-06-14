import React, { useState } from 'react'
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Category() {
  const [windowOptions, setWindowOptions] = useState([
    {
      name: "Elite Crest",
      description: "A premium window series offering top-tier insulation, sleek aesthetics, and enhanced durability for luxury homes."
    },
    {
      name: "Luxe Frame",
      description: "Stylish and versatile window frames designed for modern architecture with energy-efficient features."
    },
    {
      name: "Core Vantage",
      description: "A cost-effective and durable option built for high performance in both residential and commercial settings."
    }
  ]);

  // For editing
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // For adding
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditName(windowOptions[index].name);
    setEditDescription(windowOptions[index].description);
  }

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if(editName.trim() === "") return alert("Name cannot be empty");
    const updatedOptions = [...windowOptions];
    updatedOptions[editIndex] = { name: editName.trim(), description: editDescription.trim() };
    setWindowOptions(updatedOptions);
    setEditIndex(null);
    setEditName("");
    setEditDescription("");
  }

  const handleDelete = (indexToDelete) => {
    setWindowOptions(windowOptions.filter((_, i) => i !== indexToDelete));
  }

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if(newName.trim() === "") return alert("Name cannot be empty");
    setWindowOptions([...windowOptions, { name: newName.trim(), description: newDescription.trim() }]);
    setNewName("");
    setNewDescription("");
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">

        {/* Header */}
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Category Management</h1>

          {/* Add Dialog */}
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
                <DialogTitle className="text-lg font-bold mb-4">Add Window Option</DialogTitle>
                <DialogDescription>
                  <form className="space-y-4" onSubmit={handleAddSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Category Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Description"
                        rows={3}
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
          <table className="min-w-full border rounded-sm border-gray-100">
            <thead className="bg-gray-100 text-gray-700">
              <tr className='border'>
                <th className="text-left p-3">Sr. No</th>
                <th className="text-left p-3">Window Option</th>
                <th className="text-left p-3">Description</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {windowOptions.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b border-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="text-lg font-semibold">{item.name}</td>
                  <td className="text-gray-600">{item.description}</td>
                  <td className="p-3">
                    <div className="flex gap-3 text-lg text-gray-700">

                      {/* Edit Dialog */}
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
                            <DialogTitle className="text-lg font-bold mb-4">Edit Option</DialogTitle>
                            <DialogDescription>
                              <form className="space-y-4" onSubmit={handleEditSubmit}>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                  <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Window Option"
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                  <textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Description"
                                    rows={3}
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

                      <button onClick={() => handleDelete(index)} className="hover:text-red-600">
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
  )
}
