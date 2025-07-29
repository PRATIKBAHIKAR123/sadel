"use client"
import { Button } from "@/components/ui/button";
// import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";

export default function NetworkSecurityServices() {
  const router = useRouter();

  const handleContactRedirect = () => {
    router.push('/contact-us');
  };

  const faqData = [
    {
      question: "How essential is regular network assessment and auditing?",
      answer: "Regular network assessments and audits are crucial for maintaining optimal security and performance. We recommend conducting these evaluations annually or after significant infrastructure changes to identify vulnerabilities, optimize performance, and ensure compliance with security standards."
    },
    {
      question: "Who needs firewall implementation?",
      answer: "Firewall implementation is essential for businesses of all sizes to protect network resources from external and internal cyber threats. Whether you're a small startup or a large enterprise, firewalls provide the first line of defense against unauthorized access and malicious attacks."
    },
    {
      question: "What is the role of intrusion detection and prevention systems?",
      answer: "Intrusion detection and prevention systems continuously monitor network traffic for suspicious activities and actively block potentially harmful traffic in real-time. These systems enhance network security by providing early warning of threats and automatically responding to security incidents."
    },
    {
      question: "Should small businesses invest in data encryption?",
      answer: "Yes, businesses of all sizes should implement data encryption to protect sensitive information from unauthorized access and breaches. Data encryption is a fundamental security measure that safeguards your information whether it's stored locally or transmitted across networks."
    },
    {
      question: "Can AFAQ support remote access for a distributed workforce?",
      answer: "Absolutely. Our secure remote access solutions are specifically designed to support distributed teams, ensuring reliable and secure access to network resources from various locations. We implement VPNs, multi-factor authentication, and other security measures to maintain protection regardless of where your team works."
    },
    {
      question: "How does security training benefit employees?",
      answer: "Security training empowers employees to recognize and respond appropriately to cyber threats, significantly reducing the risk of security incidents. Well-trained staff can identify phishing attempts, follow secure practices, and become an active part of your organization's security defense strategy."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#fffcec] p-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12 max-w-7xl mx-auto">

          {/* Left Content */}
          <div className="space-y-8">
            <Fade direction="up" triggerOnce>
              <h2 className="text-5xl font-bold text-[#0e0f10] leading-[64px] font-['Urbanist'] mb-6">
                Network and Security Services from AFAQ
              </h2>
              <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                At AFAQ, we offer specialized Network and Security services, expertly designed to fortify your organization&apos;s digital infrastructure against the evolving landscape of cyber threats. Our services ensure not only the security of your network but also its optimal performance and resilience.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleContactRedirect}
                  className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Get a free 30-minute consultation with a AFAQ expert
                </Button>
              </div>
            </Fade>
          </div>

          {/* Right Illustration */}
          <div className="relative w-full flex justify-center">
            <Fade direction="left" triggerOnce>
              <div className="relative w-full max-w-md">
                {/* Decorative / Background image (same as main here) */}
                <img
                  src="/Images/Frame (13).png"
                  alt="Network and Security Services"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </Fade>
          </div>

        </div>
      </div>


      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="right">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Introduction</h2>
            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed">
              At AFAQ, we offer specialized Network and Security services, expertly designed to fortify your organization&apos;s digital infrastructure against the evolving landscape of cyber threats. Our services ensure not only the security of your network but also its optimal performance and resilience.
            </p>
          </div>
        </Fade>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto p-3">
        <div className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Our Network and Security Services Include:</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {/* Left Column - Two stacked cards */}
        <div className="lg:col-span-2 grid grid-cols-1 gap-6">
          {/* First Card - Network Assessment & Auditing */}
          <div className="bg-[#ffe9db] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
            <div className="flex-1 md:max-w-[50%]">
              <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                1. Network Assessment & Auditing
              </div>
              <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                <p><strong>Overview:</strong> Focuses on identifying vulnerabilities and areas for enhancement in network infrastructure.</p>
                <p><strong>Methodology:</strong> Covers current network configurations, security risks, and provides comprehensive recommendations for improvement.</p>
              </div>
            </div>
            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
              <img
                src="/Images/a.png"
                alt="Network Assessment"
                className="w-full h-auto object-contain max-w-[280px]"
              />
            </div>
          </div>
          {/* Second Card - Firewall Implementation */}
          <div className="bg-[#fffcec] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
            <div className="flex-1 md:max-w-[50%]">
              <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                2. Firewall Implementation
              </div>
              <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                <p><strong>Overview:</strong> Specializes in customizing and implementing firewalls for optimal network protection.</p>
                <p><strong>Service Details:</strong> Manages the entire process from selection to deployment, ensuring comprehensive network security.</p>
              </div>
            </div>
            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
              <img
                src="/Images/a-1.png"
                alt="Firewall Implementation"
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
                3. Intrusion Detection & Prevention
              </div>
              <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                <p><strong>Overview:</strong> Involves setting up advanced systems to monitor and defend networks against threats.</p>
                <p><strong>Functionality:</strong> Describes the systems&apos; ability to identify and counter intrusions in real-time with automated responses.</p>
              </div>
            </div>
            <div className="flex-1 flex items-end justify-center pt-8">
              <img
                src="/Images/Frame.png"
                alt="Intrusion Detection"
                className="w-full max-w-[320px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        <div className="bg-[#ffe9db] rounded-3xl p-8">
          <div className="text-[#0b0d0e] text-2xl md:text-3xl font-semibold font-['Urbanist'] leading-tight mb-4">
            4. Data Encryption & Privacy
          </div>
          <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
            <p><strong>Overview:</strong> Prioritizes data confidentiality and integrity using advanced encryption technologies.</p>
            <p><strong>Application:</strong> Ranges from encrypting communication channels to safeguarding data on servers and databases.</p>
          </div>
        </div>
        <div className="bg-[#fffcec] rounded-3xl p-8">
          <div className="text-[#0b0d0e] text-2xl md:text-3xl font-semibold font-['Urbanist'] leading-tight mb-4">
            5. Secure Remote Access
          </div>
          <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
            <p><strong>Overview:</strong> Provides solutions for safe and efficient remote work environments.</p>
            <p><strong>Implementation:</strong> Incorporates VPNs, multi-factor authentication, and other measures for secure access.</p>
          </div>
        </div>
        <div className="bg-[#fff5b9] rounded-3xl p-8">
          <div className="text-[#0b0d0e] text-2xl md:text-3xl font-semibold font-['Urbanist'] leading-tight mb-4">
            6. Security Training & Awareness
          </div>
          <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
            <p><strong>Overview:</strong> Offers comprehensive training programs on cybersecurity best practices.</p>
            <p><strong>Content:</strong> Encompasses topics like phishing recognition, secure password practices, and sensitive data handling.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto p-3">
        <div className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Why Choose AFAQ for Network and Security?</div>
      </div>
      <div className="flex flex-col gap-10 max-w-7xl mx-auto p-8">
        <div className="flex flex-cols md:flex-row items-center justify-between gap-20">
          <div className="flex-1">
            <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Customized Solutions</div>
            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
              Our services are tailored to your specific business needs, ensuring that every solution addresses your unique challenges and requirements.
            </div>
          </div>
          <div className="flex-1">
            <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
              <img src="/Images/SOC first section.png" alt="Customized Solutions" className="w-auto h-80"/>
            </div>
          </div>
        </div>
        <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
          <div className="flex-1">
            <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Skilled Experts</div>
            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
              Our team consists of seasoned professionals with extensive experience in network security and cybersecurity best practices.
            </div>
          </div>
          <div className="flex-1">
            <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
              <img src="/Images/second SOC.png" alt="Skilled Experts" className="w-auto h-80"/>
            </div>
          </div>
        </div>
        <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
          <div className="flex-1">
            <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">Proactive Measures</div>
            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
              We emphasize preventing security incidents before they occur, implementing proactive strategies to protect your network infrastructure.
            </div>
          </div>
          <div className="flex-1">
            <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
              <img src="/Images/SOC third section.png" alt="Proactive Measures" className="w-auto h-80"/>
            </div>
          </div>
        </div>
        <div className="flex flex-cols md:flex-row items-center justify-between gap-20 mt-10">
          <div className="flex-1">
            <div className="justify-start text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[52px] mb-3">End-to-End Support</div>
            <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
              From initial assessments to implementation and training, we provide comprehensive support throughout your security journey.
            </div>
          </div>
          <div className="flex-1">
            <div className="items-center justify-center flex bg-[#fffcec] rounded-3xl p-8">
              <img src="/Images/security.png" alt="End-to-End Support" className="w-auto h-80"/>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="right">
          <div className="text-center mb-12">
            <h2 className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px] mb-8">FAQs</h2>
            <FAQAccordion faqs={faqData} />
          </div>
        </Fade>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="right">
          <div className="bg-[#fffcec] rounded-3xl p-12 text-center">
            <h2 className="text-[#0e0f10] text-4xl font-bold font-['Urbanist'] mb-6">
              Ready to Secure Your Network?
            </h2>
            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] mb-8 max-w-2xl mx-auto">
              Get expert consultation and implement comprehensive network and security solutions tailored to your organization&apos;s needs.
            </p>
            <Button 
              onClick={handleContactRedirect}
              className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Get a free 30-minute consultation with a AFAQ expert
            </Button>
          </div>
        </Fade>
      </div>
    </div>
  );
} 