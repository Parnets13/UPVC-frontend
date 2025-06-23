import React, { useState, useEffect } from 'react';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Reusable modal component
const EditModal = ({
  isOpen,
  onOpenChange,
  isEditing,
  title,
  formData,
  onFormChange,
  onFileChange,
  onSubmit,
  fields,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold mb-4">
            {isEditing ? `Edit ${title}` : `Add ${title}`}
          </DialogTitle>
          <DialogDescription>
            <form className="space-y-4" onSubmit={onSubmit}>
              {fields.map((field) => (
                <div key={field.name}>
                  {field.type === 'file' ? (
                    <>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                      </label>
                      <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                        <input
                          type="file"
                          accept={field.accept}
                          className="w-full"
                          onChange={(e) => onFileChange(field.name, e)}
                          aria-label={`Upload ${field.label.toLowerCase()}`}
                        />
                      </div>
                      {formData[field.name] && (
                        field.accept.includes('video') ? (
                          <video
                            src={formData[field.name]}
                            className="mt-2 w-32 h-20 object-cover rounded"
                            controls
                            aria-label={`${field.label} preview`}
                          />
                        ) : (
                          <img
                            src={formData[field.name]}
                            alt={`${field.label} preview`}
                            className="mt-2 w-32 h-20 object-cover rounded"
                            aria-label={`${field.label} preview`}
                          />
                        )
                      )}
                    </>
                  ) : (
                    <>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={onFormChange}
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        required={field.required}
                        aria-label={field.label}
                      />
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
                  aria-label={isEditing ? 'Update' : 'Submit'}
                >
                  {isEditing ? 'Update' : 'Submit'}
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default function Prices() {
  // State for videos
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Buying uPVC Windows & Doors',
      subtitle: 'Watch this exclusive video on the entire process from extension of frames to installation',
      description: 'When you are investing in uPVC windows & doors the price can vary on based on several important factors-heres what goes into it',
    },
  ]);

  // State for headings
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

  // Form states
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

  // Modal states
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHeadingModalOpen, setIsHeadingModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

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

  // Handle form input changes
  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setVideoForm(prev => ({ ...prev, [name]: value }));
  };

  const handleHeadingInputChange = (e) => {
    const { name, value } = e.target;
    setHeadingForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle file changes
  const handleFileChange = (fieldName, e, setForm) => {
    const file = e.target.files[0];
    if (file) {
      // Clean up previous blob URL if it exists
      if (setForm === setVideoForm && videoForm.src && videoForm.src.startsWith('blob:')) {
        URL.revokeObjectURL(videoForm.src);
      }
      if (setForm === setHeadingForm && headingForm.image && headingForm.image.startsWith('blob:')) {
        URL.revokeObjectURL(headingForm.image);
      }
      
      const fileUrl = URL.createObjectURL(file);
      setForm(prev => ({ ...prev, [fieldName]: fileUrl }));
    }
  };

  // Handle form submissions
  const handleVideoSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setVideoList(videoList.map(video => 
        video.id === editingId ? { ...videoForm, id: editingId } : video
      ));
    } else {
      setVideoList([...videoList, { ...videoForm, id: Date.now() }]);
    }
    resetVideoForm();
    setIsVideoModalOpen(false);
  };

  const handleHeadingSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setHeadingList(headingList.map(heading => 
        heading.id === editingId ? { ...headingForm, id: editingId } : heading
      ));
    } else {
      setHeadingList([...headingList, { ...headingForm, id: Date.now() }]);
    }
    resetHeadingForm();
    setIsHeadingModalOpen(false);
  };

  // Reset forms
  const resetVideoForm = () => {
    setVideoForm({ src: '', title: '', subtitle: '', description: '' });
    setEditingId(null);
  };

  const resetHeadingForm = () => {
    setHeadingForm({ type: '', data: '', image: '' });
    setEditingId(null);
  };

  // Edit handlers
  const handleEditVideo = (video) => {
    setVideoForm({
      src: video.src,
      title: video.title,
      subtitle: video.subtitle,
      description: video.description
    });
    setEditingId(video.id);
    setIsVideoModalOpen(true);
  };

  const handleEditHeading = (heading) => {
    setHeadingForm({
      type: heading.type,
      data: heading.data,
      image: heading.image
    });
    setEditingId(heading.id);
    setIsHeadingModalOpen(true);
  };

  // Delete handlers
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

  // Field configurations for the modal
  const videoFields = [
    { name: 'src', label: 'Video', type: 'file', accept: 'video/*', required: true },
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'subtitle', label: 'Subtitle', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'text', required: true },
  ];

  const headingFields = [
    { name: 'image', label: 'Image', type: 'file', accept: 'image/*', required: true },
    { name: 'type', label: 'Title', type: 'text', required: true },
    { name: 'data', label: 'Description', type: 'text', required: true },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 lg:w-full w-[380px]">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Price Management</h1>
        </div>

        {/* Videos Section */}
        <div className="p-4">
          <div className="flex mb-3">
            <button 
              onClick={() => {
                resetVideoForm();
                setIsVideoModalOpen(true);
              }}
              className="bg-black text-white px-2 py-1 rounded-sm hover:bg-gray-300"
            >
              Add Video
            </button>
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
                      <button 
                        onClick={() => handleEditVideo(video)}
                        className="hover:text-black transition-colors"
                        aria-label={`Edit video ${video.title}`}
                      >
                        <MdModeEditOutline />
                      </button>
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

        {/* Headings Section */}
        <div className="p-4 my-4 border-t">
          <div className='flex justify-end mb-3'>
            <button 
              onClick={() => {
                resetHeadingForm();
                setIsHeadingModalOpen(true);
              }}
              className="bg-black text-white px-2 py-1 rounded-sm hover:bg-gray-300"
            >
              Add Heading
            </button>
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
                      <button 
                        onClick={() => handleEditHeading(heading)}
                        className="hover:text-black transition-colors"
                        aria-label={`Edit heading ${heading.type}`}
                      >
                        <MdModeEditOutline />
                      </button>
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

        {/* Video Modal */}
        <EditModal
          isOpen={isVideoModalOpen}
          onOpenChange={setIsVideoModalOpen}
          isEditing={!!editingId}
          title="Video"
          formData={videoForm}
          onFormChange={handleVideoInputChange}
          onFileChange={(fieldName, e) => handleFileChange(fieldName, e, setVideoForm)}
          onSubmit={handleVideoSubmit}
          fields={videoFields}
        />

        {/* Heading Modal */}
        <EditModal
          isOpen={isHeadingModalOpen}
          onOpenChange={setIsHeadingModalOpen}
          isEditing={!!editingId}
          title="Heading"
          formData={headingForm}
          onFormChange={handleHeadingInputChange}
          onFileChange={(fieldName, e) => handleFileChange(fieldName, e, setHeadingForm)}
          onSubmit={handleHeadingSubmit}
          fields={headingFields}
        />
      </div>
    </div>
  );
}