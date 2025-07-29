"use client";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import FAQAccordion from "@/components/ui/faq-accordion";
import { useRouter } from "next/navigation";

export default function AzureVirtualDesktop() {
  const router = useRouter();

  const handleContactRedirect = () => {
    router.push('/contact-us');
  };

  const faqData = [
    {
      question: "What is a managed SOC?",
      answer: "A managed SOC (Security Operations Center) is a subscription-based service where a third-party team of cybersecurity experts monitors, detects, and responds to security threats across your IT infrastructure, endpoints, and data. This proactive approach helps businesses stay ahead of cyber risks and ensures rapid response to incidents."
    },
    {
      question: "What are the services in SOC?",
      answer: "SOC as a service includes continuous security monitoring, threat detection, vulnerability assessments, incident response, and reporting. These services leverage automation and data science to increase detection speed and reliability, providing 24/7 protection for your organization."
    },
    {
      question: "How does a SOC develop?",
      answer: "A SOC develops through five main stages: planning, designing, building, operating, and reviewing. Each stage involves defining processes, selecting tools, training staff, and continuously improving operations to adapt to evolving threats."
    },
    {
      question: "What is the role of the SOC Manager?",
      answer: "The SOC Manager leads the security operations team, oversees daily activities, provides technical guidance, manages staff training, and ensures effective incident response. They report to the CISO and are responsible for the overall performance and improvement of the SOC."
    },
    {
      question: "Is a SOC MSP?",
      answer: "A SOC can be part of a Managed Service Provider (MSP) offering, giving clients access to a dedicated team of security analysts and advanced security tools. This model allows organizations to enhance their security posture without building an in-house SOC from scratch."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#fffcec] p-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#fffcec] rounded-3xl p-12 max-w-7xl mx-auto">

          {/* Left Content */}
          <div className="space-y-8">
            <Fade direction="up" triggerOnce>
              <h2 className="text-5xl font-bold text-[#0e0f10] leading-[64px] font-['Urbanist'] mb-6">
                Virtually access a secure remote desktop from anywhere.
              </h2>
              <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-loose mb-8">
                Enable your team to work securely from any location with Azure Virtual Desktop. Enjoy seamless access to Windows desktops and applications, reduce IT costs, and simplify management with a flexible, cloud-based solution.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleContactRedirect}
                  className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Get a free 30-minute consultation with a AFAQ expert
                </Button>
              </div>
            </Fade>
          </div>

          {/* Right Illustration */}
          <div className="relative w-full flex justify-center">
            <Fade direction="left" triggerOnce>
              <div className="relative w-full max-w-md">
                <img
                  src="/Images/Frame (19).png"
                  alt="Azure Virtual Desktop"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </Fade>
          </div>

        </div>
      </div>


      {/* Cost & Remote Use Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="left">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Azure Virtual Desktop Can Reduce Costs</h2>
            <p className="text-[#5c5f6e] text-lg font-normal font-['Urbanist'] leading-relaxed mb-4">
              Already have Microsoft 365 or Windows licenses? Azure Virtual Desktop lets you leverage existing investments with no extra cost. Scale resources up or down as needed, and only pay for what you use. Reduce infrastructure expenses by reallocating virtual machine resources and optimizing your cloud spend.
            </p>
            <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Remotely Use Your Windows 10 or 11 Desktop and All Your Favorite Programs</h3>
            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] mb-2">
              Access your Windows desktop and applications from any device—Windows, Mac, iOS, Android, or HTML5 browser. Azure Virtual Desktop supports multi-session Windows 10/11, so your team can work efficiently from anywhere.
            </p>
            <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">Get the Most Out of Microsoft Teams and Office</h3>
            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist']">
              Integrate Microsoft Teams, OneDrive, and Office apps for a seamless productivity experience. Employees can collaborate and perform tasks as efficiently as they would on a local desktop or laptop.
            </p>
          </div>
        </Fade>
      </div>

      {/* Key Capabilities Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="right">
          <div className="bg-[#fffcec] rounded-3xl p-8">
            <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Key Capabilities</h2>
            <ul className="list-disc pl-6 text-[#5c5f6e] text-base font-normal font-['Urbanist'] space-y-2">
              <li>Set up a complete desktop virtualization system on Azure without gateway servers.</li>
              <li>Distribute host pools to handle a wide variety of workloads.</li>
              <li>Use custom or gallery images for mission-critical or test workloads.</li>
              <li>Save money by sharing resources across sessions and reducing VM/OS overhead.</li>
              <li>Empower users with their own (permanent) virtual desktops.</li>
              <li>Autoscale resources to control costs based on demand, time of day, or week.</li>
            </ul>
          </div>
        </Fade>
      </div>

      {/* Industries Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="left">
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-wrap gap-4 justify-center">
            <span className="bg-[#8a78bd] text-white px-6 py-2 rounded-full font-semibold">Financial Services</span>
            <span className="bg-[#8a78bd] text-white px-6 py-2 rounded-full font-semibold">Government</span>
            <span className="bg-[#8a78bd] text-white px-6 py-2 rounded-full font-semibold">Manufacturing</span>
            <span className="bg-[#8a78bd] text-white px-6 py-2 rounded-full font-semibold">Retail</span>
            <span className="bg-[#8a78bd] text-white px-6 py-2 rounded-full font-semibold">Health Care</span>
          </div>
        </Fade>
      </div>

      {/* AMMP & Security Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="right">
          <div className="bg-[#fff5b9] rounded-3xl p-8">
            <h2 className="text-[#0e0f10] text-3xl font-bold font-['Urbanist'] mb-4">Deploy Azure Virtual Desktop with AMMP</h2>
            <p className="text-[#5c5f6e] text-base font-normal font-['Urbanist'] mb-4">
              The Azure Migration and Modernization Program (AMMP) offers evaluation, proof-of-concept, milestone rewards, and technical training for all control planes. Partners meeting advanced specialization requirements can enable whichever control planes they prefer.
            </p>
            <h3 className="text-[#0e0f10] text-xl font-bold font-['Urbanist'] mb-2">What Makes Azure Virtual Desktop So Trusted?</h3>
            <ul className="list-disc pl-6 text-[#5c5f6e] text-base font-normal font-['Urbanist'] mb-2">
              <li>Keep data on Azure, not local PCs, to safeguard employees and company data.</li>
              <li>Use Azure security services (Firewall, Security Center, Sentinel, Defender for Endpoint) for end-to-end protection.</li>
              <li>Utilize conditional access and multi-factor authentication for secure logins.</li>
              <li>Implement role-based access control (RBAC) and detect threats with Azure Security Center.</li>
              <li>Take advantage of Azure&apos;s many certifications for security and compliance (ISO, PCI, FedRAMP, HIPAA, and more).</li>
            </ul>
            <div className="text-center mt-6">
              <Button 
                onClick={handleContactRedirect}
                className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get a free 30-minute consultation with a AFAQ expert
              </Button>
            </div>
          </div>
        </Fade>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto p-6">
        <Fade direction="left">
          <div className="text-center mb-12">
            <h2 className="text-[#0e0f10] text-[56px] font-bold font-['Urbanist'] leading-[72px] mb-8">FAQs</h2>
            <FAQAccordion faqs={faqData} />
          </div>
        </Fade>
      </div>
    </div>
  );
}