import { useState, useEffect } from "react";
import { Heart, Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import papuguinhoLogo from "@/assets/papuguinho-mascot.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // O cabeçalho também é usado fora da home (/apoie). Lá as seções não existem,
  // então rolar não adianta: tem que voltar para "/" com o #hash, que o
  // Index.tsx reposiciona depois de montar.
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Recursos", id: "features" },
    { label: "Galeria", id: "gallery" },
    { label: "Vídeos", id: "videos" },
    { label: "FAQ", id: "faq" },
    { label: "Parcerias", id: "partners" },
    { label: "Desenvolvedores", id: "developers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={papuguinhoLogo} alt="Papuguinho" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-primary font-display">Papuguinho</span>
        </Link>

        {/* Desktop Navigation (lg+) */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          {/* "Apoiar" era só mais um link de texto no meio dos outros oito e
              sumia. Vira botão âmbar: é a única coisa em âmbar no cabeçalho. */}
          <Button
            asChild
            size="sm"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md"
          >
            <Link to="/apoie">
              <Heart className="w-4 h-4 mr-1.5" aria-hidden="true" />
              Apoiar
            </Link>
          </Button>
          <Button onClick={() => scrollToSection("cta")} size="sm">
            Download
          </Button>
        </div>

        {/* Mobile/Tablet: o "Apoiar" fica FORA do menu sanduíche de propósito —
            escondido atrás de um ícone ninguém acha. */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            asChild
            size="sm"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md"
          >
            <Link to="/apoie">
              <Heart className="w-4 h-4 mr-1.5" aria-hidden="true" />
              Apoiar
            </Link>
          </Button>
          <button
            className="text-foreground p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Sheet Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-72 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <img src={papuguinhoLogo} alt="Papuguinho" className="h-8 w-8 object-contain" />
              Papuguinho
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 mt-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground/80 hover:text-primary hover:bg-accent transition-colors font-medium py-3 px-3 rounded-md"
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link to="/apoie" onClick={() => setIsMobileMenuOpen(false)}>
                <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                Apoiar o Papuguinho
              </Link>
            </Button>
            <Button onClick={() => scrollToSection("cta")} className="w-full">
              Download
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
