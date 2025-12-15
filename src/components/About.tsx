import { Card } from "@/components/ui/card";
import { MessageSquare, Heart, Users } from "lucide-react";
const About = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-3xl">
            O que é Comunicação Aumentativa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A CAA é um conjunto de ferramentas e estratégias que ajudam pessoas 
            com dificuldades de comunicação a expressar seus pensamentos, necessidades e sentimentos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="p-8 text-center space-y-4 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Expressão Facilitada
            </h3>
            <p className="text-muted-foreground">
              Permite que crianças formem frases tocando em ícones visuais, 
              transformando imagens em palavras faladas.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Autonomia e Confiança
            </h3>
            <p className="text-muted-foreground">
              Aumenta a independência e autoestima das crianças, 
              permitindo que se comuniquem de forma efetiva.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Conexão Familiar
            </h3>
            <p className="text-muted-foreground">
              Fortalece os laços entre pais, cuidadores e crianças através 
              de uma comunicação mais clara e significativa.
            </p>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;