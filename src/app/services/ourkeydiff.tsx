import {
  
  
  // Users,
  // Upload,
  // Share2,
  // FileText,
  // CheckCircle
} from 'lucide-react';

interface FeatureItem {
  text: string;
}

interface FeatureCategory {
  icon: React.ReactNode;
  title: string;
  items: FeatureItem[];
}

const FeatureCard: React.FC<{ category: FeatureCategory }> = ({ category }) => {
  return (
    <div className="bg-[#fffcec] rounded-3xl p-6 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
          {category.icon}
        </div>
        <h3 className=" text-[#0b0d0e] text-2xl font-semibold font-['Urbanist'] leading-9">{category.title}</h3>
      </div>

      <div className="space-y-3">
        {category.items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* <CheckCircle className="w-4 h-4 text-gray-500 flex-shrink-0" /> */}
            <span className="justify-start text-[#7A7A7A] text-base font-semibold font-['Urbanist'] leading-none">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function OurKey() {
  const categories: FeatureCategory[] = [
    {
      icon: <img src="Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: "Be Transparent",
      items: [
        { text: "We believe in open, honest, and consistent communication across all levels.Everyone deserves access to clear information, no matter their role in the organization." }
      ]
    },
    {
      icon: <img src="Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: "Calculated Decisions",
      items: [
        { text: "We rely on collaboration and data - driven insights to make smart, strategic decisions that serve the best interest of our business and our people." }
      ]
    },
    {
      icon: <img src="Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: "Value Each Other",
      items: [
        { text: "We lift each other up, celebrate wins, and communicate with honesty and respect.We care deeply about our team’s success and support one another through every step." }
      ]
    },
    {
      icon: <img src="Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: "Embrace Innovation",
      items: [
        { text: "We welcome new ideas, tools, and technologies to stay ahead.Innovation drives us to keep improving and deliver smarter, future - ready solutions." }
      ]
    },
    {
      icon: <img src="Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: "Take Ownership",
      items: [
        { text: "We hold ourselves accountable—from start to finish.Every task, challenge, and achievement is owned with responsibility and integrity." }
      ]
    },
    {
      icon: <img src="Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: "Deliver with Excellence",
      items: [
        { text: "We are committed to quality and precision.Our goal is to consistently exceed expectations and deliver impactful results in everything we do." }
      ]
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-8 flex flex-col">
      <div className="text-center text-5xl font-semibold font-['Urbanist'] leading-[64px]"><span className="text-[#0b0d0e]">Our</span><span className="text-[#f9d300]"> Key Differentiators</span></div>
      <div className="text-center max-w-5xl justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <FeatureCard key={index} category={category} />
        ))}
      </div>
    </div>
  )
}