"use client";

import { useLanguage } from "@/components/context/LanguageContext";

const notices = [
  {
    title: "২০২৬ সালের ভর্তি নোটিশ",
    titleEn: "Admission Notice 2026",
    date: "০১ মার্চ ২০২৬",
    dateEn: "01 March 2026",
    description: "২০২৬ শিক্ষাবর্ষে সকল ক্লাসে ভর্তি চলছে। আগ্রহী শিক্ষার্থীদের নির্ধারিত তারিখের মধ্যে আবেদন করতে হবে।",
    descriptionEn: "Admission is open for all classes for 2026 academic year. Interested students must apply within the specified date.",
  },
  {
    title: "বোর্ড পরীক্ষার রুটিন প্রকাশ",
    titleEn: "Board Exam Routine Published",
    date: "২৫ ফেব্রুয়ারি ২০২৬",
    dateEn: "25 February 2026",
    description: "আসন্ন বোর্ড পরীক্ষার সময়সূচি প্রকাশিত হয়েছে। শিক্ষার্থীরা অফিসিয়াল ওয়েবস থেকোইট রুটিন দেখতে পারবে।",
    descriptionEn: "The schedule for upcoming board exams has been published. Students can view the routine from the official website.",
  },
  {
    title: "ঈদ-উল-ফিতরের ছুটি",
    titleEn: "Eid-ul-Fitr Holiday",
    date: "১৮ ফেব্রুয়ারি ২০২৬ থেকে ২৫ মার্চ ২০২৬",
    dateEn: "18 February 2026 to 25 March 2026",
    description: "পবিত্র রমজান মাস ও ঈদ-উল-ফিতর উপলক্ষে মাদ্রাসা ১৮ ফেব্রুয়ারি থেকে ২৫ মার্চ ২০২৬ পর্যন্ত বন্ধ থাকবে।",
    descriptionEn: "On the occasion of the holy month of Ramadan and Eid-ul-Fitr, the madrasa will remain closed from 18 February to 25 March 2026.",
  },
  {
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    titleEn: "Annual Sports Competition",
    date: "১৫ ফেব্রুয়ারি ২০২৬",
    dateEn: "15 February 2026",
    description: "বার্ষিক ক্রীড়া প্রতিযোগিতা আগামী ১৫ ফেব্রুয়ারি অনুষ্ঠিত হবে। সকল শিক্ষার্থীদের অংশগ্রহণ করতে হবে।",
    descriptionEn: "Annual sports competition will be held on 15 February. All students must participate.",
  },
  {
    title: "শিক্ষক প্রশিক্ষণ কর্মশালা",
    titleEn: "Teacher Training Workshop",
    date: "১০ মে ২০২৬",
    dateEn: "10 May 2026",
    description: "সকল শিক্ষকদের জন্য একটি প্রশিক্ষণ কর্মশালার আয়োজন করা হবে। উপস্থিতি বাধ্যতামূলক।",
    descriptionEn: "A training workshop will be organized for all teachers. Attendance is mandatory.",
  },
];

export default function NoticeBoard() {
  const { language, t } = useLanguage();

  return (
    <section id="notice" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t("noticeTitle")}
          </h2>
          <p className="text-text-secondary text-lg">
            {t("latestNotice")}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-md hover:shadow-xl active:shadow-xl transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {language === "bn" ? notice.date : notice.dateEn}
                </div>
                <span className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {language === "bn" ? notice.title : notice.titleEn}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {language === "bn" ? notice.description : notice.descriptionEn}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t("viewDetails")}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
