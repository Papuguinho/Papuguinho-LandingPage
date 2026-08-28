import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

/*
 * Botão flutuante de apoio.
 *
 * Por que flutuante e não uma tarja no topo: o cabeçalho é `fixed`, e o Hero
 * compensa isso com um padding-top fixo. Qualquer faixa acima do cabeçalho
 * empurraria o menu para cima do título. O botão flutuante fica sempre visível
 * sem participar do layout — em pico de acesso (reportagem, TV), a maioria não
 * rola a página até a seção de apoio.
 *
 * Só aparece depois de sair do topo para não brigar com os botões do Hero.
 */

const SupportFab = () => {
  const [passouDoTopo, setPassouDoTopo] = useState(false);
  const [secaoNaTela, setSecaoNaTela] = useState(false);

  useEffect(() => {
    const aoRolar = () => setPassouDoTopo(window.scrollY > 400);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Enquanto a própria seção de apoio está na tela o botão some: no celular ele
  // ficava exatamente por cima do texto dos cartões, e ali ele é redundante.
  useEffect(() => {
    const secao = document.getElementById("support");
    if (!secao) return;
    const observador = new IntersectionObserver(
      ([entrada]) => setSecaoNaTela(entrada.isIntersecting),
      { rootMargin: "-80px 0px -80px 0px" },
    );
    observador.observe(secao);
    return () => observador.disconnect();
  }, []);

  const visivel = passouDoTopo && !secaoNaTela;

  return (
    <Link
      to="/apoie"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-secondary px-5 py-3 font-semibold text-secondary-foreground shadow-2xl ring-2 ring-background transition-all duration-300 hover:scale-105 hover:bg-secondary/90 ${
        visivel ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <Heart className="w-5 h-5" aria-hidden="true" />
      Apoiar
    </Link>
  );
};

export default SupportFab;
