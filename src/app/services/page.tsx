import { Button } from "@/components/ui/button";
import { Fade, Slide } from "react-awesome-reveal";
import OurKey from "./ourkeydiff";
import Image from "next/image";

// import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
      <div className="bg-[#fffcec] p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-4">
          <div className="justify-start">
            <div className="text-center lg:text-left">
              <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">Know More</span>
              <span className="text-[#0e0f10] text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]"> About Both Our Services</span>
            </div>
            <div className="justify-start text-[#5c5f6e] text-base sm:text-lg md:text-xl font-normal font-['Urbanist'] leading-relaxed mt-4 sm:mt-6 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor, porta in dignissim a, elementum eget odio. Suspendisse potenti.
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Link href="/ITSolutions">
                <Button className="w-full sm:w-auto">IT Solutions</Button>
              </Link>
              <Link href="/edtechSolutions">
                <Button variant="outline" className="w-full sm:w-auto">Ed Tech Solution</Button>
              </Link>
            </div>
          </div>
          <div className="h-auto w-full flex justify-center lg:justify-end">
            <img src="/Images/Group (1).png" alt="About Us" className="w-full max-w-md lg:max-w-none h-auto" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            See what you can do with<span className="text-primary"> Our Tech Services</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor, porta in dignissim.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="h-full flex">
            <Slide className="w-full">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="bg-black rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden mb-4 sm:mb-6">
                    <img
                      src="/Images/diagram-project 1.png"
                      alt="Distributed Storage Icon"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div className="text-[#0b0d0e] text-xl sm:text-2xl font-semibold font-['Urbanist'] leading-tight sm:leading-9 mb-3 sm:mb-4">
                    Manage SOC Services
                  </div>
                  <div className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed">
                    Ensure your business stays protected with robust, flexible, and scalable security operations that grow with your needs.
                  </div>
                </div>
              </div>
            </Slide>
          </div>

          {/* Card 2 */}
          <div className="h-full flex">
            <Slide className="w-full">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="bg-black rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden mb-4 sm:mb-6">
                    <img
                      src="/Images/people.png"
                      alt="Cloud Manage Security Icon"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div className="text-[#0b0d0e] text-xl sm:text-2xl font-semibold font-['Urbanist'] leading-tight sm:leading-9 mb-3 sm:mb-4">
                    Cloud Manage Security
                  </div>
                  <div className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed">
                    Simplify management, boost performance, and reduce costs by leveraging tailored managed services—designed to optimize, secure
                  </div>
                </div>
              </div>
            </Slide>
          </div>

          {/* Card 3 */}
          <div className="h-full flex md:col-span-2 lg:col-span-1">
            <Slide className="w-full">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="bg-black rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden mb-4 sm:mb-6">
                    <img
                      src="/Images/sidebar 1.png"
                      alt="Microsoft Cloud App Security Icon"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div className="text-[#0b0d0e] text-xl sm:text-2xl font-semibold font-['Urbanist'] leading-tight sm:leading-9 mb-3 sm:mb-4">
                    Microsoft Cloud App Security
                  </div>
                  <div className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed">
                    Gain deep visibility, control, and threat protection across your cloud apps—detect risky user behavior, prevent data leaks
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-8 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-6 sm:gap-8 md:gap-4">
          <div className="h-auto flex justify-center order-2 lg:order-1">
            <img src="/Images/Screenshot 2025-07-04 170802.png" alt="About Us" className="w-full max-w-md lg:max-w-none h-auto" />
          </div>
          <div className="justify-start order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[64px]">Get to Know Sadels </span>
              <span className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[64px]">IT Business Solutions</span>
            </div>
            <div className="justify-start text-[#5c5f6e] text-base sm:text-lg md:text-xl font-normal font-['Urbanist'] leading-relaxed mt-2 sm:mt-4 text-center lg:text-left">
              The modern world relies on a complex array of technologies to keep moving—AFAQ aims to simplify that complexity. Our IT expertise helps organizations accelerate their time to value and achieve meaningful business impact.
              Founded in [Founding Year] and headquartered in [Location], we specialize in solving complex challenges with smart IT solutions, including Cloud Services, Cyber Security, Managed Services, and Infrastructure Support.
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Button className="w-full sm:w-auto">Quick Start</Button>
              <Button variant="outline" className="w-full sm:w-auto">Live Examples</Button>
            </div>
          </div>
        </div>
      </div>
      
      <OurKey />
      
      <section className="bg-[#FBE35A] py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto relative">
          <img src="/Images/Screenshot 2025-06-29 at 9.22.40 PM 4.png" alt="Illustration" className="w-full h-auto max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8" />
          <div className="text-center justify-start text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[64px] px-4">
            Educational Tech Board You Need
          </div>
          <div className="text-center justify-start text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed px-4 mt-4 sm:mt-6">
            Experience a smarter way to teach with AFAQ&apos;s interactive tech boards. Designed for seamless collaboration, engaging lessons, and real-time feedback.
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button variant={'outline'} className="bg-transparent w-full sm:w-auto">Contact Us</Button>
            <Button variant={'outline'} className="bg-transparent w-full sm:w-auto">Download Brochure</Button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Digital Kiosks */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center lg:text-left">Digital Kiosks</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center lg:text-left">Our AFAQ&apos;s Digital Kiosks offer seamless self-service experiences, enabling quick access to information, services, and interactive content.</p>
                </div>
                <button className="bg-[#8a78bd] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-fit mx-auto lg:mx-0 text-sm sm:text-base">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
                <img src="/Images/kiosk.png" alt="Digital Kiosks" className="h-32 sm:h-40 md:h-50 object-contain" />
              </div>
            </div>
            
            {/* Surveillance Cameras */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center lg:text-left">Surveillance Cameras</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center lg:text-left">Our Surveillance Cameras deliver smart, real-time monitoring solutions to secure your spaces and safeguard what matters most.</p>
                </div>
                <button className="bg-[#8a78bd] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-fit mx-auto lg:mx-0 text-sm sm:text-base">Checkout Product</button>
              </div>
              <div className="flex-1 flex flex-col items-center lg:items-end gap-2 mt-4 lg:mt-0">
                <img src="/Images/camera1.png" alt="Surveillance Camera 1" className="h-24 sm:h-32 md:h-40 object-contain" />
                <img src="/Images/camera2.png" alt="Surveillance Camera 2" className="h-24 sm:h-32 md:h-40 object-contain" />
              </div>
            </div>
            
            {/* Sound System P.A System */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center lg:text-left">Sound System P.A System</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center lg:text-left">Our P.A Systems deliver clear, powerful audio for effective communication across classrooms, campuses, and public spaces.</p>
                </div>
                <button className="bg-[#8a78bd] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-fit mx-auto lg:mx-0 text-sm sm:text-base">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
                <img src="/Images/speaker.png" alt="Sound System P.A System" className="h-32 sm:h-40 md:h-50 object-contain" />
              </div>
            </div>
            
            {/* LED Display */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center lg:text-left">LED Display</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center lg:text-left">AFAQ&apos;s LED Displays offer vibrant, high-resolution visuals for impactful communication in any environment.</p>
                </div>
                <button className="bg-[#8a78bd] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-fit mx-auto lg:mx-0 text-sm sm:text-base">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <img src="/Images/tv.png" alt="LED Display" className="h-50 object-contain" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 mt-4 sm:mt-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-4">
          <div className="flex items-start justify-center mb-4 sm:mb-6 lg:mb-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl md:text-[40px] font-black font-['Urbanist'] leading-none">
              1.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 max-w-2xl">
            <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-9 text-center lg:text-left">You can Hold Meetings Anywhere</div>
            <div className="text-[#5c5f6e] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-relaxed text-center lg:text-left">
              With AFAQ&apos;s smart meeting solutions, you can hold meetings anywhere—whether you&apos;re in the office, at home, or on the move. Our technology ensures seamless collaboration with clear audio, high-quality visuals, and easy connectivity across devices. Stay productive and connected, no matter where you are.
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <img src="/Images/Screenshot 2025-06-29 at 9.22.40 PM 4.png" className="h-64 w-full" />
            <img src="/Images/Untit design 1.png" alt="Create Account" className="w-auto h-64 absolute -bottom-12 right-5" />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-4 mt-16 sm:mt-20 md:mt-28">
          <div className="flex items-start justify-center mb-4 sm:mb-6 lg:mb-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl md:text-[40px] font-black font-['Urbanist'] leading-none">
              2.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 max-w-2xl">
            <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-9 text-center lg:text-left">Interactive Screens Transform Classrooms Into Innovative Learning Environments</div>
            <div className="text-[#5c5f6e] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-relaxed text-center lg:text-left">
              Interactive screens from AFAQ transform traditional classrooms into dynamic, innovative learning environments. By enabling real-time collaboration, engaging multimedia content, and hands-on participation, these screens empower teachers to deliver impactful lessons while keeping students actively involved. It&apos;s where technology meets education for a smarter tomorrow.
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <img src="/Images/Screenshot 2025-06-29 at 9.19.49 PM 3.png" className="h-64 w-full" />
            <img src="/Images/Untit design 3.png" alt="Create Account" className="w-auto h-64 absolute -bottom-12 left-5" />
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-[#8a78bd] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1">
            <Fade direction="left" triggerOnce>
              <p className="text-black text-xs sm:text-sm mt-2">Sign up for developer updates.</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 font-['Urbanist']">Try something fresh and new on next version.</h2>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <input type="email" placeholder="Enter your email" className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#8a78bd] focus:border-transparent w-full max-w-xs" />
                <button type="submit" className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-r-md transition-colors text-sm sm:text-base">Notify Me</button>
              </form>
              <p className="text-gray-400 text-xs mt-2">You can unsubscribe at any time. Read our <a href="#" className="text-[#8a78bd]">privacy policy</a>.</p>
            </Fade>
          </div>
          <div className="flex-1 flex justify-center">
            <Fade direction="right" triggerOnce>
              <Image src="/Images/Mail-bro.png" alt="Call to Action" width={280} height={240} className="w-64 sm:w-80 md:w-80 h-auto" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}