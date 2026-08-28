import { Github } from "lucide-react";
import italoImage from "@/assets/profile/italoImage.png";

export type SupporterLink = {
  label: string;
  url: string;
  icon: typeof Github;
};

export type Supporter = {
  name: string;
  role: string;
  description: string;
  initials: string;
  image?: string;
  links?: SupporterLink[];
};

export const supporters: Supporter[] = [
  {
    name: "Alexssandro Ferreira da Silva",
    role: "Suporte acadêmico e inclusivo",
    description:
      "Graduado em Administração (FADMINAS) e Análise e Desenvolvimento de Sistemas (IFSP), Pós Graduado em Gestão Pública Municipal e em Educação Empreendedora (UFSJ), Licenciatura em Pedagogia em andamento (UNIVESP), Mestrado em Ensino de Ciências (UNICAMP-SP). Fundador do Grupo MIND.",
    initials: "AS",
  },
  {
    name: "Ítalo Rafael",
    role: "Suporte midiático",
    description:
      "Técnico em Informática (IFSP-Jacareí), cursando Bacharelado Interdisciplinar em Ciência e Tecnologia (UNIFESP-São José dos Campos). Suporte na comunicação com meios de transmissão.",
    initials: "IR",
    image: italoImage
  },
  {
    name: "Ana Paula Kawabe de Lima Ferreira",
    role: "Suporte acadêmico e inclusivo",
    description:
      "Graduada em Licenciatura em Química (UNESP), Mestrado em Ciências (UFLA), Pós Graduação em Educação Especial e Inclusiva em andamento (UFABC), Doutorado em Ensino de Ciências em Andamento (UNICAMP-SP). Fundadora do Grupo MIND.",
    initials: "AF",
  },
];