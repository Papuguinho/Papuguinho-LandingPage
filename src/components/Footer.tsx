const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Papuguinho</h3>
            <p className="text-muted-foreground">
              Sistema de Comunicação Aumentativa e Alternativa para crianças com TEA.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links Úteis</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre o Projeto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Como Usar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Desenvolvimento</h4>
            <p className="text-muted-foreground">
              Desenvolvido com ❤️ por estudantes do{" "}
              <a 
                href="https://www.ifsp.edu.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Instituto Federal de São Paulo
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Papuguinho. Todos os direitos reservados. Projeto gratuito e de código aberto.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
