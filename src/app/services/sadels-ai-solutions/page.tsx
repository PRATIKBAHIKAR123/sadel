import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

const AIConsultingServices = () => {
    const faqs = [
        {
            question: "What is AI Consulting and how can it benefit my business?",
            answer: "AI Consulting involves strategic guidance and implementation of artificial intelligence solutions to solve business challenges. It can benefit your business by automating processes, improving decision-making, enhancing customer experiences, reducing costs, and providing competitive advantages through data-driven insights and predictive analytics."
        },
        {
            question: "What kind of AI services does Sadel offer?",
            answer: "Sadel offers comprehensive AI services including AI strategy consulting, custom AI solution development, data engineering, machine learning and deep learning implementation, natural language processing, AI integration services, and continuous support and maintenance. We provide end-to-end AI solutions tailored to your specific business needs."
        },
        {
            question: "Is my business data safe when implementing AI solutions?",
            answer: "Absolutely. We prioritize data security and privacy in all our AI implementations. We follow industry best practices for data protection, implement robust security measures, ensure compliance with relevant regulations, and maintain strict confidentiality protocols to keep your business data secure throughout the AI development and deployment process."
        },
        {
            question: "How does Sadel ensure the AI solution fits my specific business needs?",
            answer: "We follow a collaborative approach that begins with a thorough assessment of your current systems, business objectives, and challenges. Our experts work closely with your team to understand your unique requirements, develop customized AI roadmaps, and create tailored solutions that align with your specific business goals and operational needs."
        },
        {
            question: "Can AI be integrated with my existing systems?",
            answer: "Yes, our AI integration services are designed to seamlessly merge AI solutions with your existing IT infrastructure. We ensure that new AI capabilities enhance your current systems without disrupting operations, providing smooth integration that maximizes the benefits while maintaining system stability and performance."
        },
        {
            question: "Do I need a large budget to start with AI in my company?",
            answer: "No, AI implementation can be scaled to fit various budget levels. We offer flexible solutions that can start small and grow with your business. We work with you to identify the most impactful AI opportunities within your budget constraints and provide cost-effective solutions that deliver measurable ROI."
        },
        {
            question: "How long does it take to implement an AI solution?",
            answer: "Implementation timelines vary based on the complexity and scope of the AI solution. Simple AI integrations can be completed in 4-8 weeks, while comprehensive AI transformations may take 3-6 months. We provide detailed project timelines during the planning phase and keep you updated throughout the implementation process."
        },
        {
            question: "What kind of post-implementation support does Sadel offer?",
            answer: "We provide comprehensive post-implementation support including 24/7 monitoring, regular maintenance, performance optimization, system updates, and ongoing training for your team. Our support extends beyond deployment to ensure your AI solutions continue performing optimally and adapting to new business challenges."
        },
        {
            question: "How can I measure the success of the AI implementation?",
            answer: "We establish clear KPIs and metrics during the planning phase to measure AI implementation success. These typically include efficiency improvements, cost reductions, accuracy enhancements, processing time reductions, and ROI metrics. We provide regular reports and analytics to track performance and demonstrate the value of your AI investment."
        },
        {
            question: "I'm new to AI. How does Sadel ensure I understand the technology and its impact?",
            answer: "We provide comprehensive education and training throughout the AI implementation process. Our team explains complex AI concepts in simple terms, offers hands-on training for your staff, provides detailed documentation, and ensures you understand how the AI solution works and its business impact. We're committed to your success and knowledge."
        }
    ];

    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <Fade direction="up" triggerOnce>
                        <div className="space-y-8">
                            <div>
                                <h1 className="hero-title">
                                    <span className="hero-title-accent">Revolutionize Your Business:</span>{" "}
                                    <span className="hero-title-primary">Harness the Power of Cutting-Edge AI Solutions!</span>
                                </h1>
                                <p className="hero-description">
                                    Transform your organization with Sadel&apos;s comprehensive AI consulting services designed to unlock new potentials for your business. Our cutting-edge AI solutions ensure you stay ahead in an ever-evolving digital landscape.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                            Get a free 30-minute consultation with a Sadel expert
                                        </Button>
                                    </Link>
                                    {/* <Button variant="outline">Explore AI Solutions</Button> */}
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            {/* Background Elements */}
                            <img src="/Images/defender-for-identity-banner.png" alt="AI Solutions" />
                        </Fade>
                    </div>
                </div>
            </div>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (21).png" alt="AI Strategy" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Empowering Your Business with AI
                            </h2>
                            <p>
                                At Sadel, we harness the power of Artificial Intelligence to unlock new potentials for your business. Our comprehensive AI consulting services are designed to cater to your unique needs, ensuring you stay ahead in an ever-evolving digital landscape.
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
                                AI Strategy Consulting
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Customized AI Roadmaps for Success</h3>
                            <p>
                                We work closely with you to develop tailored AI strategies that align with your business objectives. Our experts assess your current systems, identify key improvement areas, and chart a clear roadmap to integrate AI solutions that drive growth and efficiency.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (13).png" alt="AI Strategy Consulting" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (14).png" alt="AI Development" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                AI Solution Development
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Bespoke AI Tools Tailored to Your Needs</h3>
                            <p>
                                Our team of seasoned developers specializes in creating custom AI solutions. From machine learning models to advanced analytics, we build tools that not only solve complex business problems but also enhance operational efficiency and decision-making capabilities.
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
                                Data Engineering
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimizing Your Data for AI</h3>
                            <p>
                                Data is the fuel that powers AI. Our data engineering services focus on preparing and structuring your data to effectively feed AI algorithms. We ensure that your data is clean, organized, and ready to deliver valuable insights.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (16).png" alt="Data Engineering" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (17).png" alt="Machine Learning" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Machine Learning and Deep Learning
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Harnessing the Power of Advanced Algorithms</h3>
                            <p>
                                Leverage our expertise in machine learning and deep learning to transform your business processes. We develop models that can predict outcomes, automate tasks, and provide deep insights, giving you a competitive edge.
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
                                Natural Language Processing
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding and Interpreting Human Language</h3>
                            <p>
                                Unlock the power of human language with our NLP services. From chatbots to sentiment analysis, our solutions help you better understand customer needs and enhance engagement through intelligent language processing.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (19).png" alt="NLP Services" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (20).png" alt="AI Integration" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                AI Integration Services
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Seamlessly Merging AI with Your Existing Systems</h3>
                            <p>
                                Integration is key to maximizing the benefits of AI. We ensure that our AI solutions seamlessly integrate with your existing IT infrastructure, enhancing your systems without disrupting current operations.
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
                                Continuous Support and Maintenance
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ongoing Assistance for Uninterrupted Performance</h3>
                            <p>
                                Our commitment to your success extends beyond deployment. We provide continuous support and maintenance to ensure your AI solutions always perform optimally, adapting to new challenges and opportunities.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (11).png" alt="Support Services" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (21).png" alt="Why Choose Sadel" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Why Choose Sadel?
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovative Solutions, Tangible Results</h3>
                                    <p className="text-gray-700">
                                        We focus on practical, results-driven AI solutions that deliver measurable improvements in efficiency, customer experience, and return on investment.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team, Collaborative Approach</h3>
                                    <p className="text-gray-700">
                                        Our team of AI experts, data scientists, and industry specialists work collaboratively with your organization to ensure successful implementation and adoption.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethical AI, Committed to Privacy</h3>
                                    <p className="text-gray-700">
                                        We are committed to ethical AI use, ensuring privacy, security, and compliance with all relevant regulations and industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* FAQ Section */}
            <Fade direction="up" triggerOnce>
                <div className="feature-section">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="feature-content h2">
                                Frequently Asked Questions (FAQs) for AI Consulting at Sadel
                            </h2>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AIConsultingServices;