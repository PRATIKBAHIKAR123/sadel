"use client"
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import TeachingTechCarousel from "../landing/teachingtech";
import Image from "next/image";
import { useState } from "react";

export default function EmailSecurityPage() {

    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        setEmail('');
    };
    return (
        <div className=" min-h-screen w-full">
            {/* Header Section */}
            <div className="bg-[#FFFCEC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-8">
                    {/* Left: Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Email <span className="text-yellow-400">Security</span>
                        </h1>
                        <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-xl">
                            Microsoft provides businesses with an endpoint security platform that can identify, probe, and avert sophisticated attacks. Using several features of Microsoft Azure and Windows 10 enables companies to react quickly to security threats.          </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">Getting Started</Button>
                            <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
                        </div>
                    </div>
                    {/* Right: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img src="/Images/email.png" alt="Email Security" className="w-full max-w-md h-auto" />
                    </div>
                </div>
            </div>
            {/* Securely Share Files Section */}
            <Fade direction="up">
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Securely share files <br className="hidden sm:block" /> with clients
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                With Sadel, you can securely share important files with clients, set expiry dates for added security, track link activity, and even remove access whenever needed. Simplify client collaboration and enhance confidentiality with secure, trackable, and customizable document sharing.
                            </p>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/share1.png" alt="Share Files" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Accessing Data Section */}
            <Fade direction="up">
                <div className=" py-12 sm:py-16">
                    <div className="max-w-7xl bg-[#FFF5B9] mx-auto p-14 rounded-2xl  sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Illustration */}
                        <div className="flex justify-center order-2 md:order-1">
                            <img src="/Images/access.png" alt="Access Data" className="w-full max-w-xs h-auto" />
                        </div>
                        {/* Right: Text */}
                        <div className="order-1 md:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Accessing data from <br className="hidden sm:block" /> within the organization
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Centralizing all your data, including collaboration and stored files, Sadel provides your team with a comprehensive overview of all your projects in one centralized location.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* Sharing Data with External Collaborators */}
            <Fade direction="up">
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl bg-[#FFFCEC]  mx-auto p-14 rounded-2xl sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Sharing data with <br className="hidden sm:block" /> external collaborators
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                If you’re working on a group project, securely share files and documents with your team’s external working groups. Sadel delivers unmatched security and visibility, enabling increased collaboration across files in Sadel.
                            </p>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/sharing.png" alt="Sharing Data" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <TeachingTechCarousel />

            <Fade direction="up">
                <div className="py-12 sm:py-16">
                    <div className="max-w-7xl mt-40 mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Securely share files <br className="hidden sm:block" /> with clients
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                With Sadel, you can securely share important files with clients, set expiry dates for added security, track link activity, and even remove access whenever needed. Simplify client collaboration and enhance confidentiality with secure, trackable, and customizable document sharing.
                            </p>
                        </div>
                        {/* Right: Illustration */}
                        <div className="flex justify-center">
                            <img src="/Images/securely.png" alt="securely" className="w-full max-w-xs h-auto" />
                        </div>
                    </div>
                </div>
            </Fade>

            <div className="bg-yellow-50 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                    <div className="flex-1 text-center lg:text-left">
                        <Fade direction="left" triggerOnce>
                            <p className="text-yellow-400 text-xs sm:text-sm">Sign up for updates</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 font-['Urbanist']">Cut down on expenses while improving productivity.</h2>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                                    Subscribe to Our Newsletter
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                                    <div className="flex-1 relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSubscribe}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-200 text-sm sm:text-base"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-400 text-xs mt-2">You can unsubscribe anytime. Read our <span className="text-yellow-400">privacy policy</span></p>
                        </Fade>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Fade direction="right" triggerOnce>
                            <Image
                                src="/Images/Mail-bro.png"
                                alt="Call to Action"
                                width={320}
                                height={280}
                                className="w-full max-w-[280px] sm:max-w-[320px] h-auto"
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
} 