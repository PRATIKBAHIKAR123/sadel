import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const CitrixConsultingPage = () => (
    <div>
        <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">Citrix</span>{" "}
                                <span className="hero-title-primary">Consulting & Implementation</span>
                                
                            </h1>
                            <p className="hero-description">
                               Transform your business with Citrixs powerful virtualization platform. We deliver secure, scalable desktop and application solutions that enhance productivity while simplifying IT management and reducing operational costs.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Start Your Journey
                                </Button>
                                <Button variant="outline">Explore Solutions</Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        {/* Background Elements */}
                        <img src="/Images/defender-for-identity-banner.png" alt="Citrix Virtualization Solutions" />
                    </div>
                </div>
            </div>

            <Fade direction="up">
                                        <div className="feature-section">
                                            <div className="feature-container">
                                                {/* Right: Illustration */}
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="Citrix Workflow" className="w-full max-w-xs h-auto" />
                                                </div>
                                                {/* Left: Text */}
                                                <div className="feature-content">
                                                    <h2>
                                                        How Sadels Citrix Consulting Services Work
                                                    </h2>
                                                    <p>
                                                        At Sadel, our Citrix Consulting Services are designed to address your organizations unique challenges at every stage of your virtualization journey. We follow a proven methodology that ensures successful implementation and maximizes your return on investment.

Our approach begins with a comprehensive assessment of your current infrastructure, followed by strategic planning, seamless deployment, and ongoing optimization. Each engagement is tailored to your specific business requirements and technical environment.
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
                                                        Sadels Citrix Success Framework
                                                    </h2>
                                                    <p>
                                                    Our experienced Citrix specialists at Sadel guide you through every phase of your digital transformation journey. From initial consultation to post-deployment support, we ensure your Citrix environment delivers optimal performance and user satisfaction.
                                                    <br/><br/>
                                                    Whether youre modernizing legacy systems, implementing new virtualization solutions, or optimizing existing infrastructure, Sadels comprehensive approach ensures your Citrix deployment aligns perfectly with your business objectives and growth plans.
                                                    </p>
                                                </div>
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="Success Framework" className="w-full max-w-xs h-auto" />
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
                                                        Transform Your Business with Sadels Citrix Expertise
                                                    </h2>
                                                    <p>
                                                    Our clients have achieved remarkable success through Sadels comprehensive Citrix services:
                                                    <ul className="list-disc mt-4 space-y-2">
                                                        <li>End-to-End Citrix Infrastructure Design & Deployment</li>
                                                        <li>Flexible Engagement Models - Hourly & Fixed-Price Projects</li>
                                                        <li>Rapid Proof of Concept Development</li>
                                                        <li>Seamless Pilot to Production Migration</li>
                                                        <li>Comprehensive Team Training & Knowledge Transfer</li>
                                                        <li>24/7 Support & Managed Services</li>
                                                    </ul>
                                                    <p className="mt-4">
                                                        Sadels Citrix Consulting Services accelerate your digital transformation while minimizing risks and ensuring smooth deployment of mission-critical virtualization solutions.
                                                    </p>
                                                    </p>
                                                </div>
                                                <div className="feature-image">
                                                    <img src="/Images/Frame (21).png" alt="Business Transformation" className="w-full max-w-xs h-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>


                                    <div className="w-full my-10">
                                                        <div className="bg-[#fffcec] flex items-center justify-center p-6">
                                                            <div>
                                                                <div className="justify-start text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7">Ready to Transform?</div>
                                                                <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Reduce costs while boosting performance with Citrix.</div>
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

export default CitrixConsultingPage;