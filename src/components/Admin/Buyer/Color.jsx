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

export default function Color() {
    const [videoList, setVideoList] = useState([
        {
            id: 1,
            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
    ]);
    const handledelete = (id) => {
        setVideoList(videoList.filter((__, i) => i !== id))
    }

    const [diff, setDiff] = useState([
        {
            type: "Appearance",
            white: "Classic,clean look, commonly used & widely accepted",
            lam: "Offers a variety of colors and textures;"
        },
        {
            type: "Cost",
            white: "More affordable; considered the base standard",
            lam: "Higher cost due to added lamination process"
        },
        {
            type: "Maintenance",
            white: "Easier to clean but may show dirt & stains more visibly",
            lam: "Hides dirt better but may require gentler cleaning to preserve finish;"
        },
    ]);

    const handledeletebtn = (id) => {
        setDiff(diff.filter((_, i) => i !== id))
    }

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="border bg-white rounded-lg shadow-sm">
                <div className="border-b flex justify-between items-center p-4">
                    <h1 className="text-2xl font-semibold">White vs Colors</h1>
                </div>

                <div className="p-4 border-b">
                    <div className='flex justify-end mb-3'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-blue-600 text-white px-3 py-1 font-semibold rounded hover:bg-blue-700 text-sm">
                                    Add
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-bold mb-4">Add Process Video</DialogTitle>
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
                                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                                                Submit
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
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {videoList.map((video, index) => (
                                    <tr key={video.id} className="border-t hover:bg-gray-50 transition-all">
                                        <td className="p-3">
                                            <video src={video.src} className="w-32 h-20 object-cover rounded" controls />
                                        </td>
                                        <td className="p-3 flex items-center gap-2 text-lg text-gray-600">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button className="hover:text-blue-500" title="Edit">
                                                        <MdModeEditOutline />
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-lg font-bold mb-4">Add Process Video</DialogTitle>
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
                                                                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                                                                    Submit
                                                                </button>
                                                            </form>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                            <button onClick={() => { handledelete(index) }} className="hover:text-red-500" title="Delete">
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
                    <div className='flex justify-end mb-3'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-blue-600 text-white px-3 py-1 font-semibold rounded hover:bg-blue-700 text-sm">
                                    Add
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-bold mb-4">Add Comparison Entry</DialogTitle>
                                    <DialogDescription>
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Description
                                                </label>
                                                <input
                                                    type="text"
                                                    name="description"
                                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter description"
                                                />
                                            </div>

                                            <table className="table-auto border w-full">
                                                <thead>
                                                    <tr className='border-b bg-gray-100'>
                                                        <th className="px-4 py-2">White</th>
                                                        <th className="px-4 py-2">Laminate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='border-b'>
                                                        <td className="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                className="w-full border rounded px-2 py-1"
                                                            />
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                className="w-full border rounded px-2 py-1"

                                                            />
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <button type="submit" className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors">
                                                Submit
                                            </button>
                                        </form>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <table className="table-auto border w-full ">
                        <thead>
                            <tr className='border-b bg-gray-100'>
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2">White</th>
                                <th className="px-4 py-2">Laminate</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {diff.map((item, i) => (
                                <tr key={i} className='border-b'>
                                    <td className="px-4 py-2 font-semibold text-black bg-gray-100 border-r">{item.type}</td>
                                    <td className="px-4 py-2">{item.white}</td>
                                    <td className="px-4 py-2">{item.lam}</td>
                                    <td className="p-3 flex items-center gap-2 text-lg text-gray-600">

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="hover:text-blue-500 transition-colors">
                                                    <MdModeEditOutline />
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                                <DialogHeader>
                                                    <DialogTitle className="text-lg font-bold mb-4">Add Comparison Entry</DialogTitle>
                                                    <DialogDescription>
                                                        <form className="space-y-4">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                    Description
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="description"
                                                                    className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                    placeholder="Enter description"
                                                                />
                                                            </div>

                                                            <table className="table-auto border w-full">
                                                                <thead>
                                                                    <tr className='border-b bg-gray-100'>
                                                                        <th className="px-4 py-2">White</th>
                                                                        <th className="px-4 py-2">Laminate</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className='border-b'>
                                                                        <td className="px-4 py-2">
                                                                            <input
                                                                                type="text"
                                                                                className="w-full border rounded px-2 py-1"
                                                                            />
                                                                        </td>
                                                                        <td className="px-4 py-2">
                                                                            <input
                                                                                type="text"
                                                                                className="w-full border rounded px-2 py-1"

                                                                            />
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                            <button type="submit" className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors">
                                                                Submit
                                                            </button>
                                                        </form>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                        <button onClick={() => { handledeletebtn(i) }} className="hover:text-red-500 transition-colors">
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
    )
}