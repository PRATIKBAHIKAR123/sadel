import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/ui/faq-accordion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const CitrixConsultingPage = () => {
    const faqs = [
        {
            question: "What is Citrix Consulting?",
            answer: "Citrix Consulting helps to install, configure, patch, and set up networks and VLANs, do backups, monitor the system, and send alerts for cloud servers and environments."
        },
        {
            question: "What is Citrix managed services?",
            answer: "Citrix Managed Services offers an unusual approach to consulting in order to maximize value while minimizing expenses and supervision requirements. Address Citrix&apos;s personnel difficulties. We offer long-term personnel stability, &ldquo;evergreen&rdquo; knowledge, surge capacity, and 24-hour-a-day, seven-day-a-week coverage."
        },
        {
            question: "What is included in Citrix consulting service?",
            answer: "Citrix Managed Services offers an unusual approach to consulting in order to maximize value while minimizing expenses and supervision requirements. Address Citrix&apos;s personnel difficulties. We offer long-term personnel stability, &ldquo;evergreen&rdquo; knowledge, surge capacity, and 24-hour-a-day, seven-day-a-week coverage."
        },
        {
            question: "Is Citrix an MSP?",
            answer: "YES. Citrix Workspace is a comprehensive, unified, and intelligent digital workspace that provides MSPs with solutions that enable their clients to access the required data, applications, and content within an organization."
        }
    ];

    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <Fade direction="up" triggerOnce>
                                <h1 className="hero-title">
                                    <span className="hero-title-accent">Citrix</span>{" "}
                                    <span className="hero-title-primary">offers excellent remote connection for desktop virtualization solutions that scale and give a rich user experience while being simple to operate.</span>
                                </h1>
                                <p className="hero-description">
                                    As organizations increasingly need robust, secure infrastructure for user interactions and applications, Citrix Consulting Services become a crucial aspect of any digital workspace strategy. Professional Labs has been a trusted Citrix partner for over 15 years, with certified professionals who can deploy and resell Citrix solutions, create application and data delivery models, resolve current environment challenges, and facilitate migration to a Citrix-as-a-service consumption model.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                                            Get a free 30-minute consultation with a Professional Labs expert
                                        </Button>
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            {/* Background Elements */}
                            <img src="/Images/defender-for-identity-banner.png" alt="Citrix Virtualization Solutions" />
                        </Fade>
                    </div>
                </div>
            </div>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (21).png" alt="Citrix Workflow" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Professional Citrix Consulting Service & its Journey
                            </h2>
                            <p>
                                Our approach follows a five-step repeating process for every Citrix solution: Plan, Develop, Rollout, Manage, and Optimize. Each stage includes opportunities and milestones to increase the value of solutions, and our &ldquo;Citrix Consulting Kits&rdquo; enable high-value outcomes that ensure critical milestones are met and investment value is optimized.
                            </p>
                            <Link href="/contact-us">
                                <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold mt-4">
                                    Get assistance from Citrix consulting experts at every step of your Citrix journey
                                </Button>
                            </Link>
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
                                Success loop for Citrix Professional Services
                            </h2>
                            <p>
                                Our Citrix Consulting provides seasoned experts for design and targeted results at each point of the success loop. Our Consulting Kits enable solutions to progress to the next level in the business loop, ensuring that your Citrix environment delivers optimal performance and user satisfaction.
                                <br /><br />
                                Whether you&apos;re modernizing legacy systems, implementing new virtualization solutions, or optimizing existing infrastructure, our comprehensive approach ensures your Citrix deployment aligns perfectly with your business objectives and growth plans.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (18).png" alt="Success Framework" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Our Professional Citrix services have benefited customers in the following areas:
                            </h2>
                            <ul className="list-disc mt-4 space-y-2 text-[#6b7280]">
                                <li>Complete Citrix Lifecycle Deployments</li>
                                <li>Citrix Hourly or Fixed-Price Project Engagements</li>
                                <li>Proof of Concept Initiatives</li>
                                <li>Pilot / Production Implementations</li>
                                <li>Staff Development</li>
                                <li>Health Screening and Validation of Citrix</li>
                                <li>Help Desk and Remote Business Solutions for Citrix</li>
                            </ul>
                            <p className="mt-4 text-[#6b7280]">
                                Our Citrix Consulting Services significantly accelerate the planning and installation of business infrastructure while resolving deployment issues.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (19).png" alt="Business Transformation" className="w-full max-w-xs h-auto" />
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
                                Why Choose Our Citrix Services
                            </h2>
                            <ul className="list-disc mt-4 space-y-2 text-[#6b7280]">
                                <li>Excellent service choices</li>
                                <li>Inexpensive and quick delivery</li>
                                <li>Customer-centric approach</li>
                                <li>Effective instruction and documentation</li>
                                <li>Expert staff in TQM implementation</li>
                                <li>Domain expertise</li>
                            </ul>
                            <Link href="/contact-us">
                                <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold mt-4">
                                    Talk to our Citrix Expert Now
                                </Button>
                            </Link>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (17).png" alt="Why Choose Us" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            {/* FAQ Section */}
            <Fade direction="up" triggerOnce>
                <div className="feature-section">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-center mb-8 feature-content h2">
                            FAQ&apos;s of Citrix Professional Services
                        </h2>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default CitrixConsultingPage;