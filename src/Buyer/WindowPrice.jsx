import React, { useEffect, useRef, useState } from 'react';
import dummyVideo from '../assets/dummy.mp4';
import { Link } from 'react-router-dom';
import axios from 'axios';

const WindowPrice = () => {
  const videoRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [videoData, setVideoData] = useState(null);
  const [pricingFactors, setPricingFactors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch backend data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [videoRes, headingRes] = await Promise.all([
          axios.get('http://localhost:9000/api/pricing/video'),
          axios.get('http://localhost:9000/api/pricing/heading'),
        ]);

        console.log('Video response:', videoRes.data); // Debug log
        console.log('Heading response:', headingRes.data); // Debug log

        if (videoRes.data.length) setVideoData(videoRes.data[0]);
        if (headingRes.data.length) setPricingFactors(headingRes.data);
      } catch (err) {
        console.error('Fetch error:', err.message); // Debug log
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fallback factors if API fails
  const fallbackFactors = [
    {
      title: 'Material Quality',
      description: 'Premium uPVC formulations with enhanced durability and insulation properties',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      image: 'https://placehold.co/300x200?text=Material+Quality',
    },
    {
      title: 'Design Complexity',
      description: 'Custom shapes, sizes, and operational mechanisms affect manufacturing costs',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.168V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      image: 'https://placehold.co/300x200?text=Design+Complexity',
    },
    {
      title: 'Energy Efficiency',
      description: 'Multi-chamber profiles and low-E glass options for better thermal performance',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      image: 'https://placehold.co/300x200?text=Energy+Efficiency',
    },
    {
      title: 'Hardware Selection',
      description: 'Premium German-engineered hardware with enhanced security features',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      image: 'https://placehold.co/300x200?text=Hardware+Selection',
    },
    {
      title: 'Installation Precision',
      description: 'Certified professional installation ensuring perfect fit and performance',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      image: 'https://placehold.co/300x200?text=Installation+Precision',
    },
    {
      title: 'Warranty Coverage',
      description: 'Comprehensive 10-year product warranty with optional extensions',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      image: 'https://placehold.co/300x200?text=Warranty+Coverage',
    },
  ];

  const factorsToRender = pricingFactors.length ? pricingFactors : fallbackFactors;

  // Static chapters (replace with dynamic if available)
  const chapters = [
    { time: 0, title: 'Introduction', duration: '0:30' },
    { time: 30, title: 'Features', duration: '1:00' },
    { time: 90, title: 'Benefits', duration: '0:45' },
  ];


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
    <div className="bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-8 text-center">
          <h3 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            {videoData?.title || 'Price - Know it All'}
          </h3>
          <div className="mt-2 h-0.5 w-20 mb-2 bg-black mx-auto"></div>
          <p className="text-gray-600 text-lg">{videoData?.subtitle || 'The cost is the entry fee, the value is the experience!'}</p>
        </section>

        {/* Video Player Section */}
        <section className="mb-16">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl bg-black">
            <video ref={videoRef} className="w-full h-full object-cover" controls playsInline autoPlay>
              <source
                src={videoData?.video ? `http://localhost:9000/${videoData.video}` : dummyVideo}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <p className="text-center text-gray-500 text-sm mt-3">
            {videoData?.description || 'Experience the craftsmanship of our premium uPVC windows'}
          </p> */}

         
        </section>

        {/* Pricing Factors Section */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-black mb-6 tracking-tight text-center">
            Factors Affecting uPVC Window & Door Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {factorsToRender.map((factor, index) => (
              <div key={index} className="group">
                <div className="p-6 h-full border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg">
                  <img
                    src={factor.image?.startsWith('http') ? factor.image : `http://localhost:9000/${factor.image}`}
                    alt={factor.title || factor.type}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      console.error(`Failed to load image: ${factor.image}`);
                      e.target.src = 'https://placehold.co/300x200?text=Image+Not+Found';
                    }}
                  />
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
                        d={factor?.icon || 'M5 12h14'}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">{factor?.type || factor?.title}</h3>
                  <p className="text-gray-600">{factor?.data || factor?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-xl font-medium text-black mb-3">Ready for precise pricing?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our window specialists will provide a detailed quote tailored to your specific requirements and property characteristics.
          </p>
          <Link to={'/window-options'}>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default WindowPrice;