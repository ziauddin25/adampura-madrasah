import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/context/LanguageContext";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা",
  description: "আদমপুরা ইসলামিয়া কামিল মাদ্রাসা - দশমিনা, পটুয়াখালী, বরিশাল, বাংলাদেশ। বেসরকারি কো-এডুকেশন কামিল মাদ্রাসা। PSC, দাখিল, আলিম, ফাজিল, কামিল।",
  keywords: ["madrasa", "Islamic school", "Bangladesh", "Adampur", "Dakhil", "Alim", "Fazil", "Kamil"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" dir="ltr">
      <body className={`${notoSansBengali.variable} font-bengali antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
