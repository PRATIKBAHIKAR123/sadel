"use client";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
// import Image from "next/image";
import React from "react";

export default function MarketResearchService() {
    return (
        <div className="w-full min-h-screen bg-[#fff]">
            {/* Hero Section */}
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <div>
                                <h2 className="text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                    <span className="text-[#0b0d0e]">Market</span> <span className="text-[#f9d300]">Research</span> <span className="text-[#0b0d0e]">Solutions</span>
                                </h2>
                                <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                    Transform your business decisions with data-driven insights. Our comprehensive market research services provide actionable intelligence about your products, technology, customers, competition, and market landscape.
                                </p>
                                <div className="flex gap-4">
                                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                        Get Expert Consultation
                                    </Button>
                                    <Button variant="outline">Explore Services</Button>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            <img src="/Images/access.png" alt="Market Research" className="w-full h-auto" />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Research Process Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Comprehensive Market Research Methodology
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                            Our market research services help organizations identify growth opportunities and develop competitive strategies through deep understanding of customers and market dynamics. We employ a robust, comprehensive approach ensuring maximum research coverage.
                        </p>
                    </div>
                </Fade>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {[
                        {
                            number: "01",
                            title: "Problem Definition",
                            description: "Define research objectives and identify key business challenges"
                        },
                        {
                            number: "02",
                            title: "Research Planning",
                            description: "Develop comprehensive research methodology and data collection strategies"
                        },
                        {
                            number: "03",
                            title: "Data Analysis",
                            description: "Collect and analyze information using advanced analytical techniques"
                        },
                        {
                            number: "04",
                            title: "Insight Delivery",
                            description: "Present actionable findings and strategic recommendations"
                        }
                    ].map((step, index) => (
                        <Slide direction="up" key={index} delay={index * 100}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 min-h-[220px] flex flex-col justify-between">
                                {/* Number badge */}
                                <div className="bg-[#f9d300] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h4 className="text-xl font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                    {step.title}
                                </h4>

                                {/* Description */}
                                <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </Slide>
                    ))}
                </div>

            </div>

            {/* Capabilities Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <Fade direction="right" triggerOnce>
                            <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                                End-to-End Market Research Capabilities
                            </div>
                            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                Our market research expertise combines primary and secondary research methodologies to deliver comprehensive market intelligence. Our industry specialists excel at interpreting complex data patterns to provide personalized insights and practical recommendations. We leverage modern business intelligence and visualization tools to present findings in an actionable format.
                            </div>
                        </Fade>
                    </div>
                    <div className="flex-1">
                        <Fade direction="left" triggerOnce>
                            <div className="items-center justify-center flex">
                                <img src="/Images/Frame (16).png" alt="Research Capabilities" className="w-auto h-80"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Respondent Management Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <Fade direction="left" triggerOnce>
                            <div className="items-center justify-center flex">
                                <img src="/Images/Frame (17).png" alt="Respondent Management" className="w-auto h-80"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="flex-1">
                        <Fade direction="right" triggerOnce>
                            <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                                Expert Respondent Management
                            </div>
                            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                Find your target demographic regardless of how niche it may be. We partner with leading sample providers to give you access to 90M+ panel respondents with any combination of segmentation, quotas, and splits required for your research projects.
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Research Expertise Section */}
            <div className="max-w-7xl mx-auto mt-4">
                <div className="bg-[#f9d300] rounded-3xl p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex-1">
                            <Fade direction="up" triggerOnce>
                                <div className="text-black text-4xl font-semibold font-['Urbanist'] leading-[64px] mb-6">
                                    Research Experts at Your Service
                                </div>
                                <p className="text-black text-lg font-normal font-['Urbanist'] leading-loose">
                                    We handle everything from project planning to execution and final reporting. Our team specializes in advanced research methodologies including cluster analysis, Van Westendorp pricing studies, and custom survey design to meet your specific research objectives.
                                </p>
                            </Fade>
                        </div>
                        <div className="flex-1">
                            <Fade direction="left" triggerOnce>
                                <div className="items-center justify-center flex">
                                    <img src="/Images/Group 363.png" alt="Research Experts" className="w-auto h-64"/>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Packages Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Comprehensive Service Packages
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Customize your service package to meet your specific requirements, including:
                        </p>
                    </div>
                </Fade>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Advanced Survey Platform",
                        "Dedicated Phone Support",
                        "Product Training Sessions",
                        "Custom Survey Templates",
                        "Pre-launch Design Review",
                        "Qualification Rate Testing",
                        "Niche & B2B Targeting",
                        "Complex Project Management"
                    ].map((service, index) => (
                        <Slide direction="up" key={index} delay={index * 50}>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#f9d300] rounded-full"></div>
                                    <span className="text-[#0b0d0e] font-medium font-['Urbanist']">{service}</span>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Why Choose Our Market Research Services
                        </h3>
                    </div>
                </Fade>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Global Reach",
                            description: "Coverage across 50+ markets in Americas, Europe, and Asia-Pacific"
                        },
                        {
                            title: "Transparency",
                            description: "100% recording capability and live monitoring features"
                        },
                        {
                            title: "Industry Expertise",
                            description: "Insight-driven approach backed by sector-specific knowledge"
                        },
                        {
                            title: "Multi-lingual",
                            description: "Global coverage supporting 40+ languages"
                        }
                    ].map((feature, index) => (
                        <Slide direction="up" key={index} delay={index * 100}>
                            <div className="text-center">
                                <div className="bg-[#f9d300] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <div className="w-8 h-8 bg-black rounded-full"></div>
                                </div>
                                <h4 className="text-xl font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                    {feature.title}
                                </h4>
                                <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>

            {/* Core Capabilities Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="up" triggerOnce>
                    <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
                        <div className="text-center mb-8">
                            <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                                Core Capabilities
                            </h3>
                        </div>
                        <div className="space-y-6 text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            <p>
                                Our market research solutions equip business executives with the strategic intelligence needed to formulate winning strategies in competitive markets. By delivering precise market insights through our industry research services, we help develop and implement business strategies that reduce costs, meet evolving customer demands, and differentiate products effectively.
                            </p>
                            <p>
                                Discover new business opportunities with market research solutions tailored to your specific needs and objectives.
                            </p>
                            <p>
                                Market research is increasingly recognized as a driver of industry-wide innovation and strategic planning. See how your organization can gain exclusive market intelligence by requesting a customized proposal.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* CTA Section */}
            {/* <div className="w-full my-10">
                <div className="bg-[#fffcec] flex items-center justify-center p-6">
                    <div>
                        <Fade direction="up" triggerOnce>
                            <div className="text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7 mb-4">
                                Ready to transform your business decisions?
                            </div>
                            <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                Get expert market research consultation today.
                            </div>
                            <div className="flex">
                                <div className="flex-1 relative">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                    />
                                    <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-3">
                                <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">
                                    You can unsubscribe at any time. Read our{" "}
                                </span>
                                <span className="text-[#f9d300] text-base font-normal font-['Urbanist'] leading-loose">
                                    privacy policy
                                </span>
                                <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                            </div>
                        </Fade>
                    </div>
                    <div className="h-80 w-auto">
                        <Fade direction="left" triggerOnce>
                            <img src="/Images/Mail-bro.png" className="w-full h-full" alt="Contact" />
                        </Fade>
                    </div>
                </div>
            </div> */}
        </div>
    );
} 