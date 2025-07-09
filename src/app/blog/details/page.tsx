"use client";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import React from "react";
import "../../globals.css";

const moreArticles = [
  {
    title: "Begin again: how a returnship could help you relaunch your career",
    image: "/Images/Rectangle 598.png",
    description:
      "There's no single source of truth for how you're perceived in the workplace. 360-degree feedback might be the next best thing",
  },
  {
    title: "9 retrospective techniques that won't bore your team to death",
    image: "/Images/Rectangle 598 (3).png",
    description:
      "There's no single source of truth for how you're perceived in the workplace. 360-degree feedback might be the next best thing",
  },
  {
    title: "Organize the chaos: 5 steps to effective change management",
    image: "/Images/Rectangle 599.png",
    description:
      "There's no single source of truth for how you're perceived in the workplace. 360-degree feedback might be the next best thing",
  },
];

export default function BlogDetailsPage() {
  return (
    <div className="w-full min-h-screen bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
        <Slide direction="up" triggerOnce>
          <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 relative rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
            <Image src="/Images/blog_details.png" alt="Blog Main" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw" priority />
          </div>
        </Slide>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Social Share Sidebar - Mobile Horizontal Layout */}
          <div className="lg:hidden w-full bg-[#F7F8FA] rounded-xl sm:rounded-2xl py-4 sm:py-6 px-4 sm:px-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-2">
                  <img src="/Images/facebook.png" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm font-semibold text-[#222]">242</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/Images/twitter.png" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm font-semibold text-[#222]">768</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/Images/pinterest.png" alt="Pinterest" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm font-semibold text-[#222]">323</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-[#222] leading-none">897</span>
                <span className="text-xs text-gray-400 font-medium">Shares</span>
              </div>
            </div>
          </div>

          {/* Social Share Sidebar - Desktop Vertical Layout */}
          <div className="hidden lg:flex flex-col items-center gap-6 bg-[#F7F8FA] rounded-2xl py-6 px-4 shadow-sm border border-gray-100 min-w-[70px] self-start">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <img src="/Images/facebook.png" alt="Facebook" className="w-6 h-6 mb-1" />
                <span className="text-sm font-semibold text-[#222]">242</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/Images/twitter.png" alt="Twitter" className="w-6 h-6 mb-1" />
                <span className="text-sm font-semibold text-[#222]">768</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/Images/pinterest.png" alt="Pinterest" className="w-6 h-6 mb-1" />
                <span className="text-sm font-semibold text-[#222]">323</span>
              </div>
            </div>
            <div className="w-full border-t border-gray-200 my-2"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#222] leading-none">897</span>
              <span className="text-xs text-gray-400 font-medium">Shares</span>
            </div>
          </div>

          {/* Main Blog Content */}
          <div className="flex-1">
            <Fade cascade>
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#7B7B7B] font-semibold mb-3 sm:mb-4">
                  <span>PRODUCTIVITY</span>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-400 font-normal">
                    <span className="flex items-center gap-1">
                      <img src="/Images/chart.png" alt="icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                      412 
                    </span>
                    <span className="flex items-center gap-1">
                      <img src="/Images/share.png" alt="icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                      827 shares
                    </span>
                    <span className="flex items-center gap-1">
                      <img src="/Images/clock.png" alt="icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                      3 minutes read
                    </span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 font-['Urbanist'] leading-tight sm:leading-normal">
                  Why you need an emotional-support network at work
                </h1>
                <div className="flex items-center gap-2 mb-6 sm:mb-8">
                  <Image src="/Images/div.post-image.png" alt="Author" width={32} height={32} className="rounded-full w-8 h-8 sm:w-10 sm:h-10" />
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-black">Elliot Alderson</div>
                    <div className="text-xs sm:text-sm text-gray-400">February 19, 2023</div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade cascade>
              <div className="prose font-['Urbanist'] prose-sm sm:prose-base lg:prose-lg max-w-none text-black mb-8 sm:mb-10">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Structured grippa tape invisible moulded cups for saucper firm hold strong powermesh front liner sport detail. Warmth comfort ranges loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodysuit skirt its bright primary colours punchy palette pleated checkerboard vibe stripe trims. Staple court shoe chunky thick block heel almond toe flexible rubber sole simple chic label handmade metallic detail contemporary pure silk pocket-soup sophistication luxurious coral print pocket pattern. On trend inspired shades.
                </p>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Striking pewter studded co-ordinates silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with natural colours chrome quartz leather strap fastens with a pin or a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must–have now season glamorous.
                </p>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-['Urbanist'] mt-6 sm:mt-8">
                  Knickler lining concealed back zip fasten swing style high waisted double layer full pattern floral.
                </h2>
                <p className="mb-3 sm:mb-4 mt-2 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Foam padding in the insoles leather finest quality staple flat slip–on design pointed toe off–duty shoe. Block knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.
                </p>
                <p className="mb-3 sm:mb-4 mt-2 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium mattis nullam, quam aenean sodal quis sem neque, vel libero. Venenatis nullam fringilla pretium magna aliquam nunc vulputate integer augue ut augue ultricies eros. Eget varius feugiat cras sit. Sit natoque, mames tempus ligula eget vitae pede rhoncus maecenas consectetur commodo condimentum aenean.
                </p>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-['Urbanist'] mt-6 sm:mt-8">
                  Eu ridiculus fringilla aenean
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.
                </p>
                <ul className="list-disc list-inside mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg">
                  <li>Crisp fresh iconic elegant timeless clean perfume.</li>
                  <li>V–neck straight sharp silhouette and dart detail</li>
                  <li>Machine wash cold as if it must preserve the garment&apos;s delicate details.</li>
                </ul>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                  See-through delicate embroidered organza blue hem luxury exterior details matt–mix textured detail delight. Leather detail shoulder contrast collar contemporary slim silhouette working sports performance full fit in luxurious soft touch. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design. Effortless comfortable fit in luxurious soft touch. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.
                </p>
              </div>
            </Fade>

            <Fade cascade>
              <div className="mb-8 sm:mb-10">
                <div className="text-xs text-gray-400 mb-2 sm:mb-3">THE LATEST</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 font-['Urbanist']">
                  More Articles You May Like
                </h3>
                <div className="flex flex-col gap-4 sm:gap-6">
                  {moreArticles.map((article, idx) => (
                    <Slide direction="up" key={idx}>
                      <div className="flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 sm:h-56 md:h-64 lg:h-48 relative">
                          <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        </div>
                        <div className="p-4 sm:p-6 flex flex-col justify-center">
                          <div className="text-xs text-gray-400 mb-1 sm:mb-2">PRODUCTIVITY</div>
                          <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-black font-['Urbanist'] leading-tight">
                            {article.title}
                          </div>
                          <div className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                            {article.description}
                          </div>
                          <Button className="self-start w-fit border-0 shadow-none bg-transparent flex items-center gap-2 sm:gap-4 p-2 sm:p-4 text-sm font-medium text-black font-['Urbanist'] hover:bg-gray-50 rounded-lg">
                            Read more
                            <Image src="/Images/arrow-right 3.png" alt="arrow" width={16} height={16} className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
} 