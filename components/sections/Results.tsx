"use client";

import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";

const results = [
  {
    name: "আব্দুল্লাহ আল মাহমুদ",
    nameEn: "Abdullah Al Mahmud",
    roll: "১২৩৪",
    grade: "A+",
    marks: "৯৮৫",
    year: "২০২৫",
    exam: "কামিল",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "ফাতেমা খানম",
    nameEn: "Fatema Khanam",
    roll: "১২৩৫",
    grade: "A+",
    marks: "৯৮০",
    year: "২০২৫",
    exam: "ফাজিল",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "মোহাম্মদ রাহিম",
    nameEn: "Mohammad Rahim",
    roll: "৫৬৭",
    grade: "A+",
    marks: "৬৫০",
    year: "২০২৫",
    exam: "আলিম",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "আয়েশা সুলতানা",
    nameEn: "Ayesha Sultana",
    roll: "৪৫২",
    grade: "A+",
    marks: "৬৪৫",
    year: "২০২৫",
    exam: "দাখিল",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "আব্দুর রহমান",
    nameEn: "Abdul Rahman",
    roll: "৮৯",
    grade: "A+",
    marks: "৫৯৫",
    year: "২০২৫",
    exam: "PSC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "জাহানারা বেগম",
    nameEn: "Jahanara Begum",
    roll: "১২৩৬",
    grade: "A",
    marks: "৯৭০",
    year: "২০২৫",
    exam: "কামিল",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
];

export default function Results() {
  const { language, t } = useLanguage();

  return (
    <section id="result" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t("resultsTitle")}
          </h2>
          <p className="text-text-secondary text-lg">
            {t("resultsSubtitle")}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src={result.image}
                  alt={language === "bn" ? result.name : result.nameEn}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-text-primary truncate">
                  {language === "bn" ? result.name : result.nameEn}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {result.exam}
                </p>
                <div className="flex items-center space-x-3 mt-1 text-sm">
                  <span className="text-text-secondary">
                    {t("roll")}: {result.roll}
                  </span>
                  <span className="text-accent font-bold">
                    {result.grade}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{result.marks}</p>
                <p className="text-xs text-text-secondary">{result.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
