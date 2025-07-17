import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/ui/faq-accordion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const ActiveDirectoryConsulting = () => {
    const faqs = [
        {
            question: "What is Active Directory, and why do you need it?",
            answer: "Active Directory is Microsoft&apos;s comprehensive directory service that manages users, computers, and resources within a network. Organizations need Active Directory consulting to optimize their existing AD environment, enhance security protocols, ensure regulatory compliance, and streamline identity management across their infrastructure."
        },
        {
            question: "What are the benefits of Active Directory consulting?",
            answer: "Active Directory consulting provides access to specialized expertise, customized solutions tailored to your organization&apos;s specific requirements, infrastructure optimization, enhanced security measures, reduced administrative overhead, and improved operational efficiency through best practices implementation."
        },
        {
            question: "What types of organizations can benefit from Active Directory Services?",
            answer: "Organizations of all sizes that utilize Microsoft-based IT infrastructure and rely on Active Directory for user authentication, access control, and directory services can benefit from AD consulting. This includes small and medium businesses, large enterprises, government agencies, educational institutions, and healthcare organizations. AD consulting helps improve security, performance, and scalability regardless of industry or size."
        },
        {
            question: "What services are typically included in Active Directory consulting, and how long does a project usually take?",
            answer: "AD consulting services typically include design and planning, implementation and deployment, migration strategies, security and compliance assessments, performance optimization, and ongoing troubleshooting. Project duration varies based on scope and complexity - simple implementations may take a few weeks, while comprehensive multi-domain or forest projects can extend to several months or longer."
        },
        {
            question: "What are the qualifications an AD consultant should have?",
            answer: "An AD consultant should possess deep understanding of Microsoft Active Directory with knowledge of latest features and best practices. They should have experience with AD migration, security implementation, compliance frameworks, and troubleshooting. Key qualifications include Microsoft certifications like MCSE, experience with related technologies such as Exchange Server and Office 365, familiarity with third-party AD management tools, and strong communication skills for effective collaboration with IT teams and stakeholders."
        }
    ];

    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <div>
                                <h1 className="hero-title">
                                    <span className="hero-title-accent">Active Directory</span>{" "}
                                    <span className="hero-title-primary">Consulting & Management</span>

                                </h1>
                                <p className="hero-description">
                                    Transform your identity management infrastructure with expert Active Directory solutions. Sadel delivers comprehensive AD consulting services to optimize security, streamline administration, and ensure seamless integration across your hybrid cloud environment.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                            Get a free 30-minute consultation with a Sadel expert
                                        </Button>
                                    </Link>
                                    <Button variant="outline">Explore AD Solutions</Button>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        {/* Background Elements */}
                        <Fade direction="left" triggerOnce>
                            <img src="/Images/defender-for-identity-banner.png" alt="Active Directory Solutions" />
                        </Fade>
                    </div>
                </div>
            </div>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (13).png" alt="Active Directory Architecture" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Understanding Active Directory & Azure AD Integration
                            </h2>
                            <p>
                                Active Directory Web Services (AD) serves as Microsoft&apos;s cornerstone identity management platform, enabling centralized single sign-on (SSO) across applications and services. It seamlessly integrates with critical infrastructure components including DNS, DHCP, IPsec, Wi-Fi, NPS, and VPN services.
                                <br /><br />
                                Azure Active Directory extends these capabilities to the cloud as Microsoft&apos;s Identity-as-a-Service (IDaaS) solution. With Azure AD Connect, Sadel helps organizations create robust hybrid environments that synchronize on-premises credentials with cloud services, delivering unified access management across your entire IT ecosystem.
                            </p>

                        </div>

                    </div>
                </div>
            </Fade>

            <Fade direction="right" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}

                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                How Sadel Streamlines AD Administration & Security
                            </h2>
                            <p>
                                Our Active Directory solutions leverage domain controllers (DCs) with intelligent replication strategies to ensure consistent, reliable directory services across your organization. Sadel&apos;s expertise in Global Catalog server configuration and forest management guarantees optimal performance and scalability.
                                <br /><br />
                                With over two decades of experience in AD DS deployments, Sadel understands the intricate protocols including LDAP, Kerberos, and DNS integration. We specialize in designing hybrid architectures that seamlessly bridge on-premises Active Directory with Azure Active Directory, creating unified identity management solutions that scale with your business growth.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (19).png" alt="AD Security Framework" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (18).png" alt="Azure Advanced Protection" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Enterprise Security with Azure Advanced Protection
                            </h2>
                            <p>
                                Sadel implements Azure Advanced Protection to deliver real-time security monitoring at enterprise scale. Our solutions leverage cloud-powered threat detection to safeguard against increasingly sophisticated security threats while maintaining optimal performance.
                                <br /><br />
                                Key security features include:
                            </p>
                            <ul className="list-disc mt-4 space-y-2">
                                <li>Real-time behavioral monitoring for users, devices, and resources</li>
                                <li>Automated anomaly detection with instant threat alerts</li>
                                <li>Streamlined incident response with clear attack timelines</li>
                                <li>Centralized security policy enforcement across hybrid environments</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </Fade>

            <Fade direction="right" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}

                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Sadel&apos;s Active Directory Advantages
                            </h2>
                            <p>
                                Our comprehensive Active Directory consulting services deliver measurable business value through:
                            </p>
                            <ul className="list-disc mt-4 space-y-2">
                                <li><strong>Centralized Management:</strong> Unified user and rights management with advanced Group Policy controls</li>
                                <li><strong>Single Sign-On:</strong> Seamless authentication across all authorized domain resources</li>
                                <li><strong>Enhanced Collaboration:</strong> Centralized file repositories with secure sharing capabilities</li>
                                <li><strong>Advanced Security:</strong> Comprehensive access controls and network-wide security policy enforcement</li>
                                <li><strong>Business Continuity:</strong> Robust backup strategies and disaster recovery solutions</li>
                                <li><strong>Performance Optimization:</strong> Continuous monitoring and performance tuning</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (17).png" alt="AD Management Benefits" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (18).png" alt="AD Troubleshooting" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Expert AD Troubleshooting & Optimization
                            </h2>
                            <p>
                                Sadel&apos;s proactive monitoring and troubleshooting services ensure your Active Directory infrastructure operates at peak performance. Our comprehensive approach addresses critical vulnerabilities before they impact your business operations.
                                <br /><br />
                                Our specialized services include:
                            </p>
                            <ul className="list-disc mt-4 space-y-2">
                                <li>Privileged group auditing and security reporting for domain administrators</li>
                                <li>AD replication monitoring to ensure directory consistency and reliability</li>
                                <li>LDAP query optimization for enhanced directory performance</li>
                                <li>DNS and name resolution troubleshooting for seamless network operation</li>
                                <li>Exchange integration analysis and performance optimization</li>
                                <li>24/7 monitoring with automated alerting and incident response</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </Fade>

            {/* Consultation Banner */}
            <Fade direction="up" triggerOnce>
                <div className="text-white py-8 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/contact-us">
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold text-lg">
                                Get a free 30-minute consultation with a Sadel expert
                            </Button>
                        </Link>
                    </div>
                </div>
            </Fade>

            {/* FAQ Section */}
            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="max-w-5xl mx-auto px-4">
                        <h1 className="text-center mb-8 feature-content h2">
                            FAQ&apos;s
                        </h1>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ActiveDirectoryConsulting;