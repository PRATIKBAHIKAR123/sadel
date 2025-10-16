import { Button } from "@/components/ui/button";
import React from "react";
import AIPlatformSection from "./aiplatforms";
import TeamProfilesSection from "./teamProfile";
import TestimonialSection from "./testimonial";
import { Fade } from "react-awesome-reveal";
import TeachingTechCarousel from "../landing/teachingtech";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col gap-16">
      <div className="p-8">
        <Fade direction="down" triggerOnce>
          <div className="bg-[#fffcec] rounded-[40px] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="justify-start">
                <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                  Get{" "}
                </span>
                <span className="text-primary text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                  To Know
                </span>
                <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                  {" "}
                  More About Us & About Our Team
                </span>
                <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9">
                  We provide a wide range of IT solutions based on
                  internationally recognized vendors. We also have a highly
                  skilled workforce that can deliver top-notch services and
                  solutions.
                </div>
              </div>
              <div className="h-auto">
                <img
                  src="/Images/Frame (4).png"
                  alt="About Us"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="p-16">
        <Fade direction="right" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-16 gap-4">
            <div className="justify-start">
              <span className="text-primary text-5xl font-bold font-['Urbanist'] leading-[64px]">
                AFAQ Simplifies{" "}
              </span>
              <span className="text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">
                Technology to Empower Teams
              </span>
              <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9 mt-2">
                AFAQ takes the complexity out of technology with smart,
                intuitive solutions. Our tools are designed to boost
                collaboration, streamline workflows, and save time.
              </div>
              <div className="flex justify-start gap-4 mt-4">
                <Button className="text-white">Getting Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="h-84 flex justify-center">
              <img
                src="/Images/Frame (6).png"
                alt="About Us"
                className="w-auto h-full"
              />
            </div>
          </div>
        </Fade>
      </div>
      <Fade direction="left" triggerOnce>
        <AIPlatformSection />
        <TeachingTechCarousel />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Fade direction="up" triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Digital Kiosks */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
                <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                  <div>
                    <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">
                      Digital Kiosks
                    </h2>
                    <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">
                      Our AFAQ&#39;s Digital Kiosks offer seamless self-service
                      experiences, enabling quick access to information,
                      services, and interactive content.
                    </p>
                  </div>
                  <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">
                    Checkout Product
                  </button>
                </div>
                <div className="flex-1 flex justify-center sm:justify-end items-center">
                  <img
                    src="/Images/kiosk.png"
                    alt="Digital Kiosks"
                    className="h-32 sm:h-40 md:h-50 w-auto object-contain"
                  />
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
                      Our Surveillance Cameras deliver smart, real-time
                      monitoring solutions to secure your spaces and safeguard
                      what matters most.
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
                    <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">
                      Sound System P.A System
                    </h2>
                    <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">
                      Our P.A Systems deliver clear, powerful audio for
                      effective communication across classrooms, campuses, and
                      public spaces.
                    </p>
                  </div>
                  <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">
                    Checkout Product
                  </button>
                </div>
                <div className="flex-1 flex justify-center sm:justify-end items-center">
                  <img
                    src="/Images/speaker.png"
                    alt="Sound System P.A System"
                    className="h-32 sm:h-40 md:h-50 w-auto object-contain"
                  />
                </div>
              </div>
              {/* LED Display */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
                <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                  <div>
                    <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">
                      LED Display
                    </h2>
                    <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">
                      AFAQ&#39;s LED Displays offer vibrant, high-resolution
                      visuals for impactful communication in any environment.
                    </p>
                  </div>
                  <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">
                    Checkout Product
                  </button>
                </div>
                <div className="flex-1 flex justify-center sm:justify-end items-center">
                  <img
                    src="/Images/tv.png"
                    alt="LED Display"
                    className="h-32 sm:h-40 md:h-50 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="p-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-16 gap-4">
            <div className="h-84 flex justify-center">
              <img
                src="/Images/Frame (7).png"
                alt="About Us"
                className="w-auto h-full"
              />
            </div>
            <div className="justify-start">
              <span className="text-primary text-5xl font-bold font-['Urbanist'] leading-[64px]">
                AFAQ Simplifies{" "}
              </span>
              <span className="text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">
                Technology to Empower Teams
              </span>
              <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9 mt-2">
                AFAQ takes the complexity out of technology with smart,
                intuitive solutions. Our tools are designed to boost
                collaboration, streamline workflows, and save time.
              </div>
              <div className="flex justify-start gap-4 mt-4">
                <Button className="text-white">Getting Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/* <Fade direction="right" triggerOnce> */}
      {/* <section className="bg-[#FBE35A] py-10 px-6">
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <h2 className="justify-center text-black text-4xl font-bold font-['Urbanist'] leading-[46px]">
                Upgrade Your Stay: Embrace the New Era of Travel
              </h2>

              <p className="text-black text-base font-normal font-['Figtree'] leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor dolore magna aliqua.
              </p>

              <button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>

            <div className="relative flex justify-center items-center">

              <img src="/Images/div.elementor-element.png" alt="Illustration" className="w-full h-auto max-w-md" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="text-primary text-5xl font-bold font-['Urbanist'] leading-[64px]">
            Get
          </span>
          <span className="text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[64px]">
            {" "}
            To Know Us{" "}
          </span>
        </div>
        <div className="text-center justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
          AFAQ is a 100% remote team. We believe that creative collaboration can
          happen anywhere and want our team to work where they feel most
          comfortable and inspired.
        </div>
        <TeamProfilesSection />
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="text-center text-primary text-xl font-bold font-['Manrope'] leading-snug">
          Why Choose Us ?
        </div>
        <div className="flex gap-3 text-center justify-center text-primary text-5xl font-bold font-['Urbanist'] leading-[64px]">
          Mision
          <div className="text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">
            Vision
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#fffcec] rounded-[40px] flex-col flex gap-4 p-8 shadow-lg hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16">
              <img
                src="/Images/Container.png"
                alt="Mission"
                className="w-full h-full rounded-t-[40px]"
              />
            </div>
            <div className="text-black text-[26px] font-extrabold font-['Urbanist'] leading-7">
              MISSION
            </div>
            <div className="justify-center text-black text-base font-medium font-['Urbanist'] leading-relaxed">
              Deliver exceptional IT solutions and services that exceed our
              clients’ expectations, drive their growth and success
              <br />{" "}
            </div>
          </div>
          <div className="bg-[#fffcec] rounded-[40px] flex-col flex gap-4 p-8 shadow-lg hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16">
              <img
                src="/Images/Container-1.png"
                alt="Mission"
                className="w-full h-full rounded-t-[40px]"
              />
            </div>
            <div className="text-black text-[26px] font-extrabold font-['Urbanist'] leading-7">
              VISION
            </div>
            <div className="justify-center text-black text-base font-medium font-['Urbanist'] leading-relaxed">
              To be a leading and innovative IT company leveraging technology to
              enable businesses achieve their goals
              <br />{" "}
            </div>
          </div>
          <div className="bg-[#fffcec] rounded-[40px] flex-col flex gap-4 p-8 shadow-lg hover:shadow-lg transition-shadow duration-300">
            <div className="h-16 w-16">
              <img
                src="/Images/Container-2.png"
                alt="Mission"
                className="w-full h-full rounded-t-[40px]"
              />
            </div>
            <div className="text-black text-[26px] font-extrabold font-['Urbanist'] leading-7">
              STRENGTH
            </div>
            <div className="justify-center text-black text-base font-medium font-['Urbanist'] leading-relaxed">
              Our strength lies in our team of highly skilled and dedicated IT
              professionals who are committed to delivering quality solutions
              and providing exceptional customer service
              <br />{" "}
            </div>
          </div>
        </div>
      </section>
      {/* Integrated Maintenance Service Section */}
      <section className="bg-[#fffcec] rounded-[40px] p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/Images/sadel-team.png"
            alt="AFAQ Service Team"
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-primary text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight">
            INTEGRATED MAINTENANCE SERVICE :
          </h2>
          <p className="text-black text-base md:text-lg font-normal font-['Urbanist'] leading-relaxed mt-2">
            With integrated maintenance services from AFAQ your systems will be
            in safe hands under the supervision of experts. We assure you that
            all maintenance operations are carried out using original spare
            parts and through a specialized team trained in the latest
            technologies.
          </p>
        </div>
      </section>
      {/* WHY CHOOSE AFAQ Section */}
      <section className="max-w-7xl mx-auto my-16 flex flex-col md:flex-row items-center gap-10 bg-[#fffcec] rounded-[40px] p-8 shadow-lg">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#f9d300] text-black font-bold px-3 py-1 rounded text-base font-['Urbanist']">
              AFAQ
            </span>
          </div>
          <h2 className="text-primary text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight mt-2">
            WHY CHOOSE AFAQ?
          </h2>
          <p className="text-black text-base md:text-lg font-normal font-['Urbanist'] leading-relaxed mt-2">
            AFAQ is not just a technology company, but a trusted partner that
            seeks to provide innovative solutions that enhance performance and
            drive success forward. We provide you with modern and integrated
            technologies specifically designed to meet your specific needs.
            Whether you are in the private or educational sector, we are here to
            help you succeed.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/Images/banner-solutions.png"
            alt="Why Choose AFAQ"
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </div>
      </section>
      <TestimonialSection />

      {/* Partnership Section */}
      <section className="max-w-7xl mx-auto my-16">
        <div className="bg-[#fffcec] rounded-[40px] p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-primary text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight mb-4">
              Strategic Partnership
            </h2>
            <p className="text-black text-lg md:text-xl font-normal font-['Urbanist'] leading-relaxed max-w-4xl mx-auto">
              AFAQ is proud to announce our strategic partnership with
              Professional Labs, combining our expertise in IT solutions with
              their innovative approach to deliver enhanced services and
              cutting-edge technology solutions to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-black text-2xl font-bold font-['Urbanist']">
                Partnership Benefits
              </h3>
              <ul className="space-y-3 text-black text-base font-normal font-['Urbanist']">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enhanced technical capabilities and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Access to cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expanded service portfolio for our clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborative approach to problem-solving</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-center">
                  <div className="text-primary text-xl font-bold font-['Urbanist'] mb-2">
                    AFAQ
                  </div>
                  <div className="text-gray-600 text-sm mb-4">
                    Partners with
                  </div>
                  <div className="text-black text-xl font-bold font-['Urbanist']">
                    Professional Labs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className=" text-center justify-start text-black text-4xl font-bold font-['Urbanist'] leading-[54px]">
            Our Success Partners
          </h2>
          <img
            src="/Images/Screenshot 2025-06-29 at 9.14.56 PM 1.png"
            alt="Success Partner"
            className="w-full h-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
}
