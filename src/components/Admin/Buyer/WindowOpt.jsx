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

  const [modalMode, setModalMode] = useState(null); // 'add' or 'edit'
  const [modalOpen, setModalOpen] = useState(false);

  const [editIndex, setEditIndex] = useState(null);
  const [formValue, setFormValue] = useState("");

  const openAddModal = () => {
    setModalMode("add");
    setFormValue("");
    setModalOpen(true);
  };

  const openEditModal = (index) => {
    setModalMode("edit");
    setEditIndex(index);
    setFormValue(windowOptions[index]);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    setWindowOptions(windowOptions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = formValue.trim();
    if (!trimmed) return;

    if (modalMode === "add") {
      setWindowOptions([...windowOptions, trimmed]);
    } else if (modalMode === "edit") {
      const updated = [...windowOptions];
      updated[editIndex] = trimmed;
      setWindowOptions(updated);
    }

    setModalOpen(false);
    setFormValue("");
    setEditIndex(null);
    setModalMode(null);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Window & Door Option Management</h1>
          <button
            onClick={openAddModal}
            className="px-4 py-1 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            Add
          </button>
        </div>

        {/* Table */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border rounded-sm border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr className="border-b">
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
                      <button onClick={() => openEditModal(index)} className="hover:text-black">
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
      </div>

      {/* Shared Modal for Add/Edit */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold mb-4">
              {modalMode === "add" ? "Add Option" : "Edit Option"}
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder={modalMode === "add" ? "Enter Option Name" : "Update Option Name"}
                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-900 font-semibold py-2 rounded-md transition-colors"
                  >
                    {modalMode === "add" ? "Submit" : "Update"}
                  </button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
