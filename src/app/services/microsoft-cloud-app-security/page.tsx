"use client"
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";

export default function MicrosoftCloudeApp() {
    const router = useRouter();

    const handleContactRedirect = () => {
        router.push('/contact-us');
    };

    const faqData = [
        {
            question: "What is Microsoft Cloud App Security?",
            answer: "Microsoft Cloud App Security (now known as Microsoft Defender for Cloud Apps) is a Cloud Access Security Broker (CASB) that provides comprehensive protection for your cloud applications. It helps secure data, detect cyber threats, and control access across cloud environments including Microsoft 365, AWS, Google Workspace, and other cloud services."
        },
        {
            question: "Are Microsoft apps secure?",
            answer: "Microsoft apps provide a solid security foundation, but they benefit from additional layers of protection. Sadel enhances Microsoft's built-in security with advanced threat detection, user behavior monitoring, and comprehensive compliance features to ensure your cloud applications remain secure against evolving threats."
        },
        {
            question: "How do I set up Microsoft Cloud App Security?",
            answer: "Setting up Microsoft Cloud App Security involves several steps including enabling the service in your Microsoft 365 admin center, configuring app connectors, setting up policies, and integrating with your existing security infrastructure. Our expert team can guide you through the entire setup process to ensure optimal configuration."
        },
        {
            question: "What is the difference between Defender for Cloud and Cloud App Security?",
            answer: "Microsoft Defender for Cloud focuses on infrastructure security for cloud resources, while Cloud App Security (Defender for Cloud Apps) specifically protects cloud applications and their data. Cloud App Security provides CASB capabilities including shadow IT discovery, data loss prevention, and user behavior analytics for cloud applications."
        }
    ];

    return (
        <div className="min-h-screen w-full">
            {/* Header Section */}
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12 max-w-7xl mx-auto">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-[64px] font-['Urbanist']">
                                Securing User Behavior with <span className="text-yellow-400">Microsoft Cloud App Security</span>
                            </h1>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                Microsoft Cloud App Security, now known as Microsoft Defender for Cloud Apps, is a comprehensive Cloud Access Security Broker (CASB) that protects your data, detects cyber threats, and controls access across cloud environments.
                            </p>
                            <div className="flex gap-4 flex-col sm:flex-row">
                                <Button
                                    onClick={handleContactRedirect}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold w-full sm:w-auto"
                                >
                                    Get a free 30-minute consultation with a Sadel expert
                                </Button>
                                {/* <Button variant="outline" className="w-full sm:w-auto">Learn More</Button> */}
                            </div>
                        </Fade>
                    </div>

                    {/* Right: Illustrations */}
                    <div className="relative w-full flex justify-center">
                        <Fade direction="left" triggerOnce>
                            <div className="relative w-full max-w-md">
                                {/* Background/Decorative Image (Code 1) */}
                                <img
                                    src="/Images/Frame (13).png"
                                    alt="Azure Background Shape"
                                    className="absolute top-0 left-0 w-full h-auto -z-10"
                                />
                                {/* Foreground/Main Image */}
                                <img
                                    src="/Images/microsoft-cloud-app.png"
                                    alt="Microsoft Cloud App Security"
                                    className="w-full h-auto relative z-10"
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>


            {/* Microsoft Cloud App Security Diagram Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            Microsoft Cloud App Security Components
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Side - Inputs/Features */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Data Retention & Compliance</h4>
                                            <p className="text-gray-600 text-sm">Ensure regulatory compliance and data governance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">⚙</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">App Connectors</h4>
                                            <p className="text-gray-600 text-sm">Seamless integration with cloud applications</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">☁</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Cloud App Catalog</h4>
                                            <p className="text-gray-600 text-sm">Comprehensive database of cloud applications</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">📊</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Office 365 Rich Insights</h4>
                                            <p className="text-gray-600 text-sm">Advanced analytics and reporting capabilities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Capabilities/Controls */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Security Capabilities</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">🔍</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Cloud Discovery</h4>
                                            <p className="text-gray-600 text-sm">Identify and monitor cloud application usage</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">🔄</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Sanctioned & Unsanctioned Apps</h4>
                                            <p className="text-gray-600 text-sm">Control access to approved and unapproved applications</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">👤</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Conditional Access Session Control</h4>
                                            <p className="text-gray-600 text-sm">Real-time session monitoring and control</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                        <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">🛡</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Policy Controls</h4>
                                            <p className="text-gray-600 text-sm">Comprehensive policy management and enforcement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* SASE and Cloud Security Section */}
            <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl bg-[#FFF5B9] mx-auto p-14 rounded-2xl sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Establishing Secure Access Service Edge (SASE) Architecture
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                In today&apos;s cloud-first world, organizations need partners to establish a comprehensive SASE architecture. The network and your security partner play crucial roles in cloud security, balancing the flexibility of cloud computing with the security risks it introduces.
                            </p>
                            <p className="text-gray-600 text-base sm:text-lg">
                                A Cloud App Security Broker (CASB) helps secure cloud services by enforcing security standards and acting as a &quot;gatekeeper&quot; for real-time access control across your cloud applications.
                            </p>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/Frame (20).png" alt="SASE Architecture" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Professional Labs Achievements Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How Sadel Helps Secure Your Cloud Environment
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Our expert team helps organizations uncover Shadow IT, monitor user activities, limit access to sensitive data, prevent information leaks, and ensure compliance with industry regulations.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700">Uncover and manage Shadow IT</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700">Monitor user activities in real-time</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700">Prevent sensitive information leaks</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700">Ensure regulatory compliance</span>
                                </div>
                            </div>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/Frame (21).png" alt="Cloud Security" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Microsoft Cloud App Security Tool Section */}
            <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            The Microsoft Cloud App Security Tool
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">👥</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Access Control</h3>
                                <p className="text-gray-600 text-sm">See who has access to what data and applications</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">📊</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Activity Monitoring</h3>
                                <p className="text-gray-600 text-sm">Keep tabs on what people are doing in your cloud apps</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🔒</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Data Protection</h3>
                                <p className="text-gray-600 text-sm">Use categories to keep private data safe and secure</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">📋</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Compliance</h3>
                                <p className="text-gray-600 text-sm">Guarantee observance of rules and regulations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Cloud Security Provider Selection Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            How to Select a Cloud Security Provider for SASE Objectives
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Streamlining</h3>
                                <p className="text-gray-600 text-sm">Enhance productivity and integrate existing tools seamlessly into your workflow</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Security</h3>
                                <p className="text-gray-600 text-sm">Identify and thwart the most dangerous threats facing modern organizations</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Scalability</h3>
                                <p className="text-gray-600 text-sm">Enable productivity and performance as your organization evolves and grows</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Support</h3>
                                <p className="text-gray-600 text-sm">Back up your long-term investments with comprehensive support and expertise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Effectiveness Section */}
            <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16 bg-[#FFFCEC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Does Microsoft Cloud App Security Work Well?
                        </h2>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Microsoft Cloud App Security provides robust protection for cloud applications, though similar capabilities can be achieved with alternative software solutions. However, MCAS offers excellent integration with other Microsoft tools, providing comprehensive protection across your entire Microsoft ecosystem.
                            </p>
                            <p className="text-gray-600 text-base sm:text-lg">
                                The effectiveness of MCAS depends on proper configuration and integration with your existing security infrastructure. Our team ensures optimal setup and ongoing management to maximize the security benefits.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Working with Apps Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Microsoft Cloud App Security: Working with a World of Apps
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
                            Microsoft Cloud App Security works with over 16,000 cloud applications, analyzing usage patterns, access logs, and proxy server records to provide comprehensive insights into your cloud environment. This extensive coverage ensures no application goes unmonitored.
                        </p>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Future-proof yourself. Discover security measures today.</h3>
                            <Button 
                                onClick={handleContactRedirect}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg"
                            >
                                Contact Sales
                            </Button>
                        </div>
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

            {/* Call to Action Section */}
            <Fade direction="up" triggerOnce>
                <div className="py-12 sm:py-16 bg-yellow-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to secure your cloud applications?
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                            Get expert consultation and implement comprehensive cloud app security solutions tailored to your organization&apos;s needs.
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
        </div>
    );
}
