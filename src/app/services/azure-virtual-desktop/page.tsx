import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

export default function AzurevirtualDesktop(){
    return(
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">Azure</span>{" "}
                                <span className="hero-title-primary">Virtual Desktop</span>
                                
                            </h1>
                            <p className="hero-description">
                               The Azure Virtual Desktop client is available for Windows, Mac, iOS, Android, and HTML5, allowing you to access your desktop and apps from any internet-connected device. Pick the right Azure VM for optimal performance and make use of Windows 10 and Windows 11’s multi-session advantage on Azure to support numerous users in a single instance.
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
                        <img src="/Images/defender-for-identity-banner.png" alt="Background Element" />
                    </div>
                </div>
            </div>

            <Fade direction="up">
                                        <div className="feature-section">
                                            <div className="feature-container">
                                                {/* Right: Illustration */}
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="Share Files" className="w-full max-w-xs h-auto" />
                                                </div>
                                                {/* Left: Text */}
                                                <div className="feature-content">
                                                    <h2>
                                                        Get the most out of Microsoft Teams and Microsoft Office
                                                    </h2>
                                                    <p>
                                                        If your company uses Microsoft products, such as Outlook, OneDrive, and Microsoft Teams, you should ensure that your employees can perform these tasks as easily and efficiently on the web as they would on a desktop or laptop computer.
                                                    </p>
                                                   
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </Fade>

                                    <Fade direction="up">
                                        <div className="feature-section">
                                            <div className="feature-container">
                                                {/* Right: Illustration */}
                                                
                                                {/* Left: Text */}
                                                <div className="feature-content">
                                                    <h2>
                                                        Deploy Azure Virtual Desktop with AMMP
                                                    </h2>
                                                    <p>
                                                    The Azure Migration and Modernization Program (AMMP) offers evaluation, proof-of-concept, milestone rewards, Azure credits, and technical training for all three control planes. If a partner meets the requirements for the Advanced Specialization or for Citrix and VMware partners, they will be given the option to enable whichever control planes they like in AMMP.
                                                    </p>
                                                </div>
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="Share Files" className="w-full max-w-xs h-auto" />
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
                                                                <img src="/Images/Mail-bro 2.png" className="w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
        </div>
    )
}