import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiEdit, FiLogOut } from "react-icons/fi";

const AccountPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans mt-24">
      {/* Flex container for two columns */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Profile Information Card */}
          <div className="bg-white p-5 rounded-xl shadow border">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-sm">PROFILE INFORMATION</h3>
              <FiEdit className="text-lg cursor-pointer" />
            </div>

            <div className="mb-4">
              <label className="text-xs text-gray-500">Full Name</label>
              <div className="w-full p-2 bg-gray-100 rounded-md text-sm mt-1">
                John Doe
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <div className="w-full p-2 bg-gray-100 rounded-md text-sm mt-1">
                +91 9876543210
              </div>
            </div>
          </div>

          {/* Feedback Card */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-lg font-bold">FEEDBACK</h2>
            <p className="mt-2 text-sm font-medium">
              On a scale of 1 - 5 how would you rate us?
            </p>

            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={starValue}
                      className="hidden"
                      onClick={() => setRating(starValue)}
                    />
                    <FaStar
                      size={28}
                      className="cursor-pointer transition-colors"
                      color={starValue <= (hover || rating) ? "#FFD700" : "#E5E7EB"}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            <p className="mt-4 italic font-semibold text-center text-sm">
              PLEASE SHARE YOUR INPUTS IF YOU THINK WE NEED TO DO SOMETHING BETTER
            </p>

            <textarea
              placeholder="Your valuable feedback here..."
              maxLength={500}
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full mt-4 p-3 border rounded-lg resize-none text-sm"
            ></textarea>

            <div className="text-right text-xs text-gray-500">
              {feedback.length}/500 characters
            </div>

            <button className="w-full mt-4 bg-black text-white py-2 rounded-md font-semibold">
              SUBMIT FEEDBACK
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Terms & Conditions Card */}
          <div className="bg-white p-5 rounded-xl shadow border">
            <h3 className="font-bold text-sm">TERMS & CONDITIONS</h3>
            <p className="text-sm mt-2 text-gray-700">
              By using our services, you agree to our terms and conditions. Please
              read them carefully to understand your rights and responsibilities.
            </p>
            <button className="text-right text-black font-bold text-sm mt-3 flex items-center gap-1">
              VIEW FULL TERMS <span>&rarr;</span>
            </button>
          </div>

          {/* About Us Card */}
          <div className="bg-white p-5 rounded-xl shadow border">
            <h3 className="font-bold text-sm">ABOUT US</h3>
            <p className="text-sm mt-2 text-gray-700">
              We are committed to providing premium services with unmatched quality.
              Our team works tirelessly to ensure your complete satisfaction.
            </p>
            <button className="text-right text-black font-bold text-sm mt-3 flex items-center gap-1">
              LEARN MORE <span>&rarr;</span>
            </button>
          </div>

          {/* Logout Button */}
          <button className="w-full border border-black py-2 rounded-lg font-bold flex items-center justify-center gap-2">
            LOGOUT <FiLogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
