"use client";

import { useLanguage } from "@/components/context/LanguageContext";

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

const quickLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "teachers", href: "#teachers" },
  { key: "academic", href: "#academic" },
];

const importantLinks = [
  { key: "notice", href: "#notice" },
  { key: "result", href: "#result" },
  { key: "admission", href: "#contact" },
  { key: "gallery", href: "#gallery" },
];

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#041A23] text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <div className="text-white w-12 h-12">
                  <IslamicLogo className="w-full h-full" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  {language === "bn" ? "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা" : "Adam Pura Islamia Kamil Madrasa"}
                </h3>
                <p className="text-white/60 text-sm">EIIN: 102146</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              {t("footerAbout")}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t("importantLinks")}</h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t("contactInfo")}</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {language === "bn"
                    ? "দশমিনা, পটুয়াখালী, বরিশাল"
                    : "Dashmina, Patuakhali, Barishal"}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>01716452799</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@adampuramadrasha.edu.bd</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-white/60 text-sm">
              © 2026 {language === "bn" ? "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা" : "Adam Pura Islamia Kamil Madrasa"}. {t("allRights")}.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0">
              {t("developedBy")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
