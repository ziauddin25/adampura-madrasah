"use client";

import { useLanguage } from "@/components/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative py-20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#041A23] animate-gradient" />
        
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="25" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="15" fill="none" stroke="white" strokeWidth="0.5"/>
                <path d="M40 5 L40 15 M40 65 L40 75 M5 40 L15 40 M65 40 L75 40" stroke="white" strokeWidth="0.5"/>
                <path d="M15 15 L22 22 M58 58 L65 65 M15 65 L22 58 M58 22 L65 15" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-balance drop-shadow-lg">
            {t("heroTitle")}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-4 text-white/90">
            {t("heroSubtitle")}
          </p>

          <p className="text-base md:text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 text-base md:text-lg font-semibold text-primary bg-white hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {t("applyNow")}
            </a>
            <a
              href="#about"
              className="px-8 py-4 text-base md:text-lg font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              {t("learnMore")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
