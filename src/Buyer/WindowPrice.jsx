import React, { useRef, useState } from 'react';
import dummyVideo from "../assets/dummy.mp4";

const WindowPrice = () => {
  // Video chapter navigation
  const videoRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { time: 0, title: "Craftsmanship", duration: "0:15", thumbnail: "https://example.com/thumb1.jpg" },
    { time: 15, title: "Material Quality", duration: "0:22", thumbnail: "https://example.com/thumb2.jpg" },
    { time: 37, title: "Energy Efficiency", duration: "0:18", thumbnail: "https://example.com/thumb3.jpg" },
    { time: 55, title: "Installation", duration: "0:25", thumbnail: "https://example.com/thumb4.jpg" },
  ];

  const pricingFactors = [
    {
      title: "Material Quality",
      description: "Premium uPVC formulations with enhanced durability and insulation properties",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
      title: "Design Complexity",
      description: "Custom shapes, sizes, and operational mechanisms affect manufacturing costs",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      title: "Energy Efficiency",
      description: "Multi-chamber profiles and low-E glass options for better thermal performance",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Hardware Selection",
      description: "Premium German-engineered hardware with enhanced security features",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      title: "Installation Precision",
      description: "Certified professional installation ensuring perfect fit and performance",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "Warranty Coverage",
      description: "Comprehensive 10-year product warranty with optional extensions",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  const handleChapterClick = (time, index) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
      setActiveChapter(index);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-3xl font-medium text-black tracking-tight mb-4">
            PRICE - KNOW IT ALL
          </h1>
          <p className="text-gray-600 text-lg">
            The cost is the entry fee, the value is the experience!
          </p>
        </section>

        {/* Video Player Section */}
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

          {/* Video Chapters */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-black mb-4 tracking-tight">
              KEY MOMENTS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {chapters.map((chapter, index) => (
                <div
                  key={index}
                  onClick={() => handleChapterClick(chapter.time, index)}
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeChapter === index ? 'opacity-100' : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activeChapter === index ? 'bg-white/90' : 'bg-white/80 group-hover:bg-white'
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
                        activeChapter === index ? 'text-black' : 'text-gray-700'
                      }`}
                    >
                      {chapter.title}
                    </h3>
                    <p className="text-xs text-gray-500">{chapter.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors Section */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-black mb-6 tracking-tight text-center">
            When you are investing in uPVC windows & doors the price can vary
            <br className="hidden md:block" />
            based on several important factors — here's what goes into it
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="group">
                <div className="p-6 h-full border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-black transition-colors">
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={factor.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-xl font-medium text-black mb-3">
            Ready for precise pricing?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our window specialists will provide a detailed quote tailored to your
            specific requirements and property characteristics.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Request Custom Quote
          </button>
        </section>
      </div>
    </div>
  );
};

export default WindowPrice;