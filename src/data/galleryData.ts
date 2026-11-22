import cadastroImage from "@/assets/gallery/cadastro.webp";
import pranchaPrincipalImage from "@/assets/gallery/pranchaPrincipal.webp";
import pranchasTematicasImage from "@/assets/gallery/pranchasTematicas.webp";
import historicoImage from "@/assets/gallery/historico.webp";
import rotinasImage from "@/assets/gallery/rotinas.webp";
import ModoInfantil from "@/assets/gallery/ModoInfantil.webp";

export type ScreenItem = {
  id?: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
};

export const galleryScreens: ScreenItem[] = [
  {
    id: "prancha-principal",
    title: "Prancha Geral",
    description:
      "A tela principal de comunicação do Papuguinho, reunindo os pictogramas mais frequentes",
    image: pranchaPrincipalImage,
    features: [
      "Grade intuitiva de pictogramas ARASAAC",
      "Síntese de voz com pronúncia clara das palavras",
      "Acesso direto a rotinas e expressões do cotidiano",
    ],
  },
  {
    id: "pranchas-tematicas",
    title: "Pranchas Temáticas",
    description:
      "Organização em categorias temáticas para enriquecer o vocabulário.",
    image: pranchasTematicasImage,
    features: [
      "Divisão por categorias (alimentos, ações, lugares)",
      "Possibilidade de criar novos temas personalizados",
      "Total personalização de todos os temas",
    ],
  },
   {
    id: "rotinas",
    title: "Rotinas",
    description:
      "Organização em categorias temáticas para dar previsibilidade ao cotidiano. ",
    image: rotinasImage,
    features: [
      "Divisão por tipos de rotinas",
      "Possibilidade de criar novas rotinas personalizadas",
      "Total personalização de todas as rotinas", 
    ],
  },
    {
    id: "cadastro",
    title: "Tela de Cadastro e Login",
    description:
      "Permite o cadastro e Login rápido e seguro dos usuários, garantindo acesso personalizado às pranchas e configurações do aplicativo.",
    image: cadastroImage,
    features: [
      "Cadastro simples com e-mail e senha ou por uma conta Google",
      "Segurança e privacidade dos dados salvos na nuvem",
    ],
  },
  {
    id: "historico",
    title: "Histórico de Comunicação",
    description:
      "Registra as frases e pranchas utilizadas recentemente, permitindo repetir expressões com facilidade e acompanhar a evolução do uso do app.",
    image: historicoImage,
    features: [
      "Acesso rápido às frases montadas recentemente",
      "Histórico cronológico de comunicações",
      "Agilidade no dia a dia com repetições comuns",
    ],
  },
   {
    id: "modo-infantil",
    title: "Modo Infantil",
    description:
      "Ao ser ativado, esse modo bloqueia a seção de Ajustes e trava a tela do dispositivo no aplicativo.",
    image: ModoInfantil,
    features: [
      "Torna o ambiente digital seguro para a criança",
      "Bloqueia notificações",
      "Ao ativar o Modo Infantil o responsável tem certeza de que a criança está dentro do Papuguinho",
    ],
  },
  /*
  COMO ADICIONAR UMA NOVA TELA:
  1. Adicione a imagem na pasta 'src/assets/gallery/nomeDaImagem.webp'
  2. Importe-a no topo deste arquivo:
     import novaImagem from "@/assets/gallery/nomeDaImagem.webp";
  3. Adicione o objeto abaixo nesta lista:
  {
    id: "nome-da-tela",
    title: "Nome da Tela",
    description: "Descrição da tela e de sua finalidade.",
    image: novaImagem,
    features: [
      "Recurso ou função 1",
      "Recurso ou função 2",
    ],
  },
  */
];
