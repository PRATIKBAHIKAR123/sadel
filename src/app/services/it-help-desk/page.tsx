import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";

const ITHelpDeskPage = () => (
    <div>
        <div className="bg-[#fffcec] p-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                {/* Left Content */}
                <div className="space-y-8">
                    <Fade direction="up" triggerOnce>
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">IT Help Desk</span>{" "}
                                <span className="hero-title-primary">Services</span>
                            </h1>
                            <p className="hero-description">
                                Our IT Help Desk Services will manage your IT infrastructure and software, providing comprehensive support to ensure your business operations run smoothly and efficiently.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Get Free Consultation with a Sadel expert

                                </Button>
                                {/* <Button variant="outline">Explore Services</Button> */}
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* Right Illustration */}
                <div className="relative">
                    <Fade direction="left" triggerOnce>
                        {/* Background Elements */}
                        <img src="/Images/workings.png" alt="IT Help Desk Services" />
                    </Fade>
                </div>
            </div>
        </div>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (10).png" alt="IT Support Process" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Leading IT Help Desk Provider
                        </h2>
                        <p>
                            As a leading IT help desk provider, we specialize in enhancing end-user experience through comprehensive monitoring, troubleshooting, and guidance for all IT-related issues. Our team of certified professionals ensures that your IT infrastructure remains operational and optimized for maximum productivity.
                            <br /><br />
                            We understand that technology issues can disrupt business operations, which is why we provide proactive support and rapid response times to minimize downtime and keep your team focused on what matters most.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>

        {/* Service Channels Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <Fade direction="left" triggerOnce>
                <div className="text-center mb-12">
                    <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Multiple Support Channels
                    </h3>
                    <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                        Access our IT support through various convenient channels designed to meet your team&lsquo;s preferences and requirements.
                    </p>
                </div>
            </Fade>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                    { icon: "🎧", title: "Dedicated Support", description: "Direct phone access to our expert technicians" },
                    { icon: "📞", title: "Voicemail to Ticket", description: "Automated ticket creation from voicemail messages" },
                    { icon: "📱", title: "myHelpDesk App", description: "Mobile application for on-the-go support requests" },
                    { icon: "📧", title: "Email Support", description: "Comprehensive email-based technical assistance" },
                    { icon: "🤖", title: "Virtual Assistant", description: "AI-powered chatbot for instant basic support" }
                ].map((channel, index) => (
                    <Fade direction="right" key={index} delay={index * 100}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="text-4xl mb-4">{channel.icon}</div>
                            <h4 className="text-lg font-bold text-[#0b0d0e] mb-2 font-['Urbanist']">
                                {channel.title}
                            </h4>
                            <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                {channel.description}
                            </p>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Sadel Core IT Help Desk Services
                        </h2>
                        <p>
                            Our comprehensive IT support services are designed to protect your IT infrastructure and ensure uninterrupted productivity. We provide end-to-end solutions that address both immediate technical issues and long-term infrastructure optimization.
                            <br /><br />
                            <strong>Our global businesses&lsquo; outsourced IT support services include:</strong>
                        </p>
                    </div>
                    <div className="feature-image">
                        <img src="/Images/Frame (11).png" alt="Core IT Services" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        {/* Service Details Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Remote IT Support Services",
                        description: "Our trained technicians provide quick and efficient remote troubleshooting, resolving issues without the need for on-site visits. This approach ensures faster resolution times and reduced costs while maintaining the same level of expertise and attention to detail."
                    },
                    {
                        title: "Multi-Channel Support Options",
                        description: "Access our services through multiple channels including phone, email, web chat, mobile apps, and web portals. This flexibility ensures that your team can reach us through their preferred method, maximizing convenience and efficiency."
                    },
                    {
                        title: "On-site Support Services",
                        description: "When remote assistance is insufficient, our qualified personnel provide on-site resolution for complex technical issues. Our technicians are equipped with the latest tools and knowledge to handle any IT challenge your organization may face."
                    },
                    {
                        title: "Technical Support",
                        description: "Comprehensive upkeep and support for hardware, software, and mobile devices. Our technical support covers everything from routine maintenance to complex system integrations, ensuring your technology infrastructure remains current and functional."
                    },
                    {
                        title: "Financially Backed Service Level Agreements (SLAs)",
                        description: "We provide effective, efficient, and high-quality support through comprehensive SLAs that are financially backed. This commitment ensures accountability and guarantees that your organization receives the level of service you expect and deserve."
                    }
                ].map((service, index) => (
                    <Fade direction="right" key={index} delay={index * 100}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                {service.title}
                            </h4>
                            <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>

        {/* Strengths Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <Fade direction="right" triggerOnce>
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {[
                        { metric: "24X7", label: "IT Help Desk" },
                        { metric: "100%", label: "Customer Satisfaction" },
                        { metric: "2X", label: "Faster Ticket Processing" },
                        { metric: "100%", label: "Service KPIs Met" }
                    ].map((strength, index) => (
                        <div key={index} className="bg-[#0b0d0e] text-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="text-3xl font-bold mb-2">{strength.metric}</div>
                            <div className="text-sm font-medium">{strength.label}</div>
                        </div>
                    ))}
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-[#0b0d0e] text-3xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Here is a list of our strengths that will allow you to feel confident about our IT Help Desk Services:
                    </h3>
                    <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                        With nearly two decades of experience in IT support, we bring unparalleled expertise to every engagement. Our team is proficient in various backend and frontend technologies including .NET, Java, PHP, Node.js, Angular, React, Vue.js, JavaScript, HTML, and CSS. We also excel in working with open-source projects, ensuring we can handle any technology stack your organization uses.
                    </p>
                </div>
            </Fade>
        </div>

        <Fade direction="right" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (12).png" alt="Support Procedure" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Well-Defined Support Procedure
                        </h2>
                        <p>
                            We have a well-defined procedure for providing IT Help Desk Support that ensures consistent, high-quality service delivery:
                        </p>
                        <ol className="list-decimal mt-4 space-y-2 text-[#5c5f6e] pl-4">
                            <li><strong>Ticket Creation:</strong> Issues are logged and categorized for proper tracking and prioritization</li>
                            <li><strong>Professional Outreach:</strong> Our team reaches out to understand the issue and provide initial guidance</li>
                            <li><strong>Self-Help Attempts:</strong> We guide users through self-resolution steps when possible</li>
                            <li><strong>Specialist Intervention:</strong> Complex issues are escalated to specialized technicians</li>
                            <li><strong>Resolution & Closure:</strong> Issues are resolved and tickets are closed with satisfaction confirmation</li>
                        </ol>
                    </div>
                </div>
            </div>
        </Fade>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Quick Help Desk Support Without High Overhead Costs
                        </h2>
                        <p>
                            Our professionals work efficiently to provide rapid support while maintaining the highest quality standards. Our solutions are accessible 24/7/365 through phone, email, web chat, and web portal channels, ensuring that help is always available when you need it.
                            <br /><br />
                            We include free ITSM access with full API interaction for third-party ticketing systems, allowing seamless integration with your existing workflows and processes. This comprehensive approach ensures that your IT support needs are met without the burden of high overhead costs typically associated with in-house IT departments.
                        </p>
                    </div>
                    <div className="feature-image">
                        <img src="/Images/Group 363.png" alt="Cost-Effective Support" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        {/* CTA Button Section */}
        <div className="max-w-7xl mx-auto p-8 text-center">
            <Fade direction="up" triggerOnce>
                <Button className="bg-[#0b0d0e] hover:bg-[#1a1d1e] text-white px-8 py-4 rounded-lg font-semibold text-lg">
                    Get Offshore IT Help Desk Services NOW
                </Button>
            </Fade>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <Fade direction="right" triggerOnce>
                <div className="text-center mb-12">
                    <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Frequently Asked Questions
                    </h3>
                </div>
            </Fade>
            <FAQAccordion
                faqs={[
                    {
                        question: "What is IT Help Desk Support Service?",
                        answer: "IT Help Desk Support Service is a centralized resource that provides technical assistance and support to users experiencing IT-related issues. Our service includes troubleshooting, guidance, and resolution for hardware, software, and network problems."
                    },
                    {
                        question: "What does an IT help desk technician do?",
                        answer: "IT help desk technicians diagnose and resolve technical issues, provide user guidance, maintain documentation, escalate complex problems to specialists, and ensure customer satisfaction through effective communication and problem-solving skills."
                    },
                    {
                        question: "What is the difference between the help desk and IT support?",
                        answer: "While both provide technical assistance, help desk services typically focus on immediate issue resolution and user support, while IT support encompasses broader infrastructure management, system administration, and strategic technology planning."
                    },
                    {
                        question: "What are the hard skills of the IT help desk?",
                        answer: "Essential hard skills include technical knowledge of operating systems, networking, hardware troubleshooting, software installation, database management, cybersecurity awareness, and proficiency with help desk software and ticketing systems."
                    }
                ]}
            />
        </div>

        <div className="w-full my-10">
            <div className="bg-[#fffcec] flex items-center justify-center p-6">
                <div>
                    <div className="justify-start text-[#f9d300] text-lg font-medium font-['Urbanist'] leading-7">Ready for Reliable IT Support?</div>
                    <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Get offshore IT Help Desk Services NOW.</div>
                    <div className="flex">
                        <div className="flex-1 relative">
                            <input
                                type="email"
                                placeholder="Enter your business email"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            />
                            <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">You can unsubscribe at any time. Read our </span>
                        <span className="text-[#f9d300] text-base font-normal font-['Urbanist'] leading-loose">privacy policy</span>
                        <span className="text-[#838696] text-base font-normal font-['Urbanist'] leading-loose">.</span>
                    </div>
                </div>
                <div className="h-80 w-auto">
                    <img src="/Images/Mail-bro 2.png" className="w-full h-full" alt="Contact Sadel" />
                </div>
            </div>
        </div>
    </div>
);

export default ITHelpDeskPage; 