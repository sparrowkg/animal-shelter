import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Foto from "../../assets/pets1.png";
import Foto1 from "../../assets/pets2.png";
import Foto2 from "../../assets/pets3.png";
import Foto3 from "../../assets/pets4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const MainPage = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swipper-content">
          <div className="container main__slide">
            <h1>
              Приют для домашних животных
            </h1>
            <img src={Foto} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-content">
          <div className="container main__slide">
            <h1>Они наши лучшие друзья</h1>
            <img src={Foto1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-content">
          <div className="container main__slide">
            <h1>С ними жизнь веселей</h1>
            <img src={Foto2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-content">
          <div className="container main__slide">
            <h1> Присоединяйтесь к нам</h1>
            <img src={Foto3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
