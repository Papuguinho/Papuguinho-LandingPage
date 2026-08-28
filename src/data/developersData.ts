import { Github, Linkedin, Globe, GraduationCap } from "lucide-react";
import  leonardoImage from "@/assets/profile/leonardoImage.jpeg";
import rannyImage from "@/assets/profile/rannyImage.jpeg";
import deniseImage from "@/assets/profile/deniseImage.jpeg";
import luizFelipeImage from "@/assets/profile/luizFelipeImage.jpeg";

export type DeveloperLink = {
  label: string;
  url: string;
  icon: typeof Github;
};

export type Developer = {
  name: string;
  role: string;
  description: string;
  initials: string;
  image?: string;
  links?: DeveloperLink[];
};

export const developers: Developer[] = [
  {
    name: "Gabriel de Paula Baroni",
    role: "Cofundador, Desenvolvedor de Software e Pesquisador",
    description:
      "Técnico em Informática e pesquisador (IFSP-Jacareí), cursando Bacharelado Interdisciplinar em Ciência e Tecnologia (UNIFESP-São José dos Campos). Responsável pelo desenvolvimento do software com arquitetura em Flutter e serviços do Firebase.",
    initials: "GB",
    image: "https://gabrielbaroni.vercel.app/assets/hero/eu.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/Gabriel-Baroni", icon: Github },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gabrieldpbaroni/", icon: Linkedin },
      { label: "Lattes", url: "https://lattes.cnpq.br/0153768116859752", icon: GraduationCap },
      { label: "Portfólio", url: "https://gabrielbaroni.vercel.app", icon: Globe },
    ],
  },
  {
    name: "Marcela Jordana Victoria Souza",
    role: "Cofundadora, Designer de Produto (UI/UX), Desenvolvedora Web, Pesquisadora",
    description:
      "Técnica em Informática e pesquisadora (IFSP-Jacareí), cursando farmácia (UNESP-Araraquara). Responsável pela elaboração do design do aplicativo (UX/UI), identidade visual e pelo desenvolvimento do site informativo.",
    initials: "MS",
    image: "https://github.com/marcela-vic938.png",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/marcela-jordana-victória-souza-011b2828b/", icon: Linkedin },
    ]
  },
  {
    name: "Manuela Antonelli",
    role: "Cofundadora, Desenvolvedora Web, Pesquisadora",
    description:
      "Cursando Análise e Desenvolvimento de Sistemas (IFSP-Jacareí) e Pedagogia e Educação (UNINTER). Responsável pelo desenvolvimento do site informativo, adaptações inclusivas e pedagógicas do aplicativo.",
    initials: "MA",
    image: "https://github.com/ManuelaAntonelli.png",
    links: [
      { label: "GitHub", url: "https://github.com/ManuelaAntonelli", icon: Github },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/manuela-antonelli-a997672ab/", icon: Linkedin },
      { label: "Lattes", url: "https://lattes.cnpq.br/1197160727366253", icon: GraduationCap }
    ]
  },
  {
    name: "Denise Stringhini",
    role: "Orientadora do Projeto",
    description:
    "Doutora  e Mestre em Ciência da Computação pela UFRGS, Professora (UNIFESP), Responsável pela orientação científica e coordenação da equipe.",
    initials: "DS",
    image: deniseImage,
  },

  {
    name: "José Antonio de Carvalho Neto",
    role: "Cofundador, Desenvolvedor de Software e Pesquisador",
    description:
      "Cursando Análise e Desenvolvimento de Sistemas (IFSP-Jacareí). Responsável pelo desenvolvimento do software com arquitetura em Flutter e serviços do Firebase.",
    initials: "JC",
    image: "https://github.com/joseantoniodecarvalhoneto.png",
    links: [
      { label: "GitHub", url: "https://github.com/joseantoniodecarvalhoneto", icon: Github },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jos%C3%A9-antonio-de-carvalho-neto/", icon: Linkedin },
      { label: "Lattes", url: "http://lattes.cnpq.br/8204205496019370", icon: GraduationCap }
    ]
  },

  {
    name: "Felipe Silva Mantuani",
    role: "Desenvolvedor de Software",
    description:
      "Técnico em Informática (IFSP-Jacareí), cursando Bacharelado Interdisciplinar em Ciência e Tecnologia (UNIFESP-São José dos Campos). Auxiliar no desenvolvimento do software.",
    initials: "FM",
    image: "https://github.com/Felipe-Mantuani.png",
    links: [
      { label: "GitHub", url: "https://github.com/Felipe-Mantuani", icon: Github },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/felipe-silva-mantuani-a7275a27a/", icon: Linkedin }
    ],
  },
  {
    name: "Leonardo Aleixo",
    role: "Desenvolvedor de Software",
    description: "Cursando Técnico em Informática (IFSP-Jacareí). Auxiliar no desenvolvimento do software.",
    image: leonardoImage,
    initials: "LA",
    links: [
      { label: "GitHub", url: "https://github.com/frellantudyi", icon: Github },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/leonardo-silva-0a59213a1/", icon: Linkedin }
    ]
  },
  {
    name: "Ranny Fabela",
    role: "Social Media & Marketing",
    description: "Cursando Análise e Desenvolvimento de Sistemas (IFSP-Jacareí). Auxiliar na comunicação & divulgação.",
    image: rannyImage,
    initials: "RF",
    links: [
      { label: "GitHub", url: "https://github.com/LealRanny", icon: Github },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ranny-fabela", icon: Linkedin }
    ]
  },
  {
    name: "Luiz Felipe Jesus Silva",
    role: "Designer UI/UX & Desenvolvedor de Software",
    description: "Cursando Bacharelado Interdisciplinar em Ciência e Tecnologia (UNIFESP-São José dos Campos). Auxiliar no desenvolvimento do software & design.",
    image: luizFelipeImage,
    initials: "LF",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/luiz-felipe-de-jesus/", icon: Linkedin }
    ]
  },
  {
    name: "Victor Anunciato",
    role: "Designer & ilustrador",
    description: "Cursando Bacharelado Interdisciplinar em Ciência e Tecnologia (UNIFESP-São José dos Campos). Auxiliar em ilustração e identidade visual.",
    initials: "VA",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGqEUDFAJ2DfA/profile-displayphoto-scale_400_400/B56ZpHEA6zI0Ag-/0/1762128827905?e=1788998400&v=beta&t=vQgVh5XRYnQaHoVBh3viVijWaQUkYD4XAPqUw92ando",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/victoranunciato/", icon: Linkedin }
    ]
  },
    {
    name: "Tardelli Ronan Coelho Stekel",
    role: "Cofundador e Orientador do Projeto",
    description:
      "Doutor em Geofísica Espacial (INPE), Professor e pesquisador (IFSP-Jacareí). Responsável pela criação do projeto, orientação científica e coordenação da equipe.",
    initials: "TS",
  }
];