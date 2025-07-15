import React from 'react';

const AIPlatformSection = () => {
  const features = [
    {
      id: 1,
      title: "Integrated and customized technology solutions",
      description: "We understand that each sector has its own challenges, which is why we design customized technology solutions that perfectly meet the needs of your company or educational institution. Through Sadel Vision you will get the technology that suits you, in an easy-to-use and high performance manner"
    },
    {
      id: 2,
      title: "High expertise and professionalism",
      description: "Our team of experts works around the clock to ensure that your technical systems operate smoothly and efficiently. We provide continuous support and extensive experience in dealing with the latest technological innovations"
    },
    {
      id: 3,
      title: "Integrated security and protection",
      description: "We put the security of your information and data at the top of our priorities. With Sadel Vision&apos;s advanced security solutions, you can rest assured that your data and systems are protected at the highest level of international standards"
    },
    {
      id: 4,
      title: "Ease of Use and Training",
      description: "We don't just provide you with technical solutions, we also provide comprehensive training to ensure that your team benefits from the full potential of the systems we provide. Our programs are designed to be easy to learn and apply, ensuring maximum productivity"
    },
    {
      id: 5,
      title: "Save Time and Costs",
      description: "Through our smart solutions you will be able to automate many processes and reduce operational costs, saving you time and effort and focusing on what is more important: growing your business"
    },
    {
      id: 6,
      title: "24/7 Technical Support",
      description: "Our dedicated support team is available round the clock to provide immediate assistance and resolve any technical issues. We ensure minimal downtime and maximum efficiency for your business operations with our comprehensive support services."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold font-['Urbanist'] leading-[58px] max-w-4xl mx-auto">
            HERE&apos;S WHY SADEL VISION IS THE <span className='text-[#f9d300]'>PERFECT CHOICE FOR YOU :</span>
          </h2>
        </div>

        {/* Features Grid - Two rows of 3 cards each */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Title */}
              <div className="text-[#0b0d0e] text-xl font-bold font-['Urbanist'] mb-3">
                {feature.title}
              </div>

              {/* Description */}
              <div className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] leading-relaxed">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPlatformSection;