"use client";

import { useLanguage } from "@/components/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const notices = [
  { bn: "২০২৬ সালের ভর্তি চলছে - আগ্রহী শিক্ষার্থীরা দ্রুত ভর্তি হোন", en: "Admission Open for 2026 - Enroll Now" },
  { bn: "বোর্ড পরীক্ষার রুটিন প্রকাশিত - পরীক্ষা শুরু আগামী মাসে", en: "Board Exam Routine Published - Exams Start Next Month" },
  { bn: "ঈদ-উল-ফিতরের ছুটি ২০-২৫ ফেব্রুয়ারি", en: "Eid-ul-Fitr Holiday 20-25 February" },
  { bn: "বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে ১৫ ফেব্রুয়ারি", en: "Annual Sports Competition on 15 February" },
  { bn: "নতুন শিক্ষাবর্ষে ক্লাস শুরু ১ জানুয়ারি", en: "New Academic Year Classes Start 1 January" },
];

export default function NoticeTicker() {
  const { language } = useLanguage();

  return (
    <div className="bg-white text-[#041A23] overflow-hidden mt-[80px] shadow-sm">
      <div className="flex items-center max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="bg-accent text-white px-4 py-3 flex-shrink-0 z-10 font-semibold text-sm flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {language === "bn" ? "নোটিশ" : "Notice"}
        </div>
        <div className="overflow-hidden flex-1">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            }}
            speed={4000}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            allowTouchMove={false}
            className="swiper-notice"
          >
            {notices.map((notice, index) => (
              <SwiperSlide key={index}>
                <div className="whitespace-nowrap text-sm px-4">
                  <span>{language === "bn" ? notice.bn : notice.en}</span>
                  <span className="mx-4 text-[#041A23]">✦</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
