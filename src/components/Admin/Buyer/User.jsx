import React, { useEffect, useState } from 'react';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Get only the latest logged-in user (newBuyer)
    const newBuyer = JSON.parse(localStorage.getItem("newBuyer"));

    if (newBuyer) {
      setUsers([
        {
          id: newBuyer._id,
          name: newBuyer.name,
          phone: newBuyer.mobileNumber,
          status: newBuyer.status || "active",
        },
      ]);
    }
  }, []);

//   const handleDelete = (id) => {
//     setUsers([]);
//     localStorage.removeItem("newBuyer"); // Remove from localStorage on delete
//   };

  const toggleBlockStatus = (id) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        const newStatus = user.status === "blocked" ? "active" : "blocked";
        return { ...user, status: newStatus };
      }
      return user;
    });

    setUsers(updatedUsers);

    // Update the localStorage
    if (updatedUsers.length > 0) {
      const updatedBuyer = {
        _id: updatedUsers[0].id,
        name: updatedUsers[0].name,
        mobileNumber: updatedUsers[0].phone,
        status: updatedUsers[0].status,
      };
      localStorage.setItem("newBuyer", JSON.stringify(updatedBuyer));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow border">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Buyer Management</h1>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100 text-lg">
              <tr>
                <th className="p-2 font-semibold text-gray-700 border-b">Name</th>
                <th className="p-2 font-semibold text-gray-700 border-b">Phone No.</th>
                <th className="p-2 font-semibold text-gray-700 border-b">Status</th>
                {/* <th className="p-2 font-semibold text-gray-700 border-b">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="even:bg-gray-50 hover:bg-gray-100 text-base">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.phone}</td>
                  {/* <td className="p-3 capitalize">{user.status}</td> */}
                  <td className="p-3 space-x-2">
                    {/* <button
                      className="text-sm text-red-600 hover:underline"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button> */}
                    <button
                      className={`text-sm font-semibold ${
                        user.status === "blocked" ? "text-red-600" : "text-green-600"
                      }`}
                      onClick={() => toggleBlockStatus(user.id)}
                    >
                      {user.status === "blocked" ? "BLOCKED" : "UNBLOCKED"}
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
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
