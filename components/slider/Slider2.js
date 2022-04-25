import React, { useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

const Slider2 = () => {
    return (
        <>
            <Swiper
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination]}
            >

                <SwiperSlide>
                  <div className="flex flex-wrap mb-24">
                    <div className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                        <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                        <img className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top" src="/assets/imgs/placeholders/depoimento_sergio.png" alt="Monst" />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
                        <img src="/assets/imgs/icons/quote.svg" alt="Monst" className="wow animate__animated animate__fadeIn" data-wow-delay=".2s" />
                        <h2 className="my-4 text-2xl font font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">A maior importância do EasyPallet hoje é em relação a gestão das informações, a padronização das montagens, perde menos tempo em relação ao treinamento, a ferramenta é intuitiva, já mostra a forma como ele tem que montar o Palete, realmente foi o algoritmo, não achava que seria capaz de ter um sistema que formava camadas com os nossos produtos e ele consegue encaixar ali quase que tudo perfeitamente. Quando erra um pedido também não precisa correr atrás dele, a própria ferramenta já faz com que ele conserte aquilo na hora, dando um fluxo maior na operação</h2>
                        <p className="mb-1 text-lg">
                            <strong className="text-red-500 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Sérgio G. da Silva</strong>
                        </p>
                        <p className="text-red-500 wow animate__animated animate__fadeIn" data-wow-delay=".5s">Coordenador de Logística</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-wrap mb-24">
                    <div className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                        <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                        <img className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top" src="/assets/imgs/placeholders/depoimento_maria.jpg" alt="Monst" />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
                        <img src="/assets/imgs/icons/quote.svg" alt="Monst" className="wow animate__animated animate__fadeIn" data-wow-delay=".2s" />
                        <h2 className="my-4 text-2xl font font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">A maior importância do EasyPallet hoje é em relação a gestão das informações, a padronização das montagens, perde menos tempo em relação ao treinamento, a ferramenta é intuitiva, já mostra a forma como ele tem que montar o Palete, realmente foi o algoritmo, não achava que seria capaz de ter um sistema que formava camadas com os nossos produtos e ele consegue encaixar ali quase que tudo perfeitamente. Quando erra um pedido também não precisa correr atrás dele, a própria ferramenta já faz com que ele conserte aquilo na hora, dando um fluxo maior na operação</h2>
                        <p className="mb-1 text-lg">
                            <strong className="text-red-500 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Maria G. da Silva</strong>
                        </p>
                        <p className="text-red-500 wow animate__animated animate__fadeIn" data-wow-delay=".5s">Coordenador de Logística</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-wrap mb-24">
                    <div className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                        <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                        <img className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top" src="/assets/imgs/placeholders/depoimento_joana.jpg" alt="Monst" />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
                        <img src="/assets/imgs/icons/quote.svg" alt="Monst" className="wow animate__animated animate__fadeIn" data-wow-delay=".2s" />
                        <h2 className="my-4 text-2xl font font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">A maior importância do EasyPallet hoje é em relação a gestão das informações, a padronização das montagens, perde menos tempo em relação ao treinamento, a ferramenta é intuitiva, já mostra a forma como ele tem que montar o Palete, realmente foi o algoritmo, não achava que seria capaz de ter um sistema que formava camadas com os nossos produtos e ele consegue encaixar ali quase que tudo perfeitamente. Quando erra um pedido também não precisa correr atrás dele, a própria ferramenta já faz com que ele conserte aquilo na hora, dando um fluxo maior na operação</h2>
                        <p className="mb-1 text-lg">
                            <strong className="text-red-500 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Joana G. da Silva</strong>
                        </p>
                        <p className="text-red-500 wow animate__animated animate__fadeIn" data-wow-delay=".5s">Coordenador de Logística</p>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Slider2;