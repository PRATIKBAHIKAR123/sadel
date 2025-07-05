import { 
  Shield, 
  User, 
  Users, 
  Upload, 
  Share2, 
  FileText,
  CheckCircle
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
            <CheckCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="justify-start text-[#5c5f6e] text-base font-semibold font-['Urbanist'] leading-none">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function OurKey(){
      const categories: FeatureCategory[] = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Authentication",
      items: [
        { text: "Registration" },
        { text: "Login / Logout" },
        { text: "Reset password" }
      ]
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Account",
      items: [
        { text: "Profile" },
        { text: "Access token" },
        { text: "Subscription" },
        { text: "Notifications" }
      ]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Teams",
      items: [
        { text: "Team management" },
        { text: "Invitations" },
        { text: "Navigation" }
      ]
    },
    {
      icon: <Upload className="w-5 h-5" />,
      title: "File Upload",
      items: [
        { text: "Upload file" },
        { text: "File Editing" },
        { text: "Zip file" },
        { text: "Browsing files" },
        { text: "Trash item" },
        { text: "Favorite folder" }
      ]
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "File Sharing",
      items: [
        { text: "Edit sharing" },
        { text: "Share browsing" },
        { text: "Manage sharing" },
        { text: "Share uploading" }
      ]
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "File Request",
      items: [
        { text: "File request management" },
        { text: "File editing" },
        { text: "Request browsing" },
        { text: "Request uploading" }
      ]
    }
  ];
    return(
        <div className="max-w-7xl mx-auto px-8 flex flex-col">
                       <div className="text-center text-5xl font-semibold font-['Urbanist'] leading-[64px]"><span className="text-[#0b0d0e]">Our</span><span className="text-[#f9d300]"> Key Differentiators</span></div>
                       <div className="text-center justify-start text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt sem. Sed interdum eget tellus vel aliquet. Vestibulum nibh dolor</div>
                               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FeatureCard key={index} category={category} />
          ))}
        </div>
                      </div>
    )
}