"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/languageContext";
import { translations } from "@/lib/translations";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const navigationItems = [
    { name: t.sadelProductsTitle || "Products", href: "/portfolio" },
    { name: t.techServicesTitle || "Services", href: "#", hasDropdown: true },
    { name: "About Us", href: "/aboutus" },
    { name: t.contactUsButton || "Contact Us", href: "/contact-us" },
    { name: t.ourBlogsTitle || "Blog", href: "/blog" },
  ];

  const servicesDropdownData = {
    [t.securityTitle || "Security"]: [
      {
        name: t.manageSOCServicesTitle || "Manage SOC Services",
        href: "/services/managedSOC",
      },
      {
        name: t.azureSecurityTitle || "Azure Security",
        href: "/services/azure-security-service",
      },
      { name: "Defender for Endpoint", href: "/services/defenderforEndpoint" },
      { name: "Email Security", href: "/services/email-security" },
      {
        name:
          t.microsoftCloudAppSecurityTitle || "Microsoft Cloud App Security",
        href: "/services/microsoft-cloud-app-security",
      },
      {
        name: "Defender for Identity",
        href: "/services/defender-for-identity",
      },
      { name: "VAPT", href: "/services/VAPT" },
      {
        name: t.networkAndSecurityTitle || "Network and Security",
        href: "/services/network-and-security-services",
      },
      {
        name: "Identity and Access Management",
        href: "/services/identity-and-access-management",
      },
    ],
    [t.consultingServicesTitle || "Consulting Services"]: [
      {
        name: "Azure Consulting Services",
        href: "/services/azure-consulting-services",
      },
      {
        name: "Azure Virtual Desktop",
        href: "/services/azure-virtual-desktop",
      },
      { name: "Citrix Consulting", href: "/services/citrix-consulting" },
      { name: "PKI Consulting", href: "/services/pki-consulting" },
      {
        name: "Active Directory Consulting",
        href: "/services/active-directory-consulting",
      },
      { name: "Modern WorkPlace", href: "/services/modern-workplace" },
      { name: "AFAQ's - AI Solutions", href: "/services/sadels-ai-solutions" },
      {
        name: "AFAQ's - Data Driven Solutions",
        href: "/services/sadels-data-driven-solutions",
      },
      {
        name: t.softwareDevelopmentService || "Software Development Service",
        href: "/services/custom-software-development",
      },
    ],
    [t.supportResearchTitle || "Support and Market Research"]: [
      {
        name: t.cloudManagedServicesTitle || "Cloud Managed Services",
        href: "/services/cloud-managed-services",
      },
      { name: "IT Training", href: "/services/it-training-services" },
      { name: "Market Research", href: "/services/market-research" },
      {
        name: t.websiteAppDevelopmentTitle || "Website & App Development",
        href: "/services/website-app-development",
      },
      { name: "IT Help Desk", href: "/services/it-help-desk" },
    ],
  };

  // const handleLanguageChange = (newLanguage: "English" | "العربية") => {
  //   setLanguage(newLanguage);
  //   setIsLanguageDropdownOpen(false);
  // };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Images/لو لو .png"
              alt="AFAQ Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto cursor-pointer transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                        <div className="p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {Object.entries(servicesDropdownData).map(
                              ([category, items]) => (
                                <div key={category} className="space-y-4">
                                  <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
                                    {category}
                                  </h3>
                                  <ul className="space-y-2">
                                    {items.map((service) => (
                                      <li key={service.name}>
                                        <Link
                                          href={service.href}
                                          onClick={() =>
                                            setIsServicesOpen(false)
                                          }
                                          className="text-gray-600 hover:text-blue-600 text-sm hover:underline transition-colors duration-200 block py-1"
                                        >
                                          {service.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* App Button */}
            {/* <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md">
              App
            </button> */}

            {/* Language Selector */}
            {/* <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
              >
                {language}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button> */}

            {/* Language Dropdown */}
            {/* {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange("English")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      English
                    </button> */}
            {/* <button
                      onClick={() => handleLanguageChange('العربية')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      العربية
                    </button> */}
            {/* </div>
                </div>
              )} */}
            {/* </div> */}
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
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Services Dropdown */}
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-4">
                          {Object.entries(servicesDropdownData).map(
                            ([category, items]) => (
                              <div key={category} className="space-y-2">
                                <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1">
                                  {category}
                                </h4>
                                <ul className="space-y-1">
                                  {items.map((service) => (
                                    <li key={service.name}>
                                      <a
                                        href={service.href}
                                        className="text-gray-600 hover:text-blue-600 text-sm block py-1 pl-2 hover:bg-gray-50 rounded transition-colors duration-200"
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                      >
                                        {service.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              {/* <div className="pt-4 border-t border-gray-200 space-y-2">
                <button
                  className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  App
                </button>
                <div className="space-y-1">
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("العربية")}
                    className="w-full text-left text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                  >
                    العربية
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
