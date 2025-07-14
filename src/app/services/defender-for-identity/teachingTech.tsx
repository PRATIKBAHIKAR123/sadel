"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Monitor } from 'lucide-react';

const TeachingTechCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const slides = [
    {
      id: 1,
      icon: <img src="/Images/image 14.png" alt="Smartphone Icon" className="w-16 h-16" />,
      title: "Hold Meetings Everywhere",
      description: "Have Meetings In You Office Anywhere"
    },
    {
      id: 2,
      icon: <img src="/Images/smart-tv 4.png" alt="Smartphone Icon" className="w-16 h-16" />,
      title: "Interactive Screens",
      description: "Have Touch Screens With Easy Control "
    },
    {
      id: 3,
      icon: <img src="/Images/image 16.png" alt="Smartphone Icon" className="w-18 h-16" />,
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

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Calculate transform based on screen size
  const getTransform = () => {
    if (isMobile) {
      return `translateX(-${currentSlide * 100}%)`;
    } else if (isTablet) {
      return `translateX(-${currentSlide * 50}%)`;
    } else {
      return `translateX(-${currentSlide * 33.333333}%)`;
    }
  };



  return (
    <div className="w-full bg-primary relative pb-38 mb-42">
      {/* Main Container with Yellow Background */}
      <div className="p-8 overflow-hidden">
        {/* Header */}
        <div className="justify-center text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Enhancing all aspects of <span className="text-black">Teaching Technology</span> Through our
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Advance</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-700">Solutions</span>
            <div className="w-6 sm:w-8 h-1 bg-blue-500 rounded-full ml-2"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full px-2 sm:px-4 md:px-8 absolute left-1/2 -translate-x-1/2 -bottom-26">
          <div className="carousel-container">
            {/* Navigation Buttons - Mobile */}
            {isMobile && (
              <>
                <button
                  onClick={prevSlide}
                  className="carousel-nav-mobile prev"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="carousel-nav-mobile next"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-gray-600" />
                </button>
              </>
            )}

            {/* Navigation Buttons - Desktop/Tablet */}
            {!isMobile && (
              <>
                <button
                  onClick={prevSlide}
                  className="carousel-nav-desktop prev"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="carousel-nav-desktop next"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-gray-600" />
                </button>
              </>
            )}

                         {/* Carousel Track */}
             <div className="carousel-track" style={{ transform: getTransform() }}>
               {slides.map((slide) => (
                 <div
                   key={slide.id}
                   className={`${
                     isMobile 
                       ? 'carousel-slide' 
                       : isTablet 
                         ? 'carousel-slide-tablet' 
                         : 'carousel-slide-desktop'
                   } px-2`}
                 >
                  <div className="bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex flex-col items-center text-center h-full">
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
                </div>
              ))}
            </div>

            {/* Slide Indicators - Only show on mobile */}
            {isMobile && (
              <div className="carousel-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`carousel-indicator ${
                      index === currentSlide ? 'active' : ''
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingTechCarousel;