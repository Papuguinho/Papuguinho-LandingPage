import { Button } from "@/components/ui/button";
import { awards } from "@/data/awardsData";

const Awards = () => {
  return (
    <div className="bg-background">

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-primary break-words leading-tight px-2">
              Premiações
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Reconhecimentos que destacam a relevância do Papuguinho para a
              educação inclusiva e a inovação social.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {awards.map((award) => (
              <article
                key={award.title}
                className="rounded-2xl border border-border/60 bg-card p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4"
              >
                <div className="flex h-[170px] items-center justify-center overflow-hidden rounded-xl bg-muted/30 sm:h-[190px]">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-full w-full object-contain p-4 sm:p-5"
                  />
                </div>

                <h2 className="mt-3 text-center text-sm font-medium leading-snug tracking-normal text-foreground sm:text-base">
                  {award.title}
                </h2>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
