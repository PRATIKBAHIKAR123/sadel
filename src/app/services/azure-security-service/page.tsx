import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

export default function AzureService() {
    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h2 className=" text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                <span className="text-[#0b0d0e]">Azure</span> <span className="text-[#f9d300]">Security Service</span>
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                Proactive protection, real-time insights, and zero-trust controls—delivered through Microsofts leading cloud security platform and managed by our experts.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Getting Started
                                </Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            {/* Background Elements */}
                            <img src="/Images/Frame (13).png" alt="Background Element" />
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Cloud-Native Threat Protection</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Leverage Microsoft Defender for Cloud to continuously assess, detect, and defend against evolving cloud threats—across VMs, containers, databases, and storage. Our team configures and manages your Azure security posture so you stay a step ahead of attackers.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (14).png" alt="first section" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="items-center justify-center flex">
                            <img src="/Images/Frame (15).png" alt="first section" className="w-auto h-80" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Identity & Access Management (IAM)</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            We secure your workforce and customer identities using Azure Active Directory—enabling role-based access, smart policies, and seamless authentication across applications. Identity becomes your first line of defense, not your weakest link.
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-4">
                <div className="bg-[#f9d300] rounded-3xl p-12">
                    <div className="flex flex-cols md:flex-row items-center justify-between">
                        <div className="flex-1">
                            <div className="justify-start text-black text-5xl font-semibold font-['Urbanist'] leading-[64px]">Compliance-Ready Security Posture</div>
                            <p className="justify-start text-black text-lg font-normal font-['Urbanist'] leading-loose">
                                Get audit-ready with Azure Policy and Compliance Manager. We help ensure your cloud configurations meet required standards while minimizing risks of data exposure or fines. Peace of mind—backed by continuous assessments and alerts.
                            </p>

                        </div>
                        <div className="flex-1">
                            <div className="items-center justify-center flex ">
                                <img src="/Images/Group 265.png" alt="first section" className="w-auto h-64" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Managed Detection & Response (MDR)</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            With Microsoft Sentinel and our Managed SOC, threats are caught before they cause harm. From correlation to containment, we handle alerts so your team stays focused on business—not firefighting breaches.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (14).png" alt="first section" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-10">
                <div className="bg-[#fffcec] flex items-center justify-center p-6">
                    <div>
                        <div className="justify-start text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7">Sign up for updates</div>
                        <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Cut down on expenses while improving productivity.</div>
                        <div className="flex">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                />
                                <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                    Sign Up
                                </Button>
                            </div>

                        </div>
                        <div className="mt-3">
                            <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">You can unsubscribe at any time. Read our </span><span className="text-[#f9d300] text-base font-normal font-['Urbanist'] leading-loose">privacy policy</span><span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                        </div>
                    </div>
                    <div className="h-80 w-auto">
                        <img src="/Images/Mail-bro 2.png" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}