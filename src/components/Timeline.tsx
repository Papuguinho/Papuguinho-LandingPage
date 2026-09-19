import React, { CSSProperties, useRef, useState } from "react";
import ifsp from "@/assets/partners/ifsp.webp";
import logo from "../../public/icon-192.png";
import equipe from "@/assets/timelineImages/expansaoEquipe.webp";
import logoApp from "@/assets/timelineImages/logoApp.webp";
import conict from "@/assets/timelineImages/conict.webp";
import congressoX from "@/assets/timelineImages/congressoX.webp";
import Eppeq from "@/assets/timelineImages/Eppeq.webp";
import prefeitura from "@/assets/partners/prefeitura.webp";
import secretaria from "@/assets/partners/secretaria.webp";
import prancha from "@/assets/timelineImages/prancha.webp";

const events = [
  {
    id: 1,
    content: "Idealização e início do projeto",
    date: "3/2024",
    image: ifsp,
  },
  {
    id: 2,
    content: "Criação do MVP (Prancha única)",
    date: "6/2024",
    image: prancha
  },
  { 
  id: 3,
    content: "Apresentação em congressos",
    date: "3/2025",
    images: [conict, congressoX, Eppeq]
  },
  {
    id: 4, 
    content: "Lançamento do Website", 
    date: "10/2025",
    image: logo
  },
  { 
    id: 5,
    content: "Lançamento do App versão Web", 
    date: "11/2025",
    image: logoApp
  },
  { 
    id: 6, 
    content: "Parceria com a Prefeitura de Jacareí", 
    date: "3/2026",
    image: [prefeitura, secretaria]
  },
  { 
    id: 7,
    content: "Publicação do aplicativo na Play Store",
    date: "5/2026",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/1920px-Google_Play_2022_icon.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
  },
  { 
    id: 8,
    content: "Expansão da Equipe",
    date: "6/2026",
    image: equipe
  }
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
      image: event.image,
      images: event.images,
      displayTitle: event.content,
      subtitle: event.date,
      id: `event-${event.id}`,
    });
  });

  return items;
};

const timelineItems = generateTimelineItems(events); // Gera os 11 pontos da timeline

const WAVE_HEIGHT = 190;

// Componente de segmento de onda individual com conteúdo no topo
function WaveSegment({ item }) {
  const isTeamImage = item.image === equipe;
  const galleryImages = item.images || (Array.isArray(item.image) ? item.image : null);
  const segmentHeight = isTeamImage ? 480 : 360;

  return (
    <div
      style={{
        minWidth: "100vw",
        width: "100vw",
        position: "relative",
        height: `${segmentHeight}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      {/* Conteúdo do evento acima do marcador da timeline. */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: item.isYearHeader ? "auto" : "min(280px, 72vw)",
          textAlign: "center",
          padding: 0,
          boxSizing: "border-box",
          zIndex: 3,
        }}
      >
        {item.isYearHeader ? (
          // Estilo destacado para quando for apenas a transição do Ano
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(72px, 13vw, 135px)",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00CB29 0%, #20C7E5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
              lineHeight: 1,
              letterSpacing: "0.12em",
            }}
          >
            {item.displayTitle}
          </span>
      ) : (
        // Estilo para o evento convencional
        <>
          {galleryImages ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "min(340px, 88vw)",
                height: "105px",
                margin: "0 auto 8px",
                transform: "translateX(-30px)",
              }}
            >
              {galleryImages.map((image, index) => (
                <img
                  key={`${item.id}-image-${index}`}
                  src={image}
                  alt=""
                  style={{
                    width: "calc((100% - 16px) / 3)",
                    height: "90px",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              ))}
            </div>
          ) : item.image && (
            <img
              src={item.image}
              alt={item.imageAlt || "Imagem do evento"}
              style={{
                width: item.image === equipe ? "clamp(300px, 76vw, 490px)" : "200px",
                height: isTeamImage ? "180px" : "105px",
                maxWidth: "90vw",
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
                margin: "0 auto 8px",
                position: item.image === equipe ? "relative" : undefined,
                left: item.image === equipe ? "50%" : undefined,
                transform: item.image === equipe ? "translateX(-50%)" : undefined,
              }}
            />
          )}

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

      {!item.isYearHeader && (
        <span
          style={{
            position: "absolute",
            top: isTeamImage ? "300px" : "205px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "12px",
            color: "hsl(var(--muted-foreground))",
            whiteSpace: "nowrap",
            zIndex: 3,
          }}
        >
          {item.subtitle}
        </span>
      )}

      {/* MARCADOR CENTRALIZADO NO TOPO DA ONDA. */}
      <div
        style={{
          position: "absolute",
          top: `${segmentHeight - WAVE_HEIGHT}px`,
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
          d="M 0 50 C 20 50, 30 0, 50 0 C 70 0, 80 50, 100 50"
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
  const dragStartX = useRef<number | null>(null);
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

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;

    const dragDistance = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(dragDistance) < 50) return;
    if (dragDistance < 0) nextSlide();
    else prevSlide();
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
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-primary break-words leading-tight px-2">
          LINHA DO TEMPO
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Conheça um pouco da nossa trajetória
        </p>
      </div>

      <div
        style={{ position: "relative", touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          dragStartX.current = null;
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

        {/* Setas posicionadas ao lado do conteúdo central */}
        {currentIndex > 0 && (
          <button
            aria-label="Voltar na linha do tempo"
            onClick={prevSlide}
            style={{ ...navButtonStyle, left: "max(12px, calc(50% - 240px))" }}
          >
            &#10094;
          </button>
        )}

        {currentIndex < totalSegments && (
          <button
            aria-label="Avançar na linha do tempo"
            onClick={nextSlide}
            style={{ ...navButtonStyle, right: "max(12px, calc(50% - 240px))" }}
          >
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
}

// Estilo auxiliar das setas em formato mobile
const navButtonStyle: CSSProperties = {
  position: "absolute",
  top: "92px",
  transform: "translateY(-50%)",
  background: "transparent",
  color: "hsl(var(--primary))",
  border: "none",
  width: "32px",
  height: "32px",
  fontSize: "28px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
};
