
"use client"

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Features', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'NFT Store', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'Resource', href: '#' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/Images/Untdesign 1.png" 
              alt="Sadel Logo" 
              className="h-8 sm:h-10 w-auto cursor-pointer transition-transform hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* App Button */}
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md">
              App
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md">
                English
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            {/* <button className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm xl:text-base font-medium border border-gray-300 rounded-md transition-all duration-200 hover:border-gray-400 hover:bg-gray-50">
              Sign In
            </button>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 text-sm xl:text-base font-medium rounded-md transition-all duration-200 hover:shadow-md">
              Create an account
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button 
                  className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  App
                </button>
                <button 
                  className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  English
                </button>
                {/* <button 
                  className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </button>
                <button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 block px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 hover:shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create an account
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;