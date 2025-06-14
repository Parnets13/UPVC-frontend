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

export default function User1() {
    const [button, setButton] = useState(false);
    const [companies, setCompanies] = useState([
        {
            Company: "Premium UPVC Solutions",
            Address: "123",
            City: "Mumbai",
            Pin: "111111",
            email: "123@gmail.com",
            gst: "1111111111",
            person: "abcd",
            num: "1234567891",
            video: "https://www.w3schools.com/html/mov_bbb.mp4",

            brand: "Veka"
        }
    ]);

    const obj = [
        {
            location: "Mumbai",
            area: "10 sq.ft",
            timeline: "within 2 weeks",
            spaces: "Tinted glass, sliding mechanism"
        },
        {
            location: "Pune",
            area: "20 sq.ft",
            timeline: "within 2 weeks",
            spaces: "Tinted glass, sliding mechanism"
        }
    ]
    const handleDelete = (index) => {
        const updated = [...companies];
        updated.splice(index, 1);
        setCompanies(updated);
    };
    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="border bg-white rounded-lg shadow-sm">
                <div className="border-b flex justify-between items-center p-4">
                    <h1 className="text-2xl font-semibold">Seller Management</h1>
                    {/* <Dialog>
                        <DialogTrigger asChild>
                            <button
                                className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                aria-label="Add new banner"
                            >
                                Add
                            </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-white rounded-lg shadow-lg">
                            <DialogHeader>
                                <DialogTitle className="text-lg font-bold mb-4">Add Company Info</DialogTitle>
                                <DialogDescription>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Company
                                                </label>
                                                <input type="text" placeholder="Company Name" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Address
                                                </label>
                                                <input type="text" placeholder="Address" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    City
                                                </label>
                                                <input type="text" placeholder="City" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Pin
                                                </label>
                                                <input type="text" placeholder="Pincode" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email
                                                </label>
                                                <input type="email" placeholder="Email" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    GST
                                                </label>
                                                <input type="text" placeholder="GST Number" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Contact Person
                                                </label>
                                                <input type="text" placeholder="Contact Person" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone
                                                </label>
                                                <input type="tel" placeholder="Phone Number" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Brand
                                                </label>
                                                <input type="text" placeholder="Brand (e.g., Veka, Aluplast)" className="w-full h-10 px-3 border rounded-md" />
                                            </div>
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
                    </Dialog> */}
                </div>
                <div className='p-4'>
                    <div>
                        <div className="overflow-x-auto bg-white ">
                            <table className=" border">
                                <thead className="bg-gray-100 border-b">
                                    <tr>
                                        <th className="px-4 py-2 ">Company</th>
                                        <th className="px-4 py-2 ">Address</th>
                                        <th className="px-4 py-2 ">City</th>
                                        <th className="px-4 py-2 ">Pin</th>
                                        <th className="px-4 py-2 ">Email</th>
                                        <th className="px-4 py-2 ">GST</th>
                                        <th className="px-4 py-2 ">Name</th>
                                        <th className="px-4 py-2 ">Phone</th>
                                        <th className="px-4 py-2 ">Brand</th>
                                        <th className="px-4 py-2 ">Video</th>
                                        <th className="px-4 py-2 ">Purchase History</th>
                                        <th className="px-4 py-2 ">Status</th>
                                        <th className="px-4 py-2 ">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companies.map((c, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-4 py-2 ">{c.Company}</td>
                                            <td className="px-4 py-2 ">{c.Address}</td>
                                            <td className="px-4 py-2 ">{c.City}</td>
                                            <td className="px-4 py-2 ">{c.Pin}</td>
                                            <td className="px-4 py-2 ">{c.email}</td>
                                            <td className="px-4 py-2 ">{c.gst}</td>
                                            <td className="px-4 py-2 ">{c.person}</td>
                                            <td className="px-4 py-2 ">{c.num}</td>
                                            <td className="px-4 py-2 ">{c.brand}</td>
                                            <td>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <button className="flex justify-center items-center px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                                                            View
                                                        </button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-3xl bg-white rounded-lg shadow-xl p-6">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-lg font-semibold mb-4">Product Video</DialogTitle>
                                                            <div className="w-full">
                                                                <video
                                                                    src={c.video}
                                                                    autoPlay
                                                                    muted
                                                                    controls
                                                                    className="w-full h-auto rounded-lg border"
                                                                >

                                                                </video>
                                                            </div>
                                                        </DialogHeader>
                                                    </DialogContent>
                                                </Dialog>

                                            </td>
                                            <td>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <button className="flex justify-center items-center px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                                                            View
                                                        </button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-3xl bg-white rounded-lg shadow-xl p-6">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-lg font-semibold mb-4">Purchase History</DialogTitle>
                                                            <div className="overflow-x-auto">
                                                                <table className="min-w-full text-sm text-left border border-gray-200">
                                                                    <thead className="bg-gray-100">
                                                                        <tr>
                                                                            <th className="px-4 py-2 font-semibold text-gray-700 ">Location</th>
                                                                            <th className="px-4 py-2 font-semibold text-gray-700 ">Area</th>
                                                                            <th className="px-4 py-2 font-semibold text-gray-700 ">Timeline</th>
                                                                            <th className="px-4 py-2 font-semibold text-gray-700 ">Spaces</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {obj.map((item, i) => (
                                                                            <tr key={i} className="even:bg-gray-50">
                                                                                <td className="px-4 py-2 ">{item.location}</td>
                                                                                <td className="px-4 py-2 ">{item.area}</td>
                                                                                <td className="px-4 py-2 ">{item.timeline}</td>
                                                                                <td className="px-4 py-2 ">{item.spaces}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </DialogHeader>
                                                    </DialogContent>
                                                </Dialog>


                                            </td>
                                            <td>
                                                <select className="w-full px- py-1 border border-gray-300 rounded-md text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <option>Pending</option>
                                                    <option>Rejected</option>
                                                    <option>Approved</option>
                                                </select>
                                            </td>

                                            <td
                                                className={`cursor-pointer border px-2 py-1 w-28 text-center rounded transition duration-300
    ${button ? "text-black font-bold" : ""}`}
                                                onClick={() => setButton(!button)}
                                            >
                                                {button ? "BLOCK" : "UNBLOCK"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
