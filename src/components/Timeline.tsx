import React, { CSSProperties, useState } from "react";

const events = [
  { id: 1, content: "Idealização e início do projeto", date: "3/2024" },
  { id: 2, content: "Criação do MVP (Prancha única)", date: "6/2024" },
  { id: 3, content: "Apresentação em congressos", date: "3/2025" },
  { id: 4, content: "Lançamento do Website", date: "10/2025" },
  { id: 5, content: "Lançamento do App versão Web", date: "11/2025" },
  { id: 6, content: "Parceria com a Prefeitura de Jacareí", date: "3/2026" },
  { id: 7, content: "Publicação do aplicativo na Play Store", date: "5/2026" },
  { id: 8, content: "Expansão da Equipe", date: "6/2026" },
];

// 1. Processa a lista para injetar os anos antes dos seus respectivos eventos
const generateTimelineItems = (eventList) => {
  const items = [];
  let lastYear = null;

  eventList.forEach((event) => {
    const year = event.date.split("/")[1]; // Extrai o ano (ex: "2024")

    // Se mudou o ano, injeta um item de introdução do Ano antes do evento
    if (year !== lastYear) {
      items.push({
        isYearHeader: true,
        displayTitle: year,
        id: `year-${year}`,
      });
      lastYear = year;
    }

    // Injeta o evento logo em seguida
    items.push({
      isYearHeader: false,
      displayTitle: event.content,
      subtitle: event.date,
      id: `event-${event.id}`,
    });
  });

  return items;
};

const timelineItems = generateTimelineItems(events); // Gera os 11 pontos da timeline

// TAMANHO DA ONDA NOS DOIS EIXOS: O ARCO OCUPA 30% DA LARGURA DA PAGINA.
const WAVE_WIDTH = 30;
const WAVE_HEIGHT = 190;

// Componente de segmento de onda individual com conteúdo no topo
function WaveSegment({ item }) {
  return (
    <div
      style={{
        minWidth: "100vw",
        width: "100vw",
        position: "relative",
        height: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      {/* O CARD FICA NO CENTRO DA PAGINA E NO TOPO DA ONDA. */}
      <div
        style={{
          position: "absolute",
          top: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(280px, 72vw)",
          textAlign: "center",
          padding: "16px 20px",
          boxSizing: "border-box",
          borderRadius: "16px",
          border: "1px solid hsl(var(--primary) / 0.25)",
          background: "hsl(var(--background) / 0.94)",
          boxShadow: "0 12px 32px hsl(var(--primary) / 0.14)",
          zIndex: 3,
        }}
      >
        {item.isYearHeader ? (
          // Estilo destacado para quando for apenas a transição do Ano
          <span
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              color: "hsl(var(--primary))",
              display: "block",
            }}
          >
            {item.displayTitle}
          </span>
        ) : (
          // Estilo para o evento convencional
          <>
            <span
              style={{
                fontSize: "12px",
                color: "hsl(var(--muted-foreground))",
                display: "block",
                marginBottom: "4px",
              }}
            >
              {item.subtitle}
            </span>
            <p
              style={{
                fontSize: "14px",
                margin: 0,
                fontWeight: "500",
                color: "hsl(var(--foreground))",
                lineHeight: "1.3",
              }}
            >
              {item.displayTitle}
            </p>
          </>
        )}
      </div>

      {/* MARCADOR CENTRALIZADO NO TOPO DA ONDA. */}
      <div
        style={{
          position: "absolute",
          top: `${360 - WAVE_HEIGHT}px`,
          left: "50%",
          transform: "translateY(-50%) translateX(-50%)",
          width: "14px",
          height: "14px",
          backgroundColor: "hsl(var(--background))",
          border: `4px solid ${item.isYearHeader ? "hsl(var(--accent))" : "hsl(var(--primary))"}`,
          borderRadius: "50%",
          boxShadow: `0 0 0 5px hsl(var(--background)), 0 0 18px ${item.isYearHeader ? "hsl(var(--accent) / 0.55)" : "hsl(var(--primary) / 0.55)"}`,
          zIndex: 2,
        }}
      />

      {/* A LARGURA E A ALTURA VISUAIS DA ONDA SAO CONTROLADAS AQUI. */}
      <svg
        width="100%"
        height={WAVE_HEIGHT}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ display: "block", overflow: "visible" }}
      >
        <path
          d={`M 0 50 H ${(100 - WAVE_WIDTH) / 2} Q 50 0, ${50 + WAVE_WIDTH / 2} 50 H 100`}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default function TimelineWaveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const totalSegments = timelineItems.length;
  const slides = [...timelineItems, timelineItems[0]];

  const nextSlide = () => {
    if (currentIndex < totalSegments) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const resetAfterLoop = () => {
    if (currentIndex === totalSegments) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#fff",
        paddingTop: "40px",
      }}
    >
      {/* Linha contínua movida horizontalmente */}
      <div
        style={{
          display: "flex",
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: transitionEnabled
            ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
            : "none",
        }}
        onTransitionEnd={resetAfterLoop}
      >
        {slides.map((item, index) => (
          <WaveSegment key={`${item.id}-${index}`} item={item} />
        ))}
      </div>

      {/* Setas de navegação */}
      {currentIndex > 0 && (
        <button onClick={prevSlide} style={{ ...navButtonStyle, left: "15px" }}>
          &#10094;
        </button>
      )}

      {currentIndex <= totalSegments && (
        <button
          onClick={nextSlide}
          style={{ ...navButtonStyle, right: "15px" }}
        >
          &#10095;
        </button>
      )}
    </div>
  );
}

// Estilo auxiliar das setas em formato mobile
const navButtonStyle: CSSProperties = {
  position: "absolute",
  top: "70%",
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "20px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
};
