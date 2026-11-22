import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { galleryScreens } from "@/data/galleryData";

const Gallery = () => {
  // Exibe as 3 primeiras telas como prévia na página inicial
  const previewScreens = galleryScreens.slice(0, 3);

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
          {previewScreens.map((screen, index) => (
            <Card
              key={screen.title}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={screen.image}
                  alt={screen.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{screen.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/galeria">Saiba mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
