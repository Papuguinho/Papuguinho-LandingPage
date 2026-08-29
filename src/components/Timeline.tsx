import { Card, CardContent } from "@/components/ui/card"; // pego  da pasta UI

const events = [
  // cont de cada elemnto da timeline
  {
    id: 1,
    content: "Idealização e início do projeto",
    date: "3/2024",
  },
  {
    id: 2,
    content: "Criação do MVP (Prancha única)",
    date: "6/2024",
  },
  {
    id: 3,
    content: "Apresentação em congressos",
    date: "3/2025",
  },
  {
    id: 4,
    content: "Lançamento do Website",
    date: "10/2025",
  },
  {
    id: 5,
    content: "Lançamento do App versão Web",
    date: "11/2025",
  },
  {
    id: 6,
    content: "Parceria com a Prefeitura de Jacareí",
    date: "3/2026",
  },
  {
    id: 7,
    content: "Publicação do aplicativo na Play Store",
    date: "5/2026",
  },
  {
    id: 8,
    content: "Expansão da Equipe",
    date: "6/2026",
  },
];
// OBS: removi a imagem da const pq achei muito dificil de arrumar 
// do jeito que a timeline está atualmente, se a gente mudar, dá
// pra ver uma possibilidade de encaixar as fotos ali.

const Timeline = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-primary">
            Linha do Tempo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Conheça um pouco da nossa história
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <div key={event.id} className="relative flex md:items-center">
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-8 md:justify-end"
                      : "md:ml-auto md:pl-8"
                  } flex`}
                >
                  <Card className="w-full max-w-md shadow-sm">
                    <CardContent className="p-5">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold leading-tight">
                        {event.content}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
