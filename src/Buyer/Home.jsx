import React, { useState, useRef, useEffect } from "react";
import WindowPrice from "./WindowPrice";
import WindowOptions from "./WindowOptions";
import WhiteVsColor from "./WhiteVsColor";
import TheProcess from "./TheProcess";
import dummyVideo from "../assets/dummy.mp4";
import { Link } from "react-router-dom";
import { FiDollarSign, FiShoppingCart, FiDroplet, FiSettings } from "react-icons/fi";
import axios from "axios";

const Home = () => {
  const [activeTab, setActiveTab] = useState("");
  const videoRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(null);
  const [banners, setBanners] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fix thumbnail filename by ensuring it starts with Uploads/banners/
  const fixThumbnailFilename = (filename) => {
    if (!filename) return "";
    // Remove api/banner/ prefix and ensure Uploads/banners/ prefix
    let corrected = filename.replace(/^api\/banner\//, "");
    if (!corrected.startsWith("Uploads/banners/")) {
      corrected = `Uploads/banners/${corrected}`;
    }
    return corrected;
  };

  // Fetch banners on component mount
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/banner");
        console.log("Raw banners:", response.data); // Debug log
        // Fix thumbnailFilename in chapters
        const correctedBanners = response.data.map((banner) => ({
          ...banner,
          chapters: banner.chapters
            ? banner.chapters.map((chapter) => ({
                ...chapter,
                thumbnailFilename: fixThumbnailFilename(chapter.thumbnailFilename),
              }))
            : [],
        }));
        setBanners(correctedBanners);
        setCurrentBanner(
          correctedBanners[0] || {
            title: "Welcome to Our uPVC Windows",
            description: "High quality windows and doors",
            filepath: dummyVideo,
            thumbnailFilepath: "/default-thumbnail.jpg",
            moment_title: "Premium uPVC Windows",
            chapters: [],
          }
        );
      } catch (err) {
        setError(err.message);
        setCurrentBanner({
          title: "Content Loading Error",
          description: "Please try again later",
          filepath: dummyVideo,
          thumbnailFilepath: "/default-thumbnail.jpg",
          moment_title: "Premium uPVC Windows",
          chapters: [],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const tabs = [
    { id: "windowPrice", label: "WINDOW PRICE", icon: <FiDollarSign className="mr-2" /> },
    { id: "windowOptions", label: "BUY NOW", icon: <FiShoppingCart className="mr-2" /> },
    { id: "whiteVsColor", label: "WHITE vs COLOR", icon: <FiDroplet className="mr-2" /> },
    { id: "theProcess", label: "THE PROCESS", icon: <FiSettings className="mr-2" /> },
  ];

  const handleChapterClick = (time, index) => {
    if (videoRef.current && currentBanner.filepath !== dummyVideo) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
      setActiveChapter(index);
    }
  };

  const tabComponents = {
    windowPrice: <WindowPrice />,
    windowOptions: <WindowOptions />,
    whiteVsColor: <WhiteVsColor />,
    theProcess: <TheProcess />,
  };

  const renderChapters = () => {
    if (!currentBanner?.chapters || currentBanner.chapters.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          No chapters available for this banner
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentBanner.chapters.map((chapter, index) => (
          <div
            key={index}
            onClick={() => handleChapterClick(chapter.time, index)}
            className={`group cursor-pointer transition-all duration-300 ${
              activeChapter === index ? "opacity-100" : "opacity-90 hover:opacity-100"
            }`}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeChapter === index ? "bg-white/90" : "bg-white/80 group-hover:bg-white"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
              </div>
              {chapter.thumbnailFilename ? (
                <img
                  src={`http://localhost:9000/${chapter.thumbnailFilename}`}
                  alt={chapter.title || `Chapter ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load thumbnail: http://localhost:9000/${chapter.thumbnailFilename}`);
                    e.target.src = "/default-thumbnail.jpg";
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Thumbnail</span>
                </div>
              )}
            </div>
            <div className="mt-2">
              <h3
                className={`font-medium ${activeChapter === index ? "text-black" : "text-gray-700"}`}
              >
                {chapter.title || `Chapter ${index + 1}`}
              </h3>
              <p className="text-xs text-gray-500">{chapter.duration || "0:00"}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading content: {error}
        <button
          onClick={() => window.location.reload()}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto mt-24">
      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium flex items-center ${
              activeTab === tab.id
                ? "bg-gray-100 text-black border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      {activeTab === "" && currentBanner && (
        <>
          <section className="mb-8 text-center">
            <h3 className="font-poppins text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {currentBanner.title}
            </h3>
            <div className="mt-2 h-0.5 w-20 mb-2 bg-black mx-auto"></div>
            <p className="text-gray-600 font-inter text-lg">{currentBanner.description}</p>
          </section>

          <section className="mb-16">
            <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                playsInline
                autoPlay
              >
                <source
                  src={
                    currentBanner.filepath
                      ? `http://localhost:9000/${currentBanner.filepath}`
                      : dummyVideo
                  }
                  type={currentBanner.mimetype || "video/mp4"}
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center font-inter text-gray-500 text-sm mt-3">
              {currentBanner.moment_title || "Premium uPVC Windows"}
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-poppins font-medium text-black mb-4 tracking-tight">
                KEY MOMENTS
              </h2>
              {renderChapters()}
            </div>

            <div className="mt-12 text-center">
              <Link to={"/window-options"}>
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Buy Now
                </button>
              </Link>
            </div>
          </section>
        </>
      )}

      {/* Tab Content */}
      {activeTab !== "" && <div>{tabComponents[activeTab]}</div>}
    </div>
  );
};

export default Home;