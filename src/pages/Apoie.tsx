import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, HandHeart, Instagram, Megaphone, Repeat, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import { APOIO_MENSAL, APOIO_PONTUAL } from "@/lib/apoio";

/*
 * Página dedicada ao apoio. Existe para ter um link curto e limpo de divulgar
 * em entrevista, bio do Instagram ou rodapé de e-mail: papuguinho.com/apoie.
 *
 * O bloco principal é o MESMO componente da home (SupportSection), só que com
 * o título como <h1> — assim texto e links nunca saem de sincronia entre as
 * duas páginas.
 */

const destinos = [
  {
    titulo: "Servidores e banco de dados",
    texto:
      "O app na web, o Estúdio Papuguinho e as contas das famílias rodam em servidores que são cobrados por mês, com ou sem apoio.",
  },
  {
    titulo: "Síntese de voz",
    texto:
      "É o que faz o Papuguinho falar. Cada frase falada por uma criança tem um custo de processamento por trás.",
  },
  {
    titulo: "Publicação e manutenção",
    texto:
      "Conta de desenvolvedor na Google Play, domínios, correções de bugs e as atualizações que mantêm o app compatível com aparelhos novos.",
  },
  {
    titulo: "Novos recursos",
    texto:
      "O que sobra vira função nova: mais pictogramas, mais acessibilidade e melhorias pedidas por famílias e escolas.",
  },
];

const Apoie = () => {
  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = "Apoie o Papuguinho — ajude a manter o app gratuito no ar";

    const descricao = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const descricaoAnterior = descricao?.content;
    if (descricao) {
      descricao.content =
        "O Papuguinho é um app gratuito de Comunicação Aumentativa e Alternativa (CAA), sem anúncios e sem venda de dados. Apoie com uma doação única ou mensal e ajude a manter o projeto no ar.";
    }

    window.scrollTo(0, 0);

    return () => {
      document.title = tituloAnterior;
      if (descricao && descricaoAnterior !== undefined) descricao.content = descricaoAnterior;
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Compensa o cabeçalho fixo — sem isto o menu cobre o topo da seção. */}
      <div className="pt-20" />

      <SupportSection as="h1" />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Para onde vai o seu apoio</h2>
              <p className="text-lg text-muted-foreground">
                O Papuguinho é um projeto público, feito por estudantes do IFSP — Campus Jacareí.
                Ninguém tira lucro daqui: o apoio cobre custo e desenvolvimento.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {destinos.map((destino) => (
                <div key={destino.titulo} className="rounded-2xl border border-border bg-card p-6 space-y-2">
                  <h3 className="font-semibold text-foreground text-lg">{destino.titulo}</h3>
                  <p className="text-muted-foreground">{destino.texto}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={APOIO_PONTUAL} target="_blank" rel="noopener noreferrer">
                  <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                  Doar uma vez
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5" asChild>
                <a href={APOIO_MENSAL} target="_blank" rel="noopener noreferrer">
                  <Repeat className="w-5 h-5 mr-2" aria-hidden="true" />
                  Apoiar todo mês
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Não pode doar? Ajuda do mesmo jeito</h2>
              <p className="text-lg text-muted-foreground">
                Nem todo apoio é em dinheiro — e chegar em quem precisa vale tanto quanto.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-card border border-border p-6 space-y-3">
                <Megaphone className="w-7 h-7 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">Divulgue</h3>
                <p className="text-muted-foreground text-sm">
                  Mande o papuguinho.com para uma família, uma escola ou um profissional de fonoaudiologia.
                </p>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6 space-y-3">
                <Download className="w-7 h-7 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">Use e avalie</h3>
                <p className="text-muted-foreground text-sm">
                  Uma avaliação na Google Play faz o app aparecer para muito mais gente.
                </p>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6 space-y-3">
                <Instagram className="w-7 h-7 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">Siga e compartilhe</h3>
                <p className="text-muted-foreground text-sm">
                  No <a href="https://www.instagram.com/papuguinho" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@papuguinho</a> saem as novidades e os bastidores do projeto.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.mycompany.versao1appcaa" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                  Baixar grátis
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link to="/">
                  <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                  Voltar para a página inicial
                </Link>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <HandHeart className="w-4 h-4 text-primary" aria-hidden="true" />
              Obrigado por manter o Papuguinho gratuito para quem precisa.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Apoie;
