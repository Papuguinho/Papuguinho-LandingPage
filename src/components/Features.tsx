import { Card } from "@/components/ui/card";
import { Volume2, Grid3x3, Sparkles, Download } from "lucide-react";
const Features = () => {
  const features = [{
    icon: Grid3x3,
    title: "Pranchas Visuais",
    description: "Interface intuitiva com ícones coloridos organizados em pranchas temáticas para fácil navegação.",
    color: "primary"
  }, {
    icon: Volume2,
    title: "Síntese de Voz",
    description: "Cada toque em um ícone reproduz o som da palavra, permitindo a formação de frases completas.",
    color: "secondary"
  }, {
    icon: Sparkles,
    title: "Personalizável",
    description: "Adapte as pranchas às necessidades específicas de cada criança com temas customizáveis.",
    color: "accent"
  }, {
    icon: Download,
    title: "100% Gratuito",
    description: "Acesso completo e gratuito para todas as famílias que precisam de suporte em comunicação.",
    color: "primary"
  }];
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-3xl">
            Como Funciona o Papuguinho?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma solução simples e eficaz para transformar a comunicação em algo natural e divertido.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <Card key={index} className="p-6 space-y-4 border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>;
        })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground text-center md:text-2xl">
                Por que o nome Papuguinho?
              </h3>
              <p className="text-lg text-muted-foreground text-center">
                Assim como um papagaio que reproduz sons, o Papuguinho dá voz às crianças, 
                repetindo as palavras que elas escolhem através dos ícones. É um companheiro 
                fiel que ajuda na expressão e na comunicação do dia a dia.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Features;