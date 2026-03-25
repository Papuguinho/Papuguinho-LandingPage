import { Card } from "@/components/ui/card";
import ifsp from "@/assets/partners/ifsp.jpeg";
import arasaac from "@/assets/partners/arasaac.jpeg";
import mind from "@/assets/partners/mind.jpeg";
import prefeitura from "@/assets/partners/prefeitura.jpeg";
import secretaria from "@/assets/partners/secretaria.png";
import emei from "@/assets/partners/emei.jpeg";

const partners = [
{
  name: "IFSP - Campus Jacareí",
  description: "Base institucional do projeto, oferecendo fomento à pesquisa através de bolsas de Iniciação Científica e suporte laboratorial.",
  image: ifsp,
  link: ""
},
{
  name: "ARASAAC",
  description: "Fornecedor dos recursos gráficos e sistemas de comunicação aumentativa e alternativa (CAA) utilizados nas interfaces do projeto.",
  image: arasaac,
  link: ""
},
{
  name: "Grupo MIND",
  description: "Grupo de pesquisa do IFSP-Jacareí, certificado pelo CNPq. Tem o propósito de promover pesquisas que favoreçam a inclusão de todos os estudantes nos espaços escolares.",
  image: mind,
  link: "https://grupopesquisamind.github.io/site_mind/home.html"
},
{
  name: "Prefeitura de Jacareí",
  description: "Parceira institucional responsável pela viabilização e implementação do projeto na rede municipal de ensino, promovendo a inclusão e o uso de tecnologias assistivas nas escolas públicas.",
  image: prefeitura,
  link: ""
},
{
  name: "SECRETARIA MUNICIPAL DE EDUCAÇÃO DE JACAREÍ",
  description: "Órgão responsável pela articulação pedagógica e implementação do projeto nas salas de Atendimento Educacional Especializado (AEE), promovendo a formação de professores e o suporte direto aos alunos da rede municipal.",
  image: secretaria,
  link: ""
},
{
  name: "EMEI Thiago Silva Santos",
  description: "Escola-piloto e primeira unidade de ensino a receber o Papuguinho, desempenhando um papel fundamental na fase de testes, validação pedagógica e fornecimento de sugestões essenciais para o aprimoramento da ferramenta no cotidiano escolar.",
  image: emei,
  link: ""
}];


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
                className="max-h-full max-w-full object-contain" />
              
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-2 text-foreground text-center">{partner.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default Partners;