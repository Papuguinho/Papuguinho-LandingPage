import { Card } from "@/components/ui/card";
import papuguinho01 from "@/assets/gallery/papuguinho01.jpg";
import papuguinho02 from "@/assets/gallery/papuguinho02.jpg";
import papuguinho03 from "@/assets/gallery/papuguinho03.jpg";
import papuguinho04 from "@/assets/gallery/papuguinho04.jpg";
import papuguinho05 from "@/assets/gallery/papuguinho05.jpg";
import papuguinho06 from "@/assets/gallery/papuguinho06.jpg";

const Gallery = () => {
  const screenshots = [
    {
      title: "Tela de Cadastro",
      description: "Crie sua conta de forma rápida e fácil",
      image: papuguinho01,
    },
    {
      title: "Entrar no Histórico",
      description: "Acesse o histórico com e-mail e senha",
      image: papuguinho02,
    },
    {
      title: "Prancha Geral",
      description: "Comunicação visual com ícones intuitivos",
      image: papuguinho03,
    },
    {
      title: "Pranchas Temáticas",
      description: "Categorias organizadas por temas",
      image: papuguinho04,
    },
    {
      title: "Modo Infantil",
      description: "Fixe a tela para uso seguro por crianças",
      image: papuguinho05,
    },
    {
      title: "Personalize seu App",
      description: "Crie pictogramas e edite à sua maneira",
      image: papuguinho06,
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
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden flex items-center justify-center">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
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
