import { Button } from "@/components/ui/button";

export default function Services(){
    return (
        <div className="flex flex-col gap-16">
            <div className="bg-[#fffcec] p-8">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="justify-start">
                            <span className="text-[#f9d300] text-[56px] font-bold font-['Urbanist'] leading-[72px]">Know More</span><span className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px]"> About Both Our Services</span>
                            <div className="justify-start text-[#5c5f6e] text-xl font-normal font-['Urbanist'] leading-9">Empower your team and spark productivity with a thoughtfully designed interactive screen. Whether it’s for brainstorming, collaboration, or presentations, this dynamic solution brings clarity, creativity, and efficiency to every task.</div>
                            <div className="flex justify-start gap-4 mt-4">
                                <Button>IT Solutions</Button>
                                <Button variant="outline">Ed Tech Solution</Button>
                            </div>
                            </div>
                            <div className="h-auto">
                            <img src="Images/Frame (4).png" alt="About Us" className="w-full h-full" />
                            </div>
                    </div>
            </div>
            </div>
    )
}