import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MdModeEditOutline, MdDelete } from 'react-icons/md';



export default function SubOptions() {
    const [subOpt, setSubOpt] = useState([
        {
            Sr: "1",
            Option: "Sliding Window",
            video: "",
            title: "Track Sliding Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "2",
            Option: "Sliding Door",
            video: "",
            title: "Panel Sliding Door",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "3",
            Option: "Casement Window",
            video: "",
            title: "Single Casement Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "4",
            Option: "Casement Window",
            video: "",
            title: "Double Casement Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "5",
            Option: "Casement Window",
            video: "",
            title: "French Casement Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "6",
            Option: "Casement Window",
            video: "",
            title: "Push-Out Casement Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "7",
            Option: "Casement Door",
            video: "",
            title: "Single Casement Door",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "8",
            Option: "Casement Door",
            video: "",
            title: "Double Casement Door",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "9",
            Option: "Casement Door",
            video: "",
            title: "French Casement Door",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "10",
            Option: "Fixed Window",
            video: "",
            title: "Standard Fixed Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "11",
            Option: "Bathroom Ventilators",
            video: "",
            title: "Small Ventilators",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "12",
            Option: "Bathroom Ventilators",
            video: "",
            title: "Medium Ventilators",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "13",
            Option: "Bathroom Ventilators",
            video: "",
            title: "Large Ventilators",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "14",
            Option: "Bathroom Ventilators",
            video: "",
            title: "Decorative Ventilators",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "15",
            Option: "Combination Window",
            video: "",
            title: "Slider + Fixed Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "16",
            Option: "Combination Window",
            video: "",
            title: "Casement + Fixed Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "17",
            Option: "Combination Window",
            video: "",
            title: "Bay Window Combo",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "18",
            Option: "Special Architectural Windows",
            video: "",
            title: "Arch Top Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "19",
            Option: "Special Architectural Windows",
            video: "",
            title: "Circle Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "20",
            Option: "Special Architectural Windows",
            video: "",
            title: "Hexagon Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "21",
            Option: "Special Architectural Windows",
            video: "",
            title: "Octagon Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "22",
            Option: "Special Architectural Windows",
            video: "",
            title: "Triangle Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },
        {
            Sr: "23",
            Option: "Special Architectural Windows",
            video: "",
            title: "Gothic Window",
            feature: ["Premium Quality material",
                "Weather resistant",
                "Energy Efficient",
                "Noise Reduction"
            ]
        },

    ])

    const [windowOptions, setWindowOptions] = useState([
        "Sliding Window", "Sliding Door", "Casement Windows", "Casement Doors",
        "Fixed Windows", "Bathroom Ventilators", "Combination Windows", "Special Architectural Windows"
    ]);

    const handleAddBanner = () => {
        setAddNew(true);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(subOpt.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = subOpt.slice(startIndex, startIndex + itemsPerPage);

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState({
        Option: '',
        title: '',
    });

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditValue({ ...subOpt[index] });
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditValue(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedOptions = [...subOpt];
        updatedOptions[editIndex] = editValue;
        setSubOpt(updatedOptions);
        setEditIndex(null);
    };

    const handleDelete = (index) => {
        setSubOpt(subOpt.filter((_, i) => i !== index));
    };


    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="border bg-white rounded-lg shadow-sm">
                <div className='border-b flex justify-between items-center p-4'>
                    <h2 className="text-2xl font-semibold">
                        Window & Door Options
                    </h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button
                                className="px-4 h-8 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors"
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
                                                Video
                                            </label>
                                            <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                                <input type="file" accept="video/*" className="w-full" />
                                            </div>
                                        </div>

                                        <div className="max-w-md">
                                            <label htmlFor="windowSelect" className="block text-sm font-medium text-gray-700 mb-2">
                                                Select Type:
                                            </label>
                                            <select
                                                id="windowSelect"
                                                value={selectedOption}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="" disabled>Select an option</option>
                                                {windowOptions.map((opt, index) => (
                                                    <option key={index} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                            {/* 
                                            {selectedOption && (
                                                <p className="mt-4 text-green-600 font-medium">
                                                    You selected: <span className="font-semibold">{selectedOption}</span>
                                                </p>
                                            )} */}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Features
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter Features"
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
                <div className="p-4 overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-sm">
                        <thead className="bg-gray-200 text-gray-800">
                            <tr className='border-b text-lg'>
                                <th className=" px-4 py-2">Sr.No</th>
                                <th className=" px-4 py-2">Option</th>
                                <th className=" px-4 py-2">Video</th>
                                <th className=" px-4 py-2">Title</th>
                                <th className=" px-4 py-2">Features</th>
                                <th className=" px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, i) => (
                                <tr key={item.Sr} className="hover:bg-gray-50 border-b border-gray-100">
                                    <td className=" px-4 py-2 text-center">{item.Sr}</td>
                                    <td className=" px-4 py-2">{item.Option}</td>
                                    <td className=" px-4 py-2 text-blue-500">
                                        <video src='https://www.w3schools.com/html/mov_bbb.mp4' className='h-28' />
                                    </td>
                                    <td className=" px-4 py-2">{item.title}</td>
                                    <td className=" px-4 py-2">
                                        <ul className="list-disc pl-5 text-gray-700">
                                            {item.feature.map((f, idx) => (
                                                <li key={idx}>{f}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="p-3">
                                        <div className="flex gap-3 text-lg text-gray-700">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button
                                                        // onClick={() => handleEditClick(index)}
                                                        className="hover:text-blue-600"
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
                                                                        Video
                                                                    </label>
                                                                    <div className="border border-dashed border-gray-300 p-4 rounded-md flex items-center justify-center h-24 w-full">
                                                                        <input type="file" accept="video/*" className="w-full" />
                                                                    </div>
                                                                </div>

                                                                <div className="max-w-md">
                                                                    <label htmlFor="windowSelect" className="block text-sm font-medium text-gray-700 mb-2">
                                                                        Select Type:
                                                                    </label>
                                                                    <select
                                                                        id="windowSelect"
                                                                        value={selectedOption}
                                                                        onChange={handleChange}
                                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                    >
                                                                        <option value="" disabled>Select an option</option>
                                                                        {windowOptions.map((opt, index) => (
                                                                            <option key={index} value={opt}>
                                                                                {opt}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                    {/* 
                                            {selectedOption && (
                                                <p className="mt-4 text-green-600 font-medium">
                                                    You selected: <span className="font-semibold">{selectedOption}</span>
                                                </p>
                                            )} */}
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                        Features
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                        placeholder="Enter Features"
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

                                            <button onClick={() => handleDelete(i)} className="">
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6 gap-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-md ${currentPage === index + 1
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
