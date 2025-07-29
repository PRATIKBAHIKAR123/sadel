"use client"
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";

export default function EmailSecurityPage() {
    const router = useRouter();

   

    const handleContactRedirect = () => {
        router.push('/contact-us');
    };

    const faqData = [
        {
            question: "What is the best email security service?",
            answer: "The best email security service depends on your organization's specific needs. AFAQ offers comprehensive email protection including advanced threat detection, data loss prevention, encryption, and user training. Our solutions integrate seamlessly with Microsoft 365 and Google Workspace while providing enterprise-grade security features."
        },
        {
            question: "What are the different types of email security?",
            answer: "Email security encompasses multiple layers including spam filtering, phishing protection, malware detection, data loss prevention (DLP), encryption, authentication, and user awareness training. AFAQ provides all these protections through our integrated email security platform designed for modern business environments."
        },
        {
            question: "How much does email security cost?",
            answer: "Email security costs vary based on your organization size, deployment model, and specific requirements. AFAQ offers flexible pricing models including per-user licensing and enterprise packages. Contact our team for a customized quote that fits your budget and security needs."
        },
        {
            question: "Does Office 365 have email security?",
            answer: "While Office 365 includes basic email security features, they may not be sufficient for comprehensive protection against advanced threats. AFAQ enhances Office 365 security with additional layers including advanced threat protection, better phishing detection, data loss prevention, and user training programs."
        }
    ];

    return (
        <div className="min-h-screen w-full">
            {/* Header Section */}
            <div className="bg-[#FFFCEC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-8">
                    <Fade direction="up" triggerOnce>
                        {/* Left: Text */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Beware of phishing. <span className="text-[#FFD700]">Protect Email</span>
                            </h1>
                            <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-xl">
                                AFAQ Email Security protects your inbox with advanced threat detection, comprehensive data protection, and seamless integration with your existing email infrastructure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                                <Button 
                                    onClick={handleContactRedirect}
                                    className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto"
                                >
                                    Get a free consultation with a AFAQ expert
                                </Button>
                                {/* <Button variant="outline" className="w-full sm:w-auto">Learn More</Button> */}
                            </div>
                        </div>
                    </Fade>
                    {/* Right: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <Fade direction="left" triggerOnce>
                            <img src="/Images/Email.png" alt="Email Security" className="w-full max-w-md h-auto" />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* People-Centric Approach Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Take a people-centric approach to email security
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Cybercriminals increasingly target people rather than systems. Our comprehensive email security solution provides proper controls against business email compromise, malware, ransomware, and credential phishing attacks.
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Get Peace of Mind from Data Security:</h3>
                            <p className="text-gray-600 text-base sm:text-lg">
                                AFAQ Email Security scans messages and attachments for sensitive material, including seamlessly integrated encryption, to safeguard confidential information and simplify compliance requirements.
                            </p>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/share1.png" alt="Email Security" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Prevent Data Loss Section */}
            <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl bg-[#FFF5B9] mx-auto p-14 rounded-2xl sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Illustration */}
                        <div className="flex justify-center order-2 md:order-1">
                            <img src="/Images/access.png" alt="Data Loss Prevention" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Right: Text */}
                        <div className="order-1 md:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Prevent Data Loss
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Build cross-DLP (Data Loss Prevention) rules to protect sensitive information like financials, confidential material, health information, and personally identifiable information in all emails and attachments.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Encrypt and Authentication Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl bg-[#FFFCEC] mx-auto p-14 rounded-2xl sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Encrypt and Authentication
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Implement email encryption and digital signatures for sender identity authentication (S/MIME), with various customized encryption options including TLS encryption, attachment and message encryption (PDF and Office), or add-on complete web portal encryption.
                            </p>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/sharing.png" alt="Encryption" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Deployment Flexibility Section */}
            <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Secure email with the best deployment flexibility in the industry
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8 mt-8">
                                <div className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Protection</h3>
                                    <p className="text-gray-600">Safeguards against all email assaults, including phishing, ransomware, and money fraud.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Industry-Leading Efficacy</h3>
                                    <p className="text-gray-600">Offers industry-leading efficacy with or without a gateway deployment.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">AI-Powered Detection</h3>
                                    <p className="text-gray-600">Detects the most complex cyberattacks with advanced AI technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Benefits Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl text-[#FFD700] sm:text-3xl md:text-4xl font-bold  mb-8 text-center">
                            BENEFITS OF EMAIL SECURITY FOR ENTERPRISES
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6 max-w-7xl mx-auto  list-disc list-inside">
                            <li className="text-gray-900 font-medium">Real-time threat protection</li>
                            <li className="text-gray-900 font-medium">Protection against zero-day threats</li>
                            <li className="text-gray-900 font-medium">Device Access Control</li>
                            <li className="text-gray-900 font-medium">Communication Confidentiality</li>
                            <li className="text-gray-900 font-medium">Span And phishing Protection</li>
                            <li className="text-gray-900 font-medium">Identification of suspicious user behavior</li>
                            <li className="text-gray-900 font-medium">Protection against ransomware attacks</li>
                        </ul>
                    </div>
                </div>
            </Fade>



            {/* Solutions Section */}
            <Fade direction="right" triggerOnce>
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            More proactive, more intelligent, easier, and faster email security solutions
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-8 text-center max-w-4xl mx-auto">
                            Email remains the primary communication and attack vector for organizations. Our robust protection defends against various email-based assaults including phishing, spam, malware, ransomware, and brand impersonation, especially for cloud service providers like Microsoft 365 and Google Workspace.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Security Cloud Gateway</h3>
                                <p className="text-gray-600 mb-4">
                                    Perfect for businesses with sophisticated email systems. Features configurable policies, granular controls, awareness training, brand/supply chain protection, and open APIs with pre-built connectors.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Security, Cloud Integrated</h3>
                                <p className="text-gray-600 mb-4">
                                    Optimized for M365 environments with quick deployment, no MX record changes, simplified administration, intuitive homepage, and one-click threat remediation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Benefits of Services Section */}
            <Fade direction="left" triggerOnce>
                <div className="py-12 sm:py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            Benefits of Email Security Services
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Reduce complexity</h3>
                                <p className="text-gray-600">Outsource tactical email security needs to our expert team.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Monitoring and management</h3>
                                <p className="text-gray-600">24/7 security analysts and responders monitoring your email infrastructure.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Email security best practices</h3>
                                <p className="text-gray-600">Frequent evaluations and proactive recommendations for optimal security.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Support email compliance</h3>
                                <p className="text-gray-600">Implementing usage policies and ensuring regulatory compliance.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Extended help in email investigations</h3>
                                <p className="text-gray-600">Ongoing protection and responses to advanced email attacks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Call to Action Section */}
            <Fade direction="up" triggerOnce>
                <div className="py-12 sm:py-16 bg-[#FFFCEC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to secure your email infrastructure?
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                            Get expert consultation and implement comprehensive email security solutions tailored to your organization&apos;s needs.
                        </p>
                        <Button 
                            onClick={handleContactRedirect}
                            className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-4 rounded-lg font-semibold text-lg"
                        >
                            Book Email Security Meeting NOW
                        </Button>
                    </div>
                </div>
            </Fade>

            {/* FAQ Section */}
            <Fade direction="left" triggerOnce>
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
            {/* <div className="bg-[#8a78bd] py-8 sm:py-12">
                <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                    <div className="flex-1 text-center lg:text-left">
                        <Fade direction="left" triggerOnce>
                            <p className="text-primary text-xs sm:text-sm">Sign up for updates</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 font-['Urbanist']">Stay informed about email security threats and solutions.</h2>
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
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#8a78bd] focus:border-transparent text-sm sm:text-base"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSubscribe}
                                        className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-200 text-sm sm:text-base"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-400 text-xs mt-2">You can unsubscribe anytime. Read our <span className="text-primary">privacy policy</span></p>
                        </Fade>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Fade direction="right" triggerOnce>
                            <Image
                                src="/Images/Mail-bro.png"
                                alt="Call to Action"
                                width={320}
                                height={280}
                                className="w-full max-w-[280px] sm:max-w-[320px] h-auto"
                            />
                        </Fade>
                    </div>
                </div>
            </div> */}
        </div>
    );
} 