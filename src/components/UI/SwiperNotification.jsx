import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const SwiperNotification = () => {
  return (
    <div className="tag_line">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        className="swiper-notification"
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <h5>HELLO NIKE APP</h5>
          <span>Download the App for better experience</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>Download the App for better experience</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperNotification;
