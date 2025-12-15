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
      title: "Tela de Login",
      description: "Acesse sua conta com segurança",
      image: papuguinho02,
    },
    {
      title: "Prancha Geral",
      description: "Comunicação visual com ícones intuitivos",
      image: papuguinho03,
    },
    {
      title: "Pastas de Pranchas",
      description: "Categorias organizadas por temas",
      image: papuguinho04,
    },
    {
      title: "Prancha de Ações",
      description: "Verbos e ações para formar frases",
      image: papuguinho05,
    },
    {
      title: "Escolha de Avatar",
      description: "Personalize com diferentes papuguinhos",
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
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
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
