import { Button } from "@/components/ui/button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const SadelsDataDrivensolutions = () => (
    <div>
        <div className="bg-[#fffcec] p-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
                {/* Left Content */}
                <div className="space-y-8">
                    <Fade direction="up" triggerOnce>
                        <div>
                            <h1 className="hero-title">
                                <span className="hero-title-accent">AI-Powered</span>{" "}
                                <span className="hero-title-primary">Business Intelligence</span>

                            </h1>
                            <p className="hero-description">
                                Transform your organization with Sadel&aosp;s cutting-edge AI solutions. We deliver intelligent automation, predictive analytics, and machine learning capabilities that drive operational excellence and competitive advantage across your enterprise.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                    Get Free Consultation
                                </Button>
                                <Button variant="outline">Explore AI Solutions</Button>
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* Right Illustration */}
                <div className="relative">
                    <Fade direction="left" triggerOnce>
                        {/* Background Elements */}
                        <img src="/Images/defender-for-identity-banner.png" alt="Active Directory Solutions" />
                    </Fade>
                </div>
            </div>
        </div>

        <div className="feature-section">
            <div className="feature-container">
                {/* Right: Illustration */}
                <div className="feature-image">
                    <img src="/Images/Frame (21).png" alt="Active Directory Architecture" className="w-full max-w-xs h-auto" />
                </div>
                {/* Left: Text */}
                <div className="feature-content">
                    <h2>
                        Intelligent Data Analytics & Machine Learning
                    </h2>
                    <p>
                        Sadel&apos;s AI platform transforms raw data into actionable business intelligence through advanced machine learning algorithms and predictive modeling. Our solutions process complex datasets in real-time, identifying patterns and trends that human analysis might miss.
                        <br /><br />
                        We specialize in deploying neural networks, deep learning models, and natural language processing systems that adapt to your business context. Our AI frameworks integrate seamlessly with existing data infrastructure, providing immediate insights while continuously learning and improving performance.
                    </p>

                </div>

            </div>
        </div>


        <div className="feature-section">
            <div className="feature-container">
                {/* Right: Illustration */}

                {/* Left: Text */}
                <div className="feature-content">
                    <h2>
                        Automated Process Optimization & Decision Support
                    </h2>
                    <p>
                        Sadel&apos;s intelligent automation solutions leverage robotic process automation (RPA) combined with cognitive AI to streamline complex business workflows. Our systems understand context, make decisions, and execute tasks with minimal human intervention.
                        <br /><br />
                        Through computer vision, natural language understanding, and predictive algorithms, we create AI agents that handle document processing, customer interactions, and operational tasks. These solutions reduce processing time by up to 80% while maintaining accuracy and compliance standards.
                    </p>
                </div>
                <div className="feature-image">
                    <img src="/Images/Frame (21).png" alt="AD Security Framework" className="w-full max-w-xs h-auto" />
                </div>
            </div>
        </div>

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
                            Advanced Threat Detection & Cybersecurity AI
                        </h2>
                        <p>
                            Sadel&apos;s AI-powered security solutions provide proactive threat detection and response capabilities that adapt to evolving cyber threats. Our machine learning models analyze network behavior, identify anomalies, and predict potential security breaches before they occur.
                            <br /><br />
                            Key security capabilities include:
                        </p>
                        <ul className="list-disc">
                            <li >

                                Real-time behavioral analysis across all network endpoints and user activities
                            </li>
                            <li >

                                Predictive threat modeling with automated incident response protocols
                            </li>
                            <li >

                                Intelligent fraud detection with machine learning pattern recognition
                            </li>
                            <li >

                                Adaptive security policies that evolve with threat landscape changes
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </Fade>

    </div>
);

export default SadelsDataDrivensolutions;