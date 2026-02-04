import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import VideoDemo from "@/components/VideoDemo";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
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
      <FAQ />
      <Benefits />
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
