import { Card, CardContent } from "@/components/ui/card";

import { Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: "1",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      type: "usuário pelo android",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },

    {
      id: "2",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      type: "usuário pelo android",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },

    {
      id: "3",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      type: "usuário pelo android",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },

    {
      id: "4",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      type: "usuário pelo android",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },

    {
      id: "5",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      type: "usuário pelo android",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },

    {
      id: "6",
      name: "Marcela Jordana",
      occupation: "UX/UI Designer",
      type: "usuário pelo android",
      content:
        "As funcionalidades de personalização de pictogramas com certeza é o diferencial, além da genialidade do modo infantil ",
      stars: 5,
    },
  ];

  return (
    <div className="carrousel-container mx-auto w-full overflow-hidden py-16">
      <div className="mb-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary items-center">
          Depoimentos
        </h2>
        <p className="text-lg text-muted-foreground items-center p-5">
          Quem usa, indica
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView="auto"
        centeredSlides={true}
        initialSlide={0}
        loop
        navigation
        pagination={{ clickable: true }}
        style={
          {
            "--swiper-navigation-color": "#36B878",
            "--swiper-navigation-size": "20px",
            "--swiper-pagination-color": "#36B878",
          } as React.CSSProperties
        } // habilitar css nas propriedades do swiper
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        className="aSwiper !overflow-visible"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="!h-[337px] !w-[calc(100vw-2rem)] sm:!w-[596px]" // estipular tamanho maximo
          >
            <div className="flex h-full flex-col items-center px-4 pb-12 pt-8">
              <Card className="testimonial-card relative flex h-[249px] w-full items-center justify-center rounded-lg border-0 bg-[#F6FDFB] px-6 py-8 text-center shadow-md transition-transform duration-300 ease-out sm:w-[596px] sm:flex-none">
                <div className="absolute left-6 top-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-md bg-[#36B878] text-white shadow-md">
                  <Quote size={24} strokeWidth={2.5} className="fill-white" />
                </div>

                <CardContent className="relative flex h-full w-full flex-col items-center p-0">
                  <p className="flex flex-1 items-center pb-10 text-base leading-relaxed text-slate-700">
                    {testimonial.content}
                  </p>

                  <div className="absolute bottom-7 left-0 h-px w-full bg-[#B9E8D0]" />

                  <div
                    className="absolute bottom-0 left-0 flex items-center gap-1 text-[#F4B942]"
                    aria-label={`${testimonial.stars} estrelas`}
                  >
                    {Array.from({ length: testimonial.stars }, (_, index) => (
                      <span key={index} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="absolute bottom-0 right-0 text-right text-sm font-medium text-slate-500">
                    {testimonial.type}
                  </span>
                </CardContent>
              </Card>

              <p className="mt-4 text-center text-sm font-semibold text-slate-700">
                {testimonial.name}{" "}
                <span className="px-1 text-[#36B878]">|</span>{" "}
                {testimonial.occupation}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
