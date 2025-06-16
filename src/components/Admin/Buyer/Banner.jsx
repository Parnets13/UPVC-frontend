import React, { useState } from 'react';
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
  const [addNew, setAddNew] = useState(false);
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Buying uPVC Windows & Doors',
      description:
        'Watch this exclusive video on the entire process from extension of frames to installation',
    },
  ]);

  const handleAddBanner = () => {
    setAddNew(true);
  };

  const handleEdit = (id) => {
    alert(`Edit video with ID: ${id}`);
  };

  const handleDelete = (id) => {
      setVideoList(videoList.filter((video) => video.id !== id));
   
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Banner Management</h1>

          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={handleAddBanner}
                className="px-4 py-1 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors"
                aria-label="Add new banner"
              >
                Add
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold mb-4">
                  Add Banner
                </DialogTitle>
                <DialogDescription>
                  <form className="space-y-4">
                    {/* Video Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Video
                      </label>
                      <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                        <input type="file" accept="video/*" className="w-full" />
                      </div>
                    </div>

                    {/* Title Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter title"
                      />
                    </div>

                    {/* Description Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter description"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
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

        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <tr>
                  <th scope="col" className="p-3">Video</th>
                  <th scope="col" className="p-3">Title</th>
                  <th scope="col" className="p-3">Description</th>
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
                        src={video.src}
                        className="w-32 h-20 object-cover rounded sm:w-48 sm:h-28"
                        controls
                        onError={() => alert('Error loading video')}
                        aria-label={`Video: ${video.title}`}
                      />
                    </td>
                    <td className="p-3 text-sm font-medium">{video.title}</td>
                    <td className="p-3 text-sm text-gray-700">{video.description}</td>
                    <td className="p-3 flex items-center justify-center  gap-3 text-lg text-gray-600 align-middle">
                      <div className="p-3 flex items-center justify-center  gap-3 text-lg text-gray-600 align-middle mt-6">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              // onClick={() => handleEdit(video.id)}
                              aria-label={`Edit banner ${video.title}`}
                              className="hover:text-blue-500 transition-colors"
                            >
                              <MdModeEditOutline />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                            <DialogHeader>
                              <DialogTitle className="text-lg font-bold mb-4">
                                Add Banner
                              </DialogTitle>
                              <DialogDescription>
                                <form className="space-y-4">
                                  {/* Video Upload */}
                                  <div>
                                    <label style={{textAlign: "left"}} className="label block text-sm font-medium text-gray-700 mb-1">
                                      Video
                                    </label>
                                    <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                      <input type="file" accept="video/*" className="w-full" />
                                    </div>
                                  </div>

                                  {/* Title Input */}
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Title
                                    </label>
                                    <input
                                      type="text"
                                      className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Enter title"
                                    />
                                  </div>

                                  {/* Description Input */}
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Description
                                    </label>
                                    <input
                                      type="text"
                                      className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Enter description"
                                    />
                                  </div>

                                  {/* Submit Button */}
                                  <div className="pt-4">
                                    <button
                                      type="submit"
                                      className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors"
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
                          onClick={() => handleDelete(video.id)}
                          aria-label={`Delete banner ${video.title}`}
                          className="hover:text-red-500 transition-colors"
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
    </div>
  );
}