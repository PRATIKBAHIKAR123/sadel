
import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

const ModernWorkplaceConsulting = () => {
    const faqs = [
        {
            question: "What is a Modern Workplace solution?",
            answer: "A Modern Workplace solution is an integrated approach that combines technology, processes, and culture to create a flexible, secure, and productive work environment. It enables employees to work seamlessly from anywhere while maintaining security and collaboration standards."
        },
        {
            question: "How does AFAQ's Modern Workplace solution improve productivity?",
            answer: "Our solution boosts productivity through centralized workplace services, AI-driven digital assistants, predictive analytics, and seamless cross-device experiences. We eliminate IT bottlenecks and provide instant access to tools and resources your team needs."
        },
        {
            question: "What platforms and technologies do you support?",
            answer: "We support leading platforms including Microsoft 365, Asana for work management, Solr for enterprise search, and Acquia Cloud Platform for content management. Our solutions integrate with your existing infrastructure while providing modern capabilities."
        },
        {
            question: "How do you ensure security in a Modern Workplace environment?",
            answer: "Security is built into every aspect of our Modern Workplace solutions. We implement enterprise-grade security measures, identity and access management, data protection, and compliance frameworks to keep your organization's data and systems secure."
        },
        {
            question: "What support and managed services do you provide?",
            answer: "We offer comprehensive managed services including 24/7 application support, continuous enhancements, enterprise search optimization, collaboration platform administration, and proactive monitoring to ensure optimal performance and user experience."
        },
        {
            question: "How long does it take to implement a Modern Workplace solution?",
            answer: "Implementation timelines vary based on your organization's size and complexity. Typically, we can deliver initial capabilities within 4-8 weeks, with full transformation completed in 3-6 months. We work closely with your team to ensure smooth adoption."
        }
    ];

    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <div>
                                <h1 className="hero-title">
                                    <span className="hero-title-accent">Redefine</span>{" "}
                                    <span className="hero-title-primary">Work with an Employee-First Approach</span>
                                </h1>
                                <p className="hero-description">
                                    Drive success with an employee-centric approach, boosting productivity, collaboration, and talent acquisition. Our Modern Workplace solutions create engaging, secure, and flexible work environments that adapt to your team&apos;s evolving needs.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                                            Get a free 30-minute consultation with a AFAQ expert
                                        </Button>
                                    </Link>
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
                                Transform your workplace with AFAQ&apos;s Modern Workplace solutions that empower your team to connect, collaborate, and work securely on any device, anywhere. Say goodbye to the hassle of IT issues and embrace a centralized workplace service that gives your employees instant access to the tools they need to stay focused and productive.
                                <br /><br />
                                In today&apos;s hybrid work environments, your team needs solutions that adapt to their dynamic needs. Our Modern Workplace platform enables seamless work experiences whether your employees are in the office, working from home, or collaborating on the go - all without compromising security or productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="right" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                How can our Digital Workplace Solution Boost Productivity?
                            </h2>
                            <p>
                                Our comprehensive approach spans strategy, implementation, and managed services to deliver measurable business outcomes:
                            </p>
                            <div className="mt-6 grid md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategy</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Digital Workplace maturity assessment
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Work Management strategy and solution blueprint
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Workplace Transformation Strategy
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Content Personalization
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Enterprise Search Architecture
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Knowledge management
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            ECM Platform architecture
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            ECM Health Assessment
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Content Platform Migration strategy
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Modern Intranet
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Workplace Productivity app Development
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Work Management and collaboration Platform Services
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Platform Implementation
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Integration
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Enterprise Search Services
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            ECM Platform Build and Engineering
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            ECM Service development
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Content Migration and validation
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Managed Services</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Application Support
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Application Enhancements
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Enterprise Search Managed Services
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Collaboration and ECM managed services
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2 mt-1">✓</span>
                                            Collaboration and ECM Platform administration
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (13).png" alt="Productivity Solutions" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (14).png" alt="Work Experience Platform" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Revamp your Work with Ease
                            </h2>
                            <p>
                                Our cutting-edge platform delivers a seamless, consumer-like experience that prioritizes user-friendliness and personalized modern workforce solutions. Our intelligent platform centralizes and optimizes employee experiences, enabling effortless service management across all devices through our intuitive self-service marketplace.
                                <br /><br />
                                The platform features a 24x7 AI-driven digital assistant that provides intelligent support and request fulfillment, ensuring your team always has the help they need to work efficiently and effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* FAQ Section */}
            <Fade direction="up" triggerOnce>
                <div className="feature-section">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="feature-content h2">
                                FAQ&apos;s
                            </h2>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ModernWorkplaceConsulting;