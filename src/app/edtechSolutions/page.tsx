import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import TopCompanies from "./top-companies";
import TestimonialSection from "./testimonials";

export default function EdtechSolutions() {
    return (
        <div className="flex flex-col gap-6 sm:gap-10">
            <div className="min-h-screen bg-secondary">
                <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-4 sm:p-6 md:p-8">
                    <Fade direction="down">
                        <div className="text-center justify-start">
                            <span className="text-[#0e0f10] text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                                Compliance-focused{" "}
                            </span>
                            <span className="text-[#f9d300] text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                                Education system
                            </span>
                        </div>
                        <div className="text-center justify-start text-[#5c5f6e] text-base sm:text-lg md:text-xl font-normal font-['Urbanist'] leading-relaxed mt-4 sm:mt-6 max-w-4xl mx-auto px-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <Button className="w-full sm:w-auto">Getting Started</Button>{" "}
                            <Button variant={'outline'} className="w-full sm:w-auto">Learn More</Button>
                        </div>
                        <div className="relative mt-8 sm:mt-12">
                            <img
                                src="Images/Screenshot 2025-07-02 at 2.29.27 PM 2.png"
                                alt="Landing Page Image"
                                className="mt-8 w-full max-w-lg h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
                <div className="text-center text-[#0e0f10] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px] mb-4 sm:mb-6">Design system focused on Students.</div>
                <div className="text-center justify-start text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed max-w-4xl mx-auto px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 max-w-7xl mx-auto w-full">
                    {/* Left Column - Two stacked cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:gap-6">
                        {/* First Card - Streamline data flow */}
                        <div className="bg-[#fffcec] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-6 min-h-[280px]">
                            <div className="flex-1 md:max-w-[50%]">
                                <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-3 sm:mb-4">
                                    Streamline data flow
                                </div>
                                <div className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed space-y-2 sm:space-y-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                </div>
                            </div>
                            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                                <img
                                    src="Images/a.png"
                                    alt="Streamline data flow"
                                    className="w-full h-auto object-contain max-w-[200px] sm:max-w-[280px]"
                                />
                            </div>
                        </div>

                        {/* Second Card - Reduce waiting time */}
                        <div className="bg-[#fffcec] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-6 min-h-[280px]">
                            <div className="flex-1 md:max-w-[50%]">
                                <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-3 sm:mb-4">
                                    Reduce waiting time
                                </div>
                                <div className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed space-y-2 sm:space-y-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                </div>
                            </div>
                            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                                <img
                                    src="Images/a-1.png"
                                    alt="Reduce waiting time"
                                    className="w-full h-auto object-contain max-w-[200px] sm:max-w-[280px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Tall card */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#fffcec] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between min-h-[400px] sm:min-h-[580px] lg:min-h-[620px]">
                            <div className="mb-4 sm:mb-8">
                                <div className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-3 sm:mb-4">
                                    The right access for the right team
                                </div>
                                <div className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] leading-relaxed space-y-2 sm:space-y-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-end justify-center pt-4 sm:pt-8">
                                <img
                                    src="Images/Frame.png"
                                    alt="The right access for the right team"
                                    className="w-full max-w-[200px] sm:max-w-[320px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 mt-8 sm:mt-12 w-full">
                    <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 space-y-12 sm:space-y-16 md:space-y-20">

                        {/* First Feature Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            {/* Left Content */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#0b0d0e] font-normal font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[52px] mb-4 sm:mb-6">
                                    Easy To Use With AI Integration
                                </h2>
                                <div className="text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                                        tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh
                                        dolor
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                                        tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh
                                        dolor
                                    </p>
                                </div>
                            </div>

                            {/* Right TV Setup */}
                            <div className="order-1 lg:order-2 flex justify-center items-end relative">
                                {/* TV Screen */}
                                <div className="relative">
                                    <img
                                        src="Images/screen1.png"
                                        alt="AI Integration Screen"
                                        className="w-full max-w-[300px] sm:max-w-[420px] h-auto object-contain"
                                    />
                                    {/* TV Stand */}
                                    <div className="absolute -bottom-8 sm:-bottom-15 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src="Images/Group (3).png"
                                            alt="TV Stand"
                                            className="w-full max-w-[250px] sm:max-w-[400px] h-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Standing Person */}
                                <div className="absolute -bottom-8 sm:-bottom-15 -right-4 sm:-right-8 lg:right-12">
                                    <img
                                        src="Images/Group (4).png"
                                        alt="Standing Person"
                                        className="w-16 sm:w-20 lg:w-26 h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            {/* Left Content */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#0b0d0e] font-normal font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[52px] mb-4 sm:mb-6">
                                    #1 Most Trusted Interactive Flat Panel Brand
                                </h2>
                                <div className="text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed">
                                    <p>
                                        Retain complete control over your repositorys files and folders. Detect unauthorized access or edits to reports through comprehensive logs and thorough activity monitoring. Additionally, easily recover any accidentally deleted patient information for added peace of mind.
                                    </p>
                                </div>
                            </div>

                            {/* Right TV Setup */}
                            <div className="order-1 lg:order-2 flex justify-center items-end relative">
                                {/* TV Screen */}
                                <div className="relative">
                                    <img
                                        src="Images/screen2.png"
                                        alt="AI Integration Screen"
                                        className="w-full max-w-[300px] sm:max-w-[420px] h-auto object-contain"
                                    />
                                    {/* TV Stand */}
                                    <div className="absolute -bottom-8 sm:-bottom-15 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src="Images/Group (3).png"
                                            alt="TV Stand"
                                            className="w-full max-w-[250px] sm:max-w-[400px] h-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Standing Person */}
                                <div className="absolute -bottom-8 sm:-bottom-15 -right-4 sm:-right-8 lg:right-12">
                                    <img
                                        src="Images/Group (4).png"
                                        alt="Standing Person"
                                        className="w-16 sm:w-20 lg:w-26 h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            {/* Left Content */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#0b0d0e] font-normal font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[52px] mb-4 sm:mb-6">
                                    Educational Smart BoardSolutions 
                                </h2>
                                <div className="text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed">
                                    <p>
                                       Retain complete control over your repositorys files and folders. Detect unauthorized access or edits to reports through comprehensive logs and thorough activity monitoring. Additionally, easily recover any accidentally deleted patient information for added peace of mind.
                                    </p>
                                </div>
                            </div>

                            {/* Right TV Setup */}
                            <div className="order-1 lg:order-2 flex justify-center items-end relative">
                                {/* TV Screen */}
                                <div className="relative">
                                    <img
                                        src="Images/screen3.png"
                                        alt="AI Integration Screen"
                                        className="w-full max-w-[300px] sm:max-w-[420px] h-auto object-contain"
                                    />
                                    {/* TV Stand */}
                                    <div className="absolute -bottom-8 sm:-bottom-15 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src="Images/Group (3).png"
                                            alt="TV Stand"
                                            className="w-full max-w-[250px] sm:max-w-[400px] h-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Standing Person */}
                                <div className="absolute -bottom-8 sm:-bottom-15 -right-4 sm:-right-8 lg:right-12">
                                    <img
                                        src="Images/Group (4).png"
                                        alt="Standing Person"
                                        className="w-16 sm:w-20 lg:w-26 h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TopCompanies/>
            <TestimonialSection/>
            
            <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center bg-[#fffcec] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-[#0b0d0e] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[64px] mb-4 sm:mb-6">
                    Educational Board that all Schools Need
                  </h2>
                  <p className="text-[#5c5f6e] text-base sm:text-lg font-normal font-['Urbanist'] leading-relaxed mb-6 sm:mb-8">
                    Ensure robust and secure document management for digital health environments.
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
                <img src="Images/banner-solutions.png" alt="Background Element" className="w-full h-auto" />
              </div>
            </div>
            </div>
        </div>
    )
}