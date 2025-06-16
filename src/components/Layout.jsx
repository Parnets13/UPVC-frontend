// Layout.js
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Fotter';


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-[20rem]">
        <Outlet />
      </main>
      <Footer />
      
    </div>
  );
};

export default Layout;