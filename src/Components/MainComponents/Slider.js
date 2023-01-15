import React from "react";
// Import Swiper React components
import {   Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../swiperstyle.css";

// import required modules
import { Autoplay , Pagination } from "swiper";

export default function slider() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{backgroundImage :`url(${require('../../Images/s300.JPG')})`}}> </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage :`url(${require('../../Images/s2.jpg')})`}}> </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage :`url(${require('../../Images/s100.JPG')})`}}> </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage :`url(${require('../../Images/s5.jpg')})`}}> </div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  )
}
