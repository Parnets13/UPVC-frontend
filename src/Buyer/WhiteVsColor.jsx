import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const WhiteVsColor = () => {
  const [comparisons, setComparisons] = useState([]);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComparisons = async () => {
      try {
        const compRes = await axios.get("http://localhost:9000/api/color/comparisons");
        setComparisons(compRes.data);
      } catch (err) {
        console.error("Error fetching comparisons:", err);
      }
    };

    const fetchVideo = async () => {
      try {
        const videoRes = await axios.get("http://localhost:9000/api/color/video");
        if (videoRes.data && videoRes.data.length > 0) {
          setVideo(videoRes.data[0]); // Use the first video
        }
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    };

    Promise.all([fetchComparisons(), fetchVideo()]).finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            <span className="font-medium"> {video?.title} </span>
            
          </h3>
          <div className="mt-2 h-0.5 w-20 mb-2 bg-black mx-auto"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {video?.description}
          </p>
        </div>

        {/* Video Section */}
        <section className="mb-16">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl bg-black">
            {video ? (
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                autoPlay
                muted
              >
                <source src={`http://localhost:9000/${video.src}`} type={video.mimetype} />
              </video>
            ) : (
              <p className="text-white text-center pt-20">Loading video...</p>
            )}
          </div>
        </section>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h4 className="text-2xl font-medium text-black mb-6 text-center">
            Detailed Feature Comparison
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-500 w-1/4">Category</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500 w-3/8">White Windows</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500 w-3/8">Colored Windows</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.length > 0 ? (
                  comparisons.map((item, index) => (
                    <tr
                      key={item._id || index}
                      className={`border-b border-gray-100 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="py-4 px-4 font-medium text-gray-900">{item.type}</td>
                      <td className="py-4 px-4 text-gray-700">{item.white}</td>
                      <td className="py-4 px-4 text-gray-700">{item.lam}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-4 text-center text-gray-500">
                      No comparison data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Decision Helper */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h4 className="text-2xl font-medium text-black mb-4 text-center">
            Which One Should You Choose?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <h5 className="font-medium text-black text-lg mb-3">Choose White If:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-gray-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span className="text-gray-700">You prefer a classic, timeless look</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span className="text-gray-700">Budget is a primary concern</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span className="text-gray-700">You want quick availability</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg p-6">
              <h5 className="font-medium text-black text-lg mb-3">Choose Colored If:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-gray-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span className="text-gray-700">You want to match your home's unique style</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span className="text-gray-700">Enhanced curb appeal is important</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span className="text-gray-700">You prefer premium, customized finishes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="mt-12 text-center">
          <Link to={"/window-options"}>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhiteVsColor;
