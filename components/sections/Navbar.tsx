"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/context/LanguageContext";
import { Menu, X } from "lucide-react";

const IslamicLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="50" r="8" fill="currentColor"/>
    <path d="M50 10 L50 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 78 L50 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 50 L22 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M78 50 L90 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 20 L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M72 72 L80 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 80 L28 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M72 28 L80 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M50 2 L52 10 L48 10 Z" fill="currentColor"/>
    <path d="M50 90 L52 98 L48 98 Z" fill="currentColor"/>
    <path d="M2 50 L10 48 L10 52 Z" fill="currentColor"/>
    <path d="M90 50 L98 48 L98 52 Z" fill="currentColor"/>
  </svg>
);

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hour12 = hours % 12 || 12;
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      
      if (language === "bn") {
        const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        const toBn = (num: number) => num.toString().split('').map(d => bnDigits[parseInt(d)]).join('');
        setCurrentTime(`${toBn(hour12)}:${toBn(minutes).padStart(2, '0')}:${toBn(seconds).padStart(2, '0')} ${ampm} | ${toBn(day)}/${toBn(month)}/${toBn(year)}`);
      } else {
        setCurrentTime(`${hour12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm} | ${day}/${month}/${year}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "teachers", href: "#teachers" },
    { key: "academic", href: "#academic" },
    { key: "notice", href: "#notice" },
    { key: "result", href: "#result" },
    { key: "gallery", href: "#gallery" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#041A23] backdrop-blur-md shadow-lg"
          : "bg-[#041A23]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <div className="text-white w-10 h-10">
                <IslamicLogo className="w-full h-full" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-text-secondary bg-gray-100 px-3 py-1.5 rounded-lg">
              {currentTime}
            </span>
            <button
              onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-text-primary bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{language === "bn" ? "EN" : "বাং"}</span>
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              {t("admission")}
            </a>
          </div>

          <button
            className={`md:hidden  transition-all duration-200 ${
              isMobileMenuOpen 
                ? "text-white" 
                : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg relative z-50">
            <div className="flex flex-col space-y-2 pt-6">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-4 py-2 text-base font-medium text-text-primary hover:text-primary hover:bg-primary/5 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex items-center space-x-3 pt-2 px-4">
                <button
                  onClick={() =>
                    setLanguage(language === "bn" ? "en" : "bn")
                  }
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{language === "bn" ? "English" : "বাংলা"}</span>
                </button>
                <a
                  href="#contact"
                  className="flex-1 px-4 py-2 text-center text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("admission")}
                </a>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
