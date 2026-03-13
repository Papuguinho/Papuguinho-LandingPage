import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const developers = [
  {
    name: "Tardelli Ronan Coelho Stekel",
    role: "Orientador do Projeto",
    description:
      "Doutor em Geofísica Espacial (INPE), Professor e pesquisador (IFSP-Jacareí). Responsável pela criação do projeto, orientação científica e coordenação da equipe.",
    initials: "TS",
  },
  {
    name: "Gabriel de Paula Baroni",
    role: "Desenvolvedor de Software e Pesquisador",
    description:
      "Técnico em Informática e pesquisador (IFSP-Jacareí), cursando Bacharelado Interdisciplinar em Ciência e Tecnologia (UNIFESP-São José dos Campos). Responsável pelo desenvolvimento do software com arquitetura em FlutterFlow/Firebase.",
    initials: "GB",
  },
  {
    name: "José Antonio de Carvalho Neto",
    role: "Desenvolvedor de Software e Pesquisador",
    description:
      "Cursando Análise e Desenvolvimento de Sistemas (IFSP-Jacareí). Responsável pelo desenvolvimento do software com arquitetura em FlutterFlow/Firebase.",
    initials: "JC",
  },
  {
    name: "Manuela Antonelli",
    role: "Desenvolvedora Web, Pesquisadora",
    description:
      "Cursando Análise e Desenvolvimento de Sistemas (IFSP-Jacareí) e Pedagogia e Educação (UNINTER). Responsável pelo desenvolvimento do site informativo, adaptações inclusivas e pedagógicas do aplicativo.",
    initials: "MA",
  },
  {
    name: "Marcela Jordana Victoria Souza",
    role: "Designer de Produto (UI/UX), Desenvolvedora Web, Pesquisadora",
    description:
      "Técnica em Informática e pesquisadora (IFSP-Jacareí). Responsável pela elaboração do design do aplicativo (UX/UI), identidade visual e pelo desenvolvimento do site informativo.",
    initials: "MS",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {developers.slice(0, 3).map((dev, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <Avatar className="h-16 w-16 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
                    {dev.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1 text-foreground">{dev.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{dev.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{dev.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Segunda linha: 2 cards centralizados */}
        <div className="flex justify-center mt-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {developers.slice(3).map((dev, index) => (
              <Card
                key={index + 3}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
                      {dev.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">{dev.name}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{dev.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{dev.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
