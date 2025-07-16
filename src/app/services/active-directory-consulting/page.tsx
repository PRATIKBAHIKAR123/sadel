import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ActiveDirectoryConsulting = () => (
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
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Get Free Consultation
                                </Button>
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
                        <img src="/Images/Frame (21).png" alt="Active Directory Architecture" className="w-full max-w-xs h-auto" />
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
                        <img src="/Images/Frame (21).png" alt="AD Security Framework" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (21).png" alt="Azure Advanced Protection" className="w-full max-w-xs h-auto" />
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
                        <img src="/Images/Frame (21).png" alt="AD Management Benefits" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (21).png" alt="AD Troubleshooting" className="w-full max-w-xs h-auto" />
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

        <div className="w-full my-10">
            <div className="bg-[#fffcec] flex items-center justify-center p-6">
                <div>
                    <div className="justify-start text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7">Ready to Optimize?</div>
                    <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Empower your team with optimized Active Directory solutions.</div>
                    <div className="flex">
                        <div className="flex-1 relative">
                            <input
                                type="email"
                                placeholder="Enter your business email"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            />
                            <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                Get Free Consultation
                            </Button>
                        </div>

                    </div>
                    <div className="mt-3">
                        <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">Get a free 30-minute consultation with a Sadel expert. </span><span className="text-[#f9d300] text-base font-normal font-['Urbanist'] leading-loose">privacy policy</span><span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                    </div>
                </div>
                <div className="h-80 w-auto">
                    <img src="/Images/Mail-bro 2.png" className="w-full h-full" alt="Contact Sadel" />
                </div>
            </div>
        </div>
    </div>
);

export default ActiveDirectoryConsulting;