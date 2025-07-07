"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Presentation } from 'lucide-react';

// const getSlidesToShow = () => {
//   if (typeof window === 'undefined') return 1;
//   if (window.innerWidth >= 1024) return 3;
//   if (window.innerWidth >= 640) return 2;
//   return 1;
// };

const TeachingTechCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      icon: <img src="Images/image 14.png" alt="Smartphone Icon" className="w-12 h-12 text-blue-500" />,
      title: "Hold Meetings Everywhere",
      description: "Have Meetings In You Office Anywhere"
    },
    {
      id: 2,
      icon: <Monitor className="w-12 h-12 text-orange-500" />,
      title: "Interactive Screens",
      description: "Have Touch Screens With Easy Control"
    },
    {
      id: 3,
      icon: <Presentation className="w-12 h-12 text-blue-600" />,
      title: "Master Series BenQ",
      description: "Advance Master BenQ Series To Enhance Quality"
    },
    {
      id: 4,
      icon: <Smartphone className="w-12 h-12 text-green-500" />,
      title: "Virtual Classrooms",
      description: "Connect Students From Anywhere In The World"
    },
    {
      id: 5,
      icon: <Monitor className="w-12 h-12 text-purple-500" />,
      title: "Smart Whiteboards",
      description: "Digital Writing And Drawing Solutions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  // Always return 3 slides for the grid
  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      const slideIndex = (currentSlide + i) % slides.length;
      visibleSlides.push(slides[slideIndex]);
    }
    return visibleSlides;
  };

  return (
    <div className="w-full bg-primary relative pb-38">
      {/* Main Container with Yellow Background */}
      <div className="p-8 overflow-hidden">
        {/* Header */}
        <div className="justify-center text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Enhancing all aspects of <span className="text-black">Teaching Technology</span> Through our
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl md:text-4xl font-bold text-black">Advance</span>
            <span className="text-3xl md:text-4xl font-normal text-gray-700">Solutions</span>
            <div className="w-8 h-1 bg-blue-500 rounded-full ml-2"></div>
          </div>
        </div>
        <div className="w-full px-2 sm:px-4 md:px-8 absolute left-1/2 -translate-x-1/2 -bottom-26">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          {/* Cards Container */}
          <div className="mx-2 sm:mx-6 md:mx-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {getVisibleSlides().map((slide, index) => (
                <div
                  key={`${slide.id}-${currentSlide}-${index}`}
                  className="bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex flex-col items-center text-center"
                  style={{ display: (index === 2 && isMobile) ? 'none' : undefined }}
                >
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-full">
                    {slide.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 leading-tight">
                    {slide.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 flex items-center">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-blue-500 scale-110' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeachingTechCarousel;