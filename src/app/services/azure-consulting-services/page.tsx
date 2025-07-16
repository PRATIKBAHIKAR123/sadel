import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

export default function Azureconsultingservice(){
    return(
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <Fade direction="up" triggerOnce>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">Azure</span>{" "}
                                <span className="hero-title-primary">Consulting Services</span>
                                
                            </h1>
                            <p className="hero-description">
                               Microsoft Azure is the ultimate cloud platform offering over 200 innovative products and services. Designed to help organizations tackle modern business challenges, Microsoft Azure consulting services provide seamless flexibility to build, run, and manage versatile applications across multiple clouds, on-premises, or at the edge.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Getting Started
                                </Button>
                                    <Button variant="outline">Learn More</Button>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                        {/* Background Elements */}
                        <img src="/Images/defender-for-identity-banner.png" alt="Background Element" />
                        </Fade>
                    </div>
                </div>
            </div>

            <Fade direction="left" triggerOnce>
                                        <div className="feature-section">
                                            <div className="feature-container">
                                                {/* Right: Illustration */}
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="Share Files" className="w-full max-w-xs h-auto" />
                                                </div>
                                                {/* Left: Text */}
                                                <div className="feature-content">
                                                    <h2>
                                                        Simplify Your Azure Environment with Remote Azure Consulting Services
                                                    </h2>
                                                    <p>
                                                        In todays fast-paced digital landscape, managing your Azure environment while keeping up with evolving technology can be overwhelming. Balancing workloads and learning new platforms shouldnt slow you down. Thats where Sadel’s Azure Consulting Services come in.
                                                    </p>
                                                    <p>
                                                        At Sadel, we help businesses of all sizes simplify, optimize, and grow their Azure environments. As a trusted Microsoft partner, our experienced team of cloud experts ensures your Azure operations run seamlessly — giving you the freedom to focus on strategic goals.
                                                    </p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </Fade>

                                    <Fade direction="right" triggerOnce>
                                        <div className="feature-section">
                                            <div className="feature-container">
                                                {/* Right: Illustration */}
                                                
                                                {/* Left: Text */}
                                                <div className="feature-content">
                                                    <h2>
                                                        Discover the potential of your Azure initiative with our Azure consulting services:
                                                    </h2>
                                                    <p>
                                                    <ul className="list-disc">
                                                        <li>Assess total cost of ownership (TCO), return on investment (ROI), development time, and feasibility</li>
<li>Offer executive-level consultations, including Q&A sessions and follow-up via email</li>
<li>Design robust cloud architectures for Azure-based applications and data warehouses</li>
<li>Develop Azure and hybrid cloud infrastructure with CI/CD pipeline integration</li>
<li>Create tailored Azure migration strategies based on your business goals and capabilities</li>
<li>Define risk management plans for smooth implementation</li>
<li>Provide IT service provisioning processes and policy frameworks post-migration</li>
<li>Conduct thorough infrastructure configuration and code reviews</li>
                                                    </ul>
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