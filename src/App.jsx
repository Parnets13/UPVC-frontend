import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/Main.jsx';
import Layout from './components/Layout';
import BuyerForm from './Buyer/BuyerForm.jsx';
import OTPVerification from './Buyer/OTPVerification';
import Home from './Buyer/Home';
import Navbar from './components/Navbar';
// import RequestStatus from './Buyer/RequestStatus';
import SellerResponses from './Buyer/SellerResponses';
import ContactSellers from './Buyer/ContactSellers';
// Seller
import SellerForm from './Seller/SellerForm';
import SellerOTPVerification from './Seller/SellerOTPVerification.jsx';
import SellerPendingApproval from './Seller/SellerPendingApproval';
import Navbar1 from './Seller/Navbar1';
import { Outlet } from 'react-router-dom';
import Sellerhome from './Seller/Sellerhome.jsx';
import SellerLeadDetails from './Seller/SellerLeadDetails';
import SellerContactBuyer from './Seller/SellerContactBuyer';
import InsightsAdsPage from './Buyer/InsightsAdsPage.jsx';
import InsightsAds from './Seller/InsightsAds.jsx';

import AccountPage from './Buyer/ AccountPage.jsx';

import Leads from './Buyer/Leads.jsx';
import Lead from './Seller/Lead.jsx';
import SellerAccountPage from './Seller/SellerAccountPage.jsx';
import Forrer from './Seller/Forrer';
import Admin from './components/Admin/Admin'
import Dashboard from './components/Admin/Dashboard'
import Banner from './components/Admin/Buyer/Banner.jsx';
import WindowOpt from './components/Admin/Buyer/WindowOpt.jsx';
import SubOptions from './components/Admin/Buyer/SubOptions.jsx';
import Category from './components/Admin/Buyer/Category.jsx';
import SubCategory from './components/Admin/Buyer/SubCategory.jsx';
import Prices from './components/Admin/Buyer/Prices.jsx';
import Color from './components/Admin/Buyer/Color.jsx';
import Process from './components/Admin/Buyer/Process.jsx';
import User from './components/Admin/Buyer/User.jsx';
import Ad from './components/Admin/Seller/Ad.jsx';
import User1 from './components/Admin/Seller/User1.jsx';
import ProLeads from './components/Admin/Seller/ProLeads.jsx';
import Feedback from './components/Admin/Buyer/Feedback.jsx';
import dashboard from './components/Admin/Dashboard.jsx';
import LogIn from './components/Admin/LogIn.jsx';
import './App.css';










export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Buyer */}
          <Route path="/" element={<Main />} />
          <Route path="/buyerForm" element={<BuyerForm />} />
          <Route path="/otp-verification" element={<OTPVerification />} />




          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/seller-responses" element={<SellerResponses />} />
            <Route path="/contact-sellers" element={<ContactSellers />} />
            <Route path='/Insights' element={<InsightsAdsPage />} />
            <Route path='/account' element={<AccountPage />} />


            <Route path='/leads' element={<Leads />} />
          </Route>
          {/* Seller */}

          <Route path="/SellerForm" element={<SellerForm />} />
          <Route path='/SellerOTPVerification' element={<SellerOTPVerification />} />
          <Route path="/SellerPendingApproval" element={<SellerPendingApproval />} />
          <Route element={<WithNavbar />}>
            <Route path="/Sellerhome" element={<Sellerhome />} />
            <Route path='/SellerLeadDetails' element={<SellerLeadDetails />} />
            <Route path='/SellerContactBuyer' element={<SellerContactBuyer />} />
            <Route path='/lead' element={<Lead />} />
            <Route path='/insight' element={<InsightsAds />} />
            <Route path='/SellerAccountPage' element={<SellerAccountPage />} />
          </Route>



            <Route path="LogIn" element={<LogIn />} />
          {/* ADMIN PANEL */}
          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="Banner" element={<Banner />} />
            <Route path="WindowOpt" element={<WindowOpt />} />
            <Route path="SubOptions" element={<SubOptions />} />
            <Route path='Category' element={<Category />} />
            <Route path='SubCategory' element={<SubCategory />} />
            <Route path="Prices" element={<Prices />} />
            <Route path='Color' element={<Color />} />
            <Route path='Process' element={<Process />} />
            <Route path='User' element={<User />} />
            <Route path='Feedback' element={<Feedback />} />



            <Route path='Ad' element={<Ad />} />
            <Route path='User1' element={<User1 />} />
            <Route path='ProLeads' element={<ProLeads />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}
const WithNavbar = () => {
  return (
    <>
      <Navbar1 />
      <div className="pt-16 min-h-screen">
        <Outlet />
      </div>
      <Forrer />
    </>
  );
};