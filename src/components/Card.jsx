import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '/src/Card.css';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

import slider_image_1 from "/src/components/Assets/slider-image-1.png"
import slider_image_2 from "/src/components/Assets/slider-image-2.png"
import slider_image_3 from "/src/components/Assets/slider-image-3.png"
import slider_image_4 from "/src/components/Assets/slider-image-4.png"
import slider_image_5 from "/src/components/Assets/slider-image-5.png"

function Card() {
  return (
    <div className="card">
      <Swiper
        effect={'coverflow'}
        allowTouchMove={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        spaceBetween={-300}
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
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
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

        <div className="slider-controler">
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