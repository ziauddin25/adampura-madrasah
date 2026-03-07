"use client";

import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t("aboutTitle")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
                alt="Madrasa Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-3xl font-bold">1995</p>
              <p className="text-sm">{t("established")}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-text-secondary leading-relaxed">
                {t("aboutDescription1")}
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-text-secondary leading-relaxed">
                {t("aboutDescription2")}
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-text-secondary leading-relaxed">
                {t("aboutDescription3")}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-primary/5 px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">EIIN:</span>
                <span className="text-text-secondary ml-2">102146</span>
              </div>
              <div className="bg-primary/5 px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">{t("phone")}:</span>
                <span className="text-text-secondary ml-2">01716452799</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
