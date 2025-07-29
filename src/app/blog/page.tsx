"use client";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import React from "react";
import "../globals.css";
import Link from "next/link";

const topReadStories = [
  {
    title: "The real reasons you procrastinate at work",
    image: "/Images/Rectangle 452.png",
    views: 219,
    time: "2 min",
  },
  {
    title: "How to advocate for yourself at work",
    image: "/Images/Rectangle 585.png",
    views: 142,
    time: "3 min",
  },
  {
    title: "It's time to make peace with the bots",
    image: "/Images/Rectangle 587.png",
    views: 363,
    time: "1 min",
  },
];

const recentArticles = [
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
  {
    title:
      "5-minute team building activities for virtual and hybrid squads",
    image: "/Images/Rectangle 598 (2).png",
    description:
      "There's no single source of truth for how you're perceived in the workplace. 360-degree feedback might be the next best thing",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
        <Fade cascade>
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8">
            <div className="w-full lg:w-auto mb-4 lg:mb-0">
              <div className="text-xs sm:text-sm text-gray-400 mb-2">BROWSING CATEGORY</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 font-['Urbanist'] leading-tight sm:leading-normal">Productivity</h1>
            </div>
            <div className="text-gray-500 max-w-xl text-sm sm:text-base lg:text-lg mt-4 lg:mt-0 leading-relaxed">
              Need more hours in a day? Work smarter, not harder with tips to help you check things off your list: handy hacks to prevent procrastination, and brain breaks to bust boredom.
            </div>
          </div>
        </Fade>
        <Slide direction="up" triggerOnce>
          <div className="flex flex-col lg:flex-row bg-[#a895d2] rounded-2xl overflow-hidden mb-8 sm:mb-10 lg:mb-12">
            <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
              <div className="text-xs sm:text-sm mb-3 sm:mb-4 font-semibold">FEATURE</div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-['Urbanist'] leading-tight sm:leading-normal">Don&apos;t underestimate the outsized impact of short-term goals</h2>
              <div className="text-white mb-4 sm:mb-6 text-sm sm:text-base">If long-term goals are the destination, short-term goals are the roadmap.</div>
              <Link href="/blog/details">
                <Button className="bg-[#8a78bd] text-white rounded-l px-6 sm:px-8 py-2 sm:py-3 mt-4 w-fit font-semibold text-sm sm:text-base">
                  Read Now
                </Button>
              </Link>            
            </div>
            <div className="flex-1 min-h-[200px] sm:min-h-[280px] lg:min-h-[320px] relative">
              <Image src="/Images/typing.png" alt="Feature" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw" priority />
            </div>
          </div>
        </Slide>
        <div className="mb-8 sm:mb-10">
          <div className="text-xs sm:text-sm text-gray-400 mb-2">HAND-PICK</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-['Urbanist']">Top-read stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topReadStories.map((story, idx) => (
              <Fade key={idx}>
                <div className="bg-white rounded-2xl flex flex-row shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 items-stretch min-h-[100px] sm:min-h-[120px]">
                  <div className="relative w-20 sm:w-28 h-full min-h-[100px] sm:min-h-[120px] flex-shrink-0">
                    <Image src={story.image} alt={story.title} fill className="object-cover" sizes="(max-width: 640px) 80px, 112px" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0 p-3 sm:p-4">
                    <div className="font-semibold text-sm sm:text-base mb-2 text-black font-['Urbanist'] line-clamp-2 leading-tight">{story.title}</div>
                    <div className="flex items-center text-gray-400 text-xs gap-3 sm:gap-4 mt-auto">
                      <span className="flex items-center gap-1">
                        <Image src="/Images/Vector.png" alt="views" width={14} height={14} className="sm:w-4 sm:h-4" />
                        {story.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Image src="/Images/clock.png" alt="time" width={14} height={14} className="sm:w-4 sm:h-4" />
                        {story.time}
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <div className="mb-8 sm:mb-10">
          <div className="text-xs sm:text-sm text-gray-400 mb-2">THE LATEST</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-['Urbanist']">Recent articles</h3>
          <div className="flex flex-col gap-4 sm:gap-6">
            {recentArticles.map((article, idx) => (
              <Slide direction="up" key={idx}>
                <div className="flex flex-col lg:flex-row bg-white rounded-2xl p-4 sm:p-6 overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="lg:w-1/3 h-48 sm:h-56 lg:h-auto relative rounded-xl overflow-hidden mb-4 lg:mb-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                    <div className="text-xs sm:text-sm text-black font-['Urbanist'] mb-1">PRODUCTIVITY</div>
                    <div className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-black font-['Urbanist'] leading-tight sm:leading-normal">{article.title}</div>
                    <div className="text-gray-500 mb-4 text-sm sm:text-base leading-relaxed">{article.description}</div>
                    <div className="self-start lg:self-end">
                      <Link href="/blog/details">
                        <Button className="w-fit border-0 shadow-none bg-transparent flex items-center gap-4 sm:gap-6 p-2 sm:p-4 text-sm font-medium text-black font-['Urbanist'] hover:bg-gray-50 rounded-lg transition-colors">
                          Read more
                          <Image src="/Images/arrow.png" alt="arrow" width={14} height={14} className="sm:w-4 sm:h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 