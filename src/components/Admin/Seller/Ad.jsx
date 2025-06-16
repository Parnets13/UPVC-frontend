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
 const data = [
        {
            title: "New Product Launch",
            img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
            description: "Discover our revolutionary new product line",
            type: "Featured",
            like: "222"
        }
    ]
    const data1 = [
        {
            title: "New Product Launch",
            img: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Discover our revolutionary new product line",
            type: "Featured",
            like: "222"
        }
    ]


export default function Ad() {
const[Data,setData] = useState(data);
const[Data1,setData1] = useState(data1);
   
    const handleDelete = (id) => {
setData(data.filter((_,i)=> i!==id ))
    }

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="border bg-white rounded-lg shadow-sm">
                <div className="border-b flex justify-between items-center p-4">
                    <h1 className="text-2xl font-semibold">advertisement Management</h1>
                </div>
                <div className="border-b p-4">
                    <div className='flex justify-end mb-3'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button
                                    className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    aria-label="Add new banner"
                                >
                                    Add
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-bold mb-4">
                                        Advertisement
                                    </DialogTitle>
                                    <DialogDescription>
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Video
                                                </label>
                                                <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                                    <input type="file" accept="video/*" className="w-full" />
                                                </div>
                                            </div>
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
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Type
                                                </label>
                                                <select
                                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Select type</option>
                                                    <option value="Featured">Featured</option>
                                                    <option value="Latest">Latest</option>
                                                    <option value="Trending">Trending</option>
                                                </select>
                                            </div>
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

                    <div className="rounded-lg ">
                        <table className="min-w-full table-auto border border-gray-200">
                            <thead className="bg-gray-100 text-left">
                                <tr className='border-b'>
                                    <th className="px-4 py-2 ">Title</th>
                                    <th className="px-4 py-2 ">Video</th>
                                    <th className="px-4 py-2 ">Description</th>
                                    <th className="px-4 py-2 ">Type</th>
                                    <th className="px-4 py-2 ">Likes</th>
                                    <th className="px-4 py-2 ">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Data1.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 ">{item.title}</td>
                                        <td className="px-4 py-2 ">
                                            <video src={item.img} alt="Product" controls className="h-12 w-12 object-cover rounded" />
                                        </td>
                                        <td className="px-4 py-2 ">{item.description}</td>
                                        <td className="px-4 py-2 ">{item.type}</td>
                                        <td className="px-4 py-2 ">{item.like}</td>
                                        <td className="px-4 py-2 flex gap-3 text-lg text-gray-600 mt-3">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button className="hover:text-blue-600">
                                                        <MdModeEditOutline />
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-lg font-bold mb-4">
                                                            Advertisement
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            <form className="space-y-4">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Video
                                                                    </label>
                                                                    <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                                                        <input type="file" accept="video/*" className="w-full" />
                                                                    </div>
                                                                </div>
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
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Type
                                                                    </label>
                                                                    <select
                                                                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        defaultValue=""
                                                                    >
                                                                        <option value="" disabled>Select type</option>
                                                                        <option value="Featured">Featured</option>
                                                                        <option value="Latest">Latest</option>
                                                                        <option value="Trending">Trending</option>
                                                                    </select>
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Likes
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        placeholder="Enter likes count"
                                                                    />
                                                                </div>
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
                                            <button onClick={() => handleDelete(index)} className="hover:text-red-600">
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="border-b p-4 mt-2">
                    <div className='flex justify-end mb-3'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button
                                    className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    aria-label="Add new banner"
                                >
                                    Add
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-bold mb-4">
                                        Advertisement
                                    </DialogTitle>
                                    <DialogDescription>
                                        <form className="space-y-4">
                                            {/* Video Upload */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Image
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

                                            {/* Type Dropdown */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Type
                                                </label>
                                                <select
                                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Select type</option>
                                                    <option value="Featured">Featured</option>
                                                    <option value="Latest">Latest</option>
                                                    <option value="Trending">Trending</option>
                                                </select>
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
                    <div className="rounded-lg ">
                        <table className="min-w-full table-auto border border-gray-200">
                            <thead className="bg-gray-100 text-left">
                                <tr className='border-b'>
                                    <th className="px-4 py-2 ">Title</th>
                                    <th className="px-4 py-2 ">Image</th>
                                    <th className="px-4 py-2 ">Description</th>
                                    <th className="px-4 py-2 ">Type</th>
                                    <th className="px-4 py-2 ">Likes</th>
                                    <th className="px-4 py-2 ">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 ">{item.title}</td>
                                        <td className="px-4 py-2 ">
                                            <img src={item.img} alt="Product" className="h-12 w-12 object-cover rounded" />
                                        </td>
                                        <td className="px-4 py-2 ">{item.description}</td>
                                        <td className="px-4 py-2 ">{item.type}</td>
                                        <td className="px-4 py-2 ">{item.like}</td>
                                        <td className="px-4 py-2 flex gap-3 text-lg text-gray-600 mt-3">

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button className="hover:text-blue-600">
                                                        <MdModeEditOutline />
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-lg font-bold mb-4">
                                                            <button
                                                                className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                                            >
                                                                Add
                                                            </button>
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            <form className="space-y-4">
                                                                {/* Video Upload */}
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Image
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

                                                                {/* Type Dropdown */}
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Type
                                                                    </label>
                                                                    <select
                                                                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        defaultValue=""
                                                                    >
                                                                        <option value="" disabled>Select type</option>
                                                                        <option value="Featured">Featured</option>
                                                                        <option value="Latest">Latest</option>
                                                                        <option value="Trending">Trending</option>
                                                                    </select>
                                                                </div>

                                                                {/* Likes Input */}
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Likes
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        placeholder="Enter likes count"
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
                                            <button onClick={() => handleDelete(index)} className="hover:text-red-600">
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
