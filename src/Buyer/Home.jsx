import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiTrendingUp, FiArrowRight, FiCheckCircle, FiRefreshCw } from "react-icons/fi";
import dummyVideo from "../assets/dummy.mp4";

// Tab Components
import WindowPrice from "./WindowPrice";
import WindowOptions from "./WindowOptions";
import WhiteVsColor from "./WhiteVsColor";
import TheProcess from "./TheProcess";

// Tabs Wrapper
import Tabs from '../components/Tabs'

const Home = () => {
  const navigate = useNavigate();

  const tabs = [
    { id: "windowPrice", label: "WINDOW PRICE" },
    { id: "windowOptions", label: "BUY NOW" },
    { id: "whiteVsColor", label: "WHITE vs COLOR" },
    { id: "theProcess", label: "THE PROCESS" },
  ];

  const tabComponents = {
    windowPrice: <WindowPrice />,
    windowOptions: <WindowOptions />,
    whiteVsColor: <WhiteVsColor />,
    theProcess: <TheProcess />,
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs tabs={tabs} tabComponents={tabComponents} initialTab="windowPrice" />
      </div>
    </div>
  );
};

export default Home;
