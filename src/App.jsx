import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/Main.jsx';
import Layout from './components/Layout';
import BuyerForm from './Buyer/BuyerForm.jsx';
import OTPVerification from './Buyer/OTPVerification';
import Home from './Buyer/Home';
import Navbar from './components/Navbar';
import Footer from './components/Fotter.jsx';
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
import ContactUs from './Buyer/ContactUs.jsx';
import AboutUs from './Buyer/AboutUs.jsx';
import TermsAndConditions from './Buyer/TermsAndConditions.jsx';

import LogIn from './components/Admin/LogIn.jsx';
import Admin from './components/Admin/Admin.jsx';
import Dashboard from './components/Admin/Dashboard.jsx';
import Banner from './components/Admin/Buyer/Banner.jsx';
import WindowOpt from './components/Admin/Buyer/WindowOpt.jsx';
import SubOptions from './components/Admin/Buyer/SubOptions.jsx';
import AdminCategory from './components/Admin/Buyer/AdminCategory.jsx';
import SubCategory from './components/Admin/Buyer/SubCategory.jsx';
import Prices from './components/Admin/Buyer/Prices.jsx';
import Color from './components/Admin/Buyer/Color.jsx';
import Process from './components/Admin/Buyer/Process.jsx';
import User from './components/Admin/Buyer/User.jsx';
import Feedback from './components/Admin/Buyer/Feedback.jsx';

import Ad from './components/Admin/Seller/Ad.jsx';
import ProLeads from './components/Admin/Seller/ProLeads.jsx';
import User1 from './components/Admin/Seller/User1.jsx';
//


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Buyer */}
          <Route path="/" element={<Main />} />
          <Route path="/buyerForm" element={<BuyerForm />} />
          <Route path="/otp-verification" element={<OTPVerification />} />

=======
          <Route path='/buyer-login' element={<BuyerLogin/>}/>
          <Route path='/navtab' element={<NavTab/>}/>
        
      
        
       
        <Route path="/" element={<Layout />}/>
        //add nabar and footer 
          <Route path="/home" element={<><Navbar/><Home /><Footer/></>} />
          <Route path='/category' element={<><Navbar/><Category/><Footer/></>}/>
          <Route path='select' element={<><Navbar/><SelectionPage/><Footer/></>}/>
          <Route path='/history' element={<><Navbar/><HistoryPage/><Footer/></>}/>
          <Route path='/about' element={<><Navbar/><AboutUs/><Footer/></>}/>
          <Route path='/t&c' element={<><Navbar/><TermsAndConditions/><Footer/></>}/>
          <Route path='/contact' element={<><Navbar/><ContactUs/><Footer/></>}/>
          <Route path="/seller-responses" element={<SellerResponses />} />
          <Route path="/contact-sellers" element={<ContactSellers />} />
          <Route path='/Insights' element={<InsightsAdsPage/>} />
          <Route path='/account'element={<><Navbar/><AccountPage /><Footer/></>} />
          <Route path='/window-price' element={<><Navbar/><WindowPrice/><Footer/></>}/>
          <Route path='/window-options' element={<><Navbar/><WindowOptions/><Footer/></>}/>
          <Route path='/white/color' element={<><Navbar/><WhiteVsColor/><Footer/></>}/>
          <Route path='/process' element={<><Navbar/><TheProcess/><Footer/></>}/>

          




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
          <Route path='/SellerLogin' element={<SellerLogin/>}/>
          <Route element={<WithNavbar />}>
            <Route path="/Sellerhome" element={<Sellerhome />} />
            <Route path='/SellerLeadDetails' element={<SellerLeadDetails />} />
            <Route path='/SellerContactBuyer' element={<SellerContactBuyer />} />
            <Route path='/lead' element={<Lead />} />
            <Route path='/insight' element={<InsightsAds />} />
            <Route path='/upload' element={<UploadVideo/>}/>
            <Route path='/SellerAccountPage' element={<SellerAccountPage />} />
          </Route>



            <Route path="LogIn" element={<LogIn />} />
          {/* ADMIN PANEL */}
          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="Banner" element={<Banner />} />
            <Route path="WindowOpt" element={<WindowOpt />} />
            <Route path="SubOptions" element={<SubOptions />} />
            <Route path='Category' element={<AdminCategory />} />
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