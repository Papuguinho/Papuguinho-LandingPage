import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Github, Linkedin, Globe, GraduationCap, Mail } from "lucide-react";

type DeveloperLink = {
  label: string;
  url: string;
  icon: typeof Github;
};

type Developer = {
  name: string;
  role: string;
  description: string;
  initials: string;
  image?: string;
  links?: DeveloperLink[];
};

type DeveloperCardProps = {
  dev: Developer;
  active?: boolean;
};

const developers: Developer[] = [
  {
    name: "Tardelli Ronan Coelho Stekel",
    role: "Cofundador e Orientador do Projeto",
    description:
      "Doutor em Geofísica Espacial (INPE), Professor e pesquisador (IFSP-Jacareí). Responsável pela criação do projeto, orientação científica e coordenação da equipe.",
    initials: "TS",
  },
  {
    name: "Gabriel de Paula Baroni",
    role: "Cofundador, Desenvolvedor de Software e Pesquisador",
    description:
      "Técnico em Informática e pesquisador (IFSP-Jacareí), cursando Bacharelado Interdisciplinar em Ciência e Tecnologia (UNIFESP-São José dos Campos). Responsável pelo desenvolvimento do software com arquitetura em Flutter e serviços do Firebase.",
    initials: "GB",
    image: "https://gabrielbaroni.vercel.app/assets/hero/eu.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/Gabriel-Baroni", icon: Github },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gabrieldpbaroni/", icon: Linkedin },
      { label: "Lattes", url: "https://lattes.cnpq.br/0153768116859752", icon: GraduationCap },
      { label: "Portfólio", url: "https://gabrielbaroni.vercel.app", icon: Globe },
    ],
  },
  {
    name: "José Antonio de Carvalho Neto",
    role: "Cofundador, Desenvolvedor de Software e Pesquisador",
    description:
      "Cursando Análise e Desenvolvimento de Sistemas (IFSP-Jacareí). Responsável pelo desenvolvimento do software com arquitetura em Flutter e serviços do Firebase.",
    initials: "JC",
    image: "https://github.com/joseantoniodecarvalhoneto.png",
  },
  {
    name: "Manuela Antonelli",
    role: "Cofundadora, Desenvolvedora Web, Pesquisadora",
    description:
      "Cursando Análise e Desenvolvimento de Sistemas (IFSP-Jacareí) e Pedagogia e Educação (UNINTER). Responsável pelo desenvolvimento do site informativo, adaptações inclusivas e pedagógicas do aplicativo.",
    initials: "MA",
    image: "https://github.com/ManuelaAntonelli.png",
  },
  {
    name: "Marcela Jordana Victoria Souza",
    role: "Cofundadora, Designer de Produto (UI/UX), Desenvolvedora Web, Pesquisadora",
    description:
      "Técnica em Informática e pesquisadora (IFSP-Jacareí), cursando farmácia (UNESP-Araraquara). Responsável pela elaboração do design do aplicativo (UX/UI), identidade visual e pelo desenvolvimento do site informativo.",
    initials: "MS",
    image: "https://github.com/marcela-vic938.png",
  },
  {
    name: "Ana Paula Kawabe de Lima Ferreira",
    role: "Suporte acadêmico e inclusivo",
    description:
      "Graduada em Licenciatura em Química (UNESP), Mestrado em Ciências (UFLA), Pós Graduação em Educação Especial e Inclusiva em andamento (UFABC), Doutorado em Ensino de Ciências em Andamento (UNICAMP-SP). Fundadora do Grupo MIND.",
    initials: "AF",
  },
  {
    name: "Alexssandro Ferreira da Silva",
    role: "Suporte acadêmico e inclusivo",
    description:
      "Graduado em Administração (FADMINAS) e Análise e Desenvolvimento de Sistemas (IFSP), Pós Graduado em Gestão Pública Municipal e em Educação Empreendedora (UFSJ), Licenciatura em Pedagogia em andamento (UNIVESP), Mestrado em Ensino de Ciências (UNICAMP-SP). Fundador do Grupo MIND.",
    initials: "AS",
  },
];

const DeveloperCard = ({ dev, active = false }: DeveloperCardProps) => {
  return (
    <Card
      className={cn(
        "w-full max-w-[18rem] sm:max-w-sm h-[28rem] sm:h-[26rem] lg:h-[28rem] mx-auto transition-all duration-500 ease-out overflow-hidden",
        active
          ? "scale-[1.02] -translate-y-1 sm:scale-105 sm:-translate-y-2 shadow-[0_18px_45px_rgba(0,0,0,0.18)] border-primary/70 bg-card"
          : "scale-90 translate-y-2 opacity-90"
      )}
    >
      <CardContent className="pt-5 sm:pt-6 text-center h-full flex flex-col px-4 sm:px-6 overflow-hidden">
        <Avatar
          className={cn(
            "mx-auto mb-4 transition-all duration-500 shrink-0",
            active ? "h-16 w-16 ring-2 ring-primary/20" : "h-14 w-14"
          )}
        >
          {dev.image && <AvatarImage src={dev.image} alt={dev.name} />}
          <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
            {dev.initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground break-words leading-tight min-h-[3.25rem] sm:min-h-[3.5rem] shrink-0">
          {dev.name}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-primary mb-3 break-words leading-relaxed min-h-[2.5rem] sm:min-h-[3rem] shrink-0">
          {dev.role}
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words hyphens-auto flex-1 overflow-hidden">
          {dev.description}
        </p>
        {dev.links && dev.links.length > 0 && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="mt-4 shrink-0">
                <Mail className="h-4 w-4 mr-2" />
                Contato
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="center">
              <div className="flex flex-col gap-1">
                {dev.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </CardContent>
    </Card>
  );
};

const Developers = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="developers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-primary break-words leading-tight px-2">
            Desenvolvedores
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça a equipe por trás do Papuguinho
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent className="py-4 sm:py-8">
            {developers.map((dev, index) => (
              <CarouselItem
                key={dev.name}
                className="basis-full sm:basis-4/5 lg:basis-1/3 flex justify-center px-1 sm:px-2"
              >
                <DeveloperCard dev={dev} active={index === activeIndex} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="text-primary hover:bg-primary/10 -left-5 sm:-left-7"
            aria-label="Desenvolvedor anterior"
          />
          <CarouselNext
            className="text-primary hover:bg-primary/10 -right-2 sm:-right-4"
            aria-label="Próximo desenvolvedor"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Developers;