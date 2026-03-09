"use client";

import { useLanguage } from "@/components/context/LanguageContext";

const principal = {
  name: "মুহা. নেছার উদ্দিন",
  nameEn: "Moha. Nesar Uddin",
  subject: "অধ্যক্ষ",
  subjectEn: "Principal",
  qualification: "কামিল, এম.এ",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  message: {
    bn: "আলহামদুলিল্লাহ। সর্বপ্রথম মহান আল্লাহ তাআলার অশেষ শোকর আদায় করছি, যিনি আমাদেরকে দ্বীনি ইলম অর্জন ও প্রচারের মহান দায়িত্বে নিয়োজিত হওয়ার তাওফিক দান করেছেন। ইসলামপুর কামিল মাদ্রাসা প্রতিষ্ঠার পর থেকে আজ অবধি বিশুদ্ধ আকীদা, সহীহ কুরআন ও সুন্নাহভিত্তিক ইসলামী জ্ঞান চর্চায় এক গুরুত্বপূর্ণ ভূমিকা পালন করে যাচ্ছে। এই প্রতিষ্ঠান শুধু একটি শিক্ষাকেন্দ্রই নয়, বরং এটি একটি আদর্শ মানুষ গড়ার কারখানা, যেখানে জ্ঞানার্জনের পাশাপাশি চরিত্র গঠনের উপর বিশেষ গুরুত্ব দেওয়া হয়। আমরা বিশ্বাস করি, শুধুমাত্র পুস্তকগত শিক্ষা একজন মানুষকে পূর্ণতা দিতে পারে না। বরং তাকওয়া, নৈতিকতা, মানবতা, দেশপ্রেম ও সমাজসচেতনতা — এই গুণাবলির সমন্বয়েই গড়ে ওঠে একজন পরিপূর্ণ মানুষ। আমাদের লক্ষ্য হচ্ছে এমন একটি প্রজন্ম তৈরি করা, যারা কুরআন-সুন্নাহর আলোকে নিজেদের জীবন পরিচালনা করবে এবং বিশ্বসভায় ইসলামের সুমহান আদর্শকে তুলে ধরবে। আমাদের মাদ্রাসায় আলিম, ফাজিল ও কামিল পর্যায়ে দ্বীনি ও আধুনিক শিক্ষা একত্রে প্রদান করা হয়। অভিজ্ঞ ও আল্লাহভীরু শিক্ষকগণের মাধ্যমে পাঠদান এবং নৈতিক শিক্ষার উপর গুরুত্ব প্রদান আমাদের একটি বিশেষ বৈশিষ্ট্য। পাশাপাশি যুগোপযোগী পাঠ্যসূচি, প্রযুক্তি সহায়তা, লাইব্রেরি ও সহশিক্ষা কার্যক্রম শিক্ষার্থীদের বহুমুখী বিকাশে সহায়ক ভূমিকা রাখছে। আমি এই প্রতিষ্ঠানের একজন দায়িত্বশীল হিসেবে সকল শিক্ষক, শিক্ষার্থী, অভিভাবক, এলাকাবাসী ও শুভানুধ্যায়ীকে আন্তরিক ধন্যবাদ ও মোবারকবাদ জানাই। আসুন, আমরা সবাই মিলে এই প্রতিষ্ঠানের উন্নয়ন, আদর্শ বাস্তবায়ন এবং দ্বীনের প্রচার ও প্রসারে অবদান রাখি। পরিশেষে, মহান আল্লাহর কাছে দোয়া করি যেন তিনি আমাদের এই ক্ষুদ্র প্রচেষ্টা কবুল করেন এবং এই প্রতিষ্ঠানকে দুনিয়া ও আখিরাতে কল্যাণ ও সাফল্যের উজ্জ্বল দৃষ্টান্তে পরিণত করেন। আমীন।",
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
            {language === "bn" ? "অধ্যক্ষ এর বাণী" : "Principal Says"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="order-1 lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl active:shadow-2xl transition-all duration-300">
                <div className="h-80">
                  <img
                    src='/img/principal-img.png'
                    alt='lll'
                    className="object-cover h-full w-full"
                  />
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
                  <span>01790746520</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:col-span-3 space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-xl">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-base font-medium leading-relaxed italic">
                {language === "bn" ? principal.message.bn : principal.message.en}
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-lg font-semibold text-accent">
                  {language === "bn" ? principal.quote.bn : principal.quote.en}
                </p>
              </div>
            </div>

            {/* <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-text-primary mb-4">
                {language === "bn" ? "মাদ্রাসার বার্তা" : "Madrasa Message"}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {language === "bn" 
                  ? "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা বাংলাদেশের অন্যতম শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠান। আমরা আমাদের ছাত্রদের শুধুমাত্র একাডেমিক জ্ঞানই নয়, বরং ইসলামিক শিক্ষা এবং নৈতিক মূল্যবোধ শেখাতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হলো এমন প্রজন্ম তৈরি করা যারা দেশ ও জাতির কল্যাণে অবদান রাখতে পারবে।"
                  : "Adam Pura Islamia Kamil Madrasa is one of the best educational institutions in Bangladesh. We are committed to teaching our students not only academic knowledge but also Islamic education and moral values. Our goal is to create a generation that can contribute to the welfare of the country and nation."}
              </p>
            </div> */}

            {/* <div className="grid grid-cols-3 gap-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
