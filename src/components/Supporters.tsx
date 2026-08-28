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
import { Mail } from "lucide-react";
import { supporters, type Supporter } from "@/data/supportersData";

type SupporterCardProps = {
  supporter: Supporter;
  active?: boolean;
};

const SupporterCard = ({ supporter, active = false }: SupporterCardProps) => {
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
          {supporter.image && <AvatarImage src={supporter.image} alt={supporter.name} />}
          <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
            {supporter.initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground break-words leading-tight min-h-[3.25rem] sm:min-h-[3.5rem] shrink-0">
          {supporter.name}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-primary mb-3 break-words leading-relaxed min-h-[2.5rem] sm:min-h-[3rem] shrink-0">
          {supporter.role}
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words hyphens-auto flex-1 overflow-hidden">
          {supporter.description}
        </p>
        {supporter.links && supporter.links.length > 0 && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 shrink-0 hover:bg-[#1DD762] hover:text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contato
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="center">
              <div className="flex flex-col gap-1">
                {supporter.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-[#1DD762] hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4 text-primary group-hover:text-white" />
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

const Supporters = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselSupporters = [...supporters, ...supporters];

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
    <section id="supporters" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-primary break-words leading-tight px-2">
            Com apoio de:
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Fortalecendo nossa missão
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent className="px-2 py-4 sm:px-4 sm:py-8">
            {carouselSupporters.map((supporter, index) => (
              <CarouselItem
                key={`${supporter.name}-${index}`}
                className="basis-full sm:basis-4/5 lg:basis-1/3 flex justify-center px-2 sm:px-3"
              >
                <SupporterCard
                  supporter={supporter}
                  active={index % supporters.length === activeIndex % supporters.length}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="text-primary hover:bg-primary/10 -left-10 sm:-left-12"
            aria-label="Apoiador anterior"
          />
          <CarouselNext
            className="text-primary hover:bg-primary/10 -right-10 sm:-right-12"
            aria-label="Próximo apoiador"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Supporters;