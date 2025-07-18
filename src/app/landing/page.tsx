import { Button } from "@/components/ui/button";
import TeachingTechCarousel from "./teachingtech";
// import {
//   ArrowRight,
//   Download,
// } from "lucide-react";
// import FlexibleDeploymentOptions from "./deploymentOptions";
import { Fade, Slide } from "react-awesome-reveal";
import TestimonialSection from "../edtechSolutions/testimonials";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#FFFCEC]">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-4 sm:p-8">
          <Fade direction="up" triggerOnce>
            <div className="text-center justify-start">
              <span className="text-[#0e0f10] text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                Give{" "}
              </span>
              <span className="text-[#f9d300] text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                Your Team
              </span>
              <span className="text-[#0e0f10] text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                {" "}
                The Inspiration They Need To Get The Job Done
              </span>
            </div>
            <div className="text-center justify-start text-[#5c5f6e] text-base sm:text-lg md:text-xl font-normal font-['Urbanist'] leading-relaxed mt-4 sm:mt-6">
              Empower your team and spark productivity with a thoughtfully
              designed interactive screen. Whether it&apos;s for brainstorming,
              collaboration, or presentations, this dynamic solution brings
              clarity, creativity, and efficiency to every task.
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link href="/portfolio">
                <Button className="w-full sm:w-auto">IT Solutions</Button>
              </Link>
              <Link href="/edtechSolutions">
                <Button className="w-full sm:w-auto">Educational Solutions</Button>
              </Link>
            </div>
            <div className="relative mt-8 sm:mt-12">
              {/* <Fade direction="left" triggerOnce> */}
              <img
                src="/Images/Screenshot 2025-06-29 at 9.19.49 PM 1.png"
                alt="Landing Page Image"
                className="mt-8 w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
              <img
                src="/Images/deupload-feature-mobile 2.png"
                alt="Landing Page Image"
                className="mt-8 w-full max-w-38 h-auto absolute -left-15 -bottom-4 hidden sm:block"
              />
              {/* </Fade> */}
            </div>
          </Fade>
        </div>
      </div>
      <Fade direction="up" triggerOnce>
        <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="text-yellow-400">Sadel</span> Made Tech Easy
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Sadel makes technology simple and effortless. We turn complex
                systems into easy-to-use solutions for everyone.
              </p>
            </div>

            {/* Main Content Section */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    <span className="text-yellow-400">Sadel Simplifies</span>
                    <br />
                    Technology to Empower Teams
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Sadel takes the complexity out of technology with smart,
                    intuitive solutions. Our tools are designed to boost
                    collaboration, streamline workflows, and save time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold w-full sm:w-auto">
                      Getting Started
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                {/* Background Elements */}
                <img src="/Images/workings.png" alt="Background Element" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-yellow-400">Sadel</span> Expert IT Solutions
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-gray-900">
                Sadel A Sister Company Of ProlabIT
              </span>{" "}
              delivers tailored software and cloud solutions that drive business
              growth and efficiency. With expert DevOps and IT consulting, we
              turn complex challenges into seamless digital experiences.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Managed SOC Service */}
            <div className="h-full flex">
              <Slide>
                <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                      <img
                        src="/Images/manage.png"
                        alt="Managed SOC"
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Security
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                      Ensure your business stays protected with robust, flexible, and scalable security operations that grow with your needs.
                    </p>
                  </div>
                  <Link
                    href="/services/azure-security-service"
                    className="flex items-center text-gray-800 font-semibold hover:text-yellow-600 transition-colors group mt-auto text-sm sm:text-base"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Slide>
            </div>

            {/* Cloud Managed Services */}
            <div className="h-full flex">
              <Slide>
                <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <img
                        src="/Images/cloud.png"
                        alt="Cloud Managed Services"
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Consulting Services
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                      Simplify management, boost performance, and reduce costs by leveraging tailored managed services—designed to optimize, secure
                    </p>
                  </div>
                  <Link
                    href="/services/citrix-consulting"
                    className="flex items-center text-gray-800 font-semibold hover:text-yellow-600 transition-colors group mt-auto text-sm sm:text-base"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Slide>
            </div>

            {/* Microsoft Cloud Security */}
            <div className="h-full flex">
              <Slide>
                <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <img
                        src="/Images/microsoft.png"
                        alt="Microsoft Cloud Security"
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Support and Market Research                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                      Gain deep visibility, control, and threat protection across your cloud apps—detect risky user behavior, prevent data leaks
                    </p>
                  </div>
                  <Link
                    href="/services/market-research"
                    className="flex items-center text-gray-800 font-semibold hover:text-yellow-600 transition-colors group mt-auto text-sm sm:text-base"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Slide>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Fade delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="bg-[#fffcec] rounded-3xl p-4 sm:p-6 text-center flex flex-col items-center">
              <div className="text-center justify-start text-[#0b0d0e] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[64px]">
                Sadel IT Solutions
              </div>
              <div className="justify-start text-[#838696] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-normal mt-4">
                At Sadel, we simplify modern tech complexity to drive real business impact—helping you accelerate outcomes and unlock value faster.
              </div>
              <div className="w-full sm:w-68 h-auto sm:h-68 item-center justify-center mt-6 sm:mt-8">
                <img
                  src="/Images/deupload-file-sharing 2.png"
                  alt="Sadel It Solutions"
                  className="w-full h-auto max-w-sm sm:max-w-none"
                />
              </div>
            </div>
            <div className="bg-[#fffcec] rounded-3xl p-4 sm:p-6 text-center flex flex-col items-center">
              <div className="text-center justify-start text-[#0b0d0e] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[64px]">
                Sadel Products
              </div>
              <div className="justify-start text-[#838696] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-normal mt-4">
                We provide a comprehensive range of educational solutions designed to empower learners, support educators, and enhance the overall learning experience
              </div>
              <div className="w-full sm:w-68 relative item-center justify-center mt-6 sm:mt-8">
                <img
                  src="/Images/Screenshot 2025-06-29 at 9.22.40 PM 2.png"
                  alt="Sadel It Solutions"
                />
                <img
                  src="/Images/Untit design 1.png"
                  alt="Sadel It Solutions"
                  className="absolute right-2 -bottom-10 h-full hidden sm:block"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <TeachingTechCarousel />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 mt-16 sm:mt-28">
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Experience Smart, Seamless Learning with{" "}
            <span className="text-yellow-400">Sadel&apos;s Interactive Education Board</span>{" "}

          </h3>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Product Display */}
          <div className="relative order-2 lg:order-1">
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-100 rounded-full opacity-50"></div>

            {/* Device Frame */}
            <img
              src="/Images/Screenshot 2025-06-29 at 9.22.40 PM 2.png"
              alt="Device Frame"
              className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Supports <span className="text-yellow-400">Free</span> <span className="text-yellow-400">educational</span> programs
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Stay connected and productive wherever you are with Sodars
                on-the-go solutions. Whether youre traveling, working remotely,
                or switching between locations, our tools keep your workflow
                seamless. Access, collaborate, and manage tasks anytime—without
                being tied to a desk.
              </p>

              {/* CTA Button */}
              <button className="bg-white border-2 border-gray-300 text-gray-800 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105 shadow-sm w-full sm:w-auto">
                View Product
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-16 sm:mt-30">
          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Seamless <span className="text-yellow-400">Collaboration</span> <span className="text-yellow-400"> & </span> <span className="text-yellow-400">Control</span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Access your important folders even without an internet
                connection.Sadel lets you stay organized and in control,
                anytime, anywhere.Work seamlessly offline and sync
                automatically when youre back online.
              </p>

              {/* CTA Button */}
              <button className="bg-white border-2 border-gray-300 text-gray-800 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105 shadow-sm w-full sm:w-auto">
                View Product
              </button>
            </div>
          </div>

          {/* Left Side - Product Display */}
          <div className="relative order-2">
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-100 rounded-full opacity-50"></div>

            {/* Device Frame */}
            <img
              src="/Images/Screenshot 2025-06-29 at 9.19.49 PM 1.png"
              alt="Device Frame"
              className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 w-68">
              <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                Security & Safety
              </h2>
              <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal">
                Leverage the power of our REST API to bring Sodar file into your
                external tools and products.
              </p>
            </div>

            <div className="relative h-42 flex items-center justify-between">
              <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                Read documents
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <img
                src="/Images/Reading glasses-bro 1.png"
                alt="Security & Safety"
                className="h-full object-contain"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 w-60">
              <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                Development kits
              </h2>
              <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal mb-6">
                We offer several official SDKs for certain programming languages
                that you can use in your apps.
              </p>
            </div>

            <div className="relative h-42 flex items-center justify-between">
              <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download SDKs
              </button>
              <img
                src="/Images/Hand coding-bro 1.png"
                alt="Security & Safety"
                className=" h-full object-contain"
              />
            </div>
          </div>

          <div className="bg-white flex justify-between p-8 shadow-sm rounded-2xl border border-gray-100 flex hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-8">
                <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                  Join our community
                </h2>
                <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal mb-6">
                  Learn from others, share your work, and extend your tool set
                  with a diverse group of developers from around the world.
                </p>
                <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Submit a question
                </button>
              </div>
            </div>

            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <img
                src="/Images/Work chat-bro 1.png"
                alt="Join Our Community"
                className="h-full object-contain"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <h2 className="text-[#0b0d0e] text-[32px] font-normal font-['Urbanist'] leading-loose">
                Our Technology
              </h2>
              <p className="justify-start text-[#838696] text-base font-normal font-['Urbanist'] leading-normal mb-6">
                Keep track of changes and upgrades to the DevProud API.
              </p>
              <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                Releases
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="relative h-38 flex items-center justify-center">

              <img
                src="/Images/Reading glasses-bro 1.png"
                alt="Our Technology"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Fade direction="right" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Digital Kiosks */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">Digital Kiosks</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">Our Sadel&#39;s Digital Kiosks offer seamless self-service experiences, enabling quick access to information, services, and interactive content.</p>
                </div>
                <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-full sm:w-fit text-center sm:text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/kiosk.png" alt="Digital Kiosks" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
            {/* Surveillance Cameras */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0 sm:pr-6">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">
                    Surveillance Cameras
                  </h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">
                    Our Surveillance Cameras deliver smart, real-time monitoring solutions to secure your spaces and safeguard what matters most.
                  </p>
                </div>
                <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-full sm:w-fit text-center sm:text-left mt-2">
                  Checkout Product
                </button>
              </div>

              {/* Right: Camera Images */}
              <div className="flex-1 flex flex-col items-center sm:items-end gap-4">
                <img
                  src="/Images/camera1.png"
                  alt="Surveillance Camera 1"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                />
                <img
                  src="/Images/camera2.png"
                  alt="Surveillance Camera 2"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                />
              </div>
            </div>

            {/* Sound System P.A System */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">Sound System P.A System</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">Our P.A Systems deliver clear, powerful audio for effective communication across classrooms, campuses, and public spaces.</p>
                </div>
                <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-full sm:w-fit text-center sm:text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/speaker.png" alt="Sound System P.A System" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
            {/* LED Display */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">LED Display</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">Sadel&#39;s LED Displays offer vibrant, high-resolution visuals for impactful communication in any environment.</p>
                </div>
                <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors w-full sm:w-fit text-center sm:text-left mt-2">Checkout Product</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/tv.png" alt="LED Display" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Clients
          </h2>
        </div>
        <img
          src="/Images/clients.jpg"
          alt="Our Clients"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Blogs
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 - Elevated Meeting Experiences */}
          <div
            className="relative h-48 sm:h-56 md:h-64 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-4 sm:mx-6 absolute bottom-3 sm:bottom-5 left-0 right-0 bg-white p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-1 h-6 sm:h-8 bg-yellow-400 rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-sm sm:text-base md:text-xl font-semibold font-['Figtree'] leading-tight sm:leading-7">
                  Elevated Meeting experiences
                </h3>
              </div>
            </div>
          </div>

          <div
            className="h-48 sm:h-56 md:h-64 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image-1.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-4 sm:mx-6 absolute bottom-3 sm:bottom-5 left-0 right-0 bg-white p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-1 h-6 sm:h-8 bg-yellow-400 rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-sm sm:text-base md:text-xl font-semibold font-['Figtree'] leading-tight sm:leading-7">
                  Learn In Immersive Way
                </h3>
              </div>
            </div>
          </div>
          <div
            className="h-48 sm:h-56 md:h-64 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image-2.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-4 sm:mx-6 absolute bottom-3 sm:bottom-5 left-0 right-0 bg-white p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-1 h-6 sm:h-8 bg-yellow-400 rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-sm sm:text-base md:text-xl font-semibold font-['Figtree'] leading-tight sm:leading-7">
                  Interactive Screens Transform
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Success Partner
          </h2>
        </div>
        <img
          src="/Images/Screenshot 2025-06-29 at 9.14.56 PM 1.png"
          alt="Success Partner"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
      <div className="text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Testimonial
        </h2>
      </div>
      <TestimonialSection />
    </div>
  );
}
