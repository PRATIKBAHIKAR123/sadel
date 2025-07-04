
"use client"

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Features', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'NFT Store', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'Resource', href: '#' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <img src="Images/Untdesign 1.png" alt="Sadel Logo" className="h-8 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* App Button */}
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
              App
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                English
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            {/* Sign In Button */}
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md transition-colors duration-200 hover:border-gray-400">
              Sign In
            </button>

            {/* Create Account Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200">
              Create an account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  App
                </button>
                <button className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  English
                </button>
                <button className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium border border-gray-300 rounded-md mb-2">
                  Sign In
                </button>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 block px-3 py-2 text-base font-medium rounded-md">
                  Create an account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;