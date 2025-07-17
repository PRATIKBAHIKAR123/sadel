"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
// import TeachingTechCarousel from "./teachingTech";
import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DefenderForIdentityPage() {
    // const [email, setEmail] = useState('');
    const router = useRouter();

    // const handleSubscribe = () => {
    //     console.log('Subscribing email:', email);
    //     setEmail('');
    // };

    const handleContactRedirect = () => {
        router.push('/contact-us');
    };

    const faqData = [
        {
            question: "What is Microsoft Defender for Identity?",
            answer: "Microsoft Defender for Identity (formerly Azure ATP) is a cloud-based security solution that uses signals from on-premises Active Directory to detect and investigate advanced threats, compromised identities, and harmful insider acts. It provides comprehensive identity protection through behavioral analytics and machine learning."
        },
        {
            question: "How do I turn on Microsoft Defender for Identity?",
            answer: "To enable Microsoft Defender for Identity, you need to install sensors on your domain controllers, configure the service in the Microsoft 365 Defender portal, and set up the necessary permissions. Sadel can help you with the complete setup process, including sensor deployment and policy configuration."
        },
        {
            question: "What is the benefit of a Defender for Identity?",
            answer: "Defender for Identity provides real-time monitoring of user behavior, detects advanced attacks across the cyber kill chain, identifies compromised identities, and offers detailed security incident timelines. It helps organizations protect against sophisticated threats and insider risks while maintaining compliance."
        },
        {
            question: "What is the difference between Defender for Identity and Identity Protection?",
            answer: "Defender for Identity focuses on on-premises Active Directory environments and provides deep behavioral analytics, while Identity Protection is part of Azure AD and focuses on cloud-based identity risks. Defender for Identity offers more comprehensive monitoring of domain controller activities and network-based threats."
        }
    ];

    return (
        <div >
            {/* Header Section */}
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h2 className=" text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                <span className="text-[#0b0d0e]">Evaluate and Track User Activity and Behaviour</span>
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
Microsoft Defender for Identity (formerly Azure ATP) is a cloud-based security solution that leverages signals from your on-premises Active Directory to detect and investigate advanced threats, compromised user identities, and malicious insider activities.                            </p>
                            <div className="flex gap-4">
                                <Link href="/contact-us">
                                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                        Get a free 30-minute consultation with a Sadel expert
                                    </Button>
                                </Link>
                                {/* <Button variant="outline">Learn More</Button> */}
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            {/* Background Elements */}
                            <img src="/Images/Frame (13).png" alt="Azure Security Services" />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Key Capabilities Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Advanced Identity Protection Capabilities
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
                                Our security professionals and analysts struggling to detect advanced attacks in hybrid environments can benefit from Microsoft Defender for Identity&apos;s comprehensive monitoring capabilities.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                {/* <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <img src="/Images/security.png" alt="Analytics" className="w-8 h-8" />
                                </div> */}
                                <h3 className="font-bold text-gray-900 mb-2">Learning-based Analytics</h3>
                                <p className="text-gray-600 text-sm">Monitors user and entity activity and behavior patterns</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                {/* <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <img src="/Images/security.png" alt="Login Protection" className="w-8 h-8" />
                                </div> */}
                                <h3 className="font-bold text-gray-900 mb-2">Active Directory Protection</h3>
                                <p className="text-gray-600 text-sm">Safeguards Active Directory login information</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                {/* <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <img src="/Images/security.png" alt="Threat Detection" className="w-8 h-8" />
                                </div> */}
                                <h3 className="font-bold text-gray-900 mb-2">Advanced Threat Detection</h3>
                                <p className="text-gray-600 text-sm">Identifies malicious behavior and sophisticated attacks</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                {/* <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <img src="/Images/security.png" alt="Incident Response" className="w-8 h-8" />
                                </div> */}
                                <h3 className="font-bold text-gray-900 mb-2">Clear Incident Details</h3>
                                <p className="text-gray-600 text-sm">Provides chronological security incident timelines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Security Lifecycle Section */}
            {/* <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16 bg-[#FFF5B9]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Complete Security Lifecycle
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-8">
                                Microsoft Defender for Identity integrates with Office 365 to provide comprehensive protection across all phases of the security lifecycle.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                            <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <img src="/Images/security.png" alt="Secure Posture" className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Secure Posture</h3>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <img src="/Images/security.png" alt="Prevention" className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Prevention</h3>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <img src="/Images/security.png" alt="Detection" className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Detection</h3>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <img src="/Images/security.png" alt="Investigation" className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Investigation</h3>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <img src="/Images/security.png" alt="Response" className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Response</h3>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <img src="/Images/security.png" alt="Training" className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Training</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade> */}

            {/* What Does Defender Do Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                What Does Microsoft Defender for Identity Do?
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Microsoft&apos;s Defender for Identity technology monitors cyber threats across various attack phases, providing comprehensive protection against sophisticated attacks.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-2">Lateral Movement Cycle</h3>
                                    <p className="text-gray-600 text-sm">Monitors how hackers increase their potential entry points within your network infrastructure.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-2">Reconnaissance</h3>
                                    <p className="text-gray-600 text-sm">Detects when attackers learn your environment&apos;s structure, assets, and entities to prepare for subsequent attack stages.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-2">Domain Dominance (Persistence)</h3>
                                    <p className="text-gray-600 text-sm">Identifies when attackers obtain necessary data to continue their campaign using previously compromised accounts and credentials.</p>
                                </div>
                            </div>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/Frame (21).png" alt="Defender Architecture" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Sophisticated Assaults Section */}
            <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16 bg-[#FFFCEC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Identifying and Analyzing Sophisticated Assaults
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto">
                                Whether your infrastructure is on-premises, in the cloud, or combined, Microsoft Defender for Identity can help you identify and analyze sophisticated assaults and insider threats to keep malicious actors out.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Behavioral Baseline</h3>
                                <p className="text-gray-600 mb-4">
                                    Defender for Identity establishes a behavioral baseline for each user using network permissions and group membership data. Its adaptive built-in intelligence recognizes anomalies and provides insights into malicious activities.
                                </p>
                                <p className="text-gray-600">
                                    Patented sensors monitor enterprise domain controllers, revealing user actions on any device across your network infrastructure.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Three-Pronged Approach</h3>
                                <p className="text-gray-600 mb-4">
                                    Defender for Identity uses a comprehensive approach covering reconnaissance, lateral movement cycle, and persistence to scan network traffic for signs of account attacks and suspicious behavior.
                                </p>
                                <p className="text-gray-600">
                                    Combined with Defender for Endpoint, it provides complete visibility across your entire security landscape through a unified interface.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Benefits Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            Microsoft Defender for Identity from Sadel offers the following benefits:
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Attack Detection</h3>
                                <p className="text-gray-600 text-sm">
                                    Detects and investigates various network intrusion methods, including Pass-the-Ticket and Pass-the-Hash attacks, DNS reconnaissance, odd protocols, and malicious service creation.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Protection</h3>
                                <p className="text-gray-600 text-sm">
                                    Safeguards businesses from both common and uncommon attack methods through advanced behavioral analytics and machine learning.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Kill Chain Coverage</h3>
                                <p className="text-gray-600 text-sm">
                                    Uncovers sophisticated assaults and insider threats by focusing on multiple stages of the cyber-attack kill chain (reconnaissance, lateral movement cycle, and domain dominance).
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Monitoring Capabilities</h3>
                                <p className="text-gray-600 text-sm">
                                    Enables the use of dummy accounts for monitoring and recording suspicious network activities, providing comprehensive visibility into potential threats.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Call to Action Section */}
            <Fade direction="up" triggerOnce>
                <div className="py-12 sm:py-16 bg-yellow-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to secure your identity infrastructure?
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                            Get expert consultation and implement comprehensive identity protection solutions tailored to your organization&apos;s needs.
                        </p>
                        <Button
                            onClick={handleContactRedirect}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg"
                        >
                            Get a free 30-minute consultation with a Sadel expert
                        </Button>
                    </div>
                </div>
            </Fade>

            {/* FAQ Section */}
            <Fade direction="up" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <FAQAccordion faqs={faqData} />
                    </div>
                </div>
            </Fade>

            {/* <TeachingTechCarousel /> */}

            {/* Newsletter Section */}
            {/* <div className="bg-yellow-50 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                    <div className="flex-1 text-center lg:text-left">
                        <Fade direction="left" triggerOnce>
                            <p className="text-yellow-400 text-xs sm:text-sm">Sign up for updates</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 font-['Urbanist']">Stay informed about identity security threats and solutions.</h2>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                                    Subscribe to Our Newsletter
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                                    <div className="flex-1 relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSubscribe}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-200 text-sm sm:text-base"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-400 text-xs mt-2">You can unsubscribe anytime. Read our <span className="text-yellow-400">privacy policy</span></p>
                        </Fade>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Fade direction="right" triggerOnce>
                            <img src="/Images/Mail-bro 2.png" alt="Newsletter" className="w-full max-w-[280px] sm:max-w-[320px] h-auto" />
                        </Fade>
                    </div>
                </div>
            </div> */}
        </div>
    );
}