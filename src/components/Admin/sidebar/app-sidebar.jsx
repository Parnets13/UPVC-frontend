// src/components/Admin/sidebar/app-sidebar.jsx

import { Calendar, Home, Inbox, LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { MdOutlineVideoLabel } from "react-icons/md";
import { PiFlagBanner } from "react-icons/pi";
import { IoOptions } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { IoPricetagOutline } from "react-icons/io5";
import { IoColorFillOutline } from "react-icons/io5";
import { SiProcesswire } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { FaAd } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";

import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/logo.png";

const dashboard = [
  { title: "Dashboard", url: "/Admin/Dashboard", icon: LayoutDashboard }
];

const Buy = [
  { title: "Banner", url: "/admin/Banner", icon: PiFlagBanner },
  { title: "Window Options", url: "/admin/WindowOpt", icon: IoOptions },
  { title: "Window SubOptions", url: "/admin/SubOptions", icon: IoOptions },
  { title: "Category", url: "/admin/Category", icon: TbCategory },
  { title: "Window SubCategory", url: "/admin/SubCategory", icon: TbCategory },
  { title: "Prices", url: "/admin/Prices", icon: IoPricetagOutline },
  { title: "Color", url: "/admin/Color", icon: IoColorFillOutline },
  { title: "Process", url: "/admin/Process", icon: SiProcesswire },
  { title: "Buyer", url: "/admin/User", icon: FaRegUser },
  { title: "Feedback", url: "/admin/Feedback", icon: VscFeedback },
];

const Sell = [
  { title: "Ad", url: "/admin/Ad", icon: FaAd },
  { title: "Seller", url: "/admin/User1", icon: FaRegUser },
  { title: "Leads", url: "/admin/ProLeads", icon: SiGoogleads }
];



export const AppSidebar = () => {
  const location = useLocation();

  const renderMenuGroup = (label, items) => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-gray-300 uppercase">{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={
                location.pathname === item.url ||
                (item.url === "/Admin/Dashboard" && location.pathname === "/Admin/Dashboard")
              }>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent className="">
        <div className="flex justify-center items-center bg-white mb-1 sticky top-0 z-50">
          <img src={logo} alt="Logo" className="w-60 " />
        </div>
        {renderMenuGroup("Dashboard", dashboard)}
        {renderMenuGroup("Buy", Buy)}
        {renderMenuGroup("Sell", Sell)}

      </SidebarContent>
    </Sidebar>
  );
};
