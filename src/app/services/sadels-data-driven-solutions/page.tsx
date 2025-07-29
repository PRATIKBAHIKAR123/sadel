import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

const SadelsDataDrivensolutions = () => {
    const faqs = [
        {
            question: "What are data-driven solutions and how can they benefit my business?",
            answer: "Data-driven solutions use advanced analytics, machine learning, and business intelligence to transform raw data into actionable insights. They benefit your business by improving decision-making, identifying new opportunities, optimizing operations, reducing costs, and providing competitive advantages through predictive analytics and real-time insights."
        },
        {
            question: "What types of data-driven services does AFAQ offer?",
            answer: "AFAQ offers comprehensive data-driven services including data strategy consulting, advanced analytics implementation, business intelligence development, predictive modeling, data visualization, real-time analytics, data engineering, and continuous optimization. We provide end-to-end solutions tailored to your specific business needs and objectives."
        },
        {
            question: "How does AFAQ ensure data quality and accuracy in analytics?",
            answer: "We implement robust data quality frameworks that include data validation, cleansing, standardization, and governance processes. Our solutions use advanced algorithms to detect anomalies, ensure data consistency, and maintain high accuracy standards. We also provide regular data quality audits and monitoring to maintain reliability."
        },
        {
            question: "Can data-driven solutions integrate with my existing systems?",
            answer: "Yes, our data-driven solutions are designed to seamlessly integrate with your existing IT infrastructure, databases, and business applications. We ensure compatibility with your current systems while providing enhanced analytics capabilities without disrupting ongoing operations."
        },
        {
            question: "How long does it take to implement data-driven solutions?",
            answer: "Implementation timelines vary based on complexity and scope. Simple analytics dashboards can be completed in 4-6 weeks, while comprehensive data-driven transformations may take 2-4 months. We provide detailed project timelines and keep you updated throughout the implementation process."
        },
        {
            question: "What kind of support and training does AFAQ provide?",
            answer: "We provide comprehensive support including user training, technical documentation, ongoing maintenance, performance optimization, and 24/7 monitoring. Our team ensures your staff understands how to use the analytics tools effectively and can interpret insights to drive business decisions."
        },
        {
            question: "How can I measure the ROI of data-driven solutions?",
            answer: "We establish clear KPIs and metrics during the planning phase to measure ROI. These typically include efficiency improvements, cost reductions, revenue growth, decision-making speed, and accuracy enhancements. We provide regular reports and analytics to track performance and demonstrate value."
        },
        {
            question: "Do I need a large amount of data to benefit from these solutions?",
            answer: "No, data-driven solutions can be valuable even with smaller datasets. We can work with your existing data and help you identify additional data sources that could provide valuable insights. Our solutions scale with your data growth and can start small while expanding over time."
        },
        {
            question: "How do you ensure data security and privacy compliance?",
            answer: "We implement enterprise-grade security measures including data encryption, access controls, audit trails, and compliance with relevant regulations (GDPR, HIPAA, etc.). We ensure data privacy through anonymization techniques and secure data handling practices throughout the analytics process."
        },
        {
            question: "What makes AFAQ's data-driven approach different from others?",
            answer: "Our approach combines deep technical expertise with business acumen. We focus on actionable insights rather than just data visualization, provide customized solutions rather than off-the-shelf products, and ensure long-term success through continuous optimization and support."
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
                                    <span className="hero-title-accent">Revolutionize Your Business:</span>{" "}
                                    <span className="hero-title-primary">Harness the Power of Data-Driven Solutions!</span>
                                </h1>
                                <p className="hero-description">
                                    Transform your organization with AFAQ&apos;s comprehensive data-driven consulting services designed to unlock new potentials for your business. Our cutting-edge analytics solutions ensure you stay ahead in an ever-evolving digital landscape.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold">
                                            Get a free 30-minute consultation with a AFAQ expert
                                        </Button>
                                    </Link>
                                    {/* <Button variant="outline">Explore Data Solutions</Button> */}
                                </div>
                            </div>
                        </Fade>
                    </div>
                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            {/* Background Elements */}
                            <img src="/Images/defender-for-identity-banner.png" alt="Data-Driven Solutions" />
                        </Fade>
                    </div>
                </div>
            </div>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (21).png" alt="Data Strategy" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Empowering Your Business with Data-Driven Insights
                            </h2>
                            <p>
                                At AFAQ, we harness the power of advanced analytics and business intelligence to unlock new potentials for your business. Our comprehensive data-driven consulting services are designed to cater to your unique needs, ensuring you stay ahead in an ever-evolving digital landscape.
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
                                Data Strategy Consulting
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Customized Data Roadmaps for Success</h3>
                            <p>
                                We work closely with you to develop tailored data strategies that align with your business objectives. Our experts assess your current data infrastructure, identify key improvement areas, and chart a clear roadmap to integrate data-driven solutions that drive growth and efficiency.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (13).png" alt="Data Strategy Consulting" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (14).png" alt="Advanced Analytics" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Advanced Analytics & Business Intelligence
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Bespoke Analytics Tools Tailored to Your Needs</h3>
                            <p>
                                Our team of seasoned data scientists specializes in creating custom analytics solutions. From predictive modeling to real-time dashboards, we build tools that not only solve complex business problems but also enhance operational efficiency and decision-making capabilities.
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
                                Data Engineering & Infrastructure
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimizing Your Data Infrastructure for Analytics</h3>
                            <p>
                                Data is the foundation of all insights. Our data engineering services focus on building robust, scalable data infrastructure that effectively supports advanced analytics. We ensure that your data is clean, organized, and ready to deliver valuable business insights.
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
                            <img src="/Images/Frame (17).png" alt="Predictive Analytics" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Predictive Analytics & Machine Learning
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Harnessing the Power of Advanced Algorithms</h3>
                            <p>
                                Leverage our expertise in predictive analytics and machine learning to transform your business processes. We develop models that can forecast trends, identify opportunities, and provide deep insights, giving you a competitive edge in your market.
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
                                Real-Time Analytics & Monitoring
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant Insights for Proactive Decision Making</h3>
                            <p>
                                Unlock the power of real-time data with our live analytics services. From operational dashboards to automated alerts, our solutions help you monitor performance, detect anomalies, and make informed decisions as events unfold.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Images/Frame (19).png" alt="Real-Time Analytics" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade direction="left" triggerOnce>
                <div className="feature-section">
                    <div className="feature-container">
                        {/* Right: Illustration */}
                        <div className="feature-image">
                            <img src="/Images/Frame (20).png" alt="Data Integration" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Data Integration & ETL Services
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Seamlessly Connecting Your Data Sources</h3>
                            <p>
                                Integration is key to maximizing the value of your data. We ensure that our data-driven solutions seamlessly integrate with your existing IT infrastructure, creating unified data pipelines that enhance your analytics capabilities without disrupting current operations.
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
                                Continuous Optimization & Support
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ongoing Enhancement for Maximum Value</h3>
                            <p>
                                Our commitment to your success extends beyond deployment. We provide continuous optimization and support to ensure your data-driven solutions always perform optimally, adapting to new business challenges and opportunities.
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
                            <img src="/Images/Frame (21).png" alt="Why Choose AFAQ" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Left: Text */}
                        <div className="feature-content">
                            <h2>
                                Why Choose AFAQ for Data-Driven Solutions?
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovative Solutions, Tangible Results</h3>
                                    <p className="text-gray-700">
                                        We focus on practical, results-driven data solutions that deliver measurable improvements in efficiency, customer experience, and return on investment.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team, Collaborative Approach</h3>
                                    <p className="text-gray-700">
                                        Our team of data scientists, analysts, and industry specialists work collaboratively with your organization to ensure successful implementation and adoption.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Security, Committed to Privacy</h3>
                                    <p className="text-gray-700">
                                        We are committed to data security and privacy, ensuring compliance with all relevant regulations and industry standards while protecting your valuable information.
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
                                Frequently Asked Questions (FAQs) for Data-Driven Solutions at AFAQ
                            </h2>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default SadelsDataDrivensolutions;