import { Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground font-display text-center">Papuguinho</h3>
            <p className="text-muted-foreground text-center">
              Sistema de Comunicação Aumentativa e Alternativa para crianças com TEA.
            </p>
          </div>


          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-center">Desenvolvimento</h4>
            <p className="text-muted-foreground text-center">
              Desenvolvido com ❤️ por estudantes do{" "}
              <a href="https://www.ifsp.edu.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-justify">Instituto Federal de São Paulo - Campus Jacareí</a>
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-center">Redes Sociais</h4>
            <div className="gap-4 flex items-start justify-center">
              <a
              href="https://www.instagram.com/papuguinho?igsh=MXFteGN3djV3emQ3OA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram">
              
                <Instagram size={20} />
              </a>
              <a
              href="https://www.linkedin.com/company/papuguinho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn">
              
                <Linkedin size={20} />
              </a>
              <a
              href="https://github.com/Papuguinho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub">
              
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground space-y-2">
          <p>© 2024 Papuguinho. Todos os direitos reservados. Projeto gratuito e de código aberto.</p>
          <Link to="/privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>;
};
export default Footer;