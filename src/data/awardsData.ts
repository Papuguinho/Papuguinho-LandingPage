import premioModernaImage from "@/assets/awards/premioModernaImage.webp";
import premioDireitosHumanosImage from "@/assets/awards/premioDireitosHumanosImage.webp";
import premioReditecImage from "@/assets/awards/premioReditectImage.webp";

export type Award = {
  title: string;
  image: string;
};

export const awards: Award[] = [
  {
    title: "Prêmio Boas Práticas na Escola",
    image: premioModernaImage,
  },
  {
    title: "Prêmio de Incentivo à Pesquisa em Direitos Humanos",
    image: premioDireitosHumanosImage,
  },
  {
    title: "Reditec",
    image: premioReditecImage,
  },
];