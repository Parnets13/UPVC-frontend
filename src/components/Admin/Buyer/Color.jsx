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

  // Video form state
  const [videoForm, setVideoForm] = useState({
    src: '',
    title: '',
    description: '',
  });

  // Comparison form state
  const [diffForm, setDiffForm] = useState({
    type: '',
    white: '',
    lam: '',
  });

  // Track which item is being edited
  const [editingVideoId, setEditingVideoId] = useState(null);
  const [editingDiffId, setEditingDiffId] = useState(null);

  // Modal open states
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDiffModalOpen, setIsDiffModalOpen] = useState(false);

  // Handle video form input changes
  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setVideoForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle comparison form input changes
  const handleDiffInputChange = (e) => {
    const { name, value } = e.target;
    setDiffForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle video file upload
  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoForm(prev => ({
        ...prev,
        src: videoUrl,
      }));
    }
  };

  // Add or update video
  const handleVideoSubmit = (e) => {
    e.preventDefault();
    if (editingVideoId) {
      // Update existing video
      setVideoList(videoList.map(video =>
        video.id === editingVideoId ? { ...videoForm, id: editingVideoId } : video
      ));
    } else {
      // Add new video
      setVideoList([...videoList, { ...videoForm, id: Date.now() }]);
    }
    // Reset form and close modal
    setVideoForm({
      src: '',
      title: '',
      description: '',
    });
    setEditingVideoId(null);
    setIsVideoModalOpen(false);
  };

  // Add or update comparison
  const handleDiffSubmit = (e) => {
    e.preventDefault();
    if (editingDiffId) {
      // Update existing comparison
      setDiff(diff.map(item =>
        item.id === editingDiffId ? { ...diffForm, id: editingDiffId } : item
      ));
    } else {
      // Add new comparison
      setDiff([...diff, { ...diffForm, id: Date.now() }]);
    }
    // Reset form and close modal
    setDiffForm({
      type: '',
      white: '',
      lam: '',
    });
    setEditingDiffId(null);
    setIsDiffModalOpen(false);
  };

  // Set up video for editing
  const handleEditVideo = (video) => {
    setVideoForm({
      src: video.src,
      title: video.title,
      description: video.description,
    });
    setEditingVideoId(video.id);
    setIsVideoModalOpen(true);
  };

  // Set up comparison for editing
  const handleEditDiff = (item) => {
    setDiffForm({
      type: item.type,
      white: item.white,
      lam: item.lam,
    });
    setEditingDiffId(item.id);
    setIsDiffModalOpen(true);
  };

  // Handle Add Video button click
  const handleAddVideo = () => {
    setVideoForm({
      src: '',
      title: '',
      description: '',
    });
    setEditingVideoId(null);
    setIsVideoModalOpen(true);
  };

  // Handle Add Comparison button click
  const handleAddDiff = () => {
    setDiffForm({
      type: '',
      white: '',
      lam: '',
    });
    setEditingDiffId(null);
    setIsDiffModalOpen(true);
  };

  // Delete video
  const handleDeleteVideo = (id) => {
    setVideoList(videoList.filter(video => video.id !== id));
  };

  // Delete comparison
  const handleDeleteDiff = (id) => {
    setDiff(diff.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className=" επιστήμες text-2xl font-semibold">White vs Colors</h1>
        </div>

        <div className="p-4 border-b">
          <div className="flex justify-end mb-3">
            <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={handleAddVideo}
                  className="bg-black text-white px-3 py-1 font-semibold rounded hover:bg-gray-700 text-sm"
                >
                  Add
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold mb-4">
                    {editingVideoId ? 'Edit Process Video' : 'Add Process Video'}
                  </DialogTitle>
                  <DialogDescription>
                    <form className="space-y-4" onSubmit={handleVideoSubmit}>
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
                        {videoForm.src && (
                          <video
                            src={videoForm.src}
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
                          value={videoForm.title}
                          onChange={handleVideoInputChange}
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
                          value={videoForm.description}
                          onChange={handleVideoInputChange}
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                          placeholder="Enter description"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600"
                      >
                        {editingVideoId ? 'Update' : 'Submit'}
                      </button>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
                        onError={() => alert("Error loading video")}
                      />
                    </td>
                    <td className="p-3 text-sm font-medium">{video.title}</td>
                    <td className="p-3 text-sm text-gray-700">{video.description}</td>
                    <td className="p-3 flex items-center gap-2 text-lg text-gray-600">
                      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                        <DialogTrigger asChild>
                          <button
                            onClick={() => handleEditVideo(video)}
                            className="hover:text-black"
                            title="Edit"
                          >
                            <MdModeEditOutline />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                          <DialogHeader>
                            <DialogTitle className="text- lg font-bold mb-4">
                              Edit Process Video
                            </DialogTitle>
                            <DialogDescription>
                              <form className="space-y-4" onSubmit={handleVideoSubmit}>
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
                                  {videoForm.src && (
                                    <video
                                      src={videoForm.src}
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
                                    value={videoForm.title}
                                    onChange={handleVideoInputChange}
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
                                    value={videoForm.description}
                                    onChange={handleVideoInputChange}
                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter description"
                                    required
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600"
                                >
                                  Update
                                </button>
                              </form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
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

        <div className="overflow-x-auto p-4">
          <div className="flex justify-end mb-3">
            <Dialog open={isDiffModalOpen} onOpenChange={setIsDiffModalOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={handleAddDiff}
                  className="bg-black text-white px-3 py-1 font-semibold rounded hover:bg-gray-700 text-sm"
                >
                  Add
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold mb-4">
                    {editingDiffId ? 'Edit Comparison Entry' : 'Add Comparison Entry'}
                  </DialogTitle>
                  <DialogDescription>
                    <form className="space-y-4" onSubmit={handleDiffSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Type
                        </label>
                        <input
                          type="text"
                          name="type"
                          value={diffForm.type}
                          onChange={handleDiffInputChange}
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
                              <input
                                type="text"
                                name="white"
                                value={diffForm.white}
                                onChange={handleDiffInputChange}
                                className="w-full border rounded px-2 py-1"
                                placeholder="Enter white description"
                                required
                              />
                            </td>
                            <td className="px-4 py-2">
                              <input
                                type="text"
                                name="lam"
                                value={diffForm.lam}
                                onChange={handleDiffInputChange}
                                className="w-full border rounded px-2 py-1"
                                placeholder="Enter laminate description"
                                required
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button
                        type="submit"
                        className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                      >
                        {editingDiffId ? 'Update' : 'Submit'}
                      </button>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
                  <td className="px-4 py-2">{item.white}</td>
                  <td className="px-4 py-2">{item.lam}</td>
                  <td className="p-3 flex items-center gap-2 text-lg text-gray-600">
                    <Dialog open={isDiffModalOpen} onOpenChange={setIsDiffModalOpen}>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => handleEditDiff(item)}
                          className="hover:text-black transition-colors"
                        >
                          <MdModeEditOutline />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                        <DialogHeader>
                          <DialogTitle className="text-lg font-bold mb-4">
                            Edit Comparison Entry
                          </DialogTitle>
                          <DialogDescription>
                            <form className="space-y-4" onSubmit={handleDiffSubmit}>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Type
                                </label>
                                <input
                                  type="text"
                                  name="type"
                                  value={diffForm.type}
                                  onChange={handleDiffInputChange}
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
                                      <input
                                        type="text"
                                        name="white"
                                        value={diffForm.white}
                                        onChange={handleDiffInputChange}
                                        className="w-full border rounded px-2 py-1"
                                        placeholder="Enter white description"
                                        required
                                      />
                                    </td>
                                    <td className="px-4 py-2">
                                      <input
                                        type="text"
                                        name="lam"
                                        value={diffForm.lam}
                                        onChange={handleDiffInputChange}
                                        className="w-full border rounded px-2 py-1"
                                        placeholder="Enter laminate description"
                                        required
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <button
                                type="submit"
                                className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                              >
                                Update
                              </button>
                            </form>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <button
                      onClick={() => handleDeleteDiff(item.id)}
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
    </div>
  );
}