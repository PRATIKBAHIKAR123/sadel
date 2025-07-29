"use client";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";

export default function IdentityAccessManagement() {
    const router = useRouter();

    const handleContactRedirect = () => {
        router.push('/contact-us');
    };

    const faqData = [
        {
            question: "What is IBM Security Identity Manager (ISIM)?",
            answer: "IBM Security Identity Manager (ISIM) is an enterprise solution for managing user identities and access rights. It automates identity lifecycle processes such as onboarding, role assignment, and de-provisioning while ensuring compliance and security across your organization."
        },
        {
            question: "What are the main benefits of implementing ISIM?",
            answer: "Implementing ISIM provides several key benefits including automation of identity and access management processes, improved compliance with regulatory requirements, enhanced security through precise access control, and reduced administrative workload and operational costs."
        },
        {
            question: "What are the four parts of IAM?",
            answer: "The four parts of Identity and Access Management (IAM) are Identification, Authentication, Authorization, and Accountability. These components work together to ensure secure and controlled access to organizational resources."
        },
        {
            question: "Is IAM part of cybersecurity?",
            answer: "Yes, IAM is a critical part of cybersecurity, ensuring that only authorized individuals have access to resources and data. It serves as the foundation for protecting sensitive information and maintaining security posture."
        },
        {
            question: "What are the four pillars of IAM?",
            answer: "The four pillars of IAM are Identity Governance, Access Management, Privileged Access Management (PAM), and Identity Lifecycle Management. These pillars provide a comprehensive framework for managing digital identities."
        },
        {
            question: "What is an example of IAM?",
            answer: "An example of IAM is using a single sign-on (SSO) system to allow employees to securely access multiple applications with one set of login credentials, streamlining access while maintaining security controls."
        },
        {
            question: "What is IBM IGI?",
            answer: "IBM Identity Governance and Intelligence (IGI) is a solution that helps organizations manage user identities, ensure compliance, and govern access to critical systems through comprehensive identity governance capabilities."
        }
    ];

    return (
        <div className="flex flex-col gap-10 mb-12">
            {/* Hero Section */}
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12 max-w-7xl mx-auto">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h2 className="text-5xl font-bold text-[#0e0f10] leading-[64px] font-['Urbanist'] mb-6">
                                Empowering Secure Access with Intelligent Identity Management
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                Transform your security posture with comprehensive identity governance and access control solutions. Our platform empowers organizations to analyze, define, and control user access while maintaining regulatory compliance across all enterprise applications.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    onClick={handleContactRedirect}
                                    className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold"
                                >
                                    Get a free 30-minute consultation with a AFAQ expert
                                </Button>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative w-full flex justify-center">
                        <Fade direction="left" triggerOnce>
                            <div className="relative w-full max-w-md">
                                {/* Foreground Image */}
                                <img
                                    src="/Images/workings.png"
                                    alt="Identity Management"
                                    className="w-full h-auto relative z-10"
                                />
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>

            {/* IGI Product Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">IGI (Identity Governance and Intelligence) Product</h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed mb-6">
                            Our IBM® Security Identity Governance and Intelligence platform enables organizations to analyze, define, and control user access and access risks. We employ business-centric rules, activities, and processes to provide comprehensive identity governance.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">A single identity governance foundation platform to help organizations understand, control, and make business decisions related to user access and access risks.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">A business-activity-based approach to facilitate communication between auditors and IT staff and to help determine segregation of duties violations across enterprise applications, including SAP.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Better visibility and user access control through consolidating access entitlements from target applications and employing sophisticated algorithms for role mining, modeling, and optimization.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Access request management that delivers easier-to-implement, business-friendly, self-service access request functions.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Target integration that automates the process of data collection and fulfillment of identity and access from distributed target systems.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* IAM Services Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-[#fffcec] rounded-3xl p-8">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">IAM Services Can:</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Enable enterprises to manage access risks by governing access control lifecycles and administration of digital identities.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Dynamically define roles, automate data authorization, and access management processes.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Reduce operational costs, mitigate risks while managing large amounts of data & identities across geographic locations.</p>
                            </div>
                        </div>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed">
                            Our AFAQ Identity Governance Fast Track is a bundled solution offering that ensures a strong foundation for enterprise IAM initiatives and can cut planning and deployment times significantly.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* Solution Components Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Solution Components:</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Plug and play IAM policy and procedure toolkits.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Seamlessly integration with multiple standards & HRMS systems.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Non-employee account modules.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Easily configurable approval workflow templates.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Ensure common alerts and essential report sets.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* IAM Compliance Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-[#fff5b9] rounded-3xl p-8">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Meet Your IAM Compliance Requirements Quickly</h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed">
                            Our fast track two-staged approach provides a modular and flexible method for building a robust and secure IAM program. This approach is extendable to IAM provisioning, automation, and other operational functionalities, ensuring comprehensive compliance coverage.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* IAM Foundation Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Strengthen IAM Foundation, Protect Identities and Data</h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed">
                            Perfect the deployment of IAM solutions using accelerators and automation frameworks. We collaborate with experts to build a strong IAM foundation, including data protection, privacy governance, legislative compliance, and customer expectations.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* Outcomes Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-[#ffe9db] rounded-3xl p-8">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Outcomes You Can Experience:</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Comprehensive governance of access controls across business functions.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Transform IAM through preventive and detective controls, onboard apps, and ensure continuous audit readiness.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Service capabilities to move IAM to the cloud and manage cloud-based workloads.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Decentralized access control solutions for microservices; these solutions are based on open protocols and built for scale & interoperability.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Identity Manager Overview Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Identity Manager (ISIM) Overview</h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed mb-6">
                            Our Identity Manager is an automated and policy-based solution for managing user access across IT environments, driving effective identity management and governance. It automates user privilege management (creation, modification, termination) throughout the user lifecycle, increasing efficiency, reducing IT administration costs, enforcing security, and managing compliance.
                        </p>
                        <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] mb-6">
                            IBM Security Identity Manager (ISIM) is an identity management system that helps companies manage user access to IT environments, whether in a closed enterprise environment or across virtual and extended enterprise networks.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Centralized Management</h3>
                                    <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">ISIM centralizes the process of managing user accounts and access permissions across an organization&apos;s operating systems and applications.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Automated Processes</h3>
                                    <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">ISIM can automatically create, modify, and terminate user privileges based on roles, accounts, and access permissions.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Policy-Based Solutions</h3>
                                    <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">ISIM helps companies deploy policy-based provisioning solutions to automate the process of granting access rights to employees, contractors, and business partners.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Provisioning Support</h3>
                                    <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">ISIM supports provisioning, which is the process of providing, deploying, and tracking a service or component in an enterprise.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Security</h3>
                                    <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">ISIM helps enforce security and manage compliance effectively across various enterprise environments.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Enterprise Flexibility</h3>
                                    <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">ISIM can be used in a closed enterprise environment or across a virtual or extended enterprise network.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="text-center mb-12">
                        <h2 className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px] mb-8">FAQs</h2>
                        <FAQAccordion faqs={faqData} />
                    </div>
                </Fade>
            </div>

            {/* Call to Action Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="right">
                    <div className="bg-[#fffcec] rounded-3xl p-12 text-center">
                        <h2 className="text-[#0e0f10] text-4xl font-bold font-['Urbanist'] mb-6">
                            Ready to Transform Your Identity Management?
                        </h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] mb-8 max-w-2xl mx-auto">
                            Get expert consultation and implement comprehensive identity and access management solutions tailored to your organization&apos;s needs.
                        </p>
                        <Button 
                            onClick={handleContactRedirect}
                            className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-4 rounded-lg font-semibold text-lg"
                        >
                            Get a free 30-minute consultation with a AFAQ expert
                        </Button>
                    </div>
                </Fade>
            </div>
        </div>
    );
} 