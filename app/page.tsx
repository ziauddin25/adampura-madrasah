import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Teachers from "@/components/sections/Teachers";
import Academic from "@/components/sections/Academic";
import Results from "@/components/sections/Results";
import NoticeBoard from "@/components/sections/NoticeBoard";
import Statistics from "@/components/sections/Statistics";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import NoticeTicker from "@/components/sections/NoticeTicker";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <NoticeTicker />
      <Hero />
      <About />
      <Features />
      <Teachers />
      <Academic />
      <Results />
      <NoticeBoard />
      <Statistics />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
