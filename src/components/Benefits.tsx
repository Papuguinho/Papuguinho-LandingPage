import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Reduz a frustração causada por dificuldades de comunicação",
    "Facilita a interação social e participação em atividades",
    "Desenvolve habilidades linguísticas gradualmente",
    "Interface amigável para crianças de todas as idades",
    "Sem necessidade de conexão com internet após instalação",
    "Totalmente em português brasileiro",
    "Atualizações constantes com novos conteúdos",
    "Desenvolvido com expertise educacional",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Benefícios para Crianças e Famílias
            </h2>
            <p className="text-lg text-muted-foreground">
              O Papuguinho foi desenvolvido pensando nas necessidades reais de crianças 
              com TEA e suas famílias, oferecendo uma ferramenta completa e acessível.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">100%</div>
                <p className="text-xl font-semibold text-foreground">Gratuito para Sempre</p>
              </div>
              <p className="text-muted-foreground">
                Acreditamos que a comunicação é um direito fundamental. Por isso, 
                o Papuguinho é e sempre será completamente gratuito, sem anúncios 
                ou cobranças escondidas.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  "Projeto desenvolvido por estudantes do Instituto Federal de São Paulo 
                  com o objetivo de promover inclusão e acessibilidade através da tecnologia."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
