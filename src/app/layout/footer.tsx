"use client"

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-yellow-50 p-16">
      <div className="max-w-full mx-auto bg-white rounded-[25px] p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Section - Logo and Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo */}
            <div>
              <img src="Images/Untdesign 1.png" alt="Sadel Logo" className="h-12 mb-4" />
              <p className="text-[#7f7f7f] text-base font-normal font-['Figtree'] leading-tight">Smart Infrastructure Simplified</p>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </h3>
              <div className="flex">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-6 py-3 rounded-r-md transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="/aboutus" className="text-gray-600 hover:text-gray-800 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Press Release
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* T&Cs */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">T&Cs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Lorem Ipsum */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Lorem Ipsum</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Lorem Ipsum</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Lorem Ipsum</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;