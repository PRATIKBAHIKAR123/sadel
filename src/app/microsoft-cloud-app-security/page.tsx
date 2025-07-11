import { Button } from "@/components/ui/button";
import TeachingTechCarousel from "./techCarousel";
import { Fade } from "react-awesome-reveal";

export default function MicrosoftCloudeApp() {
    return(
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className=" text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                <span className="text-[#0b0d0e]">Microsoft</span> <span className="text-[#f9d300]">Cloud App Security</span>
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                Microsoft provides businesses with an endpoint security platform that can identify, probe, and avert sophisticated attacks. Using several features of Microsoft Azure and Windows 10 enables companies to react quickly to security threats.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Getting Started
                                </Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        {/* Background Elements */}
                        <img src="Images/microsoft-cloud-app.png" alt="Background Element" />
                    </div>
                </div>
            </div>

            <Fade direction="up">
                            <div className="max-w-7xl mx-auto sm:py-16">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                                    {/* Left: Text */}
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                            Securely share files <br className="hidden sm:block" /> with clients
                                        </h2>
                                        <p className="text-gray-600 text-base sm:text-lg mb-6">
                                            With Sadel, you can securely share important files with clients, set expiry dates for added security, track link activity, and even remove access whenever needed. Simplify client collaboration and enhance confidentiality with secure, trackable, and customizable document sharing.
                                        </p>
                                    </div>
                                    {/* Right: Illustration */}
                                    <div className="flex justify-center">
                                        <img src="Images/Frame (20).png" alt="Share Files" className="w-full max-w-xs h-auto" />
                                    </div>
                                </div>
                            </div>
                        </Fade>
            <div className="max-w-7xl flex gap-16 mx-auto p-8 mt-10">
                <div className="flex-3">
                    <div className="bg-[#f9d300] rounded-3xl flex-2 p-12">
                        <div className="justify-start text-black text-[40px] font-bold font-['Urbanist'] leading-[52px]">Maintain control over your sensitive data</div>
                        <div className="text-black text-sm font-normal font-['Urbanist'] leading-normal">
                            Ensure that files are accessible to all team members, while also implementing precise permission settings at various levels to restrict editing privileges to authorized individuals.
                        </div>
                        <div className="flex items-center justify-end">
                            <img src="Images/b.png" className="h-64 w-auto"/>
                        </div>

                    </div>
                </div>
                <div className="flex-2">
                    <div className="bg-[#fff0a1] rounded-3xl flex-2 p-12">
                        <div className="justify-start text-black text-[40px] font-bold font-['Urbanist'] leading-[52px]">Set up a virtual law library</div>
                        <div className="text-black text-sm font-normal font-['Urbanist'] leading-normal">
                            Boost efficiency with centralized case file organization and advanced search options for quick and easy access to relevant information.
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="Images/microsoft-cloud-image.png" className="h-64 w-auto"/>
                        </div>

                    </div>
                </div>
            </div>
            <TeachingTechCarousel/>
            <Fade direction="up">
                            <div className="max-w-7xl mx-auto sm:py-16">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                                    {/* Left: Text */}
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                            Securely share files <br className="hidden sm:block" /> with clients
                                        </h2>
                                        <p className="text-gray-600 text-base sm:text-lg mb-6">
                                            With Sadel, you can securely share important files with clients, set expiry dates for added security, track link activity, and even remove access whenever needed. Simplify client collaboration and enhance confidentiality with secure, trackable, and customizable document sharing.
                                        </p>
                                    </div>
                                    {/* Right: Illustration */}
                                    <div className="flex justify-center">
                                        <img src="Images/Frame (21).png" alt="Share Files" className="w-full max-w-xs h-auto" />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                         <div className="w-full my-10">
                    <div className="bg-[#fffcec] flex items-center justify-center p-6">
                        <div>
                            <div className="justify-start text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7">Sign up for updates</div>
                            <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Cut down on expenses while improving productivity.</div>
                            <div className="flex">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                    Sign Up
                  </Button>
                </div>
                
              </div>
              <div className="mt-3">
                    <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">You can unsubscribe at any time. Read our </span><span className="text-[#f9d300] text-base font-normal font-['Urbanist'] leading-loose">privacy policy</span><span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                  </div>
                        </div>
                        <div className="h-80 w-auto">
                            <img src="Images/Mail-bro 2.png" className="w-full h-full" />
                        </div>
                    </div>
                </div>
        </div>
    )
}