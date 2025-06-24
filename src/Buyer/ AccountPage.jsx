import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const [rating, setRating] = useState(0);
  const navigate= useNavigate();
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [user, setUser] = useState({
  name: '',
  mobileNumber: ''
});

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("buyerUser"));
  if (storedUser) {
    setUser(storedUser);
  }
}, []);
const handleFeedbackSubmit = async () => {
  if (!feedback || rating === 0) {
    alert("Please provide a rating and feedback text.");
    return;
  }

  try {
    const response = await fetch("http://localhost:9000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        phone: user.mobileNumber,
        text: feedback,
        stars: rating,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Failed to submit feedback");
    }

    alert("Feedback submitted successfully!");
    setFeedback("");
    setRating(0);
  } catch (err) {
    console.error("Error submitting feedback:", err);
    alert("Error: " + err.message);
  }
};

const handleLogout = () => {
  localStorage.removeItem("buyerUser");
  localStorage.removeItem("buyerToken");
  // Optionally navigate to login page
  navigate("/buyer-login");
};



  return (
    <div className="max-w-6xl mx-auto p-4 font-sans mt-24">
      {/* Flex container for two columns */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Profile Information Card */}
          <div className="bg-white p-5 rounded-xl shadow border">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold font-poppins text-sm">PROFILE INFORMATION</h3>
              {/* <FiEdit className="text-lg cursor-pointer" /> */}
            </div>

            <div className="mb-4">
              <label className="text-xs font-inter text-gray-500">Full Name</label>
             <div className="w-full p-2 bg-gray-100 rounded-md text-sm mt-1">
  {user.name || 'N/A'}
</div>
            </div>

            <div>
              <label className="text-xs font-inter text-gray-500">Phone Number</label>
              <div className="w-full font-inter p-2 bg-gray-100 rounded-md text-sm mt-1">
                 +91 {user.mobileNumber || 'N/A'}
              </div>
            </div>
          </div>

          {/* Feedback Card */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-lg font-bold font-poppins">FEEDBACK</h2>
            <p className="mt-2 text-sm font-medium font-inter">
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

            <p className="mt-4 italic font-semibold font-inter text-center text-sm">
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

            <div className="text-right font-inter text-xs text-gray-500">
              {feedback.length}/500 characters
            </div>

            <button
  onClick={handleFeedbackSubmit}
  className="w-full mt-4 bg-black text-white py-2 rounded-md font-inter font-semibold"
>
  SUBMIT FEEDBACK
</button>

          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Contact Us Card - New Addition */}
          <div className="bg-white p-5 rounded-xl shadow border">
            <h3 className="font-bold font-poppins text-sm">CONTACT US</h3>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3">
                <FaPhone className="text-gray-500 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 font-inter">Phone</p>
                  <p className="text-sm font-medium font-inter">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-gray-500 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 font-inter">Email</p>
                  <p className="text-sm font-medium font-inter">support@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-500 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 font-inter">Address</p>
                  <p className="text-sm font-medium font-inter">123 Business St, Suite 100, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            <Link to={'/contact'}>
            <button className="w-full mt-4 border border-black py-2 rounded-md font-semibold font-inter text-sm">
              SEND MESSAGE
            </button></Link>
          </div>

          {/* Terms & Conditions Card */}
          <div className="bg-white p-5 rounded-xl shadow border">
            <h3 className="font-bold font-poppins text-sm">TERMS & CONDITIONS</h3>
            <p className="text-sm mt-2 text-gray-700 font-inter">
              By using our services, you agree to our terms and conditions. Please
              read them carefully to understand your rights and responsibilities.
            </p>
            <Link to={'/t&c'}>
            <button className="text-right text-black font-bold font-inter text-sm mt-3 flex items-center gap-1">
              VIEW FULL TERMS <span>&rarr;</span>
            </button></Link>
          </div>

          {/* About Us Card */}
          
          <div className="bg-white p-5 rounded-xl shadow border">

            <h3 className="font-bold text-sm font-poppins">ABOUT US</h3>
            <p className="text-sm mt-2 text-gray-700 font-inter">
              We are committed to providing premium services with unmatched quality.
              Our team works tirelessly to ensure your complete satisfaction.
            </p>
            <Link to={'/about'}>
            <button className="text-right text-black font-bold font-inter text-sm mt-3 flex items-center gap-1">
              LEARN MORE <span>&rarr;</span>
            </button></Link>
          </div>

          {/* Logout Button */}
          <button
  onClick={handleLogout}
  className="w-full border border-black py-2 rounded-lg font-bold font-poppins flex items-center justify-center gap-2"
>
  LOGOUT <FiLogOut />
</button>

        </div>
      </div>
    </div>
  );
};

export default AccountPage;