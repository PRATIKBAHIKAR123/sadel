import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import Link from "next/link";

export default function ITTrainingServices() {
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
                                    <span className="text-[#0b0d0e]">IT Training</span> <span className="text-[#f9d300]">Services</span>
                                </h2>
                                <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                                    At Sadel, we provide comprehensive IT training services designed to help individuals and organizations enhance their technical capabilities and achieve their professional objectives. Our training programs deliver hands-on experience and practical knowledge to prepare you for real-world challenges.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="/contact-us">
                                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                                            Enroll for Top-Tier Learning
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
                            <img src="/Images/Frame (12).png" alt="IT Training" />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="left" triggerOnce>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                        <div className="flex-1">
                            <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                                Our Services
                            </h3>
                            <div className="space-y-4 text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#f9d300] rounded-full mt-3 flex-shrink-0"></div>
                                    <p><strong>Certification-Focused Training:</strong> Our courses are strategically designed to help you earn industry-recognized certifications including CompTIA, Cisco, Microsoft, and other leading credentials essential for career advancement.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#f9d300] rounded-full mt-3 flex-shrink-0"></div>
                                    <p><strong>Practical Learning Experience:</strong> We provide hands-on experience through our advanced labs and real-world projects, enabling you to gain practical knowledge and apply your skills in authentic scenarios.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#f9d300] rounded-full mt-3 flex-shrink-0"></div>
                                    <p><strong>Tailored Training Solutions:</strong> We offer customized training programs to meet your specific business requirements, adapting our courses to align with your schedule, budget, and learning objectives.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#f9d300] rounded-full mt-3 flex-shrink-0"></div>
                                    <p><strong>Expert Instructors:</strong> Our instructors are seasoned professionals with extensive industry experience, providing valuable insights and mentorship throughout your learning journey.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#f9d300] rounded-full mt-3 flex-shrink-0"></div>
                                    <p><strong>Adaptable Learning Formats:</strong> We offer flexible learning options including online, classroom, and hybrid training to accommodate your schedule and preferred learning style.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="items-center justify-center flex">
                                <img src="/Images/Frame (14).png" alt="Training Services" className="w-auto h-80" />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Career Support Section */}
            <div className="max-w-7xl mx-auto p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    <div className="flex-1">
                        <div className="items-center justify-center flex">
                            <img src="/Images/Frame (15).png" alt="Career Support" className="w-auto h-80" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Career Support
                        </h3>
                        <div className="space-y-6 text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                            <p>
                                Our dedicated Career Services team provides comprehensive support to help students launch successful careers in IT and Cybersecurity, regardless of their previous experience level. We offer personalized guidance through our dedicated Employment Development Manager, who assists you in identifying and applying for job opportunities that align with your training and career aspirations.
                            </p>
                            <p>
                                We also provide expert assistance in resume optimization, LinkedIn profile enhancement, and mock interview preparation to ensure you&apos;re fully equipped for the job search process. Through our exclusive Learning Hubs Job Site, you gain access to a wide range of employment opportunities from our extensive network of Employer Partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Courses Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Our Courses
                        </h3>
                        <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                            Our IT courses span across various curriculum areas, providing comprehensive coverage of essential technologies and skills.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-4">Network and Security</h4>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Comprehensive coverage of network design, security protocols, firewall implementation, and advanced security practices.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-4">Cloud Computing</h4>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Fundamentals of cloud technology, cloud security, infrastructure management, and cloud service deployment.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-4">Programming and Development</h4>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Modern programming languages including Python, Java, C#, along with software development methodologies and best practices.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-4">Cybersecurity</h4>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Ethical hacking techniques, vulnerability assessment, penetration testing, and security defense strategies.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-4">Data Science</h4>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Data analysis techniques, machine learning algorithms, data visualization, and statistical modeling.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-4">Additional Areas</h4>
                            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                                Architecture, databases, mobile development, virtualization, VoIP, web design, and product training for leading platforms.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Yellow Highlight Section */}
            <div className="max-w-7xl mx-auto mt-4">
                <Fade direction="left" triggerOnce>
                    <div className="bg-[#f9d300] rounded-3xl p-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="flex-1">
                                <h3 className="text-black text-4xl font-semibold font-['Urbanist'] leading-[64px] mb-6">
                                    Why Choose Us
                                </h3>
                                <div className="space-y-4 text-black text-lg font-normal font-['Urbanist'] leading-loose">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                                        <p><strong>Industry-Standard Training:</strong> Our courses meet current industry standards and equip you with the latest skills and knowledge that employers actively seek.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                                        <p><strong>Practical Experience:</strong> Our labs and projects provide hands-on experience, allowing you to apply your skills in real-world scenarios.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                                        <p><strong>Certification Preparation:</strong> Our training programs are specifically designed to help you earn the certifications needed for career advancement.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                                        <p><strong>Experienced Instructors:</strong> Learn from professionals with years of industry experience, providing valuable insights and guidance.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</div>
                                        <p><strong>Flexible Learning Options:</strong> We offer adaptable learning formats to fit your schedule and preferences, allowing you to learn at your own pace.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="items-center justify-center flex">
                                    <img src="/Images/Group 265.png" alt="Training Benefits" className="w-auto h-64" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Final CTA Section */}
            <div className="max-w-7xl mx-auto p-8 mt-10">
                <Fade direction="left" triggerOnce>
                    <div className="text-center">
                        <Link href="/contact-us">   
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold text-lg">
                                Enroll for Top-Tier Learning
                            </Button>
                        </Link>
                    </div>
                </Fade>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto p-8">
                <Fade direction="up" triggerOnce>
                    <div className="text-center mb-12">
                        <h3 className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] leading-[52px] mb-6">
                            Frequently Asked Questions about IT Training Services
                        </h3>
                    </div>
                </Fade>
                <FAQAccordion
                    faqs={[
                        {
                            question: "What advantages do IT training services offer to individuals and organizations?",
                            answer: "IT training services provide numerous benefits including skill development, staying current with emerging technologies, enhanced productivity, and improved efficiency. They also boost confidence, increase job satisfaction, and create better career advancement opportunities for professionals."
                        },
                        {
                            question: "What different types of IT training services are available?",
                            answer: "We offer a comprehensive range of training options including instructor-led classroom sessions, self-paced online courses, interactive webinars, hands-on workplace training, industry-recognized certification programs, and customized training solutions tailored to specific organizational needs. Our specialized programs cover programming languages, cybersecurity, data analytics, cloud computing, and project management."
                        },
                        {
                            question: "How do IT training service costs typically vary?",
                            answer: "Training costs depend on several factors including the training format, program duration, intensity level, customization requirements, and the training provider. Classroom-based training and certification programs generally have higher costs compared to online courses and webinars. Many providers offer special pricing for students, veterans, or individuals seeking career transitions."
                        },
                        {
                            question: "What qualifications should IT trainers possess?",
                            answer: "Effective IT trainers should have strong technical expertise in their specific domain, excellent communication skills, and proven teaching abilities. They typically hold degrees or certifications in computer science, information technology, or related fields, along with relevant industry experience. Many trainers also have additional teaching certifications or experience in adult education methodologies."
                        },
                        {
                            question: "How can I select the most suitable IT training service provider?",
                            answer: "When choosing an IT training provider, evaluate their reputation, industry experience, technical expertise, accreditation status, course offerings, and training methodologies. Consider reading reviews and testimonials from previous clients, and assess their customer support quality, flexibility, and ability to meet your specific learning objectives and career goals."
                        }
                    ]}
                />
            </div>
        </div>
    );
} 