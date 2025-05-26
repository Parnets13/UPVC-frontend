import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiMessageSquare, FiInfo, FiHelpCircle, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Forrer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FiHome className="mr-2" />
              UPVC Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering UPVC sellers with quality leads and business growth tools.
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
          
          {/* Seller Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Seller Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Sellerhome" className="text-gray-400 hover:text-white flex items-center">
                 
                  Home
                </Link>
              </li>
              <li>
                <Link to="/SellerLeadDetails" className="text-gray-400 hover:text-white flex items-center">
                
                  Leads
                </Link>
              </li>
              <li>
                <Link to="/insight" className="text-gray-400 hover:text-white flex items-center">
             
                  Market Insights
                </Link>
              </li>
            
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <FiInfo className="mr-2" size={14} />
                  Seller Guide
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
                  Contact Support
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
                <span className="text-gray-400">sellers@upvcconnect.com</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 flex-shrink-0" size={14} />
                <span className="text-gray-400">
                  UPVC Connect, Bangalore, Karnataka - 560001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} UPVC Connect Seller Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Forrer;