import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é o Papuguinho?",
      answer:
        "O Papuguinho é um aplicativo gratuito de Comunicação Aumentativa e Alternativa (CAA) desenvolvido para ajudar crianças com Transtorno do Espectro Autista (TEA) que possuem dificuldade de comunicação. O app funciona com pranchas de comunicação onde a criança clica em ícones que reproduzem sons de palavras, formando frases.",
    },
    {
      question: "O aplicativo é realmente gratuito?",
      answer:
        "Sim! O Papuguinho é 100% gratuito e foi desenvolvido por estudantes do Instituto Federal de São Paulo como projeto educacional, com o objetivo de tornar a comunicação mais acessível para todas as famílias.",
    },
    {
      question: "Para qual idade o aplicativo é recomendado?",
      answer:
        "O Papuguinho foi desenvolvido pensando principalmente em crianças entre 3 e 12 anos com TEA que apresentam dificuldades de comunicação verbal. No entanto, pode ser adaptado para diferentes idades e necessidades.",
    },
    {
      question: "Preciso de internet para usar o aplicativo?",
      answer:
        "Após o download inicial, o Papuguinho funciona offline. Todos os sons e recursos ficam disponíveis no dispositivo, permitindo o uso em qualquer lugar sem necessidade de conexão com a internet.",
    },
    {
      question: "Posso personalizar as pranchas de comunicação?",
      answer:
        "Sim! O aplicativo permite personalização das pranchas para adaptar às necessidades específicas de cada criança, incluindo a seleção de categorias e palavras mais relevantes para a rotina da família.",
    },
    {
      question: "O aplicativo substitui o acompanhamento profissional?",
      answer:
        "Não. O Papuguinho é uma ferramenta complementar que auxilia na comunicação do dia a dia. É importante continuar o acompanhamento com fonoaudiólogos, terapeutas e outros profissionais especializados em TEA.",
    },
    {
      question: "Em quais dispositivos posso usar o Papuguinho?",
      answer:
        "O aplicativo está disponível para smartphones e tablets Android e iOS, garantindo acesso para a maioria dos dispositivos móveis.",
    },
    {
      question: "Como posso contribuir ou dar feedback?",
      answer:
        "Adoraríamos ouvir sua experiência! Você pode enviar sugestões, relatar problemas ou compartilhar sua história através dos nossos canais de contato. Seu feedback é fundamental para melhorarmos continuamente o aplicativo.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Papuguinho
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
