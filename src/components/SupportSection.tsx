import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const SupportSection = () => {
  return (
    <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/10">
              <Heart className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Apoiar o Papuguinho
            </h2>
            <p className="text-lg text-primary/90 md:text-xl">
              O Papuguinho é um projeto gratuito. Com o seu apoio, podemos manter
              o aplicativo no ar, desenvolver novos recursos e continuar dando
              voz a quem mais precisa.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl"
            asChild
          >
            <a
              href="https://apoia.se/papuguinho-mensal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="w-5 h-5 mr-2" />
              Apoiar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
