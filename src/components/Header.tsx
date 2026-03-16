import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import papuguinhoLogo from "@/assets/papuguinho-mascot.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
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
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img src={papuguinhoLogo} alt="Papuguinho" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-primary font-display">Papuguinho</span>
        </div>

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
          <Button onClick={() => scrollToSection("cta")} size="sm">
            Download
          </Button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile/Tablet Sheet Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-72">
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
            <Button onClick={() => scrollToSection("cta")} className="w-full mt-4">
              Download
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
