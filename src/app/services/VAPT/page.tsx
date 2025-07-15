import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

export default function VAPT() {
    return (
        <div className="flex flex-col gap-10 mb-12">
            {/* Hero Section */}
            <div className="h-screen bg-secondary">
                <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-8">
                    <Fade direction="down" className="flex flex-col">
                        <div className="text-center justify-start">
                            <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                                Safeguard Your Business with VAPT Solutions
                            </span>
                        </div>
                        <div className="text-center justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-loose">
                            Our Vulnerability Assessment & Penetration Testing (VAPT) services help you identify, analyze, and strengthen your IT infrastructure against evolving cyber threats. We deliver actionable insights and robust protection for your digital assets.
                        </div>
                        <div>
                            <Button>Book a Free Consultation</Button>{" "}
                            <Button variant={'outline'}>Learn More</Button>
                        </div>
                        <div className="relative mt-8">
                            <img
                                src="/Images/managedSOCImage.png"
                                alt="VAPT Hero Image"
                                className="mt-8 w-full max-w-lg h-auto"
                            />
                        </div>
                    </Fade>
                </div>
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
                                Comprehensive Vulnerability Assessment
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p>We thoroughly examine your network, systems, and applications to uncover potential security gaps. Our team leverages advanced tools and proven methodologies to deliver clear, actionable recommendations for strengthening your defenses.</p>
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
                                Real-World Penetration Testing
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p>Our security experts simulate real-world cyber-attacks to test your defenses. We identify exploitable weaknesses and provide prioritized guidance to help you remediate risks before attackers can exploit them.</p>
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
                                Web & Cloud Security Testing
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p>We assess your web applications and cloud environments for vulnerabilities, misconfigurations, and compliance gaps. Our tailored approach ensures your digital assets are secure and meet industry standards.</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-end justify-center pt-8">
                            <img
                                src="/Images/Frame.png"
                                alt="Web & Cloud Security"
                                className="w-full max-w-[320px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose VAPT Section */}
            <div className="max-w-7xl mx-auto p-3">
                <div className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Why Choose Our VAPT Services?</div>
            </div>
            <div className="flex flex-col gap-10 max-w-7xl mx-auto p-8">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Expertise Across the Board</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Our cybersecurity professionals bring deep experience in vulnerability assessment and penetration testing across diverse industries. We tailor our approach to your unique environment, ensuring relevant and effective results.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                            <img src="/Images/SOC first section.png" alt="Expertise" className="w-auto h-80"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Actionable, Transparent Reporting</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Receive clear, prioritized reports with practical recommendations. We help you understand your risks and provide a roadmap for remediation, so you can make informed security decisions.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                            <img src="/Images/second SOC.png" alt="Reporting" className="w-auto h-80"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Confidential & Ethical Process</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            We conduct all assessments with strict confidentiality and adhere to industry best practices. Your sensitive information is protected at every step, and our process is designed to minimize disruption to your operations.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                            <img src="/Images/SOC third section.png" alt="Confidentiality" className="w-auto h-80"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 