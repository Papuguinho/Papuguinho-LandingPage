import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { awards } from "@/data/awardsData";

const Awards = () => {
  return (
    <div id="awards" className="bg-background">

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
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <article
                key={award.title}
                className="w-full rounded-lg border bg-card p-4 text-center transition-all duration-500 sm:p-6"
              >
                <div className="flex h-28 items-center justify-center sm:h-36">
                  <img
                    src={award.image}
                    alt={award.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="mt-4 min-h-10 text-sm font-semibold text-foreground sm:mt-5 sm:min-h-12 sm:text-base">
                  {award.title}
                </h3>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link to="/premios">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
