"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/components/context/LanguageContext";

const stats = [
  { key: "totalStudents", value: 1500, suffix: "+" },
  { key: "totalTeachers", value: 35, suffix: "+" },
  { key: "established", value: 1958, suffix: "" },
  { key: "departments", value: 8, suffix: "+" },
];

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return count;
}

function StatItem({ 
  value, 
  suffix, 
  label, 
  shouldStart 
}: { 
  value: number; 
  suffix: string; 
  label: string; 
  shouldStart: boolean 
}) {
  const count = useCountUp(value, 2000, shouldStart);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white/80 text-lg md:text-xl font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Statistics() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-primary"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("statsTitle")}
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.key}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.key)}
              shouldStart={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
