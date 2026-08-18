import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
//imagino fazer um carrosel dos depoimentos com Swiper, importando eles aqui
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// os estilos do swiper tbm
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: "1",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },
    {
      id: "2",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },
    {
      id: "3",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },
    {
      id: "4",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },
    {
      id: "5",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },
    {
      id: "6",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
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
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{
                animationDelay: `${testimonials.indexOf(testimonial) * 0.1}s`,
              }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonial.stars}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.occupation}
                    </p>
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
