import React from "react";

import Story from './utils/Story';

import './utils/swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./utils/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper";

function Stories({ story: { title, news } }) {
  return (
    <div className='sm:m-[15px] md:m-[25px] lg:m-[30px] xl:m-[40px] mx-[80px] my-[100px]'>
      <h1 className='text-slate-900 font-bold mb-[20px] sm:text-2xl md:text-3xl lg:text-4xl text-5xl'>{title}</h1>
      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper select-none"
      >
        {
          news.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Story item={item} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Stories;