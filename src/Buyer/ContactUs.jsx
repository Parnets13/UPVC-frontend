import React from 'react';
import { FiMail, FiPhone, FiCheckCircle, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="px-4 py-10 md:py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest font-semibold uppercase">Contact Us</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Get in touch with us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>

        {/* Form & Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold uppercase mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold uppercase mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold uppercase mb-1">Message</label>
              <textarea
                placeholder="Enter Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              Send Your Request
            </button>
          </form>

          {/* Service Info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">With our services you can</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2" />
                Improve product visibility and reach<br></br>
Show your UPVC products to a targeted audience actively searching for trusted vendors.
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2" />
                Connect with genuine buyers and sellers<br></br>
Verified user base ensures high-quality leads and safe transactions.
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2" />
                Simplify sales and lead management<br></br>
Track inquiries, manage customer details, and follow up — all in one dashboard.
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2" />
                Build trust with real-time reviews & ratings<br></br>
Gain credibility through transparent customer feedback and performance insights.


              </li>
            </ul>

            {/* Location Info */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 text-sm text-gray-700">
              <div>
                <div className="flex items-center font-semibold mb-1">
                  <FiMapPin className="mr-2" />
                  India
                </div>
                <p>Plot No 8-2-601/p/15ms</p>
                <p>Banjara Hills, Road No 10</p>
                <p>Hyderabad, 500034</p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-16 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <FiMail />
            <span>contact.growthux@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone />
            <span>+91 7648999213</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
