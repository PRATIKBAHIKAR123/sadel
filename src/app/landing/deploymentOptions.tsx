"use client"


import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './_swiperStyles';

type TabKey = "Standalone" | "API" | "Integrated";

const tabContent: Record<TabKey, {
  title: string;
  description: string;
  features: string[];
}> = {
  Standalone: {
    title: "Standalone Solution",
    description: "Deploy our complete solution independently in your infrastructure with full control and customization options.",
    features: ["Complete independence", "Full customization", "Direct deployment"]
  },
  API: {
    title: "Access all the features directly on the DeviceThread mobile app separate from any other systems.",
    description: "Access all the features directly on the Devicethread mobile app separate from any other systems. A white label communication module included to send digital keys to guests via email or SMS.",
    features: ["Direct mobile access", "White label communication", "Email & SMS integration"]
  },
  Integrated: {
    title: "Integrated Solutions",
    description: "Seamlessly integrate with your existing systems and workflows for a unified experience.",
    features: ["System integration", "Unified workflow", "Seamless experience"]
  }
};

export default function FlexibleDeploymentOptions() {
  const tabKeys: TabKey[] = Object.keys(tabContent) as TabKey[];
  const [activeTab, setActiveTab] = useState<TabKey>("API");

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-8">
            Flexible deployment options
          </h2>
        </div>
        <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-full p-1 shadow-sm">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as TabKey)}
                  className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-yellow-400 text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        {/* Swiper Slider for all three cards */}
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={-60}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="my-8 deployment-swiper"
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: -80 },
            768: { slidesPerView: 1.3, spaceBetween: -60 },
          }}
          
        >
          {tabKeys.map((tab) => (
            <SwiperSlide key={tab}>
              {({ isActive }) => (
                <div className={`bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col justify-between swiper-card transition-all duration-300 ${isActive ? '' : 'opacity-60'}`}>
                  <div className="flex">
                    <p className={`text-[19px] font-medium font-['Urbanist'] leading-7 mb-4 transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400'}`}> 
                      {tabContent[tab].description}
                    </p>
                    <div className="relative w-full mx-auto mt-4">
                      <img
                        src="/Images/Screenshot 2024-04-05 at 3.34 2.png"
                        alt="Phone Illustration"
                        className="w-full h-40 object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-xs text-gray-400">
                    DeviceThread {tab}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}