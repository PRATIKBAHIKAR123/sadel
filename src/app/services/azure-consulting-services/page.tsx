"use client"
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";

export default function Azureconsultingservice(){
    const router = useRouter();

    const handleContactRedirect = () => {
        router.push('/contact-us');
    };

    const faqData = [
        {
            question: "What are Azure Consulting Services?",
            answer: "Azure Consulting Services are expert professional services designed to help organizations plan, design, and implement Microsoft Azure solutions tailored to their specific business needs. These services provide strategic guidance, technical expertise, and implementation support for cloud transformation initiatives."
        },
        {
            question: "Why do businesses need Azure Solutions Partner?",
            answer: "Businesses need Azure Solutions Partners to effectively leverage Azure's comprehensive benefits, design scalable and secure cloud solutions, and improve operational efficiency. Partners provide expertise in cloud architecture, migration strategies, and ongoing optimization to maximize the value of Azure investments."
        },
        {
            question: "What are the benefits of using Microsoft Azure consultants?",
            answer: "Microsoft Azure consultants help businesses take full advantage of Azure's capabilities by designing scalable, secure, and efficient cloud solutions. They provide expertise in cloud architecture, migration planning, cost optimization, and ongoing management to ensure successful cloud transformation."
        },
        {
            question: "How do I choose the right Azure consulting Company?",
            answer: "When choosing an Azure consulting company, look for proven experience and expertise in Azure technologies, a strong track record of successful implementations, excellent communication skills, relevant Microsoft certifications, positive customer reviews, and pricing models that align with your budget and requirements."
        },
        {
            question: "What services are typically included in Azure consulting engagements?",
            answer: "Azure consulting engagements typically include cloud strategy development, architecture design, infrastructure deployment, application migration, data management and analytics, security and compliance implementation, ongoing support and optimization, as well as training and mentoring for your team."
        }
    ];

    return(
        <div>
            {/* Hero Section */}
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12 max-w-7xl mx-auto">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h2 className="text-5xl font-bold text-[#0e0f10] leading-[64px] font-['Urbanist'] mb-6">
                                Transform equipment monitoring and maintenance with Azure&apos;s cutting-edge data
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                Microsoft Azure is the ultimate cloud platform offering over 200 innovative products and services. Designed to help organizations tackle modern business challenges, Microsoft Azure consulting services provide seamless flexibility to build, run, and manage versatile applications across multiple clouds, on-premises, or at the edge.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    onClick={handleContactRedirect}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold"
                                >
                                    Get a free 30-minute consultation with a Sadel expert
                                </Button>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative w-full flex justify-center">
                        <Fade direction="left" triggerOnce>
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/Images/defender-for-identity-banner.png"
                                    alt="Azure Consulting Services"
                                    className="w-full h-auto relative z-10"
                                />
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>


            {/* What Makes Azure Unique Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">What Makes Microsoft Azure Unique:</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">IaaS, PaaS, and SaaS compatibility in a single public computing platform</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Flexibility to scale computing resources up or down as needed</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Supports all operating systems, languages, tools, and frameworks</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">99.95% availability and 24/7 tech support for uninterrupted service</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Geosynchronous data centers for seamless global accessibility</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Cost-efficient pay-as-you-go model for optimal resource management</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Azure Consulting Services Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-[#fffcec] rounded-3xl p-8">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Simplify Your Azure Environment with Remote Azure Consulting Services</h2>
                        <div className="space-y-4 text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed">
                            <p>
                                In today&apos;s fast-paced digital landscape, managing your Azure environment while keeping up with evolving technology can be overwhelming. Balancing workloads and learning new platforms shouldn&apos;t slow you down. That&apos;s where Sadel&apos;s Azure Consulting Services come in.
                            </p>
                            <p>
                                At Sadel, we help businesses of all sizes simplify, optimize, and grow their Azure environments. As a trusted Microsoft partner, our experienced team of cloud experts ensures your Azure operations run seamlessly — giving you the freedom to focus on strategic goals.
                            </p>
                            <p>
                                Our remote-managed IT services include monitoring, maintenance, security, backup, and disaster recovery, all customized to your specific needs and requirements.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Azure Consulting Services List Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Discover the Potential of Your Azure Initiative with Our Azure Consulting Services:</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Evaluate TCO, ROI, development time, and costs for feasibility</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Consultations for executive staff with Q&A sessions and emails</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Design cloud architectures for Azure-based apps and data warehouses</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Azure and hybrid infrastructure design, CI/CD pipeline design</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Azure migration strategy tailored to your business goals, timeframes, and development capabilities</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Risk management plan</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Process descriptions and policies for IT service provisioning after Azure migration</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Infrastructure configuration and code reviews</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Azure Benefits Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-[#fff5b9] rounded-3xl p-8">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Microsoft Azure Offers Many Benefits, Making It a Top Choice for Businesses Looking to Enhance Their Cloud Computing Capabilities. Here Are Seven Key Benefits of Azure:</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">1. Speed</h3>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Focuses on deployment, operation, scalability, and support for private connections, on-premises networks, and IPv6 workloads.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">2. Scalability</h3>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Describes on-demand scalability for storage and computing power.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">3. Security</h3>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Mentions the Security Development Lifecycle (SDL) model, ISO 27001 compliance, and ensuring privacy, integrity, and availability of sensitive customer information.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">4. Compliance</h3>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Highlights over 35 compliance compatibilities aligned with key industries.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">5. Cost-efficiency</h3>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Explains the pay-as-you-go model and consumption-based pricing structure.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">6. Availability</h3>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Notes operations across 55 regions and availability in about 140 countries, providing high availability and redundancy.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">7. Interoperability</h3>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Covers enterprise-level development tools, internet protocols, open standards, and software development kits for multiple programming languages.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Why Choose Sadel Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-[#ffe9db] rounded-3xl p-8">
                        <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Sadel is the Perfect Choice for Your Azure Solutions Partner Due to the Following Reasons:</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Microsoft Partner with Competencies</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Member of Microsoft Cloud Solution Provider (CSP) program</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">More than 50 IT professionals on board</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">20 years of experience in Azure development and migration services</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">Established a mature quality management system based on ISO 9001 certification</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#f9d300] font-bold">•</span>
                                <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">ISO 27001-based information security management system to safeguard customer data</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button 
                                onClick={handleContactRedirect}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
                            >
                                Get a free 30-minute consultation with a Sadel expert
                            </Button>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Choose Your Options Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="text-center mb-8">
                        <h2 className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Choose Your Options</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="text-[#0e0f10] text-2xl font-bold font-['Urbanist'] mb-4">Azure Migration</h3>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                We deliver individual migration strategy and help you implement your cost-effective and high-performing Azure environment.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="text-[#0e0f10] text-2xl font-bold font-['Urbanist'] mb-4">Implementation</h3>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                We design cloud architectures and CI/CD pipelines using SaaS and PaaS functionality of Azure to cut down on development costs.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="text-[#0e0f10] text-2xl font-bold font-['Urbanist'] mb-4">Managed Services</h3>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                We assess the performance of your Azure environment, identify optimization opportunities, and reduce tenancy costs while increasing overall performance.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px] mb-8">FAQs</h2>
                        <FAQAccordion faqs={faqData} />
                    </div>
                </Fade>
            </div>

            {/* Call to Action Section */}
            <div className="max-w-7xl mx-auto p-6">
                <Fade direction="up">
                    <div className="bg-[#fffcec] rounded-3xl p-12 text-center">
                        <h2 className="text-[#0e0f10] text-4xl font-bold font-['Urbanist'] mb-6">
                            Ready to Transform Your Azure Environment?
                        </h2>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] mb-8 max-w-2xl mx-auto">
                            Get expert consultation and implement comprehensive Azure solutions tailored to your organization&apos;s needs.
                        </p>
                        <Button 
                            onClick={handleContactRedirect}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg"
                        >
                            Get a free 30-minute consultation with a Sadel expert
                        </Button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}