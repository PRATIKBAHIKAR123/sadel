import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const PKIConsulting = () => (
    <div>
        <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">PKI</span>{" "}
                                <span className="hero-title-primary">Consulting & Security</span>
                                
                            </h1>
                            <p className="hero-description">
                               Secure your digital infrastructure with enterprise-grade Public Key Infrastructure solutions. Sadel delivers comprehensive PKI consulting services to help organizations modernize their security architecture, ensure compliance, and protect critical assets with proven cryptographic frameworks.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Secure Your Business
                                </Button>
                                <Button variant="outline">Explore PKI Solutions</Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        {/* Background Elements */}
                        <img src="/Images/defender-for-identity-banner.png" alt="PKI Security Solutions" />
                    </div>
                </div>
            </div>

            <Fade direction="up">
                                        <div className="feature-section">
                                            <div className="feature-container">
                                                {/* Right: Illustration */}
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="PKI Infrastructure" className="w-full max-w-xs h-auto" />
                                                </div>
                                                {/* Left: Text */}
                                                <div className="feature-content">
                                                    <h2>
                                                        What Sets Sadel&apos;s PKI Services Apart?
                                                    </h2>
                                                    <p>
                                                       At Sadel, we deliver enterprise-grade PKI solutions that combine robust security controls with seamless integration capabilities. Our comprehensive approach covers every aspect of your PKI journey - from strategic planning and architecture design to implementation, deployment, and ongoing management.
                                                       <br/><br/>
                                                       Beyond technical implementation, we provide extensive training and knowledge transfer to ensure your team can effectively manage and maintain your PKI infrastructure. Our proven methodologies guarantee secure, scalable, and compliant PKI deployments tailored to your organization&apos;s unique requirements.
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
                                                        Comprehensive PKI Services Portfolio
                                                    </h2>
                                                    <p>
                                                    Sadel offers a complete suite of PKI consulting and implementation services designed to meet diverse organizational needs:
                                                    <ul className="list-disc mt-4 space-y-2">
                                                        <li>Strategic PKI Architecture & Design Consulting</li>
                                                        <li>End-to-End PKI Implementation & Deployment Services</li>
                                                        <li>PKI Security Assessment & Compliance Reviews</li>
                                                        <li>Certificate Lifecycle Management Solutions</li>
                                                        <li>PKI Migration & Modernization Services</li>
                                                        <li>Comprehensive Training on PKI & Cryptographic Security</li>
                                                        <li>24/7 PKI Support & Managed Services</li>
                                                    </ul>
                                                    </p>
                                                </div>
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="PKI Services" className="w-full max-w-xs h-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>

                                    <Fade direction="up">
                                        <div className="feature-section">
                                            <div className="feature-container">
                                                {/* Right: Illustration */}
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="PKI Benefits" className="w-full max-w-xs h-auto" />
                                                </div>
                                                {/* Left: Text */}
                                                <div className="feature-content">
                                                    <h2>
                                                        Why Choose Sadel for PKI Consulting?
                                                    </h2>
                                                    <p>
                                                        With years of experience in cryptographic security and PKI implementations, Sadel brings unmatched expertise to your digital security transformation. Our certified security professionals understand the complexities of modern PKI environments and deliver solutions that scale with your business.
                                                        <br/><br/>
                                                        We focus on creating PKI infrastructures that not only meet current security requirements but also adapt to future technological changes. Our client-centric approach ensures seamless integration with existing systems while maintaining the highest security standards and regulatory compliance.
                                                    </p>
                                                   
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </Fade>

                                    <div className="w-full my-10">
                                                        <div className="bg-[#fffcec] flex items-center justify-center p-6">
                                                            <div>
                                                                <div className="justify-start text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7">Secure Your Infrastructure</div>
                                                                <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Strengthen security while optimizing PKI performance.</div>
                                                                <div className="flex">
                                                    <div className="flex-1 relative">
                                                      <input
                                                        type="email"
                                                        placeholder="Enter your business email"
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                                      />
                                                      <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                                        Get Started
                                                      </Button>
                                                    </div>
                                                    
                                                  </div>
                                                  <div className="mt-3">
                                                        <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">You can unsubscribe at any time. Read our </span><span className="text-[#f9d300] text-base font-normal font-['Urbanist'] leading-loose">privacy policy</span><span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                                                      </div>
                                                            </div>
                                                            <div className="h-80 w-auto">
                                                                <img src="/Images/Mail-bro 2.png" className="w-full h-full" alt="Contact Sadel" />
                                                            </div>
                                                        </div>
                                                    </div>
    </div>
);

export default PKIConsulting;