import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersMarquee from "@/components/PartnersMarquee";
import StatsSection from "@/components/StatsSection";
import BentoGrid from "@/components/BentoGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gaming-black text-gaming-white selection:bg-gaming-brown selection:text-gaming-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PartnersMarquee />
      <StatsSection />
      <BentoGrid />
      <CTA />
      <Footer />
      
      {/* Global Grid Lines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5 flex justify-between max-w-7xl mx-auto w-full px-4">
        <div className="w-px h-full bg-gaming-white" />
        <div className="w-px h-full bg-gaming-white" />
        <div className="w-px h-full bg-gaming-white" />
        <div className="w-px h-full bg-gaming-white" />
        <div className="w-px h-full bg-gaming-white" />
      </div>
    </main>
  );
}
