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
          <Route path='/Insights' element={<InsightsAdsPage/>} />
          <Route path='/account'element={<AccountPage />} />
          

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
          <Route path='/insight' element={<InsightsAds/>} />
          <Route path='/SellerAccountPage' element={<SellerAccountPage/>} />
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