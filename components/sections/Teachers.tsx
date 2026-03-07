"use client";

import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";

const principal = {
  name: "মুহা. নেসার উদ্দিন",
  nameEn: "Moha. Nesar Uddin",
  subject: "প্রিন্সিপাল",
  subjectEn: "Principal",
  qualification: "কামিল, এম.এ",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  message: {
    bn: "আমাদের মাদ্রাসার প্রতিটি শিক্ষার্থীকে একজন আদর্শ মানুষ হিসেবে গড়ে তোলা আমাদের লক্ষ্য। আমরা শুধুমাত্র জ্ঞানের পাশাপাশি নৈতিক মূল্যবোধ শিক্ষা দিয়ে থাকি। প্রতিটি ছাত্রকে সুন্দর মানুষ এবং দক্ষ মানুষ হিসেবে গড়ে তোলাই আমাদের একমাত্র উদ্দেশ্য।",
    en: "Our goal is to shape every student of our madrasa into an ideal human being. We provide not only knowledge but also moral values. Our sole purpose is to develop every student as a good human being and skilled person.",
  },
  quote: {
    bn: "\"শিক্ষা না থাকলে মানুষ অন্ধ, শিক্ষা থাকলে মানুষ দিশারী।\"",
    en: "\"Without education, man is blind; with education, man is a guide.\"",
  },
};

export default function Teachers() {
  const { language } = useLanguage();

  return (
    <section id="teachers" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {language === "bn" ? "প্রিন্সিপাল বলেছেন" : "Principal Says"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={principal.image}
                    alt={language === "bn" ? principal.name : principal.nameEn}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold">
                  {language === "bn" ? principal.subject : principal.subjectEn}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-1">
                  {language === "bn" ? principal.name : principal.nameEn}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {principal.qualification}
                </p>
                <div className="flex items-center space-x-2 text-text-secondary text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>01716452799</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-xl">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                {language === "bn" ? principal.message.bn : principal.message.en}
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-lg font-semibold text-accent">
                  {language === "bn" ? principal.quote.bn : principal.quote.en}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-text-primary mb-4">
                {language === "bn" ? "মাদ্রাসার বার্তা" : "Madrasa Message"}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {language === "bn" 
                  ? "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা বাংলাদেশের অন্যতম শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠান। আমরা আমাদের ছাত্রদের শুধুমাত্র একাডেমিক জ্ঞানই নয়, বরং ইসলামিক শিক্ষা এবং নৈতিক মূল্যবোধ শেখাতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হলো এমন প্রজন্ম তৈরি করা যারা দেশ ও জাতির কল্যাণে অবদান রাখতে পারবে।"
                  : "Adam Pura Islamia Kamil Madrasa is one of the best educational institutions in Bangladesh. We are committed to teaching our students not only academic knowledge but also Islamic education and moral values. Our goal is to create a generation that can contribute to the welfare of the country and nation."}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">৩০+</p>
                <p className="text-xs text-text-secondary">
                  {language === "bn" ? "বছরের অভিজ্ঞতা" : "Years Experience"}
                </p>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">১৫০০+</p>
                <p className="text-xs text-text-secondary">
                  {language === "bn" ? "শিক্ষার্থী" : "Students"}
                </p>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">১০০%</p>
                <p className="text-xs text-text-secondary">
                  {language === "bn" ? "সাফল্য" : "Success"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
