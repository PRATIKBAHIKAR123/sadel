import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/ui/faq-accordion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const PKIConsulting = () => {
    const faqs = [
        {
            question: "What is a PKI consultant?",
            answer: "A PKI consultant is a specialized professional who helps organizations design, implement, and manage Public Key Infrastructure solutions. They provide expertise in cryptographic security, digital certificates, and secure communication protocols to ensure robust security architecture."
        },
        {
            question: "Which services are provided by a PKI?",
            answer: "PKI services include digital certificate management, secure authentication, encrypted communication, digital signatures, certificate authority operations, key lifecycle management, and compliance with security standards and regulations."
        },
        {
            question: "What is PKI, and how does it work?",
            answer: "Public Key Infrastructure (PKI) is a framework that enables secure digital communication through encryption and authentication using digital certificates. It works by using public and private key pairs to encrypt data, verify identities, and ensure secure transactions across networks."
        },
        {
            question: "What is PKI in cryptography?",
            answer: "PKI in cryptography refers to the infrastructure that manages digital certificates and public-key encryption. It provides the foundation for secure communication by establishing trust through certificate authorities, enabling encrypted data transmission, and verifying the authenticity of digital identities."
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
                                    <span className="hero-title-accent">Trusted Communication:</span>{" "}
                                    <span className="hero-title-primary">The Power of PKI</span>
                                </h1>
                                <p className="hero-description">
                                    PKI Solutions: Providing Trust and Security for the Digital World. Security leaders often face challenges in modernizing their Public Key Infrastructure (PKI) due to limited resources, such as staff, expertise, and budget. To address these issues, many turn to Encryption Consulting for professional guidance, analysis, and services to effectively update their PKI.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                                            Get a free 30-minute consultation with a AFAQ expert
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            {/* Background Elements */}
                            <img src="/Images/defender-for-identity-banner.png" alt="PKI Security Solutions" />
                        </Fade>
                    </div>
                </div>
            </div>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (13).png" alt="PKI Infrastructure" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                What distinguishes AFAQ PKI services from others?
                            </h2>
                            <p>
                                Our solution incorporates the necessary controls and processes to guarantee a secure PKI. At the same time, our full systems integration capability offers end-to-end support from scoping and design to building and deploying the PKI solution. Additionally, we educate consumers about certificates to ensure proper use and handling of the PKI.
                                <br /><br />
                                AFAQ consulting services offer unparalleled expertise and experience building secure PKI solutions. What sets us apart is our unique ability to provide PKI professional services not just as a consultant but as an active user of our own PKI to support our services and those of our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="right" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Advanced PKI Security & Expertise
                            </h2>
                            <p>
                                With our extensive knowledge of Hardware Security Modules (HSMS) - one of the most critical components of a secure PKI solution - we can ensure the highest level of security for the very heart of your PKI.
                                <br /><br />
                                We have a proven track record of designing and building PKI solutions for the most demanding security requirements, including government, transport industry, and Critical National Infrastructure users. Our expertise allows us to recommend the best-of-breed suppliers, or work with your preferred vendor, to ensure a PKI solution that meets your specific needs.
                                <br /><br />
                                AFAQ consulting services offer a unique combination of experience, expertise, and flexibility to deliver a secure and effective PKI solution.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (19).png" alt="PKI Security" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (18).png" alt="PKI Services" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                We offer various PKI consulting services, including:
                            </h2>
                            <ul className="list-disc mt-4 space-y-2 text-[#6b7280]">
                                <li>PKI consulting services</li>
                                <li>Professional implementation services for PKI solutions</li>
                                <li>Review services for PKI solutions</li>
                                <li>Training on PKI and cryptographic security</li>
                            </ul>
                            <Link href="/contact-us">
                                <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold mt-4">
                                    Get a free 30-minute consultation with a sadel expert
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* FAQ Section */}
            <Fade direction="up" triggerOnce>
                <div className="feature-section">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-center mb-8 feature-content h2">
                            FAQ&apos;s
                        </h2>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default PKIConsulting;