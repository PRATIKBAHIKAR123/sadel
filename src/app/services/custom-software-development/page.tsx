import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const CustomSoftwareDevelopmentPage = () => (
    <div>
        <div className="bg-[#fffcec] p-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                {/* Left Content */}
                <div className="space-y-8">
                    <Fade direction="up" triggerOnce>
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">Drive Innovation.</span>{" "}
                                <span className="hero-title-primary">Scale Efficiently.</span>{" "}
                                <span className="hero-title-accent">Secure Your Digital Future.</span>
                            </h1>
                            <p className="hero-description">
                                At Sadel, we transform your ideas into enterprise-grade applications that are fast, scalable, and secure. Whether you&apos;re building a new digital product or modernizing a legacy system, our custom software development services ensure performance, flexibility, and business value on time and within budget.
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
                        <img src="/Images/Version control-bro 1.png" alt="Custom Software Development" />
                    </Fade>
                </div>
            </div>
        </div>

        <Fade direction="left" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (4).png" alt="Software Development Process" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Our Capabilities
                        </h2>
                        <p>
                            At Sadel, we offer a comprehensive suite of software development services tailored to meet the unique needs of your business. Whether you&apos;re a startup or an enterprise, our capabilities span across various technologies and platforms to deliver innovative and scalable digital solutions that drive real business value.
                            <br /><br />
                            Our team of experienced developers and architects work collaboratively to understand your specific requirements and deliver solutions that not only meet your current needs but also scale with your future growth.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>

        {/* Capabilities Grid Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    {
                        number: "01",
                        title: "Custom Application Development",
                        description: "We specialize in creating bespoke software solutions for desktop, web, and mobile platforms. Our applications feature robust architecture, exceptional user experience, and seamless integration capabilities that align perfectly with your business processes and objectives."
                    },
                    {
                        number: "02",
                        title: "Enterprise Software Solutions",
                        description: "Transform your business operations with comprehensive enterprise solutions including ERP, CRM, HRMS, and automated workflow systems. Our enterprise software enhances productivity, improves visibility, and streamlines complex business processes across your organization."
                    },
                    {
                        number: "03",
                        title: "Web & Mobile Development",
                        description: "Full-stack development expertise using modern frameworks like React, Angular, and Vue.js for web applications, and Flutter, React Native, Swift, and Kotlin for mobile development. We deliver both native and cross-platform solutions that provide exceptional user experiences."
                    },
                    {
                        number: "04",
                        title: "Cloud-Native Development",
                        description: "Build scalable, resilient applications using microservices and serverless architectures. Our cloud expertise spans across AWS, Microsoft Azure, and Google Cloud Platform, ensuring your applications are built for the cloud from the ground up."
                    },
                    {
                        number: "05",
                        title: "API & System Integration",
                        description: "Create custom APIs and secure integrations that connect your applications, databases, and third-party services seamlessly. From payment gateways to CRM systems, we ensure your technology ecosystem works together harmoniously."
                    },
                    {
                        number: "06",
                        title: "UI/UX Design",
                        description: "Craft intuitive, engaging, and accessible user interfaces through comprehensive user research, wireframes, and interactive prototypes. Our design process focuses on creating experiences that users love and that drive business outcomes."
                    },
                    {
                        number: "07",
                        title: "DevOps & CI/CD Automation",
                        description: "Adopt modern DevOps methodologies to automate your software lifecycle. We implement CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure as code to accelerate your development and deployment processes."
                    },
                    {
                        number: "08",
                        title: "Software Modernization & Support",
                        description: "Transform legacy systems through re-platforming, re-architecting, and code refactoring. We provide ongoing maintenance, performance monitoring, and continuous improvement to ensure your software remains current and efficient."
                    }
                ].map((capability, index) => (
                    <Fade direction="right" key={index} delay={index * 100}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#f9d300] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {capability.number}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                        {capability.title}
                                    </h4>
                                    <p className="text-[#5c5f6e] text-sm leading-relaxed">
                                        {capability.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>

        {/* Technology Stack Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <Fade direction="left" triggerOnce>
                <div className="text-center mb-12">
                    <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Technology Stack
                    </h3>
                </div>
            </Fade>

            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6">
                {[
                    {
                        category: "Frontend",
                        technologies: ["React", "Angular", "Vue.js"],
                        icon: "🎨"
                    },
                    {
                        category: "Backend",
                        technologies: [".NET", "Java", "Node.js", "Python"],
                        icon: "⚙️"
                    },
                    {
                        category: "Mobile",
                        technologies: ["Flutter", "Swift", "Kotlin", "Xamarin"],
                        icon: "📱"
                    },
                    {
                        category: "Cloud",
                        technologies: ["Microsoft Azure", "AWS", "Google Cloud"],
                        icon: "☁️"
                    },
                    {
                        category: "Database",
                        technologies: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
                        icon: "🗄️"
                    },
                    {
                        category: "DevOps",
                        technologies: ["Docker", "Kubernetes", "GitHub", "Terraform"],
                        icon: "🔧"
                    }
                ].map((stack, index) => (
                    <Fade direction="right" key={index} delay={index * 100}>
                        <div className="bg-white min-h-[200px] rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-3xl mb-4">{stack.icon}</div>
                            <h4 className="text-lg font-bold text-[#0b0d0e] mb-3 font-['Urbanist']">
                                {stack.category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {stack.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-[#fffcec] text-[#0b0d0e] px-3 py-1 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
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
                            Why Choose Sadel for Software Development?
                        </h2>
                        <p>
                            Our software development services are built on a foundation of technical excellence, industry expertise, and unwavering commitment to client success. Here&apos;s what sets us apart:
                        </p>
                        <ul className="list-disc mt-4 space-y-2 text-[#5c5f6e] pl-4">
                            <li><strong>Agile & Scalable Development Process:</strong> We follow proven agile methodologies that ensure flexibility, transparency, and rapid delivery</li>
                            <li><strong>Domain Expertise Across Industries:</strong> Deep understanding of various business domains enables us to deliver solutions that truly address your challenges</li>
                            <li><strong>Certified Engineers & Dedicated Teams:</strong> Our team consists of certified professionals with extensive experience in cutting-edge technologies</li>
                            <li><strong>Global Delivery with Onshore/Offshore Models:</strong> Flexible engagement models that optimize costs while maintaining quality and communication</li>
                            <li><strong>End-to-End Security & Compliance Focus:</strong> Security-first approach with built-in compliance measures for your peace of mind</li>
                            <li><strong>Transparent Communication & Rapid Prototyping:</strong> Clear communication channels and quick prototyping to validate ideas early</li>
                        </ul>
                    </div>
                    <div className="feature-image">
                        <img src="/Images/Frame (6).png" alt="Why Choose Sadel" className="w-full max-w-xs h-auto" />
                    </div>
                </div>
            </div>
        </Fade>

        {/* Industries Section */}
        <div className="max-w-7xl mx-auto p-8 mt-10">
            <Fade direction="left" triggerOnce>
                <div className="text-center mb-12">
                    <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                        Industries We Serve
                    </h3>
                </div>
            </Fade>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Healthcare", icon: "🏥" },
                    { name: "Finance & Insurance", icon: "💰" },
                    { name: "eCommerce & Retail", icon: "🛒" },
                    { name: "Logistics & Transportation", icon: "🚚" },
                    { name: "Government & Education", icon: "🎓" },
                    { name: "Manufacturing & Energy", icon: "⚡" }
                ].map((industry, index) => (
                    <Fade direction="up" key={index} delay={index * 100}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="text-4xl mb-4">{industry.icon}</div>
                            <h4 className="text-lg font-bold text-[#0b0d0e] font-['Urbanist']">
                                {industry.name}
                            </h4>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>

        <Fade direction="right" triggerOnce>
            <div className="feature-section">
                <div className="feature-container">
                    {/* Right: Illustration */}
                    <div className="feature-image">
                        <img src="/Images/Frame (7).png" alt="Let's Build Together" className="w-full max-w-xs h-auto" />
                    </div>
                    {/* Left: Text */}
                    <div className="feature-content">
                        <h2>
                            Let&lsquo;s Build Together
                        </h2>
                        <p>
                            We understand that every business has unique challenges and opportunities. That&lsquo;s why our development approach is flexible, collaborative, and results-driven. We work closely with your team to understand your vision, requirements, and constraints, ensuring that the final solution not only meets your immediate needs but also positions you for future success.
                            <br /><br />
                            Our collaborative process includes regular check-ins, transparent communication, and iterative development cycles that allow you to see progress and provide feedback throughout the development journey.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>

    </div>
);

export default CustomSoftwareDevelopmentPage; 