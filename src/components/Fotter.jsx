import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiMessageSquare, FiInfo, FiHelpCircle, FiPhone, FiMail, FiMapPin ,FiArrowRight} from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FiHome className="mr-2" />
              UPVC Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Connecting buyers with the best UPVC window and door sellers across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
        <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-gray-400 hover:text-white flex items-center">
                
                  Home
                </Link>
              </li>
              <li>
                <Link to="/seller-responses" className="text-gray-400 hover:text-white flex items-center">
                  Seller Responses
                </Link>
              </li>
            
              <li>
                <Link to="/Insights" className="text-gray-400 hover:text-white flex items-center">
                  Market Insights
                </Link>
              </li>
        
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <FiInfo className="mr-2" size={14} />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <FiHelpCircle className="mr-2" size={14} />
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <FiMessageSquare className="mr-2" size={14} />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <FiMessageSquare className="mr-2" size={14} />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-2 flex-shrink-0" size={14} />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-2 flex-shrink-0" size={14} />
                <span className="text-gray-400">support@upvcconnect.com</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 flex-shrink-0" size={14} />
                <span className="text-gray-400">
                  123 Business Park, Bangalore, Karnataka - 560001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} UPVC Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;