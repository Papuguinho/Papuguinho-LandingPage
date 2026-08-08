import { Card } from "@/components/ui/card";
import ifsp from "@/assets/partners/ifsp.webp";
import arasaac from "@/assets/partners/arasaac.webp";
import mind from "@/assets/partners/mind.webp";
import prefeitura from "@/assets/partners/prefeitura.webp";
import secretaria from "@/assets/partners/secretaria.webp";
import emei from "@/assets/partners/emei.webp";
import unifesp from "@/assets/partners/unifesp.webp";
import codeLab from "@/assets/partners/codeLab.webp";

const partners = [
  {
    name: "IFSP - Campus Jacareí",
    description: "Base institucional do projeto, oferecendo fomento à pesquisa através de bolsas de Iniciação Científica e suporte laboratorial.",
    image: ifsp,
    link: "https://jcr.ifsp.edu.br"
  },
  {
    name: "ICT-UNIFESP",
    description: "Instituição parceira no desenvolvimento acadêmico e tecnológico, contribuindo com pesquisa e inovação para o projeto.",
    image: unifesp,
    link: "https://campus.unifesp.br/sjc/"
  },
  {
    name: "CodeLab Unifesp",
    description: "Programa de extensão que reúne estudantes e docentes do ICT-Unifesp no desenvolvimento de softwares de código aberto e gratuito para solucionar problemas da comunidade e promover impacto social.",
    image: codeLab,
    link: "https://www.codelab-unifesp.org/"
  },
  {
    name: "ARASAAC",
    description: "Fornecedor dos recursos gráficos e sistemas de comunicação aumentativa e alternativa (CAA) utilizados nas interfaces do projeto.",
    image: arasaac,
    link: "https://arasaac.org/index.html"
  },
  {
    name: "Grupo MIND",
    description: "Grupo de pesquisa do IFSP-Jacareí, certificado pelo CNPq. Tem o propósito de promover pesquisas que favoreçam a inclusão de todos os estudantes nos espaços escolares.",
    image: mind,
    link: "https://grupopesquisamind.github.io/"
  },
  {
    name: "Prefeitura de Jacareí",
    description: "Parceira institucional responsável pela viabilização e implementação do projeto na rede municipal de ensino, promovendo a inclusão e o uso de tecnologias assistivas nas escolas públicas.",
    image: prefeitura,
    link: "https://www.jacarei.sp.gov.br/"
  },
  {
    name: "SECRETARIA MUNICIPAL DE EDUCAÇÃO DE JACAREÍ",
    description: "Órgão responsável pela articulação pedagógica e implementação do projeto nas salas de Atendimento Educacional Especializado (AEE), promovendo a formação de professores e o suporte direto aos alunos da rede municipal.",
    image: secretaria,
    link: "https://educajacarei.com.br/"
  },
  {
    name: "EMEI Thiago Silva Santos",
    description: "Escola-piloto e primeira unidade de ensino a receber o Papuguinho, desempenhando um papel fundamental na fase de testes, validação pedagógica e fornecimento de sugestões essenciais para o aprimoramento da ferramenta no cotidiano escolar.",
    image: emei,
    link: ""
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Parcerias</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as instituições que tornam o Papuguinho possível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) =>
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}>
            
              <div className="h-48 bg-background flex items-center justify-center p-6">
                <img
                src={partner.image}
                alt={partner.name}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain" />
              
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-2 text-foreground text-center">{partner.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    Visitar site
                  </a>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default Partners;