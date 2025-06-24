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

export default function Color() {
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Color Options Overview',
      description: 'Explore the differences between white and laminated finishes.',
    },
  ]);

  const [diff, setDiff] = useState([
    {
      id: 1,
      type: "Appearance",
      white: "Classic, clean look, commonly used & widely accepted",
      lam: "Offers a variety of colors and textures",
    },
    {
      id: 2,
      type: "Cost",
      white: "More affordable; considered the base standard",
      lam: "Higher cost due to added lamination process",
    },
    {
      id: 3,
      type: "Maintenance",
      white: "Easier to clean but may show dirt & stains more visibly",
      lam: "Hides dirt better but may require gentler cleaning to preserve finish",
    },
  ]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('video'); // 'video' or 'diff'
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    src: '',
    title: '',
    description: '',
    type: '',
    white: '',
    lam: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle video file upload
  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        src: videoUrl,
      }));
    }
  };

  // Open modal for adding new item
  const openAddModal = (type) => {
    setModalType(type);
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      src: '',
      title: '',
      description: '',
      type: '',
      white: '',
      lam: '',
    });
    setIsModalOpen(true);
  };

  // Open modal for editing existing item
  const openEditModal = (type, item) => {
    setModalType(type);
    setIsEditing(true);
    setEditingId(item.id);
    
    if (type === 'video') {
      setFormData({
        src: item.src,
        title: item.title,
        description: item.description,
        type: '',
        white: '',
        lam: '',
      });
    } else {
      setFormData({
        src: '',
        title: '',
        description: '',
        type: item.type,
        white: item.white,
        lam: item.lam,
      });
    }
    setIsModalOpen(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (modalType === 'video') {
      if (isEditing) {
        // Update existing video
        setVideoList(videoList.map(video =>
          video.id === editingId ? { ...formData, id: editingId } : video
        ));
      } else {
        // Add new video
        setVideoList([...videoList, { ...formData, id: Date.now() }]);
      }
    } else {
      if (isEditing) {
        // Update existing comparison
        setDiff(diff.map(item =>
          item.id === editingId ? { ...formData, id: editingId } : item
        ));
      } else {
        // Add new comparison
        setDiff([...diff, { ...formData, id: Date.now() }]);
      }
    }
    
    // Reset form and close modal
    setFormData({
      src: '',
      title: '',
      description: '',
      type: '',
      white: '',
      lam: '',
    });
    setIsModalOpen(false);
  };

  // Delete item
  const handleDelete = (type, id) => {
    if (type === 'video') {
      setVideoList(videoList.filter(video => video.id !== id));
    } else {
      setDiff(diff.filter(item => item.id !== id));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">White vs Colors</h1>
        </div>

        {/* Videos Section */}
        <div className="p-4 border-b">
          <div className="flex justify-end mb-3">
            <button
              onClick={() => openAddModal('video')}
              className="bg-black text-white px-3 py-1 font-semibold rounded hover:bg-gray-700 text-sm"
            >
              Add Video
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <tr>
                  <th className="p-3">Video</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videoList.map((video) => (
                  <tr key={video.id} className="border-t hover:bg-gray-50 transition-all">
                    <td className="p-3">
                      <video
                        src={video.src}
                        className="w-32 h-20 object-cover rounded"
                        controls
                      />
                    </td>
                    <td className="p-3 text-sm font-medium">{video.title}</td>
                    <td className="p-3 text-sm text-gray-700">{video.description}</td>
                    <td className="p-3 flex items-center gap-2 text-lg text-gray-600">
                      <button
                        onClick={() => openEditModal('video', video)}
                        className="hover:text-black"
                        title="Edit"
                      >
                        <MdModeEditOutline />
                      </button>
                      <button
                        onClick={() => handleDelete('video', video.id)}
                        className="hover:text-red-500"
                        title="Delete"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="overflow-x-auto p-4">
          <div className="flex justify-end mb-3">
            <button
              onClick={() => openAddModal('diff')}
              className="bg-black text-white px-3 py-1 font-semibold rounded hover:bg-gray-700 text-sm"
            >
              Add Comparison
            </button>
          </div>

          <table className="table-auto border w-full">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">White</th>
                <th className="px-4 py-2">Laminate</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {diff.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2 font-semibold text-black bg-gray-100 border-r">{item.type}</td>
                  <td className="px-4 py-2 whitespace-pre-line">{item.white}</td>
                  <td className="px-4 py-2 whitespace-pre-line">{item.lam}</td>
                  <td className="p-3 flex items-center gap-2 text-lg text-gray-600">
                    <button
                      onClick={() => openEditModal('diff', item)}
                      className="hover:text-black transition-colors"
                    >
                      <MdModeEditOutline />
                    </button>
                    <button
                      onClick={() => handleDelete('diff', item.id)}
                      className="hover:text-red-500 transition-colors"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reusable Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold mb-4">
              {isEditing ? `Edit ${modalType === 'video' ? 'Video' : 'Comparison'}` : 
                          `Add ${modalType === 'video' ? 'Video' : 'Comparison'}`}
            </DialogTitle>
            <DialogDescription>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {modalType === 'video' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Video
                      </label>
                      <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                        <input
                          type="file"
                          accept="video/*"
                          className="w-full"
                          onChange={handleVideoFileChange}
                        />
                      </div>
                      {formData.src && (
                        <video
                          src={formData.src}
                          className="mt-2 w-32 h-20 object-cover rounded"
                          controls
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter title"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter description"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                      </label>
                      <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter type (e.g., Appearance)"
                        required
                      />
                    </div>
                    <table className="table-auto border w-full">
                      <thead>
                        <tr className="border-b bg-gray-100">
                          <th className="px-4 py-2">White</th>
                          <th className="px-4 py-2">Laminate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-2">
                            <textarea
                              name="white"
                              value={formData.white}
                              onChange={handleInputChange}
                              className="w-full border rounded px-2 py-1 h-24"
                              placeholder="Enter white description"
                              required
                            />
                          </td>
                          <td className="px-4 py-2">
                            <textarea
                              name="lam"
                              value={formData.lam}
                              onChange={handleInputChange}
                              className="w-full border rounded px-2 py-1 h-24"
                              placeholder="Enter laminate description"
                              required
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600"
                >
                  {isEditing ? 'Update' : 'Submit'}
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}