import React, { useState, useRef } from 'react';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Banner() {
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      videoFile: null,
      title: 'Buying uPVC Windows & Doors',
      description: 'Watch this exclusive video on the entire process from extension of frames to installation',
      time: 0,
      moment_title: "Craftsmanship",
      duration: "0:00",
      thumbnailFile: null,
      videoPreview: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnailPreview: 'https://example.com/thumb1.jpg'
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(null);
  const [formData, setFormData] = useState({
    videoFile: null,
    title: '',
    description: '',
    time: 0,
    moment_title: '',
    duration: '0:00',
    thumbnailFile: null,
    videoPreview: '',
    thumbnailPreview: ''
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddBanner = () => {
    setCurrentVideo(null);
    setFormData({
      videoFile: null,
      title: '',
      description: '',
      time: 0,
      moment_title: '',
      duration: '0:00',
      thumbnailFile: null,
      videoPreview: '',
      thumbnailPreview: ''
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (video) => {
    setCurrentVideo(video);
    setFormData({
      videoFile: video.videoFile,
      title: video.title,
      description: video.description,
      time: video.time,
      moment_title: video.moment_title,
      duration: video.duration,
      thumbnailFile: video.thumbnailFile,
      videoPreview: video.videoPreview,
      thumbnailPreview: video.thumbnailPreview
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    setVideoList(videoList.filter((video) => video.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === 'video') {
      const previewURL = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        videoFile: file,
        videoPreview: previewURL
      }));
    } else if (type === 'thumbnail') {
      const previewURL = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        thumbnailFile: file,
        thumbnailPreview: previewURL
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentVideo) {
      // Update existing video
      setVideoList(videoList.map(video => 
        video.id === currentVideo.id ? { 
          ...video, 
          ...formData,
          id: currentVideo.id // Preserve the ID
        } : video
      ));
    } else {
      // Add new video
      const newVideo = {
        id: videoList.length > 0 ? Math.max(...videoList.map(v => v.id)) + 1 : 1,
        ...formData
      };
      setVideoList([...videoList, newVideo]);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Banner Management</h1>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button
                onClick={handleAddBanner}
                className="px-4 py-1 bg-black text-white rounded-sm hover:bg-gray-700 transition-colors"
                aria-label="Add new banner"
              >
                Add
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold mb-4">
                  {currentVideo ? 'Edit Banner' : 'Add Banner'}
                </DialogTitle>
                <DialogDescription>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Video Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Video File
                      </label>
                      <div className="border border-dashed border-gray-300 p-4 rounded-md flex flex-col items-center justify-center">
                        {formData.videoPreview ? (
                          <video 
                            src={formData.videoPreview} 
                            className="w-full h-32 object-contain mb-2"
                            controls
                          />
                        ) : (
                          <div className="h-32 flex items-center justify-center text-gray-400">
                            No video selected
                          </div>
                        )}
                        <input
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleFileChange(e, 'video')}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Thumbnail Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Thumbnail Image
                      </label>
                      <div className="border border-dashed border-gray-300 p-4 rounded-md flex flex-col items-center justify-center">
                        {formData.thumbnailPreview ? (
                          <img 
                            src={formData.thumbnailPreview} 
                            alt="Thumbnail preview" 
                            className="w-32 h-32 object-contain mb-2"
                          />
                        ) : (
                          <div className="h-32 flex items-center justify-center text-gray-400">
                            No thumbnail selected
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, 'thumbnail')}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Title Input */}
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

                    {/* Description Input */}
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

                    {/* Moment Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Moment Title
                      </label>
                      <input
                        type="text"
                        name="moment_title"
                        value={formData.moment_title}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter moment title"
                        required
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Time (seconds)
                      </label>
                      <input
                        type="number"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter time in seconds"
                        required
                        min="0"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                      >
                        {currentVideo ? 'Update' : 'Submit'}
                      </button>
                    </div>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <tr>
                  <th scope="col" className="p-3">Video</th>
                  <th scope="col" className="p-3">Title</th>
                  <th scope="col" className="p-3">Description</th>
                  <th scope="col" className="p-3">Moment Title</th>
                  <th scope="col" className="p-3">Time</th>
                  <th scope="col" className="p-3">Thumbnail</th>
                  <th scope="col" className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videoList.map((video) => (
                  <tr
                    key={video.id}
                    className="border-t hover:bg-gray-50 transition-all"
                  >
                    <td className="p-3">
                      <video
                        src={video.videoPreview}
                        className="w-32 h-20 object-cover rounded sm:w-48 sm:h-28"
                        controls
                        onError={() => alert('Error loading video')}
                        aria-label={`Video: ${video.title}`}
                      />
                    </td>
                    <td className="p-3 text-sm font-medium">{video.title}</td>
                    <td className="p-3 text-sm text-gray-700">{video.description}</td>
                    <td className="p-3 text-sm text-gray-700">{video.moment_title}</td>
                    <td className="p-3 text-sm text-gray-700">{video.time}s</td>
                    <td className="p-3">
                      {video.thumbnailPreview && (
                        <img 
                          src={video.thumbnailPreview} 
                          alt="Thumbnail" 
                          className="w-16 h-16 object-cover rounded"
                        />
                      )}
                    </td>
                    <td className="p-3 flex items-center justify-center gap-3 text-lg text-gray-600 align-middle">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            onClick={() => handleEdit(video)}
                            aria-label={`Edit banner ${video.title}`}
                            className="hover:text-black transition-colors"
                          >
                            <MdModeEditOutline />
                          </button>
                        </DialogTrigger>
                        
                      </Dialog>
                      <button
                        onClick={() => handleDelete(video.id)}
                        aria-label={`Delete banner ${video.title}`}
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
    </div>
  );
}