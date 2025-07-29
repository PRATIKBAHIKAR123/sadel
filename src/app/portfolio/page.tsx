"use client";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import React, { useState } from "react";
// import { Star } from 'lucide-react';
import "../globals.css";
import TeachingTechCarousel from "../landing/teachingtech";
import TestimonialSection from "../edtechSolutions/testimonials";

// const products = [
//   {
//     title: "Interactive Display Panel",
//     image: "/Images/Screenshot 2025-06-29 at 9.19.49 PM 1.png",
//     description: "4K UHD, AI-powered, multi-touch, wireless casting, and more. Perfect for modern offices and classrooms.",
//     features: ["4K UHD", "AI Tools", "Multi-touch", "Wireless Casting"],
//   },
//   {
//     title: "Smart Board Software",
//     image: "/Images/Screenshot 2025-06-29 at 9.22.40 PM 2.png",
//     description: "Collaborative whiteboarding, cloud sync, and seamless integration with your favorite apps.",
//     features: ["Cloud Sync", "Collaboration", "App Integration"],
//   },
//   {
//     title: "Remote Management Suite",
//     image: "/Images/Work chat-bro 1.png",
//     description: "Manage, monitor, and update all your devices from a single dashboard. Secure and scalable.",
//     features: ["Device Management", "Security", "Scalability"],
//   },
// ];

const companies = [
  { id: 2, name: "Company 2", img: "/Images/brands/image 3.png" },
  { id: 3, name: "Company 3", img: "/Images/brands/image 4.png" },
  { id: 4, name: "Company 4", img: "/Images/brands/image 5.png" },
  { id: 5, name: "Company 5", img: "/Images/brands/image 6.png" },
  { id: 6, name: "Company 6", img: "/Images/brands/image 7.png" },
  { id: 7, name: "Company 7", img: "/Images/brands/image 8.png" },
  { id: 8, name: "Company 8", img: "/Images/brands/image 9.png" },
  { id: 9, name: "Company 9", img: "/Images/brands/image 10.png" },
  { id: 10, name: "Company 10", img: "/Images/brands/image 11.png" },
  { id: 11, name: "Company 11", img: "/Images/brands/image 12.png" },
  { id: 12, name: "Company 12", img: "/Images/brands/image 13.png" },
  { id: 13, name: "Company 13", img: "/Images/brands/image 14.png" },
  { id: 14, name: "Company 14", img: "/Images/brands/image 15.png" },
  { id: 15, name: "Company 15", img: "/Images/brands/image 16.png" },
  { id: 16, name: "Company 16", img: "/Images/brands/image 17.png" },
  { id: 17, name: "Company 17", img: "/Images/brands/image 18.png" },
  { id: 18, name: "Company 18", img: "/Images/brands/image 19.png" },
  { id: 19, name: "Company 19", img: "/Images/brands/image 20.png" },
  { id: 20, name: "Company 20", img: "/Images/brands/image 21.png" },
  { id: 21, name: "Company 21", img: "/Images/brands/image 22.png" }
];


export default function PortfolioPage() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };
  return (
    <div className="w-full min-h-screen bg-[#fff]">
      {/* Hero Section */}
      <div className="bg-yellow-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-['Urbanist'] leading-tight sm:leading-normal mb-4">
              Optimize your office <span>operations.</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6">
              Digitalization has streamlined and simplified various manufacturing processes. With SADEL, manufacturers of any scale can build a central repository to improve information integrity at a reduced operational cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Fade direction="left" triggerOnce>
                <button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white font-semibold px-6 py-3 rounded-md transition-colors w-full sm:w-auto">Get Started</button>
              </Fade>
              <Fade direction="right" triggerOnce>
                <button className="bg-white border border-gray-300 text-black font-semibold px-6 py-3 rounded-md transition-colors w-full sm:w-auto">Learn More</button>
              </Fade>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end relative min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
            {/* Screen image inside Fade */}
            <Image
              src="/Images/screen.png"
              alt="Screen"
              width={480}
              height={320}
              className="rounded-2xl shadow-lg object-cover w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-auto z-0"
            />


            {/* Girl image overlayed */}
            <Image
              src="/Images/girl.png"
              alt="Girl"
              width={220}
              height={340}
              className="absolute right-0 bottom-0 w-[120px] sm:w-[160px] md:w-[220px] h-auto object-contain z-10"
            />

          </div>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          <Fade direction="left" triggerOnce>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-['Urbanist'] mb-4">
                Unique Software <span className="text-primary">Designed For Users</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto">
                SADEL, a platform that adheres to ISO 27001 and SOC-2 compliance, enables you to effectively create, organize, and manage your resources, while getting rid of any outdated or duplicated information from your system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-6">
              {/* Card 1 */}
              <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-start">
                <div className="bg-[#8a78bd] rounded-full p-3 mb-4 flex items-center justify-center">
                  <img src="/Images/diagram.png" alt="icon" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Reduce cost</h3>
                <p className="text-gray-500 text-sm sm:text-base">Manage all files, from quality manuals and SOPs to contracts and orders, cost-effectively with SADEL.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-start">
                <div className="bg-[#8a78bd] rounded-full p-3 mb-4 flex items-center justify-center">
                  <img src="/Images/peoples.png" alt="icon" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Reduce clutter</h3>
                <p className="text-gray-500 text-sm sm:text-base">Organize your documents in Team Folders with sub-folders. Search using file name, location, or type.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-start md:col-span-2 lg:col-span-1">
                <div className="bg-[#8a78bd] rounded-full p-3 mb-4 flex items-center justify-center">
                  <img src="/Images/sidebar.png" alt="icon" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Reduce the error</h3>
                <p className="text-gray-500 text-sm sm:text-base">Use an updated SOP in a Folder to avoid production line disasters. Changes reflect immediately, preventing data errors.</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Fade delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="bg-[#fffcec] rounded-3xl p-4 sm:p-6 text-center flex flex-col items-center">
              <div className="text-center justify-start text-[#0b0d0e] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[64px]">
                AFAQ IT Solutions
              </div>
              <div className="justify-start text-[#838696] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-normal mt-4">
                At AFAQ, we simplify modern tech complexity to drive real business impact—helping you accelerate outcomes and unlock value faster.
              </div>
              <div className="w-full sm:w-68 h-auto sm:h-68 item-center justify-center mt-6 sm:mt-8">
                <img
                  src="/Images/deupload-file-sharing 2.png"
                  alt="AFAQ It Solutions"
                  className="w-full h-auto max-w-sm sm:max-w-none"
                />
              </div>
            </div>
            <div className="bg-[#fffcec] rounded-3xl p-4 sm:p-6 text-center flex flex-col items-center">
              <div className="text-center justify-start text-[#0b0d0e] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[64px]">
                AFAQ Products
              </div>
              <div className="justify-start text-[#838696] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-normal mt-4">
                We provide a comprehensive range of educational solutions designed to empower learners, support educators, and enhance the overall learning experience
              </div>
              <div className="w-full sm:w-68 relative item-center justify-center mt-6 sm:mt-8">
                <img
                  src="/Images/Screenshot 2025-06-29 at 9.22.40 PM 2.png"
                  alt="AFAQ It Solutions"
                />
                <img
                  src="/Images/Untit design 1.png"
                  alt="AFAQ It Solutions"
                  className="absolute right-2 -bottom-10 h-full hidden sm:block"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="mb-16">
        <TeachingTechCarousel />
      </div>
      {/* Product Cards Section - Redesigned */}
      <div className="bg-secondary mt-[180px]">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 md:px-8 py-12 sm:py-16">
          <Fade cascade>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-['Urbanist'] mb-4">
                Our Top Featured <span className="text-primary">You Won&apos;t Find Anywhere</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto">
                SADEL provides a platform for employees from different departments to collaborate using real-time data. By collaborating at every stage, from concept to production, teams can produce products more efficiently.
              </p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="flex flex-col lg:flex-row items-center bg-yellow-50 rounded-2xl p-6 sm:p-8 md:p-12 gap-6 sm:gap-8 shadow-sm">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-black font-['Urbanist']">Streamline<br />information flow</h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">Use a Private Team Folder for confidential files, and the Public Team Folder for public documents like HR policies and safety manuals.</p>
                </div>
                <div className="flex-1 flex justify-center">
                  <Image src="/Images/Screenshot.png" alt="Streamline information flow" width={340} height={200} className="rounded-xl object-contain w-full max-w-[280px] sm:max-w-[340px]" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col lg:flex-row items-center bg-[#FFCBA8] rounded-2xl p-6 sm:p-8 md:p-12 gap-6 sm:gap-8 shadow-sm">
                {/* 🖼️ Image on the left */}
                <div className="flex-1 flex justify-center relative min-h-[180px] sm:min-h-[200px] md:min-h-[220px] order-2 lg:order-1">
                  {/* Display image as background */}
                  <Image
                    src="/Images/Screenshot2.png"
                    alt="Offer specific access levels"
                    width={340}
                    height={200}
                    className="rounded-xl object-contain w-full max-w-[280px] sm:max-w-[340px] h-auto z-0"
                  />
                </div>

                {/* 📝 Text on the right */}
                <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-black font-['Urbanist']">
                    Offer specific<br />access levels
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                    Give your production team the resources they need. With SADEL, grant them access to design files without giving them access to the main folder.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col lg:flex-row items-center bg-[#FFF5B9] rounded-2xl p-6 sm:p-8 md:p-12 gap-6 sm:gap-8 shadow-sm">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-black font-['Urbanist']">Engage with third-party stakeholders</h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">Collaborate with vendors, suppliers, and partners while retaining control over files. Share password-protected documents to ensure restricted access to important resources.</p>
                </div>
                <div className="flex-1 flex justify-center">
                  <Image src="/Images/Screenshot3.png" alt="Engage with third-party stakeholders" width={340} height={200} className="rounded-xl object-contain w-full max-w-[280px] sm:max-w-[340px]" />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Fade direction="right" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Digital Kiosks */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">Digital Kiosks</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">Our AFAQ&#39;s Digital Kiosks offer seamless self-service experiences, enabling quick access to information, services, and interactive content.</p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/kiosk.png" alt="Digital Kiosks" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
            {/* Surveillance Cameras */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0 sm:pr-6">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">
                    Surveillance Cameras
                  </h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">
                    Our Surveillance Cameras deliver smart, real-time monitoring solutions to secure your spaces and safeguard what matters most.
                  </p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">
                  Checkout Product
                </button>
              </div>

              {/* Right: Camera Images */}
              <div className="flex-1 flex flex-col items-center sm:items-end gap-4">
                <img
                  src="/Images/camera1.png"
                  alt="Surveillance Camera 1"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                />
                <img
                  src="/Images/camera2.png"
                  alt="Surveillance Camera 2"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                />
              </div>
            </div>

            {/* Sound System P.A System */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">Sound System P.A System</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">Our P.A Systems deliver clear, powerful audio for effective communication across classrooms, campuses, and public spaces.</p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/speaker.png" alt="Sound System P.A System" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
            {/* LED Display */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">LED Display</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">AFAQ&#39;s LED Displays offer vibrant, high-resolution visuals for impactful communication in any environment.</p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/tv.png" alt="LED Display" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Supervise and Control Team Files Section */}
      {/* <div className="w-full bg-[#fafbfc] py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 px-4 sm:px-6 md:px-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl p-4 sm:p-6 flex gap-4 items-start md:col-span-2">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-['Urbanist'] mb-4">
                  Supervise and control<br />team files
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  With a single dashboard, administrators can access a comprehensive overview of all files and storage information. This includes tracking actions performed and documents deleted, allowing you to maintain a record of all activity within your organization.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 flex gap-4 items-start shadow-sm">
              <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F9D400] flex items-center justify-center text-lg sm:text-2xl mt-1">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                  <circle cx="24" cy="24" r="24" fill="#F9D400" />
                  <path d="M24 10V24L34.64 29.32C33.08 33.24 29.3 36 24.98 36C18.92 36 14 31.08 14 25C14 18.92 18.92 14 24 14V10ZM26 12.04C30.78 12.48 34.52 16.22 34.96 21H26V12.04Z" fill="white" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-black mb-1">Manage activity report</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Create comprehensive reports that provide details on the activities of each member in your team, including the number of file uploads, edits, downloads, and previews. These reports can be viewed at both the team and Team Folder level.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 flex gap-4 items-start shadow-sm">
              <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F9D400] flex items-center justify-center text-lg sm:text-2xl mt-1">
                <svg width="24" height="24" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                  <circle cx="60" cy="60" r="60" fill="#F9D400" />
                  <path d="M85 35L45 55C43.5 55.7 43.6 57.7 45 58.3L59 64L65 78.5C65.7 80 67.7 80 68.3 78.5L89 39C89.8 37.3 87.7 35.2 85 35Z" fill="white" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-black mb-1">Restrict external sharing</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-['Urbanist']">
                  An organization can incur significant costs when designs are leaked before launch. SADEL offers the ability to control file sharing outside of the team, giving you the option to decide whether employees can share files externally.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 flex gap-4 items-start shadow-sm md:col-span-2">
              <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F9D400] flex items-center justify-center text-lg sm:text-2xl mt-1">
                <svg width="24" height="24" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                  <circle cx="60" cy="60" r="60" fill="#F9D400" />
                  <path d="M85 35L45 55C43.5 55.7 43.6 57.7 45 58.3L59 64L65 78.5C65.7 80 67.7 80 68.3 78.5L89 39C89.8 37.3 87.7 35.2 85 35Z" fill="white" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-black mb-1">Restrict external sharing</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-['Urbanist']">
                  An organization can incur significant costs when designs are leaked before launch. SADEL offers the ability to control file sharing outside of the team, giving you the option to decide whether employees can share files externally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Company Trust Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <Fade cascade>
          <div className="text-center sm:text-left text-[#0e0f10] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px] mb-6 sm:mb-8">
            Top company trust us
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {companies.map((c, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm transition-shadow duration-300 p-4 sm:p-6 md:p-8 flex items-center justify-center hover:shadow-md"
              >
                <div className="h-6 sm:h-8 md:h-9 w-auto">
                  <img src={c.img} alt={c.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      <div className="text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Testimonial
        </h2>
      </div>
      <TestimonialSection />
      {/* Call to Action Section */}
      <div className="bg-yellow-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <Fade direction="left" triggerOnce>
              <p className="text-primary text-xs sm:text-sm">Sign up for updates</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 font-['Urbanist']">Cut down on expenses while improving productivity.</h2>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-200 text-sm sm:text-base"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2">You can unsubscribe anytime. Read our <span className="text-primary">privacy policy</span></p>
            </Fade>
          </div>
          <div className="flex-1 flex justify-center">
            <Fade direction="right" triggerOnce>
              <Image
                src="/Images/Mail-bro.png"
                alt="Call to Action"
                width={320}
                height={280}
                className="w-full max-w-[280px] sm:max-w-[320px] h-auto"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
} 