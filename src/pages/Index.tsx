import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
