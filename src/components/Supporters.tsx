import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { supporters, type Supporter } from "@/data/supportersData";

type SupporterCardProps = {
  supporter: Supporter;
};

const SupporterCard = ({ supporter }: SupporterCardProps) => {
  return (
    <Card className="w-full max-w-[18rem] sm:max-w-sm h-[28rem] sm:h-[26rem] lg:h-[28rem] mx-auto overflow-hidden border-primary/70 bg-card shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <CardContent className="pt-5 sm:pt-6 text-center h-full flex flex-col px-4 sm:px-6 overflow-hidden">
        <Avatar className="mx-auto mb-4 h-16 w-16 ring-2 ring-primary/20 shrink-0">
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
              <Button variant="outline" size="sm" className="mt-4 shrink-0">
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
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      <Icon className="h-4 w-4 text-primary" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto justify-items-center">
          {supporters.map((supporter) => (
            <SupporterCard key={supporter.name} supporter={supporter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;