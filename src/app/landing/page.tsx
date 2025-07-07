import { Button } from "@/components/ui/button";
import TeachingTechCarousel from "./teachingtech";
import {
  ArrowRight,
  Download,
} from "lucide-react";
import FlexibleDeploymentOptions from "./deploymentOptions";
import { Fade, Slide } from "react-awesome-reveal";

export default function LandingPage() {
  return (
    <div>
      <div className="h-screen bg-secondary">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-8">
          <Fade direction="down">
            <div className="text-center justify-start">
              <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                Give{" "}
              </span>
              <span className="text-[#f9d300] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                Your Team
              </span>
              <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                {" "}
                The Inspiration They Need To Get The Job Done
              </span>
            </div>
            <div className="text-center justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-loose">
              Empower your team and spark productivity with a thoughtfully
              designed interactive screen. Whether it’s for brainstorming,
              collaboration, or presentations, this dynamic solution brings
              clarity, creativity, and efficiency to every task.
            </div>
            <div>
              <Button>IT Solutions</Button>{" "}
              <Button>Electronic Solutions</Button>
            </div>
            <div className="relative mt-8">
              <img
                src="Images/Screenshot 2025-06-29 at 9.19.49 PM 1.png"
                alt="Landing Page Image"
                className="mt-8 w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
              <img
                src="Images/deupload-feature-mobile 2.png"
                alt="Landing Page Image"
                className="mt-8 w-full max-w-38 h-auto absolute -left-15 -bottom-4"
              />
            </div>
          </Fade>
        </div>
      </div>
      <Fade direction="up">
        <div className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-8">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-400">Sadel</span> Made Tech Easy
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Sadel makes technology simple and effortless. We turn complex
                systems into easy-to-use solutions for everyone.
              </p>
            </div>

            {/* Main Content Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="text-yellow-400">Sadel Simplifies</span>
                    <br />
                    Technology to Empower Teams
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Sadel takes the complexity out of technology with smart,
                    intuitive solutions. Our tools are designed to boost
                    collaboration, streamline workflows, and save time.
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                      Getting Started
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                {/* Background Elements */}
                <img src="Images/workings.png" alt="Background Element" />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-yellow-400">Sadel</span> Expert IT Solutions
            </h1>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-gray-900">
                Sadel A Sister Company Of ProtoIT
              </span>{" "}
              delivers tailored software and cloud solutions that drive business
              growth and efficiency. With expert DevOps and IT consulting, we
              turn complex challenges into seamless digital experiences.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Distributed Storage Card */}
            <Slide>
            <div className="bg-yellow-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 8A4 4 0 1 0 12 16A4 4 0 0 0 12 8M12 10A2 2 0 1 1 12 14A2 2 0 0 1 12 10Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Distributed Storage
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data is encrypted and stored across multiple locations, or
                nodes, that are run by individuals or organizations that share
                their extra disk space.
              </p>
              <button className="flex items-center text-gray-800 font-semibold hover:text-yellow-600 transition-colors group">
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
              </button>
            </div>
           </Slide>
           <Slide>
            {/* Completely Private Card */}
            <div className="bg-yellow-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Completely Private
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Sadel peer-to-peer network works same way as Bitcoin base on
                blockchain making it an unhackable storage like a centralized
                cloud.
              </p>
              <button className="flex items-center text-gray-800 font-semibold hover:text-yellow-600 transition-colors group">
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
              </button>
            </div>
           </Slide>
           <Slide>
            {/* Data Persistence Card */}
            <div className="bg-yellow-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Persistence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your data is stored by nodes on the network not single point of
                failure, which means it cannot disappear unless you delete that
                files.
              </p>
              <button className="flex items-center text-gray-800 font-semibold hover:text-yellow-600 transition-colors group">
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
              </button>
            </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 py-16 ">
        <Fade delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-[#fffcec] rounded-3xl p-4 text-center flex flex-col items-center">
            <div className="text-center justify-start text-[#0b0d0e] text-[40px] font-bold font-['Urbanist'] leading-[64px]">
              Sadel IT Solutions
            </div>
            <div className="justify-start text-[#838696] text-lg font-normal font-['Urbanist'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ultrices, arcu at pharetra tristique, nunc nisl rhoncus arcu
            </div>
            <div className="w-68 h-68 item-center justify-center mt-8">
              <img
                src="Images/deupload-file-sharing 2.png"
                alt="Sadel It Solutions"
              />
            </div>
          </div>
          <div className="bg-[#fffcec] rounded-3xl p-4 text-center flex flex-col  items-center">
            <div className="text-center justify-start text-[#0b0d0e] text-[40px] font-bold font-['Urbanist'] leading-[64px]">
              Sadel Products
            </div>
            <div className="justify-start text-[#838696] text-lg font-normal font-['Urbanist'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ultrices, arcu at pharetra tristique, nunc nisl rhoncus arcu
            </div>
            <div className="w-68 relative item-center justify-center mt-8">
              <img
                src="Images/Screenshot 2025-06-29 at 9.22.40 PM 2.png"
                alt="Sadel It Solutions"
              />
              <img
                src="/Images/Untit design 1.png"
                alt="Sadel It Solutions"
                className="absolute right-2 -bottom-10 h-full"
              />
            </div>
          </div>
        </div>
        </Fade>
      </div>
      <TeachingTechCarousel />
      <div className="w-full max-w-7xl mx-auto px-6 py-16 mt-28">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Discover Smart,{" "}
            <span className="text-yellow-400">Simple Tech Solutions</span>{" "}
            Designed to Power Your Workflow.
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Product Display */}
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full opacity-50"></div>

            {/* Device Frame */}
            <img
              src="Images/Screenshot 2025-06-29 at 9.22.40 PM 2.png"
              alt="Device Frame"
              className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Work on the go
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Stay connected and productive wherever you are with Sodars
                on-the-go solutions. Whether youre traveling, working remotely,
                or switching between locations, our tools keep your workflow
                seamless. Access, collaborate, and manage tasks anytime—without
                being tied to a desk.
              </p>

              {/* CTA Button */}
              <button className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105 shadow-sm">
                View Product
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-30">
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Access folders offline
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Access your important folders even without an internet
                connection.Sadel lets you stay organized and in control,
                anytime, anywhere.Work seamlessly offline and sync
                automatically when youre back online.
              </p>

              {/* CTA Button */}
              <button className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105 shadow-sm">
                View Product
              </button>
            </div>
          </div>

          {/* Left Side - Product Display */}
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full opacity-50"></div>

            {/* Device Frame */}
            <img
              src="Images/Screenshot 2025-06-29 at 9.19.49 PM 1.png"
              alt="Device Frame"
              className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4">
          {/* Security & Safety */}
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

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-42 flex items-center justify-between">
              {/* Security Illustration */}
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

          {/* Development Kits */}
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

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-42 flex items-center justify-between">
              <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download SDKs
              </button>
              {/* Development Illustration */}
              <img
                src="Images/Hand coding-bro 1.png"
                alt="Security & Safety"
                className=" h-full object-contain"
              />
            </div>
          </div>

          {/* Join Our Community */}
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

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <img
                src="Images/Work chat-bro 1.png"
                alt="Join Our Community"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* Our Technology */}
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

            {/* Illustration Placeholder - Replace with your image */}
            <div className="relative h-38 flex items-center justify-center">
              {/* Technology Illustration */}

              <img
                src="/Images/Reading glasses-bro 1.png"
                alt="Our Technology"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Business Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Elevated Meeting Experiences */}
          <div
            className="relative h-64 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-6 absolute bottom-5 left-0 right-0 bg-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-xl font-semibold font-['Figtree'] leading-7">
                  Elevated Meeting experiences
                </h3>
              </div>
            </div>
          </div>

          <div
            className="h-64 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image-1.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-6 absolute bottom-5 left-0 right-0 bg-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-xl font-semibold font-['Figtree'] leading-7">
                  Learn In Immersive Way
                </h3>
              </div>
            </div>
          </div>
          <div
            className="h-64 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image-2.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-6 absolute bottom-5 left-0 right-0 bg-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-xl font-semibold font-['Figtree'] leading-7">
                  Interactive Screens Transform
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Success Partner
          </h2>
        </div>
        <img
          src="Images/Screenshot 2025-06-29 at 9.14.56 PM 1.png"
          alt="Success Partner"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
      <FlexibleDeploymentOptions />
    </div>
  );
}
