import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

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
                                    <span className="text-[#0b0d0e]">Fix problems with installing Defender on endpoints</span>
                                </h2>
                                <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                    Microsoft provides businesses with an endpoint security platform that can identify, probe, and avert sophisticated attacks. Using several features of Microsoft Azure and Windows 10 enables companies to react quickly to security threats.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                                            Get a free 30-minute consultation with a AFAQ expert
                                        </Button>
                                    </Link>
                                    {/* <Button variant="outline">Learn More</Button> */}
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            {/* Background Elements */}
                            <img src="/Images/Frame (16).png" alt="Microsoft Defender for Endpoint" />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Microsoft Defender Technologies Section */}
            <div className="max-w-7xl  mx-auto p-8 mt-10">
                <Fade direction="left" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Microsoft Defender for Endpoint Technologies to Safeguard Business Networks
                        </h3>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            title: "Endpoint Behavioral Sensors",
                            description: "Capture and process behavioral signals directly from the Windows 10 OS. These sensors transmit information to an isolated and private cloud instance of Microsoft Defender for Endpoint for real-time threat analysis."
                        },
                        {
                            title: "Cloud Security Analytics",
                            description: "Microsoft uses big data analytics and machine learning technologies to convert behavioral signals into threat detections, insights, and suggested countermeasures for proactive defense."
                        },
                        {
                            title: "Threat Intelligence",
                            description: "Microsoft&apos;s threat hunters and security teams deliver insights from threat intelligence gathered from partners and across the ecosystem to identify attacker tactics, methods, and procedures (TTPs)."
                        }
                    ].map((technology, index) => (
                        <Fade direction="right" key={index} delay={index * 100}>
                            <div className="bg-white min-h-[230px] rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-lg font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                    {technology.title}
                                </h4>
                                <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                    {technology.description}
                                </p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* How It Works Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="left" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            How Does It Work?
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                            Microsoft Defender for Endpoint integrates seamlessly with your existing Microsoft ecosystem to provide comprehensive endpoint protection through a unified platform.
                        </p>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { step: "1", title: "Onboard Device to MDE", description: "Seamlessly integrate devices into the Microsoft Defender for Endpoint ecosystem" },
                        { step: "2", title: "Azure AD Trust Established", description: "Secure authentication and identity management through Azure Active Directory" },
                        { step: "3", title: "Report to MEM", description: "Centralized device management and policy enforcement via Microsoft Endpoint Manager" },
                        { step: "4", title: "Policy & Status", description: "Real-time policy application and status monitoring across all endpoints" }
                    ].map((process, index) => (
                        <Fade direction="up" key={index} delay={index * 100}>
                            <div className="bg-[#0b0d0e] text-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="text-3xl font-bold mb-3 text-primary">{process.step}</div>
                                <h4 className="text-lg font-bold mb-3 font-['Urbanist']">{process.title}</h4>
                                <p className="text-sm text-gray-300">{process.description}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* Automation and Remediation Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            AFAQ Endpoint Protection: Preventing, Detecting, and Protecting


                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                            AFAQ delivers a comprehensive security solution that combines next-generation antivirus protection, automated incident response, and advanced Endpoint Detection and Response (EDR) capabilities. Embracing an “all-in-one” security approach, it streamlines the deployment of a modern cybersecurity toolkit. Beyond traditional endpoint protection, AFAQ extends its capabilities with integrated network analytics, User and Entity Behavior Analytics (UEBA), and deception-based defense technologies.                        </p>
                    </div>
                </Fade>
            </div>

            {/* Next-Gen Endpoint Protection */}
            {/* <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Next-Gen Endpoint Protection</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Microsoft Defender for Endpoint goes beyond traditional antivirus solutions. It uses machine learning and behavior analytics to proactively identify and block sophisticated threats across Windows, macOS, Linux, Android, and iOS devices—all in real-time.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (17).png" alt="Next-Gen Endpoint Protection" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Endpoint Detection & Response (EDR)</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Our team leverages Defender&apos;s EDR capabilities to hunt and analyze suspicious activity. With deep visibility into device behavior, we can trace attacks, understand impact, and act before damage is done.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex">
                            <img src="/Images/Frame (18).png" alt="Endpoint Detection & Response" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Microsoft Defender Funnel Diagram */}
            {/* <div className="max-w-7xl mx-auto p-4 mt-8 items-center justify-center flex">
                <img src="/Images/Group 74.png" className="h-full w-auto" alt="Microsoft Defender for Endpoint Funnel" />
            </div> */}

            {/* Automated Investigation & Remediation */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-3">The Professional Labs Defender for Endpoint platform includes the following features:

                        </div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <strong>Zero-day threat protection</strong> – Leverages User and Entity Behavior Analytics (UEBA) to identify and prevent previously unknown threats in real-time.
                                </li>
                                <li>
                                    <strong>Comprehensive monitoring and control</strong> – Includes asset management, endpoint vulnerability assessment, application control, auditing, logging, and user activity monitoring.
                                </li>
                                <li>
                                    <strong>Automated response orchestration</strong> – Uses predefined playbooks and remote manual interventions to remediate compromised endpoints, networks, and user accounts.
                                </li>
                                <li>
                                    <strong>Deception-based defense</strong> – Employs honeypots to lure attackers into fake environments, minimizing damage and gathering intelligence on attack techniques.
                                </li>
                                <li>
                                    <strong>Advanced network analytics</strong> – Detects lateral movement, unusual login activity, and suspicious network connections to prevent threat propagation.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (19).png" alt="Automated Investigation & Remediation" className="w-auto h-80" />
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Strengths and Limitations Analysis */}
            <div className="max-w-7xl mx-auto p-4">
                <Fade direction="left" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            A Strengths and Limitations Analysis of Microsoft Defender for Endpoints
                        </h3>
                    </div>
                </Fade>

                <Fade direction="up" triggerOnce>
                    <ul className="list-decimal list-inside text-[#5c5f6e] space-y-4 text-base font-medium">
                        {[
                            "Basic edition is free on all Windows devices",
                            "Compatibility with numerous endpoint platforms including Windows 10, Windows Server, Linux, macOS, iOS, and Android",
                            "Several Microsoft applications protected by a single license including Exchange Online, SharePoint, Microsoft Teams, OneDrive, Azure Active Directory, and Azure Identities",
                            "Capable of identifying indicators of compromise (IoC) based on MITRE definitions and mapped to the MITRE ATT&CK knowledge base",
                            "Utilizes data collected from billions of Office 365 application signals",
                            "Generates a graphical timeline of an assault by merging all data associated with the same attack",
                            "Enhanced threat investigation via the KQL query language",
                            "180 days of retention for log data"
                        ].map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Fade>
            </div>


            {/* Call to Action */}
            <div className="max-w-7xl mx-auto p-8 text-center">
                <Fade direction="up" triggerOnce>
                    <Link href="/contact-us">
                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                            Get Endpoint Protection Now.
                        </Button>
                    </Link>
                </Fade>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="left" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            FAQ&apos;s
                        </h3>
                    </div>
                </Fade>

                <FAQAccordion 
                    faqs={[
                        {
                            question: "What does Defender for Endpoint do?",
                            answer: "Microsoft Defender for Endpoint is an enterprise endpoint security platform that helps networks prevent, detect, investigate, and respond to advanced threats. It provides best-in-class endpoint security across Windows, macOS, Linux, Android, iOS, and network devices, enabling your enterprise to quickly prevent attacks, scale security resources, and evolve defenses."
                        },
                        {
                            question: "What is the difference between Microsoft Defender and Defender for Endpoint?",
                            answer: "Windows Security, which includes Microsoft Defender Antivirus, protects your Windows device and data from viruses, ransomware, trojans, and other malware even when a non-Microsoft Antivirus is running. Defender for Endpoint is an endpoint security system that provides vulnerability management, endpoint protection, endpoint detection and response, mobile threat defense, and managed services through a unified platform."
                        },
                        {
                            question: "Is Microsoft Defender for Endpoint free?",
                            answer: "Microsoft Defender for Endpoint is accessible as part of a paid membership to the Microsoft 365 cloud-based office service and provides comprehensive protection for non-Windows devices. Microsoft&apos;s antivirus software is available for a nominal membership cost on Mac and Android but not iOS."
                        },
                        {
                            question: "Is Microsoft Defender for Endpoint an antivirus?",
                            answer: "Microsoft Defender Antivirus is a cutting-edge antivirus solution. When coupled with additional Defender for Endpoint features like endpoint detection and response and automated investigation and remediation, you get even more comprehensive security protection."
                        }
                    ]}
                />
            </div>
        </div>
    )
}