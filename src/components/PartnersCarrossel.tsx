import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { partners } from "@/data/partnersData";

const PartnersCarrossel = () => {
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
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-primary">
            Parcerias
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as instituições que tornam o Papuguinho possível
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent className="px-8 py-4 sm:px-4 sm:py-8">
            {partners.map((partner, index) => (
              <CarouselItem
                key={partner.name}
                className="basis-[88%] sm:basis-1/2 lg:basis-1/3 flex justify-center px-2 sm:px-3"
              >
                <a
                  className={`w-full max-w-[17rem] sm:max-w-sm rounded-lg border bg-card p-4 sm:p-6 text-center transition-all duration-500 ${
                    index === activeIndex
                      ? "border-primary/70 shadow-[0_12px_30px_rgba(0,0,0,0.15)] sm:scale-105 sm:shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                      : "sm:scale-90 opacity-80"
                  }`}
                >
                  <div className="h-28 sm:h-36 flex items-center justify-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 sm:mt-5 min-h-10 sm:min-h-12 text-sm sm:text-base font-semibold text-foreground">
                    {partner.name}
                  </h3>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="text-primary hover:bg-primary/10 -left-1 sm:-left-7"
            aria-label="Parceria anterior"
          />
          <CarouselNext
            className="text-primary hover:bg-primary/10 -right-1 sm:-right-4"
            aria-label="Próxima parceria"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarrossel;
