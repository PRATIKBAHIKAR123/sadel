import { Button } from "@/components/ui/button";
import TopCompanies from "../edtechSolutions/top-companies";
import TestimonialSection from "../edtechSolutions/testimonials";

export default function ItSolutions() {
  const services = [
    {
      id: 1,
      iconSrc: "/Images/database 1.png", // Replace with your actual icon path
      title: "Managed SOC Service",
      description: "Ensure 24/7 monitoring and threat detection with Sadel's Managed SOC, giving your organization full control over data access and real-time security incident response."
    },
    {
      id: 2,
      iconSrc: "/Images/rotate-left 1.png", // Replace with your actual icon path
      title: "Azure Security",
      description: "Protect your cloud environment with enterprise-grade encryption, automated backups, and quick disaster recovery using Microsoft Azure's trusted security framework."
    },
    {
      id: 3,
      iconSrc: "/Images/laptop-mobile 2.png", // Replace with your actual icon path
      title: "Defender for Endpoint",
      description: "Secure your devices against modern threats with intelligent endpoint protection—using real-time monitoring, threat detection, and secure login protocols."
    },
    {
      id: 4,
      iconSrc: "/Images/database 1.png", // Replace with your actual icon path
      title: "Email Security",
      description: "Safeguard communication channels with advanced email threat protection, spam filtering, and controlled data access to prevent phishing and data leaks."
    },
    {
      id: 5,
      iconSrc: "/Images/rotate-left 1.png", // Replace with your actual icon path
      title: "Microsoft Cloud App Security",
      description: "Gain full visibility and control over cloud apps—monitor user behavior, detect risky activities, and enforce security policies with intelligent analytics."
    },
    {
      id: 6,
      iconSrc: "/Images/laptop-mobile 2.png", // Replace with your actual icon path
      title: "Defender for Identity",
      description: "Protect user identities across systems by detecting unusual login behaviors, compromised credentials, and unauthorized access attempts in real time."
    }
  ];
  return (
    <div>
      <div className="bg-[#fffcec] p-4 sm:p-6 md:p-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center bg-[#fffcec] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-[#0b0d0e] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[64px] mb-4 sm:mb-6">
                Professional Managed Security and IT Support Services Provider
              </h2>
              <p className="text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed mb-6 sm:mb-8">
                Sadel is your trusted partner for professional managed security and IT support services. We provide end-to-end solutions that protect your digital infrastructure, ensure system uptime, and streamline your IT operations. With proactive monitoring, expert support, and tailored strategies, we help your business stay secure, efficient, and future-ready.                            </p>
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
            <img src="/Images/Frame (10).png" alt="Background Element" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="flex flex-col items-start gap-8 sm:gap-12">
            <div className="flex gap-4">
              <div className="flex items-start justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-2xl sm:text-[40px] font-black font-['Urbanist'] leading-none">
                  <img src="/Images/megaphone 1.png" alt="icon" className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-[32px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[48px]">What We Offer</div>

                <div className="text-[#5c5f6e] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed">
                  From managed IT support to cybersecurity and cloud services, we cover all your digital needs under one roof.
                  Empower your spaces with digital kiosks, interactive displays, surveillance systems, and P.A. setups for smarter operations.                            </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-start justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-2xl sm:text-[40px] font-black font-['Urbanist'] leading-none">
                  <img src="/Images/user-crown 1.png" alt="icon" className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-[32px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[48px]">Why Choose Sadel</div>

                <div className="text-[#5c5f6e] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed">
                  Backed by years of industry experience and a skilled team, we deliver reliable and future-ready solutions.
                  From planning to deployment and ongoing support, we ensure seamless service and complete peace of mind.                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-start justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f9d300] rounded-full flex items-center justify-center text-white text-2xl sm:text-[40px] font-black font-['Urbanist'] leading-none">
                  <img src="/Images/sack-dollar 1.png" alt="icon" className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-[32px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[48px]">Solutions Tailored to You</div>
                                 <div className="text-[#5c5f6e] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-relaxed">
                   Whether it&apos;s education, corporate, retail, or public sector, our solutions are designed to meet your specific needs.
                   We build solutions that grow with you—easy to scale, upgrade, and adapt as your business evolves.             </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto">
            <img src="/Images/Group 363.png" alt="banner" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10 mt-8 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-[#fffcec] rounded-2xl sm:rounded-3xl p-4 sm:p-6 col-span-1 text-left items-center flex flex-col">
            <div className="text-[#263238] text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[52px]">
              Secure. Scalable. Smart.            </div>
            <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-normal">
              Sadel delivers future-ready IT solutions that protect, grow, and adapt with your business.            </p>
            <div className="h-48 sm:h-64 mt-4 sm:mt-6">
              <img src="/Images/Frame (12).png" alt="image" className="h-full w-auto" />
            </div>
          </div>
          <div className="bg-[#fffcec] rounded-2xl sm:rounded-3xl p-4 sm:p-6 col-span-1 lg:col-span-2 text-left flex flex-col w-full">
            <div className="text-[#263238] text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[52px]">
              Empowering Businesses Through Technology
            </div>
            <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-normal mt-3 sm:mt-4">
              We simplify technology to boost productivity, drive innovation, and support your business goals.
            </p>
            <div className="h-48 sm:h-64 mt-4 sm:mt-6 flex justify-center w-full">
              <img src="/Images/Frame (11).png" alt="image" className="h-full w-auto" />
            </div>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 p-4 sm:p-6">
        <div className="justify-start text-[#0e0f10] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
          Streamlined operations with better Services
        </div>
                 <p className="text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed">
           Protect your data, enhance visibility, and ensure business continuity with Sadel&apos;s smart security and IT service solutions—designed to keep your operations smooth, secure, and scalable.
         </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-start space-y-3 sm:space-y-4">
              {/* Icon Circle */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f9d300] rounded-full flex items-center justify-center mb-2">
                <img
                  src={service.iconSrc}
                  alt={`${service.title} icon`}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0b0d0e] font-['Urbanist'] leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TopCompanies />
      <TestimonialSection />
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center bg-[#fffcec] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-[#0b0d0e] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[64px] mb-4 sm:mb-6">
                Securing Your Business, Powering Your Growth
              </h2>
              <p className="text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed mb-6 sm:mb-8">
                At Sadel, we combine advanced security solutions with reliable IT support to protect your operations and fuel long-term success. From cloud protection to endpoint security, we help your business stay one step ahead—always connected, always secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold w-full sm:w-auto">
                  Getting Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">Get $10 credit</Button>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            {/* Background Elements */}
            <img src="/Images/banner solutions.png" alt="Background Element" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}