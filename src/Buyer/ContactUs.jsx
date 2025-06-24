import React, { useState } from 'react';
import axios from 'axios';
import { FiMail, FiPhone, FiCheckCircle, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:9000/api/contact', formData);
      setSuccess(true);
      setError('');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="px-4 py-10 md:py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest font-semibold font-poppins uppercase">Contact Us</p>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mt-2">Get in touch with us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-inter">
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>

        {/* Form & Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold font-poppins uppercase mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg font-inter px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold font-poppins uppercase mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full border border-gray-300 font-inter rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold font-poppins uppercase mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                rows={4}
                required
                className="w-full border border-gray-300 font-inter rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              Send Your Request
            </button>

            {success && (
              <p className="text-green-600 text-sm font-inter mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 text-sm font-inter mt-2">
                ❌ {error}
              </p>
            )}
          </form>

          {/* Service Info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg font-poppins">With our services you can</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2 font-inter" />
                Improve product visibility and reach<br />
                Show your UPVC products to a targeted audience actively searching for trusted vendors.
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2 font-inter" />
                Connect with genuine buyers and sellers<br />
                Verified user base ensures high-quality leads and safe transactions.
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2 font-inter" />
                Simplify sales and lead management<br />
                Track inquiries, manage customer details, and follow up — all in one dashboard.
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-black mt-1 mr-2 font-inter" />
                Build trust with real-time reviews & ratings<br />
                Gain credibility through transparent customer feedback and performance insights.
              </li>
            </ul>

            {/* Location Info */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 text-sm text-gray-700">
              <div>
                <div className="flex items-center font-semibold font-poppins mb-1">
                  <FiMapPin className="mr-2" />
                  India
                </div>
                <p>Plot No 8-2-601/p/15ms</p>
                <p>Banjara Hills, Road No 10</p>
                <p>Hyderabad, 500034</p>
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
