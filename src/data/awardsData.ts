import boasPraticasImage from "@/assets/gallery/awards/boaspraticasImage.jpg";
import incentivoRhImage from "@/assets/gallery/awards/icentivoRhImage.png";
import reditecImage from "@/assets/gallery/awards/reditecImage.jpg";

export type Award = {
  title: string;
  image: string;
};

export const awards: Award[] = [
  {
    title: "Prêmio Boas Práticas na Escola",
    image: boasPraticasImage,
  },
  {
    title: "Prêmio de Incentivo à Pesquisa em Direitos Humanos",
    image: incentivoRhImage,
  },
  {
    title: "Reditec",
    image: reditecImage,
  },
];