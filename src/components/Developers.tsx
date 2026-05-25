import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
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

const Developers = () => {
  return (
    <section id="developers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Desenvolvedores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a equipe por trás do Papuguinho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {developers.map((dev, index) => {
            const cardClassName = `hover:shadow-lg transition-shadow duration-300 animate-fade-in-up lg:col-span-2 ${
              index === developers.length - 1
                ? "md:col-span-2 md:max-w-sm md:mx-auto lg:col-span-2 lg:max-w-none lg:col-start-3"
                : ""
            }`;

            const cardInner = (
              <CardContent className="pt-6 text-center">
                <Avatar className="h-16 w-16 mx-auto mb-4">
                  {dev.image && <AvatarImage src={dev.image} alt={dev.name} />}
                  <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
                    {dev.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1 text-foreground">{dev.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{dev.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{dev.description}</p>
                {dev.links && dev.links.length > 0 && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="mt-4">
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
            );

            return (
              <Card
                key={index}
                className={cardClassName}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cardInner}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Developers;
