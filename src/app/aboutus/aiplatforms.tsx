import React from 'react';
import { ArrowRight } from 'lucide-react';

const AIPlatformSection = () => {
  const features = [
    {
      id: 1,
      percentage: '76%',
      title: 'Guests willing to pay a premium for a personalized digital experience.',
      viewDetails: 'View Details'
    },
    {
      id: 2,
      percentage: '76%',
      title: 'Guests willing to pay a premium for a personalized digital experience.',
      viewDetails: 'View Details'
    },
    {
      id: 3,
      percentage: '76%',
      title: 'Guests willing to pay a premium for a personalized digital experience.',
      viewDetails: 'View Details'
    },
    {
      id: 4,
      percentage: '76%',
      title: 'Guests willing to pay a premium for a personalized digital experience.',
      viewDetails: 'View Details'
    },
    {
      id: 5,
      percentage: '76%',
      title: 'Guests willing to pay a premium for a personalized digital experience.',
      viewDetails: 'View Details'
    },
    {
      id: 6,
      percentage: '76%',
      title: 'Guests willing to pay a premium for a personalized digital experience.',
      viewDetails: 'View Details'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold font-['Urbanist'] leading-[58px] max-w-4xl mx-auto">
            Industrys only AI-Native platform for complex infrastructure management
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-[#fffcec] rounded-[10px] p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              
              {/* Icon and Percentage */}
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 rounded-lg p-3 mr-4">
                  <img src="/Images/Group.png" alt='Icon' className='w-6 h-6' />
                </div>
                <span className="text-[#2d3c58] text-[22px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-relaxed">
                  {feature.percentage}
                </span>
              </div>

              {/* Description */}
              <p className="justify-center text-[#252525] text-lg font-medium font-['Inter'] leading-[30px] mb-6">
                {feature.title}
              </p>

              {/* View Details Link */}
              <button className="flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200 group">
                <span className="mr-2">{feature.viewDetails}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPlatformSection;