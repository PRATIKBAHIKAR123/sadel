"use client";

import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import React from "react";
import "../globals.css";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#F9D400] py-12 px-4">
                <div className=" max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
                    {/* Left: Contact Info */}
                    <Fade direction="left" triggerOnce>
                        <div className="flex-1 space-y-10">
                            <h1 className="text-5xl ml-0 md:ml-10 font-bold text-black font-['Urbanist'] leading-tight mb-4">
                                Get in touch.
                            </h1>
                            <p className="text-gray-700 ml-0 md:ml-10 text-lg mb-8">
                                Our team would love to hear from you!
                            </p>
                            <div className="space-y-8 ml-0 md:ml-10">
                                <div className="flex items-center gap-4">
                                    <span className="bg-yellow-400 p-3 rounded-full flex items-center justify-center">
                                        <img src="/Images/map.svg" alt="icon" className="w-6 h-6" />
                                    </span>
                                    <div>
                                        <div className="font-bold text-black">Address</div>
                                        <div className="text-gray-700 font-semibold">17224 S. Figueroa Street, Gardena, CA 90248, USA</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="bg-yellow-400 p-3 rounded-full flex items-center justify-center">
                                        <img src="/Images/envelope.png" alt="icon" className="w-6 h-6" />
                                    </span>
                                    <div>
                                        <div className="font-bold text-black">Email</div>
                                        <div className="text-gray-700 font-semibold">hello@SADEL.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="bg-yellow-400 p-3 rounded-full flex items-center justify-center">
                                        <img src="/Images/phone.png" alt="icon" className="w-6 h-6" />
                                    </span>
                                    <div>
                                        <div className="font-bold text-black">Phone</div>
                                        <div className="text-gray-700 font-semibold">+1 415 800-3128</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* Right: Contact Form */}
                    <Fade direction="right" triggerOnce>
                        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-10 mt-8 md:mt-0">
                            <form className="space-y-6">
                                <div>
                                    <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email address" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Company (optional)" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone number (optional)" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Subject" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" />
                                </div>
                                <div>
                                    <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" />
                                </div>
                                <div className="flex justify-end">
                                    <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-16 py-3 rounded-md transition-colors shadow-none">Send</Button>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Contact Us Cards Section */}
            <div className="bg-yellow-50 py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <Fade cascade>
                        <div className="text-4xl font-bold text-black font-['Urbanist'] mb-2">Contact us</div>
                        <p className="text-xl text-[#5C5F6E] font-['Urbanist'] mb-10">Get in touch and let us know how we can help.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-8 shadow flex flex-col items-start min-h-[220px]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-black text-yellow-400 rounded-full p-3 flex items-center justify-center">
                                        <img src="/Images/store.png" alt="icon" className="w-6 h-6" />
                                    </div>
                                    <div className="font-bold text-lg">Sales & Enterprise</div>
                                </div>
                                <div className="text-gray-600 mb-4">We&apos;d love to talk about how we can work together.</div>
                                <Button variant="outline" className="bg-[#F9D400] hover:bg-yellow-500 text-black px-6 py-3 rounded-full transition-colors font-semibold">
                                    Contact Sales
                                    <img src="Images/arrow-right 3.png" alt="arrow" className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-8 shadow flex flex-col items-start min-h-[220px]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-black text-yellow-400 rounded-full p-3 flex items-center justify-center">
                                        <img src="/Images/handset.png" alt="icon" className="w-6 h-6" />
                                    </div>
                                    <div className="font-bold text-lg">Help & Support</div>
                                </div>
                                <div className="text-gray-600 mb-4">Get in touch and let us know how we can help.</div>
                                <Button variant="outline" className="bg-[#F9D400] hover:bg-yellow-500 text-black px-6 py-3 rounded-full transition-colors font-semibold">
                                    Get Support
                                    <img src="Images/arrow-right 3.png" alt="arrow" className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-8 shadow flex flex-col items-start min-h-[220px]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-black text-yellow-400 rounded-full p-3 flex items-center justify-center">
                                        <img src="/Images/newspaper.png" alt="icon" className="w-6 h-6" />
                                    </div>
                                    <div className="font-bold text-lg">Media & Press</div>
                                </div>
                                <div className="text-gray-600 mb-4">Get SADEL news, company info, and media resources.</div>
                                <Button variant="outline" className="bg-[#F9D400] hover:bg-yellow-500 text-black px-6 py-3 rounded-full transition-colors font-semibold">
                                    Visit Newsroom
                                    <img src="Images/arrow-right 3.png" alt="arrow" className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 mt-8">
                            <div className="flex-1 rounded-2xl p-8 flex flex-col gap-4 bg-transparent">
                                <div className="flex items-center gap-3">
                                    <span className="bg-yellow-400 p-2 rounded-full flex items-center justify-center">
                                        <img src="/Images/discord.png" alt="icon" className="w-6 h-6" />
                                    </span>
                                    <div className="font-bold text-black">Join us on Discord</div>
                                </div>
                                <div className="text-gray-600 text-sm">If you have technical questions, chat live in #developers in the official SADEL Discord server.</div>
                            </div>
                            <div className="flex-1 rounded-2xl p-8 flex flex-col gap-4 bg-transparent">
                                <div className="flex items-center gap-3">
                                    <span className="bg-yellow-400 p-2 rounded-full flex items-center justify-center">
                                        <img src="/Images/telegram.png" alt="icon" className="w-5 h-5" />
                                    </span>
                                    <div className="font-bold text-black">General communications</div>
                                </div>
                                <div className="text-gray-600 text-sm">For general queries, including partnership opportunities, please email info@SADEL.com</div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Worldwide Section */}
            <div className="bg-white py-20 px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <Fade direction="left" triggerOnce>
                        <div className="flex-1 flex flex-col items-center md:items-start">
                            <Image src="/Images/Frame.png" alt="Worldwide" width={400} height={320} className="mb-8" />
                        </div>
                    </Fade>
                    <Fade direction="right" triggerOnce>
                        <div className="flex-1 flex flex-col items-center md:items-start">
                            <div className="text-4xl font-bold mb-2">
                                <span className="text-yellow-400">We Work </span><span className="text-black">Worldwide.</span>
                            </div>
                            <div className="grid grid-cols-2 gap-8 mt-4 text-black w-full max-w-md">
                                <div>
                                    <div className="font-bold">London</div>
                                    <div className="text-sm">508 Bridle Avenue<br />Newnan, GA 30263</div>
                                </div>
                                <div>
                                    <div className="font-bold">New York</div>
                                    <div className="text-sm">508 Bridle Avenue<br />Newnan, GA 30263</div>
                                </div>
                                <div>
                                    <div className="font-bold">Singapore</div>
                                    <div className="text-sm">508 Bridle Avenue<br />Newnan, GA 30263</div>
                                </div>
                                <div>
                                    <div className="font-bold">Paris</div>
                                    <div className="text-sm">508 Bridle Avenue<br />Newnan, GA 30263</div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-white px-4">
                <div className="max-w-5xl mx-auto rounded-2xl bg-[#F4F5F6] p-10 shadow flex flex-col md:flex-row items-center  gap-16">
                    <Fade direction="up" triggerOnce>
                        <div className="max-w-[450px]">
                            <div className="text-2xl font-bold text-black mb-2">Get the tips to improve your work</div>
                            <div className="text-gray-600 mb-4">
                                Stay up to date on our latest features, tech talks, events, blog posts, and product launches by signing up to our newsletter.
                            </div>
                        </div>

                        <form className="flex flex-1 flex-col gap-2 md:items-end w-full">
                            <div className="flex w-full md:w-[380px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-5 py-2 text-sm w-full bg-white focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#F9D400] md:w-[135px] hover:bg-yellow-500 text-white font-semibold px-6 py-2 p-4 text-sm"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-center md:text-center w-full">
                                You can unsubscribe at any time. Read our <a href="#" className="text-yellow-500">privacy policy</a>.
                            </p>
                        </form>

                    </Fade>
                </div>
            </div>

        </div>
    );
} 