const events = [
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

const Timeline = () => {
  const scrollTimeline = (direction: "left" | "right") => {
    const container = document.getElementById("timeline-scroll");

    if (!container) return;

    const scrollAmount = 300;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-primary">
            Linha do Tempo
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Conheça um pouco da nossa história
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-7xl">
          {/* Seta esquerda */}
          <button
            onClick={() => scrollTimeline("left")}
            aria-label="Voltar na linha do tempo"
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10
                       -translate-y-1/2 items-center justify-center
                       rounded-full bg-background shadow-md
                       transition hover:scale-110"
          >
            ←
          </button>

          {/* Área de scroll */}
          <div
            id="timeline-scroll"
            className="overflow-x-auto scroll-smooth px-14
                       [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            <div className="relative min-w-max py-8">
              {/* Onda verde */}
              <svg
                className="pointer-events-none absolute left-0 top-0 h-64 w-full"
                viewBox={`0 0 ${events.length * 240} 260`}
                preserveAspectRatio="none"
              >
                <path
                  d={events
                    .map((_, index) => {
                      const x = index * 240 + 120;

                      if (index === 0) {
                        return `M ${x - 120} 160 Q ${x - 60} 80 ${x} 80`;
                      }

                      const previousX = (index - 1) * 240 + 120;
                      const midX = (previousX + x) / 2;

                      return `Q ${midX} 80 ${x} 160`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-primary"
                />
              </svg>

              {/* Eventos */}
              <div className="relative flex">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="relative flex w-[240px] shrink-0
                               flex-col items-center"
                  >
                    {/* Texto */}
                    <div
                      className="flex h-[105px] w-[190px]
                                    flex-col items-center text-center"
                    >
                      <span className="mb-2 text-sm font-semibold text-primary">
                        {event.date}
                      </span>

                      <h3 className="text-base font-bold leading-tight">
                        {event.content}
                      </h3>
                    </div>

                    {/* Ponto */}
                    <div
                      className="relative z-10 mt-[-1px]
                                 h-5 w-5 rounded-full
                                 border-4 border-background
                                 bg-primary shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seta direita */}
          <button
            onClick={() => scrollTimeline("right")}
            aria-label="Avançar na linha do tempo"
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10
                       -translate-y-1/2 items-center justify-center
                       rounded-full bg-background shadow-md
                       transition hover:scale-110"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
