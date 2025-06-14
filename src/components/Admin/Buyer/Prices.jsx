import React, { useState } from 'react'
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Prices() {
  const [addNew, setAddNew] = useState(false);
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Buying uPVC Windows & Doors',
      subtitle: 'Watch this exclusive video on the entire process from extension of frames to installation',
      description:
        'When you are investing in uPVC windows & doors the price can vary on based on several important factors-heres what goes into it',
    },
  ]);



  const heading = [
    {
      type: "Size & Diamensions",
      data: "Larger the windows size, lesser the sq.ft cost."
    },
    {
      type: "Type & Design",
      data: "Fixed,sliding,casement or combination designs affect complexity and pricing."
    },
    {
      type: "Color & Finish",
      data: "White is usually standard,while laminated finishes cost more."
    },
    {
      type: "insect Screens or grills",
      data: "Adding mosquito mesh or grills adds to the cost."
    },
  ]
  const handledelete = (i) => {
    setVideoList(videoList.filter((__, id) => id !== i))
  }

  const handleDelete = (i) => { }


  return (
    <div className="bg-gray-50 min-h-screen p-4 lg:w-full w-[380px]">
      <div className="border bg-white rounded-lg shadow-sm">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">Price Management</h1>
        </div>

        <div className="p-4">
          {/* Add Prices Button & Dialog */}
          <div className="flex mb-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-blue-600 text-white px-2 py-1 rounded-sm hover:bg-gray-300">
                  Add
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold mb-4">Add Prices</DialogTitle>
                  <DialogDescription>
                    <form className="space-y-4">
                      {/* Video Upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Video</label>
                        <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                          <input type="file" accept="video/*" className="w-full" />
                        </div>
                      </div>

                      {/* Title Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                          type="text"
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter title"
                        />
                      </div>

                      {/* Subtitle Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                        <input
                          type="text"
                          className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter Subtitle"
                        />
                      </div>

                      {/* Description Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
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

          {/* Video List Table */}
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
                {videoList.map((video, index) => (
                  <tr key={video.id} className="border-t hover:bg-gray-50 transition-all">
                    <td className="p-3">
                      <video
                        src={video.src}
                        className="w-32 h-20 object-cover rounded sm:w-48 sm:h-28"
                        controls
                        onError={() => alert("Error loading video")}
                        aria-label={`Video: ${video.title}`}
                      />
                    </td>
                    <td className="p-3 text-sm font-medium">{video.title}</td>
                    <td className="p-3 text-sm font-medium">{video.subtitle}</td>
                    <td className="p-3 text-sm text-gray-700">{video.description}</td>
                    <td className="p-3 h-full mt-8 flex items-center gap-3 text-lg text-gray-600">
                      {/* Edit Dialog */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="hover:text-blue-500 transition-colors">
                            <MdModeEditOutline />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                          <DialogHeader>
                            <DialogTitle className="text-lg font-bold mb-4">Add Prices</DialogTitle>
                            <DialogDescription>
                              {/* Edit form here, similar to Add */}
                              <form className="space-y-4">
                                {/* same inputs */}
                                {/* Submit button */}
                              </form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                      {/* Delete Button */}
                      <button
                        onClick={() => handledelete(index)}
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

        <div className="p-4 my-4 border-t">
          <div className='flex justify-end mb-3'>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className=" bg-blue-600 text-white px-2 py-1 rounded-sm hover:bg-gray-300"
                >
                  Add
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold mb-4">
                    Add Prices
                  </DialogTitle>
                  <DialogDescription>
                    <form className="space-y-4">

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
          <div className="overflow-x-auto">
            <table className="w-[360px] border border-gray-200 rounded-lg lg:w-full">
              <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <tr>
                  <th scope="col" className="p-3">Title</th>
                  <th scope="col" className="p-3">Description</th>
                  <th scope="col" className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {heading.map((video, id) => (
                  <tr
                    key={video.id}
                    className="border-t hover:bg-gray-50 transition-all"
                  >
                    <td className="p-3 text-sm font-medium">{video.type}</td>

                    <td className="p-3 text-sm text-gray-700">{video.data}</td>
                    <td className="p-3 h-full flex items-center gap-3 text-lg text-gray-600">

                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            aria-label={`Edit banner ${video.title}`}
                            className="hover:text-blue-500 transition-colors"
                          >
                            <MdModeEditOutline />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                          <DialogHeader>
                            <DialogTitle className="text-lg font-bold mb-4">
                              Add Prices
                            </DialogTitle>
                            <DialogDescription>
                              <form className="space-y-4">

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
                        onClick={() => handleDelete(id)}
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
  )
} 
