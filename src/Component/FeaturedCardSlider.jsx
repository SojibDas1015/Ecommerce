import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Navigation } from 'swiper/modules';
import FeaturedCard from './FeaturedCard';

export default function FeaturedSlider({ cards }) {
  return (
    <Swiper
      key={cards.length}
      spaceBetween={10}
      loop={true}
      navigation={true}
      speed={2000}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 7,
          spaceBetween: 12,
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 9,
          spaceBetween: 15,
        },
      }}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <FeaturedCard data={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
