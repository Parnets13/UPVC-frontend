import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          At <span className="font-semibold text-black">UPVC Connect</span>, we bridge the gap between
          buyers and sellers of premium UPVC windows and doors. Our goal is to simplify your search, 
          ensure quality, and foster trusted partnerships within the UPVC industry.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Mission */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🚀 Our Mission</h2>
          <p className="text-gray-700">
            To create a transparent, efficient, and reliable digital platform for connecting
            UPVC buyers and sellers while promoting sustainable, high-quality construction solutions.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🌍 Our Vision</h2>
          <p className="text-gray-700">
            To become the leading digital marketplace in the UPVC sector by enabling seamless 
            transactions and long-term business growth for every user.
          </p>
        </div>

        {/* Who we serve */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🤝 Who We Serve</h2>
          <p className="text-gray-700">
            Whether you're a homeowner looking for reliable UPVC products, or a vendor wanting to
            reach more customers — UPVC Connect is your one-stop solution.
          </p>
        </div>

        {/* Why choose us */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">💡 Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Verified buyers and sellers</li>
            <li>Easy inquiry and quote process</li>
            <li>Dedicated support team</li>
            <li>Modern and secure platform</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} UPVC Connect. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
