"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "bn" | "en";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "bn";
  const saved = localStorage.getItem("language") as Language;
  return (saved === "bn" || saved === "en") ? saved : "bn";
}

interface Translations {
  [key: string]: {
    bn: string;
    en: string;
  };
}

const translations: Translations = {
  // Navbar
  home: { bn: "হোম", en: "Home" },
  about: { bn: "আমাদের সম্পর্কে", en: "About Us" },
  teachers: { bn: "শিক্ষকবৃন্দ", en: "Teachers" },
  academic: { bn: "একাডেমিক", en: "Academic" },
  notice: { bn: "নোটিশ", en: "Notice" },
  result: { bn: "রেজাল্ট", en: "Result" },
  gallery: { bn: "গ্যালারি", en: "Gallery" },
  contact: { bn: "যোগাযোগ", en: "Contact" },
  admission: { bn: "ভর্তি", en: "Admission" },
  
  // Hero Section
  heroTitle: { bn: "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা", en: "Adam Pura Islamia Kamil Madrasa" },
  heroSubtitle: { bn: "মানসম্মত ইসলামিক শিক্ষা ও আধুনিক জ্ঞানের সমন্বয়", en: "Quality Islamic Education with Modern Knowledge" },
  heroDescription: { bn: "আমরা প্রজন্মের জন্য মানসম্মত শিক্ষা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। আমাদের মাদ্রাসায় আপনার সন্তান পাবে ইসলামিক শিক্ষা ও আধুনিক শিক্ষার সমন্বয়।", en: "We are committed to ensuring quality education for generations. In our madrasa, your child will receive Islamic education combined with modern knowledge." },
  applyNow: { bn: "এখনই ভর্তি হোন", en: "Apply Now" },
  
  // About Section
  aboutTitle: { bn: "আমাদের সম্পর্কে", en: "About Us" },
  aboutDescription1: { bn: "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা বাংলাদেশের একটি প্রতিষ্ঠিত শিক্ষা প্রতিষ্ঠান। আমরা দশমিনা, পটুয়াখালীতে অবস্থিত এবং বিগত বছরগুলোতে আমরা হাজার হাজার ছাত্র-ছাত্রীকে মানসম্মত শিক্ষা প্রদান করেছি।", en: "Adam Pura Islamia Kamil Madrasa is an established educational institution in Bangladesh. We are located in Dashmina, Patuakhali and have provided quality education to thousands of students over the years." },
  aboutDescription2: { bn: "আমাদের লক্ষ্য হলো এমন একটি শিক্ষার পরিবেশ তৈরি করা যেখানে ছাত্ররা শুধুমাত্র academic জ্ঞান অর্জন করবে না, বরং নৈতিক মূল্যবোধ, ইসলামিক জ্ঞান এবং আধুনিক দক্ষতাও অর্জন করবে।", en: "Our goal is to create an educational environment where students will not only acquire academic knowledge but also develop moral values, Islamic knowledge, and modern skills." },
  aboutDescription3: { bn: "আমরা বিশ্বাস করি যে একজন সম্পূর্ণ মানুষ তৈরি করতে হলে শারীরিক, মানসিক এবং আধ্যাত্মিক সব দিকের উন্নতি প্রয়োজন। তাই আমাদের পাঠ্যক্রমে ইসলামিক শিক্ষা ও সাধারণ শিক্ষার সমন্বয় করা হয়েছে।", en: "We believe that to develop a complete human being, physical, mental, and spiritual growth are all essential. That's why our curriculum combines Islamic education with general education." },
  
  // Features Section
  featuresTitle: { bn: "আমাদের বৈশিষ্ট্য", en: "Our Features" },
  feature1Title: { bn: "মানসম্মত ইসলামিক শিক্ষা", en: "Quality Islamic Education" },
  feature1Desc: { bn: "আমরা কুরআন হাদীস এবং ইসলামিক জ্ঞানের গভীর শিক্ষা প্রদান করি যা আপনার সন্তানের আধ্যাত্মিক বিকাশে সহায়তা করে।", en: "We provide deep education in Quran, Hadith and Islamic knowledge that helps in your child's spiritual development." },
  feature2Title: { bn: "অভিজ্ঞ শিক্ষকবৃন্দ", en: "Experienced Teachers" },
  feature2Desc: { bn: "আমাদের শিক্ষকরা অত্যন্ত যোগ্য এবং অভিজ্ঞ। তারা প্রতিটি ছাত্রের ব্যক্তিগত বিকাশে মনোযোগ দেন।", en: "Our teachers are highly qualified and experienced. They focus on individual development of each student." },
  feature3Title: { bn: "আধুনিক শিক্ষার পরিবেশ", en: "Modern Learning Environment" },
  feature3Desc: { bn: "আমরা আধুনিক শিক্ষা পদ্ধতি এবং প্রযুক্তি ব্যবহার করি যা শিক্ষার্থীদের জন্য একটি উন্নত শিক্ষার পরিবেশ নিশ্চিত করে।", en: "We use modern teaching methods and technology ensuring an advanced learning environment for students." },
  feature4Title: { bn: "নৈতিক শিক্ষা", en: "Moral Education" },
  feature4Desc: { bn: "ছাত্রদের মধ্যে সততা, দয়া এবং সহানুভূতির মতো মূল্যবোধ বিকাশে আমরা মনোযোগ দিই।", en: "We focus on developing values like honesty, compassion, and empathy among students." },
  
  // Teachers Section
  teachersTitle: { bn: "আমাদের শিক্ষকবৃন্দ", en: "Our Teachers" },
  principal: { bn: "প্রিন্সিপাল", en: "Principal" },
  teacher: { bn: "শিক্ষক", en: "Teacher" },
  
  // Academic Section
  academicTitle: { bn: "একাডেমিক প্রোগ্রাম", en: "Academic Programs" },
  psc: { bn: "প্রাথমিক স্তর (PSC)", en: "Primary Level (PSC)" },
  dakhil: { bn: "দাখিল", en: "Dakhil" },
  alim: { bn: "আলিম", en: "Alim" },
  fazil: { bn: "ফাজিল", en: "Fazil" },
  Kamil: { bn: "কামিল", en: "Kamil" },
  pscDesc: { bn: "প্রাথমিক শিক্ষা সমাপনী পরীক্ষার জন্য প্রস্তুতি", en: "Preparation for Primary Education Completion Examination" },
  dakhilDesc: { bn: "মাধ্যমিক স্তরে দাখিল পরীক্ষার জন্য প্রস্তুতি", en: "Preparation for Dakhil Examination at Secondary Level" },
  alimDesc: { bn: "উচ্চ মাধ্যমিক স্তরে আলিম পরীক্ষার জন্য প্রস্তুতি", en: "Preparation for Alim Examination at Higher Secondary Level" },
  fazilDesc: { bn: "স্নাতক স্তরে ফাজিল পরীক্ষার জন্য প্রস্তুতি", en: "Preparation for Fazil Examination at Undergraduate Level" },
  KamilDesc: { bn: "স্নাতকোত্তর স্তরে কামিল পরীক্ষার জন্য প্রস্তুতি", en: "Preparation for Kamil Examination at Postgraduate Level" },
  
  // Results Section
  resultsTitle: { bn: "সর্বশেষ বোর্ড পরীক্ষার সেরা ফলাফল", en: "Latest Board Exam Top Results" },
  resultsSubtitle: { bn: "আপনার সন্তানের সাফল্য আমাদের গর্ব", en: "Your child's success is our pride" },
  roll: { bn: "রোল", en: "Roll" },
  grade: { bn: "গ্রেড", en: "Grade" },
  marks: { bn: "মার্কস", en: "Marks" },
  year: { bn: "বছর", en: "Year" },
  
  // Notice Section
  noticeTitle: { bn: "নোটিশ বোর্ড", en: "Notice Board" },
  viewDetails: { bn: "বিস্তারিত", en: "Details" },
  latestNotice: { bn: "সর্বশেষ নোটিশ", en: "Latest Notices" },
  
  // Statistics Section
  statsTitle: { bn: "আমাদের পরিসংখ্যান", en: "Our Statistics" },
  totalStudents: { bn: "মোট শিক্ষার্থী", en: "Total Students" },
  totalTeachers: { bn: "মোট শিক্ষক", en: "Total Teachers" },
  established: { bn: "প্রতিষ্ঠাকাল", en: "Established" },
  departments: { bn: "বিভাগ সংখ্যা", en: "Departments" },
  
  // Gallery Section
  galleryTitle: { bn: "আমাদের গ্যালারি", en: "Our Gallery" },
  campus: { bn: "ক্যাম্পাস", en: "Campus" },
  classroom: { bn: "ক্লাসরুম", en: "Classroom" },
  events: { bn: "অনুষ্ঠান", en: "Events" },
  programs: { bn: "প্রোগ্রাম", en: "Programs" },
  
  // Contact Section
  contactTitle: { bn: "যোগাযোগ করুন", en: "Contact Us" },
  address: { bn: "ঠিকানা", en: "Address" },
  phone: { bn: "ফোন", en: "Phone" },
  email: { bn: "ইমেইল", en: "Email" },
  sendMessage: { bn: "মেসেজ পাঠান", en: "Send Message" },
  yourName: { bn: "আপনার নাম", en: "Your Name" },
  yourEmail: { bn: "আপনার ইমেইল", en: "Your Email" },
  message: { bn: "মেসেজ", en: "Message" },
  submit: { bn: "জমা দিন", en: "Submit" },
  
  // Footer
  footerAbout: { bn: "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা একটি প্রতিষ্ঠিত শিক্ষা প্রতিষ্ঠান যেখানে মানসম্মত ইসলামিক শিক্ষা প্রদান করা হয়।", en: "Adam Pura Islamia Kamil Madrasa is an established educational institution providing quality Islamic education." },
  quickLinks: { bn: "দ্রুত লিংক", en: "Quick Links" },
  importantLinks: { bn: "গুরুত্বপূর্ণ লিংক", en: "Important Links" },
  contactInfo: { bn: "যোগাযোগ তথ্য", en: "Contact Information" },
  allRights: { bn: "সর্বস্বত্ব সংরক্ষিত", en: "All Rights Reserved" },
  developedBy: { bn: "কর্তৃপক্ষ কর্তৃক পরিচালিত", en: "Managed by Authority" },
  
  // Misc
  learnMore: { bn: "আরও জানুন", en: "Learn More" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const handleStorage = () => {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "bn" || savedLang === "en")) {
        setLanguage(savedLang);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
