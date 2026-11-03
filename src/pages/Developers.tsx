import { useEffect } from "react";
import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { developers, type Developer } from "@/data/developersData";
import { supporters, type Supporter } from "@/data/supportersData";

const DeveloperCard = ({ dev }: { dev: Developer }) => {
  return (
    <Card className="h-full min-h-[28rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
      <CardContent className="flex h-full flex-col overflow-hidden px-4 pt-5 text-center sm:px-6 sm:pt-6">
        <Avatar className="mx-auto mb-4 h-16 w-16 shrink-0 ring-2 ring-primary/20">
          {dev.image && <AvatarImage src={dev.image} alt={dev.name} />}
          <AvatarFallback className="bg-primary/20 text-lg font-bold text-primary">
            {dev.initials}
          </AvatarFallback>
        </Avatar>

        <h2 className="mb-1 min-h-[3.25rem] shrink-0 break-words text-base font-semibold leading-tight text-foreground sm:text-lg">
          {dev.name}
        </h2>
        <p className="mb-3 min-h-[2.5rem] shrink-0 break-words text-xs font-medium leading-relaxed text-primary sm:min-h-[3rem] sm:text-sm">
          {dev.role}
        </p>
        <p className="flex-1 overflow-hidden break-words text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {dev.description}
        </p>

        {dev.links && dev.links.length > 0 && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 shrink-0 hover:bg-[#1DD762] hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="center">
              <div className="flex flex-col gap-1">
                {dev.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-[#1DD762] hover:text-white"
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

const SupporterCard = ({ supporter }: { supporter: Supporter }) => {
  return (
    <Card className="h-full min-h-[28rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
      <CardContent className="flex h-full flex-col overflow-hidden px-4 pt-5 text-center sm:px-6 sm:pt-6">
        <Avatar className="mx-auto mb-4 h-16 w-16 shrink-0 ring-2 ring-primary/20">
          {supporter.image && <AvatarImage src={supporter.image} alt={supporter.name} />}
          <AvatarFallback className="bg-primary/20 text-lg font-bold text-primary">
            {supporter.initials}
          </AvatarFallback>
        </Avatar>

        <h2 className="mb-1 min-h-[3.25rem] shrink-0 break-words text-base font-semibold leading-tight text-foreground sm:text-lg">
          {supporter.name}
        </h2>
        <p className="mb-3 min-h-[2.5rem] shrink-0 break-words text-xs font-medium leading-relaxed text-primary sm:min-h-[3rem] sm:text-sm">
          {supporter.role}
        </p>
        <p className="flex-1 overflow-hidden break-words text-xs leading-relaxed text-muted-foreground sm:text-sm">
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
                <Mail className="mr-2 h-4 w-4" />
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
                      className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-[#1DD762] hover:text-white"
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

const Developers = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Desenvolvedores — Papuguinho";
    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20" />

      <section id="developers" className="bg-background py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center sm:mb-12">
            <h1 className="mb-3 break-words px-2 text-3xl font-bold leading-tight text-primary sm:mb-4 sm:text-4xl">
              Desenvolvedores
            </h1>
            <p className="mx-auto max-w-2xl px-4 text-base text-muted-foreground sm:text-lg">
              Conheça a equipe por trás do Papuguinho
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {developers.map((dev) => (
              <DeveloperCard key={dev.name} dev={dev} />
            ))}
          </div>

          <div className="mb-10 mt-16 text-center sm:mb-12">
            <h2 className="mb-3 break-words px-2 text-3xl font-bold leading-tight text-primary sm:mb-4 sm:text-4xl">
              Com apoio de:
            </h2>
            <p className="mx-auto max-w-2xl px-4 text-base text-muted-foreground sm:text-lg">
              Fortalecendo nossa missão
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supporters.map((supporter) => (
              <SupporterCard key={supporter.name} supporter={supporter} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Developers;
