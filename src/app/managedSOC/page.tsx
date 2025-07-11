import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import TeachingTechCarousel from "./teachingTech";

export default function ManagedSOC(){
    return (
        <div className="flex flex-col gap-10 mb-12">
            <div className="h-screen bg-secondary">
                <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-8">
                    <Fade direction="down" className="flex flex-col">
                        <div className="text-center justify-start">
                            <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                                Protect Your Business with 24/7 Managed SOC
                            </span>
                        </div>
                        <div className="text-center justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-loose">
                            At Sadel Vision, our Managed Security Operations Center (SOC) delivers nonstop threat monitoring, rapid detection, and intelligent response solutions. By combining advanced analytics, expert security teams, and seamless cloud integration, we ensure your organization stays safe from cyber threats—so you can focus on driving innovation and growth.
                        </div>
                        <div>
                            <Button>Getting Started</Button>{" "}
                            <Button variant={'outline'}>Learn More</Button>
                        </div>
                        <div className="relative mt-8">
                            <img
                                src="Images/managedSOCImage.png"
                                alt="ManagedSOC Image"
                                className="mt-8 w-full max-w-lg h-auto"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-3">
                  <div className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Why Choose Our Managed SOC?</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
                    {/* Left Column - Two stacked cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 gap-6">
                        {/* First Card - Streamline data flow */}
                        <div className="bg-[#ffe9db] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                            <div className="flex-1 md:max-w-[50%]">
                                <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                    Real-Time Threat Detection & Monitoring
                                </div>
                                <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                    <p>Our SOC monitors your entire digital environment—networks, endpoints, and cloud—in real time. Using advanced analytics, we detect threats the moment they appear. This ensures continuous protection and early risk mitigation.</p>
                                </div>
                            </div>
                            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                                <img
                                    src="Images/a.png"
                                    alt="Streamline data flow"
                                    className="w-full h-auto object-contain max-w-[280px]"
                                />
                            </div>
                        </div>

                        {/* Second Card - Reduce waiting time */}
                        <div className="bg-[#fffcec] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                            <div className="flex-1 md:max-w-[50%]">
                                <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                    Easy Integration & Cost Efficiency
                                </div>
                                <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                    <p>Our solutions integrate smoothly with your existing systems—no extra hardware needed. You get enterprise-level protection tailored to your setup. Its effective, scalable security at a manageable cost.</p>
                                </div>
                            </div>
                            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                                <img
                                    src="Images/a-1.png"
                                    alt="Reduce waiting time"
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
                                    Expert-Led Incident Response
                                </div>
                                <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                    <p>When threats are detected, our experienced security analysts respond immediately. We investigate, contain, and resolve incidents with precision and speed. This minimizes impact and keeps your operations secure.</p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-end justify-center pt-8">
                                <img
                                    src="Images/Frame.png"
                                    alt="The right access for the right team"
                                    className="w-full max-w-[320px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <TeachingTechCarousel/>

                <div className="max-w-7xl mx-auto p-8">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Continuous Vigilance</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Cybersecurity begins with constant awareness. Our Security Operations Center (SOC) operates 24/7, continuously collecting, analyzing, and correlating data from multiple sources—such as system logs, network activity, and user behavior. This proactive monitoring allows us to detect threats at the earliest stages, even before they escalate into real risks.Outcome: Early detection of threats, minimized response time, and significantly reduced attack dwell periods.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                        <img src="Images/SOC first section.png" alt="first section" className="w-auto h-80"/>
                    </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Continuous Vigilance</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Cybersecurity begins with constant awareness. Our Security Operations Center (SOC) operates 24/7, continuously collecting, analyzing, and correlating data from multiple sources—such as system logs, network activity, and user behavior. This proactive monitoring allows us to detect threats at the earliest stages, even before they escalate into real risks.Outcome: Early detection of threats, minimized response time, and significantly reduced attack dwell periods.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                        <img src="Images/second SOC.png" alt="first section" className="w-auto h-80"/>
                    </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Scalable Security-as-a-Service</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Your business evolves—and so should your security. Our flexible, cloud-enabled SOC model allows you to scale protection levels based on current needs and budgets. There’s no need for expensive hardware or long-term contracts. You get the protection you need today, with the freedom to adapt tomorrow.Outcome: A cost-effective, flexible security solution that grows with your organization—without overcommitting resources.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                        <img src="Images/SOC third section.png" alt="first section" className="w-auto h-80"/>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}