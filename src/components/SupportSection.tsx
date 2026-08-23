import { Button } from "@/components/ui/button";
import { Heart, Repeat, Server, ShieldCheck, GraduationCap } from "lucide-react";
import { APOIO_MENSAL, APOIO_PONTUAL } from "@/lib/apoio";

/*
 * A seção de apoio é a ÚNICA da página em âmbar (--gradient-apoio). Todo o
 * resto do site é verde — foi de propósito: em rolagem rápida, o bloco precisa
 * ler como "isto aqui é outra coisa", e não como mais uma faixa do site.
 *
 * O âmbar é claro. A primeira versão usava --gradient-accent (o âmbar cheio),
 * que funcionava na faixa da home mas pesava demais na /apoie, onde este bloco
 * ocupa a tela inteira. Com o fundo claro os cartões passaram a ser brancos com
 * borda — sobre âmbar claro, branco translúcido sumia.
 */

const motivos = [
  {
    icon: Server,
    titulo: "Servidores",
    texto: "A hospedagem do aplicativo, do estúdio, visita às escolas.",
  },
  {
    icon: ShieldCheck,
    titulo: "Sem anúncios",
    texto: "Nenhuma criança vira produto. Por isso o dinheiro precisa vir de quem apoia.",
  },
  {
    icon: GraduationCap,
    titulo: "Feito por estudantes",
    texto: "Projeto público do IFSP — Campus Jacareí. Apoio vira desenvolvimento.",
  },
];

type Props = {
  /** Na página /apoie este bloco é o título principal; na home é uma seção. */
  as?: "h1" | "h2";
};

const SupportSection = ({ as: Titulo = "h2" }: Props) => {
  return (
    <section
      id="support"
      className="relative overflow-hidden py-20 md:py-24 scroll-mt-20"
      style={{ backgroundImage: "var(--gradient-apoio)" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-background/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-background/40 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Titulo className="text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Ajude a manter o Papuguinho no ar
            </Titulo>
            <p className="text-lg text-secondary-foreground/80 md:text-xl max-w-2xl mx-auto">
              O Papuguinho é gratuito, com acesso completo para todas as famílias
              que precisam de suporte em comunicação.
              <br />
              Mantemos o Papuguinho através de doações.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 text-left">
            {motivos.map((motivo) => (
              <div key={motivo.titulo} className="rounded-2xl border border-secondary-foreground/10 bg-background p-5 shadow-sm space-y-2">
                <motivo.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{motivo.titulo}</h3>
                <p className="text-sm text-muted-foreground">{motivo.texto}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 shadow-lg" asChild>
              <a href={APOIO_PONTUAL} target="_blank" rel="noopener noreferrer">
                <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                Doar uma vez
              </a>
            </Button>
            <Button size="lg" className="bg-background text-foreground border-2 border-foreground/15 hover:bg-background/70 shadow-lg" asChild>
              <a href={APOIO_MENSAL} target="_blank" rel="noopener noreferrer">
                <Repeat className="w-5 h-5 mr-2" aria-hidden="true" />
                Apoiar todo mês
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
