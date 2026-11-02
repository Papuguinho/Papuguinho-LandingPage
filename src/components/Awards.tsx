import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import boasPraticasImage from "@/assets/gallery/awards/boaspraticasImage.jpg";
import incentivoRhImage from "@/assets/gallery/awards/icentivoRhImage.png";
import reditecImage from "@/assets/gallery/awards/reditecImage.jpg";

const awardSlides = [
  {
    title: "Prêmio Boas Práticas",
    description:
      "Reconhecimento por ações inovadoras em educação inclusiva e impacto social.",
    image: boasPraticasImage,
  },
  {
    title: "Incentivo à Pesquisa em Direitos Humanos",
    description:
      "Premiação por contribuição significativa em pesquisa e acessibilidade.",
    image: incentivoRhImage,
  },
  {
    title: "Reditec",
    description:
      "Distinção por experiências transformadoras e inovação com tecnologia educacional.",
    image: reditecImage,
  },
];

const Awards = () => {
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
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Premiações
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Reconhecimentos que destacam a relevância do Papuguinho para a
              educação inclusiva e a inovação social.
            </p>

            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao início
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {awardSlides.map((award, index) => (
                <CarouselItem key={award.title} className="basis-full">
                  <div
                    className={cn(
                      "rounded-[2rem] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:p-8",
                      index % 2 === 0 ? "bg-[#4DB9A6]" : "bg-[#D9DFE4]",
                    )}
                  >
                    <div className="mx-auto flex h-[220px] max-w-4xl items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/10 sm:h-[260px]">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="h-full w-full object-contain p-3 sm:p-6"
                      />
                    </div>

                    <div className="mt-6 text-center">
                      <h2 className="text-2xl font-bold text-foreground sm:text-4xl">
                        {award.title}
                      </h2>
                      <p className="mt-3 text-sm font-bold uppercase tracking-wide text-foreground/80 sm:text-base">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="-left-2 text-foreground/80 hover:bg-black/5 sm:-left-5"
              aria-label="Prêmio anterior"
            />
            <CarouselNext
              className="-right-2 text-foreground/80 hover:bg-black/5 sm:-right-5"
              aria-label="Próximo prêmio"
            />
          </Carousel>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              {awardSlides.map((award, index) => (
                <button
                  key={award.title}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Ir para ${award.title}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    activeIndex === index
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Awards;
