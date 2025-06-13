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
import WindowPrice from './Buyer/WindowPrice.jsx';
import WindowOptions from './Buyer/WindowOptions.jsx';
import WhiteVsColor from './Buyer/WhiteVsColor.jsx';
import TheProcess from './Buyer/TheProcess.jsx';
import Category from './Buyer/Category.jsx';
import HistoryPage from './Buyer/HistoryPage.jsx';
import BuyerLogin from './Buyer/BuyerLogin.jsx';
import NavTab from './components/NavTab.jsx';
import SelectionPage from './Buyer/SelectionPage.jsx';
import UploadVideo from './Seller/UploadVideo.jsx';
import SellerLogin from './Seller/SellerLogin.jsx';








export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Buyer */}
          <Route path="/" element={<Main />} />
          <Route path="/buyerForm" element={<BuyerForm />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path='/buyer-login' element={<BuyerLogin/>}/>
          <Route path='/navtab' element={<NavTab/>}/>
        
      
        
       
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path='/category' element={<Category/>}/>
          <Route path='select' element={<SelectionPage/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
          
          <Route path="/seller-responses" element={<SellerResponses />} />
          <Route path="/contact-sellers" element={<ContactSellers />} />
          <Route path='/Insights' element={<InsightsAdsPage/>} />
          <Route path='/account'element={<AccountPage />} />
          <Route path='/window-price' element={<WindowPrice/>}/>
          <Route path='/window-options' element={<WindowOptions/>}/>
          <Route path='/white/color' element={<WhiteVsColor/>}/>
          <Route path='/process' element={<TheProcess/>}/>

          

          <Route path='/leads' element={<Leads />} />
          </Route>
      {/* Seller */}
      
          <Route path="/SellerForm" element={<SellerForm />} />
          <Route path='/SellerOTPVerification' element={<SellerOTPVerification />} />
          <Route path="/SellerPendingApproval" element={<SellerPendingApproval />} />
          <Route path='/SellerLogin' element={<SellerLogin/>}/>
          <Route element={<WithNavbar />}>
          <Route path="/Sellerhome" element={<Sellerhome />} />
          <Route path='/upload' element={<UploadVideo/>}/>
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