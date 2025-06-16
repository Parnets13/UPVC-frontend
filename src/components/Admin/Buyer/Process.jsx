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
const points = [
        {
            img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80',
            data: "Select your design, dimensions & quality"
        },
        {
            img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80',
            data: "Submit your details"
        },
        {
            img: 'https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=600&q=80',
            data: "The moment they generate interest, you will be notified"
        },
        {
            img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
            data: "You can get to see their business profile"
        },
        //   {
        //     img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        //     data: "Sit back, relax & enjoy"
        //   },
    ];

export default function Process() {
    const [videoList, setVideoList] = useState([
        {
            id: 1,
            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
    ]);
    const handledelete = (id) => {
        setVideoList(videoList.filter((__, i) => i !== id))
    }

    const [formData, setFormData] = useState({
        src: '',
        title: '',
        subtitle: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, src: url }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVideo = {
            id: Date.now(),
            ...formData,
        };
        setVideoList(prev => [...prev, newVideo]);
        setFormData({ src: '', title: '', subtitle: '', description: '' });
    };

    const handleDelete = (id) => {
        setVideoList(prev => prev.filter(video => video.id !== id));
    };

    const handleEdit = (id) => {
        const video = videoList.find(v => v.id === id);
        if (video) {
            setFormData(video);
            handleDelete(id);
        }
    };

    
    const[point,setPoint] = useState(points);

    const handleDeletebtn = (id) => {
      setPoint(point.filter((_,i)=> i!==id));
    }

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="border bg-white rounded-lg shadow-sm">
                <div className="border-b flex justify-between items-center p-4">
                    <h1 className="text-2xl font-semibold">The Process</h1>
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

                <div className='p-4'>
                    <div className='flex justify-end mb-3'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-blue-600 text-white px-3 py-1 font-semibold rounded hover:bg-blue-700 text-sm">
                                    Add
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-bold mb-4">Process</DialogTitle>
                                    <DialogDescription>
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Image
                                                </label>
                                                <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                                    <input type="file" accept="video/*" className="w-full" />
                                                </div>
                                            </div>
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
                                            <button type="submit" className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors">
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
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Description</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {point.map((video,index) => (
                                    <tr key={video.id} className="border-t hover:bg-gray-50 transition-all">
                                        <td className="p-3">
                                            <img src={video.img} className="w-32 h-20 object-cover rounded" controls />
                                        </td>
                                        <td className="p-3">
                                            {video.data}
                                        </td>
                                        <td className="p-3 flex items-center gap-2 text-lg text-gray-600">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button
                                                        // onClick={() => handleEdit(video.id)}
                                                        className="hover:text-blue-500"
                                                        title="Edit"
                                                    >
                                                        <MdModeEditOutline />
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-lg font-bold mb-4">Process</DialogTitle>
                                                        <DialogDescription>
                                                            <form className="space-y-4">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Image
                                                                    </label>
                                                                    <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                                                        <input type="file" accept="video/*" className="w-full" />
                                                                    </div>
                                                                </div>
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
                                                                <button type="submit" className="w-full hover:bg-gray-400 text-black font-semibold py-2 rounded-md bg-gray-100 transition-colors">
                                                                    Submit
                                                                </button>
                                                            </form>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                            <button
                                                onClick={() => handleDeletebtn(index)}
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
            </div>
        </div>
    );
}
