import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { developers, type Developer } from "@/data/developersData";
import { Link } from "react-router-dom";

type DeveloperCardProps = {
  dev: Developer;
};

const DeveloperCard = ({ dev }: DeveloperCardProps) => {
  return (
    <div className="h-[13rem] w-full text-center sm:h-[14rem] lg:h-[15rem]">
      <div className="flex h-full flex-col items-center">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28 lg:h-32 lg:w-32">
          <Avatar className="h-24 w-24 rounded-[1.5rem] sm:h-28 sm:w-28 lg:h-32 lg:w-32">
            {dev.image && <AvatarImage src={dev.image} alt={dev.name} />}
            <AvatarFallback className="bg-primary/20 text-base font-bold text-primary lg:text-lg">
              {dev.initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <h3 className="mb-1 flex h-[2rem] items-center justify-center break-words text-[0.65rem] font-semibold uppercase leading-tight text-foreground sm:text-xs lg:text-sm">
          {dev.name}
        </h3>
        <p className="mx-auto flex h-[2.5rem] max-w-[15rem] items-start justify-center break-words text-[0.6rem] font-medium leading-tight text-primary sm:text-[0.7rem] lg:text-xs">
          {dev.role}
        </p>
        <div className="mt-1 flex h-7 items-center justify-center">
        </div>
      </div>
    </div>
  );
};

const Developers = () => {
  return (
    <section id="developers" className="bg-background">
      <div className="animate-fade-in-up px-4 py-6 text-center sm:py-8">
          <h2 className="mx-auto break-words text-center font-display text-2xl font-bold uppercase leading-tight text-primary sm:text-3xl">
            Desenvolvedores
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-center text-xs text-muted-foreground sm:text-sm">
            Conheça a equipe por trás do Papuguinho
          </p>
      </div>

      <div className="bg-white pb-6 pt-10 sm:pb-8 sm:pt-12">
        <div className="container mx-auto flex flex-wrap justify-center gap-x-3 gap-y-4 px-4 sm:gap-x-4 sm:gap-y-6">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="basis-[calc(50%-0.375rem)] sm:basis-[calc(33.333%-0.667rem)] lg:basis-[calc(25%-0.75rem)]"
            >
              <DeveloperCard dev={dev} />
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Button asChild>
            <Link to="/desenvolvedores">Saiba mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Developers;