import { Button } from "@/components/ui/button";
import { Heart, Repeat, Server, ShieldCheck, GraduationCap } from "lucide-react";
import { APOIO_MENSAL, APOIO_PONTUAL } from "@/lib/apoio";

/*
 * A seção de apoio é a ÚNICA da página em âmbar (--gradient-accent). Todo o
 * resto do site é verde — foi de propósito: em rolagem rápida, o bloco precisa
 * ler como "isto aqui é outra coisa", e não como mais uma faixa do site.
 */

const motivos = [
  {
    icon: Server,
    titulo: "Servidores e vozes",
    texto: "Hospedagem do app, do Estúdio e a síntese de voz têm conta para pagar todo mês.",
  },
  {
    icon: ShieldCheck,
    titulo: "Sem anúncios, sem venda de dados",
    texto: "Nenhuma criança vira produto. Por isso o dinheiro precisa vir de quem apoia.",
  },
  {
    icon: GraduationCap,
    titulo: "Feito por estudantes",
    texto: "Projeto público do IFSP — Campus Jacareí. Apoio vira desenvolvimento, não lucro.",
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
      style={{ backgroundImage: "var(--gradient-accent)" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-background/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-background/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full bg-background/80 px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-sm">
            <Heart className="w-4 h-4 shrink-0 text-primary" aria-hidden="true" />
            {/* No celular a frase inteira quebra em duas linhas e empurra o
                coração para fora da pílula — abaixo de 640px vai a versão curta. */}
            <span className="sm:hidden">Gratuito e sem anúncios</span>
            <span className="hidden sm:inline">Gratuito, sem anúncios e sem venda de dados</span>
          </span>

          <div className="space-y-4">
            <Titulo className="text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Ajude a manter o Papuguinho no ar
            </Titulo>
            <p className="text-lg text-secondary-foreground/80 md:text-xl max-w-2xl mx-auto">
              O Papuguinho é gratuito e vai continuar sendo. Só que servidor, voz e
              manutenção têm custo todo mês — e quem paga essa conta é quem apoia.
              Qualquer valor mantém o aplicativo funcionando para outras famílias.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 text-left">
            {motivos.map((motivo) => (
              <div key={motivo.titulo} className="rounded-2xl bg-background/75 p-5 shadow-sm space-y-2">
                <motivo.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{motivo.titulo}</h3>
                <p className="text-sm text-muted-foreground">{motivo.texto}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 shadow-xl" asChild>
              <a href={APOIO_PONTUAL} target="_blank" rel="noopener noreferrer">
                <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                Doar uma vez
              </a>
            </Button>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-xl" asChild>
              <a href={APOIO_MENSAL} target="_blank" rel="noopener noreferrer">
                <Repeat className="w-5 h-5 mr-2" aria-hidden="true" />
                Apoiar todo mês
              </a>
            </Button>
          </div>

          <p className="text-sm text-secondary-foreground/70">
            Pagamento pelo APOIA.se — Pix, cartão ou boleto. Apoios a partir de R$ 1.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
