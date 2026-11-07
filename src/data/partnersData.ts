import ifsp from "@/assets/partners/ifsp.webp";
import mind from "@/assets/partners/mind.webp";
import secretaria from "@/assets/partners/secretaria.webp";
import emei from "@/assets/partners/emei.webp";
import unifesp from "@/assets/partners/unifesp.webp";
import codeLab from "@/assets/partners/codeLab.webp";
import easyTech from "@/assets/partners/easyTech.webp";

export type Partner = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export const partners: Partner[] = [
  {
    name: "IFSP - Campus Jacareí",
    description: "Base institucional do projeto, oferecendo fomento à pesquisa através de bolsas de Iniciação Científica e suporte laboratorial.",
    image: ifsp,
    link: "https://jcr.ifsp.edu.br",
  },
  {
    name: "ICT-UNIFESP",
    description: "Instituição parceira no desenvolvimento acadêmico e tecnológico, contribuindo com pesquisa e inovação para o projeto.",
    image: unifesp,
    link: "https://campus.unifesp.br/sjc/",
  },
  {
    name: "CodeLab Unifesp",
    description: "Programa de extensão que reúne estudantes e docentes do ICT-Unifesp no desenvolvimento de softwares de código aberto e gratuito para solucionar problemas da comunidade e promover impacto social.",
    image: codeLab,
    link: "https://www.codelab-unifesp.org/",
  },
  {
    name: "Grupo MIND",
    description: "Grupo de pesquisa do IFSP-Jacareí, certificado pelo CNPq. Tem o propósito de promover pesquisas que favoreçam a inclusão de todos os estudantes nos espaços escolares.",
    image: mind,
    link: "https://grupopesquisamind.github.io/site_mind/index.html",
  },
  {
    name: "SECRETARIA MUNICIPAL DE EDUCAÇÃO DE JACAREÍ",
    description: "Órgão responsável pela articulação pedagógica e implementação do projeto nas salas de Atendimento Educacional Especializado (AEE), promovendo a formação de professores e o suporte direto aos alunos da rede municipal.",
    image: secretaria,
    link: "https://educajacarei.com.br/",
  },
  {
    name: "EMEI Thiago Silva Santos",
    description: "Escola-piloto e primeira unidade de ensino a receber o Papuguinho, desempenhando um papel fundamental na fase de testes, validação pedagógica e fornecimento de sugestões essenciais para o aprimoramento da ferramenta no cotidiano escolar.",
    image: emei,
    link: "",
  },
  {
    name: "EasyTech",
    description: "Parceira estratégica no suporte tecnológico e na conexão do projeto com a comunidade de TI, impulsionando nossa visibilidade por meio de entrevistas em podcasts, testes de novos sistemas e espaço para palestras em seus eventos.",
    image: easyTech,
    link: "https://easytechpodcast.com.br/"
  }
];
