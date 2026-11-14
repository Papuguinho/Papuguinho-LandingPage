import boasPraticasImage from "@/assets/gallery/awards/boaspraticasImage.jpg";
import incentivoRhImage from "@/assets/gallery/awards/icentivoRhImage.png";
import reditecImage from "@/assets/gallery/awards/reditecImage.jpg";

export type Award = {
  title: string;
  description: string;
  image: string;
};

export const awards: Award[] = [
  {
    title: "Prêmio Boas Práticas na Escola",
    description:
      "Conquistado em 2026, a premiação envolve ações pedagógicas, de gestão e de convivência que transformam o ambiente de ensino em um espaço inclusivo, seguro e colaborativo.",
    image: boasPraticasImage,
  },
  {
    title: " Prêmio de Incentivo à Pesquisa em Direitos Humanos ",
    description:
      "5° lugar em 2026, o reconhecimento consiste na importância de valorizar estudos, práticas e evidências voltadas para políticas públicas na área",
    image: incentivoRhImage,
  },
  {
    title: "Reditec",
    description:
      "Conquistado em 2026, a Reunião Anual dos Dirigentes das Instituições Federais de Educação Profissional, Científica e Tecnológica é o principal encontro de gestão da Rede Federal no Brasil.",
    image: reditecImage,
  },
];