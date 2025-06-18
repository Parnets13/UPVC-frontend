
import React, { useState, useEffect } from 'react';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Prices() {
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Buying uPVC Windows & Doors',
      subtitle: 'Watch this exclusive video on the entire process from extension of frames to installation',
      description: 'When you are investing in uPVC windows & doors the price can vary on based on several important factors-heres what goes into it',
    },
  ]);

  const [headingList, setHeadingList] = useState([
    {
      id: 1,
      type: "Size & Diamensions",
      data: "Larger the windows size, lesser the sq.ft cost.",
      image: "https://placehold.co/100x60?text=Size"
    },
    {
      id: 2,
      type: "Type & Design",
      data: "Fixed,sliding,casement or combination designs affect complexity and pricing.",
      image: "https://placehold.co/100x60?text=Design"
    },
    {
      id: 3,
      type: "Color & Finish",
      data: "White is usually standard,while laminated finishes cost more.",
      image: "https://placehold.co/100x60?text=Color"
    },
    {
      id: 4,
      type: "insect Screens or grills",
      data: "Adding mosquito mesh or grills adds to the cost.",
      image: "https://placehold.co/100x60?text=Screens"
    },
  ]);

  const [videoForm, setVideoForm] = useState({
    src: '',
    title: '',
    subtitle: '',
    description: ''
  });

  const [headingForm, setHeadingForm] = useState({
    type: '',
    data: '',
    image: ''
  });

  const [editingVideoId, setEditingVideoId] = useState(null);
  const [editingHeadingId, setEditingHeadingId] = useState(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHeadingModalOpen, setIsHeadingModalOpen] = useState(false);

  // Cleanup blob URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (videoForm.src && videoForm.src.startsWith('blob:')) {
        URL.revokeObjectURL(videoForm.src);
      }
      if (headingForm.image && headingForm.image.startsWith('blob:')) {
        URL.revokeObjectURL(headingForm.image);
      }
    };
  }, [videoForm.src, headingForm.image]);

  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setVideoForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHeadingInputChange = (e) => {
    const { name, value } = e.target;
    setHeadingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (videoForm.src && videoForm.src.startsWith('blob:')) {
        URL.revokeObjectURL(videoForm.src);
      }
      const videoUrl = URL.createObjectURL(file);
      setVideoForm(prev => ({
        ...prev,
        src: videoUrl
      }));
    }
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (headingForm.image && headingForm.image.startsWith('blob:')) {
        URL.revokeObjectURL(headingForm.image);
      }
      const imageUrl = URL.createObjectURL(file);
      setHeadingForm(prev => ({
        ...prev,
        image: imageUrl
      }));
    }
  };

  const handleVideoSubmit = (e) => {
    e.preventDefault();
    if (editingVideoId) {
      setVideoList(videoList.map(video => 
        video.id === editingVideoId ? { ...videoForm, id: editingVideoId } : video
      ));
    } else {
      setVideoList([...videoList, { ...videoForm, id: Date.now() }]);
    }
    setVideoForm({
      src: '',
      title: '',
      subtitle: '',
      description: ''
    });
    setEditingVideoId(null);
    setIsVideoModalOpen(false);
  };

  const handleHeadingSubmit = (e) => {
    e.preventDefault();
    if (editingHeadingId) {
      setHeadingList(headingList.map(heading => 
        heading.id === editingHeadingId ? { ...headingForm, id: editingHeadingId } : heading
      ));
    } else {
      setHeadingList([...headingList, { ...headingForm, id: Date.now() }]);
    }
    setHeadingForm({
      type: '',
      data: '',
      image: ''
    });
    setEditingHeadingId(null);
    setIsHeadingModalOpen(false);
  };

  const handleEditVideo = (video) => {
    setVideoForm({
      src: video.src,
      title: video.title,
      subtitle: video.subtitle,
      description: video.description
    });
    setEditingVideoId(video.id);
    setIsVideoModalOpen(true);
  };

  const handleEditHeading = (heading) => {
    setHeadingForm({
      type: heading.type,
      data: heading.data,
      image: heading.image
    });
    setEditingHeadingId(heading.id);
    setIsHeadingModalOpen(true);
  };

  const handleAddVideo = () => {
    setVideoForm({
      src: '',
      title: '',
      subtitle: '',
      description: ''
    });
    setEditingVideoId(null);
    setIsVideoModalOpen(true);
  };

  const handleAddHeading = () => {
    setHeadingForm({
      type: '',
      data: '',
      image: ''
    });
    setEditingHeadingId(null);
    setIsHeadingModalOpen(true);
  };

  const handleDeleteVideo = (id) => {
    const video = videoList.find(v => v.id === id);
    if (video.src && video.src.startsWith('blob:')) {
      URL.revokeObjectURL(video.src);
    }
    setVideoList(videoList.filter(video => video.id !== id));
  };

  const handleDeleteHeading = (id) => {
    const heading = headingList.find(h => h.id === id);
    if (heading.image && heading.image.startsWith('blob:')) {
      URL.revokeObjectURL(heading.image);
    }
    setHeadingList(headingList.filter(heading => heading.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 lg:w-full w-[380px]">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Price Management</h1>
        </div>

        <div className="p-4">
          <div className="flex mb-3">
            <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
              <DialogTrigger asChild>
                <button 
                  onClick={handleAddVideo}
                  className="bg-black text-white px-2 py-1 rounded-sm hover:bg-gray-300"
                >
                  Add Video
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold mb-4">
                    {editingVideoId ? 'Edit Video' : 'Add Video'}
                  </DialogTitle>
                  <DialogDescription>
                    <form className="space-y-4" onSubmit={handleVideoSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Video</label>
                        <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                          <input 
                            type="file" 
                            accept="video/*" 
                            className="w-full" 
                            onChange={handleVideoFileChange}
                            aria-label="Upload video"
                          />
                        </div>
                        {videoForm.src && (
                          <video 
                            src={videoForm.src} 
                            className="mt-2 w-32 h-20 object-cover rounded" 
                            controls
                            aria-label="Video preview"
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                          type="text"
                          name="title"
                          value={videoForm.title}
                          onChange={handleVideoInputChange}
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                          placeholder="Enter title"
                          required
                          aria-label="Video title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                        <input
                          type="text"
                          name="subtitle"
                          value={videoForm.subtitle}
                          onChange={handleVideoInputChange}
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                          placeholder="Enter Subtitle"
                          required
                          aria-label="Video subtitle"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                          type="text"
                          name="description"
                          value={videoForm.description}
                          onChange={handleVideoInputChange}
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                          placeholder="Enter description"
                          required
                          aria-label="Video description"
                        />
                      </div>
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                          aria-label={editingVideoId ? 'Update video' : 'Add video'}
                        >
                          {editingVideoId ? 'Update' : 'Submit'}
                        </button>
                      </div>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="overflow-x-auto">
            <table className="lg:w-full w-[360px] border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <tr>
                  <th scope="col" className="p-3">Video</th>
                  <th scope="col" className="p-3">Title</th>
                  <th scope="col" className="p-3">Subtitle</th>
                  <th scope="col" className="p-3">Description</th>
                  <th scope="col" className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videoList.map((video) => (
                  <tr key={video.id} className="border-t hover:bg-gray-50 transition-all">
                    <td className="p-3">
                      <video
                        src={video.src}
                        className="w-32 h-20 object-cover rounded sm:w-48 sm:h-28"
                        controls
                        onError={(e) => (e.target.nextSibling.textContent = "Error loading video")}
                        aria-label={`Video: ${video.title}`}
                      />
                      <span className="text-red-500 text-xs hidden"></span>
                    </td>
                    <td className="p-3 text-sm font-medium">{video.title}</td>
                    <td className="p-3 text-sm font-medium">{video.subtitle}</td>
                    <td className="p-3 text-sm text-gray-700">{video.description}</td>
                    <td className="p-3 h-full mt-8 flex items-center gap-3 text-lg text-gray-600">
                      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                        <DialogTrigger asChild>
                          <button 
                            onClick={() => handleEditVideo(video)}
                            className="hover:text-black transition-colors"
                            aria-label={`Edit video ${video.title}`}
                          >
                            <MdModeEditOutline />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                          <DialogHeader>
                            <DialogTitle className="text-lg font-bold mb-4">
                              Edit Video
                            </DialogTitle>
                            <DialogDescription>
                              <form className="space-y-4" onSubmit={handleVideoSubmit}>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Video</label>
                                  <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                    <input 
                                      type="file" 
                                      accept="video/*" 
                                      className="w-full" 
                                      onChange={handleVideoFileChange}
                                      aria-label="Upload video"
                                    />
                                  </div>
                                  {videoForm.src && (
                                    <video 
                                      src={videoForm.src} 
                                      className="mt-2 w-32 h-20 object-cover rounded" 
                                      controls
                                      aria-label="Video preview"
                                    />
                                  )}
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                  <input
                                    type="text"
                                    name="title"
                                    value={videoForm.title}
                                    onChange={handleVideoInputChange}
                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter title"
                                    required
                                    aria-label="Video title"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                                  <input
                                    type="text"
                                    name="subtitle"
                                    value={videoForm.subtitle}
                                    onChange={handleVideoInputChange}
                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter Subtitle"
                                    required
                                    aria-label="Video subtitle"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                  <input
                                    type="text"
                                    name="description"
                                    value={videoForm.description}
                                    onChange={handleVideoInputChange}
                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter description"
                                    required
                                    aria-label="Video description"
                                  />
                                </div>
                                <div className="pt-4">
                                  <button
                                    type="submit"
                                    className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                                    aria-label="Update video"
                                  >
                                    Update
                                  </button>
                                </div>
                              </form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
                        aria-label={`Delete video ${video.title}`}
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

        <div className="p-4 my-4 border-t">
          <div className='flex justify-end mb-3'>
            <Dialog open={isHeadingModalOpen} onOpenChange={setIsHeadingModalOpen}>
              <DialogTrigger asChild>
                <button 
                  onClick={handleAddHeading}
                  className="bg-black text-white px-2 py-1 rounded-sm hover:bg-gray-300"
                >
                  Add Heading
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold mb-4">
                    {editingHeadingId ? 'Edit Heading' : 'Add Heading'}
                  </DialogTitle>
                  <DialogDescription>
                    <form className="space-y-4" onSubmit={handleHeadingSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="w-full" 
                            onChange={handleImageFileChange}
                            aria-label="Upload image"
                          />
                        </div>
                        {headingForm.image && (
                          <img 
                            src={headingForm.image} 
                            alt="Heading preview" 
                            className="mt-2 w-32 h-20 object-cover rounded" 
                            aria-label="Image preview"
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                          type="text"
                          name="type"
                          value={headingForm.type}
                          onChange={handleHeadingInputChange}
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                          placeholder="Enter title"
                          required
                          aria-label="Heading title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                          type="text"
                          name="data"
                          value={headingForm.data}
                          onChange={handleHeadingInputChange}
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                          placeholder="Enter description"
                          required
                          aria-label="Heading description"
                        />
                      </div>
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                          aria-label={editingHeadingId ? 'Update heading' : 'Add heading'}
                        >
                          {editingHeadingId ? 'Update' : 'Submit'}
                        </button>
                      </div>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="overflow-x-auto">
            <table className="w-[360px] border border-gray-200 rounded-lg lg:w-full">
              <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <tr>
                  <th scope="col" className="p-3">Image</th>
                  <th scope="col" className="p-3">Title</th>
                  <th scope="col" className="p-3">Description</th>
                  <th scope="col" className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {headingList.map((heading) => (
                  <tr key={heading.id} className="border-t hover:bg-gray-50 transition-all">
                    <td className="p-3">
                      {heading.image ? (
                        <img
                          src={heading.image}
                          alt={heading.type}
                          className="w-16 h-10 object-cover rounded"
                          onError={(e) => (e.target.src = 'https://placehold.co/100x60?text=Error')}
                          aria-label={`Image for ${heading.type}`}
                        />
                      ) : (
                        <span className="text-gray-500 text-sm">No image</span>
                      )}
                    </td>
                    <td className="p-3 text-sm font-medium">{heading.type}</td>
                    <td className="p-3 text-sm text-gray-700">{heading.data}</td>
                    <td className="p-3 h-full flex items-center gap-3 text-lg text-gray-600">
                      <Dialog open={isHeadingModalOpen} onOpenChange={setIsHeadingModalOpen}>
                        <DialogTrigger asChild>
                          <button 
                            onClick={() => handleEditHeading(heading)}
                            className="hover:text-black transition-colors"
                            aria-label={`Edit heading ${heading.type}`}
                          >
                            <MdModeEditOutline />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                          <DialogHeader>
                            <DialogTitle className="text-lg font-bold mb-4">
                              Edit Heading
                            </DialogTitle>
                            <DialogDescription>
                              <form className="space-y-4" onSubmit={handleHeadingSubmit}>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                                  <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                    <input 
                                      type="file" 
                                      accept="image/*" 
                                      className="w-full" 
                                      onChange={handleImageFileChange}
                                      aria-label="Upload image"
                                    />
                                  </div>
                                  {headingForm.image && (
                                    <img 
                                      src={headingForm.image} 
                                      alt="Heading preview" 
                                      className="mt-2 w-32 h-20 object-cover rounded" 
                                      aria-label="Image preview"
                                    />
                                  )}
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                  <input
                                    type="text"
                                    name="type"
                                    value={headingForm.type}
                                    onChange={handleHeadingInputChange}
                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter title"
                                    required
                                    aria-label="Heading title"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                  <input
                                    type="text"
                                    name="data"
                                    value={headingForm.data}
                                    onChange={handleHeadingInputChange}
                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter description"
                                    required
                                    aria-label="Heading description"
                                  />
                                </div>
                                <div className="pt-4">
                                  <button
                                    type="submit"
                                    className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                                    aria-label="Update heading"
                                  >
                                    Update
                                  </button>
                                </div>
                              </form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <button
                        onClick={() => handleDeleteHeading(heading.id)}
                        aria-label={`Delete heading ${heading.type}`}
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
