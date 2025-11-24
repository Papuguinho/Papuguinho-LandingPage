import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Gallery = () => {
  const screenshots = [
    {
      title: "Prancha de Comunicação",
      description: "Interface intuitiva com ícones coloridos",
    },
    {
      title: "Categorias Organizadas",
      description: "Alimentos, emoções, ações e muito mais",
    },
    {
      title: "Formação de Frases",
      description: "Construção visual de sentenças completas",
    },
    {
      title: "Feedback Sonoro",
      description: "Reprodução de áudio para cada palavra",
    },
    {
      title: "Personalização",
      description: "Adapte as pranchas às necessidades da criança",
    },
    {
      title: "Interface Acessível",
      description: "Design pensado para facilitar o uso",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Galeria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como o Papuguinho funciona na prática
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-primary/40" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{screenshot.title}</h3>
                <p className="text-sm text-muted-foreground">{screenshot.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
