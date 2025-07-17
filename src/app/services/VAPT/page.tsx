"use client"
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";

export default function VAPT() {
    const router = useRouter();

    const handleContactRedirect = () => {
        router.push('/contact-us');
    };

    const faqData = [
        {
            question: "What is the difference between Vulnerability Assessment and Penetration Testing?",
            answer: "Vulnerability Assessment is a systematic review of your IT infrastructure to identify potential security weaknesses, while Penetration Testing involves actively attempting to exploit these vulnerabilities in a controlled environment. VAPT combines both approaches to provide comprehensive security insights and validate the effectiveness of your defenses."
        },
        {
            question: "How often should VAPT be conducted?",
            answer: "We recommend conducting VAPT assessments at least annually, or more frequently for high-risk environments. Additional assessments should be performed after major system changes, new deployments, or when compliance requirements demand it. Our team can help determine the optimal frequency based on your specific risk profile and industry requirements."
        },
        {
            question: "Is data security maintained during the VAPT process?",
            answer: "Absolutely. We maintain strict confidentiality throughout all VAPT engagements. Our team follows industry best practices and ethical guidelines, ensuring your sensitive information is protected at every step. We sign comprehensive non-disclosure agreements and use secure communication channels for all project-related activities."
        },
        {
            question: "Can VAPT be customized for different environments like cloud or web applications?",
            answer: "Yes, our VAPT services are fully customizable to address your specific environment and requirements. We offer specialized assessments for cloud platforms, web applications, mobile apps, IoT devices, and traditional on-premises infrastructure. Each assessment is tailored to your unique technology stack and business needs."
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12 max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h2 className="text-5xl font-bold text-[#0e0f10] leading-[64px] font-['Urbanist'] mb-6">
                                Vulnerability Assessment and Penetration Testing (VAPT) Services
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                At Sadel, we specialize in comprehensive VAPT services to identify, analyze, and fortify your IT infrastructure against potential security vulnerabilities. Our mission is to ensure robust and resilient digital defenses for your business.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    onClick={handleContactRedirect}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold"
                                >
                                    Get a free 30-minute consultation with a Sadel expert
                                </Button>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative w-full flex justify-center">
                        <Fade direction="left" triggerOnce>
                            <div className="relative w-full max-w-md">
                                {/* Background Decorative Image */}
                                <img
                                    src="/Images/Frame (13).png"
                                    alt="Background Illustration"
                                    className="absolute top-0 left-0 w-full h-auto -z-10"
                                />
                                {/* Foreground/Main Image */}
                                <img
                                    src="/Images/managedSOCImage.png"
                                    alt="VAPT Hero Image"
                                    className="w-full h-auto relative z-10"
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>


            {/* Introduction Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Introduction</h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed">
                            At Sadel, we specialize in offering comprehensive Vulnerability Assessment and Penetration Testing (VAPT) services. Our mission is to identify, analyze, and fortify against potential security vulnerabilities in your IT infrastructure, ensuring robust and resilient digital defenses.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* VAPT Services Section */}
            <div className="max-w-7xl mx-auto p-3">
                <div className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Our VAPT Services</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
                {/* Left Column - Two stacked cards */}
                <div className="lg:col-span-2 grid grid-cols-1 gap-6">
                    {/* First Card - Vulnerability Assessment */}
                    <div className="bg-[#ffe9db] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                        <div className="flex-1 md:max-w-[50%]">
                            <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                1. Vulnerability Assessment
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p><strong>Overview:</strong> We perform exhaustive assessments to pinpoint vulnerabilities in your network, systems, and applications.</p>
                                <p><strong>Approach:</strong> Utilizing state-of-the-art tools and methodologies, our team evaluates your IT environment for known vulnerabilities, delivering a detailed report and actionable recommendations.</p>
                            </div>
                        </div>
                        <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                            <img
                                src="/Images/a.png"
                                alt="Vulnerability Assessment"
                                className="w-full h-auto object-contain max-w-[280px]"
                            />
                        </div>
                    </div>
                    {/* Second Card - Penetration Testing */}
                    <div className="bg-[#fffcec] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                        <div className="flex-1 md:max-w-[50%]">
                            <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                2. Penetration Testing
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p><strong>Overview:</strong> Our expert team simulates cyber-attacks on your systems to assess the effectiveness of your security measures.</p>
                                <p><strong>Methodology:</strong> Employing ethical hacking techniques, we uncover weaknesses that could be exploited, ensuring your defenses are up-to-date and effective.</p>
                            </div>
                        </div>
                        <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                            <img
                                src="/Images/a-1.png"
                                alt="Penetration Testing"
                                className="w-full h-auto object-contain max-w-[280px]"
                            />
                        </div>
                    </div>
                </div>
                {/* Right Column - Tall card */}
                <div className="lg:col-span-1">
                    <div className="bg-[#fff5b9] rounded-3xl p-8 h-full flex flex-col justify-between min-h-[580px] lg:min-h-[620px]">
                        <div className="mb-8">
                            <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                3. Web Application Security Testing
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p><strong>Overview:</strong> Specialized testing for web applications to detect security flaws and vulnerabilities.</p>
                                <p><strong>Testing Scope:</strong> We focus on common vulnerabilities like SQL injection, Cross-Site Scripting (XSS), and adherence to OWASP Top 10 standards.</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-end justify-center pt-8">
                            <img
                                src="/Images/Frame.png"
                                alt="Web Application Security"
                                className="w-full max-w-[320px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
                <div className="bg-[#ffe9db] rounded-3xl p-8">
                    <div className="text-[#0b0d0e] text-2xl md:text-3xl font-semibold font-['Urbanist'] leading-tight mb-4">
                        4. Cloud Security Assessment
                    </div>
                    <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                        <p><strong>Overview:</strong> Tailored evaluations for cloud environments to ensure security and compliance.</p>
                        <p><strong>Service Details:</strong> Examination of cloud configuration, security controls, and data protection measures to mitigate cloud-specific threats.</p>
                    </div>
                </div>
                <div className="bg-[#fffcec] rounded-3xl p-8">
                    <div className="text-[#0b0d0e] text-2xl md:text-3xl font-semibold font-['Urbanist'] leading-tight mb-4">
                        5. Active Directory VAPT
                    </div>
                    <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                        <p><strong>Overview:</strong> Targeted assessment and testing of your Active Directory setup.</p>
                        <p><strong>Assessment Focus:</strong> We check for misconfigurations, potential privilege escalation, and other security loopholes in your AD environment.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose VAPT Section */}
            <div className="max-w-7xl mx-auto p-3">
                <div className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Why Choose Sadel for VAPT?</div>
            </div>
            <div className="flex flex-col gap-10 max-w-7xl mx-auto p-8">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Expert Team</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Our cybersecurity professionals are highly experienced in diverse aspects of VAPT, bringing deep expertise across various industries and technology stacks.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                            <img src="/Images/SOC first section.png" alt="Expert Team" className="w-auto h-80"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Tailored Solutions</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            We provide customized testing based on your unique business requirements, ensuring relevant and actionable results that address your specific security challenges.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                            <img src="/Images/second SOC.png" alt="Tailored Solutions" className="w-auto h-80"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">In-depth Reporting</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Our reports offer detailed insights into vulnerabilities with practical remediation strategies, helping you understand risks and prioritize security improvements.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                            <img src="/Images/SOC third section.png" alt="In-depth Reporting" className="w-auto h-80"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Ethical and Confidential</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            We conduct all assessments ethically and maintain confidentiality throughout the process, ensuring your sensitive information is protected at every step.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                            <img src="/Images/security.png" alt="Ethical and Confidential" className="w-auto h-80"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px] mb-8">FAQs</h2>
                        <FAQAccordion faqs={faqData} />
                    </div>
                </Fade>
            </div>

            {/* Call to Action Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-[#fffcec] rounded-3xl p-12 text-center">
                        <h2 className="text-[#0e0f10] text-4xl font-bold font-['Urbanist'] mb-6">
                            Ready to Secure Your Infrastructure?
                        </h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] mb-8 max-w-2xl mx-auto">
                            Get expert consultation and implement comprehensive VAPT solutions tailored to your organization&apos;s needs.
                        </p>
                        <Button 
                            onClick={handleContactRedirect}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg"
                        >
                            Get a free 30-minute consultation with a Sadel expert
                        </Button>
                    </div>
                </Fade>
            </div>
        </div>
    );
} 