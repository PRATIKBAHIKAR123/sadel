"use client"

import {
  // Users,
  // Upload,
  // Share2,
  // FileText,
  // CheckCircle
} from 'lucide-react';
import { useLanguage } from "@/lib/languageContext";
import { translations } from "@/lib/translations";

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
  const { language } = useLanguage();
  const t = translations[language];
  const isArabic = language === 'العربية';

  const categories: FeatureCategory[] = [
    {
      icon: <img src="/Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: t.beTransparentTitle,
      items: [
        { text: t.beTransparentDescription }
      ]
    },
    {
      icon: <img src="/Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: t.calculatedDecisionsTitle,
      items: [
        { text: t.calculatedDecisionsDescription }
      ]
    },
    {
      icon: <img src="/Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: t.valueEachOtherTitle,
      items: [
        { text: t.valueEachOtherDescription }
      ]
    },
    {
      icon: <img src="/Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: t.embraceInnovationTitle,
      items: [
        { text: t.embraceInnovationDescription }
      ]
    },
    {
      icon: <img src="/Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: t.takeOwnershipTitle,
      items: [
        { text: t.takeOwnershipDescription }
      ]
    },
    {
      icon: <img src="/Images/key 1.png" alt="Transparency" className="w-5 h-5" />,
      title: t.deliverWithExcellenceTitle,
      items: [
        { text: t.deliverWithExcellenceDescription }
      ]
    },
  ];
  
  return (
    <div className={isArabic ? 'arabic-font' : ''}>
      <div className="max-w-7xl mx-auto px-8 flex flex-col">
        <div className="text-center text-5xl font-semibold font-['Urbanist'] leading-[64px]">
          <span className="text-[#0b0d0e]">{t.ourKeyDifferentiatorsTitle.split('Key Differentiators')[0]}</span>
          <span className="text-[#f9d300]">{t.ourKeyDifferentiatorsTitle.split('Key Differentiators')[1] || 'Key Differentiators'}</span>
        </div>
        <div className="text-center max-w-5xl justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">{t.ourKeyDifferentiatorsSubtitle}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FeatureCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}