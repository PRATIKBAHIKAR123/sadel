import React from 'react';
import { Star } from 'lucide-react';

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
              className="w-4 h-4 fill-yellow-400 text-yellow-400" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rodrigo Duarte",
      role: "Graphic Designer",
      content: "Our company uses Sadel, and I also use Box personally to store my documents, photos, videos, sensitive data etc. Sadel is amazing - so much more than just cloud storage. You can watch videos, share photos, scan documents, electronic sign and send documents, secure sensitive data and so much more.",
      avatar: "/Images/Ellipse 84.png",
      rating: 5
    },
    {
      name: "Ivone Josan",
      role: "Marketing Assistant",
      content: "I love using Sadel for work and personally because it is very intuitive to use and easy to share files with anyone. Our company moved from dropbox over to box, due to security purposes which would be my concern but other than that it syncs very quickly and allows collaboration and file sharing alot easier for your team/company.",
      avatar: "/Images/Ellipse 85.png",
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
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