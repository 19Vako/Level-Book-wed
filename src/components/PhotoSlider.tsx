import React from 'react';

import 'swiper/css';
import './photoSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useAppSelector } from '../store/hooks';

function PhotoSlider() {
  const theme = useAppSelector((state) => state.Theme);

  return (
    <Swiper
      className="swiper"
      direction="horizontal"
      modules={[Autoplay]}
      autoplay={{ delay: 0 }}
      loop={true}
      speed={7000}
    >
      <SwiperSlide
        className="slide"
        style={{ filter: `brightness(${theme.blureSlide})` }}
      >
        <img src="/imgs/180626.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide
        className="slide"
        style={{ filter: `brightness(${theme.blureSlide})` }}
      >
        <img src="/imgs/630_360_1584094307-556.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide
        className="slide"
        style={{ filter: `brightness(${theme.blureSlide})` }}
      >
        <img src="/imgs/2knigi.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default PhotoSlider;
