import React, { useRef } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NavTab from "../components/NavTab";
import { Link } from "react-router-dom";

const categoryData = [
  {
    name: "Elite Crest",
    description:
      "Exquisite uPVC windows crafted with top-tier globally sourced profiles and designs.",
    brands: [
      {
        name: "Aluplast",
        image: "https://via.placeholder.com/400x200",
        features: ["Eco-Friendly", "Superior Glazing", "Weatherproof"],
        benefits: ["20-Year Warranty", "Energy Saving", "Noise Reduction"],
      },
      {
        name: "Fenesta",
        image: "https://via.placeholder.com/400x200",
        features: ["Durable Frame", "UV Resistant", "Secure Locking"],
        benefits: ["Easy Maintenance", "Thermal Efficient", "Long Lifespan"],
      },
    ],
  },
  {
    name: "Luxe Frame",
    description:
      "Luxury meets strength. Handpicked premium frames that balance aesthetics with robustness.",
    brands: [
      {
        name: "Encraft",
        image: "https://via.placeholder.com/400x200",
        features: ["Custom Sizes", "Premium Profile", "Double Glazed"],
        benefits: ["Minimal Noise", "High Security", "Insulation Boost"],
      },
      {
        name: "WindTek",
        image: "https://via.placeholder.com/400x200",
        features: ["Low U-Value", "Smooth Rollers", "Weather Seal"],
        benefits: ["Insulated Glass", "Modern Look", "Energy Efficient"],
      },
       {
        name: "Fenesta",
        image: "https://via.placeholder.com/400x200",
        features: ["Durable Frame", "UV Resistant", "Secure Locking"],
        benefits: ["Easy Maintenance", "Thermal Efficient", "Long Lifespan"],
      },
    ],
  },
  {
    name: "Core Vintage",
    description:
      "Timeless craftsmanship fused with traditional strength and classic elegance.",
    brands: [
      {
        name: "ClassicPro",
        image: "https://via.placeholder.com/400x200",
        features: ["Rust-Free", "Heavy-Duty", "Classic Finish"],
        benefits: ["Budget Friendly", "Long Warranty", "Reliable Build"],
      },
      {
        name: "TraditionLine",
        image: "https://via.placeholder.com/400x200",
        features: ["Timber Look", "High Strength", "Elegant Bars"],
        benefits: ["Rich Appearance", "Secure Build", "Authentic Style"],
      },
    ],
  },
  {
    name: "Premium Shield",
    description:
      "Engineered profiles designed for ultimate protection and insulation.",
    brands: [
      {
        name: "ShieldMax",
        image: "https://via.placeholder.com/400x200",
        features: ["High Impact", "Weather Guard", "Color Stability"],
        benefits: ["Low Maintenance", "Fire Retardant", "Stylish Look"],
      },
      {
        name: "ToughCore",
        image: "https://via.placeholder.com/400x200",
        features: ["Shock Resistant", "Dust Proof", "UV Safe"],
        benefits: ["No Fading", "Secure Latch", "Heavy Glazing"],
      },
    ],
  },
];


const CategoryCard = ({ category }) => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 relative min-h-[600px] flex flex-col justify-between">
      {/* Select Button */}
      <Link to={'/select'}>
      <button className="absolute top-4 right-4 bg-black text-white text-xs font-semibold px-4 py-1 rounded-full hover:bg-gray-800 transition">
        SELECT
      </button>
      </Link>

      {/* Title + Description */}
      <div>
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold uppercase">{category.name}</h2>
          <p className="text-gray-600 mt-2 text-sm">{category.description}</p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {category.brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
                <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between w-full text-sm font-semibold border-b mb-2 pb-1">
                  <span className="flex items-center gap-1">
                    <FaCheckCircle /> FEATURES
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStar /> BENEFITS
                  </span>
                </div>

                <div className="flex justify-between w-full text-sm text-gray-700">
                  <ul className="space-y-1 text-left">
                    {brand.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="text-black" /> {f}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1 text-right">
                    {brand.benefits.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 justify-end"
                      >
                        <FaStar className="text-black" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Arrow Navigation */}
      <div className="mt-6 flex justify-center items-center gap-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-gray-200 w-10 h-10 rounded-full text-xl text-black hover:bg-gray-300 transition"
        >
          &lt;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-gray-200 w-10 h-10 rounded-full text-xl text-black hover:bg-gray-300 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default function Category() {
  const categoryRows = [];
  for (let i = 0; i < categoryData.length; i += 2) {
    categoryRows.push(categoryData.slice(i, i + 2));
  }
  

  return (
    <div className="mt-24">
        <NavTab/>
      {/* Page Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 mt-24">
        <h1 className="text-2xl md:text-3xl font-bold uppercase mb-2">
          Select Your Preferred Category
        </h1>
        <p className="text-gray-600 text-sm">
          We've categorized uPVC windows into 3 tiers to match your style &
          requirements. Please select one category to explore the premium brands
          we offer.
        </p>
      </div>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto py-12 px-4 space-y-12 font-sans">
        {categoryRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {row.map((category, i) => (
              <CategoryCard key={i} category={category} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
