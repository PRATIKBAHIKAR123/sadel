"use client"

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/languageContext";
import { translations } from "@/lib/translations";

const Footer = () => {
  const [email, setEmail] = useState('');
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-yellow-50 p-4 sm:p-8 lg:p-16">
      <div className="max-w-full mx-auto bg-white rounded-[25px] p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Section - Logo and Newsletter */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            {/* Logo */}
            <div>
              <img 
                src="/Images/Untdesign 1.png" 
                alt="Sadel Logo" 
                className="h-10 sm:h-12 mb-3 sm:mb-4" 
              />
              <p className="text-[#7f7f7f] text-sm sm:text-base font-normal font-['Figtree'] leading-relaxed">
                {t.smartInfrastructureSimplified}
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                {t.subscribeToOurNewsletter}
              </h3>
              <div className={`flex flex-col ${language === 'العربية' ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-2 sm:gap-0`}>
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.yourEmailAddress}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 ${language === 'العربية' ? 'rounded-md sm:rounded-r-md sm:rounded-l-none' : 'rounded-md sm:rounded-l-md sm:rounded-r-none'} focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base`}
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className={`bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors duration-200 text-sm sm:text-base ${language === 'العربية' ? 'sm:rounded-l-none sm:rounded-l-md' : 'sm:rounded-l-none sm:rounded-r-md'}`}
                >
                  {t.subscribe}
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors p-1 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors p-1 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors p-1 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors p-1 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600 transition-colors p-1 hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">{t.usefulLinks}</h3>
            <ul className="space-y-1 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  {t.sadelProductsTitle || 'Products'}
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  {t.contactUsButton || 'Contact Us'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">{t.cyberSOC}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/services/managedSOC" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  {t.manageSOCServicesTitle || 'Manage SOC Services'}
                </Link>
              </li>
              <li>
                <Link href="/services/azure-security-service" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  {t.azureSecurityTitle || 'Azure Security'}
                </Link>
              </li>
              <li>
                <Link href="/services/defenderforEndpoint" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  Defender for Endpoint
                </Link>
              </li>
              <li>
                <Link href="/services/email-security" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  Email Security
                </Link>
              </li>
              <li>
                <Link href="/services/microsoft-cloud-app-security" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  {t.microsoftCloudAppSecurityTitle || 'Microsoft Cloud App Security'}
                </Link>
              </li>
              <li>
                <Link href="/services/defender-for-identity" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  Defender for Identity
                </Link>
              </li>
            </ul>
          </div>

          {/* T&Cs */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">{t.consultingServicesTitle || 'Consulting Services'}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/services/azure-virtual-desktop" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  Azure Virtual Desktop
                </Link>
              </li>
              <li>
                <Link href="/services/citrix-consulting" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  Citrix Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/pki-consulting" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  PKI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/active-directory-consulting" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  Active Directory Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/modern-workplace" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  Modern WorkPlace
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software-development" className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base block py-1">
                  {t.softwareDevelopmentService}
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Section with Lorem Ipsum */}
        {/* <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Lorem Ipsum</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Lorem Ipsum</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Lorem Ipsum</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;