import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
// import TeachingTechCarousel from "./teachingTech";
import Link from "next/link";

export default function ManagedSOC(){
    return (
        <div>
            <div className="bg-[#fffcec] p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <Fade direction="up" triggerOnce>
                            <h2 className="text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6 text-[#0e0f10]">
                                Keep Your Security Operations Strong and Scalable
                            </h2>
                            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                Sadel Vision delivers a comprehensive managed Security Operations Center (SOC) service that identifies and responds to intrusions across your PCs, servers, networks, cloud security, and email accounts. Our expert security professionals provide real-time monitoring, proactive prevention, and rapid response to security threats of varying complexity.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/contact-us">
                                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                        Get a free consultation with a Sadel expert
                                    </Button>
                                </Link>
                                {/* <Button variant="outline">Learn More</Button> */}
                            </div>
                        </Fade>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <Fade direction="left" triggerOnce>
                            <img
                                src="/Images/managedSOCImage.png"
                                alt="ManagedSOC Image"
                                className="w-full max-w-lg h-auto"
                            />
                        </Fade>
                    </div>
                </div>
            </div>


            {/* Why Choose Sadel Section */}
            <div className="max-w-7xl mx-auto p-3">
                <Fade direction="up" triggerOnce>
                    <div className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px] mb-6">
                        Why Choose Sadel for Your Managed SOC Service?
                    </div>
                    <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-1">
                        We help companies enhance their security operations and provide superior asset safeguarding compared to internal SOCs through our readily available team of cybersecurity experts.
                    </div>
                </Fade>
            </div>

            {/* Key Benefits Grid */}
            <div className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {[
                        "15+ years of experience in cybersecurity",
                        "24/7, India/UAE-based experienced SOC team",
                        "Cloud-centric MSSP based on Prevent-Manage-Detect-Respond model",
                        "Proactive threat intelligence gathering 24x7",
                        "Faster incident response with cutting-edge tools",
                        "Risk mitigation via Machine Learning and behavior analysis",
                        "MDR, XDR, and vulnerability assessment solutions",
                        "Microsoft gold partners with Azure-certified experts"
                    ].map((benefit, index) => (
                        <Fade direction="up" key={index} delay={index * 100}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                        <span className="text-black font-bold text-sm">✓</span>
                                    </div>
                                    <p className="text-[#5c5f6e] text-sm leading-relaxed font-medium">
                                        {benefit}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
                {/* Left Column - Two stacked cards */}
                <div className="lg:col-span-2 grid grid-cols-1 gap-6">
                    {/* First Card - 24/7 Threat Defense */}
                    <div className="bg-[#ffe9db] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                        <div className="flex-1 md:max-w-[50%]">
                            <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                24/7 Threat Defense
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p>Continuous threat detection and faster response powered by threat intelligence and threat hunting. Our advanced monitoring systems ensure your infrastructure remains protected around the clock.</p>
                            </div>
                        </div>
                        <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                            <img
                                src="/Images/a.png"
                                alt="24/7 Threat Defense"
                                className="w-full h-auto object-contain max-w-[280px]"
                            />
                        </div>
                    </div>

                    {/* Second Card - Comprehensive Protection */}
                    <div className="bg-[#fffcec] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                        <div className="flex-1 md:max-w-[50%]">
                            <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                Comprehensive Protection
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p>Integrating capabilities like offensive testing, managed security services, AI, and incident response for advanced security threats. We provide end-to-end protection across your entire digital ecosystem.</p>
                            </div>
                        </div>
                        <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                            <img
                                src="/Images/a-1.png"
                                alt="Comprehensive Protection"
                                className="w-full h-auto object-contain max-w-[280px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column - Tall card */}
                <div className="lg:col-span-1">
                    <div className="bg-[#fff5b9] rounded-3xl p-8 h-full flex flex-col justify-between min-h-[580px] lg:min-h-[620px]">
                        <div className="mb-8">
                            <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                Boosted ROI
                            </div>
                            <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                <p>Leverage existing security tools and technologies to improve operational efficiencies and maximize ROI. Our cost-effective solutions deliver enterprise-level protection without the overhead.</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-end justify-center pt-8">
                            <img
                                src="/Images/Frame.png"
                                alt="Boosted ROI"
                                className="w-full max-w-[320px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Threat Detection Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Security Threat Detection
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto">
                            Our AI-powered 24/7 threat prevention, detection, and response capabilities enhance your security operations. We utilize endpoint management and surveillance capabilities to protect all devices in your environments against endpoint assaults.
                        </p>
                    </div>
                </Fade>
            </div>

            {/* Customer Needs Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Customer&apos;s Managed SOC Needs That We Address
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose max-w-4xl mx-auto mb-8">
                            We customize our solutions for each client, serving SaaS providers from healthcare, manufacturing, banking, retail, eCommerce, and other industries.
                        </p>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: "Lower Total Cost of Ownership (TCO)", description: "Reduce infrastructure and operational costs" },
                        { title: "Comprehensive Security", description: "End-to-end protection across all systems" },
                        { title: "Real Time Service", description: "24/7 monitoring and immediate response" },
                        { title: "Industry Standards Compliance", description: "Meet HIPAA, PCI DSS, and other regulations" }
                    ].map((value, index) => (
                        <Fade direction="up" key={index} delay={index * 100}>
                            <div className="bg-[#0b0d0e] text-white min-h-[150px]  rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-lg font-bold mb-3 font-['Urbanist']">{value.title}</h4>
                                <p className="text-sm text-gray-300">{value.description}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* <TeachingTechCarousel/> */}

            {/* Why Use SOC Service Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Why You Should Use Security Operation Center (Managed SOC) Service
                        </h3>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                        "With 24/7 monitoring, you receive the highest level of protection and assurance",
                        "Faster incident response and prevention",
                        "Avoid financial loss as a result of a data breach",
                        "Gain trust and improve your work relationships with clients"
                    ].map((benefit, index) => (
                        <Fade direction="up" key={index} delay={index * 100}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                        <span className="text-black font-bold text-sm">✓</span>
                                    </div>
                                    <p className="text-[#5c5f6e] text-sm leading-relaxed font-medium">
                                        {benefit}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/contact-us">
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                            Get a free 30-minute consultation with a Sadel expert
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Compliance Section */}
            {/* <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Compliance
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {[
                                { title: "AICPA SOC", description: "Type 1" },
                                { title: "AICPA SOC 2", description: "Type 2" },
                                { title: "AICPA SOC 3", description: "Type 3" },
                                { title: "AICPA SOC", description: "Type 4" }
                            ].map((cert, index) => (
                                <div key={index} className="bg-[#0b0d0e] text-white rounded-full p-6 text-center">
                                    <div className="text-lg font-bold mb-2">{cert.title}</div>
                                    <div className="text-sm text-gray-300">{cert.description}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Learn how to maximize your company&apos;s technological and financial potential with a free consultation from Sadel.
                        </p>
                    </div>
                </Fade>
            </div> */}

            {/* Continuous Vigilance Sections */}
            {/* <div className="max-w-7xl mx-auto p-8">
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Continuous Vigilance</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Cybersecurity begins with constant awareness. Our Security Operations Center (SOC) operates 24/7, continuously collecting, analyzing, and correlating data from multiple sources—such as system logs, network activity, and user behavior. This proactive monitoring allows us to detect threats at the earliest stages, even before they escalate into real risks.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                        <img src="/Images/SOC first section.png" alt="first section" className="w-auto h-80"/>
                    </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Advanced Threat Intelligence</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Our threat intelligence platform continuously monitors global threat landscapes, providing early warning systems for emerging cyber threats. We analyze patterns, track threat actors, and correlate intelligence to provide proactive defense strategies that keep your organization ahead of potential attacks.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                        <img src="/Images/second SOC.png" alt="second section" className="w-auto h-80"/>
                    </div>
                    </div>
                </div>
                <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Scalable Security-as-a-Service</div>
                        <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            Your business evolves&mdash;and so should your security. Our flexible, cloud-enabled SOC model allows you to scale protection levels based on current needs and budgets. There&apos;s no need for expensive hardware or long-term contracts. You get the protection you need today, with the freedom to adapt tomorrow.
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
                        <img src="/Images/SOC third section.png" alt="third section" className="w-auto h-80"/>
                    </div>
                    </div>
                </div>
            </div> */}

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="left" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            FAQ&apos;s For Managed SOC Services
                        </h3>
                    </div>
                </Fade>

                <FAQAccordion 
                    faqs={[
                        {
                            question: "What is a managed SOC?",
                            answer: "A managed SOC (Security Operations Center) is a subscription service for outsourcing SOC operations to third-party cybersecurity specialists who monitor IT infrastructure, endpoints, software, and data for security flaws, finding threats, responding to alerts, and fixing problems."
                        },
                        {
                            question: "What are the services in SOC?",
                            answer: "SOC services include round-the-clock security monitoring using automation and data science, vulnerability evaluations, threat surveillance, and incident responses. We provide comprehensive security coverage across your entire digital environment."
                        },
                        {
                            question: "How does a SOC develop?",
                            answer: "SOC development follows five main stages: Planning (assessing security needs and requirements), Designing (architecting the security infrastructure), Building (implementing tools and processes), Operating (24/7 monitoring and response), and Reviewing (continuous improvement and optimization)."
                        },
                        {
                            question: "What is the role of the SOC Manager?",
                            answer: "The SOC manager is in charge of the security operations team, reporting to the CIO/CISO, providing technical advice, and overseeing hiring, training, and evaluation of SOC staff. They ensure operational excellence and strategic alignment with business objectives."
                        },
                        {
                            question: "Is a SOC MSP?",
                            answer: "While both provide managed services, a SOC specifically focuses on security operations and threat management, while an MSP (Managed Service Provider) offers broader IT services. Our managed SOC combines the specialized security expertise with the operational benefits of managed services."
                        }
                    ]}
                />
            </div>
        </div>
    )
}