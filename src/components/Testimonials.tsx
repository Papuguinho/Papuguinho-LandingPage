import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de João, 6 anos",
      content:
        "O Papuguinho transformou a comunicação do meu filho. Ele consegue expressar suas necessidades e emoções de forma muito mais clara agora.",
      initials: "MS",
    },
    {
      name: "Ana Costa",
      role: "Mãe de Laura, 5 anos",
      content:
        "Ferramenta incrível! A Laura adora usar o aplicativo e tem se desenvolvido muito. Os sons ajudam muito no aprendizado.",
      initials: "AC",
    },
    {
      name: "Carlos Oliveira",
      role: "Pai de Pedro, 7 anos",
      content:
        "Gratuito e de qualidade! O Pedro usa todos os dias e conseguimos entender melhor o que ele quer nos dizer. Recomendo muito!",
      initials: "CO",
    },
    {
      name: "Juliana Santos",
      role: "Mãe de Gabriel, 4 anos",
      content:
        "A interface é super intuitiva. Gabriel aprendeu a usar rapidamente e agora se comunica com muito mais autonomia.",
      initials: "JS",
    },
    {
      name: "Roberto Lima",
      role: "Pai de Sofia, 8 anos",
      content:
        "Excelente recurso desenvolvido pelos estudantes do IFSP. A Sofia adora o papagainho e usa o app com entusiasmo.",
      initials: "RL",
    },
    {
      name: "Patricia Ferreira",
      role: "Mãe de Miguel, 5 anos",
      content:
        "O Papuguinho facilitou muito nossa rotina. Miguel consegue montar frases e expressar o que sente. Gratidão aos desenvolvedores!",
      initials: "PF",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Depoimentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que os pais e cuidadores estão dizendo sobre o Papuguinho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
