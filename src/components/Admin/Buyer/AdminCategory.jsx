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

export default function AdminCategory() {
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

  // Reusable form states
  const [nameInput, setNameInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [mode, setMode] = useState("add"); // "add" or "edit"
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null); // index being edited

  const handleOpenAdd = () => {
    setMode("add");
    setNameInput("");
    setDescInput("");
    setDialogOpen(true);
  }

  const handleOpenEdit = (index) => {
    setMode("edit");
    setCurrentIndex(index);
    setNameInput(windowOptions[index].name);
    setDescInput(windowOptions[index].description);
    setDialogOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput.trim() === "") return alert("Name is required");

    if (mode === "add") {
      setWindowOptions([
        ...windowOptions,
        { name: nameInput.trim(), description: descInput.trim() }
      ]);
    } else if (mode === "edit" && currentIndex !== null) {
      const updated = [...windowOptions];
      updated[currentIndex] = {
        name: nameInput.trim(),
        description: descInput.trim()
      };
      setWindowOptions(updated);
    }

    setDialogOpen(false);
    setNameInput("");
    setDescInput("");
    setCurrentIndex(null);
  }

  const handleDelete = (index) => {
    setWindowOptions(windowOptions.filter((_, i) => i !== index));
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">

        {/* Header */}
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Category Management</h1>
          <button
            onClick={handleOpenAdd}
            className="px-4 py-1 bg-black text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Add
          </button>
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
                      <button onClick={() => handleOpenEdit(index)} className="hover:text-black">
                        <MdModeEditOutline />
                      </button>
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

        {/* Reusable Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold mb-4">
                {mode === "add" ? "Add Window Option" : "Edit Window Option"}
              </DialogTitle>
              <DialogDescription>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={descInput}
                      onChange={(e) => setDescInput(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Enter Description"
                      rows={3}
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className={`w-full ${
                        mode === "add"
                          ? "bg-gray-100 hover:bg-gray-400 text-black"
                          : "bg-black hover:bg-gray-600 text-white"
                      } font-semibold py-2 rounded-md transition-colors`}
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
    </div>
  );
}
