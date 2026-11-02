import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners } from "@/data/partnersData";

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <section id="partners" className="pt-28 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">Parcerias</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as instituições que tornam o Papuguinho possível
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) =>
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}>
              
                <div className="h-48 bg-background flex items-center justify-center p-6">
                  <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain" />
                
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2 text-foreground text-center">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                  {partner.link && (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                    >
                      Visitar site
                    </a>
                  )}
                </div>
            </Card>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>);
};

export default Partners;