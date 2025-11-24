import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Comece a Usar Agora
          </h2>
          <p className="text-lg text-primary-foreground/90 md:text-xl">
            Baixe o Papuguinho gratuitamente e veja como a comunicação pode 
            transformar a vida da sua família.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar para Android
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar para iOS
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/90 mb-4">
              Tem dúvidas ou sugestões? Entre em contato!
            </p>
            <Button 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Mail className="w-5 h-5 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
