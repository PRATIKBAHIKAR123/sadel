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
      <div className="max-w-7xl mx-auto px-12 py-10">
        <Fade cascade>
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <div className="text-1xl text-gray-400 mb-2">BROWSING CATEGORY</div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 font-['Urbanist']">Productivity</h1>
            </div>
            <div className="text-gray-500 max-w-xl text-sm md:text-base mt-4 md:mt-0">
              Need more hours in a day? Work smarter, not harder with tips to help you check things off your list: handy hacks to prevent procrastination, and brain breaks to bust boredom.
            </div>
          </div>
        </Fade>
        <Slide direction="up" triggerOnce>
          <div className="flex flex-col md:flex-row bg-[#F9D400] rounded-2xl overflow-hidden mb-12">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="text-xs mb-4 font-semibold">FEATURE</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Urbanist']">Don&apos;t underestimate the outsized impact of short-term goals</h2>
              <div className="text-white mb-6">If long-term goals are the destination, short-term goals are the roadmap.</div>
              <Link href="/blog/details">
                <Button className="bg-white text-black rounded-l px-8 py-2 mt-4 w-fit font-semibold">
                  Read Now
                </Button>
              </Link>            </div>
            <div className="flex-1 min-h-[320px] relative">
              <Image src="/Images/typing.png" alt="Feature" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </Slide>
        <div className="mb-10">
          <div className="text-xs text-gray-400 mb-2">HAND-PICK</div>
          <h3 className="text-2xl font-bold mb-4 font-['Urbanist']">Top-read stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topReadStories.map((story, idx) => (
              <Fade key={idx}>
                <div className="bg-white rounded-2xl flex flex-row shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 items-stretch min-h-[120px]">
                  <div className="relative w-28 h-full min-h-[120px] flex-shrink-0">
                    <Image src={story.image} alt={story.title} fill className="object-cover" sizes="112px" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0 p-4">
                    <div className="font-semibold text-base mb-2 text-black font-['Urbanist'] line-clamp-2">{story.title}</div>
                    <div className="flex items-center text-gray-400 text-xs gap-4 mt-auto">
                      <span className="flex items-center gap-1">
                        <Image src="/Images/Vector.png" alt="views" width={16} height={16} />
                        {story.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Image src="/Images/clock.png" alt="time" width={16} height={16} />
                        {story.time}
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <div className="text-xs text-gray-400 mb-2">THE LATEST</div>
          <h3 className="text-2xl font-bold mb-4 font-['Urbanist']">Recent articles</h3>
          <div className="flex flex-col gap-6">
            {recentArticles.map((article, idx) => (
              <Slide direction="up" key={idx}>
                <div className="flex flex-col md:flex-row bg-white rounded-2xl p-4 overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="md:w-1/3 h-48 md:h-auto relative rounded-xl overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="text-xs text-black font-['Urbanist'] mb-1">PRODUCTIVITY</div>
                    <div className="font-bold text-lg md:text-xl mb-2 text-black font-['Urbanist']">{article.title}</div>
                    <div className="text-gray-500 mb-4 text-sm md:text-base">{article.description}</div>
                    <div className="self-end">
                      <Link href="/blog/details">
                        <Button className="w-fit border-0 shadow-none bg-transparent flex items-center gap-6 p-4 text-sm font-medium text-black font-['Urbanist']">
                          Read more
                          <Image src="/Images/arrow.png" alt="arrow" width={16} height={16} />
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