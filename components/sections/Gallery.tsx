"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";

const categories = [
  { key: "all", label: "সব", labelEn: "All" },
  { key: "campus", label: "ক্যাম্পাস", labelEn: "Campus" },
  { key: "classroom", label: "ক্লাসরুম", labelEn: "Classroom" },
  { key: "events", label: "অনুষ্ঠান", labelEn: "Events" },
];

const galleryImages = [
  { id: 1, category: "campus", src: "/img/madGate.png", alt: "Madrasa Gate" },
  { id: 2, category: "campus", src: "/img/mad1.png", alt: "Madrasa Building" },
  { id: 3, category: "classroom", src: "/img/classroom.png", alt: "Classroom" },
  { id: 4, category: "classroom", src: "/img/classroom2.png", alt: "Classroom 2" },
  { id: 5, category: "events", src: "/img/event1.png", alt: "Event" },
  { id: 6, category: "events", src: "/img/footballTeam.png", alt: "Football Team" },
  { id: 7, category: "events", src: "/img/scoutTeam.png", alt: "Scout Team" },
  { id: 8, category: "events", src: "/img/scouteteam.png", alt: "Scout Team" },
  { id: 9, category: "events", src: "/img/treePlantion1.png", alt: "Tree Plantation" },
  { id: 10, category: "events", src: "/img/new-book.png", alt: "New Books" },
  { id: 11, category: "events", src: "/img/newbook-1.jpg", alt: "Books" },
  { id: 12, category: "events", src: "/img/newbook-2.png", alt: "Study" },
  { id: 13, category: "events", src: "/img/peti.png", alt: "Peti" },
  { id: 14, category: "events", src: "/img/peti1.png", alt: "Peti 1" },
  { id: 15, category: "events", src: "/img/student.png", alt: "Student" },
  { id: 16, category: "campus", src: "/img/hero.png", alt: "Hero" },
];

export default function Gallery() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t("galleryTitle")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-text-secondary hover:bg-primary/10 hover:text-primary active:bg-primary/10 active:text-primary"
              }`}
            >
              {language === "bn" ? category.label : category.labelEn}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setLightboxImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent p-2"
            onClick={() => setLightboxImage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Image
            src={lightboxImage}
            alt="Gallery Image"
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
