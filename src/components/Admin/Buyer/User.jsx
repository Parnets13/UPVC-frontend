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

export default function User() {
    const [button, setButton] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, name: 'Shital Patil', phone: '9876543210' },
    ]);

    const handleDelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="bg-white rounded-lg shadow border">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h1 className="text-2xl font-bold text-gray-800">Buyer Management</h1>
                    {/* <Dialog>
                        <DialogTrigger asChild>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium">
                                Add
                            </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg bg-white rounded-lg shadow-lg">
                            <DialogHeader>
                                <DialogTitle className="text-lg font-bold mb-4">Add Buyer</DialogTitle>
                                <DialogDescription>
                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone No.</label>
                                            <input
                                                type="text"
                                                className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter Phone No."
                                            />
                                        </div>
                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 rounded-md transition"
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

                <div className="overflow-x-auto p-4">
                    <table className="min-w-full border text-sm text-left">
                        <thead className="bg-gray-100 text-lg">
                            <tr>
                                <th className="p-2 font-semibold text-gray-700 border-b">Name</th>
                                <th className="p-2 font-semibold text-gray-700 border-b">Phone No.</th>
                                <th className="p-2 font-semibold text-gray-700 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="even:bg-gray-50 hover:bg-gray-100 text-base">
                                    <td className="p-3 ">{user.name}</td>
                                    <td className="p-3 ">{user.phone}</td>
                                    <td
                                        className={`cursor-pointer border px-2 py-1 w-28 text-center rounded transition duration-300
    ${button ? "text-black font-bold" : ""}`}
                                        onClick={() => setButton(!button)}
                                    >
                                        {button ? "BLOCK" : "UNBLOCK"}
                                    </td>

                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="p-4 text-center text-gray-500">
                                        No buyers available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
