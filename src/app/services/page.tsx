import { Button } from "@/components/ui/button";
import { Slide } from "react-awesome-reveal";
import OurKey from "./ourkeydiff";
import { ArrowRight } from "lucide-react";

export default function Services(){
    return (
        <div className="flex flex-col gap-16">
            <div className="bg-[#fffcec] p-8">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="justify-start">
                            <span className="text-[#f9d300] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Know More</span><span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]"> About Both Our Services</span>
                            <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9">Empower your team and spark productivity with a thoughtfully designed interactive screen. Whether it’s for brainstorming, collaboration, or presentations, this dynamic solution brings clarity, creativity, and efficiency to every task.</div>
                            <div className="flex justify-start gap-4 mt-4">
                                <Button>IT Solutions</Button>
                                <Button variant="outline">Ed Tech Solution</Button>
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
                          Sadel See what you can do with<span className="text-yellow-400"> Our Tech Services</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor, porta in dignissim.
                        </p>
                      </div>
            
                      {/* Feature Cards */}
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Distributed Storage Card */}
                        <Slide>
                        <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
                            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
                                <img
                                    src="Images/diagram-project 1.png"
                                    alt="Distributed Storage Icon"
                                    className="w-8 h-8"
                                />
                            </div>
                          <div className="justify-start text-[#0b0d0e] text-2xl font-semibold font-['Urbanist'] leading-9">Manage SOC Serivices</div>
                          <div className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget</div>
                          
                        </div>
                       </Slide>
                       <Slide>
                        {/* Completely Private Card */}
                        <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
                            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
                                <img
                                    src="Images/people-arrows-left-right 1.png"
                                    alt="Distributed Storage Icon"
                                    className="w-8 h-8"
                                />
                            </div>
                          <div className="justify-start text-[#0b0d0e] text-2xl font-semibold font-['Urbanist'] leading-9">Email Security</div>
                          <div className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget</div>
                          
                        </div>
                       </Slide>
                       <Slide>
                        {/* Data Persistence Card */}
                        <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
                            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
                                <img
                                    src="Images/sidebar 1.png"
                                    alt="Distributed Storage Icon"
                                    className="w-8 h-8"
                                />
                            </div>
                          <div className="justify-start text-[#0b0d0e] text-2xl font-semibold font-['Urbanist'] leading-9">Microsoft cloud App Security</div>
                          <div className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget</div>
                          
                        </div>
                        </Slide>
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
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem
                                                    . Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor, porta in dignissim a,
                                                     elementum eget odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. 
                                                </div>
                                                <div className="flex justify-start gap-4 mt-4">
                                                    <Button>Quick Start</Button>
                                                    <Button variant="outline">Live Examples</Button>
                                                </div>
                                                </div>
                                                
                                        </div>
                    
                                </div>
                      <OurKey/>
                      <section className="bg-[#FBE35A] py-10 px-6">
                        <div className="max-w-7xl mx-auto relative">
                            <img src="Images/Screenshot 2025-06-29 at 9.22.40 PM 4.png" alt="Illustration" className="w-full h-auto max-w-md mx-auto mb-8" />
                            <div className="text-center justify-start text-black text-5xl font-bold font-['Urbanist'] leading-[64px]">
                                Educational Tech Board You Need
                                </div> 
                                <div className="text-center justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor,</div>
                                <div className="flex justify-center gap-4 mt-8">
                                  <Button variant={'outline'} className="bg-transparent">Contact Us</Button>
                                    <Button variant={'outline'} className="bg-transparent">Download Brochure</Button>
                                </div>
                            </div>
                            </section>

                            <div className="w-full max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {/* Security & Safety */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                Anywhere Around Your Office
              </h2>
              <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">
                Leverage the power of our REST API to bring Sadel file into your external tools and products.
              </p>
            </div>

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-42 flex items-center justify-between">
              {/* Security Illustration */}
              <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                Read documents
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <img
                src="Images/Screenshot 2025-06-29 at 9.22.40 PM 2.png"
                alt="Security & Safety"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Development Kits */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                Easy To Use UI Screens
              </h2>
              <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor.
              </p>
            </div>

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-42 flex items-end justify-end">
              
              {/* Development Illustration */}
              <img
                src="Images/cta__person.svg (2).png"
                alt="Security & Safety"
                className=" h-full object-contain"
              />
            </div>
          </div>

          {/* Join Our Community */}
          <div className="bg-white flex justify-between p-8 shadow-sm rounded-2xl border border-gray-100 flex hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-8">
                <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                  High Speed Cloud
                </h2>
                <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal mb-6">
                  Keep track of changes and upgrades to the Sadel API.
                </p>
                <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                  Releases
                </button>
              </div>
            </div>

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <img
                src="Images/cta__hosting.svg (1).png"
                alt="Join Our Community"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Our Technology */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                HD 4k Camera For Meetings
              </h2>
              <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal mb-6">
                Learn from others, share your work, and extend your tool set with a diverse group of developers from around the world.
              </p>
              
            </div>

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-38 flex items-center justify-center">
              {/* Technology Illustration */}
              <div className="w-full flex justify-start">
<Button>
                Submit a question
              </Button>
              </div>
              <img
                src="Images/Screenshot 2025-06-29 at 9.19.49 PM 2.png"
                alt="Our Technology"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-10  mt-8">
            <div className="flex gap-4">
            <div className="flex items-start justify-center mb-6">
                <div className="w-20 h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-[40px] font-black font-['Urbanist'] leading-none">
                    1.
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-9">Create an account</div>
                <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
When you create a Deupoad Account, we ask for some personal info. By providing accurate info, you can help keep your account secure and make our services more useful.
                </div>
                <ul className="list pl-6">
                    <li className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">1. Click Create Account button on header.</li>
                    <li className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">2. Enter your email address.</li>
                    <li className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">3. In the `&#34;`Full name`&#34;` field, enter your name.</li>
                    <li className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">4. Enter and confirm your password.</li>
                    <li className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">5. Click Create Account.</li>
                </ul>
            </div>
            <div className="w-full h-full flex items-center justify-center relative">
                <img src="Images/Screenshot 2025-06-29 at 9.22.40 PM 4.png" className="h-64 w-full"/>
                <img src="Images/Untit design 1.png" alt="Create Account" className="w-auto h-64 absolute -bottom-12 right-5"/>
            </div>
        </div>
        </div>
      </div>
            </div>
    )
}