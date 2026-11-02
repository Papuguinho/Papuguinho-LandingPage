import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import boasPraticasImage from "@/assets/gallery/awards/boaspraticasImage.jpg";
import incentivoRhImage from "@/assets/gallery/awards/icentivoRhImage.png";
import reditecImage from "@/assets/gallery/awards/reditecImage.jpg";
// import SupportFab from "@/components/SupportFab";

const awardImages = [
  { title: "Prêmio Boas Práticas na Escola", image: boasPraticasImage },
  { title: "Prêmio de Incentivo à Pesquisa em Direitos Humanos", image: incentivoRhImage },
  { title: "REDITEC", image: reditecImage },
];

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
      <section id="awards" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary break-words leading-tight px-2">
            Premiações
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-3 justify-items-center">
            {awardImages.map((award) => (
              <Link
                key={award.title}
                to="/premios"
                className="group flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1"
                aria-label={award.title}
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-44 w-44 rounded-full border-4 border-primary object-cover shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-[1.03] sm:h-52 sm:w-52"
                />
                <span className="mt-4 text-sm font-semibold text-foreground sm:text-base">
                  {award.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
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
