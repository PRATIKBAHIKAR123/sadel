import { Button } from "@/components/ui/button";
import React from "react";
import AIPlatformSection from "./aiplatforms";
import TeamProfilesSection from "./teamProfile";
import TestimonialSection from "./testimonial";

export default function AboutUsPage() {
    return (
        <div className="flex flex-col gap-16">
            <div className="p-8">
                <div className="bg-[#fffcec] rounded-[40px] p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="justify-start">
                            <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Get </span><span className="text-[#f9d300] text-[56px] font-bold font-['Urbanist'] leading-[72px]">To Know More</span><span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]"> More About Us & About Our Team</span>
                            <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9">Empower your team and spark productivity with a thoughtfully designed interactive screen. Whether it’s for brainstorming, collaboration, or presentations, this dynamic solution brings clarity, creativity, and efficiency to every task.</div>
                            </div>
                            <div className="h-auto">
                            <img src="/Images/Frame (4).png" alt="About Us" className="w-full h-full" />
                            </div>
                    </div>

                </div>
            </div>
            <div className="p-16">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-16 gap-4">
                        <div className="justify-start">
                            <span className="text-[#f9d300] text-5xl font-bold font-['Urbanist'] leading-[64px]">Sadel Simplifies </span><span className="text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">Technology to Empower Teams</span>
                            <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9 mt-2">Sadel takes the complexity out of technology with smart, intuitive solutions. Our tools are designed to boost collaboration, streamline workflows, and save time.</div>
                            <div className="flex justify-start gap-4 mt-4">
                                <Button>Getting Started</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                            </div>
                            <div className="h-84 flex justify-center">
                            <img src="/Images/Frame (6).png" alt="About Us" className="w-auto h-full" />
                            </div>
                    </div>

            </div>
            <AIPlatformSection/>
            <div className="p-16">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-16 gap-4">
                        
                            <div className="h-84 flex justify-center">
                            <img src="/Images/Frame (7).png" alt="About Us" className="w-auto h-full" />
                            </div>
                            <div className="justify-start">
                            <span className="text-[#f9d300] text-5xl font-bold font-['Urbanist'] leading-[64px]">Sadel Simplifies </span><span className="text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">Technology to Empower Teams</span>
                            <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9 mt-2">Sadel takes the complexity out of technology with smart, intuitive solutions. Our tools are designed to boost collaboration, streamline workflows, and save time.</div>
                            <div className="flex justify-start gap-4 mt-4">
                                <Button>Getting Started</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                            </div>
                    </div>

            </div>
              <section className="bg-[#FBE35A] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
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

          {/* Right Illustration */}
          <div className="relative flex justify-center items-center">
            
            <img src="/Images/div.elementor-element.png" alt="Illustration" className="w-full h-auto max-w-md" />
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-7xl mx-auto">
   <div className="text-center"><span className="text-[#f9d300] text-5xl font-bold font-['Urbanist'] leading-[64px]">Get</span><span className="text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[64px]"> To Know Us </span></div>
    <div className="text-center justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
        Sadel is a 100% remote team. We believe that creative collaboration can happen anywhere and want our team to work where they feel most comfortable and inspired.
    </div>
    <TeamProfilesSection/>
    </section>
        <section className="max-w-7xl mx-auto">
            <div className="text-center text-[#f9d300] text-xl font-bold font-['Manrope'] leading-snug">
                Why Choose Us ?
            </div>
            <div className="flex gap-3 text-center justify-center text-[#f9d300] text-5xl font-bold font-['Urbanist'] leading-[64px]">Mision
                <div className="text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">Vision</div>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                    <div className="bg-[#fffcec] rounded-[40px] flex-col flex gap-4 p-8 shadow-lg hover:shadow-lg transition-shadow duration-300">
                        <div className="h-16 w-16">
                        <img src="/Images/Container.png" alt="Mission" className="w-full h-full rounded-t-[40px]" />
                        </div>
                        <div className="text-black text-[26px] font-extrabold font-['Urbanist'] leading-7">CUSTOM-BUILT PROJECTS</div>
                        <div className="justify-center text-black text-base font-medium font-['Urbanist'] leading-relaxed">Providing scalable options to establish digital presence<br /> </div>
                    </div>
                    <div className="bg-[#fffcec] rounded-[40px] flex-col flex gap-4 p-8 shadow-lg hover:shadow-lg transition-shadow duration-300">
                        <div className="h-16 w-16">
                        <img src="/Images/Container-1.png" alt="Mission" className="w-full h-full rounded-t-[40px]" />
                        </div>
                        <div className="text-black text-[26px] font-extrabold font-['Urbanist'] leading-7">END-TO-END SOLUTIONS</div>
                        <div className="justify-center text-black text-base font-medium font-['Urbanist'] leading-relaxed">Undergoing brainstorming to execution to reduce workload<br /> </div>
                    </div>
                    <div className="bg-[#fffcec] rounded-[40px] flex-col flex gap-4 p-8 shadow-lg hover:shadow-lg transition-shadow duration-300">
                        <div className="h-16 w-16">
                        <img src="/Images/Container-2.png" alt="Mission" className="w-full h-full rounded-t-[40px]" />
                        </div>
                        <div className="text-black text-[26px] font-extrabold font-['Urbanist'] leading-7">VALUE FOR RUPEE</div>
                        <div className="justify-center text-black text-base font-medium font-['Urbanist'] leading-relaxed">Get credible, high-quality solutions at affordable prices<br /> </div>
                    </div>
                </div>
        </section>
        <TestimonialSection/>
        <div className="max-w-7xl mx-auto p-8">
<div className="text-center mb-12">
        <h2 className=" text-center justify-start text-black text-4xl font-bold font-['Urbanist'] leading-[54px]">
          Our Success Partner
        </h2>
        <img src="/Images/Screenshot 2025-06-29 at 9.14.56 PM 1.png" alt="Success Partner" className="w-full h-auto mt-4" />
      </div>
        </div>
        </div>
    );
}