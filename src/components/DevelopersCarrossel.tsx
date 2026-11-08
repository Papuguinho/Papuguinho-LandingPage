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
import { Mail } from "lucide-react";
import { developers, type Developer } from "@/data/developersData";
import { Link } from "react-router-dom";

type DeveloperCardProps = {
  dev: Developer;
  active?: boolean;
};

const DeveloperCard = ({ dev, active = false }: DeveloperCardProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[18rem] h-[15rem] sm:h-[16rem] mx-auto text-center transition-all duration-500 ease-out",
        active
          ? "scale-105 -translate-y-1"
          : "scale-95 opacity-90"
      )}
    >
      <div className="flex h-full flex-col items-center">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center">
          <Avatar
            className={cn(
              "transition-all duration-500 rounded-[2rem]",
              active ? "h-32 w-32 ring-2 ring-primary/20" : "h-28 w-28"
            )}
          >
            {dev.image && <AvatarImage src={dev.image} alt={dev.name} />}
            <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
              {dev.initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <h3 className="font-semibold text-xs sm:text-sm uppercase mb-1 text-foreground break-words leading-tight h-[2.25rem] flex items-center justify-center">
          {dev.name}
        </h3>
        <p className="text-[0.65rem] sm:text-xs font-medium text-primary break-words leading-tight h-[2.5rem] flex items-start justify-center">
          {dev.role}
        </p>
        <div className="mt-1 flex h-7 items-center justify-center">
        </div>
      </div>
      
    </div>
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
    <section id="developers" className="bg-background">
      <div className="text-center px-4 py-8 sm:py-10 animate-fade-in-up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-primary break-words leading-tight">
            Desenvolvedores
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Conheça a equipe por trás do Papuguinho
          </p>
      </div>

      <div className="bg-white px-4 py-14 sm:py-16">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true, startIndex: 1 }}
          className="max-w-7xl mx-auto"
        >
          <CarouselContent className="items-start py-4 sm:py-6">
            {developers.map((dev, index) => (
              <CarouselItem
                key={dev.name}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center px-1 sm:px-4"
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

        <div className="mt-8 text-center">
          <Button asChild>
            <Link to="/desenvolvedores">Saiba mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Developers;