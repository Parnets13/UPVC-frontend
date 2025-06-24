import React, { useEffect, useState } from 'react';

export default function Feedback() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/feedback");
        const data = await response.json();
        setFeed(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="bg-gray-50 p-4">
      <div className="border bg-white rounded-lg">
        <div className="border-b flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Feedback</h1>
        </div>

        <div className="overflow-x-auto p-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : feed.length === 0 ? (
            <p className="text-center text-gray-500">No feedback found.</p>
          ) : (
            <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200 rounded">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="p-3 border-b font-medium">#</th>
                  <th className="p-3 border-b font-medium">Name</th>
                  <th className="p-3 border-b font-medium">Phone</th>
                  <th className="p-3 border-b font-medium">Feedback</th>
                  <th className="p-3 border-b font-medium">Rating</th>
                </tr>
              </thead>
              <tbody>
                {feed.map((item, index) => (
                  <tr key={item._id || index} className="even:bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-3 border-b">{index + 1}</td>
                    <td className="p-3 border-b font-medium">{item.name}</td>
                    <td className="p-3 border-b">{item.phone}</td>
                    <td className="p-3 border-b">{item.text}</td>
                    <td className="p-3 border-b">{item.stars}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
