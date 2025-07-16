import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

export default function DefenderForEndpoint() {
    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>

                            <div>
                                <h2 className=" text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                    <span className="text-[#0b0d0e]">Defender</span> <span className="text-[#f9d300]">For Endpoint</span>
                                </h2>
                                <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                    Detect, investigate, and neutralize endpoint threats before they escalate—using the power of Microsoft Defender for Endpoint. Our AI-driven technology works around the clock to uncover advanced attacks, while our cybersecurity experts ensure every alert is triaged.
                                </p>
                                <div className="flex gap-4">
                                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                        Getting Started
                                    </Button>
                                    <Button variant="outline">Learn More</Button>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>

                            {/* Background Elements */}
                            <img src="/Images/Frame (16).png" alt="Background Element" />
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Next-Gen Endpoint Protection</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Microsoft Defender for Endpoint goes beyond antivirus. It uses machine learning and behavior analytics to proactively identify and block sophisticated threats across Windows, macOS, Linux, Android, and iOS devices—all in real-time.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (17).png" alt="first section" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">

                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Endpoint Detection & Response (EDR)</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Our team leverages Defender’s EDR capabilities to hunt and analyze suspicious activity. With deep visibility into device behavior, we can trace attacks, understand impact, and act before damage is done.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex">
                            <img src="/Images/Frame (18).png" alt="first section" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 mt-8 items-center justify-center flex">
                <img src="/Images/Group 74.png" className="h-full w-auto" />
            </div>
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Automated Investigation & Remediation</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Let automation do the heavy lifting. Defender’s built-in automation rapidly investigates alerts, determines root causes, and takes corrective action—closing gaps before attackers can exploit them.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (19).png" alt="first section" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}