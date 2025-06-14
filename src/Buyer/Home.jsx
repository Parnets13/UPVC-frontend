import React, { useState, useRef } from "react";
import WindowPrice from "./WindowPrice";
import WindowOptions from "./WindowOptions";
import WhiteVsColor from "./WhiteVsColor";
import TheProcess from "./TheProcess";
import dummyVideo from "../assets/dummy.mp4";
import { Link } from "react-router-dom";
import { 
  FiDollarSign, 
  FiShoppingCart, 
  FiDroplet, 
  FiSettings 
} from "react-icons/fi";

const Home = () => {
  const [activeTab, setActiveTab] = useState("");
  const videoRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(null);

  const tabs = [
    { 
      id: "windowPrice", 
      label: "WINDOW PRICE",
      icon: <FiDollarSign className="mr-2" />
    },
    { 
      id: "windowOptions", 
      label: "BUY NOW",
      icon: <FiShoppingCart className="mr-2" />
    },
    { 
      id: "whiteVsColor", 
      label: "WHITE vs COLOR",
      icon: <FiDroplet className="mr-2" />
    },
    { 
      id: "theProcess", 
      label: "THE PROCESS",
      icon: <FiSettings className="mr-2" />
    },
  ];

  const chaptersData = [
    { time: 0, title: "Craftsmanship", duration: "0:15", thumbnail: "https://example.com/thumb1.jpg" },
    { time: 15, title: "Material Quality", duration: "0:22", thumbnail: "https://example.com/thumb2.jpg" },
    { time: 37, title: "Energy Efficiency", duration: "0:18", thumbnail: "https://example.com/thumb3.jpg" },
    { time: 55, title: "Installation", duration: "0:25", thumbnail: "https://example.com/thumb4.jpg" },
  ];

  const handleChapterClick = (time, index) => {
    if (videoRef.current) {
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

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto mt-24">
      {/* Tabs with icons */}
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

      {/* Initial Home Content */}
      {activeTab === "" && (
        <>
          {/* Hero Section */}
          <section className="mb-8 text-center">
            <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl ">
              Buying uPVC Windows & Doors!
            </h3>
            <div className="mt-2 h-0.5 w-20 mb-2 bg-black mx-auto"></div>
            <p className="text-gray-600 text-lg">
             Watch this exclusive video on the entire process from extension of frames to installation, to understand what sets high-quality windows apart.
            </p>
          </section>

          {/* Video Section */}
          <section className="mb-16">
            <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                playsInline
                autoPlay
              >
                <source src={dummyVideo} type="video/mp4" />
              </video>
            </div>
            <p className="text-center text-gray-500 text-sm mt-3">
              Experience the craftsmanship of our premium uPVC windows
            </p>

            {/* Chapters */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-black mb-4 tracking-tight">
                KEY MOMENTS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {chaptersData.map((chapter, index) => (
                  <div
                    key={index}
                    onClick={() => handleChapterClick(chapter.time, index)}
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeChapter === index
                        ? "opacity-100"
                        : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activeChapter === index
                              ? "bg-white/90"
                              : "bg-white/80 group-hover:bg-white"
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
                      <img
                        src={chapter.thumbnail}
                        alt={chapter.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <h3
                        className={`font-medium ${
                          activeChapter === index
                            ? "text-black"
                            : "text-gray-700"
                        }`}
                      >
                        {chapter.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {chapter.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
        <Link to={'/window-options'}>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Buy Now
          </button>
        </Link>
      </div>
          </section>
        </>
      )}
      
      

      {/* Tab content shows only after click */}
      {activeTab !== "" && <div>{tabComponents[activeTab]}</div>}
    </div>
  );
};

export default Home;