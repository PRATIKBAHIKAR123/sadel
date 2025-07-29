import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

export default function CloudManagedServices() {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <div>
                                <h2 className="text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                                    <span className="text-[#0b0d0e]">Cloud</span> <span className="text-primary">Managed Services</span>
                                </h2>
                                <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                    Transform your cloud operations with our comprehensive managed services. We help businesses unlock the full potential of cloud computing by streamlining critical IT processes and simplifying the management of essential business applications.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                                            Get Free Consultation with a AFAQ expert
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
                            <img src="/Images/Frame (13).png" alt="Cloud Infrastructure" />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="left" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Our Mission: Driving Innovation Through Cloud Excellence
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                            Managing IT infrastructure can be costly both financially and in terms of personnel resources. By streamlining and simplifying your processes, we help you focus on strategic business initiatives, optimize costs, and delegate day-to-day management to our expert team.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* How We Help Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="left" triggerOnce>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                        <div className="flex-1">
                            <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                                How We Help Realize Your Cloud Vision
                            </h3>
                            <div className="space-y-6 text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                <p>
                                    We take a comprehensive, integrated approach utilizing products and services from leading technology providers including Amazon Web Services (AWS), Microsoft Azure, Google Cloud, and Oracle Cloud to deliver world-class solutions.
                                </p>
                                <p>
                                    Our specialized team has successfully delivered numerous rapid, scalable cloud solutions to businesses of all sizes. We accelerate best practices across single, multiple, or hybrid cloud deployments using our advanced cloud management platform.
                                </p>
                                <p>
                                    We create turnkey solutions that provide scalability, agility, and rapid deployment capabilities to help you capitalize on the cloud&apos;s transformative value. Our extensive global experience enables us to assist in developing, executing, and managing comprehensive cloud strategies.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="items-center justify-center flex">
                                <Fade direction="right" triggerOnce>
                                    <img src="/Images/Frame (14).png" alt="Cloud Solutions" className="w-auto h-80" />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* What We Offer Section */}
            <div className="max-w-7xl mx-auto p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="items-center justify-center flex">
                            <img src="/Images/Frame (15).png" alt="Cloud Services" className="w-auto h-80" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            What We Offer
                        </h3>
                        <div className="space-y-4 text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Deep business understanding to help you move quickly and capitalize on market changes</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>SAP application migration, cloud-native applications, analytics, and IoT solutions tailored to your needs</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Comprehensive automation and self-service capabilities that are cost-effective and flexible</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Built-in security and compliance capabilities across industries and geographies</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Flexible pricing, integration, delivery, and management models with world-class methodologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Yellow Highlight Section */}
            <div className="max-w-7xl mx-auto mt-4">
                <Fade direction="left" triggerOnce>
                    <div className="bg-[#a895d2] rounded-3xl p-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="flex-1">
                                <h3 className="text-white text-4xl font-semibold font-['Urbanist'] leading-[64px] mb-6">
                                    Versatile Solutions for Integration and Delivery
                                </h3>
                                <p className="text-white text-lg font-normal font-['Urbanist'] leading-loose">
                                    We offer two delivery paths through three phases of designing your optimized cloud environment—either on our advanced cloud management platform or your preferred platform. With either option, you receive our full range of services to deliver and manage the cloud solution that best meets your requirements.
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="items-center justify-center flex">
                                    <img src="/Images/Group 265.png" alt="Cloud Platform" className="w-auto h-64" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Key Benefits of Our Cloud Managed Services
                        </h3>
                        <div className="space-y-4 text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Cost optimization of up to 30% with restructured expenses and pay-as-you-go models</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Rapid cloud deployments tailored to your demands and financial objectives</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Enhanced compliance and security capabilities for complete peace of mind</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Improved performance and efficiency that frees resources for business value creation</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Ongoing guidance and support from strategy to implementation to operation</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#8a78bd] rounded-full mt-3 flex-shrink-0"></div>
                                <p>Optimized workloads that scale without additional hiring or training requirements</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex">
                            <img src="/Images/Frame (14).png" alt="Cloud Benefits" className="w-auto h-80" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <div className="text-center mb-12">
                    <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Why Choose Us for Managed Cloud Services?
                    </h3>
                    <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto mb-8">
                        Cloud deployment monitoring can be a significant challenge. Let us help you reduce cloud complexities. We collaborate with you to develop transparent, cost-effective cloud management strategies that enable you to build a flexible, scalable cloud ecosystem tailored to your needs, supporting your growth goals while allowing you to focus on delivering value.
                    </p>
                    <Link href="/contact-us">
                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                            Learn More About Our Cloud Managed Services
                        </Button>
                    </Link>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Frequently Asked Questions about Managed Cloud Services
                        </h3>
                    </div>
                </Fade>
                <FAQAccordion
                    faqs={[
                        {
                            question: "What are the main types of cloud-managed services available to US customers?",
                            answer: "Cloud-managed services generally fall into three categories: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS allows organizations to manage computing, networking, and storage resources in the cloud, removing the need for on-premises hardware."
                        },
                        {
                            question: "How do cloud-managed services benefit organizations?",
                            answer: "Cloud-managed services provide 24/7 monitoring for suspicious activity, rapid deployment of cloud resources, and enhanced data protection. They also support disaster recovery and can significantly improve your organization’s security posture."
                        },
                        {
                            question: "What’s the difference between cloud-hosted and cloud-managed solutions?",
                            answer: "Cloud-hosted solutions offer dedicated hosting, either on-site or in a remote data center, with resources reserved solely for your organization. Cloud-managed services, on the other hand, use dedicated servers in remote locations and focus on exclusive access and robust support from managed service providers."
                        },
                        {
                            question: "Which cloud-managed services are most widely used in business today?",
                            answer: `<div>Some of the most popular cloud-managed services include:<ul class='list-disc ml-6 mt-2'><li>Microsoft Azure</li><li>Amazon Web Services (AWS)</li><li>Oracle Cloud</li><li>Google Cloud Platform (GCP)</li><li>IBM Cloud</li><li>ProLabs Cloud Services</li></ul>These platforms offer 24/7 access to computing resources and power much of the modern internet.</div>`
                        }
                    ]}
                />
            </div>

            {/* Newsletter Section */}
            {/* <div className="w-full my-10">
                <div className="bg-[#fffcec] flex items-center justify-center p-6">
                    <div>
                        <div className="text-primary text-lg font-medium font-['Urbanist'] leading-7">Sign up for updates</div>
                        <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Cut down on expenses while improving productivity.</div>
                        <div className="flex">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a78bd] focus:border-transparent"
                                />
                                <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        <div className="mt-3">
                            <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">You can unsubscribe at any time. Read our </span>
                            <span className="text-primary text-base font-normal font-['Urbanist'] leading-loose">privacy policy</span>
                            <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                        </div>
                    </div>
                    <div className="h-80 w-auto">
                        <img src="/Images/Mail-bro 2.png" className="w-full h-full" />
                    </div>
                </div>
            </div> */}
        </div>
    );
} 