import premioModernaImage from "@/assets/awards/premioModernaImage.webp";
import premioDireitosHumanosImage from "@/assets/awards/premioDireitosHumanosImage.webp";
import premioReditecImage from "@/assets/awards/premioReditectImage.webp";

export type Award = {
  title: string;
  image: string;
  description: string;
};

export const awards: Award[] = [
  {
    title: "Prêmio Boas Práticas na Escola",
    image: premioModernaImage,
    description:
      "Promovido pela Editora Moderna, reconhece, valoriza e dá visibilidade a práticas pedagógicas inovadoras e inclusivas desenvolvidas por professores e coordenadores pedagógicos das redes públicas de ensino de todo o Brasil.",
  },
  {
    title: "Prêmio de Incentivo à Pesquisa em Direitos Humanos",
    image: premioDireitosHumanosImage,
    description:
      "O Papuguinho foi contemplado com uma menção honrosa nessa iniciativa do MDHC em parceria com o CNPq, que reconhece pesquisas voltadas à promoção e defesa dos direitos humanos no Brasil.",
  },
  {
    title: "Reditec",
    image: premioReditecImage,
    description:
      "A premiação Experiências Exitosas da Reditec, promovida pelo Conif e pelo MEC, reconhece práticas de gestão, ensino, pesquisa e extensão da Rede Federal.",
  },
];