import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { awards } from "@/data/awardsData";

const Premios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <section id="awards" className="bg-muted/30 pb-20 pt-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-fade-in-up text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary">Premiações</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Conheça os reconhecimentos recebidos pelo Papuguinho e o impacto
              do projeto na educação inclusiva.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <Card
                key={award.title}
                className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-48 items-center justify-center bg-background p-6">
                  <img
                    src={award.image}
                    alt={award.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-center text-lg font-semibold text-foreground">
                    {award.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {award.description}
                  </p>
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

export default Premios;