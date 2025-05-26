import React from 'react';
import Navbar1 from './Navbar1';
import { Outlet } from 'react-router-dom';

const Layout1 = () => {
  return (
    <div className="pb-16"> 
      <Navbar1 />
      <Outlet />
    </div>
  );
};

export default Layout1;