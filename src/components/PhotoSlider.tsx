import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./photoSlider.css"
import 'swiper/css'; // Импортируем стили Swiper
import { Autoplay } from 'swiper/modules'



function PhotoSlider() {
  return (
    <Swiper
     className='swiper'
     direction='horizontal'
     modules={[Autoplay]}
     autoplay={{delay:3000, disableOnInteraction: false,}}
     loop={true}
    >
      <SwiperSlide className='slide' style={{ backgroundColor: 'red' }}><img src='/imgs/pexels-rahul-shah-1031588-e1607681437965.jpg' alt=''/></SwiperSlide>
      <SwiperSlide className='slide' style={{ backgroundColor: 'blue' }}><img src='/imgs/noutbuk_kniga_estetika_214147_1920x1080.jpg' alt=''/></SwiperSlide>
      <SwiperSlide className='slide' style={{ backgroundColor: 'orange' }}><img src='/imgs/ffa64ea991515c40856b0bbff84ed52a_w640.jpg' alt=''/></SwiperSlide>
    </Swiper>
  );
}

export default PhotoSlider;
