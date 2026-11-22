import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryScreens } from "@/data/galleryData";

const Galeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <section id="gallery-details" className="bg-muted/30 pb-20 pt-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-fade-in-up text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary">Telas do Aplicativo</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Conheça em detalhes cada tela do Papuguinho e como suas funções auxiliam
              no dia a dia da comunicação alternativa e aumentativa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryScreens.map((screen, index) => (
              <Card
                key={screen.title}
                className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex aspect-video items-center justify-center bg-background p-4 overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-center text-lg font-semibold text-foreground">
                    {screen.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {screen.description}
                  </p>

                  {screen.features && screen.features.length > 0 && (
                    <div className="mt-4 border-t pt-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        Principais funções:
                      </h3>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {screen.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-primary font-bold">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Galeria;
