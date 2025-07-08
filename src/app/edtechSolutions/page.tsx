import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import TopCompanies from "./top-companies";
import TestimonialSection from "./testimonials";

export default function EdtechSolutions() {
    return (
        <div className="flex flex-col gap-10">
            <div className="h-screen bg-secondary">
                <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-8">
                    <Fade direction="down">
                        <div className="text-center justify-start">
                            <span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                                Compliance-focused{" "}
                            </span>
                            <span className="text-[#f9d300] text-[56px] font-bold font-['Urbanist'] leading-[72px]">
                                Education system
                            </span>
                        </div>
                        <div className="text-center justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor
                        </div>
                        <div>
                            <Button>Getting Started</Button>{" "}
                            <Button variant={'outline'}>Learn More</Button>
                        </div>
                        <div className="relative mt-8">
                            <img
                                src="Images/Screenshot 2025-07-02 at 2.29.27 PM 2.png"
                                alt="Landing Page Image"
                                className="mt-8 w-full max-w-lg h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-7xl mx-auto p-8">
                <div className="text-center text-[#0e0f10] text-5xl font-bold font-['Urbanist'] leading-[72px]">Design system focused on Students.</div>
                <div className="text-center justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
                    {/* Left Column - Two stacked cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 gap-6">
                        {/* First Card - Streamline data flow */}
                        <div className="bg-[#fffcec] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                            <div className="flex-1 md:max-w-[50%]">
                                <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                    Streamline data flow
                                </div>
                                <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                </div>
                            </div>
                            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                                <img
                                    src="Images/a.png"
                                    alt="Streamline data flow"
                                    className="w-full h-auto object-contain max-w-[280px]"
                                />
                            </div>
                        </div>

                        {/* Second Card - Reduce waiting time */}
                        <div className="bg-[#fffcec] rounded-3xl p-8 flex flex-col md:flex-row items-start justify-between gap-6 min-h-[280px]">
                            <div className="flex-1 md:max-w-[50%]">
                                <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                    Reduce waiting time
                                </div>
                                <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                </div>
                            </div>
                            <div className="flex-1 md:max-w-[50%] w-full flex items-center justify-center">
                                <img
                                    src="Images/a-1.png"
                                    alt="Reduce waiting time"
                                    className="w-full h-auto object-contain max-w-[280px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Tall card */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#fffcec] rounded-3xl p-8 h-full flex flex-col justify-between min-h-[580px] lg:min-h-[620px]">
                            <div className="mb-8">
                                <div className="text-[#0b0d0e] text-2xl md:text-3xl lg:text-4xl font-semibold font-['Urbanist'] leading-tight mb-4">
                                    The right access for the right team
                                </div>
                                <div className="text-[#838696] text-sm font-normal font-['Urbanist'] leading-relaxed space-y-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-end justify-center pt-8">
                                <img
                                    src="Images/Frame.png"
                                    alt="The right access for the right team"
                                    className="w-full max-w-[320px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 px-6  mt-12">
                    <div className="max-w-7xl mx-auto flex flex-col gap-20 space-y-20">

                        {/* First Feature Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0b0d0e] font-normal font-['Urbanist'] leading-[52px] mb-6">
                                    Easy To Use With AI Integration
                                </h2>
                                <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
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
                                        src="Images/Screenshot 2025-06-29 at 9.19.49 PM 3.png"
                                        alt="AI Integration Screen"
                                        className="w-full max-w-[420px] h-auto object-contain"
                                    />
                                    {/* TV Stand */}
                                    <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src="Images/Group (3).png"
                                            alt="TV Stand"
                                            className="w-full  max-w-[400px] h-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Standing Person */}
                                <div className="absolute -bottom-15 -right-8 lg:right-12">
                                    <img
                                        src="Images/Group (4).png"
                                        alt="Standing Person"
                                        className="w-24 lg:w-26 h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0b0d0e] font-normal font-['Urbanist'] leading-[52px] mb-6">
                                    #1 Most Trusted Interactive Flat Panel Brand
                                </h2>
                                <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
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
                                        src="Images/Screenshot 2025-06-29 at 9.22.40 PM 4.png"
                                        alt="AI Integration Screen"
                                        className="w-full max-w-[420px] h-auto object-contain"
                                    />
                                    {/* TV Stand */}
                                    <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src="Images/Group (3).png"
                                            alt="TV Stand"
                                            className="w-full  max-w-[400px] h-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Standing Person */}
                                <div className="absolute -bottom-15 -right-8 lg:right-12">
                                    <img
                                        src="Images/Group (4).png"
                                        alt="Standing Person"
                                        className="w-24 lg:w-26 h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0b0d0e] font-normal font-['Urbanist'] leading-[52px] mb-6">
                                    Educational Smart BoardSolutions 
                                </h2>
                                <div className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">
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
                                        src="Images/Screenshot 2025-06-29 at 9.19.49 PM 1.png"
                                        alt="AI Integration Screen"
                                        className="w-full max-w-[420px] h-auto object-contain"
                                    />
                                    {/* TV Stand */}
                                    <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src="Images/Group (3).png"
                                            alt="TV Stand"
                                            className="w-full  max-w-[400px] h-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Standing Person */}
                                <div className="absolute -bottom-15 -right-8 lg:right-12">
                                    <img
                                        src="Images/Group (4).png"
                                        alt="Standing Person"
                                        className="w-24 lg:w-26 h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TopCompanies/>
            <TestimonialSection/>
            
            <div className="max-w-7xl mx-auto p-4">
             <div className="grid lg:grid-cols-2 gap-16 items-center  bg-[#fffcec] rounded-3xl p-12">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-[#0b0d0e] text-5xl font-bold font-['Urbanist'] leading-[64px] mb-6">
                    Educational Board that all Schools Need
                  </h2>
                  <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                    Ensure robust and secure document management for digital health environments.
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
                      Getting Started
                    </Button>
                    <Button variant="outline">Get $10 credit</Button>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                {/* Background Elements */}
                <img src="Images/banner-solutions.png" alt="Background Element" />
              </div>
            </div>
            </div>
        </div>
    )
}