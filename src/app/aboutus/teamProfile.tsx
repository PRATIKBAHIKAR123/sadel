import React from 'react';
import { User } from 'lucide-react';

const TeamProfilesSection = () => {
  // Sample team data - replace with your actual team member images
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      image: 'Images/Ellipse 73.png', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'Images/Ellipse 74.png', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      image: 'Images/Ellipse 75.png', // Replace with actual image path
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Data Scientist',
      image: 'Images/Ellipse 76.png', // Replace with actual image path
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      image: 'Images/Ellipse 77.png', // Replace with actual image path
    },
    {
      id: 6,
      name: 'Alex Foster',
      role: 'Backend Engineer',
      image: 'Images/Ellipse 78.png', // Replace with actual image path
    },
    {
      id: 7,
      name: 'James Park',
      role: 'Frontend Developer',
      image: 'Images/Ellipse 79.png', // Replace with actual image path
    },
    {
      id: 8,
      name: 'Rachel Green',
      role: 'UI Designer',
      image: 'Images/Ellipse 80.png', // Replace with actual image path
    },
    {
      id: 9,
      name: 'Tom Wilson',
      role: 'DevOps Engineer',
      image: 'Images/Ellipse 81.png', // Replace with actual image path
    },
    {
      id: 10,
      name: 'Maria Garcia',
      role: 'Product Designer',
      image: 'Images/Ellipse 82.png', // Replace with actual image path
    },
    {
      id: 11,
      name: 'Chris Brown',
      role: 'QA Engineer',
      image: 'Images/Ellipse 83.png', // Replace with actual image path
    },
  ];

  // Split team members into two rows
  const firstRow = teamMembers.slice(0, 6);
  const secondRow = teamMembers.slice(6, 11);

  type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
  };

  const ProfileImage: React.FC<{ member: TeamMember; size?: string }> = ({ member, size = "w-24 h-24 lg:w-28 lg:h-28" }) => (
    <div className="group cursor-pointer">
      <div className={`${size} rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
        {/* Placeholder with user icon - replace with actual images */}
        {/* <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <User className="w-8 h-8 text-gray-400" />
        </div> */}
        {/* Uncomment when you have actual images */}
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Optional: Add name tooltip on hover */}
      {/* <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm font-medium text-gray-800">{member.name}</p>
        <p className="text-xs text-gray-600">{member.role}</p>
      </div> */}
    </div>
  );

  return (
        
        <div className="mt-15">
          
          {/* First Row */}
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {firstRow.map((member) => (
                <ProfileImage key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {secondRow.map((member) => (
                <ProfileImage key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
  );
};

export default TeamProfilesSection;