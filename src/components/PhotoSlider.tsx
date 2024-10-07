import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./photoSlider.css"
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import { useAppSelector } from '../store/hooks';



function PhotoSlider() {

  const theme = useAppSelector(state => state.Theme)

  return (
    <Swiper
     className='swiper'
     direction='horizontal'
     modules={[Autoplay]}
     autoplay={{delay:0}}
     loop={true}
     speed={7000}
    >
      <SwiperSlide className='slide' style={{filter: `brightness(${theme.blureSlide})`}} ><img src='/imgs/pexels-rahul-shah-1031588-e1607681437965.jpg' alt=''/></SwiperSlide>
      <SwiperSlide className='slide' style={{filter: `brightness(${theme.blureSlide})`}} ><img src='/imgs/noutbuk_kniga_estetika_214147_1920x1080.jpg' alt=''/></SwiperSlide>
      <SwiperSlide className='slide' style={{filter: `brightness(${theme.blureSlide})`}} ><img src='/imgs/ffa64ea991515c40856b0bbff84ed52a_w640.jpg' alt=''/></SwiperSlide>
    </Swiper>
  );
}

export default PhotoSlider;
