import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import VideoDemo from "@/components/VideoDemo";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Developers from "@/components/Developers";
import Supporters from "@/components/Supporters";
import Footer from "@/components/Footer";
import SupportSection from "@/components/SupportSection";
// import SupportFab from "@/components/SupportFab";

const Index = () => {
  // Numa SPA o navegador processa o #hash ANTES de o React montar, então o alvo
  // ainda não existe e o link direto (papuguinho.com/#cta) não rola. Depois de
  // montar, refazemos o pulo uma vez.
  useEffect(() => {
    const alvo = window.location.hash?.slice(1);
    if (!alvo) return;
    const t = setTimeout(
      () => document.getElementById(alvo)?.scrollIntoView(),
      100,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <Gallery />
      <VideoDemo />
      <SupportSection />
      <FAQ />
      <Benefits />
      <Partners />
      <Developers />
      <Supporters />
      <div id="cta">
        <CTA />
      </div>
      <Footer />
      {/* <SupportFab /> */}
    </main>
  );
};

export default Index;
