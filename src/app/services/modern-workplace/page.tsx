
import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ModernWorkplaceConsulting = () => (
    <div>
        <div className="bg-[#fffcec] p-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                {/* Left Content */}
                <div className="space-y-8">
                    <Fade direction="up" triggerOnce>
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">Modern</span>{" "}
                                <span className="hero-title-primary">Workplace Solutions</span>

                            </h1>
                            <p className="hero-description">
                                Redefine work with an employee-first approach that drives success through enhanced productivity, seamless collaboration, and strategic talent acquisition. Sadel&apos;s Modern Workplace solutions create engaging, secure, and flexible work environments that adapt to your team&apos;s evolving needs.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Get Free Consultation
                                </Button>
                                <Button variant="outline">Explore Solutions</Button>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                    {/* Background Elements */}
                    <Fade direction="left" triggerOnce>
                        <img src="/Images/defender-for-identity-banner.png" alt="Modern Workplace Solutions" />
                    </Fade>
                </div>
            </div>
        </div>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (21).png" alt="Connected Workplace" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Connect, Collaborate, and Work Securely
                        </h2>
                        <p>
                            Transform your workplace with Sadel&apos;s Modern Workplace solutions that empower your team to connect, collaborate, and work securely on any device, anywhere. Say goodbye to IT complexities and embrace a centralized workplace service that gives your employees instant access to the tools they need to stay focused and productive.
                            <br /><br />
                            In today&apos;s hybrid work environments, your team needs solutions that adapt to their dynamic needs. Sadel&apos;s Modern Workplace platform enables seamless work experiences whether your employees are in the office, working from home, or collaborating on the go - all without compromising security or productivity.
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
                            How Sadel&apos;s Digital Workplace Solutions Boost Productivity
                        </h2>
                        <p>
                            Our comprehensive approach spans strategy, implementation, and managed services to deliver measurable business outcomes:
                        </p>
                        <div className="mt-6 space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategy & Assessment</h3>
                                <ul className="list-disc space-y-1 text-gray-700">
                                    <li>Digital Workplace maturity assessment and roadmap development</li>
                                    <li>Work Management strategy and comprehensive solution blueprint</li>
                                    <li>Workplace Transformation Strategy with change management</li>
                                    <li>Content Personalization and Enterprise Search Architecture</li>
                                    <li>Knowledge management and ECM Platform architecture</li>
                                    <li>ECM Health Assessment and Content Platform Migration strategy</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation & Integration</h3>
                                <ul className="list-disc space-y-1 text-gray-700">
                                    <li>Modern Intranet and Workplace Productivity app Development</li>
                                    <li>Work Management and Collaboration Platform Services</li>
                                    <li>Platform Implementation with seamless Integration capabilities</li>
                                    <li>Enterprise Search Services and ECM Platform Build & Engineering</li>
                                    <li>ECM Service development and Content Migration with validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="feature-image">
                        <img src="/Images/Frame (21).png" alt="Productivity Solutions" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (21).png" alt="Managed Services" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Comprehensive Managed Services
                        </h2>
                        <p>
                            Sadel provides ongoing support and optimization to ensure your Modern Workplace solutions continue delivering maximum value:
                        </p>
                        <ul className="list-disc mt-4 space-y-2">
                            <li><strong>Application Support:</strong> 24/7 monitoring and maintenance for optimal performance</li>
                            <li><strong>Application Enhancements:</strong> Continuous improvement and feature updates</li>
                            <li><strong>Enterprise Search Managed Services:</strong> Optimized search capabilities and content discovery</li>
                            <li><strong>Collaboration & ECM Managed Services:</strong> Streamlined content management and workflow optimization</li>
                            <li><strong>Platform Administration:</strong> Expert management of collaboration and ECM platforms</li>
                            <li><strong>Proactive Monitoring:</strong> Predictive analytics to prevent issues before they occur</li>
                        </ul>
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
                            Revamp Your Work Experience with Ease
                        </h2>
                        <p>
                            Sadel&apos;s cutting-edge platform delivers a seamless, consumer-like experience that prioritizes user-friendliness and personalized modern workforce solutions. Our intelligent platform centralizes and optimizes employee experiences, enabling effortless service management across all devices through our intuitive self-service marketplace.
                            <br /><br />
                            Key platform features include:
                        </p>
                        <ul className="list-disc mt-4 space-y-2">
                            <li><strong>AI-Driven Digital Assistant:</strong> 24/7 support with intelligent request fulfillment</li>
                            <li><strong>Predictive Analytics:</strong> Proactive issue resolution before problems arise</li>
                            <li><strong>Employee Feedback Integration:</strong> Continuous improvement through user insights</li>
                            <li><strong>Cross-Device Optimization:</strong> Consistent experience across all platforms</li>
                            <li><strong>Self-Service Marketplace:</strong> Empowered employees with instant access to resources</li>
                            <li><strong>Personalized Workflows:</strong> Tailored experiences that adapt to individual work styles</li>
                        </ul>
                    </div>
                    <div className="feature-image">
                        <img src="/Images/Frame (21).png" alt="Work Experience Platform" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (21).png" alt="Workplace Transformation" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Why Choose Sadel for Modern Workplace Transformation?
                        </h2>
                        <p>
                            Stop settling for outdated workplace solutions that hinder productivity. Sadel&apos;s Modern Workplace solutions transform your workplace experience and empower your team to achieve their full potential through:
                        </p>
                        <ul className="list-disc mt-4 space-y-2">
                            <li><strong>Employee-First Approach:</strong> Solutions designed around user needs and experiences</li>
                            <li><strong>Hybrid Work Optimization:</strong> Seamless collaboration regardless of location</li>
                            <li><strong>Security-First Design:</strong> Enterprise-grade security without compromising usability</li>
                            <li><strong>Scalable Architecture:</strong> Solutions that grow with your organization</li>
                            <li><strong>Proven Methodology:</strong> Tested frameworks for successful digital transformation</li>
                            <li><strong>Continuous Innovation:</strong> Stay ahead with cutting-edge workplace technologies</li>
                        </ul>
                    </div>

                </div>
            </div>
        </Fade>

        <div className="w-full my-10">
            <div className="bg-[#fffcec] flex items-center justify-center p-6">
                <div>
                    <div className="justify-start text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7">Transform Your Workplace</div>
                    <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Redefine work with an employee-first approach.</div>
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
                        <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">Get a free 30-minute consultation with a Sadel expert. </span><span className="text-[#f9d300] text-base font-normal font-['Urbanist'] leading-loose">privacy policy</span><span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                    </div>
                </div>
                <div className="h-80 w-auto">
                    <img src="/Images/Mail-bro 2.png" className="w-full h-full" alt="Contact Sadel" />
                </div>
            </div>
        </div>
    </div>
);

export default ModernWorkplaceConsulting;