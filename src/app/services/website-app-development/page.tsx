import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

const WebsiteAppDevelopmentPage = () => (
    <div>
        <div className="bg-[#fffcec] p-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                {/* Left Content */}
                <div className="space-y-8">
                    <Fade direction="up" triggerOnce>
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">Website & App</span>{" "}
                                <span className="hero-title-primary">Development</span>
                            </h1>
                            <p className="hero-description">
                                Empowering your digital vision with comprehensive web development solutions. Trust AFAQ for clear results and smooth processes that transform your business ideas into powerful digital experiences.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/contact-us">
                                    <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                                        Get a free 30-minute consultation with a Professional Labs expert.
                                    </Button>
                                </Link>
                                {/* <Button variant="outline">Explore Services</Button> */}
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* Right Illustration */}
                <div className="relative">
                    <Fade direction="left" triggerOnce>
                        {/* Background Elements */}
                        <img src="/Images/Work chat-bro 1.png" alt="Website & App Development" />
                    </Fade>
                </div>
            </div>
        </div>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (18).png" alt="Web Development Process" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Empowering Your Business with Website Development
                        </h2>
                        <p>
                            In today&apos;s digital landscape, every business requires a strong online presence to engage potential customers effectively. An enterprise website serves as a powerful tool that enhances brand visibility while enabling complex interactions and critical path routing, all while addressing marketing and personalization needs. Developing such a multifaceted application demands expert resources with years of cross-technology and industry experience.
                            <br /><br />
                            At our web development agency, we understand the intricacies of your business and strive to present them clearly and concisely, with exceptional UI and user-friendly functionality. Whether you operate in a B2B or B2C environment, our team leverages its analysis, strategy, development, and redesign expertise to create enterprise websites that meet your specific requirements.
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
                            Excellence in Crafting Web Solutions at AFAQ
                        </h2>
                        <p>
                            Our web development services encompass a broad spectrum of web-based software, delivering exceptional user experiences that set your business apart. While web solutions may appear similar, we take a unique approach and understand the winning factors for each project.
                            <br /><br />
                            Our web development services are designed to cater to your specific goals and requirements, offering custom interactive solutions and content management systems. First impressions matter, and our developers work tirelessly to create visually stunning, fast-loading, and user-friendly websites. Whether you&apos;re seeking to update an existing site or develop a new one from scratch, our team has the experience to bring your vision to life. Collaborate with us today to elevate your online presence to new heights!
                        </p>
                    </div>
                    <div className="feature-image">
                        <img src="/Images/Frame (19).png" alt="Web Solutions Excellence" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        {/* Types of Web Development Services Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <Fade direction="left" triggerOnce>
                <div className="text-center mb-12">
                    <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Types of Web Development Services
                    </h3>
                </div>
            </Fade>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        icon: "💻",
                        title: "Web Application Development",
                        description: "Custom web applications built with modern technologies and best practices"
                    },
                    {
                        icon: "🛒",
                        title: "E-commerce Development",
                        description: "Complete online store solutions with payment processing and inventory management"
                    },
                    {
                        icon: "☕",
                        title: "Java Web Development",
                        description: "Robust enterprise applications using Java frameworks and technologies"
                    },
                    {
                        icon: "🌐",
                        title: "Drupal Development",
                        description: "Content management solutions with Drupal's powerful CMS platform"
                    },
                    {
                        icon: "🛍️",
                        title: "Magento Development",
                        description: "Advanced e-commerce platforms built on Magento's enterprise framework"
                    },
                    {
                        icon: "⚙️",
                        title: "Custom Web Development",
                        description: "Tailored solutions designed specifically for your unique business requirements"
                    }
                ].map((service, index) => (
                    <Fade direction="right" key={index} delay={index * 100}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">{service.icon}</div>
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

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (20).png" alt="What We Offer" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            What We Offer
                        </h2>
                        <p>
                            At our web development agency, we pride ourselves on our efficient development process and extensive expertise, enabling us to deliver exceptional web development services that exceed expectations.
                        </p>
                        <ul className="list-disc mt-4 space-y-2 text-[#5c5f6e]">
                            <li>Complete analysis of requirements and business objectives</li>
                            <li>Intuitive and visually appealing UI/UX design</li>
                            <li>Secure, scalable, and high-performing solutions</li>
                            <li>Mobile-responsive designs for all devices</li>
                            <li>Tailored features to meet specific business needs</li>
                            <li>Engaging visual content and multimedia integration</li>
                            <li>Comprehensive maintenance and support services</li>
                        </ul>
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
                            Why Choose AFAQ for Web Development?
                        </h2>
                        <p>
                            Our web development services are renowned for creating exceptional digital experiences. Here are just a few ways we set ourselves apart:
                        </p>
                        <ul className="list-disc mt-4 space-y-2 text-[#5c5f6e]">
                            <li>Agile methodology for efficient web design and development</li>
                            <li>Recognized for award-winning web solutions and sites</li>
                            <li>Competitive rates for our top-tier web design and development talent</li>
                            <li>A global team of 300+ cross-functional experts across the Americas, Europe, and Asia</li>
                            <li>In-house front-end experts, including Business Analysts, UX/UI Specialists, and Designers</li>
                            <li>Collaborative, communicative, and friendly approach to client relationships</li>
                            <li>Proven track record of successful web development projects</li>
                            <li>Rigorous quality assurance testing before launch</li>
                            <li>Shorter development timelines that translate to lower costs</li>
                            <li>Unmatched expertise in open technologies and modern frameworks</li>
                        </ul>
                    </div>
                    <div className="feature-image">
                        <img src="/Images/Group 74.png" alt="Why Choose AFAQ" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        {/* Consultation Button Section */}
        <div className="max-w-7xl mx-auto p-8 text-center">
            <Fade direction="up" triggerOnce>
                <Link href="/contact-us">       
                    <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-4 rounded-lg font-semibold text-lg">
                        Yes, we can help you with a customized approach
                    </Button>
                </Link>
            </Fade>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto p-8">
            <Fade direction="up" triggerOnce>
                <div className="text-center mb-12">
                    <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Frequently Asked Questions about Web Development
                    </h3>
                </div>
            </Fade>
            <FAQAccordion
                faqs={[
                    {
                        question: "What exactly is web development?",
                        answer: "Web development encompasses the complete process of creating, building, and maintaining websites and web applications. This comprehensive discipline involves multiple tasks including web page design, programming and coding, server configuration, database management, and integration of various software components to deliver functional digital solutions."
                    },
                    {
                        question: "What different types of web development services do you offer?",
                        answer: "We provide a comprehensive range of web development services including front-end development for user interfaces, back-end development for server-side functionality, full-stack development for complete solutions, e-commerce development for online stores, content management system (CMS) development for easy content management, and ongoing website maintenance and technical support services."
                    },
                    {
                        question: "What essential skills and technologies are required for modern web development?",
                        answer: "Modern web development requires proficiency in fundamental programming languages such as HTML, CSS, and JavaScript, along with expertise in popular frameworks like React, Angular, and Node.js. Additionally, successful web developers need strong design sensibilities, analytical problem-solving abilities, effective communication skills, and the ability to adapt to rapidly evolving technologies and industry best practices."
                    },
                    {
                        question: "What is the typical timeline for developing a website?",
                        answer: "Website development timelines vary significantly based on project complexity and scope. Simple websites with basic functionality can typically be completed within a few weeks, while complex websites featuring advanced features, custom functionality, and sophisticated integrations may require several months or more. Project duration depends on factors such as design complexity, feature requirements, content volume, and testing needs."
                    },
                    {
                        question: "How do web development service costs typically vary?",
                        answer: "Web development costs depend on project complexity, feature requirements, and the development company's expertise and rates. Basic websites typically range from several hundred to a few thousand dollars, while complex websites with advanced functionality, custom features, and sophisticated integrations can cost tens of thousands or more. We recommend obtaining a detailed quote from your chosen web development company to receive an accurate project estimate tailored to your specific requirements."
                    }
                ]}
            />
        </div>

        {/* <div className="w-full my-10">
                <div className="bg-[#fffcec] flex items-center justify-center p-6">
                    <div>
                        <div className="justify-start text-primary text-lg font-medium font-['Urbanist'] leading-7">Ready to Build Your Digital Presence?</div>
                        <div className="justify-start text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[64px]">Transform your business with custom web development solutions.</div>
                        <div className="flex">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    placeholder="Enter your business email"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a78bd] focus:border-transparent"
                                />
                                <Button className="absolute right-2 top-1/2 -translate-y-1/2 px-8">
                                    Get Started
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
                        <img src="/Images/Mail-bro 2.png" className="w-full h-full" alt="Contact AFAQ" />
                    </div>
                </div>
            </div> */}
    </div>
);

export default WebsiteAppDevelopmentPage; 