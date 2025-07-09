import { Button } from "@/components/ui/button";
import { Fade, Slide } from "react-awesome-reveal";
import OurKey from "./ourkeydiff";
import Image from "next/image";

// import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col gap-16">
      <div className="bg-[#fffcec] p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="justify-start">
            <span className="text-[#f9d300] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Know More</span><span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]"> About Both Our Services</span>
            <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor, porta in dignissim a, elementum eget odio. Suspendisse potenti.</div>
            <div className="flex justify-start gap-4 mt-4">

              <Link href="/ITSolutions">
                <Button>IT Solutions</Button>
              </Link>
              <Link href="/edtechSolutions">
                <Button variant="outline">Ed Tech Solution</Button>
              </Link>
            </div>
          </div>
          <div className="h-100 w-auto">
            <img src="Images/Group (1).png" alt="About Us" className="w-auto h-full" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            See what you can do with<span className="text-yellow-400"> Our Tech Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor, porta in dignissim.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="h-full flex">
            <Slide className="w-full">
              <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
                    <img
                      src="Images/diagram-project 1.png"
                      alt="Distributed Storage Icon"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-[#0b0d0e] text-2xl font-semibold font-['Urbanist'] leading-9 mb-4">
                    Manage SOC Services
                  </div>
                  <div className="text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">
                    Ensure your business stays protected with robust, flexible, and scalable security operations that grow with your needs.
                  </div>
                </div>
              </div>
            </Slide>
          </div>

          {/* Card 2 */}
          <div className="h-full flex">
            <Slide className="w-full">
              <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
                    <img
                      src="Images/people.png"
                      alt="Cloud Manage Security Icon"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-[#0b0d0e] text-2xl font-semibold font-['Urbanist'] leading-9 mb-4">
                    Cloud Manage Security
                  </div>
                  <div className="text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">
                    Simplify management, boost performance, and reduce costs by leveraging tailored managed services—designed to optimize, secure
                  </div>
                </div>
              </div>
            </Slide>
          </div>

          {/* Card 3 */}
          <div className="h-full flex">
            <Slide className="w-full">
              <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
                    <img
                      src="Images/sidebar 1.png"
                      alt="Microsoft Cloud App Security Icon"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-[#0b0d0e] text-2xl font-semibold font-['Urbanist'] leading-9 mb-4">
                    Microsoft Cloud App Security
                  </div>
                  <div className="text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">
                    Gain deep visibility, control, and threat protection across your cloud apps—detect risky user behavior, prevent data leaks
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>

      </div>
      <div className="p-16">

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-16 gap-4">
          <div className="h-120 flex justify-center">
            <img src="Images/Screenshot 2025-07-04 170802.png" alt="About Us" className="w-auto h-full" />
          </div>
          <div className="justify-start">
            <span className="text-[#f9d300] text-5xl font-bold font-['Urbanist'] leading-[64px]">Get to Know Sadels </span><span className="text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">IT Business Solutions</span>
            <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9 mt-2">
              The modern world relies on a complex array of technologies to keep moving—Sadel aims to simplify that complexity. Our IT expertise helps organizations accelerate their time to value and achieve meaningful business impact.
              Founded in [Founding Year] and headquartered in [Location], we specialize in solving complex challenges with smart IT solutions, including Cloud Services, Cyber Security, Managed Services, and Infrastructure Support.
            </div>
            <div className="flex justify-start gap-4 mt-4">
              <Button>Quick Start</Button>
              <Button variant="outline">Live Examples</Button>
            </div>
          </div>

        </div>

      </div>
      <OurKey />
      <section className="bg-[#FBE35A] py-10 px-6">
        <div className="max-w-7xl mx-auto relative">
          <img src="Images/Screenshot 2025-06-29 at 9.22.40 PM 4.png" alt="Illustration" className="w-full h-auto max-w-md mx-auto mb-8" />
          <div className="text-center justify-start text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">
            Educational Tech Board You Need
          </div>
          <div className="text-center justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">Experience a smarter way to teach with Sadel’s interactive tech boards. Designed for seamless collaboration, engaging lessons, and real-time feedback.</div>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant={'outline'} className="bg-transparent">Contact Us</Button>
            <Button variant={'outline'} className="bg-transparent">Download Brochure</Button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Digital Kiosks */}
            <div className="bg-white rounded-2xl p-8 flex flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-3xl font-bold font-['Urbanist'] mb-2 text-left">Digital Kiosks</h2>
                  <p className="text-[#838696] text-base font-normal font-['Urbanist'] mb-6 text-left">Our Sadel&#39;s Digital Kiosks offer seamless self-service experiences, enabling quick access to information, services, and interactive content.</p>
                </div>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-fit text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <img src="Images/kiosk.png" alt="Digital Kiosks" className="h-50 object-contain" />
              </div>
            </div>
            {/* Surveillance Cameras */}
            <div className="bg-white rounded-2xl p-8 flex flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-3xl font-bold font-['Urbanist'] mb-2 text-left">Surveillance Cameras</h2>
                  <p className="text-[#838696] text-base font-normal font-['Urbanist'] mb-6 text-left">Our Surveillance Cameras deliver smart, real-time monitoring solutions to secure your spaces and safeguard what matters most.</p>
                </div>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-fit text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex flex-col items-end gap-2">
                <img src="Images/camera1.png" alt="Surveillance Camera 1" className="h-40 object-contain" />
                <img src="Images/camera2.png" alt="Surveillance Camera 2" className="h-40 object-contain" />
              </div>
            </div>
            {/* Sound System P.A System */}
            <div className="bg-white rounded-2xl p-8 flex flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-3xl font-bold font-['Urbanist'] mb-2 text-left">Sound System P.A System</h2>
                  <p className="text-[#838696] text-base font-normal font-['Urbanist'] mb-6 text-left">Our P.A Systems deliver clear, powerful audio for effective communication across classrooms, campuses, and public spaces.</p>
                </div>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-fit text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <img src="Images/speaker.png" alt="Sound System P.A System" className="h-50 object-contain" />
              </div>
            </div>
            {/* LED Display */}
            <div className="bg-white rounded-2xl p-8 flex flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-[#0b0d0e] text-3xl font-bold font-['Urbanist'] mb-2 text-left">LED Display</h2>
                  <p className="text-[#838696] text-base font-normal font-['Urbanist'] mb-6 text-left">Sadel&#39;s LED Displays offer vibrant, high-resolution visuals for impactful communication in any environment.</p>
                </div>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-fit text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <img src="Images/tv.png" alt="LED Display" className="h-50 object-contain" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 py-10  mt-8">
        <div className="flex gap-4">
          <div className="flex items-start justify-center mb-6">
            <div className="w-20 h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-[40px] font-black font-['Urbanist'] leading-none">
              1.
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-9">You can Hold Meetings Anywhere</div>
            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
              With Sadel’s smart meeting solutions, you can hold meetings anywhere—whether you&apos;re in the office, at home, or on the move. Our technology ensures seamless collaboration with clear audio, high-quality visuals, and easy connectivity across devices. Stay productive and connected, no matter where you are.
            </div>
            
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <img src="Images/Screenshot 2025-06-29 at 9.22.40 PM 4.png" className="h-64 w-full" />
            <img src="Images/Untit design 1.png" alt="Create Account" className="w-auto h-64 absolute -bottom-12 right-5" />
          </div>
        </div>
        <div className="flex gap-4 mt-28">
          <div className="flex items-start justify-center mb-6">
            <div className="w-20 h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-[40px] font-black font-['Urbanist'] leading-none">
              2.
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-9">Interactive Screens Transform Classrooms Into Innovative Learning Environments</div>
            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
              Interactive screens from Sadel transform traditional classrooms into dynamic, innovative learning environments. By enabling real-time collaboration, engaging multimedia content, and hands-on participation, these screens empower teachers to deliver impactful lessons while keeping students actively involved. It&apos;s where technology meets education for a smarter tomorrow.
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <img src="Images/Screenshot 2025-06-29 at 9.19.49 PM 3.png" className="h-64 w-full" />
            <img src="Images/Untit design 3.png" alt="Create Account" className="w-auto h-64 absolute -bottom-12 left-5" />
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="bg-yellow-50 py-8">
        <div className="max-w-7xl mx-auto p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Fade direction="left" triggerOnce>
              <p className="text-black text-sm mt-2">Sign up for developer updates.</p>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-['Urbanist']">Try something fresh and new on next version.</h2>
              <form className="flex gap-4 mt-4">
                <input type="email" placeholder="Enter your email" className="px-4 py-3 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent w-full max-w-xs" />
                <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-r-md transition-colors">Notify Me</button>
              </form>
              <p className="text-gray-400 text-xs mt-2">You can unsubscribe at any time. Read our <a href="#" className="text-yellow-500">privacy policy</a>.</p>
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
    
    // </div >
  )
}