"use client"

import { Button } from "@/components/ui/button";
// import TeachingTechCarousel from "./teachingtech";
// import {
//   ArrowRight,
//   Download,
// } from "lucide-react";
// import FlexibleDeploymentOptions from "./deploymentOptions";
import { Fade, Slide } from "react-awesome-reveal";
import TestimonialSection from "../edtechSolutions/testimonials";
import Link from "next/link";
import { useLanguage } from "@/lib/languageContext";
import { translations } from "@/lib/translations";
// import TeachingTechCarousel from "./teachingtech";

export default function LandingPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const isArabic = language === 'العربية';

  return (
    <div className={isArabic ? 'arabic-font' : ''}>
      <div className="min-h-screen bg-[#FFFCEC]">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto p-4 sm:p-8">
          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <span className="text-[#0e0f10] text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                {t.heroTitle1}{" "}
              </span>
              <span className="text-primary text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                {t.heroTitle2}
              </span>
              <span className="text-[#0e0f10] text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-['Urbanist'] leading-tight sm:leading-normal lg:leading-[72px]">
                {" "}
                {t.heroTitle3}
              </span>
            </div>
            <div className="text-center text-[#5c5f6e] text-base sm:text-lg md:text-xl font-normal font-['Urbanist'] leading-relaxed mt-4 sm:mt-6">
              {t.heroSubtitle}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link href="/portfolio">
                <Button className="w-full sm:w-auto text-white">{t.itSolutionsButton}</Button>
              </Link>
              <Link href="/edtechSolutions">
                <Button className="w-full sm:w-auto text-white">{t.educationalSolutionsButton}</Button>
              </Link>
            </div>
            <div className="relative mt-8 sm:mt-12">
              {/* <Fade direction="left" triggerOnce> */}
              <img
                src="/Images/Screenshot1.png"
                alt="Landing Page Image"
                className="mt-8 w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
              <img
                src="/Images/deupload-feature-mobile 2.png"
                alt="Landing Page Image"
                className="mt-8 w-full max-w-38 h-auto absolute -left-15 -bottom-4 hidden sm:block"
              />
              {/* </Fade> */}
            </div>
          </Fade>
        </div>
      </div>
      <Fade direction="up" triggerOnce>
        <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                <span className="text-primary">AFAQ</span> {t.madeTechEasyTitle.replace('AFAQ Made Tech Easy', '').trim()}
              </h1>
              <p className="text-black text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                {t.madeTechEasySubtitle}
              </p>
            </div>

            {/* Main Content Section */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                    <span className="text-primary">{t.simplifiesTitle1}</span>
                    <br />
                    {t.simplifiesTitle2}
                  </h2>
                  <p className="text-black text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    {t.simplifiesSubtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button className="bg-[#8a78bd] hover:bg-[#6f5ea0] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold w-full sm:w-auto">
                      {t.gettingStartedButton}
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">{t.learnMoreButton}</Button>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                {/* Background Elements */}
                <img src="/Images/workings.png" alt="Background Element" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-primary">AFAQ</span> {t.expertITTitle.replace('AFAQ Expert IT Solutions', '').trim()}
            </h1>
            <p className="text-white text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">
                {t.expertITSubtitle.split('delivers')[0].trim()}
              </span>{" "}
              {t.expertITSubtitle.split('delivers')[1]}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Managed SOC Service */}
            <div className="h-full flex">
              <Slide>
                <div className="bg-[#8a78bd] rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                      <img
                        src="/Images/manage.png"
                        alt="Managed SOC"
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {t.securityTitle}
                    </h3>
                    <p className="text-white mb-6 leading-relaxed text-sm sm:text-base">
                      {t.securityDescription}
                    </p>
                  </div>
                  <Link
                    href="/services/azure-security-service"
                    className="flex items-center text-white font-semibold hover:text-gray-100 transition-colors group mt-auto text-sm sm:text-base"
                  >
                    {t.learnMore}
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Slide>
            </div>

            {/* Cloud Managed Services */}
            <div className="h-full flex">
              <Slide>
                <div className="bg-[#8a78bd] rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <img
                        src="/Images/cloud.png"
                        alt="Cloud Managed Services"
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {t.consultingServicesTitle}
                    </h3>
                    <p className="text-white mb-6 leading-relaxed text-sm sm:text-base">
                      {t.consultingServicesDescription}
                    </p>
                  </div>
                  <Link
                    href="/services/citrix-consulting"
                    className="flex items-center text-white font-semibold hover:text-gray-100 transition-colors group mt-auto text-sm sm:text-base"
                  >
                    {t.learnMore}
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Slide>
            </div>

            {/* Microsoft Cloud Security */}
            <div className="h-full flex">
              <Slide>
                <div className="bg-[#8a78bd] rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <img
                        src="/Images/microsoft.png"
                        alt="Microsoft Cloud Security"
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {t.supportResearchTitle}
                    </h3>
                    <p className="text-white mb-6 leading-relaxed text-sm sm:text-base">
                      {t.supportResearchDescription}
                    </p>
                  </div>
                  <Link
                    href="/services/market-research"
                    className="flex items-center text-white font-semibold hover:text-gray-100 transition-colors group mt-auto text-sm sm:text-base"
                  >
                    {t.learnMore}
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </Slide>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Fade delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="bg-[#fffcec] rounded-3xl p-4 sm:p-6 text-center flex flex-col items-center">
              <div className="text-center text-[#0b0d0e] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[64px]">
                {t.sadelITTitle}
              </div>
              <div className="text-center text-[#838696] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-normal mt-4">
                {t.sadelITDescription}
              </div>
              <div className="w-full sm:w-68 h-auto sm:h-68 item-center justify-center mt-6 sm:mt-8">
                <img
                  src="/Images/deupload-file-sharing 2.png"
                  alt="AFAQ It Solutions"
                  className="w-full h-auto max-w-sm sm:max-w-none"
                />
              </div>
            </div>
            <div className="bg-[#fffcec] rounded-3xl p-4 sm:p-6 text-center flex flex-col items-center">
              <div className="text-center text-[#0b0d0e] text-2xl sm:text-3xl md:text-[40px] font-bold font-['Urbanist'] leading-tight sm:leading-normal md:leading-[64px]">
                {t.sadelProductsTitle}
              </div>
              <div className="text-center text-[#838696] text-sm sm:text-base md:text-lg font-normal font-['Urbanist'] leading-normal mt-4">
                {t.sadelProductsDescription}
              </div>
              <div className="w-full sm:w-68 relative item-center justify-center mt-6 sm:mt-8">
                <img
                  src="/Images/Screenshot-2.png"
                  alt="AFAQ It Solutions"
                />
                <img
                  src="/Images/Untit design 1.png"
                  alt="AFAQ It Solutions"
                  className="absolute right-2 -bottom-10 h-full hidden sm:block"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      {/* Teaching Technology Section (3 Cards) */}
      <div className="w-full bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {t.teachingTechTitle} <span className="text-white">{t.teachingTechSubtitle}</span>
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.teachingTechSubtitle}</span>
              <div className="w-6 sm:w-8 h-1 bg-blue-500 rounded-full ml-2"></div>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-gray-50 rounded-full">
                <img src="/Images/pencil (1).png" alt="Smartphone Icon" className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{t.naturalWritingTitle}</h3>
              <p className="text-black text-sm">{t.naturalWritingDescription}</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-gray-50 rounded-full">
                <img src="/Images/download.png" alt="Download Icon" className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{t.builtForSpeedTitle}</h3>
              <p className="text-black text-sm">{t.builtForSpeedDescription}</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-gray-50 rounded-full">
                <img src="/Images/security.png" alt="Security Icon" className="w-18 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{t.certifiedDustproofTitle}</h3>
              <p className="text-black text-sm">{t.certifiedDustproofDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Fade direction="right" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Digital Kiosks */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">{t.digitalKiosksTitle}</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">{t.digitalKiosksDescription}</p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">{t.checkoutProduct}</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/kiosk.png" alt="Digital Kiosks" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
            {/* Surveillance Cameras */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0 sm:pr-6">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">
                    {t.surveillanceCamerasTitle}
                  </h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">
                    {t.surveillanceCamerasDescription}
                  </p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">
                  {t.checkoutProduct}
                </button>
              </div>

              {/* Right: Camera Images */}
              <div className="flex-1 flex flex-col items-center sm:items-end gap-4">
                <img
                  src="/Images/camera1.png"
                  alt="Surveillance Camera 1"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                />
                <img
                  src="/Images/camera2.png"
                  alt="Surveillance Camera 2"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                />
              </div>
            </div>

            {/* Sound System P.A System */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">{t.soundSystemTitle}</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">{t.soundSystemDescription}</p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">{t.checkoutProduct}</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/speaker.png" alt="Sound System P.A System" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
            {/* LED Display */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
              <div className="flex-1 flex flex-col justify-between h-full mb-6 sm:mb-0">
                <div>
                  <h2 className="text-[#0b0d0e] text-xl sm:text-2xl md:text-3xl font-bold font-['Urbanist'] mb-2 text-center sm:text-left">{t.ledDisplayTitle}</h2>
                  <p className="text-[#838696] text-sm sm:text-base font-normal font-['Urbanist'] mb-4 sm:mb-6 text-center sm:text-left">{t.ledDisplayDescription}</p>
                </div>
                <button className="bg-[#8a78bd] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6f5ea0] transition-colors w-full sm:w-fit text-center sm:text-left mt-2">{t.checkoutProduct}</button>
              </div>
              <div className="flex-1 flex justify-center sm:justify-end items-center">
                <img src="/Images/tv.png" alt="LED Display" className="h-32 sm:h-40 md:h-50 w-auto object-contain" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            {t.ourClientsTitle}
          </h2>
        </div>
        <img
          src="/Images/clients.jpg"
          alt="Our Clients"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            {t.ourBlogsTitle}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 - Elevated Meeting Experiences */}
          <div
            className="relative h-48 sm:h-56 md:h-64 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-4 sm:mx-6 absolute bottom-3 sm:bottom-5 left-0 right-0 bg-white p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-1 h-6 sm:h-8 bg-[#8a78bd] rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-sm sm:text-base md:text-xl font-semibold font-['Figtree'] leading-tight sm:leading-7">
                  {t.elevatedMeetingTitle}
                </h3>
              </div>
            </div>
          </div>

          <div
            className="h-48 sm:h-56 md:h-64 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image-1.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-4 sm:mx-6 absolute bottom-3 sm:bottom-5 left-0 right-0 bg-white p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-1 h-6 sm:h-8 bg-[#8a78bd] rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-sm sm:text-base md:text-xl font-semibold font-['Figtree'] leading-tight sm:leading-7">
                  {t.learnImmersiveTitle}
                </h3>
              </div>
            </div>
          </div>
          <div
            className="h-48 sm:h-56 md:h-64 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
            style={{
              backgroundImage: "url(Images/div.post-image-2.png)",
              backgroundClip: "content-box",
              backgroundSize: "cover",
            }}
          >
            {/* Content Overlay */}
            <div className="mx-4 sm:mx-6 absolute bottom-3 sm:bottom-5 left-0 right-0 bg-white p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-1 h-6 sm:h-8 bg-[#8a78bd] rounded-full"></div>
                <h3 className="text-[#1e1e1e] text-sm sm:text-base md:text-xl font-semibold font-['Figtree'] leading-tight sm:leading-7">
                  {t.interactiveScreensTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            {t.ourSuccessPartnerTitle}
          </h2>
        </div>
        <img
          src="/Images/success.png"
          alt="Success Partner"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
      <div className="text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          {t.testimonialTitle}
        </h2>
      </div>
      <TestimonialSection />
    </div>
  );
}
