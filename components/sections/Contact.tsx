"use client";

import { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ধন্যবাদ! আপনার মেসেজ পাঠানো হয়েছে।");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t("contactTitle")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                {t("contactInfo")}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{t("address")}</p>
                    <p className="text-text-secondary">
                      {language === "bn" 
                        ? "দশমিনা, পটুয়াখালী, বরিশাল, বাংলাদেশ"
                        : "Dashmina, Patuakhali, Barishal, Bangladesh"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{t("phone")}</p>
                    <p className="text-text-secondary">01716452799</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{t("principal")}</p>
                    <p className="text-text-secondary">
                      {language === "bn" ? "মুহা. নেসার উদ্দিন" : "Moha. Nesar Uddin"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {language === "bn" ? "মানচিত্র" : "Map"}
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.688256242963!2d90.39249931537158!3d22.75643153179865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754e4a13a6a4b7b%3A0x1c4e8d7f8f7f8f7f!2sDashmina%2C%20Patuakhali!5e0!3m2!1sen!2sbd!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              {t("sendMessage")}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t("yourName")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder={language === "bn" ? "আপনার নাম লিখুন" : "Enter your name"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t("yourEmail")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder={language === "bn" ? "আপনার ইমেইল লিখুন" : "Enter your email"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t("message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder={language === "bn" ? "আপনার মেসেজ লিখুন" : "Enter your message"}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
              >
                {t("submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
