"use client"

import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';
import { translations } from '@/lib/translations';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, avatar, rating }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {content}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={avatar} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 fill-[#8a78bd] text-primary" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const testimonials = [
    {
      name: t.testimonial1Name,
      role: t.testimonial1Role,
      content: t.testimonial1Content,
      avatar: "/Images/Ellipse 84.png",
      rating: 5
    },
    {
      name: t.testimonial2Name,
      role: t.testimonial2Role,
      content: t.testimonial2Content,
      avatar: "/Images/Ellipse 85.png",
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.testimonialSectionTitle}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.testimonialSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;