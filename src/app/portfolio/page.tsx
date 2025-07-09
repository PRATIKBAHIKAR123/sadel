"use client";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import React from "react";
import { Star } from 'lucide-react';
import "../globals.css";

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

const testimonials = [
  {
    name: "Rodrigo Duarte",
    role: "Graphic Designer",
    content: "Our company uses Sodel, and I also use Box personally to store my documents, photos, videos, sensitive data etc. Sodel is amazing - so much more than just cloud storage. You can watch videos, share photos, scan documents, electronic sign and send documents, secure sensitive data and so much more.",
    avatar: "/Images/Ellipse 84.png",
    rating: 5
  },
  {
    name: "Ivone Josan",
    role: "Marketing Assistant",
    content: "I love using Sodel for work and personally because it is very intuitive to use and easy to share files with anyone. Our company moved from dropbox over to box, due to security purposes which would be my concern but other than that it syncs very quickly and allows collaboration and file sharing alot easier for your team/company.",
    avatar: "/Images/Ellipse 85.png",
    rating: 5
  }
];

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-[#fff]">
      {/* Hero Section */}
      <div className="bg-yellow-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Slide direction="left" triggerOnce>
              <h1 className="text-4xl md:text-5xl font-bold text-black font-['Urbanist'] leading-tight mb-4">
                Optimize your office <span>operations.</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-xl mb-6">
                Digitalization has streamlined and simplified various manufacturing processes. With SADEL, manufacturers of any scale can build a central repository to improve information integrity at a reduced operational cost.              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-colors">Get Started</button>
                <button className="bg-white border border-gray-300 text-black font-semibold px-6 py-3 rounded-md transition-colors">Learn More</button>
              </div>
            </Slide>
          </div>
          <div className="flex-1 flex justify-end relative min-h-[340px] md:min-h-[400px]">
            {/* Screen image inside Fade */}
            <Fade direction="right" triggerOnce>
              <Image
                src="/Images/screen.png"
                alt="Screen"
                width={480}
                height={320}
                className="rounded-2xl shadow-lg object-cover w-full max-w-[480px] h-auto z-0"
              />
            </Fade>

            {/* Girl image overlayed */}
            <Image
              src="/Images/girl.png"
              alt="Girl"
              width={220}
              height={340}
              className="absolute right-0 bottom-0 w-[160px] md:w-[220px] h-auto object-contain z-10"
            />
          </div>



        </div>
      </div>

      {/* Product Features Section */}
      <div className="max-w-7xl bg-secondary mx-auto px-4 md:px-0 py-16">
        <Fade direction="left" triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-['Urbanist'] mb-4">
              Unique Software <span className="text-yellow-400">Designed For Users</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              SADEL, a platform that adheres to ISO 27001 and SOC-2 compliance, enables you to effectively create, organize, and manage your resources, while getting rid of any outdated or duplicated information from your system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm flex flex-col items-start">
              <div className="bg-[#F9D400] rounded-full p-3 mb-4 flex items-center justify-center">
                <img src="/Images/diagram.png" alt="icon" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Reduce cost</h3>
              <p className="text-gray-500">Manage all files, from quality manuals and SOPs to contracts and orders, cost-effectively with SADEL.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm flex flex-col items-start">
              <div className="bg-[#F9D400] rounded-full p-3 mb-4 flex items-center justify-center">
                <img src="/Images/peoples.png" alt="icon" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Reduce clutter</h3>
              <p className="text-gray-500">Organize your documents in Team Folders with sub-folders. Search using file name, location, or type.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm flex flex-col items-start">
              <div className="bg-[#F9D400] rounded-full p-3 mb-4 flex items-center justify-center">
                <img src="/Images/sidebar.png" alt="icon" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Reduce the error</h3>
              <p className="text-gray-500">Use an updated SOP in a Folder to avoid production line disasters. Changes reflect immediately, preventing data errors.</p>
            </div>
          </div>

        </Fade>
      </div>

      {/* Product Cards Section - Redesigned */}
      <div className="max-w-7xl bg-secondary mx-auto px-4 md:px-0 py-16">
        <Fade cascade>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-['Urbanist'] mb-4">
              Our Top Featured <span className="text-yellow-400">You Won&apos;t Find Anywhere</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              SADEL provides a platform for employees from different departments to collaborate using real-time data. By collaborating at every stage, from concept to production, teams can produce products more efficiently.
            </p>
          </div>
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center bg-yellow-50 rounded-2xl p-8 md:p-12 gap-8 shadow-sm">
              <div className="flex-1 text-left">
                <h3 className="text-4xl font-bold mb-2 text-black font-['Urbanist']">Streamline<br />information flow</h3>
                <p className="text-gray-600 max-w-md">Use a Private Team Folder for confidential files, and the Public Team Folder for public documents like HR policies and safety manuals.</p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/Images/Screenshot.png" alt="Streamline information flow" width={340} height={200} className="rounded-xl object-contain" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center bg-[#FFCBA8] rounded-2xl p-8 md:p-12 gap-8 shadow-sm">
              {/* 🖼️ Image on the left */}
              <div className="flex-1 flex justify-center relative min-h-[200px] md:min-h-[220px]">
                {/* Display image as background */}
                <Image
                  src="/Images/Screenshot2.png"
                  alt="Offer specific access levels"
                  width={340}
                  height={200}
                  className="rounded-xl object-contain w-full max-w-[340px] h-auto z-0"
                />
                {/* Professional girl image overlayed */}
                <Image
                  src="/Images/professional.png"
                  alt="Professional Girl"
                  width={120}
                  height={200}
                  className="absolute left-0 bottom-0 w-[90px] md:w-[120px] h-auto object-contain z-10 p-0"
                />
              </div>

              {/* 📝 Text on the right */}
              <div className="flex-1 text-left">
                <h3 className="text-4xl font-bold mb-2 text-black font-['Urbanist']">
                  Offer specific<br />access levels
                </h3>
                <p className="text-gray-600 max-w-md">
                  Give your production team the resources they need. With SADEL, grant them access to design files without giving them access to the main folder.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center bg-[#FFF5B9] rounded-2xl p-8 md:p-12 gap-8 shadow-sm">
              <div className="flex-1 text-left">
                <h3 className="text-4xl font-bold mb-2 text-black font-['Urbanist']">Engage with third-party stakeholders</h3>
                <p className="text-gray-600 max-w-md">Collaborate with vendors, suppliers, and partners while retaining control over files. Share password-protected documents to ensure restricted access to important resources.</p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/Images/Screenshot3.png" alt="Engage with third-party stakeholders" width={340} height={200} className="rounded-xl object-contain" />
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Supervise and Control Team Files Section */}
      <div className="w-full bg-[#fafbfc] py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 px-4 md:px-0">


          {/* Right: Feature cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - No shadow */}
            <div className=" rounded-2xl p-6 flex gap-4 items-start">
              {/* <span className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-2xl mt-1"></span> */}
              <div>
                <h2 className="text-4xl font-bold text-black font-['Urbanist'] mb-4">
                  Supervise and control<br />team files
                </h2>                <p className="text-gray-600 text-sm">
                  With a single dashboard, administrators can access a comprehensive overview of all files and storage information. This includes tracking actions performed and documents deleted, allowing you to maintain a record of all activity within your organization.                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F9D400] flex items-center justify-center text-2xl mt-1"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#F9D400" />
                <path d="M24 10V24L34.64 29.32C33.08 33.24 29.3 36 24.98 36C18.92 36 14 31.08 14 25C14 18.92 18.92 14 24 14V10ZM26 12.04C30.78 12.48 34.52 16.22 34.96 21H26V12.04Z" fill="white" />
              </svg>
              </span>
              <div>
                <h3 className="font-bold text-lg text-black mb-1">Manage activity report</h3>
                <p className="text-gray-600 text-sm">
                  Create comprehensive reports that provide details on the activities of each member in your team, including the number of file uploads, edits, downloads, and previews. These reports can be viewed at both the team and Team Folder level.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F9D400] flex items-center justify-center text-2xl mt-1"><svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="#F9D400" />

                <path d="M85 35L45 55C43.5 55.7 43.6 57.7 45 58.3L59 64L65 78.5C65.7 80 67.7 80 68.3 78.5L89 39C89.8 37.3 87.7 35.2 85 35Z" fill="white" />
              </svg>
              </span>
              <div>
                <h3 className="font-bold text-lg text-black mb-1">Restrict external sharing</h3>
                <p className="text-gray-600 text-sm font-['Urbanist']">
                  An organization can incur significant costs when designs are leaked before launch. SADEL offers the ability to control file sharing outside of the team, giving you the option to decide whether employees can share files externally.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F9D400] flex items-center justify-center text-2xl mt-1"><svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="#F9D400" />

                <path d="M85 35L45 55C43.5 55.7 43.6 57.7 45 58.3L59 64L65 78.5C65.7 80 67.7 80 68.3 78.5L89 39C89.8 37.3 87.7 35.2 85 35Z" fill="white" />
              </svg>
              </span>
              <div>
                <h3 className="font-bold text-lg text-black mb-1">Restrict external sharing</h3>
                <p className="text-gray-600 text-sm font-['Urbanist']">
                  An organization can incur significant costs when designs are leaked before launch. SADEL offers the ability to control file sharing outside of the team, giving you the option to decide whether employees can share files externally.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            
          </div>
        </div>
      </div>



      {/* Company Trust Section */}
      <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Fade cascade>
          <div className="justify-start text-[#0e0f10] text-5xl font-bold font-['Urbanist'] leading-[72px]">
            Top company trust us
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-8">
            {companies.map((c, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-l shadow-sm  transition-shadow duration-300 p-8 flex items-center justify-center"
              >
                <div className="h-9 w-auto">
                  <img src={c.img} alt={c.name} className="w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>


      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade cascade>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Testimonial
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Slide direction="up" key={index}>
                  <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {testimonial.content}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </div>
          </Fade>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-yellow-50 py-8">
        <div className="max-w-7xl mx-auto p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Fade direction="left" triggerOnce>
              <p className="text-yellow-400 text-sm">Sign up for updates</p>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-['Urbanist']">Cut down on expenses while improving productivity.</h2>
              <form className="flex gap-4 mt-4">
                <input type="email" placeholder="Enter your email" className="px-4 py-3 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent w-full max-w-xs" />
                <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-r-md transition-colors">Notify Me</button>
              </form>
              <p className="text-gray-400 text-xs mt-2">You can unsubscribe anytime.Read our  <span className="text-yellow-400">privacy policy</span></p>
            </Fade>
          </div>
          <div className="flex-1 flex justify-center">
            <Fade direction="right" triggerOnce>
              <Image src="/Images/Mail-bro.png" alt="Call to Action" width={320} height={280} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
} 