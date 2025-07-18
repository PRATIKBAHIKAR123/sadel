import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

export default function AzureService() {
    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h2 className=" text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                <span className="text-[#0b0d0e]">Safeguard your data and applications with Azure&apos;s reliable security services</span>
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                Azure Security Services manage and protect your data and applications, ensuring comprehensive business security during app development and backend operations in the cloud.
                            </p>
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

            {/* Azure Security Services Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Azure Security Services: Keeping Your Business Secure in the Cloud
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                            As businesses increasingly migrate to the cloud, security becomes paramount. Azure provides a comprehensive security framework that protects your data and applications throughout their lifecycle.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* Importance of Azure Cloud Security */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            The Importance of Azure Cloud Security for Business Operations
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto mb-8">
                            Azure Cloud Security provides a secure environment for sensitive data. With increased cloud adoption comes elevated cyber threat risks, making security a top priority for modern businesses.
                        </p>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                    {[
                        { title: "Identity & Access Management", description: "Secure user authentication and authorization" },
                        { title: "Threat Protection", description: "Advanced threat detection and prevention" },
                        { title: "Encryption", description: "Data protection at rest and in transit" },
                        { title: "Network Security", description: "Secure network infrastructure and connectivity" },
                        { title: "Compliance", description: "Meet regulatory and industry standards" }
                    ].map((feature, index) => (
                        <Fade key={index} delay={index * 100}>
                            <div className="bg-white rounded-2xl p-6 min-h-[180px] shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                                <h4 className="text-lg font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                    {feature.title}
                                </h4>
                                <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* Azure Security Tools Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Enhancing Cloud Security with Azure Security Tools
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                            Azure security tools protect against cyber threats including data breaches, unauthorized access, and malware attacks. Our comprehensive suite of tools ensures your cloud environment remains secure.
                        </p>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            title: "Azure Security Center",
                            description: "Unified platform for managing security across Azure services with advanced threat protection and workload protection."
                        },
                        {
                            title: "Azure Active Directory",
                            description: "Comprehensive identity and access management solution for cloud applications and services."
                        },
                        {
                            title: "Azure Key Vault",
                            description: "Secure storage for cryptographic keys, secrets, and certificates with centralized management."
                        },
                        {
                            title: "Azure Information Protection",
                            description: "Classifies, labels, and protects data based on sensitivity levels and business requirements."
                        },
                        {
                            title: "Azure Firewall",
                            description: "Network-level security solution providing threat protection and traffic filtering capabilities."
                        },
                        {
                            title: "Azure AD Identity Protection",
                            description: "Uses machine learning to detect identity-based risks and anomalous user behaviors proactively."
                        }
                    ].map((tool, index) => (
                        <Fade direction="left" key={index} delay={index * 100}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-lg font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                    {tool.title}
                                </h4>
                                <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                    {tool.description}
                                </p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* Managed Security Services Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Top Azure Managed Security Services for Different Areas
                        </h3>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        {
                            category: "General Security",
                            services: [
                                "Security Center - Workload protection and advanced threat protection",
                                "Key Vault - Secures sensitive details like passwords and connection strings",
                                "Monitor logs - Collects telemetry and data for operational insights",
                                "Dev/Test Labs - Helps create Azure environments for testers and developers"
                            ]
                        },
                        {
                            category: "Operations Security",
                            services: [
                                "Security and Audit solution - Complete view of IT security posture",
                                "Resource Manager - Managing resources as a group for deployment and updates"
                            ]
                        },
                        {
                            category: "Applications Security",
                            services: [
                                "Web Application vulnerability scanning - One-click vulnerability scanning",
                                "Web Application Firewall (WAF) - Secures web apps from threats",
                                "Application Insights - Extendable Application Performance Management"
                            ]
                        },
                        {
                            category: "Storage Security",
                            services: [
                                "Role-Based Access Control (RBAC) - Restricts access based on need-to-know",
                                "Encryption - Protects data transmitted across networks"
                            ]
                        }
                    ].map((category, index) => (
                        <Fade  key={index} delay={index * 100}>
                            <div className="bg-[#0b0d0e] min-h-[310px] text-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-lg font-bold mb-4 font-['Urbanist']">{category.category}</h4>
                                <ul className="space-y-2 text-sm">
                                    {category.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="text-gray-300">• {service}</li>
                                    ))}
                                </ul>
                            </div>
                        </Fade>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            category: "Network Security",
                            services: [
                                "Virtual Network (VNet) - Logical isolation for cloud networks",
                                "VPN Gateway - Encrypted traffic to public connections",
                                "Network Layer Controls - Connectivity controls for devices/subnetworks"
                            ]
                        },
                        {
                            category: "Backup and Disaster Recovery",
                            services: [
                                "Site Recovery - Orchestrates backup, failover, and recovery",
                                "Virtual machine backup - Protects application data with minimal costs"
                            ]
                        },
                        {
                            category: "Identity and Access Management",
                            services: [
                                "Active Directory - Multi-tenant cloud-based directory",
                                "Multi-Factor Authentication - Multiple authentication methods"
                            ]
                        }
                    ].map((category, index) => (
                        <Fade  key={index} delay={index * 100}>
                            <div className="bg-[#0b0d0e] min-h-[230px] text-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-lg font-bold mb-4 font-['Urbanist']">{category.category}</h4>
                                <ul className="space-y-2 text-sm">
                                    {category.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="text-gray-300">• {service}</li>
                                    ))}
                                </ul>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* Cloud-Native Threat Protection */}
            {/* <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Cloud-Native Threat Protection</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Leverage Microsoft Defender for Cloud to continuously assess, detect, and defend against evolving cloud threats—across VMs, containers, databases, and storage. Our team configures and manages your Azure security posture so you stay a step ahead of attackers.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (14).png" alt="Cloud-Native Threat Protection" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="items-center justify-center flex">
                            <img src="/Images/Frame (15).png" alt="Identity & Access Management" className="w-auto h-80" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Identity & Access Management (IAM)</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            We secure your workforce and customer identities using Azure Active Directory—enabling role-based access, smart policies, and seamless authentication across applications. Identity becomes your first line of defense, not your weakest link.
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Compliance-Ready Security Posture */}
            {/* <div className="max-w-7xl mx-auto mt-4">
                <div className="bg-[#f9d300] rounded-3xl p-12">
                    <div className="flex flex-cols md:flex-row items-center justify-between">
                        <div className="flex-1">
                            <div className="justify-start text-black text-5xl font-semibold font-['Urbanist'] leading-[64px]">Compliance-Ready Security Posture</div>
                            <p className="justify-start text-black text-lg font-normal font-['Urbanist'] leading-loose">
                                Get audit-ready with Azure Policy and Compliance Manager. We help ensure your cloud configurations meet required standards while minimizing risks of data exposure or fines. Peace of mind—backed by continuous assessments and alerts.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="items-center justify-center flex ">
                                <img src="/Images/Group 265.png" alt="Compliance Security" className="w-auto h-64" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Managed Detection & Response */}
            {/* <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Managed Detection & Response (MDR)</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            With Microsoft Sentinel and our Managed SOC, threats are caught before they cause harm. From correlation to containment, we handle alerts so your team stays focused on business—not firefighting breaches.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex ">
                            <img src="/Images/Frame (14).png" alt="Managed Detection & Response" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Call to Action */}
            <div className="max-w-7xl mx-auto p-8 text-center">
                <Fade direction="up" triggerOnce>
                    <Link href="/contact-us">
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                            Get a free 30-minute consultation with a Sadel expert
                        </Button>
                    </Link>
                </Fade>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="right" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            FAQ&apos;s
                        </h3>
                    </div>
                </Fade>

                <FAQAccordion 
                    faqs={[
                        {
                            question: "What is Azure Security Service?",
                            answer: "Azure Security Service is Microsoft&apos;s comprehensive cloud security platform that provides identity and access management, threat protection, information protection, and security management capabilities to safeguard your data and applications in the Azure cloud environment."
                        },
                        {
                            question: "How does Azure Security Service help protect against cyber threats?",
                            answer: "Azure Security Service offers advanced threat protection through machine learning, behavioral analytics, and real-time monitoring. It detects and responds to threats across your entire cloud infrastructure, providing proactive defense against malware, phishing, and other cyber attacks."
                        },
                        {
                            question: "How does Azure Security Service help with compliance?",
                            answer: "Azure Security Service includes built-in compliance controls and tools like Azure Policy and Compliance Manager that help organizations meet regulatory requirements such as GDPR, HIPAA, PCI DSS, and industry-specific standards through automated compliance monitoring and reporting."
                        },
                        {
                            question: "How can Azure Security Service benefit businesses?",
                            answer: "Azure Security Service benefits businesses by reducing security risks, lowering operational costs, improving compliance posture, and enabling secure cloud adoption. It provides enterprise-grade security without the complexity of managing on-premises security infrastructure."
                        },
                        {
                            question: "Is Azure Security Service suitable for small businesses?",
                            answer: "Yes, Azure Security Service is designed to scale from small businesses to large enterprises. It offers flexible pricing models and security features that can be tailored to meet the specific needs and budget constraints of small businesses while providing enterprise-level protection."
                        }
                    ]}
                />
            </div>

            {/* Newsletter Section */}
            {/* <div className="w-full my-10">
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
            </div> */}
        </div>
    )
}