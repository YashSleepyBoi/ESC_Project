import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '/src/Card.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slider_image_1 from "/src/components/Assets/slider-image-1.png"
import slider_image_2 from "/src/components/Assets/slider-image-2.png"
import slider_image_3 from "/src/components/Assets/slider-image-3.png"
import slider_image_4 from "/src/components/Assets/slider-image-4.png"
import slider_image_5 from "/src/components/Assets/slider-image-5.png"

function Card() {
  return (
    <div className="card">
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slider_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_5} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Card;