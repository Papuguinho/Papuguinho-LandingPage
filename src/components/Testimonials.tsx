import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: "1",
    occupation: "Mãe atípica",
    content:
      "A minha filha é muito rígida, ela precisa de uma previsibilidade de tudo. Achei muito bacana a facilidade de colocar as fotos reais, foto dela, dos locais, para preparar ela antes de ir para algum lugar.",
  },
  {
    id: "2",
    occupation: "Professora de educação especial",
    content:
      "Você tendo a imagem, ele já sabe o que vai acontecer e vai se programando para poder realizar. Isso não quer dizer que não vai ter crise, mas tendo essa previsibilidade já ajuda mais.",
  },
  {
    id: "3",
    occupation: "Mãe atípica",
    content:
      "Neste app podem ser criados pictogramas para auxiliar a comunicação. Aos desenvolvedores estudantes, agradeço a iniciativa e a preocupação em buscar o melhor para aqueles que têm dificuldade em se comunicar. Parabéns pela excelente iniciativa.",
  },
  {
    id: "4",
    occupation: "Usuário do Papuguinho",
    content:
      "Aplicativo excelente, funcional e a interface é bastante intuitiva!",
  },
  {
    id: "5",
    occupation: "Usuário do Papuguinho",
    content:
      "Excelente aplicativo de CAA, espero que se espalhe rapidamente, vai ajudar muitas crianças a se comunicar!",
  },
  {
    id: "6",
    occupation: "Usuário do Papuguinho",
    content: "Amei o app, interface intuitiva, 100% gratuito e sem anúncios.",
  },
];

const Testimonials = () => {
  return (
    <section className="mx-auto w-full overflow-hidden bg-[#F7FAF9] py-16 sm:py-20">
      <div className="mb-10 flex flex-col items-center justify-center text-center">
        <h2 className="mb-3 text-3xl font-bold text-[#36B878] sm:text-4xl">
          Depoimentos
        </h2>
        <p className="text-base text-slate-600 sm:text-lg">Quem usa, indica</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={28}
        slidesPerView="auto"
        centeredSlides={true}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        style={
          {
            "--swiper-navigation-color": "#36B878",
            "--swiper-navigation-size": "20px",
            "--swiper-pagination-color": "#36B878",
          } as React.CSSProperties
        }
        className="!overflow-visible px-2 sm:px-0"
      >
        {testimonials.map(({ id, occupation, content }) => (
          <SwiperSlide
            key={id}
            className="!h-auto !w-[calc(100vw-2rem)] sm:!w-[540px]"
          >
            <div className="flex h-full items-center justify-center px-1 py-4">
              <Card className="relative w-full max-w-[540px] overflow-visible rounded-[24px] border border-[#DDECE7] bg-[#F6FDFB] px-4 pb-8 pt-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:px-8 sm:pb-10">
                <div className="absolute left-6 top-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-[#36B878] text-white shadow-md">
                  <Quote size={24} strokeWidth={2.5} className="fill-white" />
                </div>

                <CardContent className="space-y-6 p-0">
                  <p className="text-base leading-7 text-slate-700 sm:text-lg">
                    {content}
                  </p>

                  <div className="h-px w-full bg-[#B9E8D0]" />

                  <div className="flex items-center justify-between gap-3 text-left">
                    <span className="text-sm font-semibold text-slate-700">
                      {occupation}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
