"use client";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function IdentityAccessManagement() {
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
                                    <span className="text-[#0b0d0e]">Intelligent</span> <span className="text-[#f9d300]">Identity Management</span>
                                </h2>
                                <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                    Transform your security posture with comprehensive identity governance and access control solutions. Our platform empowers organizations to analyze, define, and control user access while maintaining regulatory compliance across all enterprise applications.
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
                        <Fade direction="left" triggerOnce>
                            <img src="/Images/workings.png" alt="Identity Management" className="w-full h-auto" />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                {/* Identity Governance Platform */}
                <Slide direction="up" triggerOnce>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-20 mb-20">
                        <div className="flex-1">
                            <div className="text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">
                                Unified Identity Governance Platform
                            </div>
                            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                Our comprehensive identity governance solution provides a single foundation platform that helps organizations understand, control, and make informed business decisions related to user access and risk management. We employ business-centric rules and processes that empower line-of-business managers, auditors, and risk managers to govern access effectively.
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="items-center justify-center flex">
                                <img src="/Images/Frame (14).png" alt="Identity Governance" className="w-auto h-80"/>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* Business Activity Approach */}
                <Slide direction="up" triggerOnce>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-20 mb-20">
                        <div className="flex-1">
                            <div className="items-center justify-center flex">
                                <img src="/Images/Frame (15).png" alt="Business Activity" className="w-auto h-80"/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">
                                Business-Centric Access Control
                            </div>
                            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                Our business-activity-based approach facilitates seamless communication between auditors and IT staff, helping determine segregation of duties violations across enterprise applications including SAP. We provide better visibility and user access control through consolidated access entitlements and sophisticated algorithms for role mining, modeling, and optimization.
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* Yellow Highlight Section */}
            <div className="max-w-7xl mx-auto mt-4">
                <Slide direction="up" triggerOnce>
                    <div className="bg-[#f9d300] rounded-3xl p-12">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex-1">
                                <div className="text-black text-5xl font-semibold font-['Urbanist'] leading-[64px] mb-4">
                                    Fast-Track IAM Implementation
                                </div>
                                <p className="text-black text-lg font-normal font-['Urbanist'] leading-loose">
                                    Our Professional Labs Identity Governance Fast Track is a bundled solution offering that ensures a strong foundation for enterprise IAM initiatives. This comprehensive approach can drastically reduce planning and deployment times for initial IAM deployments while providing modular and flexible methods for building robust and secure IAM programs.
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="items-center justify-center flex">
                                    <img src="/Images/Group 265.png" alt="Fast Track Implementation" className="w-auto h-64"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* Solution Components */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Slide direction="up" triggerOnce>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-20 mb-20">
                        <div className="flex-1">
                            <div className="text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">
                                Comprehensive Solution Components
                            </div>
                            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-6">
                                Our solution includes essential components designed to streamline your identity management processes:
                            </div>
                            <ul className="space-y-3 text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold">•</span>
                                    Plug-and-play IAM policy and procedure toolkits
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold">•</span>
                                    Seamless integration with multiple standards & HRMS systems
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold">•</span>
                                    Non-employee account management modules
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold">•</span>
                                    Easily configurable approval workflow templates
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold">•</span>
                                    Common alerts and essential report sets
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="items-center justify-center flex">
                                <img src="/Images/Frame (14).png" alt="Solution Components" className="w-auto h-80"/>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* Automated Identity Manager */}
                <Slide direction="up" triggerOnce>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-20 mb-20">
                        <div className="flex-1">
                            <div className="items-center justify-center flex">
                                <img src="/Images/Frame (15).png" alt="Identity Manager" className="w-auto h-80"/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">
                                Automated Identity Manager
                            </div>
                            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                Our automated and policy-based solution manages user access across IT environments, driving effective identity management and governance across the enterprise. Using roles, accounts, and access permissions, it automates the creation, modification, and termination of user privileges throughout the entire user lifecycle, helping increase user efficiency, reduce IT administration costs, enforce security, and manage compliance.
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* Key Features Grid */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Slide direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-4">
                            Key Features & Capabilities
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Discover how our identity management solutions can transform your security posture
                        </p>
                    </div>
                </Slide>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Fade cascade>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-3">
                                Centralized Management
                            </div>
                            <div className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Centralize the process of managing user accounts and access permissions across your organization&apos;s operating systems and applications from a single platform.
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-3">
                                Automated Processes
                            </div>
                            <div className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Automatically create, modify, and terminate user privileges based on roles, accounts, and access permissions throughout the user lifecycle.
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-3">
                                Policy-Based Solutions
                            </div>
                            <div className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Deploy policy-based provisioning solutions to automate the process of granting access rights to employees, contractors, and business partners.
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-3">
                                Provisioning Support
                            </div>
                            <div className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Support comprehensive provisioning processes for providing, deploying, and tracking services or components across your enterprise environment.
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-3">
                                Enhanced Security
                            </div>
                            <div className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Enforce security and manage compliance effectively, whether in a closed enterprise environment or across virtual and extended enterprise networks.
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-3">
                                Cloud Integration
                            </div>
                            <div className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Service capabilities to move IAM to the cloud and manage cloud-based workloads with decentralized access control solutions for microservices.
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Outcomes Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Slide direction="up" triggerOnce>
                    <div className="bg-[#fffcec] rounded-3xl p-12">
                        <div className="text-center mb-8">
                            <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-4">
                                Transformative Outcomes
                            </h3>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                Experience these key benefits with our identity management solutions
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold text-xl">✓</span>
                                    <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
                                        Comprehensive governance of access controls across business functions
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold text-xl">✓</span>
                                    <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
                                        Transform IAM through preventive and detective controls
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold text-xl">✓</span>
                                    <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
                                        Onboard applications and ensure continuous audit readiness
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold text-xl">✓</span>
                                    <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
                                        Reduce operational costs while managing large amounts of data
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold text-xl">✓</span>
                                    <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
                                        Mitigate risks across geographic locations and distributed systems
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#f9d300] font-bold text-xl">✓</span>
                                    <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
                                        Build solutions based on open protocols for scale & interoperability
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* Newsletter Section */}
            <div className="w-full my-10">
                <div className="bg-[#fffcec] flex items-center justify-center p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl">
                        <div className="flex-1">
                            <div className="text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7 mb-2">
                                Stay Updated
                            </div>
                            <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px] mb-4">
                                Secure your digital identity with expert guidance.
                            </div>
                            <div className="flex">
                                <div className="flex-1 relative">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                    />
                                    <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                        Subscribe
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
                        </div>
                        <div className="h-80 w-auto">
                            <img src="/Images/Mail-bro 2.png" className="w-full h-full" alt="Newsletter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 