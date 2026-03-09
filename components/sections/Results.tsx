"use client";

import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";

const results = [
  {
    name: "আব্দুর রহমান",
    nameEn: "Abdul Rahman",
    roll: "৮৯",
    grade: "A+",
    marks: "৯৮০",
    year: "২০২৫",
    exam: "PSC",
    image: "/img/psc.png",
  },
  {
    name: "মোহাম্মদ রাহিম",
    nameEn: "Mohammad Rahim",
    roll: "৫৬৭",
    grade: "A+",
    marks: "৯৭৫",
    year: "২০২৫",
    exam: "আলিম",
    image: "/img/alim.png",
  },
  {
    name: "ফাতেমা খানম",
    nameEn: "Fatema Khanam",
    roll: "১২৩৫",
    grade: "A+",
    marks: "৯৬৫",
    year: "২০২৫",
    exam: "ফাজিল",
    image: "/img/fazil.png",
  },
  {
    name: "আব্দুল্লাহ আল মাহমুদ",
    nameEn: "Abdullah Al Mahmud",
    roll: "১২৩৪",
    grade: "A+",
    marks: "৯৫০",
    year: "২০২৫",
    exam: "কামিল",
    image: "/img/kamil.png",
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
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl active:shadow-xl transition-all duration-300 flex items-center space-x-4"
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
