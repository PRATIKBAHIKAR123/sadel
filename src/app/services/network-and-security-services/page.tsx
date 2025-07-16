import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function NetworkSecurityServices() {
  return (
    <div className="bg-[#fffcec] min-h-screen w-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12">
          {/* Left Content */}
          <div className="space-y-8">
            <Fade direction="up" triggerOnce>
              <div>
                <h2 className="text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                  <span className="text-[#0b0d0e]">Network & Security</span> <span className="text-[#f9d300]">Services</span>
                </h2>
                <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                  Safeguard your digital infrastructure and empower your business with our tailored network and security solutions. We combine proactive defense, expert guidance, and modern technology to keep your organization resilient and secure.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                    Book Free Consultation
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </Fade>
          </div>
          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            <Fade direction="left" triggerOnce>
              <Image src="/Images/Frame (13).png" alt="Network Security" width={400} height={400} className="rounded-2xl" />
            </Fade>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto p-8 mt-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[#0b0d0e] mb-4 font-['Urbanist']">Our Key Services</h3>
            <ul className="space-y-6 text-[#5c5f6e] text-lg font-normal font-['Urbanist']">
              <li>
                <span className="font-semibold text-black">Network Evaluation & Audit:</span> Comprehensive assessments to identify vulnerabilities and optimize your network’s performance.
              </li>
              <li>
                <span className="font-semibold text-black">Firewall Deployment:</span> Custom firewall solutions to protect your network from unauthorized access and cyber threats.
              </li>
              <li>
                <span className="font-semibold text-black">Threat Detection & Prevention:</span> Advanced monitoring systems to detect and neutralize threats in real time.
              </li>
              <li>
                <span className="font-semibold text-black">Data Protection & Privacy:</span> State-of-the-art encryption and privacy solutions for your sensitive data and communications.
              </li>
              <li>
                <span className="font-semibold text-black">Secure Remote Connectivity:</span> Enable safe remote work with secure VPNs and multi-factor authentication.
              </li>
              <li>
                <span className="font-semibold text-black">Cybersecurity Training & Awareness:</span> Empower your team with best practices and awareness training to prevent incidents.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-[#f9d300] rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-black mb-3 font-['Urbanist']">Why Choose Us?</h4>
              <ul className="list-disc list-inside text-black text-lg font-normal font-['Urbanist'] space-y-2">
                <li>Solutions tailored to your business needs</li>
                <li>Experienced, certified security professionals</li>
                <li>Proactive, prevention-first approach</li>
                <li>End-to-end support from assessment to training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <div className="bg-[#fffcec] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="text-[#0b0d0e] text-4xl font-bold font-['Urbanist'] mb-3">Ready to Secure Your Network?</div>
            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] mb-6">Contact us for a free consultation and discover how our network and security services can protect and empower your business.</p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 