import { Button } from "@/components/ui/button";
// .webp: 123 KB no lugar de 1,73 MB do .png — esta é a imagem de LCP da página.
import papuguinhoMascot from "@/assets/papuguinho-mascot.webp";
const Hero = () => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in-up space-y-6 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl font-semibold text-center">
              Dê voz a quem{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                mais precisa
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto lg:mx-0">
              Papuguinho é um sistema de Comunicação Aumentativa e Alternativa (CAA) 
              gratuito para crianças com Transtorno do Espectro Autista (TEA).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Mesmo mecanismo do "Download" do cabeçalho, que é o que funciona nesta
                  página. Já tentamos aqui: (1) preventDefault + scrollIntoView, que
                  engolia o clique; (2) âncora nativa <a href="#cta">, que também não
                  rolava. Botão + scrollIntoView é o caminho comprovado — se mudar,
                  teste no navegador, não só no build. */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all"
                onClick={() =>
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Baixar Grátis
              </Button>

              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5" onClick={() => document.getElementById("features")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Saiba Mais
              </Button>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="https://estudio.papuguinho.com" target="_blank" rel="noopener noreferrer">
                  Estúdio Papuguinho
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">Desenvolvido com ❤️ por estudantes do Instituto Federal de São Paulo -  Campus Jacareí </p>
          </div>
          <div className="relative flex justify-center">
            <div className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <img src={papuguinhoMascot} alt="Papuguinho — mascote do aplicativo de comunicação aumentativa e alternativa (CAA)" width="896" height="896" fetchPriority="high" className="relative w-full max-w-md animate-float drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Enfeites: vêm DEPOIS no DOM, então ficavam por cima dos botões e engoliam o
          clique (o de baixo cobria o "Baixar Grátis" inteiro). Decoração nunca pode
          receber ponteiro — daí o pointer-events-none e o aria-hidden. */}
      <div aria-hidden="true" className="pointer-events-none absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>;
};
export default Hero;